const { createProxyMiddleware } = require("http-proxy-middleware");
const { env } = require("process");

const target = env.ASPNETCORE_HTTPS_PORT
	? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}`
	: env.ASPNETCORE_URLS
	? env.ASPNETCORE_URLS.split(";")[0]
	: "http://localhost:27935";

const context = ["/api/login"];

module.exports = function (app) {
	const appProxy = createProxyMiddleware(context, {
		target: target,
		secure: false,
		headers: {
			Connection: "Keep-Alive",
		},
	});

	app.use(appProxy);
};
