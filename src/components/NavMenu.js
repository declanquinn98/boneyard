import * as React from "react";

const offWhite = "#f4f4f9";

export const NavMenu = React.forwardRef((props, ref) => {

    const scroll = (page) => {
        ref.current.scrollTo(page)
    }

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
                fontFamily: "playfair",
                background: "linear-gradient(180deg, rgba(0,0,0,0.85) 0%, rgba(255,255,255,0) 75%)"
            }}
        >
            <div
                style={{
                    width: "50%",
                    display: "flex",
                    justifyContent: "space-evenly",
                    marginTop: "2.5vh",
                    marginBottom: "5vh",
                    alignItems: "center",
                }}
            >
                <button
                    ref={ref}
                    onClick={() => scroll(1)}
                    onKeyDown={(e) => {
                        if (e.key === "Spacebar" || e.key === "Enter") {
                            scroll(1);
                        }
                    }}
                    className="nav-menu-option"
                    style={{
                        border: "none",
                        cursor: "pointer",
                        fontSize: "1.25vw",
                        fontFamily: "playfair",
                        backgroundColor: "rgba(0,0,0,0)",
                        color: offWhite
                    }}
                >
                    About
                </button>
                <button
                    ref={ref}
                    onClick={() => scroll(2.5)}
                    onKeyDown={(e) => {
                        if (e.key === "Spacebar" || e.key === "Enter") {
                            scroll(2.5);
                        }
                    }}
                    className="nav-menu-option"
                    style={{
                        border: "none",
                        cursor: "pointer",
                        fontSize: "1.25vw",
                        fontFamily: "playfair",
                        backgroundColor: "rgba(0,0,0,0)",
                        color: offWhite
                    }}
                >
                    Drinks
                </button>
                <button
                    ref={ref}
                    onClick={() => scroll(4)}
                    onKeyDown={(e) => {
                        if (e.key === "Spacebar" || e.key === "Enter") {
                            scroll(4);
                        }
                    }}
                    className="nav-menu-option"
                    style={{
                        border: "none",
                        cursor: "pointer",
                        fontSize: "1.25vw",
                        fontFamily: "playfair",
                        backgroundColor: "rgba(0,0,0,0)",
                        color: offWhite
                    }}
                >
                    Food
                </button>
                <button
                    ref={ref}
                    onClick={() => scroll(5.5)}
                    onKeyDown={(e) => {
                        if (e.key === "Spacebar" || e.key === "Enter") {
                            scroll(5.5);
                        }
                    }}
                    className="nav-menu-option"
                    style={{
                        border: "none",
                        cursor: "pointer",
                        fontSize: "1.25vw",
                        fontFamily: "playfair",
                        backgroundColor: "rgba(0,0,0,0)",
                        color: offWhite
                    }}
                >
                    Sustainability
                </button>
                <button
                    ref={ref}
                    onClick={() => scroll(7)}
                    onKeyDown={(e) => {
                        if (e.key === "Spacebar" || e.key === "Enter") {
                            scroll(7);
                        }
                    }}
                    className="nav-menu-option"
                    style={{
                        border: "none",
                        cursor: "pointer",
                        fontSize: "1.25vw",
                        fontFamily: "playfair",
                        backgroundColor: "rgba(0,0,0,0)",
                        color: offWhite
                    }}
                >
                    Contact
                </button>
            </div>
        </div >
    )
})
