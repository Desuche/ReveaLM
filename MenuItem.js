import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";


export default function MenuItem(props) {
    return (
        <View >
            <TouchableOpacity onPress={props.onTap}>
                <View style={styles.block}>
                    <Text style={styles.text}> {props.text}</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}


const styles = StyleSheet.create({

    block: {
        height: 40,
        width: 150,
        justifyContent: 'center',
        margin: 0,


    },
    text: {
        fontSize: 15,
        color: '#ffffff'
    },

})
