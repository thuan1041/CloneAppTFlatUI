import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { styles } from './style';
import { TextInput } from 'react-native';
import { useFonts } from 'expo-font';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCamera, faMobileScreen } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-regular-svg-icons';


export const Screen_Home = () => {
    const [font] = useFonts({
        'Inder': require('../../../assets/fonts/Inder-Regular.ttf'),
    });

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}} >
                    <Text> TFlat </Text> 
                    <Image style={styles.imgHE} source={require('../../../assets/images/10.png')} />
                </View> 

                <View style={styles.viewText}> 
                    <TextInput style={styles.textInHE} placeholder='Tra từ Anh Việt - Việt Anh'></TextInput>
                </View>

                <View style={styles.viewOP}> 
                    <View style={{alignItems: 'center'}}>
                        <FontAwesomeIcon style={{color: '#FFFFFF'}} size={25}  icon={faMobileScreen} />
                        <Text style={styles.textOP}> Dịch màn hình </Text>
                    </View>

                    <View style={{alignItems: 'center'}}>
                        <FontAwesomeIcon style={{color: '#FFFFFF'}} size={25}  icon={faCamera} />
                        <Text style={styles.textOP}> Dịch máy ảnh </Text>
                    </View>

                    <View style={{alignItems: 'center'}}>
                        <FontAwesomeIcon style={{color: '#FFFFFF'}} size={25}  icon={faImage} />
                        <Text style={styles.textOP}> Dịch hình ảnh </Text>
                    </View>
                </View>
            </View> 

            <View style={styles.body}>
                <View style={styles.body_content}> 
                    <View style={{marginTop: 6}}>
                        <Pressable style={styles.buttonOP}>
                            <Image style={styles.imgInOP} source={require('../../../assets/images/6.png')}></Image>
                            <Text style={styles.textInOP}> Từ đã tra </Text>
                        </Pressable>
                    </View>

                    <View style={{marginTop: 4, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View>
                            <Pressable style={styles.buttonOP1}>
                                <Image style={styles.imgInOP} source={require('../../../assets/images/8.png')}></Image>
                                <Text style={styles.textInOP}> Từ của bạn </Text>
                            </Pressable>
                        </View>

                        <View>
                            <Pressable style={styles.buttonOP1}>
                                <Image style={styles.imgInOP} source={require('../../../assets/images/7.png')}></Image>
                                <Text style={styles.textInOP}> Tài khoản </Text>
                            </Pressable>
                        </View>
                    </View>

                    <View style={{marginTop: 4}}>
                        <Pressable style={styles.buttonOP}>
                            <Image style={styles.imgInOP} source={require('../../../assets/images/1.png')}></Image>
                            <Text style={styles.textInOP}> Từ điển việt anh </Text>
                        </Pressable>
                    </View>

                    <View style={{marginTop: 4}}>
                        <Pressable style={styles.buttonOP}>
                            <Image style={styles.imgInOP} source={require('../../../assets/images/3.png')}></Image>
                            <Text style={styles.textInOP}> Từ vựng luyện thi VIP</Text>
                        </Pressable>
                    </View>

                    <View style={{marginTop: 4}}>
                        <Pressable style={styles.buttonOP}>
                            <Image style={styles.imgInOP} source={require('../../../assets/images/3.png')}></Image>
                            <Text style={styles.textInOP}> Từ vựng VIP SGK </Text>
                        </Pressable>
                    </View>

                    <View style={{marginTop: 4}}>
                        <Pressable style={styles.buttonOP}>
                            <Image style={styles.imgInOP} source={require('../../../assets/images/3.png')}></Image>
                            <Text style={styles.textInOP}> Từ vựng VIP SGK mới </Text>
                        </Pressable>
                    </View>

                    <View style={{marginTop: 4}}>
                        <Pressable style={styles.buttonOP}>
                            <Image style={styles.imgInOP} source={require('../../../assets/images/2.png')}></Image>
                            <Text style={styles.textInOP}> Dịch văn bản </Text>
                        </Pressable>
                    </View>

                    <View style={{marginTop: 4}}>
                        <Pressable style={styles.buttonOP}>
                            <Image style={styles.imgInOP} source={require('../../../assets/images/9.png')}></Image>
                            <Text style={styles.textInOP}> Ứng dụng học tiếng anh khác </Text>
                        </Pressable>
                    </View>

                    <View style={styles.buttonOP2}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image style={styles.imgInOP} source={require('../../../assets/images/4.png')}></Image>
                            <Text style={styles.textInOP}> Gói từ miễn phí </Text>           
                        </View>

                        <View style={{flexDirection: 'row'}}>
                            <View >
                                <Pressable>
                                    <Text style={styles.textInOP}> Động từ bất quy tắc </Text>
                                </Pressable>

                                <Pressable style={{marginTop: 14}}>
                                    <Text style={styles.textInOP}> Từ vựng IELTS </Text>
                                </Pressable>
                            </View>

                            <View style={{marginLeft: 30}}>
                                <Pressable>
                                    <Text style={styles.textInOP}> Từ vựng TOEIC </Text>
                                </Pressable>

                                <Pressable style={{marginTop: 14}}>
                                    <Text style={styles.textInOP}> Từ vựng TOEFL</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>

                    <View style={{marginTop: 4}}>
                        <Pressable style={styles.buttonOP}>
                        <Image style={styles.imgInOP} source={require('../../../assets/images/5.png')}></Image>
                            <Text style={styles.textInOP}> Cài đặt </Text>
                        </Pressable>
                    </View>
                    
                </View>
            </View>
        </View>
    )
}