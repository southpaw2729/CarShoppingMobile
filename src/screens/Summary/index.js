import { Text, StyleSheet, SafeAreaView, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCarPrice } from '../CarDetails/action'
import { SUMMARY, PAY, YOUR, AED } from './constants'
import RakBank from '../../assets/rakBankWhite.svg'
import { MASTER_STYLES } from '../../../styles'
import { STYLES } from './styles'

const carSummary = () => {

    const navigation = useNavigation()
    const carPrice = useSelector(state => state.CarPrice.price)
    const carModel = useSelector(state => state.CarPrice.model)
    const dispatch = useDispatch()
    const _handleNavigation = (() => {

        dispatch(fetchCarPrice(null))
        navigation.popToTop()
    });

    return (
        <View style={MASTER_STYLES.screen}>


            <View style={STYLES.image}>
                <Image
                    source={require('../../assets/summary.png')}
                    style={{ width: 400, height: 600 }}
                />
                <View style={STYLES.top}>
                    <RakBank width={180}></RakBank>

                </View>
            </View>
            <View style={STYLES.bottomView} >
                <Text style={STYLES.labelText}>{SUMMARY}</Text>
                <Text style={STYLES.modelText}>{YOUR} {carModel}</Text>
                <Text style={STYLES.priceText}>{AED} {carPrice ? carPrice.toLocaleString() : ''}</Text>


                <View style={MASTER_STYLES.alignJustifyFlex}>
                    <TouchableOpacity style={STYLES.priceBtn} onPress={() => _handleNavigation()}>
                        <Text style={STYLES.payText}>{PAY}</Text>
                    </TouchableOpacity>
                </View>


            </View>
        </View >


    )
}

/**
 * Summary screen for payments
 * @returns 
 */
const Summary = () => (
    <View style={{ backgroundColor: 'white', flex: 1 }} >
        {carSummary()}
    </View>
);
export default Summary

