
import { StyleSheet } from "react-native";

const style = StyleSheet.create({ 
    Tab : { 
        backgroundColor:'#2979F2',
        height:50,
        // width:300,
        justifyContent:'center',
        borderRadius:50,
        marginHorizontal:20,
    },

    title :{ 
        fontSize:14,
        fontWeight:'500',
        lineHeight:17,
        color:'#FFFFFF',
        textAlign:'center',
       
    },

    isInactiveTab : { 
        backgroundColor:'#F3F5F9'
    },
    isInactiveTitle : { 
        color: '#79869F'
    }
});

export default style;




