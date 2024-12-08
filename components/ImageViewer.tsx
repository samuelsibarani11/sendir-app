import { StyleSheet } from "react-native";
import { Image, type ImageSource } from "expo-image";

type Props = {
    imgSoruce: ImageSource;
}

export default function ImageViewer({ imgSoruce }: Props) {
    return <Image source={imgSoruce} style={styles.image} />
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    }
})