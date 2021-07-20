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

import landingVid from "../assets/images/backgrounds/landingVid.webm";
import foodBG from "../assets/images/backgrounds/food.jpg";
import sustainBG from "../assets/images/backgrounds/sustain.jpg";
import contactBG from "../assets/images/backgrounds/contact.jpg";
import drinksBG from "../assets/images/backgrounds/drinks.jpg";

//const offBlack = "#1f1d1e";
const offWhite = "#f4f4f9";
const green = "#5d9835";
const orange = "#f2a541";
const red = "#db4451"; //3b0d11

const AsyncImage = (props) => {

    const [loadedSrc, setLoadedSrc] = React.useState(null);

    React.useEffect(() => {

        setLoadedSrc(null);

        if (props.src) {

            const handleLoad = () => {
                setLoadedSrc(props.src);
            };

            const image = new Image();

            image.addEventListener('load', handleLoad);
            image.src = props.src;

            return () => {
                image.removeEventListener('load', handleLoad);
            };

        }
    }, [props.src]);

    if (loadedSrc === props.src) {

        if (props.landing) {
            return (
                <video
                    style={{
                        zIndex: -1,
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        objectFit: "cover"
                    }}
                    className='videoTag'
                    autoPlay
                    loop
                    muted
                >
                    <source src={landingVid} type='video/mp4' />
                </video>
            );
        }
        else {
            return (
                <div
                    style={{
                        height: "100vh",
                        width: "100vw",
                        backgroundImage: 'url(' + props.src + ')',
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }}
                />
            );
        }
    }
    return null;
};

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
                    fontFamily: "Playfair Display"
                }}
            >
                <ParallaxLayer offset={0}>


                    <div
                        style={{
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            zIndex: -2,
                            backgroundColor: "black"
                        }}
                    />
                    <AsyncImage src={foodBG} landing />
                    <div
                        style={{
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            backgroundColor: "rgba(0,0,0,0.5)"
                        }}
                    />
                    <div
                        style={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                            position: "absolute",
                            zIndex: 1,
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
                    offset={1.7}
                    speed={-0.1}
                    style={{
                        zIndex: -1
                    }}
                >
                    <LazyLoad offset={height} debounce={false}>
                        <AsyncImage src={drinksBG} />
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
                        <AsyncImage src={foodBG} />
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
                    offset={4.625}
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
                                backgroundImage: 'url(' + sustainBG + ')',
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
                    offset={6.125}
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
                                backgroundImage: 'url(' + contactBG + ')',
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
