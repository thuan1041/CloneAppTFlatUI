import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, Button, Pressable } from 'react-native';
import { styles } from './style';
import { TextInput } from 'react-native';
import { CheckBox } from 'react-native-web';
// import SoundPlayer from 'react-native-sound-player';
// import { searchFilterFunction } from '../../handle/handleSearch';
// import { View, Text, CheckBox } from 'react-native-elements';
// thu vien can cai dat: npm install react-native-elements
import { Audio } from 'expo-av';

export const DongTuBatQuyTac=({navigation}) => {
    const titleScreen = 'DongTuBatQuyTac';
    const [data,setData] = useState([])
    const [filteredData1, setFilteredData1] = useState([]);
    //read file am thanh mp3
    const [sound, setSound] = useState();
    // var [linkMp3, setLinkMp3] = useState();
    var linkMp3 = '';
    useEffect(
        ()=>{
            getListData()
        }, []
    )

    const getListData = ()=>
    {
        fetch("https://6558f205e93ca47020a9ee7e.mockapi.io/baitaplon/dong-tu-bat-quy-tac")
        .then(response => response.json())
        // .then((json)=> setData(json))
        .then( json => {
            const filteredData = json.filter(item => item.loaiTu === "dtbqt");
            setData(filteredData)
            setFilteredData1(filteredData)
        }
        )
    }
    
    const [isChecked, setIsChecked] = useState(false);
    console.log(data);
    const Item = ({id, tu, phienAm, nghia, p, pp, linkMp3Item}) => (
        <TouchableOpacity style={styles.ItemWrapper} onPress={()=>{
            navigation.navigate('WordDetail',{tu:tu,phienAm:phienAm,nghia:nghia,p:p, pp:pp, titleScreen:titleScreen})
        }}>
            {/* <Text disabled style={{position:"relative"}}></Text> */}
            <Text style={[styles.ItemTu,{fontWeight:700},{marginLeft:36}]} >{tu}</Text>
            <Text style={[styles.ItemTu,{marginLeft:36}]}>{phienAm}</Text>
            <Text style={[styles.ItemTu,{marginLeft:36}]}>{nghia}</Text>
            <View style={styles.ppWapper}>
                <Text style={[styles.ItemTu1,{marginLeft:10},{color:"rgba(211, 50, 205, 1)"}]}>{p}</Text>
                <Image style={styles.png3} source={require("../../../assets/images/icon _sound high_.png")}></Image>
            </View>
            <View style={styles.ppWapper}>
                <Text style={[styles.ItemTu1,{marginLeft:10},{color:"rgba(211, 50, 205, 1)"}]}>{pp}</Text>
                <Image style={styles.png3} source={require("../../../assets/images/icon _sound high_.png")}></Image>
            </View>
            
            <TouchableOpacity >
                <CheckBox  style={styles.checked}
                    checked={isChecked}
                    onPress={() => setIsChecked(!isChecked)}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cicrleWrapper} onPress={()=>{
                linkMp3 = require('../../../assets/mp3/file.mp3');
                renderSound
                playSound()
            }}>                
                <Image style={styles.png1} source={require("../../../assets/images/Union.png")}></Image>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.png2} source={require("../../../assets/images/icon _star empty_.png")}></Image>
            </TouchableOpacity>
            <TouchableOpacity>
            </TouchableOpacity>
            <Text style={[{color:"rgba(211, 50, 205, 1)"},styles.p]}>P</Text>
            <Text style={[{color:"rgba(211, 50, 205, 1)"},styles.pp]}>PP</Text>
        </TouchableOpacity>
    )

    const searchFilterFunction = (text) => {
        if(text){  
            const newData = data.filter(item => {
                const itemData = item.tu ? item.tu.toUpperCase() : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            })
            setFilteredData1(newData);
        } else {
            setFilteredData1(data);
        }
    }

    // //read file am thanh mp3
    const renderSound = useEffect(() => {
        return () => {
            if (sound) {
                sound.unloadAsync();
            }
        };
    }, [sound]);
    
    const playSound = async () => {
        try {
            const { sound: soundObject } = await Audio.Sound.createAsync(linkMp3);
            setSound(soundObject);
            await soundObject.playAsync();
        } catch (error) {
            console.error('Không thể phát âm thanh:', error);
        }
    };

    console.log('link file:', linkMp3);
      
    return ( 
        <View style={styles.container}>
            <View style={styles.headerWrapper}>
                <Pressable style={styles.preWrapper} onPress={()=>{navigation.navigate('Home')}}>
                    <Image style={styles.preImg} source={require("../../../assets/images/preImg.png")}></Image>
                    <Text style={styles.preTxt}>Trang chủ</Text>
                </Pressable>
                <Text style={styles.headerTxt}>Động từ bất quy tắc - 0%</Text>
            </View>
            <View style={styles.bodyWrapper}>
                <Image style={styles.pngSearchWrapper} source={require("../../../assets/images/icon _search_.png")}></Image>
                <TouchableOpacity style={styles.searchWrapper}>
                    <TextInput style={styles.timKiemTxt} underlineColorAndroid="transparent" placeholder='Tìm từ trong thư mục' 
                        onChangeText={
                            (text) => {
                                searchFilterFunction(text)
                            }
                        }
                    ></TextInput>
                </TouchableOpacity>
            </View>
            
            <FlatList
                data={filteredData1}
                renderItem={({item}) => <Item id={item.id} tu={item.tu} phienAm={item.phienAm} nghia={item.nghia} p={item.p} pp={item.pp} linkMp3Item={item.linkMP3}></Item>}
            ></FlatList>

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
}