import React from "react";
import style from "./Header.module.scss";
import logo from "../../../IMG/icons/a-logo.svg";
import { Navigator } from "../1.2Navigation/Navigator";
import { Currency } from "../1.3Action/Currency/Currency";


export const Header = () => {
    return (
        <div className={style.headContainer}>
            <Navigator/>
            <div className={style.logo}>
                <img src={logo} />
            </div>
            <Currency/>
        </div>
    );
}


