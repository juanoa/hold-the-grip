import style from "@/styles/pages/routes/RoutePage.module.css";
import {Badge} from "theme-ui";

export const TagsSection = ({tags}) => {
  return (
    <section className={style.tagsSection}>
      {
        tags.map((tag, i) => <Badge key={i}>{tag.toUpperCase()}</Badge>)
      }
    </section>
  )
}