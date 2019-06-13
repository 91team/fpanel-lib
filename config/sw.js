const fs = require('fs')
const path = require('path')

const PACKAGE_JSON = JSON.parse(
	fs.readFileSync(path.resolve(__dirname, '../package.json'), 'utf8')
)

exports.sw = {
	swDest: path.resolve(__dirname, '../static/service-worker.js'),
	clientsClaim: true,
	// skipWaiting: true,
	cleanupOutdatedCaches: true,
	cacheId: `${PACKAGE_JSON.name}_cache`,
	ignoreURLParametersMatching: [/./],
	runtimeCaching: [
		{
			urlPattern: /\.(otf|ttf|eot|woff|woff2)$/,
			handler: 'CacheFirst',
			options: {
				cacheName: 'static-cache',
				expiration: {
					maxEntries: 50,
					// 30 days
					maxAgeSeconds: 60 * 60 * 24 * 14
				},
				backgroundSync: {
					name: 'static-cache-queue',
					options: {
						maxRetentionTime: 60 * 60
					}
				},
				cacheableResponse: {
					statuses: [0, 200]
				},
				broadcastUpdate: {
					channelName: 'static-cache-update-channel'
				}
			}
		},
		{
			urlPattern: /\.(jpe?g|png|gif|svg)$/,
			handler: 'CacheFirst',
			options: {
				cacheName: 'image-cache',
				expiration: {
					maxEntries: 200,
					// 7 days
					maxAgeSeconds: 60 * 60 * 24 * 7
				},
				backgroundSync: {
					name: 'image-cache-queue',
					options: {
						maxRetentionTime: 60 * 60
					}
				},
				cacheableResponse: {
					statuses: [0, 200]
				},
				broadcastUpdate: {
					channelName: 'image-cache-update-channel'
				}
			}
		}
	]
}
