import {NextRequest, NextResponse} from "next/server";
import schema from "../schema";
export function GET(
  request: NextRequest,
  { params: { id } }:{ params: { id: number } }) {
  // fetch data from db
  // if not found, return 404 error
  // else return data
  if (id > 10) return NextResponse.json({ error: "User not found"}, { status: 404});
  return NextResponse.json({ id: 1, name: "Bert"});
}

export async function PUT(
  request: NextRequest,
  { params: { id } }:{ params: { id: number } }) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 })
  if (id > 10)
    return NextResponse.json({ error: "User not found"}, { status: 404 })

  return NextResponse.json({ id: 1, name: body.name })
}

export function DELETE(
  request: NextRequest,
  { params: { id } }:{ params: { id: number } }) {
  if (id > 10)
    return NextResponse.json({ error: "User not found"}, { status: 404 })
  return NextResponse.json({});
  // Fetch the user from db
  // if not found 404
  // delete the user
  // return 200
}
