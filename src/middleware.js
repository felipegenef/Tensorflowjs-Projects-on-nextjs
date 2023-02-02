import projects from "./constants/projects";
import { NextResponse } from "next/server";

export function middleware(request) {
  if (projects.some((item) => request.url.includes(item)) && !request.cookies)
    return NextResponse.redirect(new URL("/", request.url));
}
