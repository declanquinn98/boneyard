import * as React from "react";
import { useRef, useState, useEffect } from "react";

import styles from '../styles/arrow.scss';


const UpArrow = () => {
    return (
        <path d="   M 16 24 
                    v   -16
                    L 22 16
                    M 16 8
                    L 10 16
                    "
        />
    )
}

const DownArrow = () => {
    return (
        <path d="   M 16 8 
                    v    16
                    L 22 16
                    M 16 24
                    L 10 16
                    "
        />
    )
}

export const ScrollArrows = React.forwardRef((props, ref) => {

    const scroll = (page) => {
        ref.current.scrollTo(page)
    }

    if (props.arrows.length === 1) {
        if (props.arrows[0][0] === "up") {
            return (
                <div
                    style={{
                        position: "absolute",
                        width: "5vh",
                        height: "5vh",
                        top: "2.5vh",
                        zIndex: 2,
                    }}
                    ref={ref}
                    onClick={() => scroll(props.arrows[0][1])}
                >
                    <Arrow
                        up={true}
                        style={{
                            width: "100%",
                            height: "100%",
                        }}
                    />
                </div>
            )
        }
        else {
            return (

                <div
                    style={{
                        position: "absolute",
                        width: "5vh",
                        height: "5vh",
                        bottom: "2.5vh",
                        zIndex: 2,
                    }}
                    ref={ref}
                    onClick={() => scroll(props.arrows[0][1])}
                >
                    <Arrow
                        up={false}
                        style={{
                            width: "100%",
                            height: "100%",
                        }}
                    />
                </div>
            )

        }
    }
    else {
        return (
            <>


                <div
                    style={{
                        position: "absolute",
                        width: "5vh",
                        height: "5vh",
                        top: "2.5vh",
                        zIndex: 2,
                    }}
                    ref={ref}
                    onClick={() => scroll(props.arrows[0][1])}
                >
                    <Arrow
                        up={true}
                        style={{
                            width: "100%",
                            height: "100%",
                        }}
                    />
                </div>

                <div
                    style={{
                        position: "absolute",
                        width: "5vh",
                        height: "5vh",
                        bottom: "2.5vh",
                        zIndex: 2,
                    }}
                    ref={ref}
                    onClick={() => scroll(props.arrows[1][1])}
                >
                    <Arrow
                        up={false}
                        style={{
                            width: "100%",
                            height: "100%",
                        }}
                    />
                </div>

            </>
        )

    }


})

const Arrow = (props) => {

    const offWhite = "#f4f4f9";

    return (
        <div className="cDiv">
            <svg
                width="100%"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                className={props.up ? 'cSvgUp' : 'cSvgDown'}
            >
                <filter
                    id="shadow"
                    filterUnits="userSpaceOnUse"
                >
                    <feDropShadow dx="0" dy="0" stdDeviation="21.5" floodOpacity="0.33" />
                </filter>

                <g
                    fill="none"
                    stroke={offWhite}
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    filter="url(#shadow)"
                >
                    <circle
                        className="cCircle"
                        transform="rotate(-90 )"
                        transform-origin="center center"
                        strokeLinecap="round"
                        cx="16"
                        cy="16"
                        r="15"
                    />

                    {
                        props.up ?
                            (
                                <UpArrow />
                            )
                            :
                            (
                                <DownArrow />
                            )
                    }

                </g>
            </svg>
        </div>
    )
}