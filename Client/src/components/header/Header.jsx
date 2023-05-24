
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import Search from './Search';
import CustomButtons from './CustomButtons';
import { memo } from 'react';
import { Link } from 'react-router-dom';

const CustomizedAppBar = styled(AppBar)`
 background:#2874f0;
 height:55px;`;
const Component = styled(Box)`
 margin-left:12%;
 line-height:0;

 `;
const SubHeading = styled(Typography)`
 font-size:10px;
 font-style:itlic;
 &:hover{
    text-decoration:underline;
 }`;
const PlusImage = styled('img')({
    width: "10px",
    height: "10px",
    marginLeft: "4px",

})

const Header = () => {
    const logoURl = 'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    return (
        <CustomizedAppBar>
            <Toolbar style={{ "minHeight": "55px", }}>
                <Component style={{ cursor: "pointer" }}>
                    <Link to="/">
                        <img src={logoURl} style={{
                            width: 75,

                        }} />
                    </Link>
                    <Box style={{ display: "flex" }}>
                        <SubHeading >
                            Explore <Box component={"span"} style={{ color: '#FFE500', }}>plus</Box>
                        </SubHeading>
                        <PlusImage src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" alt='Sub-Logo' />
                    </Box>
                </Component>
                <Search />
                <Box style={{
                    "marginLeft": "30px"
                }} >
                    <CustomButtons />
                </Box>


            </Toolbar>
        </CustomizedAppBar>


    )
}

export default memo(Header)
