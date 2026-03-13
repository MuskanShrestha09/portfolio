import { NextResponse } from 'next/server';
import { getSiteData, saveSiteData, SiteData } from '@/lib/data';
import { getRequestContext } from '@cloudflare/next-on-pages';

export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    const { env } = getRequestContext();
    const newData = await request.json() as SiteData;
    await saveSiteData(env.DB, newData);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ success: false, error: 'Failed to save data' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const { env } = getRequestContext();
    const data = await getSiteData(env.DB);
    return NextResponse.json(data);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch data' }, { status: 500 });
  }
}
