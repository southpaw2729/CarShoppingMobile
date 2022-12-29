import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'


const ColorButtons = ({ onPress, colorCode, active }) =>
(
    <TouchableOpacity onPress={onPress} style={[styles.colorButton, { backgroundColor: colorCode, borderColor: active ? '#D01000' : null, borderWidth: active ? 2 : 0 }]}>
    </TouchableOpacity>
)



export default ColorButtons

const styles = StyleSheet.create({

    colorButton: {
        width: 40,
        height: 40,
        borderRadius: 40,
        margin: 10


    }
})