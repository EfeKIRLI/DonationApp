import react from "react";
import style from "../../screens/SingleDonationItem/style";
import { useSelector } from "react-redux";
import { State } from "react-native-gesture-handler";

const SingleDonationItem = () => { 
    const donationItemInformation = useSelector(state => state.donations.selecetedDonationInformation) // bu ekrana o bilgi öğesini bastıracağız.
    console.log(donationItemInformation) 
}

export default SingleDonationItem;