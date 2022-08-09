import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navigator.module.scss";

export const Navigator = () => {
  return (
    <div className={style.navContainer}>
      <nav className={style.nav}>
        <li>
          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#5ece7b",
                    borderBottom: "2px solid #5ece7b",
                  }
                : null
            }
            to="/woman"
          >
            WOMAN
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#5ece7b",
                    borderBottom: "2px solid #5ece7b",
                  }
                : null
            }
            to="/man"
          >
            MAN
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#5ece7b",
                    borderBottom: "2px solid #5ece7b",
                  }
                : null
            }
            to="/kids"
          >
            KIDS
          </NavLink>
        </li>
      </nav>
    </div>
  );
};
