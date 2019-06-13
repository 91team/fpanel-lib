import express from 'express'
import next from 'next'
import { join } from 'path'

const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

async function startServer() {
	await app.prepare()
	const server = express()

	server.use('/service-worker.js', (req, res) =>
		app.serveStatic(req, res, join(__dirname, '../.next/service-worker.js'))
	)
	server.get('*', (req, res) => handle(req, res))

	await server.listen(port, () =>
		console.log(`> Ready on http://localhost:${port}`)
	)
}

startServer()
