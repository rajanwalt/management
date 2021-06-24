import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

import ListComponent from './../shared/list';
import PageLoader from './../shared/page_loader';
import CircularBtn, { direction } from './../shared/circular_button';

import Batch from '../models/student-list.model'

var MockData= require('./../assets/app.mock.json');

const Students = ({navigation}) => {

    const studentList = MockData['studentList'];
    const formatted = Batch.fromAPIArrayData(studentList);

    const [pageLoader, setPageLoader] = useState(false)

    goToStudentInfo = (data) => {
        navigation.navigate('StudentInfo', data)
    }

    return (
        <SafeAreaView>
            
            <View style={styles.container}>
                <ListComponent listData={formatted} onClick={goToStudentInfo}/>
                { pageLoader && <PageLoader /> }
            </View>
            
            {/* <View style={styles.circularButton}>
                <CircularBtn position={direction.Bottom} />
            </View> */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    circularButton : {
       position: "absolute"
    }
})

export default Students;
