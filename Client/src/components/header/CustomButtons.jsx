import { Box, Button, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styled from '@emotion/styled';
import { memo, useState } from 'react';
import { useSelector } from "react-redux";
// components
import LoginDialog from '../login/LoginDialog';
import Profile from './Profile';

const Wraper = styled(Box)`
display:flex;
margin:'0 3% 0 auto';
align-items: center;
&>button,&>p{
    margin-right:40px;
    font-size:14px;
};
`;
const LoginButton = styled(Button)`
color: #2874f0;
background-color:#fff;
text-transform:none;
padding:5px 40px;
box-shadow:none;
font-weight:600;
&:hover{
    background-color:#fff;
}
`;


const CartButton = styled(Button)`
color:#fff;
`;


const CustomButtons = () => {
    const user = useSelector(state => state.user.user);
    

    const [open, setOpen] = useState(false)
    return (
        <Wraper>
            {
                user ?
                    <LoginButton ><Profile user={user} /></LoginButton>
                    : <LoginButton onClick={() => { setOpen(true) }} >
                        Log In</LoginButton>
            }
            <Typography style={{ cursor: "pointer" }}>Become a Seller</Typography>
            <Typography style={{ cursor: "pointer" }}>More</Typography>
            <CartButton startIcon={<ShoppingCartIcon />}>Cart</CartButton>
            <LoginDialog open={open} setOpen={setOpen} />
        </Wraper>
    )
}

export default memo(CustomButtons)
