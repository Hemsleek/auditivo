import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={22}
            height={22}
            viewBox="0 0 23 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#prefix__clip0)">
                <Path
                    d="M1 2.6h13.1c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1H1C.4 0 0 .4 0 1v.6c0 .5.4 1 1 1zm0 5.1h13.1c.6 0 1-.4 1-1v-.5c0-.6-.4-1-1-1H1c-.6 0-1 .4-1 1v.6c0 .5.4.9 1 .9zm0 5.2h8c.6 0 1-.4 1-1v-.6c0-.6-.4-1-1-1H1c-.6 0-1 .4-1 1v.6c0 .5.4 1 1 1zM16.7 1l-.2 9.5c-.4-.1-.8-.2-1.3-.3-2.1 0-3.8 1.7-3.8 3.8 0 2.1 1.6 3.9 3.7 3.9s3.8-1.7 3.8-3.8l.2-11.6h2.8c.6 0 1-.4 1-1V.9c0-.6-.4-1-1-1l-4.2.1c-.5 0-1 .4-1 1z"
                    fill="#fff"
                />
            </G>
            <Defs>
                <ClipPath id="prefix__clip0">
                    <Path fill="#fff" d="M0 0h23v18H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default SvgComponent
