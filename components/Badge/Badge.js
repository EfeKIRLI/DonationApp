import React, {useState,useRef} from "react";

import { View, Text } from "react-native";
import PropTypes from "prop-types";
import style from "../Badge/style";

const Badge = (props) => { 

    const [width, setWidth] = useState(0);
    const textRef = useRef(null);
    const paddingHorizontal = 10;
    const BadgeWidth = { 
        width:(paddingHorizontal * 2 + width)
    }
    console.log(width);
    return ( 
            <View style={[style.Badge, BadgeWidth]} > 
                <Text 
                onTextLayout={event => { 
                    setWidth(event.nativeEvent.lines[0].width)
                }}
                ref={textRef} 
                style={style.title} > 
                {props.title} 
                </Text>
            </View>
    )
}




Badge.propTypes = { 
    title: PropTypes.string.isRequired,
}

export default Badge;