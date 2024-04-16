import React from "react";

import { Pressable, Text } from "react-native";
import PropTypes from "prop-types";
import style from "../Button/style";

const Button = (props) => { 
    return ( 
            <Pressable 
            disabled={props.isDisabled}
            style={[style.button, props.isDisabled && style.disabled ]}
             onPress={() => {
                // if (typeof props.onPress === 'function') {
                //     props.onPress();
                //     console.log('Pressed the Donate!!!!');
                // }

                props.onPress()
                console.log('Pressed the Donate!!!!')
                }} > 

                <Text style={style.title} > {props.title} </Text>
            </Pressable>
    )
}

Button.default = { 
    isDisabled:false,
    onPress:() => {}
}

Button.propTypes = { 
    title: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool,
    onPress:PropTypes.func,
}

export default Button;