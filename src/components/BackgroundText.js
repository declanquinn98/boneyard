import * as React from "react";

export const BackgroundText = (props) => {

    const fontSize = props.sus ? "25vw" : props.size ? props.size : "30vw";
    const opacity = props.sus ? "40%" : "50%";
    return (
        <h2
            style={{
                position: "absolute",
                color: props.color,
                fontFamily: "Stereofidelic",
                fontSize: fontSize,
                alignSelf: "center",
                opacity: opacity,
            }}
        >
            {props.text}
        </h2>
    )
}