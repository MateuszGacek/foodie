import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import classes from "@/app/main-header.module.css";
import MainHeaderBackground from "./main-header-background";

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
              <Link href="meals">Meals</Link>
            </li>
            <li>
              <Link href="community">Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
