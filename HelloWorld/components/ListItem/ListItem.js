import React from 'react';
import {View, Text ,StyleSheet} from 'react-native';

const ListItem = props => {
    return(
        <View style={styles.ListItem}>
            <Text>
                {props.placeName}
            </Text>
        </View>
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