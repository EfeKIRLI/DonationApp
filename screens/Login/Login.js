import React, { useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import style from "./style"
import globalStyle from "../../assets/styles/globalStyle"
import { Pressable, ScrollView, Text, View } from "react-native"
import Input from "../../components/Input/Input"
import { TextInput } from "react-native-gesture-handler"
import Header from "../../components/Header/Header"
import Button from "../../components/Button/Button"
import { Routes } from "../../navigation/Routes"


const Login = ({navigation}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
                    label={"Passwordd"}
                    keyboardType={"email-address"}
                    onChangeText={(value) => setPassword(value)}
                />
                </View>
                <View style={globalStyle.marginBottom24}> 
                    <Button title={"Login"} />
                </View>
                <Pressable style={style.registrationButton} onPress={() => navigation.navigate(Routes.Registration)} > 
                    <Header color={'#156CF7'} type={3} title={"Don't have an account?"}/>
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Login;