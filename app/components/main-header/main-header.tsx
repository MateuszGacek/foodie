import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import classes from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logo} alt="logo with table of snacks" priority />
          Foodie
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/community">Community</NavLink>
            </li>
            <li>
              <NavLink href="/meals">Meals</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
