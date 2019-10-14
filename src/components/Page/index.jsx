import React from "react";
import NavigationBar from "../NavigationBar";
import MemberPresentation from "../MemberPresentation";
import GroupPresentation from "../GroupPresentation";
import BottomNav from "../BottomNav";

const Page = () => {
    return (
        <div>
            <NavigationBar />
            <GroupPresentation />
            <MemberPresentation />
            <BottomNav />
        </div>)
}

export default Page;