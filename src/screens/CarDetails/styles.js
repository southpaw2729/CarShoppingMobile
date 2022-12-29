import { StyleSheet, PixelRatio } from 'react-native'


export const STYLES = StyleSheet.create({

    tabBarStyle: {
        backgroundColor: 'white', padding: 0
    },
    featureView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'


    },
    featureDesc: {
        flex: 1,
        color: '#A4B0BC',
        textAlign: 'justify',
        paddingRight: 30,
        paddingLeft: 30,
        fontSize: PixelRatio.get() <= 2 ? 12 : 14,
        fontFamily: 'Nunito-Regular'
    },
    includedText: {
        color: '#D01000',
        marginLeft: 10,
        fontSize: PixelRatio.get() <= 2 ? 14 : 18,
        fontFamily: 'Nunito-Regular'
    },
    extPrice: {
        color: '#000000',
        marginLeft: 10,
        fontSize: PixelRatio.get() <= 2 ? 16 : 20,
        fontFamily: 'Nunito-Regular'
    },
    black24: {
        color: '#000000',
        fontSize: PixelRatio.get() <= 2 ? 16 : 20,
        fontFamily: 'Nunito-Regular'
    },
    black10: {
        color: '#000000',
        fontSize: PixelRatio.get() <= 2 ? 8 : 10,
        fontFamily: 'Nunito-SemiBold'
    },
    extFeature: {
        color: '#000000',
        marginLeft: 10,
        fontSize: PixelRatio.get() <= 2 ? 12 : 13,
        fontFamily: 'Nunito-Regular'

    },
    colorIntView: {
        flexDirection: 'row',
        flex: 1,
        marginLeft: -10
    },
    colorRow: {
        flex: 1,
        flexDirection: 'row', marginRight: 10
    },
    topExtView: {
        margin: 20,
        flex: 1
    },
    intText: {
        color: '#A4B0BC',
        marginTop: 10,
        marginBottom: 10,
        fontSize: 14,
        fontFamily: 'Nunito-Regular'
    },
    autoDesc: {
        color: '#A4B0BC',
        textAlign: 'justify',
        marginTop: 10,
        fontSize: 14,
        fontFamily: 'Nunito-Regular'
    }

})
