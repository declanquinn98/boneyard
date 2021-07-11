import * as React from "react";
import { useRef, useEffect, useState } from "react";
import { config } from 'react-spring';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';

import styles from '../styles/global.css';

const offBlack = "#1f1d1e";
const offWhite = "#f4f4f9";

export const NavMenu = React.forwardRef((props, ref) => {

    const scroll = (page) => {
        ref.current.scrollTo(page)
    }
    //

    return (
        <div
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                display: "flex",
                justifyContent: "center",
                color: offWhite,
                fontSize: "2vh",
                fontFamily:"playfair",
                background: "linear-gradient(180deg, rgba(0,0,0,0.85) 0%, rgba(255,255,255,0) 75%)"
            }}
        >
            <div
                style={{
                    width: "50%",
                    display: "flex",
                    justifyContent: "space-evenly",
                    marginBottom: "10vh",
                }}
            >
                <p
                    ref={ref}
                    onClick={() => scroll(1)}
                    className="nav-menu-option"
                    style={{
                        cursor: "pointer",
                    }}
                >
                    About
                </p>
                <p
                    ref={ref}
                    onClick={() => scroll(2.5)}
                    className="nav-menu-option"
                    style={{
                        cursor: "pointer"
                    }}
                >
                    Drinks
                </p>
                <p
                    ref={ref}
                    onClick={() => scroll(4)}
                    className="nav-menu-option"
                    style={{
                        cursor: "pointer"
                    }}
                >
                    Food
                </p>
                <p
                    ref={ref}
                    onClick={() => scroll(5.5)}
                    className="nav-menu-option"
                    style={{
                        cursor: "pointer"
                    }}
                >
                    Sustainability
                </p>
                <p
                    ref={ref}
                    onClick={() => scroll(7)}
                    className="nav-menu-option"
                    style={{
                        cursor: "pointer"
                    }}
                >
                    Contact
                </p>
            </div>
        </div >
    )
})
