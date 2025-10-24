import React,{useState} from "react";
import { StyleSheet, Text, View,TextInput,Pressable,KeyboardAvoidingView, Platform } from 'react-native';

export default function App() {
  let [username,setUserName]=useState("");
  let [userNameError,setUserNameError]=useState("");
  let [email,setEmail]=useState("");
  let [emailError,setEmailError]=useState("");
  let [phoneNumber,setPhoneNumber]=useState("");
  let [phoneNumberError,setPhoneNumberError]=useState("");
  let [password,setPassword]=useState("");
  let [passwordError,setPasswordError]=useState("");
  let [website,setWebsite]=useState("");
  let [websiteError,setWebsiteError]=useState("");
  return (
    
    <View style={styles.container}>
     
     <View style={styles.field}> 
      <KeyboardAvoidingView behavior={Platform.OS==="ios"?"padding":"height"}>
          <Text style={styles.label}>Name:</Text>
      <TextInput style={styles.input} value={username} onChangeText={(username)=>{
        setUserName(username);
        if(userNameError!=="")setUserNameError("");
      }}
      autoCorrect={false}
      autoCapitilize="none"
      
      />
      <Text style={styles.errorField}>{userNameError}</Text>
      </KeyboardAvoidingView>
     
     </View>
     <View style={styles.field}>
    <KeyboardAvoidingView behavior={Platform.OS==="ios"?"padding":"height"}>
         <Text  style={styles.label}>Email:</Text>
      <TextInput style={styles.input} value={email} onChangeText={(email)=>{
        if(emailError!=="")setEmailError("");
        setEmail(email);
      }}
      keyboardType="email-address"
      />
      <Text style={styles.errorField}>{emailError}</Text>
    </KeyboardAvoidingView>
     </View>
      <View style={styles.field}>
    <KeyboardAvoidingView behavior={Platform.OS==="ios"?"padding":"height"}>
        <Text  style={styles.label}>Phone Number:</Text>
      <TextInput style={styles.input} value={phoneNumber} onChangeText={(phoneNumber)=>{
        setPhoneNumber(phoneNumber);
        if(phoneNumberError!=="")setPhoneNumberError("");
      }}
      keyboardType="phone-pad"
      
      />
      <Text style={styles.errorField}>{phoneNumberError}</Text>
    </KeyboardAvoidingView>
      </View>
     <View style={styles.field}>
     <KeyboardAvoidingView behavior={Platform.OS==="ios"?"padding":"height"}>
         <Text  style={styles.label}>Password:</Text>
      <TextInput style={styles.input}
      value={password}
      onChangeText={(password)=>{
        setPassword(password);
        if(passwordError!=="")setPasswordError("");
      }}
      secureTextEntry={true}
      />
      <Text style={styles.errorField}>{passwordError}</Text>
     </KeyboardAvoidingView>
     </View>
      <View style={styles.field}>
      <KeyboardAvoidingView behavior={Platform.OS==="ios"?"padding":"height"}>
           <Text  style={styles.label}>Website:</Text>
      <TextInput style={styles.input}  value={website}  onChangeText={(website)=>{
        setWebsite(website);
        if(websiteError!=="")setWebsiteError("");
      }}
      keyboardType="url"
      />
      <Text style={styles.errorField}>{websiteError}</Text> 
      </KeyboardAvoidingView>
    </View>
    <View style={styles.field}>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    alignItems: 'center',
    justifyContent: 'center',
    padding:5
  },
  field:{
    marginTop:7
  },
  label:{
    marginBottom:8,
    fontSize:16
  },
  input:{
    height:40,
    marginBottom:16,
    borderWidth:1,
    borderColor:"#ccc",
    borderRadius:8,
    fontSize:16,
    padding:9,
    width:200,
    
  },
  errorField:{
    marginTop:8,
    fontSize:16,
    color:"red"
  },
  button:{
    paddingVertical:8,
    paddingHorizontal:16,
    borderRadius:32,
    minWidth:100,
    alignItems:"center",
    backgroundColor:"#111"
  },
  buttonText:{
    color:"#fff",
    fontSize:16
  }
});
