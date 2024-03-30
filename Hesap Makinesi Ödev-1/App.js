import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

const Calculator = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");

  const handleOperatorPress = (op) => {
    if (input1 && !operator) {
      setOperator(op);
    }
  };

  const handleEqualsPress = () => {
    if (input1 && input2 && operator) {
      let num1 = parseFloat(input1);
      let num2 = parseFloat(input2);
      let res;
      switch (operator) {
        case "+":
          res = num1 + num2;
          break;
        case "-":
          res = num1 - num2;
          break;
        case "*":
          res = num1 * num2;
          break;
        case "/":
          res = num1 / num2;
          break;
        default:
          break;
      }
      setResult(res.toString());
    }
  };

  const clearInputs = () => {
    setInput1("");
    setInput2("");
    setOperator("");
    setResult("");
  };

  return (
    //Fonksiyonel Programlama Hesap Makinesi Ödev 1
    <View style={styles.container}>
      <Text style={styles.title}>Fonksiyonel Programlama Ödev 1</Text>
      <View style={styles.inputsContainer}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={setInput1}
          value={input1}
          placeholder="İlk Sayıyı Giriniz..."
        />
        <Text style={styles.operator}>{operator}</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={setInput2}
          value={input2}
          placeholder="İkinci Sayıyı Giriniz..."
        />
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleOperatorPress("+")}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleOperatorPress("-")}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleOperatorPress("*")}
        >
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleOperatorPress("/")}
        >
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.resultContainer}>
        <Text style={styles.result}>{result}</Text>
      </View>
      <TouchableOpacity style={styles.clearButton} onPress={clearInputs}>
        <Text style={styles.clearButtonText}>Temizle</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.equalsButton} onPress={handleEqualsPress}>
        <Text style={styles.equalsButtonText}>=</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    width: 100,
    marginRight: 10,
  },
  operator: {
    fontSize: 20,
    marginRight: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    height: 50,
    width: 50,
    backgroundColor: "#DDDDDD",
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
  },
  resultContainer: {
    marginBottom: 20,
  },
  result: {
    fontSize: 30,
  },
  clearButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  clearButtonText: {
    color: "white",
    fontSize: 18,
  },
  equalsButton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
  },
  equalsButtonText: {
    color: "white",
    fontSize: 18,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default Calculator;
