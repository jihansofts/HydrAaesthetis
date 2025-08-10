import { cookies } from "next/headers";
import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import UserModel, { IUser } from "@/model/UserModel";

export async function getUserFromToken(
  req?: NextRequest
): Promise<IUser | null> {
  let token: string | undefined;

  // 1. If we're in an API route and have req, check Authorization header
  if (req) {
    const authHeader = req.headers.get("authorization");
    if (authHeader?.startsWith("Bearer ")) {
      token = authHeader.split(" ")[1];
    }
  }

  // 2. If no token yet, check cookies (works in layouts/server components)
  if (!token) {
    token = (await cookies()).get("token")?.value;
  }

  if (!token) return null;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      id: string;
      role: string;
    };
    const user = await UserModel.findById(decoded.id).exec();
    return user || null;
  } catch (error) {
    console.error("JWT verification error:", error);
    return null;
  }
}
