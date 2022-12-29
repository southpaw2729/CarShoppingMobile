import React from 'react'
import { Animated, Text, SafeAreaView, View, ScrollView, TouchableOpacity, useWindowDimensions, Platform } from 'react-native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import Car from './car'
import Interior from './interior'
import Exterior from './exterior'
import Autopilot from './autopilot'
import { FIRST, SECOND, THIRD, FOURTH, CAR, INTERIOR, EXTERIOR, AUTOPILOT } from './constants'
import { STYLES } from './styles'

/**
 * Tab View container to start car purchase journey
 * @param {*} navigation 
 * @returns 
 */
const CarDetails = ({ navigation }) => {

    const layout = useWindowDimensions()

    const [index, setIndex] = React.useState(0);

    const [routes] = React.useState([
        { key: FIRST, title: CAR },
        { key: SECOND, title: EXTERIOR },
        { key: THIRD, title: INTERIOR },
        { key: FOURTH, title: AUTOPILOT },
    ]);

    const renderScene = SceneMap({
        first: Car,
        second: Exterior,
        third: Interior,
        fourth: Autopilot,
    });


    const _renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: '#D01000' }}
            style={STYLES.tabBarStyle}
            activeColor='#000000'
            inactiveColor='#A4B0BC'
            renderLabel={({ route, focused, color }) => (
                <Text style={{ color, fontFamily: 'Nunito-SemiBold', fontSize: Platform.OS === 'ios' ? 12 : 11 }}>
                    {route.title}
                </Text>
            )}

            onTabPress={({ preventDefault }) => {
                preventDefault();
            }}

        />
    );

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            swipeEnabled={false}
            renderTabBar={_renderTabBar}
        />
    );
}


export default CarDetails
