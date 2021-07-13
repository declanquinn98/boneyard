import * as React from "react";
import { ParallaxLayer } from '@react-spring/parallax';
import GoogleMap from 'google-map-react';
import { mapStyle } from "../../styles/map.js"
import InstagramFeed from 'react-ig-feed'
import 'react-ig-feed/dist/index.css'

const offBlack = "#1f1d1e";
const offWhite = "#f4f4f9";

export const Contact = () => {

    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                color: offWhite,
                backgroundColor: offBlack
            }}
        >
            <ParallaxLayer
                offset={0.7}
                speed={0.1}
                style={{
                    display: "flex",
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
                        justifyContent: "space-between",
                        zIndex: 1,
                    }}
                >
                    <div
                        style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                        }}
                    >
                        <div
                            style={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <h4
                                style={{
                                    fontFamily: "Oswald",
                                    fontSize: "2.5vw",
                                    marginTop: 0,
                                    marginBottom: 0,
                                }}
                            >
                                18 Anzac ave, Redcliffe QLD 4020
                                <br />
                                Open Tuesday - Sunday 7am-2pm
                                <br />
                                hello@boneyardespresso.com
                                <br />
                                0413 442 321
                            </h4>

                            <div
                                style={{
                                    fontSize: "4vw",
                                    alignSelf: "flex-end",
                                    marginRight: "7.25vw",
                                }}
                            >
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href={"https://www.facebook.com/boneyardespresso"}
                                    style={{
                                        marginTop: 0,
                                        marginBottom: 0,
                                        fontFamily: "Facebook",
                                        color: offWhite,
                                        textDecoration: "none"
                                    }}
                                >
                                    facebook
                                </a>
                                <br />
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href={"https://www.instagram.com/boneyardespresso"}
                                    style={{
                                        marginTop: 0,
                                        marginBottom: 0,
                                        fontFamily: "instagram",
                                        color: offWhite,
                                        textDecoration: "none"
                                    }}
                                >
                                    instagram
                                </a>

                            </div>
                        </div>

                        <div
                            style={{
                                display: "flex",
                                width: "100%",
                                height: "23vw",
                                marginTop: "1vw",
                                marginLeft: "0.15vw",
                                justifyContent: "space-between"
                            }}
                        >
                            <div
                                style={{
                                    height: "98%",
                                    alignSelf: "center",
                                    aspectRatio: "1/1",
                                }}
                            >
                                <Map w="100%" h="100%" />
                            </div>


                            <div
                                style={{
                                    height: "100%",
                                    aspectRatio: "1/1",
                                }}
                            >
                                <InstagramFeed
                                    counter="9"
                                    token={process.env.INSTAGRAM_TOKEN}
                                />
                            </div>


                        </div>
                    </div>


                </div>
            </ParallaxLayer>

        </div >
    )
}

const Map = (props) => {

    const center = {
        lat: -27.230883,
        lng: 153.115957
    }

    return (
        <div style={{ height: props.h, width: props.w }}>

            <GoogleMap
                bootstrapURLKeys={{ key: process.env.MAP_TOKEN }}
                defaultCenter={center}
                defaultZoom={17}
                options={{
                    zoomControl: false,
                    mapTypeControl: false,
                    streetViewControl: false,
                    rotateControl: false,
                    fullscreenControl: false,
                    styles: mapStyle
                }}
            >
                <Marker lat={center.lat} lng={center.lng} text="The Boneyard Espresso" />
            </GoogleMap>

        </div>
    );
}

const Marker = props => {
    return <>
        <div className="pin"></div>
        <div className="pulse"></div>
    </>
}