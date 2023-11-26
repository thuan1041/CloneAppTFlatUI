import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, TextInput, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faArrowRight, faMagnifyingGlass, faPencil  } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { useFonts } from 'expo-font';
import { styles } from './style';

export const Translate_Dictionary = ({route, navigation}) => {
    const { english, mean } = route.params;
    // const english = 'True'
    // const mean = 'Đúng'
    

    return (
        <View style={styles.container}>
            <View style={styles.header} >
                <Pressable style={styles.back} onPress={()=>{navigation.navigate('VietAnh_Dictionary')}}>
                    <FontAwesomeIcon size={25} style={styles.icon} icon={faArrowLeft} />
                    <Text style={styles.textBack}> {mean} </Text>
                </Pressable>

                {/* <Text style={styles.nameHeader}>Nguyễn Thị Cẩm Như</Text> */}
                <View style={styles.viewOP}>
                    <FontAwesomeIcon style={{marginRight: 20}} size={23} color='#FFFFFF' icon={faMagnifyingGlass} />
                    <FontAwesomeIcon style={{marginRight: 20}} size={23} color='#FFFFFF' icon={faPencil} />
                    <FontAwesomeIcon style={{marginRight: 60}} size={23} color='#FFFFFF' icon={faStar} />
                </View>
            </View>

            <View style={styles.body}>
                <View style={{marginLeft: 10, marginTop: 25}}> 
                    <Text style={styles.textMean}>{mean}</Text>
                    {/* <Text style={[styles.textDT, {marginTop: 20}]}>danh từ</Text> */}
               
                    <View style={styles.viewMean}>
                        <FontAwesomeIcon color='violet' size={16} icon={faArrowRight} />
                        <Text style={styles.textEnglish}>{english}</Text>
                    
                    </View>
               
                </View>

                

            </View>

        </View>
    );
};