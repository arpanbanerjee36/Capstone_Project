import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from './components/Home/Home';
import { Box } from '@mui/material';

import DeatailsView from "./components/Deatails/DeatailsView";

const App = () => {


  return (
    <BrowserRouter>

      <Header />
      <Box style={{ "marginTop": "56px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<DeatailsView />} />


        </Routes>

      </Box>
    </BrowserRouter>


  )
}

export default App
