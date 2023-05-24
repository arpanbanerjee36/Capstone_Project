import styled from '@emotion/styled';
import { Box, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { memo } from 'react';


const SearchContainer = styled(Box)`
background-color:lightgoldenrodyellow;
width:34%;
border-radius:4px;
margin-left:10px;
display:flex;`;
const SearchIconWrapper = styled(Box)`
  color:blue;
  padding-top:7px;
  padding-right:7px;
  background:lightgoldenrodyellow;
  border-radius:4px;`;



const InputBaseSearchBase = styled(InputBase)`
padding-left:20px;
width:100%;`;

const Search = () => {
    return (
        <SearchContainer>
            <InputBaseSearchBase placeholder='Search for products, brands and more' />
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
        </SearchContainer>

    )
}

export default memo(Search)
