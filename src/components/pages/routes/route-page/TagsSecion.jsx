import style from "@/styles/pages/routes/RoutePage.module.css";

export const TagsSecion = ({tags}) => {
  return (
    <section className={style.tagsSection}>
      {
        tags.map((tag, i) => <span key={i}>{tag} </span>)
      }
    </section>
  )
}