import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard, FlatList, Modal } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { globalStyles } from '../styles/global'
import * as yup from 'yup'
import Card from '../shared/card'
import ReviewForm from '../screens/reviewForm'


export default function Home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false)
  const [reviews, setReviews] = useState([
    { title: 'Zelda, breath of fresh air', rating: '5', body: 'lorem ipsum', key: '1' },
    { title: 'Gotta Catch them all', rating: '3', body: 'lorem ipsum', key: '2' },
    { title: 'Not so final fantasy', rating: '1', body: 'lorem ipsum', key: '3' },
    { title: 'Avengers', rating: '4', body: 'lorem ipsum', key: '4' }
  ])
  const addReview = (review) => {
    review.key = Math.random().toString()
    setReviews((currentReviews) => {
      return [review, ...currentReviews]
    })
    setModalOpen(false)
  }
  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType='slide'>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name='close'
              size={24}
              style={styles.modalToggle}
              onPress={() => setModalOpen(false)}
            />
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <MaterialIcons
        name='add'
        size={24}
        style={{ ...styles.modalToggle, ...styles.modalClose }}
        onPress={() => setModalOpen(true)}
      />
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
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
    flex: 1,
    flexDirection: 'column'
  }
})