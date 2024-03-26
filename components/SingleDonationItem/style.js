import { StyleSheet } from "react-native";

const style = StyleSheet.create({ 
    image : { 
        width:180,
        height:180,
        borderRadius:20,
        // resizeMode:'contain'
        
    },
    badge : { 
        position:'absolute',
        zIndex:1,
        top:14,
        left:10,

    },

    donationInformation : { 
        marginTop:16,
    },

    price : { 
        marginTop:5
    }
})

export default style;