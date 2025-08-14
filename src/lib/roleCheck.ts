import { NextRequest, NextResponse } from "next/server";
import { getUserFromToken } from "./auth";
import { IUser } from "@/model/UserModel";

export function requireRole(allowedRoles: string[]) {
  return (
    handler: (
      req: NextRequest,
      user: IUser
    ) => Promise<NextResponse> | NextResponse
  ) => {
    return async (req: NextRequest) => {
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

      return handler(req, user); // user is now IUser
    };
  };
}
