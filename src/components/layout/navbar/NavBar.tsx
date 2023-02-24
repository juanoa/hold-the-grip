import Link from "next/link";
import style from "./NavBar.module.css";
import { Button } from "@/components/UI/button/Button";

export const NavBar = () => {
  return (
    <nav className={style.navbar}>
      <Link href="/" className={style.navbar_logo}>
        HoldTheGrip
      </Link>
      <div className={style.navbar_menu}>
        <Link href="/routes" className={style.navbar_link}>
          Routes
        </Link>
        <Button label="Sign up" />
      </div>
    </nav>
  );
};
