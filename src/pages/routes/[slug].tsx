import { PageLayout } from "@/components/layout/PageLayout";
import { TitleSection } from "@/components/pages/routes/route-page/TitleSection";
import { InfoSection } from "@/components/pages/routes/route-page/InfoSection";
import { TagsSection } from "@/components/pages/routes/route-page/TagsSection";
import { LocationSection } from "@/components/pages/routes/route-page/LocationSection";
import { Route } from "@/domain/routes/Route";

interface Props {
  route: Route;
}

const RoutePage = ({ route }: Props) => {
  return (
    <PageLayout>
      <TitleSection route={route} />
      <InfoSection route={route} />
      <TagsSection tags={route.tags} />
      <LocationSection location={route.location} />
    </PageLayout>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.query;
  const route = await fetch(`${process.env.API_HOST}/routes/${slug}`).then(
    (res) => res.json()
  );
  return {
    props: { route },
  };
}

export default RoutePage;
