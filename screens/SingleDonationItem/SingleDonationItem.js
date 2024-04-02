import react from "react";
import style from "../../screens/SingleDonationItem/style";
import { useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import { State } from "react-native-gesture-handler";
import globalStyle from "../../assets/styles/globalStyle";
import BackButton from "../../components/BackButton/BackButton";


const SingleDonationItem = ({navigation, route}) => {  // her bir ekran route parametresi ile gelir.
    const donationItemInformation = useSelector(state => state.donations.selecetedDonationInformation) // bu ekrana o bilgi öğesini bastıracağız.
    console.log(donationItemInformation)
    console.log(route)


    return (
        <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
            <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
                <BackButton onPress={() => navigation.goBack()}/>
            </ScrollView>
        </SafeAreaView>
    )
};
export default SingleDonationItem;