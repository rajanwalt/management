import React from 'react';

import { View, SafeAreaView, Text, TextInput, StyleSheet } from 'react-native'

const FormInput = () => {
    
    let [isFocused, setIsFocused] = React.useState(false);

    const onFocusHandler = () => {
        setIsFocused(true);
    }

    const onBlurHandler = () => {
        setIsFocused(false)
    }
    
    return (
        <View style={styles.inputContainer}>
                <Text>Student Info </Text>
                <TextInput style={styles.input} onFocus={onFocusHandler} onBlur={onBlurHandler}/>
        </View>
    )
}

const StudentInfo = ({route, navigation}) => {
    const student = route.params;

    console.log(student);
    
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <FormInput />   
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal:15
    },
    inputContainer: {
        marginVertical: 10
    },
    input: {
        borderBottomColor: '#1E293B',
        borderBottomWidth: 1,
        fontSize: 16,
        padding: 0,
        color: '#000'
    },
    lable: {
        color: '#334155',
        fontSize: 15,
        fontWeight:'600'
    }
})

export default StudentInfo;