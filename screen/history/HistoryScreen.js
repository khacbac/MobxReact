import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import Word from './component/Word';
import Filter from './component/Filter'
import AddItem from './component/AddItem';

class App extends Component {

  _renderItem = ({ item }) => {
    return (
      <View>
        <Word myWord={item} />
      </View>
    )
  }

  getWordList = () => {
    const { myFilter, arrWords, isAdding } = this.props;
    if (myFilter === 'MEMORIZED') return arrWords.filter(e => e.memorized);
    if (myFilter === 'NEED_PRACTICE') return arrWords.filter(e => !e.memorized);
    return arrWords;
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{
          flex: 1,
          backgroundColor: 'green',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          alignItems: 'center'
        }}>
          <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>Từ vựng</Text>
          <TouchableOpacity
            style={{
              borderColor: 'white',
              width: 30,
              height: 30,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 30 / 2,
              borderWidth: 1
            }}
            onPress={() => {
              this.props.dispatch({ type: 'TOGGLE_ADDING' })
            }}>
            <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 10 }}>
          {this.props.isAdding && <AddItem />}

          <FlatList
            data={this.getWordList()}
            renderItem={this._renderItem}
            keyExtractor={item => item.en}
            containerStyle={{ flex: 1 }}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Filter />

        </View>
      </View>
    );
  }
}

mapStateToProps = (state) => {
  return {
    arrWords: state.arrWords,
    myFilter: state.filterStatus,
    isAdding: state.isAdding
  }
}

export default connect(mapStateToProps)(App);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignSelf: 'stretch',
  },
});