import React from "react";
import style from "../SingleDonationItem/style"; 
import PropTypes from 'prop-types'
import { Image,View } from "react-native";

import Badge from "../Badge/Badge";
import Header from "../Header/Header";

const SingleDonationItem = (props) => { 
    return (
        <View>
        <View>
            <View style={style.badge}>
            <Badge title={props.badgeTitle} />
            </View>
            <Image resizeMode={'contain'} source={require('../../assets/cactus.jpeg')} style={style.image} />
        </View>
        <View style={style.donationInformation}> 
        <Header title={props.donationTitle} type={3} color={'#0A043C'} />
        <View style={style.price}>
        <Header title={'$' + props.price.toFixed(2)} type={3} color={'#156CF7'} />
        </View>
        </View>
        </View> 
    );
}

export default SingleDonationItem;

SingleDonationItem.propTypes = { 
    uri:PropTypes.string.isRequired,
    badgeTitle:PropTypes.string.isRequired,
    donationTitle: PropTypes.string.isRequired,
    price:PropTypes.number.isRequired,
}