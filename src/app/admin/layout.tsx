// app/admin/layout.tsx
import { ReactNode } from "react";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { TbShoppingBagPlus } from "react-icons/tb";
import Button from "@/common/Button";
import { cookies } from "next/headers";

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  // Get user from cookies (works in layouts)
  const token = (await cookies()).get("token")?.value;

  // Protect route
  if (!token) {
    return redirect("/admin/login");
  }

  return (
    <div className="flex flex-col bg-[#252525]">
      {/* Topbar */}
      <div className="bg-[#2E2E2E] w-full">
        <div className="container mx-auto flex justify-between items-center px-6 md:px-16 py-8">
          <div className="text-2xl font-bold text-white">
            <Link href="/" className="hover:text-[#d6b36b]">
              <div className="flex items-center gap-x-4 justify-start">
                <Image
                  src="/images/logo.svg"
                  alt="Hydra Aesthetics"
                  width={150}
                  height={150}
                  className="w-24 h-24"
                />
                <h2 className="text-2xl hidden md:flex font-bold bg-gradient-to-r from-[#C4AC7B] via-[#EEE1BA] to-[#836539] bg-clip-text text-transparent">
                  Hydra Aesthetics
                </h2>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <h3 className="text-[32px] font-inter font-bold text-white">
              Admin Panel
            </h3>
          </div>

          <div className="flex justify-center items-center space-x-5">
            <Link href="/order" className="col-span-1 flex gap-x-3 relative">
              <span className="text-gradient text-[16px] font-bold font-inter cursor-pointer">
                Check Orders
              </span>
              <TbShoppingBagPlus className="w-6 h-6 text-[#d6b36b] hover:text-[#cbb688] cursor-pointer" />
            </Link>
            <div className="hidden md:flex">
              <a target="_blank" href="">
                <Button text="Add Moderators" borderLeanr="gradient-border" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
