import React from "react";
import NavigationBar from "../NavigationBar";
import MemberPresentation from "../MemberPresentation";
import GroupPresentation from "../GroupPresentation";
import Contact from "../Contact";
import BottomNav from "../BottomNav";

const Page = () => {
    return (
        <div>
            <NavigationBar />
            <GroupPresentation />
            <MemberPresentation />
            <hr />
            <Contact />
            <BottomNav />
        </div>)
}

export default Page;