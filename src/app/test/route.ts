export const runtime = 'edge';

export const dynamic = 'force-dynamic';

export function GET(request: Request) { 
  return Response.json({ request });
}
