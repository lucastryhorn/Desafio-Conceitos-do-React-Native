import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import { Header } from "../components/Header";
import { MyTasksList } from "../components/MyTasksList";
import { TodoInput } from "../components/TodoInput";

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  function handleDarkMode() {
    setIsDarkMode((oldState) => !oldState);
  }

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task if it's not empty
    if (newTaskTitle) {
      const data = {
        id: new Date().getTime(),
        title: newTaskTitle,
        done: false,
      };

      setTasks((oldState) => [...oldState, data]);
    }
  }

  function handleMarkTaskAsDone(id: number) {
    //TODO - mark task as done if exists
    const newData = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done,
        };
      }
      return task;
    });

    setTasks(newData);
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    const newData = tasks.filter((task) => task.id !== id);

    setTasks(newData);
  }

  return (
    <View style={[styles.container, isDarkMode && styles.containerDarkMode]}>
      <Header isDarkMode={isDarkMode} onPress={handleDarkMode} />

      <TodoInput addTask={handleAddTask} isDarkMode={isDarkMode} />

      <MyTasksList
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
        isDarkMode={isDarkMode}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  containerDarkMode: {
    backgroundColor: "#1F1F1F",
  },
});
