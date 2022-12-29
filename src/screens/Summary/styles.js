import { StyleSheet, PixelRatio } from 'react-native'


export const STYLES = StyleSheet.create({

    modelText: {
        margin: 5,
        fontSize: 28,
        color: 'white',
        alignSelf: 'center',
        fontFamily: 'Nunito-Regular'
    }
    ,
    priceText: {
        margin: 5,
        fontSize: 24,
        fontFamily: 'Nunito-Regular',
        color: 'white',
        alignSelf: 'center'
    },
    labelText: {
        color: '#A4B0BC',
        margin: 25,
        fontSize: 18,
        fontFamily: 'Nunito-Regular',
        fontWeight: '400',
        alignSelf: 'center'
    },
    priceBtn: {
        width: 250,
        height: 50,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#D01000',
        borderRadius: 25,
        backgroundColor: 'black'

    },
    payText: {
        fontSize: 24,
        fontFamily: 'Nunito-Regular',
        color: 'white',

    },
    bottomView: {
        backgroundColor: 'black',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        flex: 2,
        marginTop: 20
    },
    image: {
        flex: 3
    },
    top: {
        top: 50,
        left: 0,
        right: 0,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
