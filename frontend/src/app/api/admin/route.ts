import { NextResponse } from 'next/server';
import { getData, saveData } from '@/lib/data';

export async function POST(request: Request) {
  try {
    const newData = await request.json();
    saveData(newData);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to save data' }, { status: 500 });
  }
}

export async function GET() {
  const data = getData();
  return NextResponse.json(data);
}
