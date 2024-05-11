import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import renkler from 'C:/Users/MSI-PC/Desktop/Emlak/MyApp/src/consts/renkler';
import {getRealEstates} from './firebase'; // Firebase'den veri çekmek için ekledim

const {width} = Dimensions.get('screen');

const DetayEkranı = ({navigation, route}) => {
  const [realEstates, setRealEstates] = useState([]);
  const ev = route.params;

  useEffect(() => {
    // Firestore'dan emlak verilerini çekmek için
    const fetchRealEstates = async () => {
      const fetchedRealEstates = await getRealEstates();
      setRealEstates(fetchedRealEstates);
    };
    fetchRealEstates();
  }, []);

  const InteriorCard = ({interior}) => {
    return <Image source={interior} style={style.icMekanResmi} />;
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: renkler.white}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Ev Resimleri */}

        <View style={style.arkaplanAlan}>
          <ImageBackground style={style.arkaplanResmi} source={ev.resim}>
            <View style={style.header}>
              <View style={style.headerBtn}>
                <Icon name="ok-tusu" size={20} onPress={navigation.goBack} />
              </View>
              <View style={style.headerBtn}>
                <Icon name="favoriler" size={20} color={renkler.red} />
              </View>
            </View>
          </ImageBackground>

          <View style={style.sanalTur}>
            <Text style={{color: renkler.white}}>Sanal Tur</Text>
          </View>
        </View>

        <View style={style.detailsContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>{ev.title}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={style.reytingSyle}>
                <Text style={{color: renkler.white}}>4.8</Text>
              </View>
              <Text style={{fontSize: 13, marginLeft: 5}}>
                Reytingi Yüksek Ev
              </Text>
            </View>
          </View>

          <Text style={{fontSize: 16, color: renkler.grey}}>{ev.konum}</Text>
          <View style={{flexDirection: 'row', marginTop: 20}}>
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
              <Text style={style.facilityText}>100 m2</Text>
            </View>
          </View>
          <Text style={{marginTop: 20, color: renkler.grey}}>
            {ev.detaylar}
          </Text>

          <FlatList
            contentContainerStyle={{marginTop: 20}}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, key) => key.toString()}
            data={ev.icmekanlar}
            renderItem={({item}) => <InteriorCard interior={item} />}
          />

          <View style={style.footer}>
            <View>
              <Text
                style={{
                  color: renkler.blue,
                  fontWeight: 'bold',
                  fontSize: 18,
                }}>
                15,500 TL
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: renkler.grey,
                  fontWeight: 'bold',
                }}>
                Toplam Fiyat
              </Text>
            </View>
            <View style={style.rezButonu}>
              <Text style={{color: renkler.white}}>Şimdi Rezervasyon Yap</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  arkaplanAlan: {
    elevation: 20,
    marginHorizontal: 20,
    marginTop: 20,
    alignItems: 'center',
    height: 350,
  },
  arkaplanResmi: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden',
  },
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  headerBtn: {
    height: 50,
    width: 50,
    backgroundColor: renkler.white,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  reytingSyle: {
    height: 30,
    width: 35,
    backgroundColor: renkler.blue,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sanalTur: {
    top: -20,
    width: 120,
    borderRadius: 10,
    height: 40,
    paddingHorizontal: 20,
    backgroundColor: renkler.dark,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icMekanResmi: {
    width: width / 3 - 20,
    height: 80,
    marginRight: 10,
    borderRadius: 10,
  },
  footer: {
    height: 70,
    backgroundColor: renkler.light,
    borderRadius: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  rezButonu: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: renkler.dark,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  detailsContainer: {flex: 1, paddingHorizontal: 20, marginTop: 40},
  facility: {flexDirection: 'row', marginRight: 15},
  facilityText: {marginLeft: 5, color: renkler.grey},
});

export default DetayEkranı;
