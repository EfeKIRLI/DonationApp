import firebase from '@react-native-firebase/app'
import auth from "@react-native-firebase/auth"
import { useEffect } from 'react';
// asenktron bir işlemin başlatıldıktan sonra sonuç beklenmeden diğer işlemlerin devam etmesine izin veren bir programlama kavramıdır.
//Örneğin, ağ isteği yapma, dosya okuma/yazma, zamanlayıcı kullanma gibi işlemler genellikle asenkron olarak gerçekleştirilir.
// Ancak bazen bir sonraki sayfaya geçmesini bekledğimizde  doğrulamanın onaylanması için "await" işlemi yapısı kullanılır.
//Asenkron bir işlevi çalıştırmak için await anahtar kelimesini kullanabilirsiniz. Bu, işlemin tamamlanmasını bekler ve ardından işlemin sonucunu bir değişkene atar.
const firebaseConfig = {
    // Your actual Firebase project configuration goes here
    // (API key, auth domain, project ID, etc.)
    // apiKey: "AIzaSyCdmzBE6NjD2FXTSXOifRVA638YIRPalUA",
    // project_number: "940633775110",
    // project_id: "donation-application-f3c59",
    // storage_bucket: "donation-application-f3c59.appspot.com"  ,   
}
  
  // Initialize Firebase app only if it hasn't been initialized yet
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
export const createUser = async (fullName, email, password) => { 
    try { 
        // Kullanıcı oluştur. Create a user.
        const user = await auth().createUserWithEmailAndPassword(email,password)
        await user.user.updateProfile({
            displayName: fullName
        });
        console.log(user);
        return user
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            console.log("That email address is already in use !")
        } 
        else if (error.code === 'auth/invalid-email') {
            console.log("That email adress is invalid !")
        }
        console.log(error)
    }
}