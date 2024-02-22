import styled from "styled-components";

export const StyledBtn = styled.button`
    background-color: #ff9c9c;
    border: none;
    padding: 10px 20px;
    font-size: 22px;
    border-radius: 5px;
    color: snow;
    font-weight: bold;

    &:hover {
        background-color: #d9b600;
    }

    &:last-child {
        background-color: rgba(169, 99, 252, 0.5);
    }
`

export const SuperButton = styled(StyledBtn)`
    background-color: greenyellow;
`