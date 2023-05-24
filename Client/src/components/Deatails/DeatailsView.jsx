import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { productDetails } from "../../services/Api";
import { Box } from "@mui/material";

const DeatailsView = () => {

    const dispatch = useDispatch()
    const { id } = useParams();
    const { loading, product } = useSelector((state) => state.product.product);
    useEffect(() => {
        dispatch(productDetails(id))
    }, [dispatch, id])

    return (
        <Box>
            <Box>

            </Box>
            <Box></Box>
        </Box>
    )
}

export default DeatailsView
