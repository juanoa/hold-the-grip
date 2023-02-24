import style from "./Breadcrumbs.module.css";

export type Breadcrumb = {
  title: string;
  path: string;
};

interface Props {
  breadcrumbs: Array<Breadcrumb>;
}

export const Breadcrumbs = ({ breadcrumbs }: Props) => {
  return (
    <div className={style.breadcrumbs}>
      {breadcrumbs.map((breadcrumb) => (
        <span className={style.breadcrumbItem} key={breadcrumb.path}>
          {breadcrumb.title}
        </span>
      ))}
    </div>
  );
};
