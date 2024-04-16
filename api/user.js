// import firebase from '@react-native-firebase/app'
import { FIREBASE_AUTH } from "../FirebaseConfig"
// import auth from '@react-native-firebase/auth';



// asenktron bir işlemin başlatıldıktan sonra sonuç beklenmeden diğer işlemlerin devam etmesine izin veren bir programlama kavramıdır.
//Örneğin, ağ isteği yapma, dosya okuma/yazma, zamanlayıcı kullanma gibi işlemler genellikle asenkron olarak gerçekleştirilir.
// Ancak bazen bir sonraki sayfaya geçmesini bekledğimizde  doğrulamanın onaylanması için "await" işlemi yapısı kullanılır.
//Asenkron bir işlevi çalıştırmak için await anahtar kelimesini kullanabilirsiniz. Bu, işlemin tamamlanmasını bekler ve ardından işlemin sonucunu bir değişkene atar.


const auth = FIREBASE_AUTH

  
export const createUser = async (fullName, email, password) => { 
    try { 
        // Kullanıcı oluştur. Create a user.
        const user = await auth().createUserWithEmailAndPassword( email,password)
        await user.user.updateProfile({
            displayName: fullName
        });
        console.log(user); 
        return user
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            console.log("That email address is already in use !")
            return {error: 'The email you entered is alredy use!'}
        } 
        else if (error.code === 'auth/invalid-email') {
            console.log("That email adress is invalid !")
            return {error: 'Please enter a valid email address!'}

        }
        console.log(error)
        return {error: 'Something went wrong with your request!'}

    }
}

export const loginUser = async (email, password) => { 
    try {
        const response = await auth().signInWithEmailAndPassword(email,password);
        const token = await response.user.getIdToken();
        return { 
            status: true,
            data: { 
                displayName: response.user.displayName,
                email: response.user.email,
                token,
            }
        }
    } catch (error) {
        if (error.code === 'auth/wrong-password' ) {
            return {status:false, error:'Please enter a correct password'};
        }
        else if (error.code === 'auth/user-not-found'){
            return {status:false, error:'The email you entered does not exist.Please create a new account.'};

        }
        console.log(error);
        return {status: false, error:'Something went wrong' }
    }
}

