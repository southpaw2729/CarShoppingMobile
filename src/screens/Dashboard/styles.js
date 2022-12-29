import { StyleSheet } from 'react-native'


export const STYLES = StyleSheet.create({

    profileText: {
        color: '#2E2828',
        marginTop: 10,
        marginLeft: 15,
        fontSize: 24,
        fontFamily: 'Nunito-ExtraBold'
    },
    profileView: {
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 100,
        paddingLeft: 20,
        alignContent: 'center',
        alignItems: 'center'
    },
    carView: {
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 5,
        flex: 1,
        maxHeight: 200
    },
    rootView: {
        margin: 10,
        borderRadius: 20,
        flex: 1
    }

})
