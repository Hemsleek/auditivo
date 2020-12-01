import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={22}
            height={22}
            viewBox="0 0 44 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#prefix__clip0)">
                <Path
                    d="M41 10.75H3c-1.66 0-3 1.34-3 3v20c0 1.66 1.34 3 3 3h38c1.66 0 3-1.34 3-3v-20c0-1.66-1.34-3-3-3zm-12.86 4.9v12.77c-.05.75-.95 1.7-2.28 2.14-1.57.5-3.13-.07-3.48-1.16-.35-1.1.64-2.45 2.2-2.96.74-.23 1.47-.3 2.07-.16v-7.3l-8.2 2.18v9.5c-.05.74-.96 1.7-2.28 2.14-1.57.5-3.13-.08-3.5-1.17-.34-1.1.65-2.44 2.22-2.95.7-.24 1.44-.32 2.04-.17V18.25c0-.2.16-.4.36-.47L27.8 15c.2-.05.36.07.36.28v.37h-.02zm10.36-6.9H6.25c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1H38.5c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1zm-5.25-6h-21.5c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h21.5c.55 0 1 .45 1 1v.75c0 .55-.45 1-1 1z"
                    fill="#fff"
                />
            </G>
            <Defs>
                <ClipPath id="prefix__clip0">
                    <Path fill="#000" d="M0 0h44v36.75H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default SvgComponent
