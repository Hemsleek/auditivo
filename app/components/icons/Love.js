import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={8}
            height={8}
            viewBox="0 0 11 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#prefix__clip0)">
                <Path
                    d="M5.5 10l-.8-.7C1.9 6.7 0 5.1 0 3c0-1.6 1.3-3 2.9-3H3c.9 0 1.9.4 2.5 1.1C6.1.4 7 0 7.9 0c1.6 0 3 1.3 3 2.9V3c0 2.1-1.9 3.7-4.7 6.3l-.7.7z"
                    fill="orange"
                />
            </G>
            <Defs>
                <ClipPath id="prefix__clip0">
                    <Path fill="orange" d="M0 0h10.9v10H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default SvgComponent
