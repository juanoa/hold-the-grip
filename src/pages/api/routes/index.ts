import {routesRepository} from "@/infrastructure/routes/routes-repository";

const routeHandler = (req, res) => {
  const { method } = req
  const {getAll} = routesRepository();

  switch (method) {
    case 'GET':
      res.status(200).json(getAll())
      break
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

export default routeHandler;