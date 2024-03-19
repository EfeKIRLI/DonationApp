import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import style from "../Home/style";
import { Pressable, View,Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";


import globalStyle from "../../assets/styles/globalStyle";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import Tab from "../../components/Tab/Tab";
import Badge from "../../components/Badge/Badge";
import Search from "../../components/Search/Search";
import SingleDonationItem from "../../components/SingleDonationItem/SingleDonationItem";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { updatedFirstName } from "../../redux/reducer/User";


const Home = () => { 

    const user = useSelector(state => state.user )  //  LOG  {"firstName": "John", "lastName": "Doe", "userId": 1}
    // console.log(user)
    // güncelleme yapabilmek için "dispatch" kullanılacak.
    const dispatch = useDispatch();

    return ( 
        <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
            {/* <Header title={"EFEEEE"} /> */}
            <Header title={user.firstName + " " + user.lastName + " " + user.userId} />
            <Pressable onPress={() => dispatch(updatedFirstName({firstName:'J'}))} > 
                <Text> Update to firstName !</Text>
            </Pressable>
        
        {/* <Text> Hello </Text>
        <Header title={"Efe S.K."} type={1}/>
        <Header title={"Efe S.K."} type={2}/>
        <Header title={"Efe S.K."} type={3}/>

        <Button title={"Donate"} onPress={() => {console.log("You just pressed me!")}} />
        <Button title={"Donate"} isDisabled={true} />
       
            <Tab title={"Highlight"}  onPress={() => {console.log("You just pressed me!")}}/>
            <Tab title={"Highlight"}  onPress={() => {console.log("You just pressed me!")}} isInactive={true} />

        <Badge title={"Environment"}/>
            <FontAwesome  name={'search'} /> */}
        
        <View> 
            <Search onSearch={(value) => console.log(value)} />
        </View>

        <View style={{flexDirection:'row', justifyContent:'space-between',paddingHorizontal:20}}>
        <SingleDonationItem 
        uri={require('../../assets/cactus.jpeg')}
        badgeTitle={"Environment"} 
        donationTitle={"Tree Cactus"} 
        price={100}
         />

        <SingleDonationItem 
        uri={require('../../assets/cactus.jpeg')}
        badgeTitle={"Environment"} 
        donationTitle={"Tree Cactus"} 
        price={100}
         />

         </View>
        </SafeAreaView>
    )
}

export default Home ;