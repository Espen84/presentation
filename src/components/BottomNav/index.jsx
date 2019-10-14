import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import styles from "./styles.module.css";
import classnames from "classnames";

const styling = classnames(styles.bottomNav, "")
const BottomNav = () => {

    return (
        <Navbar className={styling}>
            <Navbar.Text className="mx-auto text-white">Source code is availible at <a className="text-white font-weight-bold" href="https://github.com/BrukerfeilGroup/presentation">Github</a></Navbar.Text>
        </Navbar>
    );
}

export default BottomNav;