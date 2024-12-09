import {Text, View, StyleSheet} from 'react-native'

export default function HistoryScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>History screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        color:'#000',
    },
});