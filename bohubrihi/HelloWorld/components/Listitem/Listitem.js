import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, TouchableHighlight, TouchableOpacity, Pressable } from 'react-native';

const ListItem = props => {
    return (
        <TouchableOpacity onPress={props.onItemPressed}>
            <View style={styles.ListItem} >
                <Text >
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
    );
}

const styles = StyleSheet.create({
    ListItem: {
        width: '100%',
        padding: 10,
        backgroundColor: '#eee',
        margin: 5
    },
});

export default ListItem;