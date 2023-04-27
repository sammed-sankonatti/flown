import { Box, useTheme } from '@mui/material'
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BottomNav from '../components/BottomNav';
import { Link } from 'react-router-dom';


const Footer = () => {

  return (
    <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, height:"3rem" }}>
        <BottomNavigation>
            <Link to="/">
              <BottomNav sx={{mt:"1px"}} label="Homepage" icon={<HomeIcon />} />
            </Link>
            <BottomNav transform="scale(1.4)" label="Search" icon={<SearchIcon />} />
            <Link to="/sponsors">
              <BottomNav sx={{mt:"1rem"}} transform="scale(1.1)" icon={<OndemandVideoIcon />}/>
            </Link>
            <BottomNav transform = "scale(1.2)" label="Likes" icon={<FavoriteBorderIcon />} />
            <Link to="/profile">
              <BottomNav sx={{mt:"1.4px"}} label="Profile" icon={<AccountCircleIcon />} />
            </Link>
        </BottomNavigation>
    </Box>
  )
}

export default Footer