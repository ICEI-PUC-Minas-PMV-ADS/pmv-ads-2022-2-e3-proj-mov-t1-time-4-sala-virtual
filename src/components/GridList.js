import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';

const GridList = props => {
    const {id, data, numColumns, ItemSeparatorComponent} = props;
    const key = id ? {key: id + '-' + numColumns} : null;
    const renderItem = ({item, index}) => {
        let separator = null;
        if (ItemSeparatorComponent) {
            separator =
				(index + 1) % numColumns !== 0 && index < data.length - 1
				    ? ItemSeparatorComponent()
				    : null;
        }
        return (
            <View style={styles.itemContainer}>
                {props.renderItem({item, index})}
                {separator}
            </View>
        );
    };
    return <FlatList {...props} renderItem={renderItem} {...key} />;
};

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
    },
});

export default GridList;
