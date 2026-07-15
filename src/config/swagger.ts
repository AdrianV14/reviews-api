import swaggerJSDoc from "swagger-jsdoc";
// import { SwaggerUiOptions } from "swagger-ui-express";

const options: swaggerJSDoc.Options = {
	swaggerDefinition: {
		openapi: "3.0.2",
		info: {
			title: "Reviews API",
			version: "1.0.0",
			description: "REST API for reviewing restaurants, bars, cafés and more.",
		},
	},
	apis: ["./src/modules/**/*.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

// const swaggerUI : SwaggerUiOptions = {
// 	customCss:`
// 		.topbar-wrapper .link{
// 			content: url('tulink');
// 		}
// 	`,
//	customSiteTitle:'tu titulo'
// }

export default swaggerSpec;

// export { swaggerUI };    solo si quieres cambiar la imagen de swagger
