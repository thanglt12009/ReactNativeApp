import React from 'react';
import { createStackNavigator,createAppContainer,createDrawerNavigator } from 'react-navigation';
import DefaultScreen from './screens/HomeContainer';
import MainDrawer from './MainDrawer';
import screenMapping from './screenMapping';

class NavigationDrawerStructure extends Component {
	//Structure for the navigatin Drawer
	toggleDrawer = () => {
	  //Props to open/close the drawer
	  this.props.navigationProps.toggleDrawer();    
	};
	render() {
	  return (
		<View style={{ flexDirection: 'row' }}>
		  <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
			{/*Donute Button Image */}
			<Image
			  source={sideIcon}
			  style={{ width: 25, height: 25, marginLeft: 5 }}
			/>
		  </TouchableOpacity>
		</View>
	  );
	}
  }


const Home_StackNavigator = createStackNavigator({
	//All the screen from the Screen3 will be indexed here
	Third: {
	  screen: DefaultScreen,
	  navigationOptions: ({ navigation }) => ({
		title: 'Home',
		headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
		headerStyle: {
		  backgroundColor: '#00b5ec', 
		},
		headerTintColor: '#fff',
	  }),
	},
  });
  

// RootDrawer containing drawers for each componentss
const RootDrawer = createDrawerNavigator(
	{
		Home2: {
			screen: Home_StackNavigator,
			navigationOptions: {
				drawerLabel: 'Home',
				drawerIcon: ({ tintColor }) => (
				  <Image
				   source={{uri: 'https://img.icons8.com/ultraviolet/40/000000/home.png'}}
					resizeMode="contain"
					style={{ width: 20, height: 20,}}
				  />
				)
			  },
		},
		// Register screens of all options of child components
		...screenMapping,
	},
	{
		// Custom rendering component of drawer panel
		contentComponent: MainDrawer,
	}
);

export default createAppContainer(RootDrawer);
