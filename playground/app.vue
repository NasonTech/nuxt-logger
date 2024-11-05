<script setup lang="ts">
const logger = useLogger()
</script>

<template>
	<div>Logger playground!</div>
	<p>Open console and click a button</p>
	<div style="display: flex; gap: 1rem">
		<button @click="logger.info('info')">Log info</button>
		<button @click="logger.error('error')">Log error</button>
		<button @click="logger.warn('warn')">Log warn</button>
		<button @click="logger.fail('fail')">Log fail</button>
		<button @click="logger.fatal('fatal')">Log fatal</button>
	</div>
</template>
