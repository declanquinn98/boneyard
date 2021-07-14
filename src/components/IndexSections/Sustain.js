import * as React from "react";
import { ParallaxLayer } from '@react-spring/parallax';

const offBlack = "#1f1d1e";
const offWhite = "#f4f4f9";

export const Sustain = (props) => {

    const [tSize, setTSize] = React.useState("5vw");
    const [pSize, setPSize] = React.useState("1.5vw");

    React.useEffect(() => {

        if (props.device === "mobile") {
            setTSize("11vw");
            setPSize("3.5vw");
        }
        else if (props.device === "tablet") {
            setTSize("10vw");
            setPSize("3vw");
        }

    }, [props.device]);

    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                textShadow: "0px 0px 25px rgba(0,0,0,1)",
                color: offWhite,
                fontSize: pSize,
                backgroundColor: offBlack
            }}
        >
            <ParallaxLayer
                offset={0.55}
                speed={0.1}
                style={{
                    display: "flex",
                    height: "100%",
                    justifyContent: "center",
                    zIndex: 2,
                }}
            >
                <div
                    style={{
                        width: "90%",
                        height: "85%",
                        alignSelf: "center",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}
                >
                    <h3
                        style={{
                            fontFamily: "Oswald",
                            fontSize: tSize,
                            marginBottom: 0,
                            marginTop: 0,
                        }}
                    >
                        We like this planet
                    </h3>
                    <div
                        style={{
                            width: "95%",
                            display: "flex",
                            alignSelf:"center"
                        }}
                    >
                        <div
                            style={{
                                width: "45%",
                                height: "100%",
                            }}
                        >
                            <p>Again up to you obviously what goes here. Something about the keepcup discount and advertising the fonzie abbot cups I assume. filler--- I Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>

                        <div
                            style={{
                                width: "10%",
                            }}
                        />

                        <div
                            style={{
                                width: "45%",
                                height: "100%",
                            }}
                        >
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        </div>

                    </div>





                </div>
            </ParallaxLayer>
        </div >
    )
}