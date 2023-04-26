import {
  ManageAccountsOutlined,
  EditOutlined,
  LocationOnOutlined,
  WorkOutlineOutlined,
} from "@mui/icons-material";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, Typography, Divider, useTheme, IconButton, useMediaQuery } from "@mui/material";
import UserImage from "../components/UserImage";
import FlexBetween from "../components/FlexBetween";
import WidgetWrapper from "../components/WidgetWrapper";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserWidget = () => {

    const { palette } = useTheme();
    const navigate = useNavigate();
    const dark = palette.neutral.dark;
    const medium = palette.neutral.medium;
    const main = palette.neutral.main;

    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  return (
    <WidgetWrapper borderRadius= "0.75rem" sx={{padding : "1.5rem 1.5rem 0.75rem 1.5rem" }} m={isNonMobileScreens ? "1rem 0" : "0"} >
        <FlexBetween gap="0.5rem" pb="1rem">
            <FlexBetween gap="1rem">
                <UserImage image="https://cdn.pixabay.com/photo/2015/09/22/01/30/lights-951000_960_720.jpg" />
                <Box>
                    <Typography
                      variant="h4"
                      color={dark}
                      fontWeight="500"    
                    >
                      sammed sankonatti
                    </Typography>
                    <Typography color={medium} >Bangalore</Typography>
                </Box>
            </FlexBetween>
            <ManageAccountsOutlined />
        </FlexBetween>
        <Divider />
        <Box p="1rem 0">
            <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
                <LocationOnOutlined fontSize="large" sx={{ color: main }}/>
                <Typography color={medium}> Bangalore</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap="1rem">
                <WorkOutlineOutlined fontSize="large" sx={{ color: main }} />
                <Typography color={medium}>Software Developer </Typography>
            </Box>
        </Box>
        <Divider />
        <Box p="1rem 0">
            <FlexBetween mb="0.5rem">
                <Typography color={medium}>your profile views</Typography>
                <Typography color={main} fontWeight="500"> 500</Typography>
            </FlexBetween>
            <FlexBetween>
                <Typography color={medium}>profile Impressions</Typography>
                <Typography color={main}fontWeight="500"> 256</Typography>
            </FlexBetween>
        </Box>
        <Divider />
        <Box p="1rem 0">
            <Typography color={main} fontWeight="500" mb="1rem">Social Profiles</Typography>
            <FlexBetween gap="1rem">
                <FlexBetween gap="1rem">
                    <IconButton onClick={()=> window.open("https://www.instagram.com/sammed.sankonatti/", "_blank")}>
                      <InstagramIcon />
                    </IconButton>
                    <Box>
                        <Typography color={main} fontWeight="500"> Instagram</Typography>
                        <Typography color={medium}>social platform</Typography>
                    </Box>
                </FlexBetween>
                <EditOutlined sx={{ color: main }} />
            </FlexBetween>
            <FlexBetween gap="1rem">
                <FlexBetween gap="1rem">
                    <IconButton>
                        <LinkedInIcon />
                    </IconButton>
                    <Box>
                        <Typography color={main} fontWeight="500"> Linked in</Typography>
                        <Typography color={medium}>professional platform</Typography>
                    </Box>
                </FlexBetween>
                <EditOutlined sx={{ color: main }} />
            </FlexBetween>
        </Box>
    </WidgetWrapper>
  )
}

export default UserWidget