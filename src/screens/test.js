// create camera components 

import React ,{useState ,useEffect , useRef} from 'react';

import {View , Text ,TouchableOpacity , Modal,Image} from 'react-native';
import { Camera } from 'expo-camera';
import {FontAwesome} from '@expo/vector-icons';

const Cameras=()=>{
const camRef=useRef(null);
const [type ,setType]=useState(Camera.Constants.Type.back) ; //or .from
const [hasPermition, setHasPermition]=useState(null);
const [capturedPhoto, setCapturedPhoto]=useState(null);
const [open, setOpen]=useState(null);

useEffect(()=>{
(async ()=>{
const {status}=await Camera.requestPermissionsAsync();
setHasPermition(status === 'granted');
})
},[]);

if(hasPermition===null){
return <View />;
}

if(hasPermition === false){
return <Text >Acess rejected !</Text>;
}

async function takePick(){
if(camRef){
const data =await camRef.current.takePicureAsync();
setCapturedPhoto(data.uri);
setOpen(true);
}
}

return(
<View >
<Text>
Take photo with camera 
</Text>

{/* second part */}

<Camera 
style={{flex:1,}}
type={type}
ref={camRef}
>
<View style={{flex:1,backgroundColor:'red', flexDirection:'row'}}>
<TouchableOpacity 
style={{position:'absolute',bottom:20, left:20}}
onPress={()=>{
setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front: Camera.Constants.Type.back);

}}
>
<Text style={{fontSize:20, marginBottom:13 , color:'#fff'}}>switch</Text>

</TouchableOpacity>
</View>
</Camera>
{/* third part */}
<TouchableOpacity 
style={{justifyContent:'center',alignItems:'center',backgroundColor:'#121212', margin:20, borderRadius:10 ,height:50 }}
onPress={takePick}
>
<FontAwesome name="camera" size={23} color="#fff"/>
</TouchableOpacity>

{/* 4 part */}

{capturedPhoto &&
<Modal
animationType="slide"
transparent={false}
visible={open}
>
<View style={{flex:1, justifyContent:'center',alignItems:'center',margin:20}}>
<TouchableOpacity style={{margin:10}} onPress={()=>setOpen(false)}>
<FontAwesome name="window-close" size={50} color='red'/>;
</TouchableOpacity>
<Image 
style={{width:'100%',height:100,borderRadius:20}}
source={{uri:capturedPhoto}}
/>
</View>

</Modal>
}

</View>
);
};

export default Cameras;
