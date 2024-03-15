import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "./Routes";
import Home from "../screens/Home/Home";

const Stack = createStackNavigator() // fonksiyonu, yığın tabanlı bir navigasyon sistemi oluşturur.

const MainNavigation = () => {   // MainNavigation bileşeni bir <Stack.Navigator> döndürür.

    return ( 
        // <Stack.Navigator> ==>  Ekran Hiyerarşisi Yönetimi: Ekranlarınızı yığın içinde düzenler ve sıralar.
        <Stack.Navigator screenOptions={{header: () => null, headerShown:false}}>  
            <Stack.Screen name={Routes.Home} component={Home} />
        </Stack.Navigator>
    )
}


export default MainNavigation;