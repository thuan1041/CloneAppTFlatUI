import React from 'react';
import { View, Text, Image, Pressable, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCamera, faMobileScreen } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-regular-svg-icons';

function DichVanBan() {
    return ( 
        <View style={styles.container}>
            <View style={styles.headerWrapper}>
                <TouchableOpacity style={styles.preWrapper}>
                    <Image style={styles.preImg} source={require("../../../assets/images/preImg.png")}></Image>
                    <Text style={styles.preTxt}>Trang chủ</Text>
                </TouchableOpacity>
                <Text style={styles.headerTxt}>Dịch văn bản</Text>
            </View>
            <View style={styles.bodyWrapper}>
            </View>
            <View style={styles.inputWrapper}>
                <TextInput style={styles.inputTxt} placeholder="Nhập cụm từ, câu văn hoặc đoạn văn để dịch" multiline={true} numberOfLines={10} ></TextInput>
            </View>
            <TouchableOpacity style={styles.inputIcon}>
                <Image style={styles.inputIcon} source={require("../../../assets/images/xmark-solid 1.png")}></Image>
            </TouchableOpacity>
            <View style={styles.optionWrapper}>
                <TouchableOpacity style={styles.optionImg}>
                    <Image style={{width:26,height:27}} source={require("../../../assets/images/download-solid 1.png")}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionImg}>
                    <Image style={{width:20,height:27}} source={require("../../../assets/images/microphone-solid 2.png")}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionImg}>
                    <Image style={{width:26,height:27}} source={require("../../../assets/images/image-regular 2.png")}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionImg}>
                    <Image style={{width:28,height:27}} source={require("../../../assets/images/camera-solid 2.png")}></Image>
                </TouchableOpacity>
            </View>
            <View style={styles.btnChoiceWrapper}>
                <TouchableOpacity style={styles.btnWrapper}>
                    <Text style={styles.btnTxt}>Anh - Việt</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnWrapper}>
                    <Text style={styles.btnTxt}>Việt - Anh</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={[styles.optionImg, styles.optionImgTrash]}>
                <Image style={{width:28,height:27}} source={require("../../../assets/images/trash-can-regular 2.png")}></Image>
            </TouchableOpacity>
            <View style={styles.footertWrapper}>
                <View style={styles.resultWrapper}>
                    <Text style={[styles.resultTxt, {color:"rgba(1, 86, 167, 1)"}]}>I love you</Text>
                    <Text style={styles.resultTxt}>Anh yêu em</Text>
                </View>
                <View style={styles.iconWrapper}>
                    <Image style={{width:32,height:26}} source={require("../../../assets/images/volume-high-solid 6.png")}></Image>
                    <Image style={{width:32,height:27}} source={require("../../../assets/images/star-regular 6.png")}></Image>
                </View>
            </View>
        </View>
     );
}

export default DichVanBan;