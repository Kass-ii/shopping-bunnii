import React, {
    useState,
    useEffect,
    useMemo,
    useCallback,
    useReducer,
    createContext,
    useContext
} from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity, // or Pressable
    TextInput,
    Button,          // remove if you won't use it
    StyleSheet
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import { useForm, Controller } from 'react-hook-form';





const styles = StyleSheet.create({
    container: {
        flex: 1, //set flex to true
        backgroundColor: '#fff',
        alignItems: 'center', //cneter items
        justifyContent: 'center',
    },
});
