import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import Modal from "react-native-modal";
import Yepp from './Yepp';
import Popup from './Popup';
import Ionicons from '@expo/vector-icons/Ionicons'
import { EvilIcons } from '@expo/vector-icons';
// import Ionicons from '@expo/vector-icons';

import { useDispatch, useSelector } from 'react-redux';
import { addHistory, clearHistory } from './redux/actions/storeHistory';

export default function Home(props) {
  const [modal, setModal] = useState(false)
  const [popoutData, setPopoutData] = useState({
    'label': null,
    "Burstiness": null,
    "Perplexity": null,
    "PerpPerLine": null,
    'text': null
  })

  const dispatch = useDispatch();
  const hist = useSelector((store) => store.history)

  const handleAddHistory = (data) => {
    dispatch(addHistory(data));
  }

  const handleClearHistory = (data) => {
    dispatch(clearHistory(data));
  }


  var popout = function (item) {
    return new Promise((resolve, reject) => {
      setPopoutData(item)
    })
  }



  return (
    <View style={styles.content}>

      <View style={styles.heading}>
        <View style={{ flex: 3, alignContent: 'flex-start', justifyContent: 'center' }}>
          <Text style={{ color: '#a18830', fontWeight: 'bold', fontSize: 20 }}>Detection History</Text>
        </View>
      </View >

      <View style={styles.body}>

        <FlatList

          data={hist}
          ListEmptyComponent={
            <View style={{ height: 400, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: '#555555' }}> wow, such empty</Text>
            </View>
          }
          renderItem={({ item, index, separators }) => (
            <Yepp data={item}
              popout={() => {
                setPopoutData(item); setModal(true);
              }}
            />
          )}
        />
      </View>

      <Modal
        animationIn={'slideInUp'}
        animationInTiming={300}
        isVisible={modal}
        onBackButtonPress={() => { setModal(false) }}
        onBackdropPress={() => { setModal(false) }}
        backdropOpacity={0.8}
        coverScreen={true}
        children={<Popup results={popoutData} />}
      />

      <View style={{ position: 'absolute', top: 720, left: 330 }}>
        <Ionicons.Button name="trash" size={30} backgroundColor={'#995078'} onPress={handleClearHistory} style={{ borderRadius: 0 }} />
      </View>
    </View >
  );
}

const styles = StyleSheet.create({

  content: {
    backgroundColor: '#000',
    flex: 1
  },
  heading: {
    flex: 1,
    backgroundColor: '#000',
    flexDirection: 'row',
    paddingHorizontal: 30,
    justifyContent: 'space-around'

  },
  body: {
    flex: 3,
  }
});
