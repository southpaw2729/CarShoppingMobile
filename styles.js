import { StyleSheet, PixelRatio } from 'react-native'


export const MASTER_STYLES = StyleSheet.create({

    screen: {
        flex: 1
    },
    instText: {
        color: '#A4B0BC',
        marginTop: 10,
        marginLeft: 15,
        fontSize: PixelRatio.get() <= 2 ? 13 : 15,
        fontFamily: 'Nunito-SemiBold'
    },
    instTabText: {
        color: '#A4B0BC',
        marginTop: 10,
        marginLeft: 20,
        fontSize: PixelRatio.get() <= 2 ? 14 : 16,
        fontFamily: 'Nunito-Regular'
    },
    bg: {
        backgroundColor: '#E9E9E9', flex: 1
    },
    bgWhite: {
        backgroundColor: 'white', flex: 1
    },
    centreAlignView: {
        alignSelf: 'center'
    },
    alignJustifyFlex: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    verticalSeparator: {
        height: 50,
        width: 1,
        marginRight: 65,
        marginLeft: 65,
        marginTop: 20,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.25,
        borderColor: '#A4B0BC'
    },
    horizontalSeparator: {
        height: 1,
        width: "80%",
        margin: 10,
        borderWidth: 0.25,
        borderColor: '#A4B0BC'
    },
    bottomView: {
        backgroundColor: 'white',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,


    },
    bottomPanel: {
        backgroundColor: 'white',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'

    },
    alignCenter: {
        alignItems: 'center'
    }



})
