import React, { useState } from 'react'
import { Text, StyleSheet, SafeAreaView, View, ScrollView, TouchableOpacity, Image, PixelRatio } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCarPrice } from './action'
import { MASTER_STYLES } from '../../../styles';
import { CARBON_FIBER, PERFORMANCE_WHEELS, SELECT_COLOR, INCLUDED, TYPE_EXTERIOR, THIRD, AED } from './constants'
import { STYLES } from './styles'
import PriceNextView from '../../components/PriceNextView'
import ColorButtons from '../../components/ColorButtons'




const carsExterior = (jumpTo) => {

    const model = useSelector(state => state.Car.data)
    const carPrice = useSelector(state => state.CarPrice.price)


    const [price, setPrice] = useState(carPrice)

    React.useEffect(() => {

        setPrice(carPrice)


    }, [carPrice])



    const defaultExterior = model.modelColors && model.modelColors.filter(obj => obj.type == TYPE_EXTERIOR && obj.included === true)


    const [activeExteriorId, setActiveExteriorId] = useState(defaultExterior ? defaultExterior[0].modelColorId.colorId : null)
    const dispatch = useDispatch()

    const _handleNext = ((price) => {

        dispatch(fetchCarPrice(price))
        jumpTo(THIRD)
    });



    const _selectColor = ((id) => {
        setActiveExteriorId(id)
        const exterior = model.modelColors.filter(obj => obj.modelColorId.colorId == id)
        setPrice(exterior[0].price + carPrice)

    });
    return (

        <ScrollView >
            <View style={MASTER_STYLES.bg}>
                <Text style={MASTER_STYLES.instTabText}>{SELECT_COLOR}</Text>
                <View style={MASTER_STYLES.centreAlignView}>
                    {model.modelColors?.map((color) => (
                        color.modelColorId.colorId == activeExteriorId ?

                            <Image key={color.modelColorId.colorId}
                                source={{
                                    uri: color.imageUrl
                                    //cache: 'only-if-cached'
                                }}

                                style={{ width: 450, height: PixelRatio.get() === 2 ? 200 : Platform.OS === 'ios' ? 300 : 250 }}
                            /> : null
                    ))}
                </View>
                <View style={STYLES.topExtView}>
                    <View style={MASTER_STYLES.scree}>
                        {model.modelColors?.map((color) => (

                            color.modelColorId.colorId == activeExteriorId ?

                                <>
                                    <Text style={STYLES.extPrice}>{color.name}</Text>
                                    <Text style={STYLES.includedText}>{color.included ? INCLUDED : color.price.toLocaleString()}</Text>
                                </> : null
                        ))}

                    </View>

                    < View style={STYLES.colorRow} >
                        {
                            model.modelColors?.map(obj => (
                                obj.type == TYPE_EXTERIOR ?
                                    <ColorButtons key={obj.modelColorId.colorId} onPress={() => _selectColor(obj.modelColorId.colorId)} colorCode={obj.colorCode} active={obj.modelColorId.colorId === activeExteriorId ? true : false}></ColorButtons>
                                    : null
                            ))
                        }
                    </View>

                    <View style={MASTER_STYLES.horizontalSeparator} />


                    <View style={MASTER_STYLES.screen}>
                        <Text style={STYLES.extFeature}>{PERFORMANCE_WHEELS}</Text>
                        <Text style={STYLES.extFeature}>{CARBON_FIBER}</Text>
                    </View>
                </View>
                <View style={MASTER_STYLES.bottomView} >

                    <PriceNextView priceLabel={price} onPress={() => _handleNext(price)}></PriceNextView>
                </View>
            </View>
        </ScrollView >


    )
}

/**
 * Car exterior details screen
 * @param {*To go to next tab} jumpTo 
 * @returns 
 */
const Exterior = ({ jumpTo }) => (
    <SafeAreaView style={MASTER_STYLES.bgWhite} >
        {carsExterior(jumpTo)}
    </SafeAreaView>
);
export default Exterior

