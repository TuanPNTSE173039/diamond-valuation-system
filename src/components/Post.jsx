import React, { useEffect, useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { getAllPosts } from "../services/api.js"; // Assuming you have your API call in a separate file
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Divider from "@mui/material/Divider";

export const PostPage = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getAllPosts();
        setPosts(data.content);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(posts.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * postsPerPage;
  const selectedPosts = posts.slice(startIndex, startIndex + postsPerPage);

  return (
    <Box
      sx={{
        position: "relative",
        width: 1181,
        marginLeft: "100px",
      }}
    >
      {selectedPosts.map((post) => (
        <Box
          key={post.id}
          sx={{
            display: "flex",
            marginTop: 8,
            alignItems: "flex-start",
            gap: 2,
          }}
        >
          <Box
            component="img"
            sx={{
              width: 250,
              height: 160,
              flexShrink: 0,
            }}
            alt="Thumbnail"
            src={post.thumbnail}
          />
          <Box>
            <Typography
              sx={{
                fontWeight: "bold",
                color: "#171a1f",
                fontSize: 23,
                lineHeight: "25px",
              }}
            >
              {post.title}
            </Typography>
            <Typography
              sx={{
                color: "#171a1f",
                fontSize: "16px",
                marginTop: 1,
              }}
            >
              {post.content}
            </Typography>
            <Typography
              sx={{
                color: "#9095a0",
                fontSize: 13,
                marginTop: 1,
              }}
            >
              {new Date(post.creationDate).toLocaleDateString()} |{" "}
              {new Date(post.creationDate).toLocaleTimeString()}
            </Typography>
          </Box>
          <Divider />
        </Box>
      ))}
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
        <IconButton onClick={handlePrevPage} disabled={currentPage === 1}>
          <ArrowBackIcon />
        </IconButton>
        <Typography sx={{ marginX: 2, marginY: 2 }}>{currentPage}</Typography>
        <IconButton
          onClick={handleNextPage}
          disabled={currentPage >= Math.ceil(posts.length / postsPerPage)}
        >
          <ArrowForwardIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default PostPage;
