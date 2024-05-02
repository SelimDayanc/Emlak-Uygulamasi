import React from "react";
import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  TextInput,
  FlatList,
  Dimensions,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import renkler from "C:/Users/MSI-PC/Desktop/Emlak/MyApp/src/consts/renkler";
import Icon from "react-native-vector-icons/MaterialIcons";
const { width } = Dimensions.get("screen");
import evler from "C:/Users/MSI-PC/Desktop/Emlak/MyApp/src/consts/evler";
const AnaEkran = ({ navigation }) => {
  const optionsList = [
    {
      title: "Ev Satın Al",
      img: require("C:/Users/MSI-PC/Desktop/Emlak/MyApp/src/assets/ev1.jpg"),
    },
    {
      title: "Ev Kirala",
      img: require("C:/Users/MSI-PC/Desktop/Emlak/MyApp/src/assets/ev2.jpg"),
    },
  ];
  const categoryList = ["Popular", "Recommended", "Nearest"];

  const ListCategories = () => {
    const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
    return (
      <View style={style.categoryListContainer}>
        {categoryList.map((category, index) => (
          <Pressable
            key={index}
            onPress={() => setSelectedCategoryIndex(index)}
          >
            <Text
              style={[
                style.categoryListText,
                index == selectedCategoryIndex && style.activeCategoryListText,
              ]}
            >
              {category}
            </Text>
          </Pressable>
        ))}
      </View>
    );
  };

  const ListOptions = () => {
    return (
      <View style={style.listeler}>
        {optionsList.map((option, index) => (
          <View style={style.optionsCard} key={index}>
            <Image source={option.img} style={style.optionsCardImage} />

            <Text style={{ marginTop: 10, fontSize: 18, fontWeight: "bold" }}>
              {option.title}
            </Text>
          </View>
        ))}
      </View>
    );
  };
  const Card = ({ house }) => {
    return (
      <Pressable
        activeOpacity={0.8}
        onPress={() => navigation.navigate("DetayEkranı", house)}
      >
        <View style={style.card}>
          {/* Ev Resimlerini Buradan Ekliyoruz */}
          <Image source={house.image} style={style.cardImage} />
          <View style={{ marginTop: 10 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                {house.title}
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  color: renkler.blue,
                  fontSize: 16,
                }}
              >
                15,500 Tl
              </Text>
            </View>

            {/* Lokasyon  */}

            <Text style={{ color: renkler.grey, fontSize: 14, marginTop: 5 }}>
              {house.location}
            </Text>

            <View style={{ marginTop: 10, flexDirection: "row" }}>
              <View style={style.facility}>
                <Icon name="otel" size={18} />
                <Text style={style.facilityText}>2</Text>
              </View>
              <View style={style.facility}>
                <Icon name="dus" size={18} />
                <Text style={style.facilityText}>2</Text>
              </View>
              <View style={style.facility}>
                <Icon name="alan" size={18} />
                <Text style={style.facilityText}>100m2</Text>
              </View>
            </View>
          </View>
        </View>
      </Pressable>
    );
  };
  return (
    <SafeAreaView style={{ backgroundColor: renkler.white, flex: 1 }}>
      <StatusBar
        translucent={false}
        backgroundColor={renkler.white}
        barStyle="dark-content"
      />
      <View style={style.header}>
        <View>
          <Text style={{ color: renkler.grey }}>Location</Text>
          <Text
            style={{ color: renkler.dark, fontSize: 20, fontWeight: "bold" }}
          >
            Türkiye
          </Text>
        </View>
        <Image
          style={style.profilResmi}
          source={require("C:/Users/MSI-PC/Desktop/Emlak/MyApp/src/assets/insan.jpg")}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
          }}
        >
          <View style={style.girisAlanı}>
            <Icon name="arama" color={renkler.grey} size={25} />
            <TextInput placeholder="Adres , Şehir, Lokasyon" />
          </View>

          <View style={style.siralamaButon}>
            <Icon name="uyum" color={renkler.white} size={25} />
          </View>
        </View>

        <ListOptions />

        <ListCategories />

        <FlatList
          snapToInterval={width - 20}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingLeft: 20, paddingVertical: 20 }}
          horizontal
          data={evler}
          renderItem={({ item }) => <Card house={item} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
{
  /* Kart işlemlerini internetten gördüm*/
}
const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  profilResmi: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  girisAlanı: {
    height: 50,
    backgroundColor: renkler.light,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  siralamaButon: {
    backgroundColor: renkler.dark,
    height: 50,
    width: 50,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  optionsCard: {
    height: 210,
    width: width / 2 - 30,
    elevation: 15,
    alignItems: "center",
    backgroundColor: renkler.white,
    borderRadius: 20,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  optionsCardImage: {
    height: 140,
    borderRadius: 10,
    width: "100%",
  },
  listeler: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    paddingHorizontal: 20,
  },
  categoryListText: {
    fontSize: 16,
    fontWeight: "bold",
    paddingBottom: 5,
    color: renkler.grey,
  },
  activeCategoryListText: {
    color: renkler.dark,
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  categoryListContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
    paddingHorizontal: 40,
  },

  card: {
    height: 250,
    backgroundColor: renkler.white,
    elevation: 10,
    width: width - 40,
    marginRight: 20,
    padding: 15,
    borderRadius: 20,
  },
  cardImage: {
    width: "100%",
    height: 120,
    borderRadius: 15,
  },
  facility: { flexDirection: "row", marginRight: 15 },
  facilityText: { marginLeft: 5, color: renkler.grey },
});
export default AnaEkran;
