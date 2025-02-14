import { Card, CardMedia, CardContent, Typography, IconButton, Box, Badge } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { useState } from "react";


export default function ProductCard({ prop }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card className="flex flex-col max-w-[250px] rounded-lg relative shadow-md border"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col bg-gray-100">
      {/* Discount Badge */}
      <span className="absolute ml-5 top-2 bg-red-600 text-white px-3 w-[50px] rounded-md text-sm">
        {prop.discount}
      </span>

      {/* Favorite & View Icons */}
      <Box className="absolute top-5 right-0 -mr-[10px] rotate-90">
        <IconButton className="bg-white m-2 text-xs px-2 py-1 -rotate-90">
          <FavoriteBorderIcon className="text-sm" />
        </IconButton>
        <IconButton className="bg-white m-2 text-xs px-2 py-1 rotate-90">
          <VisibilityIcon className="text-sm" />
        </IconButton>
      </Box>

      {/* Product Image */}
      <CardMedia
        component="img"
        image={prop.img} // Replace with actual image
        alt={prop.alt}
        sx={{ height: 140, objectFit: "contain", mt: 2 }}
      />

      {isHovered && (
        <div><button className="absolute bg-black w-full text-white p-1 rounded ">
          Add To Cart
        </button></div>
      )}
      </div>

      {/* Product Details */}
      <CardContent className="mt-[20px]">
        <Typography variant="body1" fontWeight={600}>
          {prop.title}
        </Typography>

        <Box className="flex items-center gap-1">
          <Typography variant="h6" color="error" fontWeight={600}>
            {prop.newprice}
          </Typography>
          <Typography variant="body2" className="line-through text-gray-500" >
            {prop.oldprice}
          </Typography>
        </Box>

        {/* Ratings */}
        <Stack spacing={1}>
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
        </Stack>
      </CardContent>
    </Card>
  );
}
