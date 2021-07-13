import * as React from "react";
import { useRef, useState } from "react";
import { useSpring, animated } from 'react-spring';
import { ParallaxLayer } from '@react-spring/parallax';
import LazyLoad from 'react-lazy-load';
import { Fade } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css'

import slide0 from "../../assets/images/AboutSlideshow/0.jpg";
import slide1 from "../../assets/images/AboutSlideshow/1.jpg";
import slide2 from "../../assets/images/AboutSlideshow/2.jpg";
import slide3 from "../../assets/images/AboutSlideshow/3.jpg";
import record from "../../assets/images/AboutSlideshow/record.png";

import coffee from "../../assets/images/coffeeIcon.png";
import community from "../../assets/images/communityIcon.png";
import sustainability from "../../assets/images/sustainabilityIcon.png";

const offBlack = "#1f1d1e";
const offWhite = "#f4f4f9";

const calcSleeveTransform = (x, y, rect) => [
    -(y - rect.top - rect.height / 2) / 5,
    (x - rect.left - rect.width / 2) / 5,
    1.4
];

export const About = (props) => {

    const ref = useRef(null);

    const [isHovered, setIsHovered] = useState(false);

    const sleeveDelayTime = 400
    const [sleeveDelay, setSleeveDelay] = useState(sleeveDelayTime);

    const [sleeveXYS, setSleeveXYS] = useState([0, 0, 1]);
    const sleeveSpring = useSpring({ sleeveXYS, delay: sleeveDelay });

    const [recordTRS, setRecordTRS] = useState([0, 0, 1]);
    const recordSpring = useSpring({ recordTRS });


    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                textShadow: "0px 0px 25px rgba(0,0,0,1)",
                color: offWhite,
                backgroundColor: offBlack
            }}
        >
            <ParallaxLayer
                offset={0.1}
                speed={0.1}
                style={{
                    display: "flex",
                    height: "100%",
                    justifyContent: "center",
                    zIndex: 1,
                }}
            >
                <div
                    style={{
                        width: "90%",
                        height: "85%",
                        display: "flex",
                        alignSelf: "center",
                    }}
                >
                    <div
                        style={{
                            width: "40%",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                        }}
                    >
                        <h3
                            style={{
                                marginTop: 0,
                                marginBottom: 0,
                                fontFamily: "Oswald",
                                fontSize: "5vw",
                            }}
                        >
                            Hello
                        </h3>
                        <div>
                            <p
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    fontSize: "1vw",
                                }}
                            >
                                There's a cool record store and a cool coffee shop next door. IDK, whatever you want to put here Ruby. filler--- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <h4
                            style={{
                                fontSize: "2.5vw",
                                fontFamily: "Oswald",
                                marginBottom: "3vh",
                                textAlign: "center"
                            }}
                        >
                            We Value
                        </h4>
                        <div
                            style={{
                                width: "100%",
                                display: "flex",
                                textAlign: "center",
                                justifyContent: "space-around",
                            }}
                        >
                            <div
                                style={{
                                    width: "30%",
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <img
                                    src={coffee}
                                    alt={"Quality Coffee"}
                                    style={{
                                        width: "3vw",
                                        height: "3vw",
                                        objectFit: "contain",
                                        alignSelf: "center"
                                    }}
                                />
                                <p
                                    style={{
                                        marginTop: "1vh",
                                        marginBottom: 0,
                                        fontSize: "1.5vw",
                                        fontFamily: "Oswald"
                                    }}
                                >
                                    Quality Coffee
                                </p>
                                <p
                                    style={{
                                        marginTop: "1vh",
                                        fontSize: "0.75vw",
                                    }}
                                >
                                    Our beans are ethically sourced or something like that.
                                </p>
                            </div>

                            <div
                                style={{
                                    width: "30%",
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <img
                                    src={sustainability}
                                    alt={"Sustainability"}
                                    style={{
                                        width: "3vw",
                                        height: "3vw",
                                        objectFit: "contain",
                                        alignSelf: "center"
                                    }}
                                />
                                <p
                                    style={{
                                        marginTop: "1vh",
                                        marginBottom: 0,
                                        fontSize: "1.5vw",
                                        fontFamily: "Oswald"
                                    }}
                                >
                                    Sustainability
                                </p>
                                <p
                                    style={{
                                        marginTop: "1vh",
                                        fontSize: "0.75vw",
                                    }}
                                >
                                    We minimise our power usage and waste.??
                                </p>
                            </div>

                            <div
                                style={{
                                    width: "30%",
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <img
                                    src={community}
                                    alt={"Community"}
                                    style={{
                                        width: "3vw",
                                        height: "3vw",
                                        objectFit: "contain",
                                        alignSelf: "center"
                                    }}
                                />
                                <p
                                    style={{
                                        marginTop: "1vh",
                                        marginBottom: 0,
                                        fontSize: "1.5vw",
                                        fontFamily: "Oswald"
                                    }}
                                >
                                    Community
                                </p>
                                <p
                                    style={{
                                        marginTop: "1vh",
                                        fontSize: "0.75vw",
                                    }}
                                >
                                    We like our neighbours, they're very cool.
                                </p>
                            </div>
                        </div>
                        <div
                            style={{
                                height: "6vw"
                            }}
                        />
                    </div>
                    <div
                        style={{
                            width: "60%",
                            height: "100%",
                            display: "flex",
                            alignSelf: "center",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    >
                        <animated.div className={"slideshow"} style={{ transform: sleeveSpring.sleeveXYS.to((x, y, s) => `perspective(100vw) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`) }}>
                            <Slideshow autoplay={!isHovered} />
                        </animated.div>
                        <div
                            ref={ref}
                            style={{
                                position: "absolute",
                                display: "flex",
                                alignSelf: "center",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <div
                                role={"none"}
                                style={{
                                    width: "26vw",
                                    height: "26vw",
                                    zIndex: 1,
                                }}
                                onMouseEnter={async () => {
                                    setIsHovered(true);
                                    setRecordTRS([51.5, 180, 1])

                                    await new Promise(r => setTimeout(r, sleeveDelayTime));
                                    setRecordTRS([51.5, 180, 0])
                                    setSleeveDelay(0);
                                }}
                                onMouseLeave={async () => {
                                    setSleeveXYS([0, 0, 1]);
                                    setRecordTRS([51.5, 180, 1])
                                    setIsHovered(false);

                                    await new Promise(r => setTimeout(r, sleeveDelayTime));
                                    setRecordTRS([0, 0, 1])
                                    setSleeveDelay(sleeveDelayTime);
                                }}
                                onMouseMove={(e) => {
                                    const rect = ref.current.getBoundingClientRect();
                                    setSleeveXYS(calcSleeveTransform(e.clientX, e.clientY, rect));
                                }}
                            />
                        </div>
                        <LazyLoad offset={props.height} debounce={false}>
                            <animated.img
                                src={record}
                                alt={"Vinyl Record"}
                                className={"slideshowrecord"}
                                style={{
                                    position: "relative",
                                    left: "50%",
                                    width: "26vw",
                                    height: "26vw",
                                    zIndex: -1,
                                    transform: recordSpring.recordTRS.to((t, r, s) => `translateX(-${t}%) rotate(${r}deg) scale(${s}, ${s})`)
                                }}
                            />
                        </LazyLoad>
                    </div>
                </div>
            </ParallaxLayer>
        </div >
    )
}

const Slideshow = (props) => {
    return (
        <div className="slide-container">
            <Fade
                arrows={false}
                autoplay={props.autoplay}
                duration={2500}
                style={{
                    width: "100%",
                    height: "100%",
                    alignSelf: "center"
                }}
            >

                <img
                    src={slide3}
                    alt={"Slide 1"}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                    }}
                />

                <LazyLoad offset={props.height} debounce={false}>
                    <img
                        src={slide0}
                        alt={"Slide 2"}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover"
                        }}
                    />
                </LazyLoad>

                <LazyLoad offset={props.height} debounce={false}>
                    <img
                        src={slide1}
                        alt={"Slide 3"}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover"
                        }}
                    />
                </LazyLoad>

                <LazyLoad offset={props.height} debounce={false}>
                    <img
                        src={slide2}
                        alt={"Slide 4"}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover"
                        }}
                    />
                </LazyLoad>
            </Fade>
        </div>
    )
}