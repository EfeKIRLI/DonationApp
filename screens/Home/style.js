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
        height:160,
        marginTop:30,
        // backgroundColor:'red'
    },

    categories : { 
        marginLeft:24,
        marginTop:20,
    },
    categoryItem : { 
        marginRight:1
    },
    categoryHeader : { 
        marginTop:8,
        // marginBottom: 16
    },

    donationItemsContainer : {
        // backgroundColor:'red',
        marginTop:20,
        marginHorizontal:24,
        flexDirection:'row',
        justifyContent:'space-between',
        flexWrap:'wrap'

    },

    singleDonationItem : { 
         maxWidth:'48%',
         marginBottom:23
    }
    
});

export default style;