export const runtime = 'edge';

export const dynamic = 'force-dynamic';

export function GET(request: Request) {
  console.log('test called');

  return Response.json({ request });
}
