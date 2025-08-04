import { useEffect, useState } from "react";
import mqtt from "mqtt";

export default function useMQTTData(topic) {
  const [data, setData] = useState([]);
  const [connectionStatus, setConnectionStatus] = useState('connecting');

  useEffect(() => {
    console.log(`🔌 Attempting to connect to MQTT broker for topic: ${topic}`);
    
    // Use the same HiveMQ Cloud broker as the backend
    const client = mqtt.connect("wss://0a4da080df9b471da9fe248f9965857e.s1.eu.hivemq.cloud:8884/mqtt", {
      username: "faryal1907",
      password: "Family9366",
      clientId: `frontend_${Math.random().toString(16).slice(3)}`
    });

    client.on("connect", () => {
      console.log("✅ MQTT connected successfully");
      setConnectionStatus('connected');
      if (topic) {
        client.subscribe(topic, (err) => {
          if (!err) {
            console.log(`📡 Successfully subscribed to topic: ${topic}`);
          } else {
            console.error(`❌ Failed to subscribe to ${topic}:`, err);
            setConnectionStatus('subscription_failed');
          }
        });
      }
    });

    client.on('message', (incomingTopic, message) => {
      console.log(`📨 Message received on topic: ${incomingTopic}`);
      if (incomingTopic === topic) {
        try {
          const parsed = JSON.parse(message.toString());
          console.log('📨 Parsed message:', parsed);
          setData((prev) => {
            const newData = [...prev.slice(-19), parsed];
            console.log(`📊 Updated data array length: ${newData.length}`);
            return newData;
          });
        } catch (err) {
          console.error('❌ Failed to parse message:', err);
        }
      }
    });

    client.on('error', (err) => {
      console.error('❌ MQTT error:', err);
      setConnectionStatus('error');
    });

    client.on('close', () => {
      console.log('🔌 MQTT connection closed');
      setConnectionStatus('disconnected');
    });

    client.on('reconnect', () => {
      console.log('🔄 MQTT reconnecting...');
      setConnectionStatus('reconnecting');
    });

    return () => {
      console.log(`🔌 Cleaning up MQTT connection for topic: ${topic}`);
      if (topic) client.unsubscribe(topic);
      client.end();
    };
  }, [topic]);

  return data;
}
