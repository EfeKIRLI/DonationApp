import { StyleSheet } from "react-native";

const style = StyleSheet.create({ 
    container : { 
        marginHorizontal:24,
        flex:1,
        justifyContent:'center'
    },

    backButton : { 
        marginLeft: 14,
        marginTop:10,
        // position:'relatively'
    },

    error : { 
        fontSize:16,
        color:'#FF0000',
        marginBottom:24
    },

    success: { 
        fontSize:16,
        color:'#28a745',
        marginBottom:24

    }

    // registrationButton :{ 
    //     alignItems:'center'
    // }
});

export default style;