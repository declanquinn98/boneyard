import * as React from "react";
import { useRef, useEffect, useState } from "react";
import { CremaTitle } from "../components/CremaTitle.js";
import { config } from 'react-spring';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';

import { Arrow } from "../components/Arrow.js";
import { About } from "../components/IndexSections/About.js";
import { Menu } from "../components/IndexSections/Menu.js";
import { Sustain } from "../components/IndexSections/Sustain.js";
import { Contact } from "../components/IndexSections/Contact.js";
import styles from '../styles/global.css';
import landingBG from "../assets/images/backgrounds/espressoBlack.jpg";
import cookiesBG from "../assets/images/backgrounds/cookies.jpg";
import keepcupBG from "../assets/images/backgrounds/keepcup.jpg";
import outsideBG from "../assets/images/backgrounds/outside.jpg";

const Wrapper = () => {

    const offBlack = "#1f1d1e";
    const offWhite = "#f4f4f9";
    const green = "#5d9835";
    const orange = "#f2a541";
    const red = "#db4451"; //3b0d11

    const parallax = useRef(null);
    const [width, setWidth] = useState(0);

    const ScrollTo = (page) => {
        parallax.current.scrollTo(page);
    }

    useEffect(() => {

        updateDimensions();

        window.addEventListener("resize", updateDimensions); 
        return () => window.removeEventListener("resize", updateDimensions);

    }, []);    
    
    const updateDimensions = () => {
        setWidth(window.innerWidth)
    }

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                fontFamily: "Playfair"
            }}
        >

            <Parallax
                pages={6.5}
                config={config.fast}
                ref={parallax}
                style={{
                    top: 0,
                    left: 0,
                }}
            >

                <ParallaxLayer offset={0}>
                    <div
                        style={{
                            height: "100%",
                            width: "100%",
                            backgroundImage: 'url(' + landingBG + ')',
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            position: "relative",
                            zIndex: -2,
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <CremaTitle />
                        <div
                            style={{
                                position: "absolute",
                                width: "5vh",
                                height: "5vh",
                                bottom: "2.5vh",
                                zIndex: 2,
                            }}
                            onClick={() => ScrollTo(1)}
                        >
                            <Arrow
                                up={false}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                }}
                            />
                        </div>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1}
                    style={{
                        display: "flex",
                        justifyContent: 'center'
                    }}
                >
                    <About />

                    <ParallaxLayer
                        speed={-1}
                        horizontal
                        style={{
                            display: "flex",
                        }}
                    >
                        <h2
                            style={{
                                color: orange,
                                fontSize: 500,
                                fontFamily: "Stereofidelic",
                                alignSelf: "center",
                                position: "relative",
                                left: "-40%",
                                opacity: "50%"
                            }}
                        >
                            HELLO
                        </h2>
                    </ParallaxLayer>
                    <div
                        style={{
                            position: "absolute",
                            width: "5vh",
                            height: "5vh",
                            top: "2.5vh",
                            zIndex: 2,
                        }}
                        onClick={() => ScrollTo(0)}
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
                        onClick={() => ScrollTo(2.5)}
                    >
                        <Arrow
                            up={false}
                            style={{
                                width: "100%",
                                height: "100%",
                            }}
                        />
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
                    style={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <Menu />

                    <ParallaxLayer
                        speed={-1}
                        horizontal
                        style={{
                            display: "flex",
                        }}
                    >
                        <h2
                            style={{
                                color: red,
                                fontSize: 500,
                                fontFamily: "Stereofidelic",
                                alignSelf: "center",
                                position: "absolute",
                                left: "-185%",
                                opacity: "25%"
                            }}
                        >
                            MENU
                        </h2>
                    </ParallaxLayer>

                    <div
                        style={{
                            position: "absolute",
                            width: "5vh",
                            height: "5vh",
                            top: "2.5vh",
                            zIndex: 2,
                        }}
                        onClick={() => ScrollTo(1)}
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
                        onClick={() => ScrollTo(4)}
                    >
                        <Arrow
                            up={false}
                            style={{
                                width: "100%",
                                height: "100%",
                            }}
                        />
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
                    style={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <Sustain />


                    <ParallaxLayer
                        speed={-1}
                        horizontal
                        style={{
                            display: "flex",
                        }}
                    >
                        <h2
                            style={{
                                color: green,
                                fontSize: 300,
                                fontFamily: "Stereofidelic",
                                alignSelf: "center",
                                position: "absolute",
                                left: "-360%",
                                opacity: "50%"
                            }}
                        >
                            SUSTAINABILITY
                        </h2>
                    </ParallaxLayer>



                    <div
                        style={{
                            position: "absolute",
                            width: "5vh",
                            height: "5vh",
                            top: "2.5vh",
                            zIndex: 2,
                        }}
                        onClick={() => ScrollTo(2.5)}
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
                        onClick={() => ScrollTo(5.5)}
                    >
                        <Arrow
                            up={false}
                            style={{
                                width: "100%",
                                height: "100%",
                            }}
                        />
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
                    style={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}
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
                        <Contact />

                    </div>

                    <ParallaxLayer
                        speed={-1}
                        horizontal
                        style={{
                            display: "flex",
                        }}
                    >
                        <h2
                            style={{
                                color: offWhite,
                                fontSize: 350,
                                fontFamily: "Stereofidelic",
                                alignSelf: "center",
                                position: "absolute",
                                left: "-490%",
                                opacity: "20%"
                            }}
                        >
                            FIND US
                        </h2>
                    </ParallaxLayer>




                    <div
                        style={{
                            position: "absolute",
                            width: "5vh",
                            height: "5vh",
                            top: "2.5vh",
                            zIndex: 2,
                        }}
                        onClick={() => ScrollTo(4)}
                    >
                        <Arrow
                            up={true}
                            style={{
                                width: "100%",
                                height: "100%",
                            }}
                        />
                    </div>


                </ParallaxLayer>

            </Parallax>


        </div>
    )

}


export default Wrapper