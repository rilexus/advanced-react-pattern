const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
	app.use('/api', (req, res, next) => {
		setTimeout(() => {
			res.send({some: "some"})
			
		}, 1000)
	})
};
