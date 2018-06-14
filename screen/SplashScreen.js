import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';


const items = [
  {
    leftIcon: require('./../assets/uer.png'),
    title: "Quản lý danh sách nhà trọ",
    rightIcon: require('./../assets/notify.png')
  },
  {
    leftIcon: require('./../assets/uer.png'),
    title: "Quản lý danh sách tuyển dụng",
    rightIcon: require('./../assets/notify.png')
  },
  {
    leftIcon: require('./../assets/uer.png'),
    title: "Quản lý người dùng",
    rightIcon: require('./../assets/notify.png')
  },
  {
    leftIcon: require('./../assets/uer.png'),
    title: "Báo cáo thống kê",
    rightIcon: require('./../assets/notify.png')
  }
]



export default class SplashScreen extends Component {
  
  customView = (item) => {
    return (
      <TouchableOpacity 
      key={item.title}
      style={{
        flexDirection: 'row',
        padding: 10,
        backgroundColor: 'white',
        marginTop: 10,
        alignItems:'center'
      }}>
        <Image
          source={item.leftIcon}
          style={{ width: 32, height: 32 }}
        />
        <Text style={{ flex: 1, marginHorizontal: 20 }}>{item.title}</Text>
        <Image
          source={item.rightIcon}
          style={{ width: 24, height: 24 }}
        />
      </TouchableOpacity>
    )
  }

  componentDidMount(){
    this.props.navigation.navigate("Login")
  }

  render() {
    
    return (
      <View style={styles.container}>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 20,
          backgroundColor: 'white'
        }}>
          <Image
            source={require('./../assets/uer.png')}
            style={{ width: 80, height: 80, borderRadius: 80 / 2 }}
            resizeMode='cover'
          />
          <View style={{ flex: 1, paddingHorizontal: 20 }}>
            <Text>Trần Thị Ngọc Ánh Linh</Text>
            <Text>Đi tới trang cá nhân ></Text>
          </View>
          <View style={{ paddingTop: 10, paddingRight: 5 }}>
            <Image
              source={require('./../assets/notify.png')}
              style={{ width: 24, height: 24, tintColor: 'blue' }}
            />
            <View style={{
              width: 20,
              height: 20,
              borderRadius: 20 / 2,
              borderColor: 'black',
              borderWidth: 1,
              position: 'absolute',
              right: 0,
              backgroundColor: 'red',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Text style={{
                fontSize: 9,
                color: 'white',
              }}>55</Text>
            </View>

          </View>

        </View>
        {items.map(item => this.customView(item))}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});