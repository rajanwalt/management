import * as React from 'react';
import { Component } from 'react';
import { Text, View, SafeAreaView, StyleSheet, SectionList, TouchableOpacity } from 'react-native';


const Item = ({item}) => (
    <View style={styles.item}>
        <Text style={styles.title}>{item.name}</Text>
        <View style={styles.subTitle}>
            <Text>Class Attended: { item.attendance} </Text>
            { item.fees>=0 ? <Text style={styles.success}>No Due</Text> : <Text style={styles.alert}>Fees Due: { Math.abs(item.fees)} </Text> }
        </View>
    </View>
    
    
)


const List = (prop) => {
    const listData = prop.listData;

    const renderItem = ({item}) => (
        <TouchableOpacity  onPress={() => prop.onClick(item)}>
            <Item item={item} />
        </TouchableOpacity>
        
    )

    return (
        <SafeAreaView>
            <SectionList
                sections={listData}
                keyExtractor= {(item, index) => item+index}
                renderItem={renderItem} 
                renderSectionHeader={({ section: { group }}) => (
                    <Text style={styles.header}>{group} Batch</Text>
                )}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    item : {
        borderBottomColor: '#E5E5E5',
        borderBottomWidth: 1,
        paddingVertical: 8,
        marginHorizontal:3
    },
    header: {
        fontWeight: "bold",
        textTransform: "capitalize",
        fontSize: 18,
        marginTop: 8
    },
    title : {
        fontWeight: "bold",
        textTransform: "capitalize"
    },
    subTitle : {
        flex: 2,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    success: {
        color: "#22C55E"
    },
    alert: {
        color: "#F80505"
    }
})

export default List;