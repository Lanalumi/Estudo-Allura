import { useRef, useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { FokusButton } from "@/components/FokusButton";
import { ActionButton } from "@/components/ActionButton";
import { Timer } from "@/components/Timer";
import { IconPause, IconPlay } from "@/components/Icons";

const pomodoro = [
  {
    id: "focus",
    initialValue: 25,
    image: require("../assets/images/pomodoro.png"),
    display: "Foco",
  },
  {
    id: "short",
    initialValue: 5,
    image: require("../assets/images/short.png"),
    display: "Pausa curta",
  },
  {
    id: "long",
    initialValue: 15,
    image: require("../assets/images/long.png"),
    display: "Pausa longa",
  },
];

type TimerType = {
  id: string;
  initialValue: number;
  image: any;
  display: string;
};

export default function Index() {
  const [activeTimer, setActiveTimer] = useState(pomodoro[0]);
  const [timerRunning, setTimerRunning] = useState(false);
  const [seconds, setSeconds] = useState(activeTimer.initialValue);
  const timerRef = useRef<number>(0);

  const clearTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = 0;
    setTimerRunning(false);
  };

  const toggleTab = (newTimerType: TimerType) => {
    clearTimer();
    setActiveTimer(newTimerType);
    setSeconds(newTimerType.initialValue);
  };

  const toggleTimer = () => {
    if (timerRef.current) {
      clearTimer();
      return;
    }
    const id = setInterval(() => {
      setSeconds((oldState) => {
        if (oldState <= 0) {
          clearTimer();
          return 0;
        }

        return oldState - 1;
      });
    }, 1000);

    setTimerRunning(true);
    timerRef.current = id;
  };

  return (
    <View style={styles.container}>
      <Image source={activeTimer.image} />

      <View style={styles.actions}>
        <View style={styles.tabs}>
          {pomodoro.map((tab) => (
            <ActionButton
              display={tab.display}
              active={activeTimer.id === tab.id}
              onPress={() => toggleTab(tab)}
              key={tab.id}
            />
          ))}
        </View>

        <Timer totalSeconds={seconds} />

        <FokusButton
          onPress={toggleTimer}
          title={timerRunning ? "Pausar" : "Começar"}
          icon={timerRunning ? <IconPause /> : <IconPlay />}
        />
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Projeto fictício e sem fins comerciais.
        </Text>

        <Text style={styles.footerText}>Desenvolvido por Alura.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021123",
    gap: 40,
  },
  tabs: {
    flexDirection: "row",
    gap: 8,
    justifyContent: "space-around",
    alignItems: "center",
  },
  actions: {
    padding: 24,
    backgroundColor: "#14448080",
    width: "80%",
    borderRadius: 32,
    gap: 32,
    borderWidth: 2,
    borderColor: "#144480",
  },
  footer: {
    width: "80%",
  },
  footerText: {
    textAlign: "center",
    color: "#98A0A8",
    fontSize: 12.5,
  },
});
