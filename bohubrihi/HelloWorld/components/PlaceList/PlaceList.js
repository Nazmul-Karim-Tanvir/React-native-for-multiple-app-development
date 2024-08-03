import React from 'react'
import { FlatList } from 'react-native'
import ListItem from '../Listitem/Listitem'

const PlaceList = props => {
  return (
    <FlatList style={{
        width: "100%"
      }}
        data={props.placelist}
        renderItem={info => {
          return (
            <ListItem
              placeName={info.item.value}
              onItemPressed={() => alert(info.item.value)}
            />
          )
        }}
      />
  )
}

export default PlaceList
