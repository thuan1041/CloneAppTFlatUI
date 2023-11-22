import React from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faMagnifyingGlass, faMicrophone  } from '@fortawesome/free-solid-svg-icons';
import { useFonts } from 'expo-font';
import { styles } from './style';

export const VietAnh_Dictionary = ({navigation}) => {
    // const [font] = useFonts({
    //     'Inder': require('../../../assets/fonts/Inder-Regular.ttf'),
    // });
    return (
        <View style={styles.container}>
            <View style={styles.header} >
                <Pressable style={styles.back} onPress={()=>{navigation.navigate('Home')}}>
                    <FontAwesomeIcon size={25} style={styles.icon} icon={faChevronLeft} />
                    <Text style={styles.textBack}>Trang chủ</Text>
                </Pressable>

                <Text style={styles.nameHeader}>Từ điển Việt Anh</Text>
            </View>

            <View style={styles.body}>
                <View style={styles.viewSearchInput}>
                    <FontAwesomeIcon style={{zIndex: 0, marginRight: -30}} size={20} icon={faMagnifyingGlass} />
                    <TextInput style={styles.searchInput} placeholder='Nhập từ tiếng việt' ></TextInput>
                    <FontAwesomeIcon style={{marginLeft: -30}} size={20} icon={faMicrophone} />
                </View>

                <View style={styles.viewAria}>
                    <Text style={styles.textAria}> Nhập từ tiếng Việt có dấu hoặc không dấu vào ô bên trên để tra từ </Text>
                    <Text style={[styles.textAria, {marginTop:10}]}> Lưu ý: Nếu nhập từ có dấu thì phải có dấu đầy đủ, còn nếu nhập từ không dấu thì tất cả phải không dấu </Text>
                </View>
            </View>
        </View>
    );
};