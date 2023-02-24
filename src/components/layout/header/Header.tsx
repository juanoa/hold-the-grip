import style from "./Header.module.css";
import { Breadcrumb, Breadcrumbs } from "@/components/layout/header/Breadcrumb";
import React from "react";

interface Props {
  title: string;
  breadcrumbs?: Array<Breadcrumb>;
  component?: React.ReactNode;
}

export const Header = ({ title, breadcrumbs, component }: Props) => {
  return (
    <div className={style.header}>
      {breadcrumbs?.length > 0 && <Breadcrumbs breadcrumbs={breadcrumbs} />}
      <div className={style.main}>
        <h1 className={style.title}>{title}</h1>
        {component}
      </div>
    </div>
  );
};
