import { StackActions, NavigationActions } from 'react-navigation';
import { navigationDispatchService } from '../navigators/AppNavigator';


/**
 * Function to reset whole stack
 *
 */
export  function resetStack(route){
    const resetAction = StackActions.reset({
        key: null,
        index: 0,
        actions: [NavigationActions.navigate({
            routeName: route
        })],
    });
    navigationDispatchService(resetAction);
}

// Function to navigate to screen
export function navigateToScreen(route) {
    const navigationAction = NavigationActions.navigate({
        routeName: route
    });
    navigationDispatchService(navigationAction);
}