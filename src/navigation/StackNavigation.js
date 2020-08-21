import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { IconButton } from 'react-native-paper';
import Home from '../screens/Home';
import Movie from '../screens/Movie';
import Popular from '../screens/Popular';
import News from '../screens/News';
import Search from '../screens/Search'
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();

export default function StackNavigation(props){
	// console.log(props)
	const {navigation}= props;
	const buttonLeft = (Screen)=>{
		switch(Screen){
			case 'search':
				return(
					< IconButton icon="arrow-left" onPress={() => navigation.goBack()} />
				);	
			default:
				return(
					<IconButton icon="menu" onPress={() => navigation.openDrawer()} />
				)
		}
	};
	const buttonRight = ()=>{
		return(
			<IconButton 
			icon='magnify'
			onPress={()=> navigation.navigate('search')}
			/>


		)
	}
	return (
		<Stack.Navigator>
			<Stack.Screen
			name="home"
			component={Home}
			options={{title:'TheMovieApp', headerLeft: ()=> buttonLeft('home'), headerRight: ()=> buttonRight()}}
			/>
			<Stack.Screen
				name="movie"
				component={Movie}
				options={{ title: '', headerLeft: () => buttonLeft('movie'), headerRight: () => buttonRight() }}
			/>
			<Stack.Screen
				name="news"
				component={News}
				options={{ title: 'Novedades de cartelera', headerLeft: () => buttonLeft('news'), headerRight: () => buttonRight() }}
			/>
			<Stack.Screen
				name="popular"
				component={Popular}
				options={{ title: 'Más populares', headerLeft: () => buttonLeft('popular'), headerRight: () => buttonRight() }}
			/>
			<Stack.Screen
				name="search"
				component={Search}
				options={{ title: 'Buscador', headerLeft: () => buttonLeft('search')}}
			/>
		</Stack.Navigator>
	)
}