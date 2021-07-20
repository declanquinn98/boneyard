import * as React from "react";
import '../styles/arrow.scss';

export const ScrollArrows = React.forwardRef((props, ref) => {

    const scroll = (page) => {
        ref.current.scrollTo(page)
    }

    const [size, setSize] = React.useState("5vw");

    React.useEffect(() => {
        if (props.device === "mobile")
            setSize("15vw");
        else if (props.device === "tablet")
            setSize("10vw")

    }, [props.device]);


    if (props.arrows.length === 1) {
        if (props.arrows[0][0] === "up") {
            return (
                <button
                    style={{
                        position: "absolute",
                        width: size,
                        height: size,
                        top: "1.5vw",
                        zIndex: 2,
                        backgroundColor: "rgba(0,0,0,0)",
                        border: "none",
                    }}
                    ref={ref}
                    aria-label={"Page Navigation"}
                    onClick={() => scroll(props.arrows[0][1])}
                    onKeyDown={(e) => {
                        if (e.key === "Spacebar" || e.key === "Enter") {
                            scroll(props.arrows[0][1]);
                        }
                    }}
                >
                    <Arrow
                        up={true}
                        style={{
                            width: "100%",
                            height: "100%",
                        }}
                    />
                </button>
            )
        }
        else {
            return (

                <button
                    style={{
                        position: "absolute",
                        width: size,
                        height: size,
                        bottom: "1.5vw",
                        zIndex: 2,
                        backgroundColor: "rgba(0,0,0,0)",
                        border: "none",
                    }}
                    ref={ref}
                    aria-label={"Page Navigation"}
                    onClick={() => scroll(props.arrows[0][1])}
                    onKeyDown={(e) => {
                        if (e.key === "Spacebar" || e.key === "Enter") {
                            scroll(props.arrows[0][1]);
                        }
                    }}
                >
                    <Arrow
                        up={false}
                        style={{
                            width: "100%",
                            height: "100%",
                        }}
                    />
                </button>
            )

        }
    }
    else {
        return (
            <>
                <button
                    style={{
                        position: "absolute",
                        width: size,
                        height: size,
                        top: "1.5vw",
                        zIndex: 2,
                        backgroundColor: "rgba(0,0,0,0)",
                        border: "none",
                    }}
                    ref={ref}
                    aria-label={"Page Navigation"}
                    onClick={() => scroll(props.arrows[0][1])}
                    onKeyDown={(e) => {
                        if (e.key === "Spacebar" || e.key === "Enter") {
                            scroll(props.arrows[0][1]);
                        }
                    }}
                >
                    <Arrow
                        up={true}
                        style={{
                            width: "100%",
                            height: "100%",
                        }}
                    />
                </button>

                <button
                    style={{
                        position: "absolute",
                        width: size,
                        height: size,
                        bottom: "1.5vw",
                        zIndex: 2,
                        backgroundColor: "rgba(0,0,0,0)",
                        border: "none",
                    }}
                    ref={ref}
                    aria-label={"Page Navigation"}
                    onClick={() => scroll(props.arrows[1][1])}
                    onKeyDown={(e) => {
                        if (e.key === "Spacebar" || e.key === "Enter") {
                            scroll(props.arrows[1][1]);
                        }
                    }}
                >
                    <Arrow
                        up={false}
                        style={{
                            width: "100%",
                            height: "100%",
                        }}
                    />
                </button>
            </>
        )
    }
})

const Arrow = (props) => {

    const offWhite = "#f4f4f9";

    return (
        <div className="cDiv"
            style={{
                width: "100%",
                height: "100%",
            }}>
            <svg
                width="100%"
                height="100%"
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