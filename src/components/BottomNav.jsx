import {styled} from '@mui/system';
import { BottomNavigationAction } from '@mui/material';

const BottomNav = styled(BottomNavigationAction)(({theme})=>({
    color : theme.palette.neutral.dark,
    transform : "scale(1.2)"
}))

export default BottomNav