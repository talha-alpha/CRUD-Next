"use client";

import SideNav from "./components/sideNav";
import TopNav from "./components/topNav";
import Home from "./home/page"
import withAuth from "./components/withAuth";

function DashboardHome() {

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
