
import styles from "./nav.module.css"


import React from "react";
import {NavbarMenu,NavbarMenuToggle,Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import {Avatar} from "@nextui-org/react"
import { book, foto } from "../../assets";

export  const Nav=()=> {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className={styles.nav}
    >
      {/* <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent> */}

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          
          <p className="font-bold text-inherit">BookVerse</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
         
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
        <Avatar isBordered color="primary" src={book} />
        </NavbarItem>
      </NavbarContent>

      {/* <NavbarMenu className={styles.menu}>
        <h2>hola</h2>
      </NavbarMenu> */}
    </Navbar>
  );
}
