import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Text, SafeAreaView, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import PriceButton from '../../components/PriceButton'
import { EXPLORE_TESLA_CARS, HELLO } from './constants'
import { fetchCars } from './action'
import { fetchCarDetails } from '../CarDetails/action'
import { MASTER_STYLES } from '../../../styles'
import { STYLES } from './styles'
import ProfilePicture from '../../assets/profile.svg'
import Arrow from '../../assets/arrow.svg'

/**
 * Dashboard and home screen to preview tesla cars.
 * @param {*} navigation 
 * @returns 
 */
const DashBoard = ({ navigation }) => {

    const loading = useSelector(state => state.Cars.loading)
    const error = useSelector(state => state.Cars.error)
    const data = useSelector(state => state.Cars.data)
    const carData = useSelector(state => state.Car.data)

    const dispatch = useDispatch()

    React.useEffect(() => {

        dispatch(fetchCars())

    }, [])


    React.useEffect(() => {

        if (carData) {
            navigation.navigate('CarDetails')
        }

    }, [carData])

    const _handleModelSelected = ((id) => {
        dispatch(fetchCarDetails(id));
    });



    const carsView = data ? data.models?.map(carInfo => (
        <View key={carInfo.id} style={[{ backgroundColor: carInfo.baseColorCode }, STYLES.rootView]} >
            <View style={STYLES.carView}>
                <Image
                    source={{ uri: carInfo.imageLink }}
                    style={{ width: 400, height: 150 }}
                />
            </View>

            <PriceButton onPress={() => _handleModelSelected(carInfo.id)} modelLabel={carInfo.name} priceLabel={carInfo.basePrice.toLocaleString()}></PriceButton>
        </View >
    )) : null;

    return (
        <SafeAreaView style={MASTER_STYLES.screen}>
            <View style={STYLES.profileView} >
                <ProfilePicture height={75} width={75}></ProfilePicture>
                <Text style={STYLES.profileText}>{HELLO}</Text>
            </View>

            <ScrollView style={MASTER_STYLES.bg} >
                <Text style={MASTER_STYLES.instText}>{EXPLORE_TESLA_CARS}</Text>
                {carsView}
            </ScrollView>
        </SafeAreaView>
    )
}


export default DashBoard