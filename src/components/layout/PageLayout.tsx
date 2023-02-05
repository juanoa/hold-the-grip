import style from "@/components/layout/PageLayout.module.css"
import {NavBar} from "@/components/layout/NavBar";

export const PageLayout = ({children}) => {
  return (
    <>
      <NavBar />
      <main className={style.main}>
        {children}
      </main>
    </>
  )
}