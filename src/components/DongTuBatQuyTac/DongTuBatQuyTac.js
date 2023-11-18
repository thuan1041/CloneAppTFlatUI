import React, { useEffect, useState } from 'react';
import { View, Text, Image, Pressable, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './style';
import { TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCamera, faMobileScreen } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import { CheckBox } from 'react-native-web';
// import { View, Text, CheckBox } from 'react-native-elements';
// thu vien can cai dat: npm install react-native-elements

function DongTuBatQuyTac() {

    const [data,setData] = useState([])

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
        }
        )
    }

    
    const [isChecked, setIsChecked] = useState(false);
    console.log(data);
// {"tu":"tu 4","phienAm":"phienAm 4","nghia":"nghia 4","p":"p 4","pp":"pp 4","loaiTu":"dtbqt","id":"4"}]
    const Item = ({id, tu, phienAm, nghia, p, pp}) => (
        <View style={styles.ItemWrapper}>
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
            <TouchableOpacity style={styles.cicrleWrapper}>
                <Image style={styles.png1} source={require("../../../assets/images/Union.png")}></Image>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.png2} source={require("../../../assets/images/icon _star empty_.png")}></Image>
            </TouchableOpacity>
            <TouchableOpacity>
            </TouchableOpacity>
            <Text style={[{color:"rgba(211, 50, 205, 1)"},styles.p]}>P</Text>
            <Text style={[{color:"rgba(211, 50, 205, 1)"},styles.pp]}>PP</Text>
        </View>
    )
    return ( 
        <View style={styles.container}>
            <View style={styles.headerWrapper}>
                <TouchableOpacity style={styles.preWrapper}>
                    <Image style={styles.preImg} source={require("../../../assets/images/preImg.png")}></Image>
                    <Text style={styles.preTxt}>Trang chủ</Text>
                </TouchableOpacity>
                <Text style={styles.headerTxt}>Động từ bất quy tắt - 0%</Text>
            </View>
            <View style={styles.bodyWrapper}>
                <TouchableOpacity style={styles.searchWrapper}>
                    <Image style={{width:20,height:20, paddingLeft:20}} source={require("../../../assets/images/icon _search_.png")}></Image>
                    <TextInput style={styles.timKiemTxt} placeholder='Tìm từ trong thư mục' ></TextInput>
                </TouchableOpacity>
            </View>
            <View>
                <FlatList
                    data={data}
                    renderItem={({item}) => <Item id={item.id} tu={item.tu} phienAm={item.phienAm} nghia={item.nghia} p={item.p} pp={item.pp} ></Item>}
                ></FlatList>
            </View>
            <View style={styles.footerWrapper}>
                <TouchableOpacity style={styles.btnWrapper}>
                    <Text style={styles.btnTxt}>Game</Text>
                </TouchableOpacity>
                <View>
                <View style={styles.btnWrapper2}>
                    <TouchableOpacity style={styles.btnWrapper3}>
                        <Text style={styles.btnTxt}>Ôn tập</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnWrapper3}>
                        <Text style={styles.btnTxt}>Tập viết</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnWrapper3}>
                        <Text style={styles.btnTxt}>Luyện tập</Text>
                    </TouchableOpacity>
                </View>

                </View>
           </View>
        </View>
     );
}

export default DongTuBatQuyTac;