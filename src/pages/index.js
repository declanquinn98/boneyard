import * as React from "react";
import { useRef, useState } from "react";
import { CremaTitle } from "../components/CremaTitle.js";
import { config } from 'react-spring'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import landingBG from "../assets/images/backgrounds/espressoBlack.jpg";
import cookiesBG from "../assets/images/backgrounds/cookies.jpg";
import keepcupBG from "../assets/images/backgrounds/keepcup.jpg";
import outsideBG from "../assets/images/backgrounds/outside.jpg";

/*
https://codepen.io/manelroig/pen/rJMVRO
https://codepen.io/GioAc96/pen/QarEQM
https://codepen.io/Podgro/pen/GoRyZV
https://codepen.io/raf187/pen/BvgGRQ
*/


const IndexPage = () => {

    const offBlack = "#1f1d1e";
    const offWhite = "#f4f4f9";
    const green = "#5d9835";
    const orange = "#f2a541";
    const red = "#db4451"; //3b0d11


    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                fontFamily: 'Stereofidelic',
                src: "local('Stereofidelic'), url(../assets/fonts/stereofidelic.ttf) format('ttf')",
            }}
        >

            <Parallax
                pages={6.5}
                config={config.slow}
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
                            zIndex: -2,
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
                            position: "relative",
                            height: "100vh",
                            width: "100vw",
                            backgroundColor: offBlack,
                            display: "flex",
                            justifyContent: "center",
                            color: offWhite,
                        }}
                    >
                        <ParallaxLayer
                            offset={0.2}
                            speed={0.1}
                            config={config.default}
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                zIndex: 1
                            }}
                        >

                            <div
                                style={{
                                    width: "75%",
                                    height: "80%",
                                    alignSelf: "center",
                                    display: "flex",
                                    flexDirection: "column"
                                }}
                            >



                                <h3
                                    style={{
                                        fontSize: 100,
                                        marginBottom: 0,
                                        marginTop: 0
                                    }}>
                                    About Us
                                </h3>

                                <div
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        display: "flex",
                                        fontSize: 30
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "40%",
                                            height: "100%",
                                        }}
                                    >
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>


                                    </div>

                                    <div
                                        style={{
                                            width: "5%",
                                        }}
                                    />

                                    <div
                                        style={{
                                            width: "40%",
                                            height: "100%",
                                        }}
                                    >
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                                    </div>

                                </div>
                            </div>
                        </ParallaxLayer>

                    </div>

                    <ParallaxLayer
                        speed={-1}
                        horizontal
                        style={{
                            display: "flex",
                        }}
                    >
                        <text
                            style={{
                                color: orange,
                                fontSize: 400,
                                alignSelf: "center",
                                position: "relative",
                                left: "-75%",
                                opacity: "50%"
                            }}
                        >
                            HELLO
                        </text>
                    </ParallaxLayer>

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
                            position: "relative",
                            height: "100vh",
                            width: "100vw",
                            backgroundColor: offBlack,
                            display: "flex",
                            justifyContent: "center",
                            color: offWhite,
                        }}
                    >
                        <ParallaxLayer
                            offset={0.3}
                            speed={0.1}
                            config={config.default}
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                zIndex: 1
                            }}
                        >

                            <div
                                style={{
                                    width: "75%",
                                    height: "80%",
                                    alignSelf: "center",
                                    display: "flex",
                                    flexDirection: "column"
                                }}
                            >

                                <h3
                                    style={{
                                        fontSize: 100,
                                        marginBottom: 0,
                                        marginTop: 0
                                    }}>
                                    Coffee
                                </h3>

                                <div
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        display: "flex",
                                        fontSize: 30
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "40%",
                                            height: "100%",
                                        }}
                                    >
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>


                                    </div>

                                    <div
                                        style={{
                                            width: "5%",
                                        }}
                                    />

                                    <div
                                        style={{
                                            width: "40%",
                                            height: "100%",
                                        }}
                                    >
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                                    </div>

                                </div>
                            </div>
                        </ParallaxLayer>

                    </div>

                    <ParallaxLayer
                        speed={-1}
                        horizontal
                        style={{
                            display: "flex",
                        }}
                    >
                        <text
                            style={{
                                color: red,
                                fontSize: 400,
                                alignSelf: "center",
                                position: "absolute",
                                left: "-215%",
                                opacity: "50%"
                            }}
                        >
                            MENU
                        </text>
                    </ParallaxLayer>

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
                            position: "relative",
                            height: "100vh",
                            width: "100vw",
                            color: offWhite,
                            backgroundColor: offBlack,
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <ParallaxLayer
                            offset={0.5}
                            speed={0.1}
                            config={config.default}
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                zIndex: 1
                            }}
                        >

                            <div
                                style={{
                                    width: "75%",
                                    height: "80%",
                                    alignSelf: "center",
                                    display: "flex",
                                    flexDirection: "column"
                                }}
                            >

                                <h3
                                    style={{
                                        fontSize: 100,
                                        marginBottom: 0,
                                        marginTop: 0
                                    }}>
                                    Keepcup Discount?
                                </h3>

                                <div
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        display: "flex",
                                        fontSize: 30
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "40%",
                                            height: "100%",
                                        }}
                                    >
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>


                                    </div>

                                    <div
                                        style={{
                                            width: "5%",
                                        }}
                                    />

                                    <div
                                        style={{
                                            width: "40%",
                                            height: "100%",
                                        }}
                                    >
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                                    </div>

                                </div>
                            </div>
                        </ParallaxLayer>

                    </div>

                    <ParallaxLayer
                        speed={-1}
                        horizontal
                        style={{
                            display: "flex",
                        }}
                    >
                        <text
                            style={{
                                color: green,
                                fontSize: 230,
                                alignSelf: "center",
                                position: "absolute",
                                left: "-400%",
                                opacity: "50%"
                            }}
                        >
                            SUSTAINABILITY
                        </text>
                    </ParallaxLayer>

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
                            position: "relative",
                            height: "100vh",
                            width: "100vw",
                            color: offWhite,
                            backgroundColor: offBlack,
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <ParallaxLayer
                            offset={0.7}
                            speed={0.1}
                            config={config.default}
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                zIndex: 1
                            }}
                        >

                            <div
                                style={{
                                    width: "75%",
                                    height: "80%",
                                    alignSelf: "center",
                                    display: "flex",
                                    flexDirection: "column"
                                }}
                            >

                                <h3
                                    style={{
                                        fontSize: 100,
                                        marginBottom: 0,
                                        marginTop: 0
                                    }}>
                                    Keepcup Discount?
                                </h3>

                                <div
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        display: "flex",
                                        fontSize: 30
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "40%",
                                            height: "100%",
                                        }}
                                    >
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>


                                    </div>

                                    <div
                                        style={{
                                            width: "5%",
                                        }}
                                    />

                                    <div
                                        style={{
                                            width: "40%",
                                            height: "100%",
                                        }}
                                    >
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                                    </div>

                                </div>
                            </div>
                        </ParallaxLayer>

                    </div>

                    <ParallaxLayer
                        speed={-1}
                        horizontal
                        style={{
                            display: "flex",
                        }}
                    >
                        <text
                            style={{
                                color: offWhite,
                                fontSize: 250,
                                alignSelf: "center",
                                position: "absolute",
                                left: "-545%",
                                opacity: "20%"
                            }}
                        >
                            COME FIND US
                        </text>
                    </ParallaxLayer>

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
