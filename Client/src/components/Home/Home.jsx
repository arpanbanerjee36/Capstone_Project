import { useEffect } from "react";
import { Box } from '@mui/material';
import Navbar from './Navbar';
import Banner from './Banner';
import Slide from "./slide";
import { styled } from '@mui/material/styles';
import { useDispatch } from "react-redux";
import { getProduct } from "../../services/Api";
import { useSelector } from "react-redux";
const Container = styled(Box)`
background-color: #f1f3f6;
padding:10px;
`;


const Home = () => {
  const dispatch = useDispatch();
  const { product } = useSelector(state => state.products.products);
  useEffect(() => {
    dispatch(getProduct());
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <Banner />
        <Slide title="DEALS OF THE DAY" timer={5.4e+7} data={product} />
        <Slide title='Discounts for You' timer={false} data={product} />
        <Slide title='Suggested Items' timer={false} data={product} />
        <Slide title='Top Selection' timer={false} data={product} />
      </Container>

    </>
  )
}

export default Home
