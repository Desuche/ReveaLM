import React, { useRef } from "react";
import { TextInput, StyleSheet, Text, View, Button, ActivityIndicator, Alert } from 'react-native';
import Modal from "react-native-modal";
import { useState } from 'react';
import Popup from "./Popup";
import MenuItem from "./MenuItem";




export default function Main() {
    const textboxInput = useRef()
    const [modal, setModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [menu, setMenu] = useState(false);
    const [submenu, setSubmenu] = useState(false);
    const [text, setText] = useState("");
    const [results, setResults] = useState({
        'label': null,
        "Burstiness": null,
        "Perplexity": null,
        "Perplexity per line": null,
    });


    const fetchResults = (content) => {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 'data': content })
        }

        let url = 'http://158.182.203.74:5000/test'
        fetch(url, requestOptions)
            .then((res) => { return res.json() })
            .then((data) => { setResults(data["data"]); return (data["data"]["label"]) })
            .then((label) => {
                setLoading(false);
                if (label == -1) {
                    Alert.alert("It's not magic!", "Text is too short for processing", [{
                        text: 'OK', onPress: () => console.log('OK Pressed')
                    }])
                } else { setModal(true); textboxInput.current.clear();}
            })

    }

    return (
        <View style={styles.content}>
            <View style={styles.heading}>
                <View style={{ position: 'absolute', top: 10, right: 10, justifyContent: 'flex-start', backgroundColor: '#fff' }}>
                    <Button
                        title="::"
                        onPress={() => setMenu(true)}
                        color='#111111'

                    />
                </View>
                <View style={{ flex: 3, alignContent: 'flex-start', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#a18830', fontWeight: 'bold', fontSize: 30 }}>Detect GPT text</Text>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.textInput}>
                    <TextInput
                        ref={textboxInput}
                        editable
                        multiline
                        numberOfLines={15}
                        onChangeText={(txt) => setText(txt)}
                        placeholder='Enter text to be analyzed'
                        placeholderTextColor='#333333'
                        style={{ padding: 30, color: '#fff' }}
                    />
                </View>
                <View style={{ borderBottomEndRadius: 10, alignItems: 'center' }}>
                    <Button
                        title="Submit"
                        color="#101115"
                        onPress={() => {
                            setLoading(true);
                            fetchResults(text);
                        }}
                    />
                </View>
            </View>

            {/* Results Modal */}
            <Modal
                animationIn={'slideInUp'}
                animationInTiming={300}
                isVisible={modal}
                onBackButtonPress={() => { setText(""); setModal(false) }}
                onBackdropPress={() => { setText(""); setModal(false) }}
                backdropOpacity={0.5}
                coverScreen={false}
                children={<Popup text={text} results={results} />}

            />

            <Modal
                animationIn={'fadeIn'}
                animationInTiming={300}
                animationOut={'fadeIn'}
                animationOutTiming={1}
                isVisible={loading}
                backdropOpacity={0.7}
                coverScreen={false}
            >
                <View >
                    <ActivityIndicator />
                </View>


            </Modal>
            {/* Menu */}
            <Modal
                animationIn={'fadeIn'}
                animationInTiming={1}
                animationOut={'fadeOut'}
                animationOutTiming={100}
                onBackButtonPress={() => { setMenu(false) }}
                onBackdropPress={() => { setMenu(false) }}
                isVisible={menu}
                backdropOpacity={0}
                coverScreen={false}
            >
                <View style={styles.menu}>
                    <MenuItem text={"Accessibility"} onTap={() => { setSubmenu(true); setMenu(false); }} />
                    <MenuItem text={"Light Mode"} onTap={() => { setMenu(false) }} />
                    <MenuItem text={"Docs"} onTap={() => { setMenu(false) }} />
                </View>

            </Modal>
            {/* Accessibility */}
            <Modal
                animationIn={'fadeIn'}
                animationInTiming={1}
                animationOut={'fadeOut'}
                animationOutTiming={100}
                onBackButtonPress={() => { setSubmenu(false) }}
                onBackdropPress={() => { setSubmenu(false) }}
                isVisible={submenu}
                backdropOpacity={0}
                coverScreen={false}
            >
                <View style={styles.menu}>
                    <MenuItem text={"Extra Small"} onTap={() => { setSubmenu(false) }} />
                    <MenuItem text={"Small"} onTap={() => { setSubmenu(false) }} />
                    <MenuItem text={"Normal"} onTap={() => { setSubmenu(false) }} />
                    <MenuItem text={"Large"} onTap={() => { setSubmenu(false) }} />
                    <MenuItem text={"Extra Large"} onTap={() => { setSubmenu(false) }} />
                </View>

            </Modal>

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
    },
    modal: {
        width: '80%',
        height: '80%'
    },
    loading: {
        backgroundColor: '#fff',
        height: 110,
        justifyContent: 'center',
        margin: 50,
        padding: 20,
        borderRadius: 10

    },
    menu: {
        position: 'absolute',
        top: -25,
        right: -10,
        justifyContent: 'flex-start',
        borderRadius: 20,
        backgroundColor: '#404145',
        paddingHorizontal: 10,
        borderColor: '#fff',

    }
});
