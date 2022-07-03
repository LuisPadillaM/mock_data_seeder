import jsonServer from 'json-server'

const index = jsonServer.create()
const router = jsonServer.router('./db.json')
const middlewares = jsonServer.defaults()

index.use(middlewares)
index.use(router)
index.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('JSON Server is running')
})
