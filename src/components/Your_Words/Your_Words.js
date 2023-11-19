import React from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faBars, faMagnifyingGlass, faMicrophone  } from '@fortawesome/free-solid-svg-icons';
import { useFonts } from 'expo-font';
import { styles } from './style';

export const Your_Words = () => {
    const [font] = useFonts({
        'Inder': require('../../../assets/fonts/Inder-Regular.ttf'),
    });
    return (
        <View style={styles.container}>
            <View style={styles.header} >
                <Pressable style={styles.back}>
                    <FontAwesomeIcon size={25} style={styles.icon} icon={faChevronLeft} />
                    <Text style={styles.textBack}>Trang chủ</Text>
                </Pressable>

                <Text style={styles.nameHeader}>Từ của bạn</Text>

                <Pressable style={{marginRight: 5}}>
                    <FontAwesomeIcon style={styles.icon} size={25} icon={faBars} />
                </Pressable>
            </View>

            <View style={styles.body}>
                <View style={styles.viewSearchInput}>
                    <FontAwesomeIcon style={{zIndex: 0, marginRight: -30}} size={20} icon={faMagnifyingGlass} />
                    <TextInput style={styles.searchInput} placeholder='Tìm từ trong thư mục' ></TextInput>
                    <FontAwesomeIcon style={{marginLeft: -30}} size={20} icon={faMicrophone} />
                </View>
            </View>
        </View>
    );
};