import { PageLayout } from "@/components/layout/PageLayout";
import Link from "next/link";
import { Route } from "@/domain/routes/Route";
import { RoutesHeaderSection } from "@/components/pages/routes/routes-page/RoutesHeaderSection";

interface Props {
  routes: Array<Route>;
}

const RoutesPage = ({ routes }: Props) => {
  return (
    <PageLayout title="Routes">
      <RoutesHeaderSection />
      {routes.map((route) => (
        <div key={route.slug}>
          <Link href="/routes/[slug]" as={`/routes/${route.slug}`}>
            {route.name}
          </Link>
        </div>
      ))}
    </PageLayout>
  );
};

export async function getServerSideProps() {
  const routes = await fetch(`${process.env.API_HOST}/routes/`).then((res) =>
    res.json()
  );
  return {
    props: { routes },
  };
}

export default RoutesPage;
