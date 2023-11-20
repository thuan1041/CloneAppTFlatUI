import React from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faBars, faMagnifyingGlass, faMicrophone  } from '@fortawesome/free-solid-svg-icons';
import { useFonts } from 'expo-font';
import { styles } from './style';

export const VIP_SGK = ({navigation}) => {
    const [font] = useFonts({
        'Inder': require('../../../assets/fonts/Inder-Regular.ttf'),
    });
    return (
        <View style={styles.container}>
            <View style={styles.header} >
                <Pressable style={styles.back} onPress={()=>{navigation.navigate('Home')}}>
                    <FontAwesomeIcon size={25} style={styles.icon} icon={faChevronLeft} />
                    <Text style={styles.textBack}>Trang chủ</Text>
                </Pressable>

                <Text style={styles.nameHeader}>Từ vựng VIP SGK</Text>
            </View>
        </View>
    );
};