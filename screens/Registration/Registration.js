import React, { useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import style from "../Registration/style"
import globalStyle from "../../assets/styles/globalStyle"
import { Pressable, ScrollView, Text, View } from "react-native"
import Input from "../../components/Input/Input"
import { TextInput } from "react-native-gesture-handler"
import Header from "../../components/Header/Header"
import Button from "../../components/Button/Button"
import BackButton from "../../components/BackButton/BackButton"
import { Routes } from "../../navigation/Routes"
import { createUser } from "../../api/user"
// import { FIREBASE_AUTH } from "../../FirebaseConfig"


const Registration = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    console.log(email)
    console.log(password)
    return (
        <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}   >
            <View style={style.backButton} >
                <BackButton onPress={() => navigation.goBack()} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={style.container} >
                <View style={globalStyle.marginBottom24} >
                    <Header type={1} title={"Hello and Welcome!"} />
                </View>
                <View style={globalStyle.marginBottom24}>
                    <Input

                        placeholder={"Please enter your full name..."}
                        label={"First & Last Name"}
                        // keyboardType={"email-address"}
                        onChangeText={(value) => setFullName(value)}
                    />
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
               { success.length > 0 &&  <Text style={style.success}>{success}</Text>}
                <View style={globalStyle.marginBottom24}>
                    <Button
                        isDisabled={fullName.length <= 2 || email.length <= 5 || password.length <= 8 }
                        title={"Registration"}
                        onPress={async () => {
                            let user = await createUser(fullName, email, password)
                       // if user has error => 
                       if (user.error) {
                        // then want to set 
                        setError(user.error)
                    } else {
                        // otherwise make sure the we show the user success message => 
                        setError("")
                        setSuccess("You have successfully registered")
                        setTimeout(() => {
                            navigation.goBack()
                        }, 3000);
                    }
                }
}
                    />
                </View>
                {/* <Pressable style={style.registrationButton}> 
                    <Header color={'#156CF7'} type={3} title={"Don't have an account?"}/>
                </Pressable> */}
            </ScrollView>
        </SafeAreaView>
    )
}

export default Registration;