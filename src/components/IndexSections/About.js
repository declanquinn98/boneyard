import * as React from "react";
import { useRef, useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import { ParallaxLayer } from '@react-spring/parallax';
import { useSpring, animated, config, to } from 'react-spring';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import styles from '../../styles/global.css';

import slide0 from "../../assets/images/AboutSlideshow/0.jpg";
import slide1 from "../../assets/images/AboutSlideshow/1.jpg";
import slide2 from "../../assets/images/AboutSlideshow/2.jpg";
import slide3 from "../../assets/images/AboutSlideshow/3.jpg";
import record from "../../assets/images/AboutSlideshow/record.png";

const offBlack = "#1f1d1e";
const offWhite = "#f4f4f9";


const calc = (x, y, rect) => [
    -(y - rect.top - rect.height / 2) / 5,
    (x - rect.left - rect.width / 2) / 5,
    1.4
];
const trans = (x, y, s) => `perspective(100vw) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export const About = () => {

    const ref = useRef(null);

    const [isHovered, setIsHovered] = useState(false);

    const [recordDelay, setRecordDelay] = useState(0);
    const sleeveDelayTime = 500
    const [sleeveDelay, setSleeveDelay] = useState(sleeveDelayTime);

    const [xys, setXYS] = useState([0, 0, 1]);
    const sleeveSpring = useSpring({ xys, delay: sleeveDelay });

    const [recordTRS, setRecordTRS] = useState([0, 0, 1]);
    const recordSpring = useSpring({ recordTRS, delay: recordDelay });

    const recordStyle = useSpring({
        to: [
            { opacity: 1, transform: `translateX(-${recordTRS[0]}%) rotate(${recordTRS[1]}deg) scale(${recordTRS[2]}, ${recordTRS[2]})` },
            { opacity: 0, transform: `translateX(-${recordTRS[0]}%) rotate(${recordTRS[1]}deg) scale(${recordTRS[2]}, ${recordTRS[2]})` },
        ],
        from: { opacity: 1, transform: `translateX(-${recordTRS[0]}%) rotate(${recordTRS[1]}deg) scale(${recordTRS[2]}, ${recordTRS[2]})` }
    })

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
                        alignSelf: "center",
                        display: "flex",
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
                                fontSize: "5vw",
                                fontFamily: "Oswald",
                                marginBottom: 0,
                                marginTop: 0,
                            }}
                        >
                            Hello
                        </h3>
                        <div
                            style={{
                                width: "100%",
                                display: "flex",
                                fontSize: "1.5vw",
                            }}
                        >
                            <div
                                style={{
                                    height: "100%",
                                    marginBottom: "3.5vh"
                                }}
                            >
                                <p> There's a cool record store and a cool coffee shop next door. IDK, whatever you want to put here Ruby. filler--- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
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
                        <div
                            ref={ref}
                            style={{
                                position: "absolute",
                                display: "flex",
                                alignSelf: "center",
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                        >
                            <animated.div className={"slideshow"} style={{ transform: sleeveSpring.xys.to(trans) }}>
                                <Slideshow autoplay={!isHovered} />
                            </animated.div>
                            <div
                                style={{
                                    width: "28vw",
                                    height: "28vw",
                                    zIndex: 1,
                                }}
                                onMouseEnter={async () => {
                                    setIsHovered(true);
                                    setRecordTRS([51.5, 180, 1])

                                    await new Promise(r => setTimeout(r, sleeveDelayTime));
                                    setSleeveDelay(0);
                                    setRecordDelay(sleeveDelayTime);
                                }}
                                onMouseLeave={async () => {
                                    setXYS([0, 0, 1]);
                                    setIsHovered(false);
                                    setRecordTRS([0, 0, 1])

                                    await new Promise(r => setTimeout(r, sleeveDelayTime));
                                    setSleeveDelay(sleeveDelayTime);
                                    setRecordDelay(0);
                                }}
                                onMouseMove={(e) => {
                                    const rect = ref.current.getBoundingClientRect();
                                    setXYS(calc(e.clientX, e.clientY, rect));
                                }}
                            />
                        </div>
                        <animated.img
                            src={record}
                            style={{
                                position: "relative",
                                left: "25%",
                                width: "26vw",
                                height: "26vw",
                                zIndex: -1,
                                transform: recordSpring.recordTRS.to((t, r, s) => `translateX(-${t}%) rotate(${r}deg) scale(${s}, ${s})`)
                            }}
                        />
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
                duration={3000}
                style={{
                    width: "100%",
                    height: "100%",
                    alignSelf: "center"
                }}
            >

                <div className="each-fade" style={{ width: "100%", height: "100%" }}>
                    <div className="image-container" style={{ width: "100%", height: "100%" }}>
                        <img
                            src={slide3}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover"
                            }}
                        />
                    </div>
                </div>

                <div className="each-fade" style={{ width: "100%", height: "100%" }}>
                    <div className="image-container" style={{ width: "100%", height: "100%" }}>
                        <img
                            src={slide0}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover"
                            }}
                        />
                    </div>
                </div>
                <div className="each-fade" style={{ width: "100%", height: "100%" }}>
                    <div className="image-container" style={{ width: "100%", height: "100%" }}>
                        <img
                            src={slide1}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover"
                            }}
                        />
                    </div>
                </div>
                <div className="each-fade" style={{ width: "100%", height: "100%" }}>
                    <div className="image-container" style={{ width: "100%", height: "100%" }}>
                        <img
                            src={slide2}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover"
                            }}
                        />
                    </div>
                </div>

            </Fade>
        </div>
    )
}