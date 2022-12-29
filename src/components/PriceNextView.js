import { Text, StyleSheet, View, TouchableOpacity, PixelRatio } from 'react-native'
import { MASTER_STYLES } from '../../styles'


const PriceNextView = ({ onPress, priceLabel }) =>
(
    <View style={styles.rootView}>
        <Text style={styles.priceLabel}>AED {priceLabel ? priceLabel.toLocaleString() : ""}</Text>

        <TouchableOpacity style={styles.nextBtn} onPress={onPress}>
            <Text style={styles.nextLabel}> Next</Text>
        </TouchableOpacity>

    </View>
)



export default PriceNextView

const styles = StyleSheet.create({

    nextBtn: {
        width: 150,
        height: 50,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#D01000',
        borderRadius: 25,
        margin: 20

    },
    nextLabel: {
        color: 'black',
        fontSize: PixelRatio.get() <= 2 ? 14 : 16,
        fontFamily: 'Nunito-Regular'

    },
    priceLabel: {
        color: 'black',
        fontSize: PixelRatio.get() <= 2 ? 18 : 20,
        fontFamily: 'Nunito-Regular',
        margin: 20
    },
    rootView: {
        flexDirection: 'row',
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})