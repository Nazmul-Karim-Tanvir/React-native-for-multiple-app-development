import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native';

const ListItem = props => {
    return (
        <TouchableOpacity  onLongPress={props.onItemPressed}>
            <View style={styles.ListItem}>
                <Text>
                    {props.placeName}
                </Text>
            </View>
        </TouchableOpacity>

        // <Pressable onPress={props.onItemPressed}>
        //     <View style={styles.ListItem}>
        //         <Text>
        //             {props.placeName}
        //         </Text>
        //     </View>
        // </Pressable>
    )
}
const styles = StyleSheet.create({
    ListItem: {
        width: '100%',
        padding: '10px',
        backgroundColor: '#eee',
        color: 'white',
        fontSize: '20px',
        textAlign: 'center',
        margin: '10px',
    }
});

export default ListItem;