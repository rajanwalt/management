import * as React from "react";

import { View, Button, Text, StyleSheet } from 'react-native';

export const direction = {
    Bottom : "buttom",
    Top : "top"
}

const CircularBtn = (props) => {
    const defaultPosition = props.direction ? props.direction : direction.Bottom
    
    return (
        <View style={styles.container}>
            <Text style={styles.button}>
                +
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    button : {
        color : '#ffffff',
        backgroundColor: '#0EA5E9',
        height:60,
        width: 60,
        borderRadius: 30,
        fontSize: 44,
        fontWeight: "bold",
        textAlign: "center",
        // justifyContent:"flex-end"
    }
})

export default CircularBtn;
