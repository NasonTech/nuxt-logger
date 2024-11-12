import { useLogger } from '../utils/useLogger.js'
import { defineNitroPlugin, defineEventHandler } from '#imports'

const logger = useLogger()

export default defineNitroPlugin((_nitroApp) => {
	_nitroApp.h3App.stack.unshift({
		route: '/',
		handler: defineEventHandler(async (event) => {
			const method = event.node.req.method
			const path = event.node.req.url
			const responseCode = event.node.res.statusCode

			// Don't log nuxt and nuxt-image urls
			if (path?.startsWith('/_ipx') || path?.startsWith('/_nuxt')) return

			logger.info({ method, path, responseCode }, '')
		}),
	})
})
