import React, { useState } from 'react'
import { Text, StyleSheet, SafeAreaView, View, ScrollView, TouchableOpacity, Image, PixelRatio, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCarPrice } from './action'
import { SELECT_AUTOPILOT, AUTOPILOT_DESC } from './constants'
import OptionsButton from '../../components/OptionsButton'
import PriceNextView from '../../components/PriceNextView'
import { MASTER_STYLES } from '../../../styles';
import { STYLES } from './styles'


const carsAutopilot = () => {

    const navigation = useNavigation()
    const carInfo = useSelector(state => state.Car.data)
    const carPrice = useSelector(state => state.CarPrice.price)
    const carModel = carInfo.name

    const defaultFeature = carInfo.autoPilotDetails ? carInfo.autoPilotDetails[0].modelAutoPilotId.autoPilotId : null

    const [price, setPrice] = useState(carPrice + carInfo.autoPilotDetails[0].price)
    React.useEffect(() => {

        setPrice(carPrice + carInfo.autoPilotDetails[0].price)


    }, [carPrice])

    const [activeFeatureId, setActiveFeatureId] = useState(defaultFeature ? defaultFeature : null)
    const dispatch = useDispatch()


    const _handleNext = ((price) => {

        dispatch(fetchCarPrice(price, carModel))
        navigation.navigate('Summary')
    });

    const _selectFeature = ((id) => {
        setActiveFeatureId(id)
        const feature = carInfo.autoPilotDetails.filter(obj => obj.modelAutoPilotId.autoPilotId == id)
        setPrice(feature[0].price + carPrice)

    });

    return (
        < ScrollView >
            <View style={MASTER_STYLES.bg}>
                <View >
                    <Image
                        source={require('../../assets/autopilot.png')}
                        style={{ width: 400, height: PixelRatio.get() === 2 ? 300 : Platform.OS === 'ios' ? 400 : 350 }}
                    />
                </View>
                <View style={MASTER_STYLES.bottomPanel} >
                    <View style={{ flex: 1, margin: 30 }}>
                        <Text style={STYLES.intText}>{SELECT_AUTOPILOT}</Text>
                        <View style={{ flexDirection: 'row' }}>

                            {carInfo.autoPilotDetails?.map((feature) => {

                                return (

                                    <OptionsButton key={feature.modelAutoPilotId.autoPilotId} itemAlign={'center'} onPress={() => _selectFeature(feature.modelAutoPilotId.autoPilotId)} featureLabel={feature.name} priceLabel={feature.price.toLocaleString()} active={feature.modelAutoPilotId.autoPilotId === activeFeatureId ? true : false}></OptionsButton>
                                )
                            })}
                        </View>

                        <View>
                            <Text style={STYLES.autoDesc}>
                                {AUTOPILOT_DESC}
                            </Text>
                        </View>
                        <PriceNextView priceLabel={price} onPress={() => _handleNext(price)}></PriceNextView>
                    </View>
                </View>
            </View>
        </ScrollView >)


}

/**
 * Autopilot features screen.
 * @returns 
 */
const Autopilot = () => (
    <SafeAreaView style={MASTER_STYLES.bgWhite} >
        {carsAutopilot()}
    </SafeAreaView>
);
export default Autopilot