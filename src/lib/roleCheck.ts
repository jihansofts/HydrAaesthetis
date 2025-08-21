import { NextRequest, NextResponse } from "next/server";
import { getUserFromToken } from "./auth";
import { IUser } from "@/model/UserModel";

export function requireRole(allowedRoles: string[]) {
  return (
    handler: (
      req: NextRequest,
      context: { params?: string },
      user: IUser
    ) => Promise<NextResponse> | NextResponse
  ) => {
    return async (req: NextRequest, context: { params?: string }) => {
      const user = await getUserFromToken();

      if (!user) {
        return NextResponse.json(
          { error: "Authentication required" },
          { status: 401 }
        );
      }

      if (!allowedRoles.includes(user.role)) {
        return NextResponse.json(
          { error: "Unauthorized - insufficient role" },
          { status: 403 }
        );
      }

      // ✅ pass context (so you can access params) and user
      return handler(req, context, user);
    };
  };
}
