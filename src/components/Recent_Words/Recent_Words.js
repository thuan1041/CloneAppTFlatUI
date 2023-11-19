import React from 'react';
import { View, Text, Pressable, TextInput, FlatList } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faBars, faMagnifyingGlass, faMicrophone  } from '@fortawesome/free-solid-svg-icons';
import { useFonts } from 'expo-font';
import { styles } from './style';

export const Recent_Words = () => {
    const [font] = useFonts({
        'Inder': require('../../../assets/fonts/Inder-Regular.ttf'),
    });

    const Data = [
        {
            id: 1,
            word:'featured',
            mean: 'có đường nét, có nét mặt'
        },

        {
            id: 2,
            word:'actual',
            mean: 'thực sự, có thật; trên thực tế'
        }
    ]

    const renderItem = ({item}) => (
        <View>
            <Text>{item.word}</Text>
        </View>
    )

    return (
        <View style={styles.container}>
            <View style={styles.header} >
                <Pressable style={styles.back}>
                    <FontAwesomeIcon size={25} style={styles.icon} icon={faChevronLeft} />
                    <Text style={styles.textBack}>Trang chủ</Text>
                </Pressable>

                <Text style={styles.nameHeader}>Từ đã tra</Text>

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

            <View>
                {/* <FlatList
                    data={Data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                /> */}
            </View>
        </View>
    );
};