import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Modal } from "react-native";
import Popup from "./Popup";


export default function Yepp(props) {


    return (

        <View style={styles.top}>
            <TouchableOpacity onPress={props.popout}>
                <View style={styles.block}>
                    <Text style={styles.text}> {props.data['label']}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({

    block: {
        backgroundColor: '#101115',
        height: 110,
        justifyContent: 'center',
        margin: 4,
        padding: 20,
        borderRadius: 10

    },
    text: {
        fontSize: 25,
        color: '#ffffff'
    },

})

