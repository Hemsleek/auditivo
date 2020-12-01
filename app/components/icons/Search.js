import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={22}
            height={22}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M15.756 14.573l-3.943-3.96a6.312 6.312 0 001.57-4.154C13.383 2.892 10.38 0 6.69 0 3.002 0 0 2.898 0 6.46s3.002 6.46 6.69 6.46a6.77 6.77 0 003.834-1.17l3.975 3.99a.885.885 0 001.227.024.817.817 0 00.024-1.19l.006-.001zM6.69 1.686c2.728 0 4.947 2.142 4.947 4.773 0 2.63-2.22 4.77-4.947 4.77-2.726 0-4.944-2.14-4.944-4.776 0-2.632 2.218-4.774 4.944-4.774v.007z"
                fill="#fff"
            />
        </Svg>
    )
}

export default SvgComponent
