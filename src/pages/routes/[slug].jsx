import {PageLayout} from "@/components/layout/PageLayout";
import {TitleSection} from "@/components/pages/routes/route-page/TitleSection";
import {InfoSection} from "@/components/pages/routes/route-page/InfoSection";
import {TagsSecion} from "@/components/pages/routes/route-page/TagsSecion";
import {LocationSection} from "@/components/pages/routes/route-page/LocationSection";

const RoutePage = ({route}) => {
  return (
    <PageLayout>
      <TitleSection route={route} />
      <InfoSection route={route} />
      <TagsSecion tags={route.tags} />
      <LocationSection location={route.location} />
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