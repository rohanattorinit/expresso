export async function GET() {
  return new Response("The environment is healthy.", {
    status: 200,
  });
}
