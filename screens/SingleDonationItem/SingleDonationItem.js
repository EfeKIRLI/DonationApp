import react from "react";
import style from "../../screens/SingleDonationItem/style";
import { useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView,Image, View, Text } from "react-native";
import { State } from "react-native-gesture-handler";
import globalStyle from "../../assets/styles/globalStyle";
import BackButton from "../../components/BackButton/BackButton";
import Badge from "../../components/Badge/Badge";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";


const SingleDonationItem = ({navigation, route}) => {  // her bir ekran route parametresi ile gelir.
    const donationItemInformation = useSelector(state => state.donations.selecetedDonationInformation) // bu ekrana o bilgi öğesini bastıracağız.
    console.log(donationItemInformation)
    console.log(route)

const categoryInformation = route.params.categoryInformation
    return (
        <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
            <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
                <BackButton onPress={() => navigation.goBack()}/>
                    <Image source={{uri:donationItemInformation.image}} style={style.image} /> 
                    <View style={style.badge} >  
                    <Badge title={categoryInformation.name} /> 
                    </View>
                    <Header type={1} title={donationItemInformation.name} /> 
                    <Text style={style.description} > 
                     {donationItemInformation.description}
                     {donationItemInformation.description}
                     {donationItemInformation.description}
                     {donationItemInformation.description}
                     {donationItemInformation.description}
                     {donationItemInformation.description}
                     {donationItemInformation.description}
                     {donationItemInformation.description}
                     {donationItemInformation.description}
                     {donationItemInformation.description}
                     {donationItemInformation.description}
                      </Text>
            </ScrollView>
            <View style={style.button}> 
                <Button title={"Donate"}> </Button>
            </View>
        </SafeAreaView>
    )
};
export default SingleDonationItem;