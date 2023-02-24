import style from "./Button.module.css";

interface Props {
  label: string;
}
export const Button = ({ label }: Props) => {
  return <button className={style.button}>{label}</button>;
};
