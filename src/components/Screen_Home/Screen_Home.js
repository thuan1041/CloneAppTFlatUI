import React, { useState } from 'react';
import { View, Text, Image, Pressable, SafeAreaView} from 'react-native';
import { styles } from './style';
import { TextInput } from 'react-native';
import { useFonts } from 'expo-font';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCamera, faMobileScreen, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import { useRef } from 'react';
// import { RNCamera } from 'react-native-camera';


export const Screen_Home = ({navigation}) => {
    const cameraRef = useRef(null);
    // const [image, setImage] = useState(null);

    // const takePicture = async () => {
    //     if (cameraRef.current) {
    //         const options = { quality: 0.5, base64: true };
    //         const data = await cameraRef.current.takePictureAsync(options);
    //         setImage(data.uri);
    //     }
    // }

    const [text, setText] = useState('');

    const handleTextSubmit = () => {
        navigation.navigate('Translate_English', {english: text})
      };

    return (
        <View style={styles.container}>
            <SafeAreaView style={{backgroundColor: '#0156A7'}}>
                <View style={styles.header}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '95%', marginTop: 5}} >
                        <Text style={styles.textOP}> TFlat </Text> 
                        <Image style={styles.imgHE} source={require('../../../assets/images/10.png')} />
                    </View> 

                    <View style={styles.viewText}> 
                        <TextInput style={styles.textInHE} placeholder='Tra từ Anh Việt - Việt Anh' value={text} onChangeText={(text)=>setText(text)} onSubmitEditing={handleTextSubmit}></TextInput>
                        <Pressable style={styles.btnSearch} onPress={handleTextSubmit}>
                            <FontAwesomeIcon style={{opacity: 0.5}} size={30} icon={faMagnifyingGlass} />
                        </Pressable>

                       
                    </View>

                    <View style={styles.viewOP}> 
                        <View style={{alignItems: 'center'}}>
                            <FontAwesomeIcon style={{color: '#FFFFFF'}} size={25}  icon={faMobileScreen} />
                            <Text style={styles.textOP}> Dịch màn hình </Text>
                        </View>

                        <View>
                            <Pressable  style={{alignItems: 'center'}} >
                                <FontAwesomeIcon style={{color: '#FFFFFF'}} size={25}  icon={faCamera} />
                                <Text style={styles.textOP}> Dịch máy ảnh </Text>
                            </Pressable>
                        </View>

                        <View style={{alignItems: 'center'}}>
                            <FontAwesomeIcon style={{color: '#FFFFFF'}} size={25}  icon={faImage} />
                            <Text style={styles.textOP}> Dịch hình ảnh </Text>
                        </View>
                    </View>
                </View> 
            </SafeAreaView>

            <View style={styles.body}>
                <View style={styles.body_content}> 
                    <View style={{marginTop: 6}}>
                        <Pressable style={styles.buttonOP} onPress={()=>{navigation.navigate('Recent_Words')}}>
                            <Image style={styles.imgInOP} source={require('../../../assets/images/6.png')}></Image>
                            <Text style={styles.textInOP}> Từ đã tra </Text>
                        </Pressable>
                    </View>

                    <View style={{marginTop: 6, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View>
                            <Pressable style={styles.buttonOP1} onPress={()=>{navigation.navigate('Your_Words')}}>
                                <Image style={styles.imgInOP} source={require('../../../assets/images/8.png')}></Image>
                                <Text style={styles.textInOP}> Từ của bạn </Text>
                            </Pressable>
                        </View>

                        <View>
                            <Pressable style={styles.buttonOP1} onPress={()=>{navigation.navigate('Account')}}>
                                <Image style={styles.imgInOP} source={require('../../../assets/images/7.png')}></Image>
                                <Text style={styles.textInOP}> Tài khoản </Text>
                            </Pressable>
                        </View>
                    </View>

                    <View style={{marginTop: 6}}>
                        <Pressable style={styles.buttonOP} onPress={()=>{navigation.navigate('Dictionary_AnhViet')}}>
                            <Image style={styles.imgInOP} source={require('../../../assets/images/1.png')}></Image>
                            <Text style={styles.textInOP}> Từ điển việt anh </Text>
                        </Pressable>
                    </View>

                    <View style={{marginTop: 6}}>
                        <Pressable style={styles.buttonOP}  onPress={()=>{navigation.navigate('Vip_Practice')}}>
                            <Image style={styles.imgInOP} source={require('../../../assets/images/3.png')}></Image>
                            <Text style={styles.textInOP}> Từ vựng luyện thi VIP</Text>
                        </Pressable>
                    </View>

                    <View style={{marginTop: 6}}>
                        <Pressable style={styles.buttonOP}  onPress={()=>{navigation.navigate('VIP_SGK')}}>
                            <Image style={styles.imgInOP} source={require('../../../assets/images/3.png')}></Image>
                            <Text style={styles.textInOP}> Từ vựng VIP SGK </Text>
                        </Pressable>
                    </View>

                    <View style={{marginTop: 6}}>
                        <Pressable style={styles.buttonOP}  onPress={()=>{navigation.navigate('VIP_SGKNEW')}}>
                            <Image style={styles.imgInOP} source={require('../../../assets/images/3.png')}></Image>
                            <Text style={styles.textInOP}> Từ vựng VIP SGK mới </Text>
                        </Pressable>
                    </View>

                    <View style={{marginTop: 6}}>
                        <Pressable style={styles.buttonOP}  onPress={()=>{navigation.navigate('DichVanBan')}} >
                            <Image style={styles.imgInOP} source={require('../../../assets/images/2.png')}></Image>
                            <Text style={styles.textInOP}> Dịch văn bản </Text>
                        </Pressable>
                    </View>

                    <View style={{marginTop: 6}}>
                        <Pressable style={styles.buttonOP} onPress={()=>{navigation.navigate("UngDungHocTiengAnhKhac")}}>
                            <Image style={styles.imgInOP} source={require('../../../assets/images/9.png')}></Image>
                            <Text style={styles.textInOP}> Ứng dụng học tiếng anh khác </Text>
                        </Pressable>
                    </View>

                    <View style={styles.buttonOP2}>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
                            <Image style={styles.imgInOP} source={require('../../../assets/images/4.png')}></Image>
                            <Text style={styles.textInOP}> Gói từ miễn phí </Text>           
                        </View>

                        <View style={{flexDirection: 'row', marginTop: 6}}>
                            <View >
                                <Pressable onPress={() =>{navigation.navigate('DongTuBatQuyTac')}} >
                                    <Text style={styles.textInOP}> Động từ bất quy tắc </Text>
                                </Pressable>

                                <Pressable style={{marginTop: 14}} onPress={() =>{navigation.navigate('TuVungIELTS')}}>
                                    <Text style={styles.textInOP}> Từ vựng IELTS </Text>
                                </Pressable>
                            </View>

                            <View style={{marginLeft: 30}}>
                                <Pressable  onPress={() =>{navigation.navigate('TuVungToeic')}}>
                                    <Text style={styles.textInOP}> Từ vựng TOEIC </Text>
                                </Pressable>

                                <Pressable style={{marginTop: 14}}>
                                    <Text style={styles.textInOP}> Từ vựng TOEFL</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>

                    <View style={{marginTop: 20}}>
                        <Pressable style={styles.buttonOP} onPress={()=>{navigation.navigate('CaiDat')}}>
                        <Image style={styles.imgInOP} source={require('../../../assets/images/5.png')}></Image>
                            <Text style={styles.textInOP}> Cài đặt </Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    )
}