import React, {useState} from 'react';
import {Button, Text, View, TextInput, StatusBar, StyleSheet} from 'react-native';
import {datasource} from "./Data";
import RNPickerSelect from 'react-native-picker-select';

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        paddingHorizontal: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginRight: 10,
    },
    moduleItem: {
        padding: 10,
        marginBottom: 15,
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#DDDDDD',
        marginTop: 5,
    },
});

const Add = ({navigation}) => {

    const [grade, setGrade] = useState('');
    const [credits, setCredits] = useState(0);
    const [module, setModule] = useState('');

    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.headerText}>Module:</Text>
                <TextInput placeholder="Enter Module Name"  placeholderTextColor="#888" onChangeText={(text) => setModule(text)} style={styles.moduleItem}/>
            </View>

            <View>
                <Text style={styles.headerText}>Credits:</Text>
                <TextInput placeholder="Enter Module Credits" placeholderTextColor="#888" onChangeText={(text) => setCredits(text)} style={styles.moduleItem}/>
            </View>

            <View style={styles.moduleItem}>
                <RNPickerSelect  placeholder={{label: "Select Grade"}} onValueChange={(value) => setGrade(value)}
                items={[
                    {label: "A", value: "A"},
                    {label: "B+", value: "B+"},
                    {label: "B", value: "B"},
                    {label: "C+", value: "C+"},
                    {label: "C", value: "C"},
                    {label: "D+", value: "D+"},
                    {label: "D", value: "D"},
                    {label: "F", value: "F"},
                ]}/>
            </View >
            <View style={{ flexDirection: "row", justifyContent: "space-evenly", padding: 10 }}>
                <View style={{ flex: 1, marginHorizontal: 5 }}>
                    <Button
                        title="Submit"
                        onPress={() => {
                            let item = { key: module, credits: credits, grade: grade };
                            datasource.push(item);
                            navigation.navigate("Home");
                        }}
                    />
                </View>
                <View style={{ flex: 1, marginHorizontal: 5 }}>
                    <Button title="BACK" onPress={() => navigation.navigate("Home")}/>
                </View>
                <StatusBar hidden={true}/>
            </View>
        </View>
    )
}

export default Add;
