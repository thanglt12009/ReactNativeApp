import HomeContainer from './screens/HomeContainer';

import { evaluateChildDrawerTitle } from './utility';

export default {
	DataSearch_Basic: {
		screen: HomeContainer,
		navigationOptions: evaluateChildDrawerTitle,
	},
	DataSearch_Much: {
		screen: HomeContainer,
		navigationOptions: evaluateChildDrawerTitle,
	},
};
