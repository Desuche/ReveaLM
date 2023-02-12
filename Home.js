import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Yepp from './Yepp';

export default function Home() {
  return (
      <View style={styles.content}>
        <View style={styles.heading}>
          <View style={{ flex:3, alignContent: 'flex-start', justifyContent:'center' }}>
            <Text style={{ color: '#a18830', fontWeight:'bold', fontSize:20 }}>Detection History</Text>
          </View>
          <View style={{flex:1, alignContent: 'flex-end', justifyContent:'center', position: 'relative', left: 30 }}>
            <Text style={{ color: '#a18830' }}> yepp</Text>
          </View>
        </View>
        <View style={styles.body}>
          <ScrollView>
            <Yepp />
            <Yepp />
            <Yepp />
            <Yepp />
            <Yepp />
            <Yepp />
            <Yepp />
            <Yepp />
            <Yepp />
            <Yepp />
            <Yepp />
            <Yepp />
            <Yepp />
            <Yepp />
            <Yepp />
            <Yepp />
            <Yepp />
            <Yepp />
            <Yepp />
            <Yepp />
            <Yepp />
            <Yepp />
            <Yepp />
            <Yepp />
            <Yepp />
            <Yepp />
            <Yepp />
            <Yepp />
            <Yepp />
            <Yepp />
            <Yepp />
            <Yepp />
            <Yepp />
            <Yepp />
            <Yepp />
            <Yepp />
            <Yepp />
            <Yepp />
            <Yepp />
          </ScrollView>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#000',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius:15,
    marginTop: 50,
    marginLeft: 10,
    
 
    height: '88%',
    width: '95%'
  },
  heading: {
    flex: 1,
    backgroundColor: '#000',
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-around'

  },
  body: {
    flex: 3,
  }
});
