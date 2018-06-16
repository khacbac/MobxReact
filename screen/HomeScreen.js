import React, { Component, } from "react";
import { View, Text } from 'react-native';
import { Container, Header, Title, Content, Button, Icon, Right, Body, Left, Picker, Form, Item } from "native-base";

import cities from './data/tinh_tp.json';
import quan_huyens from './data/quan_huyen.json';

// const chooseCity = [
//   {
//     label: "Nghệ An",
//     value: "key0",
//     color: "black"
//   },
//   {
//     label: "Thanh Hóa",
//     value: "key1",
//     color: "black"
//   },
//   {
//     label: "Quảng Bình",
//     value: "key2",
//     color: "black"
//   },
//   {
//     label: "Hà Nội",
//     value: "key3",
//     color: "black"
//   },
//   {
//     label: "Sài Gòn",
//     value: "key4",
//     color: "black"
//   },
//   {
//     label: "Hà Nam",
//     value: "key5",
//     color: "black"
//   },
//   {
//     label: "Bình Dương",
//     value: "key6",
//     color: "black"
//   }
// ]

export default class PickerExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected1: "key0",
      quan_huyens: []
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
        <Content>
          <Text style={{ color: 'blue' }}>Email</Text>
          <Form style={{
            borderColor: 'black',
            borderWidth: 1
          }}>
            <Picker
              iosHeader="Select one"
              mode="dropdown"
            // selectedValue={this.state.selected1}
            // onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Wallet" value="key0" color="black" />
              <Picker.Item label="ATM Card" value="key1" color="black" />
              <Picker.Item label="Debit Card" value="key2" color="black" />
              <Picker.Item label="Credit Card" value="key3" color="black" />
              <Picker.Item label="Net Banking" value="key4" color="black" />
            </Picker>
          </Form>

          <ItemPicker
            header="Chọn Tỉnh/Thành phố"
            required
            mode="dialog"
            items={cities}
            onValueChange={(item) => {
              this.setState({
                selected1: item
              });
            }}
            selectedValue={this.state.selected1}
          />
          {/* <ItemPicker
            header="Chọn Quận/Huyện"
            required
            mode="dialog"
            items={quan_huyens}
          /> */}
          {/* <ItemPicker
            header="Chọn Xã/Phường"
            required
            mode="dialog"
            items={cities}
          /> */}
        </Content>
      </Container>
    );
  }
}

class ItemPicker extends Component {
  render() {
    const txtRquire = '\t*';
    return (
      <View>
        <Text style={{ color: 'blue' }}>{this.props.header}{this.props.required && <Text style={{ color: 'red' }}>{txtRquire}</Text>}</Text>

        <Form style={{
          borderColor: 'black',
          borderWidth: 1
        }}>
          <Picker
            iosHeader="Select one"
            mode={this.props.mode}
            selectedValue={this.props.selectedValue}
            onValueChange={this.props.onValueChange}
          >
            {this.props.items.map(item => {
              return <Picker.Item label={item.label} value={item.value} color={item.color} />
            })}

          </Picker>
        </Form>
      </View>
    )
  }
}