import 'react-native-gesture-handler';
import { AppState } from 'react-native'; //Kullanıcı uyg. çıkıp-tekrar giriş yapıldığında token süresinin dolmasını kontrol edilir.Ayrıca Kullanıcınnın bizim appstate'mizi çalıştırıp(madığını) kontrol eder.
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
import RootNavigation from './navigation/RootNavigation';
import { useEffect, useRef } from 'react';
import { checkToken } from './api/user';

 



export default function App() {

  const appState = useRef(AppState.currentState)

  useEffect(()=> { 

    const subscription = AppState.addEventListener('change', async nextAppState => {
      if (appState.current.match(/inactive|background/) && nextAppState === 'active' ) 
      {
        // we are coming from background to the foreground.
        //Kullanıcı uyg.dan çıkıp tekar geri gelmesi gibi.
        console.log('You have come back into the app') 
        await checkToken()
      }

      appState.current = nextAppState;
    });
        checkToken();

    console.log('Application has rendered')

  },[])

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
          <RootNavigation/>
          {/* <MainNavigation /> */}
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
