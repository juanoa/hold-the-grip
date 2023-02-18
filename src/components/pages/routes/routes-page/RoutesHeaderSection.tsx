import { Button } from "theme-ui";
import style from "./RoutesHeaderSection.module.css";
import Link from "next/link";

export const RoutesHeaderSection = () => {
  return (
    <section className={style.RoutesHeaderSection}>
      <h1>Routes</h1>
      <Link href="/routes/create">
        <Button variant="outline">Create</Button>
      </Link>
    </section>
  );
};
