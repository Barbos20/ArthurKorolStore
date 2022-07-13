import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./Navigator.module.scss";

export const Navigator = () => {
    const [active, setActive] = useState(false)
    return (
        <div className={style.navContainer}>
            <nav className={style.nav}
                onClick={() => {
                    setActive(!active);
                }}>
                <NavLink className={active ? style.active : ''} to="/woman">
                    WOMAN
                </NavLink>
                <NavLink className={''} to="">
                    MAN
                </NavLink>
                <NavLink className={''} to="">
                    KIDS
                </NavLink>
            </nav>
        </div>
    );
}