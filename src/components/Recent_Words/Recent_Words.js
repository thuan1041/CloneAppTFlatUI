import React from 'react';
import { View, Text, Pressable, TextInput, FlatList, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faBars, faMagnifyingGlass, faMicrophone, faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import { faSquare, faStar } from '@fortawesome/free-regular-svg-icons';
import { useFonts } from 'expo-font';
import { styles } from './style';

export const Recent_Words = ({navigation}) => {
    // const [font] = useFonts({
    //     'Inder': require('../../../assets/fonts/Inder-Regular.ttf'),
    // });

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
        },

        {
            id: 3,
            word:'expect',
            mean: 'mong chờ, trông mong, mong đợi'
        },

        {
            id: 4,
            word:'pseudo',
            mean: 'giả, giả tạo, không chân thật'
        },

        {
            id: 5,
            word:'appeal',
            mean: 'sự hấp dẫn, sự thích thú'
        },

        {
            id: 6,
            word:'pseudo',
            mean: 'giả, giả tạo, không chân thật'
        },

        {
            id: 7,
            word:'appeal',
            mean: 'sự hấp dẫn, sự thích thú'
        },

        {
            id: 8,
            word:'appeal',
            mean: 'sự hấp dẫn, sự thích thú'
        },

        {
            id: 9,
            word:'pseudo',
            mean: 'giả, giả tạo, không chân thật'
        },

        {
            id: 10,
            word:'appeal1',
            mean: 'sự hấp dẫn, sự thích thú'
        },
    ]

    const renderItem = ({item}) => (
        <View style={styles.viewItem}>
            <View style={{marginLeft: 10}}>
                <FontAwesomeIcon color='#0156A7' size={23} icon={faSquare} />
            </View>

            <View style={{marginLeft: 15}}>
                <Text style={styles.textWord}> {item.word} </Text>
                <Text style={styles.textMean}> {item.mean} </Text>
            </View>

            <View style={styles.viewFunc}>
                <FontAwesomeIcon style={styles.volOP} size={21} color='#0156A7' icon={faVolumeHigh} />
                <FontAwesomeIcon style={styles.volStar} size={21} color='#0156A7' icon={faStar} />
            </View>
        </View>
    )

    return (
        <View style={styles.container}>
            <View style={styles.header} >
                <Pressable style={styles.back} onPress={()=>{navigation.navigate('Home')}}>
                    <FontAwesomeIcon size={25} style={styles.icon} icon={faChevronLeft} />
                    <Text style={styles.textBack}>Trang chủ</Text>
                </Pressable>

                <Text style={styles.nameHeader}>Từ đã tra</Text>

                <Pressable style={{marginRight: 5}}>
                    <FontAwesomeIcon style={styles.icon} size={25} icon={faBars} />
                </Pressable>
            </View>

            <View style={{alignItems: 'center'}}>
                <View style={styles.viewSearchInput}>
                    <FontAwesomeIcon style={{zIndex: 0, marginRight: -30}} size={20} icon={faMagnifyingGlass} />
                    <TextInput style={styles.searchInput} placeholder='Tìm từ trong thư mục' ></TextInput>
                    <FontAwesomeIcon style={{marginLeft: -30}} size={20} icon={faMicrophone} />
                </View>
            </View>

            <ScrollView style={styles.body}> 
                <FlatList
                    data={Data} 
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                ></FlatList>
                {/* {
                    Data.map(renderItem)
                } */}
            </ScrollView>

            <View style={styles.footer}>
                <Pressable style={styles.buttonFooter}>
                    <Text style={styles.textFooter}>Ôn tập</Text>
                </Pressable>
                
                <Pressable style={styles.buttonFooter}>
                    <Text style={styles.textFooter}>Tập viết</Text>
                </Pressable>
                
                <Pressable style={styles.buttonFooter}>
                    <Text style={styles.textFooter}>Game</Text>
                </Pressable>
                
                <Pressable style={styles.buttonFooter}>
                    <Text style={styles.textFooter}>Game vip</Text>
                </Pressable>
            </View>
        </View>
    );
};