import { Box, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material'
import WidgetWrapper from '../components/WidgetWrapper'
import React from 'react'
import FlexBetween from '../components/FlexBetween'
import { PersonAddOutlined, PersonRemoveOutlined } from "@mui/icons-material";
import UserImage from '../components/UserImage';



const friends = [
    {
        username : 'Shreyank jain',
        city : 'San Francisco',
        profilePic : "https://c4.wallpaperflare.com/wallpaper/247/977/121/digital-digital-art-artwork-night-city-hd-wallpaper-preview.jpg"
    },
    {
        username : 'Amit N',
        city : 'London',
        profilePic : "https://c4.wallpaperflare.com/wallpaper/301/256/1013/dubai-city-lights-8k-uae-wallpaper-preview.jpg"
    },
    {
        username : 'Sourabh G',
        city : 'New York',
        profilePic : "https://c4.wallpaperflare.com/wallpaper/985/136/886/building-lights-illustration-romain-trystram-cityscape-hd-wallpaper-preview.jpg"
    },
    {
        username : 'Jayghosh H',
        city : 'Tokyo',
        profilePic : "https://c4.wallpaperflare.com/wallpaper/39/346/426/digital-art-men-city-futuristic-night-hd-wallpaper-preview.jpg"
    },
    {
        username : 'Mallu H',
        city : 'Boston',
        profilePic : "https://c4.wallpaperflare.com/wallpaper/246/739/689/digital-digital-art-artwork-illustration-abstract-hd-wallpaper-thumb.jpg"
    },
    {
        username : 'Shubham ',
        city : 'Toronto',
        profilePic : "https://c4.wallpaperflare.com/wallpaper/368/492/901/burj-khalifa-dubai-city-cityscape-wallpaper-thumb.jpg"
    },
    {
        username : 'Naga L',
        city : 'chicago',
        profilePic : "https://c4.wallpaperflare.com/wallpaper/523/344/860/digital-digital-art-artwork-photoshop-photomontage-hd-wallpaper-thumb.jpg"
    }
]


const FriendListWidget = () => {

    const { palette } = useTheme();
    const primaryLight = palette.primary.light;
    const primaryDark = palette.primary.dark;
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  return (
    <WidgetWrapper borderRadius= "0.75rem" sx={{padding : "1.5rem 1.5rem 0.75rem 1.5rem" }} m={isNonMobileScreens ? "1rem 0" : "0"} >
        <Typography
            color={palette.neutral.dark}
            variant="h5"
            fontWeight="500"
            sx={{ mb: "1.5rem" }}
        >
            Suggested Friends
        </Typography>
        <Box display="flex" flexDirection="column" gap="1.5rem">
            {
                friends.map((friend,i)=> (
                    <FlexBetween key={i}>
                        <FlexBetween gap="1rem">
                            <Box position="relative">
                                <UserImage image={friend.profilePic} size="55px" />
                                {/* <div style={{width:"15px", height:"15px", position:"absolute", background:"green", borderRadius:"50%", right:"0px", top:"3px"}}/> */}
                            </Box>
                            <Box>
                                <Typography color={main} variant="h5" fontWeight="500">
                                {friend.username}
                                </Typography>
                                <Typography color={medium} fontSize="0.75rem">
                                {friend.city}
                                </Typography>
                            </Box>
                        </FlexBetween>
                        <IconButton sx={{ backgroundColor: primaryLight, p: "0.6rem" }}>
                            <PersonAddOutlined sx={{ color: primaryDark }} />
                        </IconButton>
                    </FlexBetween>
                ))
            }
        </Box>
    </WidgetWrapper>
  )
}

export default FriendListWidget