import { StyleSheet } from "react-native";

const style = StyleSheet.create({ 

    searchInput :{ 
        // borderWidth:1,
        flex:1,
        marginLeft:10,
        height:'100%',
        fontSize:16,
        lineHeight:16,
        color:'#686C7A'

    },

    searchInputContainer : { 
        marginTop:20,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#f3f5f9',
        paddingHorizontal:16,
        height:50,
        borderRadius:50
    }
})

export default style;