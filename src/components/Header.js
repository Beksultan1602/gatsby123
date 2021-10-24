import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { menuData } from '../data/MenuData'
import { Button } from "./Button"

 

  function Header() {
 
    return (
      <Nav>
        <NavLink to='/'>EXPLORIX</NavLink>


        <NavMenu>
          {menuData.map((item, index) => (
            <NavLink to={item.link} key={index}>
              {item.title}
            </NavLink>
          ))}
        </NavMenu>
        
        <NavBtn>
          <Button primary='true' round='true' to='/trips'>Book a Flight</Button>
        </NavBtn>

       
      </Nav>

      
    )
  }



export default Header

const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display:flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
`

const NavLink = styled(Link)`
  color: #fff;
  display:flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height:100%;
  cursor:pointer;

  @media screen and (max-width:768px){
    display:none;
  }
`



const NavMenu = styled.div`
  display:flex;
  align-items:center;
  margin-right: -40px;

  @media screen and (max-width: 768px){
    display:none;
  }
`

const NavBtn = styled.div`
  display:flex;
  align-items:center;
  margin-right: 24px;

  @media screen and (max-width:768px) {
    display:none;
  }
`


