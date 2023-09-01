import { GetStaticProps, InferGetStaticPropsType } from "next";
import { createSwaggerSpec } from "next-swagger-doc";
import dynamic from "next/dynamic";
import "swagger-ui-react/swagger-ui.css";

const SwaggerUI = dynamic<any>(import("swagger-ui-react"), { ssr: false });

function ApiDoc({ spec }: InferGetStaticPropsType<typeof getStaticProps>) {
  return <SwaggerUI spec={spec} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const spec: Record<string, any> = createSwaggerSpec({
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

  return {
    props: {
      spec,
    },
  };
};

export default ApiDoc;
