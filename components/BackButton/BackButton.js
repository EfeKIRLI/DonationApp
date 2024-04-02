import react from "react";
import style from "../../components/BackButton/style";
import { Pressable } from "react-native";
import PropTypes from "prop-types"
import FontAwesome from "@expo/vector-icons/FontAwesome";

const BackButton = (props) => {
    return (
        <Pressable onPress={() => props.onPress()} style={style.container}>
            <FontAwesome name={"arrow-left"} size={22} /> 
        </Pressable>
    )
};

BackButton.propTypes = {
    onPress: PropTypes.func.isRequired
}
export default BackButton;