import * as React from "react";
import { useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { isDesktop, isMobileOnly, isTablet } from "react-device-detect";
import LazyLoad from 'react-lazy-load';

import { CremaTitle } from "../components/CremaTitle.js";
import { ScrollArrows } from "../components/ScrollArrows.js";
import { NavMenu } from "../components/NavMenu.js";
import { About } from "../components/IndexSections/About.js";
import { Food } from "../components/IndexSections/Food.js";
import { Drinks } from "../components/IndexSections/Drinks.js";
import { Sustain } from "../components/IndexSections/Sustain.js";
import { Contact } from "../components/IndexSections/Contact.js";
import { BackgroundText } from "../components/BackgroundText.js";

import landingBG from "../assets/images/backgrounds/espressoBlack.jpg";
import cookiesBG from "../assets/images/backgrounds/cookies.jpg";
import keepcupBG from "../assets/images/backgrounds/keepcup.jpg";
import outsideBG from "../assets/images/backgrounds/outside.jpg";

//const offBlack = "#1f1d1e";
const offWhite = "#f4f4f9";
const green = "#5d9835";
const orange = "#f2a541";
const red = "#db4451"; //3b0d11


const Index = () => {

    const parallax = useRef(null);
    const [height, setHeight] = useState(0);
    const [deviceType, setDeviceType] = useState(null);

    useEffect(() => {

        if (isDesktop) {
            setDeviceType("desktop");
        }
        else if (isTablet) {
            setDeviceType("tablet");
        }
        else if (isMobileOnly) {
            setDeviceType("mobile");
        }
        else {
            setDeviceType("desktop");
        }
        setHeight(window.innerHeight);

    }, []);

    return (
        <div className="application">
            <Helmet>
                <html lang='en' />
                <meta
                    charSet="utf-8"
                    name="description"
                    content="Homepage of the Boneyard Espresso and Collective"
                />
                <title>The Boneyard Espresso</title>
                <desc>Homepage of The Boneyard Epresso and Collective</desc>
                <link rel="canonical" href="https://boneyardespresso.com" />
            </Helmet>

            <Parallax
                ref={parallax}
                pages={8}
                config={{
                    tension: 70,
                    friction: 20,
                }}
                style={{
                    top: 0,
                    left: 0,
                    fontFamily: "Playfair"
                }}
            >
                <ParallaxLayer offset={0}>

                    <div
                        style={{
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundImage: 'url(' + landingBG + ')',
                        }}
                    />

                    <div
                        style={{
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                            position: "absolute",
                        }}
                    >
                        <CremaTitle device={deviceType} />
                        <ScrollArrows device={deviceType} ref={parallax} arrows={[["down", 1]]} />
                        <NavMenu device={deviceType} ref={parallax} />

                    </div>




                </ParallaxLayer>

                <ParallaxLayer
                    offset={1}
                    style={{
                        display: "flex",
                        justifyContent: 'center'
                    }}
                >
                    <About device={deviceType} height={height} />
                    <ScrollArrows device={deviceType} ref={parallax} arrows={[["up", 0], ["down", 2.5]]} />

                </ParallaxLayer>

                <ParallaxLayer
                    offset={1.5}
                    speed={-0.1}
                    style={{
                        zIndex: -1
                    }}
                >

                    <LazyLoad offset={height} debounce={false}>
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
                    </LazyLoad>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2.5}
                    style={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >

                    <Drinks device={deviceType} />
                    <BackgroundText text="DRINKS" color={orange} />
                    <ScrollArrows device={deviceType} ref={parallax} arrows={[["up", 1], ["down", 4]]} />

                </ParallaxLayer>

                <ParallaxLayer
                    offset={3.25}
                    speed={-0.1}
                    style={{
                        zIndex: -1
                    }}
                >
                    <LazyLoad offset={height} debounce={false}>
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
                    </LazyLoad>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={4}
                    style={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <Food height={height} device={deviceType} />
                    <BackgroundText text="FOOD" color={red} />
                    <ScrollArrows device={deviceType} ref={parallax} arrows={[["up", 2.5], ["down", 5.5]]} />

                </ParallaxLayer>

                <ParallaxLayer
                    offset={4.75}
                    speed={-0.1}
                    style={{
                        zIndex: -1
                    }}
                >
                    <LazyLoad offset={height} debounce={false}>
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

                    </LazyLoad>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={5.5}
                    style={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <Sustain device={deviceType} />
                    <BackgroundText text="SUSTAINABILITY" color={green} sus={true} />
                    <ScrollArrows device={deviceType} ref={parallax} arrows={[["up", 4], ["down", 7]]} />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={6.25}
                    speed={-0.1}
                    style={{
                        zIndex: -1
                    }}
                >
                    <LazyLoad offset={height} debounce={false}>
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

                    </LazyLoad>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={7}
                    style={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <Contact device={deviceType} height={height} />
                    <BackgroundText text="Contact" color={offWhite} size={"20vw"} />
                    <ScrollArrows device={deviceType} ref={parallax} arrows={[["up", 5.5]]} />
                </ParallaxLayer>

            </Parallax>
        </div >
    )
}


export default Index
