import { Box, useMediaQuery } from '@mui/material'
import NavBar from '../../components/NavBar'
import React from 'react'
import Posts from '../postsPage'

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
        justifyContent="center"
      >
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "0rem"}
        >
          <Posts />
        </Box>
      </Box>
    </Box>
  )
}

export default HomePage