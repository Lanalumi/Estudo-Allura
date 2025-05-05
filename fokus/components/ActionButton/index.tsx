import { Pressable, Text, StyleSheet } from "react-native";

type ActionButtonProps = {
  active: boolean;
  display: string;
  onPress: () => void;
};

export const ActionButton = ({
  active,
  onPress,
  display,
}: ActionButtonProps) => {
  return (
    <Pressable
      style={active ? styles.activeActionButton : null}
      onPress={onPress}
    >
      <Text style={styles.tabText}>{display}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  activeActionButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#144480",
  },
  tabText: {
    color: "#fff",
    fontSize: 12.5,
    fontWeight: 700,
  },
});
