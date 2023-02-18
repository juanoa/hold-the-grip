import { Button, NavLink } from "theme-ui";
import Link from "next/link";
import style from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <nav className={style.navbar}>
      <div className={style.navbar_left}>
        <Link href="/">
          <NavLink className={style.navbar_logo}>Hold The Grip</NavLink>
        </Link>
        <Link href="/routes">Routes</Link>
      </div>
      <Button className={style.navbar_cta}>Get Started</Button>
    </nav>
  );
};
