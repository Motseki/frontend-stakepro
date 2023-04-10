import React from "react";
import HomeDashboardHorizontalNavbar from "./HomeDashboardHorizontalNavbar";
import UserContentA from "./UserContentA";
import UserDashboardFooterNav from "./UserDashboardFooterNav";
import DashboardSideNavbar from "./DashboardSideNavbar";
import DashboardTopNavbar from "./DashboardTopNavbar";

export default function SideNavbar() {
    return (
        <div className="flex flex-col">
            <UserContentA/>           
            <UserDashboardFooterNav/> 
        </div>
    );
}