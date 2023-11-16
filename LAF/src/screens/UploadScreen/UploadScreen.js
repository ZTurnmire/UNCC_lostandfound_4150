import React, {useState} from 'react';
import {View,Text, Image, StyleSheet, useWindowDimensions} from 'react-native';
import Logo from '../../../assets/images/laf_logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const UploadScreen = ({navigation}) => {
    const[name, setName] = useState('');
    const[category, setCategory] = useState('');
    const[locationFound, setLocationFound] = useState('');
    const[location, setLocation] = useState('');
    const[imageURL, setImageURL] = useState('');

    return(
        <View style={styles.root}>
            <Image 
                source={Logo} 
                style={[styles.logo, {height: height * 0.3}]} 
                resizeMode="contain"  
            />

            <CustomInput 
            placeholder="Name" 
            value={name} 
            setValue={setName} 
            />
            <CustomInput 
            placeholder="Category" 
            value={category} 
            setValue={setCategory} 
            />
            <CustomInput 
            placeholder="Found Location" 
            value={locationFound} 
            setValue={setLocationFound} 
            />
            <CustomInput 
            placeholder="Location" 
            value={location} 
            setValue={setLocation} 
            />
            <CustomInput 
            placeholder="ImageURL" 
            value={imageURL} 
            setValue={setImageURL} 
            />
            <Image 
                source={imageURL} 
                style={[styles.logo, {height: height * 0.1}]} 
                resizeMode="contain"  
            />
            
            <CustomButton text="Upload Item" 
                onPress={() =>{
                <script>
                    addNewItem(name, category, locationFound, location, imageURL)
                </script>
                navigation.navigate('Home')
            }}
            />
        </View>
    )
    
};

const styles = StyleSheet.create({
    root:{
        alignItems:'center',
        padding:20,
        backgroundColor:"#005035",
        height: "100%"
    },
    logo:{
        width:500,
        maxWidth:700,
        maxHeight:400,
    },
    title:{
        fontSize:24,
        fontWeight: 'bold',
        color:'#fff',
        margin:10,
    },
    spaceStyle:{
        height: "1px",
    },
    textStyle:{
        color: "white"
    }
});

export default UploadScreen;