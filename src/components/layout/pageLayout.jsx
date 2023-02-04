import style from "@/components/layout/pageLayout.module.css"

export const PageLayout = ({children}) => {
  return (
    <main className={style.main}>
      {children}
    </main>
  )
}