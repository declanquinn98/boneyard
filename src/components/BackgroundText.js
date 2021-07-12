import * as React from "react";
import { useRef, useEffect, useState } from "react";
import { config } from 'react-spring';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';

import styles from '../styles/global.css';

const offBlack = "#1f1d1e";
const offWhite = "#f4f4f9";
const green = "#5d9835";
const orange = "#f2a541";
const red = "#db4451";

export const BackgroundText = (props) => {

    const fontSize = props.sus ? "25vw" : "30vw";

    return (
        <h2
            style={{
                position: "absolute",
                color: props.color,
                fontFamily: "Stereofidelic",
                fontSize: fontSize,
                alignSelf: "center",
                opacity: "50%"
            }}
        >
            {props.text}
        </h2>
    )
}