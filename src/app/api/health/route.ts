export async function GET(_request: Request) {
  return new Response("The environment is healthy.", {
    status: 200,
  });
}
