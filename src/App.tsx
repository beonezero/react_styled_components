import React from 'react';
import './App.css';
import styled from "styled-components";
import {StyledBtn, SuperButton} from "./components/Button.styled";
import {Link} from "./components/Link.styled";

function App() {
    return (
        <div className="App">
            <Menu>
                <ul>
                    <li><a href="#1">menu item 1</a></li>
                    <li><a href="#2">menu item 2</a></li>
                    <li><a href="#3">menu item 3</a></li>
                </ul>
            </Menu>
            <Box>
                <StyledBtn>Button</StyledBtn>
                <StyledBtn as={Link} href={"#"}>Button</StyledBtn>
                <SuperButton>Super button</SuperButton>
            </Box>
        </div>
    );
}

const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    gap: 20px;
    
    button {
        cursor: pointer;
    }
    ${Link} {
        cursor: zoom-in;
    }
`


export default App;
