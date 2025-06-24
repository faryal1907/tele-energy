import { useEffect, useState } from 'react';
import mqtt from 'mqtt';

export default function useMQTTData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const BROKER = 'wss://0a4da080df9b471da9fe248f9965857e.s1.eu.hivemq.cloud:8884/mqtt';
    const TOPIC = 'energy/data';

    const options = {
      clientId: `mqttjs_${Math.random().toString(16).substr(2, 8)}`,
      username: 'faryal1907',
      password: 'Family9366',
      clean: true,
      connectTimeout: 4000,
      reconnectPeriod: 4000,
    };

    const client = mqtt.connect(BROKER, options);

    client.on('connect', () => {
      console.log('✅ MQTT connected');
      client.subscribe(TOPIC, (err) => {
        if (err) {
          console.error('❌ Subscription error:', err);
        } else {
          console.log(`📡 Subscribed to topic: ${TOPIC}`);
        }
      });
    });

    client.on('error', (err) => {
      console.error('❌ MQTT connection error:', err);
      client.end(); // optional: may trigger reconnect loop if reconnectPeriod > 0
    });

    client.on('message', (topic, message) => {
      try {
        const parsed = JSON.parse(message.toString());
        setData((prev) => [...prev.slice(-19), parsed]); // keep last 20 entries
      } catch (err) {
        console.error('❌ Failed to parse message:', err);
      }
    });

    return () => {
      if (client.connected) {
        client.end(true, () => console.log('🔌 Disconnected from MQTT'));
      }
    };
  }, []);

  return data;
}
