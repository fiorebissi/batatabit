import express from 'express'
import next from 'next'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const port = process.env.PORT || 3000
const env = process.env.NODE_ENV || `development`
const app = next({ dev: env !== `production` })

const handle = app.getRequestHandler()

app.prepare().then(() => {
	const server = express()

	server.use(cors({
		origin: true,
		credentials: true
	}))

	server.all(`*`, (req, res) => {
		return handle(req, res)
	})

	server.listen(port, () => {
		console.log(`> Ready on http://localhost:${port}`)
	})
})
