import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native'
import { globalStyles } from '../styles/global'

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    { title: 'Zelda, breath of fresh air', rating: '5', body: 'lorem ipsum', key: '1' },
    { title: 'Not so final fantasy', rating: '5', body: 'lorem ipsum', key: '3'}
  ])
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
      <FlatList
        data={reviews}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
            <Text style={globalStyles.titleText}>{ item.title }</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}
