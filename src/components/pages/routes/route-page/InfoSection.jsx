import style from "@/styles/pages/routes/RoutePage.module.css";

export const InfoSection = ({route}) => {
  return (
    <section className={style.infoSection}>
      <div>
        {
          route.images.map((image, i) => <img src={image} width={"100%"} key={i}/>)
        }
      </div>
      <div>
        {route.description}
      </div>
    </section>
  )
}