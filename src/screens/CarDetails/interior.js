import React, { useState } from 'react'
import { Text, StyleSheet, SafeAreaView, View, ScrollView, TouchableOpacity, Image, PixelRatio, ImageBackground } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCarPrice } from './action'
import { MASTER_STYLES } from '../../../styles'
import { STYLES } from './styles'
import { SELECT_INTERIOR, INCLUDED, TYPE_INTERIOR, FOURTH } from './constants'
import OptionsButton from '../../components/OptionsButton'
import ColorButtons from '../../components/ColorButtons'
import PriceNextView from '../../components/PriceNextView'


const carInterior = (jumpTo) => {
    const model = useSelector(state => state.Car.data)
    const carPrice = useSelector(state => state.CarPrice.price)
    const defaultInterior = model.modelColors && model.modelColors.filter(obj => obj.type == TYPE_INTERIOR && obj.included === false)

    const [price, setPrice] = useState(carPrice + defaultInterior[0].price)

    React.useEffect(() => {

        setPrice(carPrice + defaultInterior[0].price)


    }, [carPrice])

    const [activeInteriorId, setActiveInteriorId] = useState(defaultInterior ? defaultInterior[0].modelColorId.colorId : null)
    const dispatch = useDispatch()


    const _handleNext = ((price) => {

        dispatch(fetchCarPrice(price))
        jumpTo(FOURTH)
    });

    const _selectColor = ((id) => {
        setActiveInteriorId(id)
        const interior = model.modelColors.filter(obj => obj.modelColorId.colorId == id)
        setPrice(interior[0].price + carPrice)

    });

    return (
        <ScrollView >
            <View style={MASTER_STYLES.bg}>

                <Image
                    source={require('../../assets/interior.png')}
                    style={{ width: 400, height: PixelRatio.get() === 2 ? 300 : Platform.OS === 'ios' ? 400 : 375 }}>
                </Image>

                <View style={MASTER_STYLES.bottomPanel} >
                    <View style={{ flex: 1, margin: 20 }}>
                        <Text style={STYLES.intText}>{SELECT_INTERIOR}</Text>

                        <View style={{ flexDirection: 'row', flex: 1 }}>

                            {model.modelColors?.map((color) => (

                                color.type == TYPE_INTERIOR ?

                                    <OptionsButton key={color.modelColorId.colorId} itemAlign={'center'} onPress={() => _selectColor(color.modelColorId.colorId)} featureLabel={color.name} priceLabel={color.included ? INCLUDED : color.price} active={color.modelColorId.colorId === activeInteriorId ? true : false} ></OptionsButton>
                                    : null
                            ))}
                        </View>


                        <View style={STYLES.colorIntView}>
                            {model.modelColors?.map(obj => (
                                obj.type == TYPE_INTERIOR ?
                                    <ColorButtons marginVal={0} key={obj.id} onPress={() => _selectColor(obj.modelColorId.colorId)} colorCode={obj.colorCode} active={obj.modelColorId.colorId === activeInteriorId ? true : false}></ColorButtons>
                                    : null
                            ))}
                        </View>


                        <PriceNextView priceLabel={price} onPress={() => _handleNext(price)}></PriceNextView>
                    </View>

                </View>
            </View>
        </ScrollView >


    )
}

/**
 * Car interior details screen
 * @param {To go to next tab} jumpTo 
 * @returns 
 */
const Interior = ({ jumpTo }) => (
    <SafeAreaView style={MASTER_STYLES.bgWhite} >
        {carInterior(jumpTo)}
    </SafeAreaView>
);
export default Interior