import React, { Children } from "react";
import {View, StyleSheet} from "react-native";

const Card = props =>{
    return (<View style={styles.container}>
        {props.children}
    </View>)
}

const styles= StyleSheet.create({
    container:{
        width:300,
        height:100,
        borderRadius: 10,
        marginVertical:20,
        padding:10,
        backgroundColor:"#e6e6ff"
    }
})

export default Card;