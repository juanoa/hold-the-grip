import {routesRepository} from "@/infrastructure/routes/routes-repository";

const routeHandler = (req, res) => {
  const { query, method } = req
  const {getBySlug} = routesRepository();

  const slug = query.slug

  switch (method) {
    case 'GET':
      const route = getBySlug(slug);
      if (!route) {
        res.status(404)
      } else {
        res.status(200).json(getBySlug(slug))
      }
      break
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

export default routeHandler;