import {useState} from 'react';
import {Box, ImageList, ImageListItem} from '@mui/material';

const ImageGallery = ({images}) => {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <Box display="flex" flexDirection="row" >
            <ImageList sx={{
                width: 150,
                height: 500,
            }} cols={1}
                       gap={10}>
                {images.map((item) => (
                    <ImageListItem key={item.img} onClick={() => setSelectedImage(item)}>
                        <img
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                            style={{border: '1px solid black',
                                height: '100px',}}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
            <Box sx={{ml: 2}}>
                <img
                    src={selectedImage.img}
                    alt={selectedImage.title}
                    style={{width: '500px', height: '500px',
                        border: '1px solid black'}}
                />
            </Box>
        </Box>
    );
}

export default ImageGallery;