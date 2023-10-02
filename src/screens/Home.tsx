import { View, Text, Button } from 'react-native'
import React, { useEffect } from 'react'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import { Settings } from 'react-native-fbsdk-next';

const Home = () => {
        
    useEffect(()=>{
        GoogleSignin.configure({
            webClientId: '1086057243801-gqhnvmopkt681asff3cosphfn4idaedt.apps.googleusercontent.com',
        });
        Settings.initializeSDK();
    },[])

    async function onGoogleButtonPress() {
        // Check if your device supports Google Play
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        // Get the users ID token
        try{
            const res = await GoogleSignin.signIn();
            console.log(res)
        }catch(err){
            console.log(err)
        }
    }
    
    async function onFacebookButtonPress() {
        // Attempt login with permissions
        const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
        console.log(result)
        if (result.isCancelled) {
          throw 'User cancelled the login process';
        }
      
        // Once signed in, get the users AccessToken
        const data = await AccessToken.getCurrentAccessToken();
      
        if (!data) {
          throw 'Something went wrong obtaining access token';
        }
      
        // Create a Firebase credential with the AccessToken
    }

    return (
        <View>
            <Text>Home</Text>
            <Button
                title="Google Sign-In"
                onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
            />
             <Button
                title="Facebook Sign-In"
                onPress={() => onFacebookButtonPress().then(() => console.log('Signed in with Facebook!'))}
            />
        </View>
    )
}

export default Home