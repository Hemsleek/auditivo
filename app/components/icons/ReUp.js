import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={8}
            height={8}
            viewBox="0 0 21 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M19.595 12.929v6.714L5.31 19.642v3.565L.294 18.19l5.017-5.016-.001 3.564h11.38v-3.81h2.905v.001zM15.738.793l5.017 5.017-5.017 5.016V7.261H3.404v3.81H.5V4.357h15.238V.793z"
                fill="orange"
            />
        </Svg>
    )
}

export default SvgComponent
