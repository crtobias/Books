// import { useState } from "react";
import styles from "./nav.module.css"

// export const Nav = () => {

//   const [modoNav, setModoNav] = useState(true);
//   const toggleModo = () => {
//     setModoNav((prevState) => !prevState); // Cambia el estado entre verdadero y falso (modo claro y oscuro)
//   };



//   return (
  
//     <section className={styles.navcontainer}>


//       <div className={styles.navmobile}>
        
//         <h2 className={styles.navmobileboton} onClick={toggleModo}></h2>

//         <div className={`${styles.navmobileInicial} ${modoNav ? styles.navmobileInicial : styles.modoActivo}`}>
//           <h2 className={styles.navmobilebotonCerrar} onClick={toggleModo}></h2>
//           <div className={styles.navmobilebutons}>
//             <p>Libros</p> <br />
//             <p>Home</p> <br />
//             <p>Favoritos</p> <br />
//           </div>
//         </div>

//       </div>




//       <div className={styles.navdesktop}>
//         <p>Libros</p>
//         <p>Home</p>
//         <p>Favoritos</p>
//       </div>



//     </section>
//   )
// }

import React from "react";
import {NavbarMenu,NavbarMenuToggle,Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";


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
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          
          <p className="font-bold text-inherit">ACME</p>
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
          <Button as={Link} color="warning" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className={styles.menu}>
        <h2>hola</h2>
      </NavbarMenu>
    </Navbar>
  );
}
