import { StyleSheet } from "react-native";
import { Image, type ImageSource } from "expo-image";

type Props = {
    imgSoruce: ImageSource;
    selectedImage?: string;
}

export default function ImageViewer({ imgSoruce, selectedImage }: Props) {
    const ImageSource = selectedImage ? { uri: selectedImage } : imgSoruce;
    return <Image source={ImageSource} style={styles.image} />
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    }
})