import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";
import { getBlogById } from "../../services/api";
import UICircularIndeterminate from "../UI/CircularIndeterminate.jsx";

const BlogDetail = () => {
  const { blogID } = useParams();
  console.log(blogID);
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const data = await getBlogById(blogID);
        setBlog(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    fetchBlog();
  }, [blogID]);

  if (loading) {
    return <UICircularIndeterminate />;
  }

  if (!blog) {
    return <Typography variant="h5">blog not found</Typography>;
  }

  return (
    <Container
      sx={{
        margin: "20px auto",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "center",
        justifyContent: "center",
        width: "80",
      }}
    >
      <Typography variant="h3" component="h1" gutterBottom>
        {blog.title}
      </Typography>
      <Box
        component="img"
        sx={{
          width: 500,
          height: 260,
          flexShrink: 0,
        }}
        alt="Thumbnail"
        src={blog.thumbnail}
      />
      <Typography variant="body1">{blog.content}</Typography>
    </Container>
  );
};

export default BlogDetail;
