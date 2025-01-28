import { useEffect } from "react";

export const useKeyPress = (events: Record<string, VoidFunction>[]) => {
  const keyPressHandler = (e: KeyboardEvent) => {
    events.forEach((event) => {
      Object.keys(event).forEach((key) => {
        if (e.key === key) {
          event[key]();
        }
      });
    });
  };
  useEffect(() => {
    document.addEventListener("keydown", keyPressHandler);
    return () => {
      document.removeEventListener("keydown", keyPressHandler);
    };
  }, []);
};
