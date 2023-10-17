import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
// import Sidebar from "./Sidebar";
// import { SidebarData } from "./SidebarData";

const SidebarLink = styled.div`
  display: flex;
  color: white;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background: var(--secondary-color);
    border-left: 4px solid var(--secondary-color);
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled.div`
  background: #1a1b1b;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  font-size: 18px;
  &:hover {
    background: #292929;
    cursor: pointer;
  }
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);
  return (
    <>
      <Link href={item.path}>
        <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
          <div>
            {item.icon}
            <SidebarLabel>{item.title}</SidebarLabel>
          </div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </SidebarLink>
      </Link>
      {subnav && item.subNav.map((item, index) => {
        return (
          <Link key={index} href={item.path}>
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              <SidebarLabel>
                {item.title}
              </SidebarLabel>
            </DropdownLink>
          </Link>
        )
      })}
    </>
  );
};

export default SubMenu;