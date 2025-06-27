import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function IMC() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState('');
  const [status, setStatus] = useState('');

  const calcularIMC = () => {
    const p = parseFloat(peso);
    const a = parseFloat(altura);

    if (p > 0 && a > 0) {
      const resultado = p / (a * a);
      setImc(resultado.toFixed(2));
      
      if (resultado < 18.5) {
        setStatus('Abaixo do peso');
      } else if (resultado >= 18.5 && resultado < 25) {
        setStatus('Peso ideal');
      } else {
        setStatus('Sobrepeso');
      }
    }
  };
    const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#85c1e9",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    width: "25%",
    height: 40,
    borderColor: "#4f46e5", // Borda roxa
    borderWidth: 1.5,
    borderRadius: 10,
    paddingHorizontal: 12,
    fontSize: 16,
    backgroundColor: "#fff",
    color: "#222",
    marginBottom: 16,
    elevation: 2 
  },
});

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Peso:</Text>
            <TextInput value={peso} placeholder="Digite seu peso em kg" style={styles.input} onChangeText={setPeso}/>
            <Text style={styles.titulo}>Altura:</Text>
            <TextInput value={altura} placeholder="Digite sua em altura em metros" style={styles.input} onChangeText={setAltura}/>
            <Button title="Calcular" onPress={calcularIMC}/>
            {imc && <Text style={styles.titulo}>IMC: {imc}</Text>}
            
        </View>
    );
}