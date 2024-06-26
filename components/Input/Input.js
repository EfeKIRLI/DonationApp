import React, { useState } from "react"
import { Text, TextInput, View } from "react-native"
import style from "../Input/style"
import globalStyle from "../../assets/styles/globalStyle"
import PropTypes from "prop-types"


const Input = (props) => {

    const [value, setValue] = useState("")

    return (
        <View>
            <Text style={style.label} > {props.label} </Text>
            <TextInput
                placeholder={props.placeholder ? props.placeholder : null}
                style={style.input}
                value={value}
                secureTextEntry={props.secureTextEntry}
                keyboardType={props.keyboardType ? props.keyboardType:'default'}
                onChangeText={(val) => {
                    setValue(val);
                    props.onChangeText(val)
                }}
            />

        </View>
    )
}
Input.defaultProps = { 
    onChangeText: () => {},
    keyboardType:'default',
    secureTextEntry:false
};
Input.propType = {
    keyboardType:PropTypes.string,
    placeholder: PropTypes.string,
    label: PropTypes.string.isRequired,
    onChangeText: PropTypes.func,
    secureTextEntry:PropTypes.bool
};

export default Input;