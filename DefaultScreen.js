import React from 'react';
import {
	Image,
	StatusBar,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
    Platform,
    Button,
} from 'react-native';
import { Ionicons as Icon } from '@expo/vector-icons';

const LOGO_URL = 'https://i.imgur.com/BbYaucd.png';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: StatusBar.currentHeight,
		backgroundColor: '#FFF',
	},
	innerContainer: { flex: 1, alignItems: 'center', justifyContent: 'center' },
	header: { padding: 15, paddingTop: Platform.OS === 'ios' ? 13 : 7 },
});

_submit = () => {	
	
	this.props.navigation.navigate('DrawerToggle');
  };

export default class DefaultScreen extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<StatusBar barStyle="dark-content" />
				<View style={styles.header}>
					<TouchableOpacity
						onPress={() => {
							this.props.navigation.navigate('DrawerToggle');
						}}
					>
						<Icon name="md-menu" size={30} />
					</TouchableOpacity>
				</View>

				<View
					style={{
						flex: 1,
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Image
						source={{
							uri: LOGO_URL,
							width: 70,
							height: 70,
						}}
					/>
				</View>
				<View
					style={{
						flex: 1,
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						paddingBottom: 50,
					}}
				>
					<Text style={{ fontSize: 40, paddingBottom: 3 }}>🎮</Text>

					<Text style={{ fontSize: 17, paddingBottom: 50 }}>
						for ReactiveSearch components
					</Text>
					<View style={{ alignContent: 'center', justifyContent: 'center' }}>
					<Button onPress={this._submit} style={{ backgroundColor: '#4d70ff' }} title="Lets ROLL"  accessibilityLabel="Button" />
						{/* <Button
							style={{ backgroundColor: '#4d70ff' }}
							onPress={() => {
								this.props.navigation.navigate('DrawerToggle');
							}}
						>
							<Text style={{ paddingHorizontal: 12, color: '#FFF' }}>
								{"LET'S ROLL! 🎲"}
							</Text>
						</Button> */}
					</View>
				</View>
			</View>
		);
	}
}
