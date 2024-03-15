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
            <Badge title={props.badgeTitle} />
            <Image source={{uri: props.uri}} style={style.image} />
        </View>
        <Header title={props.donationTitle} type={3} color={'#0A043C'} />
        <Header title={'$' + props.price.toFixed(2)} type={3} color={'#156CF7'} />
        </View> 
    );
}

export default SingleDonationItem;

SingleDonationItem.propTypes = { 
    uri : PropTypes.string.isRequired, 
    badgeTitle:PropTypes.string.isRequired,
    donationTitle: PropTypes.string.isRequired,
    price:PropTypes.number.isRequired,
}