import {PageLayout} from "@/components/layout/PageLayout";
import Link from "next/link";


const RoutePage = ({routes}) => {
  return (
    <PageLayout>
      {
        routes.map((route) => (
          <div key={route.slug}>
            <Link href="/routes/[slug]" as={`/routes/${route.slug}`}>{route.name}</Link>
          </div>
        ))
      }
    </PageLayout>
  )
}

export async function getServerSideProps() {
  const routes = await fetch(`http://localhost:3000/api/routes/`).then(res => res.json())
  return {
    props: {routes},
  }
}

export default RoutePage;