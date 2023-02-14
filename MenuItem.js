import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";


export default function MenuItem(props) {
    return (
        <View >
            <Pressable android_ripple={{ color: '#111111', foreground: true, radius: 200 }} onPress={props.onTap}>
                <View style={styles.block}>
                    <Text style={styles.text}> {props.text}</Text>
                </View>
            </Pressable>

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
