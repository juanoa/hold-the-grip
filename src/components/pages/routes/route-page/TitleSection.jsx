import React from 'react';
import style from "@/styles/pages/routes/RoutePage.module.css";
import {Heading} from "theme-ui";
import {GradeBadge} from "@/components/routes/grade/GradeBadge";

export const TitleSection = ({route}) => {
  return (
    <section className={style.titleSection}>
      <div>
        <span className={style.region}>{route.region}</span>
        <div className={style.nameAndGrade}>
          <Heading as="h1">{route.name}</Heading>
          <GradeBadge grade={route.grade} />
        </div>
      </div>
      <span>❤️</span>
    </section>
  );
};