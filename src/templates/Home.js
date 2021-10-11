import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { signIn } from '../reducks/users/operations';
import { getUserId, getUserName } from '../reducks/users/selectors';
import { Button } from 'react-native-paper';

const Home = () => {
    const dispatch = useDispatch()
    const selector = useSelector((state) => state)
    const uid = getUserId(selector)
    const username = getUserName(selector)

    return (
      <View style={styles.container}>
        <Button
          mode="contained"
          onPress={() => dispatch(signIn())}
        >click</Button>
        <Text>{uid}</Text>
        <Text>{username}</Text>
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
export default Home