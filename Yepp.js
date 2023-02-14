import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";


export default function Yepp() {
    return (
        <View style={styles.top}>
            <Pressable android_ripple={{ color: '#444444', foreground: true, radius: 200 }}>
                <View style={styles.block}>
                    <Text style={styles.text}> yepp</Text>
                </View>
            </Pressable>
        </View>
    )
}


const styles = StyleSheet.create({
    top: {
        marginBottom: 5,

    },
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

