import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TextInput,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import { getApiWithToken, postApi } from './Api';
import {useNavigation} from '@react-navigation/native';



const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [error, setError] = useState(false);
    const [isLoggedin, setIsLoggedIn] = useState(false);

    const [data, setData] = useState([]);
     console.log('props are', props)
    // const nav = useNavigation();
    const onPressLogin = async () => {
        // Do something about login operation
        let result = await postApi(email, pwd);
        console.log('result of api', result.token.access.token);
        if(result.success){
            setIsLoggedIn(true);
            let getresult = await getApiWithToken(result.token.access.token)
            console.log('getresult is', getresult.data)
            setData(getresult.data);
        }
        else{
            setError(true);
        }
    };
    
    
    

    return (
        !isLoggedin ? 
        <View style={styles.container}>
            <Text style={styles.title}> Login Screen</Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Email"
                    value={email}
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setEmail(text)} />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    secureTextEntry
                    value={pwd}
                    placeholder="Password"
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setPwd(text)} />
            </View>

            {error && <Text style={{
                fontSize:12, color:'red'
            }}>Invalid Credentials</Text>}
            
            <TouchableOpacity
                onPress={onPressLogin}
                style={styles.loginBtn}>
                <Text style={styles.loginText}>LOGIN </Text>
            </TouchableOpacity>
            

        </View>:<View style={styles.container}>
        <Text style={styles.dataText}>DATA is </Text>
            <FlatList
                data={data}
                renderItem={(item,index)=> {
                    console.log("🚀 ~ file: Login.js:83 ~ Login ~ item:", item)
                    return(
                        <Text>{item.item.studyType}</Text>
                    )
                }}
            />
        <TouchableOpacity
                onPress={()=>{setIsLoggedIn(false)}}
                style={styles.loginBtn}>
                <Text style={styles.loginText}>LOGOUT </Text>
            </TouchableOpacity>
            </View>
    );
}
const styles = StyleSheet.create({
    dataText:{
        fontSize:20,
    },
    container: {
        flex: 1,
        backgroundColor: '#4FD3DA',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: "bold",
        fontSize: 50,
        color: "#fb5b5a",
        marginBottom: 40,
    },
    inputView: {
        width: "80%",
        backgroundColor: "#3AB4BA",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputText: {
        height: 50,
        color: "white"
    },
    forgotAndSignUpText: {
        color: "white",
        fontSize: 11
    },
    loginBtn: {
        width: "80%",
        backgroundColor: "#fb5b5a",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    },
});
export default Login;