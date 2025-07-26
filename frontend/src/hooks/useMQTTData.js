import { useEffect, useState } from "react";
import mqtt from "mqtt";

export default function useMQTTData(topic) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const client = mqtt.connect("wss://broker.hivemq.com:8884/mqtt");

    client.on("connect", () => {
      console.log("✅ MQTT connected");
      if (topic) {
        client.subscribe(topic, (err) => {
          if (!err) {
            console.log(`📡 Subscribed to topic: ${topic}`);
          }
        });
      }
    });

    client.on('message', (incomingTopic, message) => {
      if (incomingTopic === topic) {
        try {
          const parsed = JSON.parse(message.toString());
          console.log('Received message:', parsed); // <-- Add this line
          setData((prev) => [...prev.slice(-19), parsed]);
        } catch (err) {
          console.error('❌ Failed to parse message:', err);
        }
      }
    });

    return () => {
      if (topic) client.unsubscribe(topic);
      client.end();
    };
  }, [topic]);

  return data;
}
