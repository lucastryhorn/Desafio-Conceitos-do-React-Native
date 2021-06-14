import React from "react";
import {
  FlatList,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from "react-native";

interface DarkMode {
  isDarkMode: boolean;
}

function FlatListHeaderComponent({ isDarkMode }: DarkMode) {
  const styles = stylesFn(isDarkMode);

  return (
    <View>
      <Text style={styles.header}>Minhas tasks</Text>
    </View>
  );
}

interface MyTasksListProps extends DarkMode {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
}

export function MyTasksList({
  tasks,
  onLongPress,
  onPress,
  isDarkMode,
}: MyTasksListProps) {
  const styles = stylesFn(isDarkMode);

  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            onLongPress={() => onLongPress(item.id)}
            onPress={() => onPress(item.id)}
            style={item.done ? styles.taskButtonDone : styles.taskButton}
            //TODO - use onPress, onLongPress and style props
          >
            <View
              testID={`marker-${index}`}
              style={item.done ? styles.taskMarkerDone : styles.taskMarker}
              //TODO - use style prop
            />
            <Text
              style={item.done ? styles.taskTextDone : styles.taskText}
              //TODO - use style prop
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        );
      }}
      ListHeaderComponent={<FlatListHeaderComponent isDarkMode={isDarkMode} />}
      ListHeaderComponentStyle={{
        marginBottom: 20,
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32,
      }}
    />
  );
}

const stylesFn = (isDarkMode: boolean) =>
  StyleSheet.create({
    header: {
      color: isDarkMode ? "#FF79C6" : "#3D3D4D",
      fontSize: 24,
      fontFamily: "Poppins-SemiBold",
    },
    taskButton: {
      flex: 1,
      paddingHorizontal: 10,
      paddingVertical: 12,
      marginBottom: 4,
      borderRadius: 4,
      flexDirection: "row",
      alignItems: "center",
    },
    taskMarker: {
      height: 16,
      width: 16,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: "#3D3D4D",
      marginRight: 10,
    },
    taskText: {
      color: isDarkMode ? "#FF79C6" : "#3D3D4D",
    },
    taskButtonDone: {
      flex: 1,
      paddingHorizontal: 10,
      paddingVertical: 12,
      marginBottom: 4,
      borderRadius: 4,
      backgroundColor: isDarkMode ? "#FF79C610" : "rgba(25, 61, 223, 0.1)",
      flexDirection: "row",
      alignItems: "center",
    },
    taskMarkerDone: {
      height: 16,
      width: 16,
      borderRadius: 8,
      backgroundColor: isDarkMode ? "#FF79C6" : "#273FAD",
      marginRight: 10,
    },
    taskTextDone: {
      color: "#A09CB1",
      textDecorationLine: "line-through",
    },
  });
