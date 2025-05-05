import { Text, StyleSheet } from "react-native";

type TimerProps = {
  totalSeconds: number;
};
export const Timer = ({ totalSeconds }: TimerProps) => {
  const date = new Date(totalSeconds * 1000);
  const dateOptions = {
    minute: "2-digit",
    second: "2-digit",
  } as const;

  return (
    <Text style={styles.timer}>
      {date.toLocaleTimeString("pt-br", dateOptions)}
    </Text>
  );
};

const styles = StyleSheet.create({
  timer: {
    fontSize: 54,
    color: "#fff",
    fontWeight: 600,
    textAlign: "center",
  },
});
