import style from "@/styles/pages/routes/RoutePage.module.css";

export const TagsSection = ({ tags }) => {
  return (
    <section className={style.tagsSection}>
      {tags.map((tag, i) => (
        <div key={i}>{tag.toUpperCase()}</div>
      ))}
    </section>
  );
};
