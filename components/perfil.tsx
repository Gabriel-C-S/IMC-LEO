import React, { useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import { View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function Perfil() {
    const [nome, setNome] = useState('');
    const [imagem, setImagem] = useState<string | null>(null);

    const escolherImagem = async () => {
        const resultado = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!resultado.canceled && resultado.assets.length > 0) {
            setImagem(resultado.assets[0].uri);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.imagePicker} onPress={escolherImagem}>
                {imagem ? (
                    <Image source={{ uri: imagem }} style={styles.avatar} />
                ) : (
                    <View style={styles.avatarPlaceholder}>
                        <Text style={styles.avatarPlaceholderText}>+</Text>
                    </View>
                )}
            </TouchableOpacity>
            <Text style={styles.label}>Nome:</Text>
            <TextInput
                value={nome}
                onChangeText={setNome}
                style={styles.input}
                placeholder="Digite seu nome"
                placeholderTextColor="#aaa"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#85c1e9",
        padding: 24,
    },
    imagePicker: {
        marginBottom: 24,
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 2,
        borderColor: "#4f46e5",
    },
    avatarPlaceholder: {
        width: 120,
        height: 120,
        borderRadius: 20,
        backgroundColor: "#e0e7ff",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: "#4f46e5",
    },
    avatarPlaceholderText: {
        fontSize: 48,
        color: "#4f46e5",
    },
    label: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 8,
    },
    input: {
        width: "%",
        height: 40,
        borderColor: "#bbb",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 12,
        fontSize: 16,
        backgroundColor: "#fff",
        marginBottom: 16,
    },
    button: {
        backgroundColor: "#4f46e5",
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 8,
        elevation: 2,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
        letterSpacing: 1,
    },
});
