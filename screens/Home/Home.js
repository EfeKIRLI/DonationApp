import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import style from "../Home/style";
import { View,Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";


import globalStyle from "../../assets/styles/globalStyle";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import Tab from "../../components/Tab/Tab";
import Badge from "../../components/Badge/Badge";
import Search from "../../components/Search/Search";
import SingleDonationItem from "../../components/SingleDonationItem/SingleDonationItem";


const Home = () => { 
    return ( 
        <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
        
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
        <SingleDonationItem 
        uri={require('../../assets/stickers-cactus-cartoon-illustration.jpg.jpg')} 
        badgeTitle={"Environment"} 
        donationTitle={"Tree Cactus"} 
        price={65} />
        </SafeAreaView>
    )
}

export default Home ;