export const dynamic = "force-dynamic"; // dynamic = auto

export async function GET() {
  return new Response(new Date().toLocaleTimeString());
}
