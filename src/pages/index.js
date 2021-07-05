import * as React from "react";
import { useRef, useEffect, useState } from "react";
import { CremaTitle } from "../components/CremaTitle.js";
import { config } from 'react-spring';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { isDesktop, isMobileOnly, isTablet } from "react-device-detect";

import { ScrollArrows } from "../components/ScrollArrows.js";
import { NavMenu } from "../components/NavMenu.js";
import { About } from "../components/IndexSections/About.js";
import { Food, Menu } from "../components/IndexSections/Food.js";
import { Drinks } from "../components/IndexSections/Drinks.js";
import { Sustain } from "../components/IndexSections/Sustain.js";
import { Contact } from "../components/IndexSections/Contact.js";
import { BackgroundText } from "../components/BackgroundText.js";

import styles from '../styles/global.css';
import landingBG from "../assets/images/backgrounds/espressoBlack.jpg";
import cookiesBG from "../assets/images/backgrounds/cookies.jpg";
import keepcupBG from "../assets/images/backgrounds/keepcup.jpg";
import outsideBG from "../assets/images/backgrounds/outside.jpg";

const offBlack = "#1f1d1e";
const offWhite = "#f4f4f9";
const green = "#5d9835";
const orange = "#f2a541";
const red = "#db4451"; //3b0d11


const Index = () => {

    const parallax = useRef(null);

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
            setDeviceType("other");
        }
    }, []);

    return (
        <Parallax
            ref={parallax}
            pages={8}
            config={config.fast}
            style={{
                top: 0,
                left: 0,
                fontFamily: "Playfair"
            }}
        >
            <ParallaxLayer offset={0}>
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundImage: 'url(' + landingBG + ')',
                    }}
                >

                    <CremaTitle device={deviceType} />
                    <ScrollArrows ref={parallax} arrows={[["down", 1]]} />
                    <NavMenu ref={parallax}/>

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
                <BackgroundText text="hello" color={orange} />
                <ScrollArrows ref={parallax} arrows={[["up", 0], ["down", 2.5]]} />

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

                <Drinks />
                <BackgroundText text="DRINKS" color={red} />
                <ScrollArrows ref={parallax} arrows={[["up", 1], ["down", 4]]} />

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
                <Food />
                <BackgroundText text="FOOD" color={red} />
                <ScrollArrows ref={parallax} arrows={[["up", 2.5], ["down", 5.5]]} />

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
                <Sustain />
                <BackgroundText text="SUSTAINABILITY" color={green} />
                <ScrollArrows ref={parallax} arrows={[["up", 4], ["down", 7]]} />
            </ParallaxLayer>

            <ParallaxLayer
                offset={6.35}
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
                offset={7}
                style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <Contact />
                <BackgroundText text="FIND US" color={offWhite} />
                <ScrollArrows ref={parallax} arrows={[["up", 5.5]]} />
            </ParallaxLayer>

        </Parallax>
    )
}


export default Index
