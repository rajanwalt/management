import * as React from 'react'

import {Text, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Students from './students';
import StudentInfo from './student_info';

import Meeting from './meeting';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const screenOptions = ({route}) => ({
    tabBarIcon: ({focused, color, size}) => {
        let iconName;

        if(route.name === 'Students')  {
            iconName = 'user-friends';
        }
        else if(route.name == 'Reports') {
            iconName = 'file-invoice-dollar';
        }
        else if(route.name == 'Meetings') {
            iconName = 'desktop';
        }
        else if(route.name == 'Fees') {
            iconName = 'money-check';
        }
        else if(route.name == 'Settings') {
            iconName = 'cog';
        }
        

        return <FontAwesome5 name={iconName} solid color={color} size={size}/>
    }
})

const tabBarOptions= { activeTintColor: '#0EA5E9', inactiveTintColor: '#000000' }

const headerScreenOptions = {
    headerStyle: {
        backgroundColor: '#0EA5E9',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center'
    }
}

// const StackScreen = () => {
//     return (
//         <Stack.Navigator screenOptions={headerScreenOptions}>
//             <Stack.Screen name="Students" component={Students} />
//             <Stack.Screen 
//                 name="StudentInfo" 
//                 component={StudentInfo} 
//                 options={({route}) => ({title: route.params.name})}/>
//         </Stack.Navigator>
//     )
// }

const HomeTabs = () => (
    <Tab.Navigator screenOptions= {screenOptions} tabBarOptions={tabBarOptions}>
        <Tab.Screen name="Students" component={Students} />
        <Tab.Screen name="Reports" component={Students} />
        <Tab.Screen name="Meetings" component={Meeting} />
        <Tab.Screen name="Fees" component={Students} />
        <Tab.Screen name="Settings" component={Students} />
    </Tab.Navigator>
)

const App = () => (
        <Stack.Navigator screenOptions={headerScreenOptions}>
            <Stack.Screen name="Students" component={HomeTabs} />
            <Stack.Screen 
                name="StudentInfo" 
                component={StudentInfo} 
                options={({route}) => ({title: route.params.name})}/>
        </Stack.Navigator>
)


const MyStack = () => {
    return (
        // <NavigationContainer>
        //     <Tab.Navigator 
        //         screenOptions= {screenOptions}
        //         tabBarOptions={{
        //             activeTintColor: '#0EA5E9',
        //             inactiveTintColor: '#000000'
        //           }}>
        //         <Tab.Screen 
        //             name="STUDENTS"
        //             component={StackScreen}>
        //         </Tab.Screen>
        //     </Tab.Navigator>
        // </NavigationContainer>

        <NavigationContainer>
            {App()}
        </NavigationContainer>
        
    )
}



export default MyStack;