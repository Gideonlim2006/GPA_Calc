import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity, FlatList, StatusBar, Button, Alert} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";
import {datasource} from "./Data";

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginRight: 10,
    },
    icon: {
        marginLeft: 5,
    },
    moduleItem: {
        padding: 10,
        marginBottom: 15,
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#DDDDDD',
        marginTop: 5
    },
    moduleText: {
        fontSize: 16,
        color: '#333',
    },
});

const Home = ({navigation}) => {

    const calculateGPA = () => {
        const gradeValue = {
            "A": 4.0,
            "B+": 3.5,
            "B": 3.0,
            "C+": 2.5,
            "C": 2.0,
            "D+": 1.5,
            "D": 1.0,
            "F": 0.0,
        }

        let totalGradePoints = 0
        let totalCreditHours = 0

        for (let i = 0; i < datasource.length; i++) {
            const item = datasource[i];
            const gradeNumber = gradeValue[item.grade];
            const credit = parseInt(item.credits);

            totalGradePoints += gradeNumber * credit;
            totalCreditHours += credit;
        }


        const gpa = totalGradePoints / totalCreditHours;
        Alert.alert("You have a GPA of:", gpa.toFixed(2));

    }

    const renderItem = ({item, index}) => {
        return (
            <TouchableOpacity onPress={()=> {
                navigation.navigate("Edit", {index:index, key:item.key, grade:item.grade, credits:item.credits});
            }}>
                <View style={styles.moduleItem}>
                    <Text style={styles.moduleText} >module: {item.key} || Credits: {item.credits} || Grade: {item.grade}</Text>
                </View>
            </TouchableOpacity>

        );
    };

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>GPA Calculator</Text>
                <Icon name="calculator" size={20} color="black" style={styles.icon}/>
            </View>

            <View>
                <Button title="Add Module" onPress={()=>{navigation.navigate("Add")}}/>
            </View>

            <StatusBar hidden={true}/>
            <FlatList data={datasource} renderItem={renderItem}/>
            <View>
                <Button title={"Calculate GPA"} onPress={calculateGPA}/>
            </View>
        </View>
    )
}

export default Home;
