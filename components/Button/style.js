import { StyleSheet } from "react-native";

const style = StyleSheet.create({ 
    button : { 
        backgroundColor:'#2979F2',
        height:55,
        // width:300,
        justifyContent:'center',
        borderRadius:50,
        marginHorizontal:20,
    },

    title :{ 
        fontSize:16,
        fontWeight:'500',
        lineHeight:19,
        color:'#FFFFFF',
        textAlign:'center',
       
    },

    disabled : { 
        opacity:0.6
    }
});

export default style;