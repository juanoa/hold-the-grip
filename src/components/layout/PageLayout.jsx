import style from "@/components/layout/PageLayout.module.css"

export const PageLayout = ({children}) => {
  return (
    <main className={style.main}>
      {children}
    </main>
  )
}