import styled from "styled-components";

export const Menu = styled.nav`
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        li > a {
            text-decoration: none;
        }
    }
    li + li {
        margin-right: 30px;
    }
`