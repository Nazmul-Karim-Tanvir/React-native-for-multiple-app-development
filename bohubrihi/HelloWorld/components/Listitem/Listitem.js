import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const ListItem = props => {
    return (
        <View >
            <Text style={styles.ListItem}>
                {props.placeName}
            </Text>
        </View>
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