"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import SideNav from "./components/sideNav";
import TopNav from "./components/topNav";
import Home from "./home/page"
import withAuth from "./components/withAuth";
import Link from "next/link";

function DashboardHome() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) router.push("/login");
  }, [router]);

  return (
    <div className="flex w-full">
      <SideNav />
      <div className="flex flex-col w-full">
        <TopNav />
        <Home />
      </div>
    </div>
  );
}
export default withAuth(DashboardHome);
