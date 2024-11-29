import React, {useState} from 'react';
import {Button, Text, View, TextInput, Alert, StyleSheet} from 'react-native';
import {datasource} from "./Data";
import RNPickerSelect from "react-native-picker-select";

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

const Edit = ({navigation, route}) => {
    const [grade, setGrade] = useState(route.params.grade);
    const [credits, setCredits] = useState(route.params.credits);
    const [module, setModule] = useState(route.params.key);

    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.headerText}>Module:</Text>
                <TextInput value={module} onChangeText={(text) => setModule(text)} style={styles.moduleItem}/>
            </View>

            <View>
                <Text style={styles.headerText}>Credit:</Text>
                <TextInput value={credits} onChangeText={(text) => setCredits(text)} style={styles.moduleItem}/>
            </View>

            <View style={styles.moduleItem}>
                <RNPickerSelect value={grade} placeholder={{label: "Select Grade"}} onValueChange={(value) => setGrade(value)}
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
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-evenly", padding: 10 }}>
                <View style={{ flex: 1, marginHorizontal: 5 }}>
                    <Button
                        title="SAVE"
                        onPress={() => {
                            datasource[route.params.index] = {
                                key: module,
                                credits: credits,
                                grade: grade,
                            }
                            navigation.navigate("Home");
                        }}
                    />
                </View>

                <View style={{ flex: 1, marginHorizontal: 5 }}>
                    <Button
                        title="DELETE"
                        onPress={() => {
                            Alert.alert("Are you sure?",'',
                                [{text: 'Yes', onPress: ()=> {
                                        datasource.splice(route.params.index, 1);
                                        navigation.navigate("Home");
                                    }},
                                    {text: 'No'}])
                        }}
                    />
                </View>
            </View>


            <View style={{marginHorizontal: 15 }}>
                <Button title="Back" onPress={()=>{navigation.navigate("Home")}}/>
            </View>
        </View>
    )
}



export default Edit
