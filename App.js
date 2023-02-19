import { StatusBar } from 'expo-status-bar';
import Home from './Home';
import Main from './Main';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBar from './TabBar';

export default function App() {
  const Tab = createBottomTabNavigator();

  function MainScreen() {
    return (
      <View style={{ flex:1, backgroundColor: '#000', paddingTop: 30 }}>
      <Main/>
      </View>
    );
  }
  function HomeScreen() {
    return (
      <View style={{ flex:1, backgroundColor: '#000', paddingTop: 30 }}>
      <Home/>
      </View>
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar style="auto"/>
        <Tab.Navigator
        tabBar={props => <TabBar {...props} />}
        
          screenOptions={{ 
            tabBarHideOnKeyboard:true, headerShown:false, 
            tabBarShowLabel:true, tabBarIcon:()=>{return null},
            tabBarLabelStyle:{fontSize:60}
          }} 
        
        >
          <Tab.Screen name="Main" component={MainScreen}/>
          <Tab.Screen name="History" component={HomeScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
