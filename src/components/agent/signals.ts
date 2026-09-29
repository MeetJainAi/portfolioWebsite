type Listener = () => void;

export const scrollRef = { current: 0 };
export const pointerRef = { x: 0.5, y: 0.5 };
export const speechRef = { current: "Standing by. Ask about orin, terraform, or certs." };

const listeners = new Set<Listener>();

export function setSpeech(line: string) {
  speechRef.current = line;
  listeners.forEach((listener) => listener());
}

export function subscribeSpeech(listener: Listener) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}
