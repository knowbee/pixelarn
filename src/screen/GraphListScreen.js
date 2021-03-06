import React, {
  Component,
} from 'react'
import {
  FlatList,
  StyleSheet,
  View,
} from 'react-native'
import {
  List,
  ListItem,
  Icon,
} from 'react-native-elements'
import {
  type NavigationScreenProp,
} from 'react-navigation/src/TypeDefinition';

type Prop = {
  navigation: NavigationScreenProp<*>,
}

export default class GraphListScreen extends Component<Prop> {
  static navigationOptions = ({navigation}) => {
    return {
        title: 'GRAPH LIST',
        headerLeft: (
          <Icon
            name="bars"
            type="font-awesome"
            iconStyle={{borderLeftWidth: 8}}
            onPress={() => navigation.toggleDrawer()}
          />
        ),
        headerRight: (
          <Icon
            name="plus-square"
            type="font-awesome"
            iconStyle={{borderRightWidth: 8}}
            onPress={() => navigation.navigate('GraphEdit')}
          />
        )
    }
  }

  constructor(props: Prop) {
    super(props)
  }

  _onPress(item) {
    if (item.id == 'loading') return
    const { navigation } = this.props;
    navigation.navigate('Graph', {graphId: item.id})
  }

  renderItem({item}) {
    return (
      <ListItem
        leftIcon={{name: 'apps'}}
        title={item.name}
        key={item.id}
        onPress={() => this._onPress(item)}
      />
    )
  }

  render() {
    const {navigation} = this.props
    return (
      <View>
        <List>
          <FlatList
            data={navigation.getParam('graphs')}
            keyExtractor={(item, index) => item.id}
            renderItem={(item) => this.renderItem(item)}
          />
        </List>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    margin: 10,
  }
});
    