import * as React from "react";
import { ParallaxLayer } from '@react-spring/parallax';

const offBlack = "#1f1d1e";
const offWhite = "#f4f4f9";

export const Sustain = (props) => {

    const [tSize, setTSize] = React.useState("5vw");
    const [pSize, setPSize] = React.useState("1.25vw");

    React.useEffect(() => {

        if (props.device === "mobile") {
            setTSize("11vw");
            setPSize("4vw");
        }
        else if (props.device === "tablet") {
            setTSize("10vw");
            setPSize("3vw");
        }

    }, [props.device]);


    if (props.device === "desktop" || props.device === "other") {
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
                                alignSelf: "center",
                                textShadow: "0px 0px 10px #000, 0px 2px 30px #000"
                            }}
                        >
                            <div
                                style={{
                                    width: "45%",
                                    height: "100%",
                                }}
                            >
                                <p>
                                    When I opened The Boneyard Espresso, one of my main goals was to create as little environmental impact as I could.
                                    For the fit-out, I used as many secondhand, salvaged and vintage materials as possible.
                                    The paint was a mixture of leftover tins, hence the variety on our white walls.
                                    Even the wall cladding is reclaimed timber from an old Queenslander in the area.
                                    As for our furnishings, they were all sourced from friends, family and marketplaces. After some love and TLC, they were good as new!
                                    Our low-waste mission didn't stop there - it's been a challenge, but I knew I needed to be able to operate sustainably.
                                    With any business there is going to be waste, but it's our responsibility to minimise it.
                                    We endeavour to produce less than a wheelie bin of landfill per month - no need for skip bins at this business!

                                </p>
                                <p>
                                    Our fresh, organic milk comes in bulk, straight from the local SEQ Barambah Dairies in 10L sacks.
                                    These sacks reduce the amount of milk-related waste by upwards of 80%.
                                </p>
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
                                <p>
                                    We encourage our customers to dine in, feel the ocean breeze and enjoy their coffee in a ceramic mug.
                                    If you prefer takeaway, we've got that covered too. All our takeaway cups are 100% home compostable (lid included!) and break down in a matter of weeks.
                                    We even have a collection point in-store for your old cups.
                                    The Boneyard Espresso offers a $1 discount for reusable cups, as well as stocking reusable straws and Keep Cups - your first Keep Cup coffee is free!
                                </p>
                                <p>
                                    Our other eco-concious initiatives:
                                </p>
                                <ul>
                                    <li>
                                        We give away our spent grounds for customers to use at home in their gardens
                                    </li>
                                    <li>
                                        We only offer digital receipts
                                    </li>
                                    <li>
                                        We do not use ANY single-use plastics
                                    </li>
                                    <li>
                                        We focus on sustainable, local and plant-based snacks and treats
                                    </li>
                                    <li>
                                        Our stock and packaging are majority sourced from local Australian brands
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </ParallaxLayer>
            </div >
        )

    }
    else if (props.device === "tablet") {
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
                                alignSelf: "center",
                                textShadow: "0px 0px 10px #000, 0px 2px 30px #000"
                            }}
                        >

                            <div
                                style={{
                                    width: "90%",
                                    height: "100%",
                                }}
                            >
                                <p>
                                    We encourage our customers to dine in, feel the ocean breeze and enjoy their coffee in a ceramic mug.
                                    If you prefer takeaway, we've got that covered too. All our takeaway cups are 100% home compostable (lid included!) and break down in a matter of weeks.
                                    We even have a collection point in-store for your old cups.
                                    The Boneyard Espresso offers a $1 discount for reusable cups, as well as stocking reusable straws and Keep Cups - your first Keep Cup coffee is free!
                                </p>
                                <p>
                                    Our fresh, organic milk comes in bulk, straight from the local SEQ Barambah Dairies in 10L sacks.
                                    These sacks reduce the amount of milk-related waste by upwards of 80%.
                                </p>
                                <p>
                                    Our other eco-concious initiatives:
                                </p>
                                <ul>
                                    <li>
                                        We give away our spent grounds for customers to use at home in their gardens
                                    </li>
                                    <li>
                                        We only offer digital receipts
                                    </li>
                                    <li>
                                        We do not use ANY single-use plastics
                                    </li>
                                    <li>
                                        We focus on sustainable, local and plant-based snacks and treats
                                    </li>
                                    <li>
                                        Our stock and packaging are majority sourced from local Australian brands
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </ParallaxLayer>
            </div >
        )

    }
    else if (props.device === "mobile") {
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
                                alignSelf: "center",
                                textShadow: "0px 0px 10px #000, 0px 2px 30px #000"
                            }}
                        >

                            <div
                                style={{
                                    width: "90%",
                                    height: "100%",
                                }}
                            >
                                <p>
                                    We encourage our customers to dine in, feel the ocean breeze and enjoy their coffee in a ceramic mug.
                                    If you prefer takeaway, we've got that covered too. All our takeaway cups are 100% home compostable (lid included!) and break down in a matter of weeks.
                                    We even have a collection point in-store for your old cups.
                                    The Boneyard Espresso offers a $1 discount for reusable cups, as well as stocking reusable straws and Keep Cups - your first Keep Cup coffee is free!
                                </p>
                                <p>
                                    Our other eco-concious initiatives:
                                </p>
                                <ul>
                                    <li>
                                        We give away our spent grounds for customers to use at home in their gardens
                                    </li>
                                    <li>
                                        We only offer digital receipts
                                    </li>
                                    <li>
                                        We do not use ANY single-use plastics
                                    </li>
                                    <li>
                                        We focus on sustainable, local and plant-based snacks and treats
                                    </li>
                                    <li>
                                        Our stock and packaging are majority sourced from local Australian brands
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </ParallaxLayer>
            </div >
        )

    }
}