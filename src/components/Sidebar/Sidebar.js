import React, { useState } from "react";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from './SubMenu'
import { IconContext } from "react-icons/lib";


const Nav = styled.div`
  background: var(--secondary-color-dark);
  opacity: 0.8;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

`;
  
const NavIcon = styled.div`
margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  cursor: pointer;
  justify-content: flex-start;
  align-items: center;

`;

const SidebarNav = styled.nav`
  background: var(--secondary-color-dark);;
  width: 270px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar}) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`

const Sidebar = () => {
  
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
    <IconContext.Provider value={{color: 'white'}}>
      <Nav>
        <NavIcon to="#">
          <FaIcons.FaBars onClick={showSidebar} />
        </NavIcon>
      </Nav>
      <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
          <NavIcon to="#">
            <AiIcons.AiOutlineClose onClick={showSidebar} />
          </NavIcon>
          {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
        </SidebarWrap>
      </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;