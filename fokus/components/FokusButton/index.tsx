import { Pressable, Text, StyleSheet } from "react-native";

type FokusButtonProps = {
  onPress: () => void;
  title: string;
  icon?: React.ReactNode;
};

export const FokusButton = ({ onPress, title, icon }: FokusButtonProps) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      {icon}
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#B872FF",
    borderRadius: 32,
    padding: 8,
    gap: 12,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  buttonText: {
    color: "#021123",
    fontSize: 18,
    fontWeight: 600,
    textAlign: "center",
  },
});
