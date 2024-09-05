import { NextResponse } from 'next/server';

export async function GET() {
  const res = await fetch('https://api.github.com/users/pavithrashaji/repos?sort=created&direction=desc');
  const repos = await res.json();
  return NextResponse.json(repos);
}