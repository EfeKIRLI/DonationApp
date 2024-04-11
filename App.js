import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
// import {StyleSheet, Text, View } from 'react-native';
// import { SafeAreaView } from "react-native-safe-area-context";
// import { useFonts} from "@expo-google-fonts/inter";
import MainNavigation from './navigation/MainNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import store from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from "./redux/store"
import firebase from '@react-native-firebase/app';
import { initializeApp } from "firebase/app";
 



export default function App() {


  const [fontsLoaded] = useFonts({
    'Inter-Black': require('./assets/fonts/Inter-Black.ttf'),
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
    'Inter-ExtraBold': require('./assets/fonts/Inter-ExtraBold.ttf'),
    'Inter-ExtraLight': require('./assets/fonts/Inter-ExtraLight.ttf'),
    'Inter-Light': require('./assets/fonts/Inter-Light.ttf'),
    'Inter-Medium': require('./assets/fonts/Inter-Medium.ttf'),
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
    'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
    'Inter-Thin': require('./assets/fonts/Inter-Thin.ttf'),
  });


  if (!fontsLoaded) {
    return null;
  }


  const firebaseConfig = {
    
      // Your Firebase project configuration details here
      
        "project_info": {
          "project_number": "940633775110",
          "project_id": "donation-application-f3c59",
          "storage_bucket": "donation-application-f3c59.appspot.com",
        },
        "client": [
          {
            "client_info": {
              "mobilesdk_app_id": "1:940633775110:android:d4c8f2175683e0c8a8f787",
              "android_client_info": {
                "package_name": "com.donationapp"
              }
            },
            "oauth_client": [
              {
                "client_id": "940633775110-oeeu7ur5jok9kb0pr2h1qf1cgd6gpeah.apps.googleusercontent.com",
                "client_type": 1,
                "android_info": {
                  "package_name": "com.donationapp",
                  "certificate_hash": "caeaed1648df6f49818d8e8362c7ba09a4b9a5f5"
                }
              },
              {
                "client_id": "940633775110-qvmahk5lb9v9209op1kq0a46nvm3glba.apps.googleusercontent.com",
                "client_type": 3
              }
            ],
            "api_key": [
              {
                "current_key": "AIzaSyCdmzBE6NjD2FXTSXOifRVA638YIRPalUA"
              }
            ],
            "services": {
              "appinvite_service": {
                "other_platform_oauth_client": [
                  {
                    "client_id": "940633775110-qvmahk5lb9v9209op1kq0a46nvm3glba.apps.googleusercontent.com",
                    "client_type": 3
                  }
                ]
              }
            }
          }
        ],
        "configuration_version": "1"
      
  };
  



  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    console.log(firebaseConfig)
  }



  return (

    // <SafeAreaView style={{flex:1}}> 
    // <StatusBar style="auto" />
    // <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'white'}}>
    //   <View >   
    //   <Text style={{textAlign:'center',fontFamily:'Inter-Black'}} >Open up App.js to start working on your app!</Text>
    // </View>
    // </View>
    // </SafeAreaView>

    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>


  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
