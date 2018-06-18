import React, { Component, } from "react";
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Right,
  Body,
  Left,
  Picker,
  Form,
  Item,
  CheckBox,
  ListItem
} from "native-base";

import cities from './data/tinh_tp.json';

export default class PickerExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected_tinh: "",
      selected_quan: "",
      quan_huyens: Object.values(Object.values(cities).filter(item => item.name === "Thành phố Cần Thơ")[0].districts),
      tinh: []
    };
  }
  onValueChange(value) {
    this.setState({
      selected1: value
    });
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Picker</Title>
          </Body>
          <Right />
        </Header>
        <ScrollView >
          <Content style={{ padding: 10 }}>
            <ItemInput
              header="Chỉnh sửa tên"
              placeholder="Nhập nội dung" />

            <ItemInput
              header="Số điện thoại"
              placeholder="Nhập lại số điện thoại" />

            <ItemInput
              header="Email"
              placeholder="Nhập lại địa chỉ email" />

            <ItemInput
              required
              header="Địa chỉ"
              placeholder="Nhập địa chỉ" />

            {/* Item chọn tỉnh / thành phố */}
            <ItemPicker
              header="Chọn Tỉnh/Thành phố"
              required
              mode="dialog"
              onValueChange={(value) => {
                let filter = Object.values(cities).filter(item => item.name === value);
                this.setState({
                  selected_tinh: value,
                  quan_huyens: Object.values(filter[0].districts)
                });
              }}
              selectedValue={this.state.selected_tinh}
            >
              {Object.values(cities).map((item, index) => {
                return <Picker.Item key={index} label={item.name} value={item.name} color={item.color} />
              })}
            </ItemPicker>

            {/* Item chọn quận huyện tương ứng */}
            <ItemPicker
              header="Chọn Quận/Huyện"
              required
              mode="dialog"
              onValueChange={(value) => {
                this.setState({
                  selected_quan: value,
                });
              }}
              selectedValue={this.state.selected_quan}
            >
              {Object.values(this.state.quan_huyens).map((item, index) => {
                return <Picker.Item key={index} label={item} value={item} color={item.color} />
              })}
            </ItemPicker>

            {/* Item chọn xã phường */}
            <ItemPicker
              header="Chọn Xã/Phường"
              required
              mode="dialog"
            >
            </ItemPicker>



            <ItemInput
              required
              header="Mô tả"
              placeholder="Nhập nội dung" />

            <View style={{ alignItems: 'center', flexDirection: 'row', marginTop: 10 }}>
              <CheckBox checked={false} color="green" />
              <Text style={{ fontSize: 18, marginLeft: 20 }}>Đổi mật khẩu</Text>
            </View>

          </Content>
        </ScrollView>
        <View style={{ alignItems: 'center', flexDirection: 'row', marginTop: 10 }}>
          <TouchableOpacity style={{ padding: 10, backgroundColor: 'blue', flex: 1 }}>
            <Text style={{ fontSize: 18, color: 'white', textAlign: 'center' }}>Cập nhật thông tin</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ padding: 10, backgroundColor: 'yellow', flex: 1 }}>
            <Text style={{ fontSize: 18, color: 'black', textAlign: 'center' }}>Hủy tác vụ</Text>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}

class ItemPicker extends Component {
  render() {
    const txtRquire = '\t*';
    return (
      <View style={{ marginTop: 10 }}>
        <Text style={[{ color: 'blue' }, this.props.style]}>{this.props.header}{this.props.required && <Text style={{ color: 'red' }}>{txtRquire}</Text>}</Text>

        <Form style={{
          borderColor: 'black',
          borderWidth: 1,
          marginTop: 10,
          borderRadius: 10
        }}>
          <Picker
            iosHeader="Select one"
            mode={this.props.mode}
            selectedValue={this.props.selectedValue}
            onValueChange={this.props.onValueChange}
          >
            {/* {this.props.items.map(item => {
              return <Picker.Item key={item.label} label={item.label} value={item.value} color={item.color} />
            })} */}

            {/* {this.props.items.map((item, index) => {
              return <Picker.Item key={index} label={item.name} value={index} color={item.color} />
            })}
             */}
            {this.props.children}

          </Picker>
        </Form>
      </View>
    )
  }
}

class ItemInput extends Component {
  render() {
    const txtRquire = '\t*';
    return (
      <View style={{ marginTop: 10 }}>
        <Text style={[{ color: 'blue' }, this.props.style]}>{this.props.header}{this.props.required && <Text style={{ color: 'red' }}>{txtRquire}</Text>}</Text>

        <Form style={{
          borderColor: 'black',
          borderWidth: 1,
          marginTop: 10,
          borderRadius: 10
        }}>
          <TextInput
            placeholder={this.props.placeholder}
            underlineColorAndroid="transparent"
            android />
        </Form>
      </View>
    )
  }
}