export function generateRandomCurrent() {
  return {
    timestamp: new Date().toISOString(),
    phaseA: (Math.random() * 20).toFixed(2),
    phaseB: (Math.random() * 20).toFixed(2),
    phaseC: (Math.random() * 20).toFixed(2),
  };
}
