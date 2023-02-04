import style from "@/styles/pages/routes/routePage.module.css";
import {PageLayout} from "@/components/layout/pageLayout";
import {Badge, Heading} from 'theme-ui'
import {GradeBadge} from "@/components/routes/grade/gradeBadge";

const RoutePage = ({route}) => {
  return (
    <PageLayout>
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
      <section className={style.tagsSection}>
        {
          route.tags.map(tag => <span>{tag} </span>)
        }
      </section>
      <section>
        <h2>Location</h2>
        <p>{route.location.lat}</p>
        <p>{route.location.lon}</p>
      </section>
      <section>
        <h2>Comments</h2>
      </section>
    </PageLayout>
  )
}

export async function getServerSideProps(context) {
  const {slug} = context.query;
  const route = await fetch(`http://localhost:3000/api/routes/${slug}`).then(res => res.json())
  return {
    props: {route},
  }
}

export default RoutePage;