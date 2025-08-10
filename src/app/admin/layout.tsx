import { ReactNode } from "react";
import Link from "next/link";
import { requireRole } from "@/lib/roleCheck";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  try {
    await requireRole(["admin", "moderator"]);
  } catch {
    redirect("/login");
  }

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-900 text-white p-4">
        <h1 className="text-xl font-bold mb-6">Admin Panel</h1>
        <nav className="space-y-3 flex flex-col">
          <Link href="/admin">Dashboard</Link>
          <Link href="/admin/products">Products</Link>
          <Link href="/admin/users">Users</Link>
        </nav>
      </aside>
      <main className="flex-1 p-6 bg-gray-50">{children}</main>
    </div>
  );
}
