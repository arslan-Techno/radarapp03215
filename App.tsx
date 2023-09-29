import 'react-native-gesture-handler';
import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { showErrorMessage, showSuccessMessage } from './src/services/alerts'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import StackNavigation from './src/navigation/stackNavigation'
import { NavigationContainer } from '@react-navigation/native';
const App = ():JSX.Element => {

    useEffect(()=>{
        setTimeout(()=>{
            showSuccessMessage('hello')
        },2000)
    },[])

    return (
        <View className='flex-1'>
            <NavigationContainer>
                <Provider store={store}>
                    <StackNavigation/>
                </Provider>
            </NavigationContainer>
        </View>
    )
}

export default App