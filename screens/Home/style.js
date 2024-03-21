import { StyleSheet } from "react-native";

const style = StyleSheet.create({ 
    header :{ 
        marginTop:20,
        marginHorizontal:24,
        // backgroundColor:'red',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    headerIntroText : {
        fontSize:16,
        lineHeight:19,
        fontWeight:'400',
        color:'#636776'
    },

    username: { 
        marginTop: 5
    },
    profileImage : { 
        width:50,
        height:50,
    },

    searchBox : {
        marginHorizontal:25,
        marginTop:20
    },
    highlightedImage: { 
        width:'100%',
        height:170,
        marginTop:50,
    }
    
});

export default style;