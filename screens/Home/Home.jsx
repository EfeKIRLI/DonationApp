import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import style from "./style";
import { Pressable, View, Text, ScrollView, Image } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";


import globalStyle from "../../assets/styles/globalStyle";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import Tab from "../../components/Tab/Tab";
import Badge from "../../components/Badge/Badge";
import Search from "../../components/Search/Search";
import SingleDonationItem from "../../components/SingleDonationItem/SingleDonationItem";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { resetToInitialState, updatedFirstName } from "../../redux/reducer/User";
import { FlatList } from "react-native-gesture-handler";
import { updateSelectedCategoryId } from "../../redux/reducer/Categories";


const Home = () => {

    const user = useSelector(state => state.user)  // state'i okumak için useSelecktor kullan.
    //  LOG  {"firstName": "John", "lastName": "Doe", "userId": 1}
    // console.log(user)
    const donations = useSelector(state => state.donations )

    const dispatch = useDispatch();  // güncelleme yapabilmek için "dispatch" kullanılacak.
    // dispatch(resetToInitialState())

    const categories = useSelector(state => state.categories)
    console.log(categories)

    // const [img, setImg] = useState()




    const [categoryPage, setCategoryPage] = useState(1); // default olarak ilk sayfa 
    const [categoryList, setCategoryList] = useState([]) // kaydırma yapınca gerektiğinde daha fazla öğe eklenmesi.
    const [isLoadingCategories, setIsLoadingCategories] = useState(false)
    const categoryPageSize = 4  // category'ler kaç öğe olmalı , kullanıcılar aradıkça sayfa başına kaç öğe düşmeli.

    useEffect(() => {
        console.log('run this function')
     },[categories.selectedCategoryId])

    console.log('this is our current donations state ' ,donations)

    useEffect(() => {    // sayfa yüklendiğinde bazı öğelerin görüntülenmesi gerekecek.
        setIsLoadingCategories(true)

        console.log('asdasdad')
        let newPage = pagination(categories.categories, categoryPage, categoryPageSize)
        setCategoryList(
            newPage
        );
        // category sayfası arttırılması gerekecek 
        setCategoryPage(categoryPage + 1)
        setIsLoadingCategories(false)
        // ilk sayfanın verilerini zaten alıyor, bu yüzden kategori sayfa ikiyi öcenki çekim(fetch) + (1) bir olarak ayarlarız.
    }, [])

    useEffect(() => {    // sayfa yüklendiğinde bazı öğelerin görüntülenmesi gerekecek.
        console.log('list', categoryList)
    }, [categoryList])


    const pagination = (items, pageNumber, pageSize) => {   // pagination fonskiyonu oluşturulmalı 
        const startIndex = (pageNumber - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        if (startIndex >= items.length) {   // başlangıç indeksi, sahip olunan tüm öğe listesinden daha fazla ve ya eşit ise.
            return []; // nohing to return 
        }
        return items.slice(startIndex, endIndex)
    };

    // pageNumber : bulunduğumuz sayfa 
    // pageSize : sayfa boyutuna ihtiyaç var. 

    return (
        <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
            {/* <Header title={"EFEEEE"} /> */}
            <ScrollView showsVerticalScrollIndicator={false} >
                <View style={style.header}>
                    <View>
                        <Text style={style.headerIntroText}> Hello! </Text>
                        <View style={style.username}>
                            <Header title={user.firstName + " " + user.lastName[0] + "." + user.userId + " 👋"} />
                        </View>
                    </View>

                    <View>
                        <Image
                            resizeMode="contain"
                            source={require('../../assets/user.png')}
                            style={style.profileImage}
                        />
                    </View>
                    {/* görünütüyü görebilmek için stil dosyasına ihtiyaç var  */}
                </View>
                <View style={style.searchBox}>
                    <Search />
                </View>
                <Pressable>
                    <Image
                        style={style.highlightedImage}
                        source={require('../../assets/highlighted_image.png')} resizeMode={'contain'} />
                </Pressable>
                <View style={style.categoryHeader}>
                    <Header title={'Select Category'} type={2} />
                </View>
                <View style={style.categories} />
                <FlatList
                    // onEndReachedThreshold={0.5}
                    onEndReached={() => {
                        if (isLoadingCategories) {
                            return;
                            // console.log(
                            //     "User has reached the end and we are getting more data for page number", categoryPage)
                        };
                        // setIsLoadingCategories(true);r
                        let newData = pagination(
                            categories.categories,
                            categoryPage,
                            categoryPageSize
                        );

                        if (newData.length > 0) {
                            setCategoryList(prevState => [...prevState, ...newData]);
                            setCategoryPage(prevState => prevState + 1);
                        }
                        setIsLoadingCategories(false);
                    }}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    //data={categories.categories} 
                    data={categoryList}
                    renderItem={({ item }) =>
                        <View style={style.categoryItem}
                            key={item.categoryId} >
                            <Tab
                                tabId={item.categoryId}
                                onPress={(value) => dispatch(updateSelectedCategoryId(value))}
                                title={item.name} isInactive={item.categoryId !== categories.selectedCategoryId}
                            />
                        </View>}
                />
            </ScrollView>

            <Pressable onPress={() => dispatch(updatedFirstName({ firstName: 'J' }))} >
                {/* dispatch state'i güncellemek ve store'a kaydetmek(yazdırmak)için kullanıldı. */}
                {/* <Text> Update to firstName !</Text> */}
            </Pressable>
            {/* <Text> Hello </Text>
        <Header title={"Efe S.K."} type={1}/>
        <Header title={"Efe S.K."} type={2}/>
        <Header title={"Efe S.K."} type={3}/>

        <Button title={"Donate"} onPress={() => {console.log("You just pressed me!")}} />
        <Button title={"Donate"} isDisabled={true} />
       
            <Tab title={"Highlight"}  onPress={() => {console.log("You just pressed me!")}}/>
            <Tab title={"Highlight"}  onPress={() => {console.log("You just pressed me!")}} isInactive={true} />

        <Badge title={"Environment"}/>
            <FontAwesome  name={'search'} /> */}




            {/* <View>
                <Search onSearch={(value) => console.log(value)} />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                <SingleDonationItem
                    uri={require('../../assets/cactus.jpeg')}
                    badgeTitle={"Environment"}
                    donationTitle={"Tree Cactus"}
                    price={100}
                />

                <SingleDonationItem
                    uri={require('../../assets/cactus.jpeg')}
                    badgeTitle={"Environment"}
                    donationTitle={"Tree Cactus"}
                    price={100}
                />

            </View> */}
        </SafeAreaView>
    )
}

export default Home;