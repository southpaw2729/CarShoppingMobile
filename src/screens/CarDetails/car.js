import React, { useState } from 'react'
import { Text, StyleSheet, SafeAreaView, View, ScrollView, TouchableOpacity, Image, PixelRatio } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCarPrice } from './action'
import { SELECT_YOUR_CAR, SECOND } from './constants'
import { MASTER_STYLES } from '../../../styles'
import { STYLES } from './styles'
import { THREE_DOT_FIVE_SEC, ZERO_TO_SIXTY_MPH, ONE_FIFTY_MPH, TOP_SPEED, DESCRIPTION } from './constants'
import OptionsButton from '../../components/OptionsButton'
import PriceNextView from '../../components/PriceNextView'


const featureView = (first, second) => (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={STYLES.black24}>{first}</Text>
        <Text style={STYLES.black10}>{second}</Text>
    </View >
)


const carDetails = (jumpTo) => {

    const carInfo = useSelector(state => state.Car.data)
    const defaultFeature = carInfo.modelFeatures ? carInfo.modelFeatures[0].modelFeatureId.featureId : null
    const [activeFeatureId, setActiveFeatureId] = useState(defaultFeature ? defaultFeature : null)
    const [price, setPrice] = useState(carInfo.modelFeatures[0].price)
    const dispatch = useDispatch()

    const _handleNext = ((price) => {

        dispatch(fetchCarPrice(price))
        jumpTo(SECOND)
    });



    const _selectOption = ((id) => {
        setActiveFeatureId(id)
        const feature = carInfo.modelFeatures.filter(obj => obj.modelFeatureId.featureId == id)
        setPrice(feature[0].price)

    });


    return (
        <ScrollView >
            <View style={MASTER_STYLES.bg}>
                <Text style={MASTER_STYLES.instTabText}>{SELECT_YOUR_CAR}</Text>

                <View style={MASTER_STYLES.centreAlignView}>
                    <Image
                        source={{ uri: carInfo.imageLink }}
                        style={{ width: 450, height: PixelRatio.get() === 2 ? 200 : Platform.OS === 'ios' ? 270 : 235 }}
                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', flex: 1 }}>
                    {carInfo.modelFeatures?.map((feature) => {

                        return (

                            <OptionsButton key={feature.modelFeatureId.featureId} itemAlign={'center'} onPress={() => _selectOption(feature.modelFeatureId.featureId)} featureLabel={feature.name} priceLabel={feature.price.toLocaleString()} active={feature.modelFeatureId.featureId === activeFeatureId ? true : false}></OptionsButton>
                        )
                    })}
                </View>
                <View style={MASTER_STYLES.bottomView} >

                    <View style={STYLES.featureView}>

                        {featureView(THREE_DOT_FIVE_SEC, ZERO_TO_SIXTY_MPH)}
                        <View style={MASTER_STYLES.verticalSeparator} />

                        {featureView(ONE_FIFTY_MPH, TOP_SPEED)}

                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={STYLES.featureDesc}>
                            {DESCRIPTION}
                        </Text>
                    </View>

                    <PriceNextView onPress={() => _handleNext(price)} priceLabel={price} ></PriceNextView>

                </View>
            </View>
        </ScrollView>


    )
}

/**
 * Car details screen
 * @param {* To go to next tab} jumpTo 
 * @returns 
 */
const Car = ({ jumpTo }) => (
    <SafeAreaView style={MASTER_STYLES.bgWhite} >
        {carDetails(jumpTo)}
    </SafeAreaView>
);
export default Car
