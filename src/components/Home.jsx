import { Heading, Input, Button, Checkbox, Box } from "@chakra-ui/react";

import React, { useEffect, useState } from "react";


const Home = () => {
    return (
        <Box style={{
            background: 'radial-gradient(circle at center bottom, #1d665c, #1d252c 40%)',
            height: '100vh',
            width: '100vw',
            // position:"absolute",
            
            color:"white"
        }}>
            <Box  style={{marginTop:"80px", position:"absolute"}}>
            <h1 >Home pages</h1>
            </Box>
        </Box>
    );
};
export default Home;
