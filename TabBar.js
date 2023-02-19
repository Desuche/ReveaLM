import { useEffect, useState } from 'react';
import { Keyboard, View, Text, TouchableOpacity } from 'react-native';

const tab = (props) => {
    return (
        <View>
            <Text style={{ color: props.isFocused ? '#995078' : '#555', fontWeight: 'bold' }}>
                {props.label}
            </Text>
        </View>
    )
}

export default function TabBar({ state, descriptors, navigation }) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
            //Whenever keyboard did show make it don't visible
            setVisible(false);
        });
        const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
            setVisible(true);
        });

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);

    return visible && (
        <View style={{ flexDirection: 'row', height: 50, backgroundColor: '#080808', justifyContent: 'space-around', alignItems:'center' }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <View style={{ maxWidth: 400, position:"relative", top:10 }}>
                        <TouchableOpacity
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={{ flex: 1,  }}
                        >
                            <View style={{ paddingBottom:5, borderBottomColor: isFocused ? '#995078' : '#555', borderBottomWidth:3 }}>
                            <Text style={{ color: isFocused ? '#995078' : '#555', fontWeight: 'bold', fontSize:17 }}>
                                {label}
                            </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                );
            })}
        </View>
    );
}

