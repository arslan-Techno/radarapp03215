import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import Colors from '../constant/colors'

const StackNavigation = () => {

    const state =useSelector(state=>state)
    const Stack = createStackNavigator();


    const defaultOptions=()=>{
        return {
            headerStyle: {
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
            },        
            // cardStyle: { backgroundColor: Colors.white },
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, 
            // headerLeft: () => (
            //     <TouchableOpacity activeOpacity={.3}>
            //         <View style={{paddingHorizontal:20,flexDirection:'row',alignItems:'center'}}>
            //             <Left width={20} height={20}/>
            //         </View>
            //     </TouchableOpacity>
            // )
        }
    }


    return (
        <Stack.Navigator screenOptions={defaultOptions} >
            <Stack.Screen name="Home" component={Home} />
            {/* <Stack.Screen name="Notifications" component={Notifications} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Settings" component={Settings} /> */}
        </Stack.Navigator>
    )
}

export default StackNavigation