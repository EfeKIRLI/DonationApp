import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import style from "../Home/style";
import { Pressable, View, Text, ScrollView, Image } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";


import globalStyle from "../../assets/styles/globalStyle";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import Tab from "../../components/Tab/Tab";
import Badge from "../../components/Badge/Badge";
import Search from "../../components/Search/Search";
import SingleDonationItem from "../../components/SingleDonationItem/SingleDonationItem";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { resetToInitialState, updatedFirstName } from "../../redux/reducer/User";


const Home = () => {

    const user = useSelector(state => state.user)  //  LOG  {"firstName": "John", "lastName": "Doe", "userId": 1}
    // console.log(user)
    // güncelleme yapabilmek için "dispatch" kullanılacak.
    const dispatch = useDispatch();
    // dispatch(resetToInitialState())


    // const [img, setImg] = useState()


    // useEffect(() => {
    //     console.log('--', user.profileImage)


    //     return () => {

    //     }
    // }, [])


    return (
        <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
            {/* <Header title={"EFEEEE"} /> */}
            <ScrollView showsVerticalScrollIndicator={false} >
                <View style={style.header}>
                    <View>
                        <Text style={style.headerIntroText}> Hello! </Text>
                        <View style={style.username}>
                            <Header title={user.firstName + " " + user.lastName[0] + "." + user.userId + " 👋"} />
                        </View>
                    </View>

                    <View>
                        <Image
                            resizeMode="contain"
                            source={require('../../assets/user.png')}
                            style={style.profileImage}
                        />
                    </View>
                    {/* görünütüyü görebilmek için stil dosyasına ihtiyaç var  */}
                </View>
                <View style={style.searchBox}>
                    <Search />
                </View>
                <Pressable>
                    <Image
                    style={style.highlightedImage} 
                    source={require('../../assets/highlighted_image.png')} resizeMode={'contain'}/>
                </Pressable>
            </ScrollView>

            <Pressable onPress={() => dispatch(updatedFirstName({ firstName: 'J' }))} >
                {/* dispatch state'i güncellemek ve store'a kaydetmek(yazdırmak)için kullanıldı. */}
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

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
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

export default Home;