import { useState } from "react";
import { View, StyleSheet, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, SafeAreaView } from "react-native";
import InStyles from "../components/input/Instyles";
import Lista from "../components/Lista/lista";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [visible, setVisible] = useState(false);

  function Abrir() {
    setVisible(true);
  }

  function fechar() {
    setVisible(false);
    Keyboard.dismiss();
  }

  function handleAddTask(task) {
    if (task.trim()) {
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: Date.now().toString(), text: task },
      ]);
    }
  }

  return (
    <SafeAreaView style={{flex:1}}>
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <TouchableWithoutFeedback onPress={fechar}>
        <View style={styles.container}>
          {/* Overlay aparece quando visible é true */}
          {visible && <View style={styles.overlay} />}

          {/* Lista de tarefas */}
          <Lista tasks={tasks} fechar={fechar} />

          {/* Input */}
          <InStyles handleAddTask={handleAddTask} fechar={fechar} Abrir={Abrir} setVisible={setVisible} visible={visible} />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fundo escuro com transparência
    zIndex: 10, // Garante que fica acima do FlatList
  },
});