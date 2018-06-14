import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity
} from 'react-native';


export default class LoginScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 2, }}>
            <ImageBackground style={{ flex: 1, marginBottom: 60 }}
              source={require('./../assets/background.jpg')}

              resizeMode='cover'
            />
            <Image
              source={require('./../assets/uer.png')}
              style={{
                width: 120,
                height: 120,
                borderRadius: 120 / 2,
                position: 'absolute',
                bottom: 0,
                left: 20
              }}
              resizeMode='cover'
            />
            <Text
              multiline
              style={{
                position: 'absolute',
                bottom: 20,
                left: 150,
                right: 20,
                fontSize: 18,
                color: 'blue'
              }}
            >Trần Thị Ngọc Ánh Linh</Text>
          </View>
          <View style={{ flex: 3, padding: 10 }}>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <Image
                source={require('./../assets/uer.png')}
                style={{ width: 24, height: 24 }}
              />
              <Text style={{ marginLeft: 10 }}>Địa chỉ: Lô CN3,cụm CN Đông Anh,xã Nguyên Khê,huyện Đông Anh,TP Hà Nội</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <Image
                source={require('./../assets/uer.png')}
                style={{ width: 24, height: 24 }}
              />
              <Text style={{ marginLeft: 10 }}>Email: ngoclinh1989@gmail.com</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <Image
                source={require('./../assets/uer.png')}
                style={{ width: 24, height: 24 }}
              />
              <Text style={{ marginLeft: 10 }}>Số điện thoại: 098 222 4646</Text>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={{ color: 'blue' }}>Mô tả chi tiết:</Text>
              <Text>Công ty TNHH Lam Sơn chuyên sản xuất hàng cơ khí công nghiệp và tiêu dùng</Text>
            </View>
          </View>

        </View>
        <TouchableOpacity style={{ backgroundColor: 'blue', padding: 15 }}>
          <Text style={{ color: 'white', textAlign: 'center' }}>Chỉnh sửa thông tin</Text>

        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});