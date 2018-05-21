import React, { Component } from 'react';
import {
  Platform,
  FlatList,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
      'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
  });
  
  let REQUEST_URL = "https://api.douban.com/v2/movie/in_theaters";
  type Props = {};
  export default class MainScreen extends Component<Props> {
    static navigationOptions = {
        title: 'Welcome',
      };
    constructor(props) {
      super(props);
      this.state = {
          data: [],
          loaded: false,
      }
      this.fetchDate =this.fetchDate.bind(this);
    }
    componentDidMount(){
      this.fetchDate();
    }
  
    fetchDate(){
      fetch(REQUEST_URL)
        .then((response) => response.json())
        .then((response)=>{
          this.setState({
            data: this.state.data.concat(response.subjects),
            loaded: true,
          })
          
        })
    }
  
    render() {
      if (!this.state.loaded) {
        return this.renderLoadingView();
      }
      // console.log(this.state.data)
       return (
        <FlatList
          data={this.state.data}
          renderItem={this.renderMovie}
          style={styles.list}
          onPress={() =>
            navigate('Profile', { name: 'Jane' })
          }
        />
      );
    }
  
    renderLoadingView() {
      return (
        <View style={styles.container}>
          <Text>
            loading……
          </Text>
        </View>
      );
    }
  
    renderMovie(movie) {
      console.log(movie);
      return (
        <View id={movie.index} style={styles.container}>
          <Image
            source={{uri: movie.item.images.small}}
            style={styles.thumbnail}
          />
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{movie.item.title}</Text>
            <Text style={styles.year}>{movie.item.year}</Text>
          </View>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container:{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    rightContainer: {
      flex: 1,
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center',
      },
      year: {
        textAlign: 'center',
      },
      list: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF',
      },
    thumbnail: {
      width: 53,
      height: 81,
    }
  })
  