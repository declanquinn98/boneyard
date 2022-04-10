import * as React from "react";
import { useRef, useState } from "react";
import { useSpring, animated } from 'react-spring';
import { ParallaxLayer } from '@react-spring/parallax';
import LazyLoad from 'react-lazy-load';
import { Fade } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css'

import slide0 from "../../assets/images/AboutSlideshow/1.jpg";
import slide1 from "../../assets/images/AboutSlideshow/2.jpg";
import slide2 from "../../assets/images/AboutSlideshow/3.jpg";
import slide3 from "../../assets/images/AboutSlideshow/4.jpg";
import record from "../../assets/images/AboutSlideshow/record.png";

import coffee from "../../assets/images/coffeeIcon.png";
import community from "../../assets/images/communityIcon.png";
import sustainability from "../../assets/images/sustainabilityIcon.png";

const offBlack = "#1f1d1e";
const offWhite = "#f4f4f9";

const calcSleeveTransform = (x, y, rect) => [
    -(y - rect.top - rect.height / 2) / 10,
    (x - rect.left - rect.width / 2) / 10,
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

    const [t1Size, setT1Size] = useState("5vw");
    const [t2Size, setT2Size] = useState("3vw");
    const [t3Size, setT3Size] = useState("1.85vw");
    const [p1Size, setP1Size] = useState("1.25vw");
    const [p2Size, setP2Size] = useState("0.95vw");
    const [iconSize, setIconSize] = useState("3.75vw");

    React.useEffect(() => {

        if (props.device === "mobile") {
            setT1Size("12.5vw");
            setT2Size("7.5vw");
            setT3Size("4.5vw");
            setP1Size("3.75vw");
            setP2Size("3.5vw");
            setIconSize("11vw");
        }
        else if (props.device === "tablet") {
            setT1Size("10vw");
            setT2Size("6.25vw");
            setT3Size("3.75vw");
            setP1Size("2.5vw");
            setP2Size("2vw");
            setIconSize("7.5vw");
        }
    }, [props.device]);


    if (props.device === "desktop") {

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
                            alignSelf: "center"
                        }}
                    >
                        <div
                            style={{
                                width: "40%",
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center"
                            }}
                        >
                            <h3
                                style={{
                                    marginTop: 0,
                                    marginBottom: 0,
                                    fontFamily: "Oswald",
                                    fontSize: t1Size,
                                }}
                            >
                                Hello
                            </h3>
                            <div>
                                <p
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        fontSize: p1Size,
                                    }}
                                >
                                    We are one half of the Boneyard Collective - a family of Redcliffe locals who share a passion for great coffee and great music.
                                    Our other half is The Boneyard Records and Relics.
                                    As the name would suggest, they stock a vast selection of new and vintage vinyl, as well as a range of funky relics and handmade goods.
                                    With new stock sourced weekly, you never know what gems you'll find.
                                </p>
                            </div>
                            <h4
                                style={{
                                    fontSize: t2Size,
                                    fontFamily: "Oswald",
                                    marginBottom: "3vh",
                                    marginTop: 0,
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
                                            width: iconSize,
                                            height: iconSize,
                                            objectFit: "contain",
                                            alignSelf: "center"
                                        }}
                                    />
                                    <p
                                        style={{
                                            marginTop: "1vh",
                                            marginBottom: 0,
                                            fontSize: t3Size,
                                            fontFamily: "Oswald"
                                        }}
                                    >
                                        Quality Coffee
                                    </p>
                                    <p
                                        style={{
                                            marginTop: "1vh",
                                            fontSize: p2Size,
                                        }}
                                    >
                                        Great brews every time thanks to Fonzie Abbot.
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
                                            width: iconSize,
                                            height: iconSize,
                                            objectFit: "contain",
                                            alignSelf: "center"
                                        }}
                                    />
                                    <p
                                        style={{
                                            marginTop: "1vh",
                                            marginBottom: 0,
                                            fontSize: t3Size,
                                            fontFamily: "Oswald"
                                        }}
                                    >
                                        Sustainability
                                    </p>
                                    <p
                                        style={{
                                            marginTop: "1vh",
                                            fontSize: p2Size,
                                        }}
                                    >
                                        We like this planet, and operate with its well-being in mind.
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
                                            width: iconSize,
                                            height: iconSize,
                                            objectFit: "contain",
                                            alignSelf: "center"
                                        }}
                                    />
                                    <p
                                        style={{
                                            marginTop: "1vh",
                                            marginBottom: 0,
                                            fontSize: t3Size,
                                            fontFamily: "Oswald"
                                        }}
                                    >
                                        Community
                                    </p>
                                    <p
                                        style={{
                                            marginTop: "1vh",
                                            fontSize: p2Size,
                                        }}
                                    >
                                        Family run and family owned.
                                    </p>
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
                                        width: "40vw",
                                        height: "40vw",
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
    else if (props.device === "tablet" || props.device === "mobile") {

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
                            flexDirection: "column",
                            justifyContent: "center",
                        }}
                    >
                        <h3
                            style={{
                                marginTop: 0,
                                marginBottom: 0,
                                fontFamily: "Oswald",
                                fontSize: t1Size,
                            }}
                        >
                            Hello
                        </h3>
                        <div>
                            <p
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    fontSize: p1Size,
                                }}
                            >
                                We are one half of the Boneyard Collective - a family of Redcliffe locals who share a passion for great coffee and great music.
                                Our other half is The Boneyard Records and Relics.
                                As the name would suggest, they stock a vast selection of new and vintage vinyl, as well as a range of funky relics and handmade goods.
                                With new stock sourced weekly, you never know what gems you'll find.

                            </p>
                        </div>
                        {
                            props.device === "mobile" ?
                                (
                                    <div />
                                )
                                :
                                (
                                    <div
                                        style={{
                                            width: "100%",
                                            display: "flex",
                                            alignSelf: "center",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            marginTop: "3vh",
                                            marginBottom: "3vh"
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
                                )
                        }
                        <h4
                            style={{
                                fontSize: t2Size,
                                fontFamily: "Oswald",
                                marginBottom: "2vh",
                                marginTop: "2vh",
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
                                        width: iconSize,
                                        height: iconSize,
                                        objectFit: "contain",
                                        alignSelf: "center"
                                    }}
                                />
                                <p
                                    style={{
                                        marginTop: "1vh",
                                        marginBottom: 0,
                                        fontSize: t3Size,
                                        fontFamily: "Oswald"
                                    }}
                                >
                                    Quality Coffee
                                </p>
                                <p
                                    style={{
                                        marginTop: "1vh",
                                        fontSize: p2Size,
                                    }}
                                >
                                    Great brews every time thanks to Fonzie Abbot.
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
                                        width: iconSize,
                                        height: iconSize,
                                        objectFit: "contain",
                                        alignSelf: "center"
                                    }}
                                />
                                <p
                                    style={{
                                        marginTop: "1vh",
                                        marginBottom: 0,
                                        fontSize: t3Size,
                                        fontFamily: "Oswald"
                                    }}
                                >
                                    Sustainability
                                </p>
                                <p
                                    style={{
                                        marginTop: "1vh",
                                        fontSize: p2Size,
                                    }}
                                >
                                    We like this planet, and operate with its well-being in mind.
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
                                        width: iconSize,
                                        height: iconSize,
                                        objectFit: "contain",
                                        alignSelf: "center"
                                    }}
                                />
                                <p
                                    style={{
                                        marginTop: "1vh",
                                        marginBottom: 0,
                                        fontSize: t3Size,
                                        fontFamily: "Oswald"
                                    }}
                                >
                                    Community
                                </p>
                                <p
                                    style={{
                                        marginTop: "1vh",
                                        fontSize: p2Size,
                                    }}
                                >
                                    Family run and family owned.
                                </p>
                            </div>
                        </div>

                        <div
                            style={{
                                height: "15vw",
                                width: "100vw",
                            }}
                        />
                    </div>

                </ParallaxLayer>
            </div >
        )
    }

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

                <img
                    src={slide0}
                    alt={"Slide 1"}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                    }}
                />

                <LazyLoad offset={props.height} debounce={false}>
                    <img
                        src={slide1}
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
                        src={slide2}
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
                        src={slide3}
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