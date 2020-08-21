import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer'
import {Drawer, Switch, TouchableRipple, Text} from 'react-native-paper'
import usePreference from '../hooks/usePreferences';

export default function DrawerContent(props) {
	// console.log(props)
	const {navigation} = props;
	const [active, setActive]= useState('home')
	const {theme, toogleTheme} = usePreference()
	
	const onChangeScreen = (Screen)=> {
		// console.log(Screen )
		setActive(Screen)
		navigation.navigate(Screen)
	}
	return (
		<DrawerContentScrollView>
			<Drawer.Section>
				<Drawer.Item 
				label="inicio"
				active={active === 'home'}
				onPress={()=> onChangeScreen('home')}
				/>
				<Drawer.Item
				label="películas populares"
					active={active === 'popular'}
				onPress={()=> onChangeScreen('popular')}
				/>
				<Drawer.Item
					label="nuevas películas"
					active={active === 'news'}
					onPress={()=> onChangeScreen('news')}
				/>
			</Drawer.Section>
			<Drawer.Section title='Opciones'>
				<TouchableRipple>
					<View style={styles.preference}>
						<Text>Tema Oscuro</Text>
						<Switch value={theme === 'dark'} onValueChange ={toogleTheme}/>
					</View>
				</TouchableRipple>
			</Drawer.Section>
		</DrawerContentScrollView>
	)
}

const styles = StyleSheet.create({
	preference: {
		flexDirection:'row',
		justifyContent: 'space-between',
		alignItems:'center',
		paddingVertical:12,
		paddingHorizontal:16,
	}	
})
