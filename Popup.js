import React from "react";
import { View, StyleSheet, Text, Pressable, ScrollView, TouchableOpacity } from "react-native";


export default function Popup() {
    return (
        <View style={{ flex:1, justifyContent: 'flex-end' }}>
           
            <View style={styles.content}>
                <Pressable android_ripple={{ color: '#aaaaaa', foreground: true, radius: 200 }}>
                    <View style={styles.block}>
                        <Text style={styles.text}> yepp</Text>
                    </View>
                </Pressable>
                <ScrollView>
                            <Text style={{ fontSize: 44 }}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
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
    }

})