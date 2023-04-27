import { Box, useTheme } from '@mui/material'
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BottomNav from '../components/BottomNav';


const Footer = () => {

  return (
    <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, height:"3.3rem" }}>
        <BottomNavigation>
            <BottomNav sx={{mt:"1px"}} label="Homepage" icon={<HomeIcon />} />
            <BottomNav transform="scale(1.4)" label="Search" icon={<SearchIcon />} />
            <BottomNav transform="scale(1.1)" icon={<OndemandVideoIcon />}/>
            <BottomNav transform = "scale(1.2)" label="Likes" icon={<FavoriteBorderIcon />} />
            <BottomNav sx={{mt:"1.4px"}} label="Profile" icon={<AccountCircleIcon />} />
        </BottomNavigation>
    </Box>
  )
}

export default Footer