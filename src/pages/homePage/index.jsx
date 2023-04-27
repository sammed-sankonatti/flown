import { Box, useMediaQuery } from '@mui/material'
import React from 'react'
import Posts from '../postsPage'
import UserWidget from '../../widgets/UserWidget'
import FriendListWidget from '../../widgets/FriendListWidget'
import SponsoredAd from '../../widgets/SponsoredAd'
import Footer from '../../widgets/Footer'

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  return (
    <Box>
      <Box
        width="100%"
        // padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-evenly"
      >
        {
          isNonMobileScreens && (
            <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
              <UserWidget />
              <FriendListWidget />
            </Box>
          )
        }
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "0rem"}
        >
          <Posts />
        </Box>
        {
          isNonMobileScreens && (
            <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
              <SponsoredAd />
            </Box> 
          )
        }
      </Box>
    </Box>
  )
}

export default HomePage