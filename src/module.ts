import { defineNuxtModule, createResolver, addImportsDir, addServerPlugin, addServerImportsDir } from '@nuxt/kit'
import defu from 'defu'

// Module options TypeScript interface definition
export interface ModuleOptions {
	requests: boolean
}

export default defineNuxtModule<ModuleOptions>({
	meta: {
		name: 'nuxt-logger',
		configKey: 'logger',
	},
	// Default configuration options of the Nuxt module
	defaults: {
		requests: true,
	},
	setup(_options, _nuxt) {
		const resolver = createResolver(import.meta.url)

		_nuxt.options.runtimeConfig.logger = defu(_nuxt.options.runtimeConfig.logger, _options)

		addImportsDir(resolver.resolve('runtime/app/composables'))

		if (_options.requests) {
			addServerPlugin(resolver.resolve('runtime/server/plugins/nitro'))
		}

		addServerImportsDir(resolver.resolve('runtime/server/utils'))

		_nuxt.options.build.transpile.push(resolver.resolve('runtime'))
	},
})
