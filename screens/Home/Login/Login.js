import React, { useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import style from "./style"
import globalStyle from "../../assets/styles/globalStyle"
import { Pressable, ScrollView, Text, View } from "react-native"
import Input from "../../components/Input/Input"
import { TextInput } from "react-native-gesture-handler"
import Header from "../../components/Header/Header"
import Button from "../../components/Button/Button"
import { Routes } from "../../../navigation/Routes"
import {loginUser} from "../../../api/user"
import { useDispatch } from "react-redux"
import { resetToInitialState } from "../../../redux/reducer/User"


const Login = ({navigation}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const dispatch = useDispatch();
    dispatch(resetToInitialState());

    console.log(email)
    console.log(password)
    return (
        <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]} >
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={style.container} >
                <View style={globalStyle.marginBottom24} >
                    <Header type={1} title={"Welcome Back"} />
                </View>
                <View style={globalStyle.marginBottom24}>
                <Input
                
                    placeholder={"Please enter your email..."}
                    label={"Email"}
                    keyboardType={"email-address"}
                    onChangeText={(value) => setEmail(value)}
                />
                </View>
                <View style={globalStyle.marginBottom24}>
                <Input
                    secureTextEntry={true}
                    placeholder={"******"}
                    label={"Password"}
                    keyboardType={"email-address"}
                    onChangeText={(value) => setPassword(value)}
                />
                </View>
                { error.length > 0 &&  <Text style={style.error}>{error}</Text>}
                <View style={globalStyle.marginBottom24}> 
                    <Button
                    onPress={async () => {
                    let user = await loginUser(email,password)
                    if (!user.status) {
                        setError(user.error);
                    }
                    else { 
                        setError('');
                        dispatch(logIn(user.data));
                        navigation.navigate(Routes.Home)
                    }   
                }}
                    title={"Login"} 
                    isDisabled={email.length < 5 || password.length < 8 } 
                    />
                </View>
                <Pressable 
                    style={style.registrationButton}
                    onPress={() => navigation.navigate(Routes.Registration)}> 
                    <Header color={'#156CF7'} type={3} title={"Don't have an account?"}/>
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Login;