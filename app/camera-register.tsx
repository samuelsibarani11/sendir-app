import React, { useState } from 'react';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { manipulateAsync, SaveFormat } from 'expo-image-manipulator';

// Definisikan tipe foto secara manual
interface PhotoInfo {
    uri: string;
    width: number;
    height: number;
}

export default function CameraRegisterScreen() {
    const [facing, setFacing] = useState<CameraType>('back');
    const [permission, requestPermission] = useCameraPermissions();
    const [capturedImage, setCapturedImage] = useState<string | null>(null);
    const cameraRef = React.useRef<CameraView>(null);

    if (!permission) {
        // Camera permissions are still loading.
        return <View />;
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet.
        return (
            <View style={styles.container}>
                <Text style={styles.message}>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="Grant Permission" />
            </View>
        );
    }

    const toggleCameraFacing = () => {
        setFacing(current => (current === 'back' ? 'front' : 'back'));
    };

    const takePicture = async () => {
        try {
            // Gunakan tipe PhotoInfo yang kita definisikan
            const photo: PhotoInfo | undefined = await cameraRef.current?.takePictureAsync();
            
            if (photo) {
                // Optional: Compress and resize the image
                const manipResult = await manipulateAsync(
                    photo.uri,
                    [{ resize: { width: 800 } }], // Resize to max width of 800px
                    { compress: 0.7, format: SaveFormat.JPEG } // Compress to 70% quality
                );

                setCapturedImage(manipResult.uri);
            }
        } catch (error) {
            console.error('Error taking picture:', error);
        }
    };

    const retakePicture = () => {
        setCapturedImage(null);
    };

    if (capturedImage) {
        return (
            <View style={styles.container}>
                <Image 
                    source={{ uri: capturedImage }} 
                    style={styles.capturedImage} 
                    resizeMode="contain" 
                />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={retakePicture}>
                        <Text style={styles.text}>Retake Photo</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <CameraView 
                style={styles.camera} 
                facing={facing} 
                ref={cameraRef}
            >
                <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                        style={[styles.button, styles.flipButton]} 
                        onPress={toggleCameraFacing}
                    >
                        <Text style={styles.text}>Flip Camera</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[styles.button, styles.captureButton]} 
                        onPress={takePicture}
                    >
                        <Text style={styles.text}>Capture</Text>
                    </TouchableOpacity>
                </View>
            </CameraView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    message: {
        textAlign: 'center',
        paddingBottom: 10,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    button: {
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
    },
    flipButton: {
        backgroundColor: 'rgba(255,255,255,0.2)',
    },
    captureButton: {
        backgroundColor: 'rgba(255,0,0,0.5)',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    capturedImage: {
        flex: 1,
        width: '100%',
    },
});