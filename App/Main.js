import React from "react";
import { TextInput, StyleSheet, Text, View, Button } from 'react-native';


export default function Main() {
    return (
        <View style={styles.content}>
            <View style={styles.heading}>
                <View style={{ flex: 3, alignContent: 'flex-start', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#a18830', fontWeight: 'bold', fontSize: 30 }}>Detect GPT text</Text>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.textInput}>
                    <TextInput
                        editable
                        multiline
                        numberOfLines={15}
                        placeholder='Enter text to be analyzed'
                        placeholderTextColor='#333333'
                        style={{ padding: 30, color: '#fff' }}
                    />
                </View>
                <View style={{ borderBottomEndRadius:10, alignItems:'center' }}>
                    <Button
                        title="Submit"
                        color="#101115"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#000',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        marginTop: 50,

        height: '88%',
        width: '100%'
    },
    heading: {
        flex: 1,
        backgroundColor: '#000',
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'space-around'
    },
    body: {
        flex: 2,
    },
    textInput: {
        backgroundColor: '#101115',
        margin: 20,
        borderRadius: 10
    }
});
