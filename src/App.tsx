import React from 'react';
import './App.css';
import styled from "styled-components";

function App() {
  return (
    <div className="App">
        <StyledBtn>Button</StyledBtn>
    </div>
  );
}

const StyledBtn = styled.button`
    background-color: #ff9c9c;
    border: none;
    padding: 10px 20px;
    font-size: 22px;
    border-radius: 5px;
    color: snow;
    font-weight: bold;
`

const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    
`


export default App;
