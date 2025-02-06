import React from 'react';
import {View, FlatList, TouchableOpacity, StyleSheet, Text, StatusBar} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const DATA1 = [
  {
    id: '1',
    title: 'Fixing Bed',
  },
  {
    id: '2',
    title: 'Wash My Face',
  },
  {
    id: '3',
    title: 'Doing Mouthwash',
  },
  {
    id: '4',
    title: 'Eat Brekfast',
  },
  {
    id: '5',
    title: 'Doing ToothBrush',
    
  },{
    id: '6',
    title: 'Prepare things for school',
  },
  {
    id: '7',
    title: 'Take a Bath',
  },
  {
    id: '8',
    title: 'Feed the Cat',
  },
  {
    id: '9',
    title: 'Go to School',
  },
  {
    id: '10',
    title: 'Ready for Class',
  },
];
const DATA2 = [
  {
    id: '11',
    title: 'Listen to the Lesson',
  },
  {
    id: '12',
    title: 'Analyze the Activity',
  },
  {
    id: '13',
    title: 'Answer the Activity',
  },
  {
    id: '14',
    title: 'Eat Lunch',
  },
  {
    id: '15',
    title: 'Study the Lesson Again',
    
  },
  {
    id: '16',
    title: 'Pack things',
  },
  {
    id: '17',
    title: 'Go Home',
  },
  {
    id: '318',
    title: 'Sit in the Couch',
  },
  {
    id: '19',
    title: 'Feed the Cat',
  },
  {
    id: '20',
    title: 'Wash The Dishes',
  },
];
const DATA3 = [
  {
    id: '21',
    title: 'Eat Dinner',
  },
  {
    id: '22',
    title: 'Wash My Face',
  },
  {
    id: '23',
    title: 'Doing Mouthwash',
  },
  {
    id: '24',
    title: 'Scroll on Tiktok',
  },
  {
    id: '25',
    title: 'Then Sleep',
    
  },
];

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <TouchableOpacity>
    <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  </View>
);

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
    <Text>Morning</Text>
      <FlatList
        data={DATA1}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}

      />
      <Text>Afternoon</Text>
      <FlatList
        data={DATA2}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}

      />
      <Text>Evening</Text>
      <FlatList
        data={DATA3}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}

      />
      
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#DFC57B',
    padding: 1,
    marginVertical: 5,
    marginHorizontal: 50,
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
  },
});

export default App;