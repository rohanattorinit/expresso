import { createSwaggerSpec } from "next-swagger-doc";

export const getApiDocs = async () => {
  const spec = createSwaggerSpec({
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Next Swagger API Example",
        version: "1.0",
      },
      paths: {
        "/api/health": {
          get: {
            tags: ["Health Check"],
            summary: "Health Check",
            description: "Check the health status of the environment.",
            parameters: [
              {
                name: "N/A",
                in: "N/A",
                description: "This endpoint does not accept any parameters.",
              },
            ],
            responses: {
              "200": {
                description: "Environment is healthy",
                content: {
                  "application/json": {
                    example: {
                      status: "OK",
                      message: "The environment is healthy.",
                    },
                  },
                },
              },
            },
          },
        },
      },
      components: {
        securitySchemes: {
          BearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT",
          },
        },
      },
      security: [],
    },
  });
  return spec;
};
