import * as React from "react";
import { useRef, useState } from "react";
import { CremaTitle } from "../components/CremaTitle.js";
import { config } from 'react-spring'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import landingBG from "../assets/images/backgrounds/espressoBlack.jpg";
import cookiesBG from "../assets/images/backgrounds/cookies.jpg";
import keepcupBG from "../assets/images/backgrounds/keepcup.jpg";
import outsideBG from "../assets/images/backgrounds/outside.jpg";

const IndexPage = () => {

    const offBlack = "#1f1d1e";
    const offWhite = "#f4f4f9";
    const green = "#5d9835";
    const orange = "#f2a541";
    const red = "#3b0d11";


    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "100%"
            }}
        >

            <Parallax
                pages={6.5}
                config={config.stiff}
                style={{
                    top: 0,
                    left: 0,
                }}
            >

                <ParallaxLayer
                    offset={0}
                >
                    <div
                        style={{
                            height: "100vh",
                            width: "100vw",
                            backgroundImage: 'url(' + landingBG + ')',
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            position: "relative",
                            zIndex: -2
                        }}
                    >
                        <CremaTitle />
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1}
                >
                    <div
                        style={{
                            height: "100vh",
                            width: "100vw",
                            backgroundColor: offBlack,
                            color: offWhite,
                            display: "flex",
                            justifyContent: "center"
                        }}
                    >
                        <h1
                            style={{
                                alignSelf: "center"
                            }}>hello</h1>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1.85}
                    speed={0.15}
                    style={{
                        zIndex: -1
                    }}
                >
                    <div
                        style={{
                            height: "100vh",
                            width: "100vw",
                            backgroundImage: 'url(' + cookiesBG + ')',
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                        }}
                    />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2.5}
                >
                    <div
                        style={{
                            height: "100vh",
                            width: "100vw",
                            backgroundColor: offBlack,
                            color: offWhite,
                            display: "flex",
                            justifyContent: "center"
                        }}
                    >
                        <h1
                            style={{
                                alignSelf: "center"
                            }}>menu</h1>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={3.35}
                    speed={0.15}
                    style={{
                        zIndex: -1
                    }}
                >
                    <div
                        style={{
                            height: "100vh",
                            width: "100vw",
                            backgroundImage: 'url(' + keepcupBG + ')',
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                        }}
                    />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={4}
                >
                    <div
                        style={{
                            height: "100vh",
                            width: "100vw",
                            backgroundColor: offBlack,
                            color: offWhite,
                            display: "flex",
                            justifyContent: "center"
                        }}
                    >
                        <h1
                            style={{
                                alignSelf: "center"
                            }}>Sustainability</h1>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={4.85}
                    speed={0.15}
                    style={{
                        zIndex: -1
                    }}
                >
                    <div
                        style={{
                            height: "100vh",
                            width: "100vw",
                            backgroundImage: 'url(' + outsideBG + ')',
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                        }}
                    />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={5.5}
                >
                    <div
                        style={{
                            height: "100vh",
                            width: "100vw",
                            backgroundColor: offBlack,
                            color: offWhite,
                            display: "flex",
                            justifyContent: "center"
                        }}
                    >
                        <h1
                            style={{
                                alignSelf: "center"
                            }}>Find us</h1>
                    </div>
                </ParallaxLayer>

            </Parallax>









        </div>
    )
}

export default IndexPage



















/*
const [yOffset, setYOffset] = useState(0);
const [screenWidth, setScreenWidth] = useState(window.innerWidth);
const [screenHeight, setScreenHeight] = useState(window.innerHeight);

const UpdateScreenDimensions = () => {
    setScreenWidth(window.innerWidth);
    setScreenHeight(window.innerHeight);
}
const UpdateYOffset = () => {
    setYOffset(window.pageYOffset);
}
useEffect(() => {
    window.addEventListener("scroll", UpdateYOffset);
    window.addEventListener("resize", UpdateScreenDimensions);
    return () => {
        window.removeEventListener("scroll", UpdateYOffset, false);
        window.removeEventListener("resize", UpdateScreenDimensions, false);
    };
}, []);
*/
