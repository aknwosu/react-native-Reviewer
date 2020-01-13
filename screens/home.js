import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Modal } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { globalStyles } from '../styles/global'
import Card from '../shared/card'

export default function Home({ navigation }) {
  const [modalOpen, setModalOpt] = useState(false)
  const [reviews, setReviews] = useState([
    { title: 'Zelda, breath of fresh air', rating: '5', body: 'lorem ipsum', key: '1' },
    { title: 'Gotta Catch them all', rating: '3', body: 'lorem ipsum', key: '2' },
    { title: 'Not so final fantasy', rating: '1', body: 'lorem ipsum', key: '3' },
    { title: 'Avengers', rating: '4', body: 'lorem ipsum', key: '4'}
  ])
  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType='slide' style={styles.modalContent}>
        <MaterialIcons
          name='close'
          size={24}
          style={styles.modalToggle}
          onPress={() => setModalOpt(false)}
        />
        <View>
          <Text>Hello from modal</Text>
        </View>
      </Modal>
      <MaterialIcons
        name='add'
        size={24}
        style={{...styles.modalToggle, ...styles.modalClose}}
        onPress={() => setModalOpt(true)}
      />
      <FlatList
        data={reviews}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
            <Card>
            <Text style={globalStyles.titleText}>{ item.title }</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center' 
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0
  },
  modalContent: {
    flex: 1
  }
})