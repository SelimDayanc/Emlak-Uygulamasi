import React, {useEffect} from 'react';
import {
  StatusBar,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Pressable,
} from 'react-native';
import renkler from 'C:/Users/MSI-PC/Desktop/Emlak/MyApp/src/consts/renkler';
import {getRealEstates} from './firebase'; // Firebase'den veri çekmek için ekledim

const GirisEkrani = ({navigation}) => {
  useEffect(() => {
    // Firestore'dan emlak verilerini çekmek için ekledim
    const fetchRealEstates = async () => {
      const fetchedRealEstates = await getRealEstates();
      // Emlak verilerini aldıktan sonra, ana ekrana yönlendirme
      if (fetchedRealEstates.length > 0) {
        navigation.navigate('AnaEkran');
      }
    };
    fetchRealEstates();
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar translucent backgroundColor={renkler.transparent} />

      <Image
        source={require('C:/Users/MSI-PC/Desktop/Emlak/MyApp/src/assets/girisResmi.jpg')}
        style={style.resim}
      />

      <View style={style.girisAna}>
        <View style={style.giris} />
        <View style={style.giris} />
        <View style={[style.giris, style.girisAktif]} />
      </View>

      <View style={{paddingHorizontal: 20, paddingTop: 20}}>
        <View>
          <Text style={style.title}>Sana Uygun</Text>
          <Text style={style.title}>Aradığın Evler</Text>
        </View>

        <View style={{marginTop: 10}}>
          <Text style={style.textStyle}>
            Yalnızca birkaç tıklamayla karşında
          </Text>
          <Text style={style.textStyle}>Tıklayarak Zirayet Edin.</Text>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          paddingBottom: 40,
        }}>
        <Pressable onPress={() => navigation.navigate('AnaEkran')}>
          <View style={style.btn}>
            <Text style={{color: 'white'}}>Giriş Yap</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  resim: {
    height: 420,
    width: '100%',
    borderBottomLeftRadius: 100,
  },
  girisAna: {
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  giris: {
    height: 3,
    width: 30,
    backgroundColor: renkler.grey,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  girisAktif: {
    backgroundColor: renkler.dark,
  },
  btn: {
    height: 60,
    marginHorizontal: 20,
    backgroundColor: 'black',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {fontSize: 32, fontWeight: 'bold'},
  textStyle: {fontSize: 16, color: renkler.grey},
});

export default GirisEkrani;
