import React from "react";
import { View, StyleSheet, Text, Pressable, ScrollView, TouchableOpacity } from "react-native";


export default function Popup(props) {
    var verdict = '';
    switch (props.results['label']){
        case 0:
            verdict = "The Text is generated by AI"
            break;
        case 1:
            verdict = "The Text is written by Human"    
            break;
        case 5:
            verdict = "The Text could contain parts generated by AI. (requires more text for better judgement)"
            break;
        default:
            verdict = "oops"


    }
    return (
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>

            <View style={styles.content}>
                <View style={styles.block}>
                    <Text style={styles.text}> yepp</Text>
                    <Text style={styles.text}> {verdict} </Text>
                </View>
                <ScrollView>
                    <Text style={{ fontSize: 30 }}>
                        {props.text}
                    </Text>

                </ScrollView>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    content: {
        backgroundColor: '#101115',
        height: 600,
        justifyContent: 'center',
        position: 'relative',
        bottom: -25,
        margin: 10,
        padding: 10,
        borderRadius: 30,


    },
    text: {
        fontSize: 25,
        color: '#ffffff'
    },
    block: {
        margin:100
    }

})