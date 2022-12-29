import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import Arrow from '../assets/arrow.svg'

const PriceButton = ({ onPress, modelLabel, priceLabel }) =>
(
    <TouchableOpacity style={{ ...styles.button }} onPress={onPress}>
        <View style={styles.labelView}>
            <Text style={styles.modelText}> Tesla {modelLabel}</Text>
            <Text style={{ color: 'white', padding: 0 }}>
                <Text style={styles.currencyText}>AED </Text>
                <Text style={styles.priceText}> {priceLabel}</Text>
                <Text style={styles.currencyText}> onwards</Text>
            </Text>
        </View>
        <View style={{ padding: 10 }}>
            <Arrow></Arrow>
        </View>

    </TouchableOpacity>
)



export default PriceButton

const styles = StyleSheet.create({

    labelView: {
        padding: 10,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'

    },
    currencyText: {
        fontSize: 8,
        fontFamily: 'Nunito-Medium'

    },
    modelText: {
        color: '#FFFFFF',
        fontSize: 8,
        fontFamily: 'Nunito-ExtraBold'

    },
    priceText: {
        fontSize: 12,
        fontFamily: 'Nunito-ExtraBold'

    },
    button: {
        backgroundColor: '#0C0C0C',
        marginBottom: 15,
        alignSelf: 'flex-end',
        marginRight: 10,
        borderRadius: 25,
        width: 180,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center'
    }
})