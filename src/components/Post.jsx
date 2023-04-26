import React from 'react'
import WidgetWrapper from './WidgetWrapper'
import FlexBetween from './FlexBetween'
import UserImage from './UserImage'
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { PersonAddOutlined, PersonRemoveOutlined } from "@mui/icons-material";
import {
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  ShareOutlined,
} from "@mui/icons-material";


const Post = ({
  postId,
  postUserId,
  name,
  description,
  location,
  picturePath,
  userPicturePath,
  likes,
  comments,
}) => {


  const { palette } = useTheme();
  const primaryLight = palette.primary.light;
  const primaryDark = palette.primary.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;
  const primary = palette.primary.main;
  
  return (
    <WidgetWrapper m="0rem 0">
      <FlexBetween padding="0rem 1rem 1rem 1rem">
        <FlexBetween gap="1rem">
          <UserImage image={userPicturePath} size="55px" />
          <Box>
            <Typography
              color={main}
              // variant="p"
              fontWeight="400"
              sx={{
                "&:hover": {
                  color: palette.primary.light,
                  cursor: "pointer",
                },
              }}
            >
              {name}
            </Typography>
            <Typography color={medium} fontSize="0.75rem">
              {location}
            </Typography>
          </Box>
        </FlexBetween>
        <IconButton sx={{ backgroundColor: primaryLight, p: "0.6rem" }}>
          <PersonAddOutlined sx={{ color: primaryDark }} />
        </IconButton>
      </FlexBetween>
      <img
          width="100%"
          height="auto"
          alt="post"
          style={{ borderRadius: "0rem", marginTop: "0.75rem", objectFit :"contain" }}
          src={picturePath}
        />
      <Typography color={main} sx={{ mt: "1rem", ml:"1rem", display:"flex" }}>
        <Typography sx={{fontWeight:"0"}}>{ name } &nbsp; </Typography>  {description}
      </Typography>
      <FlexBetween mt="0.25rem" ml="0.5rem" mr="0.5rem">
        <FlexBetween gap="0rem">
          <FlexBetween gap="0.3rem">
            <IconButton>
              {true ? (
                <FavoriteBorderOutlined />
              ) : (
                <FavoriteOutlined />
              )}
            </IconButton>
            {/* <Typography>{likes}</Typography> */}
          </FlexBetween>

          <FlexBetween gap="0.3rem">
            <IconButton>
              <ChatBubbleOutlineOutlined />
            </IconButton>
            {/* <Typography>{comments}</Typography> */}
          </FlexBetween>
        </FlexBetween>

        <IconButton>
          <ShareOutlined />
        </IconButton>
      </FlexBetween>
    </WidgetWrapper>
  )
}

export default Post
