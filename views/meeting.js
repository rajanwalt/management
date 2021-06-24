import React from 'react';

import {View, SafeAreaView, Text, StyleSheet, Image, Button } from 'react-native';

const Meeting = ({navigation}) => {
    const downloadApp = () => {

    }

    return (
        <SafeAreaView>
            <View style={styles.gPlayContainer}>
                <Image style={styles.gPlayImg} source={require('./../assets/images/gPlay.png')} />
            </View>
            <View style={styles.btnContainer}>
                <Button 
                    style={styles.downloadBtn}
                    onPress={downloadApp}
                    title="Download MS Teams"
                    color="#22C55E"
                    accessibilityLabel="Download the MS Teams app from play store"/>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    gPlayContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    gPlayImg: {
        width: 100,
        height: 100
    },
    btnContainer: {
        padding: 20
    }
})

export default Meeting;