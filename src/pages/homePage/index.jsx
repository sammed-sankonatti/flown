import { Box, useMediaQuery } from '@mui/material'
import NavBar from '../../widgets/NavBar'
import React from 'react'
import Posts from '../postsPage'
import UserWidget from '../../widgets/UserWidget'
import FriendListWidget from '../../widgets/FriendListWidget'

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  return (
    <Box>
      <NavBar />
      <Box
        width="100%"
        // padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-evenly"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "0rem"}
        >
          <Posts />
        </Box>
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <FriendListWidget />
        </Box>
        
      </Box>
    </Box>
  )
}

export default HomePage