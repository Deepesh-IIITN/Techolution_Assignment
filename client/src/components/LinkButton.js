import React from 'react'
import { NavLink } from "react-router-dom";

const LinkButton = (props) => {
    return (
        <>
        <NavLink to={props.link} className="link-button">
               {props.path}
        </NavLink>
        </>
    )
}

export default LinkButton
