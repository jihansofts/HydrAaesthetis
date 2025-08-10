import { NextRequest, NextResponse } from "next/server";
import { getUserFromToken } from "./auth";
import { IUser } from "@/model/UserModel";

export function requireRole(allowedRoles: string[]) {
  return (
    handler: (req: NextRequest, user: IUser) => Promise<NextResponse>
  ) => {
    return async (req: NextRequest) => {
      const user = await getUserFromToken(req);
      console.log(user);
      if (!user || !allowedRoles.includes(user.role)) {
        return NextResponse.json({ error: "Forbidden" }, { status: 403 });
      }
      return handler(req, user);
    };
  };
}
