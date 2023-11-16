import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


import Header from '../../components/Header';
import Item from '../../components/Item';
import Footer from '../../components/Footer';
import ProductList from '../../components/ProductList';
import { FlatList } from 'react-native-gesture-handler';



function generateListItems(arg) {
    let items = "";
    for (let i = 0; i < arg.length; i++) {
        items += `<li>${arg[i]}</li>`;
    }
    return items;
}

const HomePageScreen = ({ navigation }) => {
    return (
        <View style={styles.homepage}>
            <Header title={'Lost Items'} />
            <FlatList
                data={ProductList}
                keyExtractor={({ item, index })}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.items}>
                            <FlatList data={item.items} renderItem={({ item, index }) => {
                                return (
                                    <View style={styles.itemView}>
                                        <Image 
                                        source={{url: item.data.imageURL}} 
                                        style={styles.itemImage}
                                        />
                                        <Text>{item.data.name}</Text>
                                        <Text>{item.data.description}</Text>
                                        <Text>{item.data.status}</Text>
                                        <Text>{item.data.location}</Text>
                                        <Text>{item.data.locationFound}</Text>

                                    </View>
                                );
                            }} />
                        </View>
                    );
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    homepage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    items: {
        width: '90%',
        height: 100,
        borderRadius: 10,
        elevation: 5,
        alignSelf: 'center',
        backgroundColor: '#fff',
        marginTop: 20,
        marginBottom: 10
    },
    menu: {
        position: 'absolute',
        top: 60,
        left: 0,
        right: 0,
        backgroundColor: '#FFF',
        borderBottomWidth: 1,
        borderBottomColor: '#d1d1d1',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
    },
    menuItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#d1d1d1',
    },
    itemImage: {
        width: 50,
        height: 50,
        borderRadius: 10
    },
    itemView: {
        margin: 10,
        width: '100%',
        flexDirection:'row'
    },
});

export default HomePageScreen;
