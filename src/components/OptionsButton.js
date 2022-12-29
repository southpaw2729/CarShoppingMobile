import { Text, StyleSheet, View, TouchableOpacity, PixelRatio } from 'react-native'


const OptionsButton = ({ onPress, itemAlign, featureLabel, priceLabel, active }) =>
(
    <TouchableOpacity style={{ flex: 1, alignItems: itemAlign }} onPress={onPress}>
        <Text style={active ? styles.activeFeature : styles.inActiveFeature}>{featureLabel}</Text>
        <Text style={active ? styles.activePrice : styles.inActivePrice}>{priceLabel != 'Included' ? 'AED' : ''} {priceLabel.toLocaleString()}</Text>
    </TouchableOpacity >
)



export default OptionsButton

const styles = StyleSheet.create({


    activeFeature: {
        color: '#000000',
        fontSize: 16,
        fontFamily: 'Nunito-Regular'
    },
    activePrice: {
        color: '#D01000',
        fontSize: 14,
        fontFamily: 'Nunito-Regular'
    },
    inActiveFeature: {
        color: '#A4B0BC',
        fontSize: 16,
        fontFamily: 'Nunito-Regular'
    },
    inActivePrice: {
        color: '#A4B0BC',
        fontSize: 14,
        fontFamily: 'Nunito-Regular'
    },

})