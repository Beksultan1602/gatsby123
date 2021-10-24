import styled from "styled-components";
import { Link } from 'gatsby'

export const Buttons = styled(Link)`
    background:${({primary}) => (primary ? '#F26A2E' : '#077BF1')};
    white-space:nowrap;
    padding:${({ big }) => (big ? '16px 40px' : '10px 32px')};
    color: #fff;
    
    outline:none;
    border:none;
    min-width:100px;
    cursor:pointer;
    text-decoration:none;
    transition:0.3s !important;
    border-radius:${({ round }) => (round ? '50px' : 'none')};
    position: absolute;
    top:420px;
    font-size:14px;

    &:hover {
        background:${({primary}) => (primary ? '#077BF1' : 'F26A2E')};
        transform:translateY(-2px)''
    }
`