import time
import json
import random
import ssl
import paho.mqtt.client as mqtt

# HiveMQ Cloud settings
# MQTT configuration
mqtt_username = "faryal1907"
mqtt_password = "Family9366"
mqtt_server = "0a4da080df9b471da9fe248f9965857e.s1.eu.hivemq.cloud"
mqtt_port = 8883
deviceId = "1"
publish_topic = "energy/current"

# Set up the MQTT client
client = mqtt.Client()

# Configure username and password
client.username_pw_set(mqtt_username, mqtt_password)

# Enable TLS for secure connection
client.tls_set()  # Default certificates, can be customized if needed

# Connect to the broker
client.connect(mqtt_server, mqtt_port)

# Generate random current data
def generate_current_data():
    return {
        "timestamp": int(time.time() * 1000),
        "phaseA": round(random.uniform(5, 15), 2),
        "phaseB": round(random.uniform(5, 15), 2),
        "phaseC": round(random.uniform(5, 15), 2),
    }

# Callback when connected
def on_connect(client, userdata, flags, reason_code, properties=None):
    if reason_code == 0:
        print("✅ Connected to HiveMQ")
    else:
        print(f"❌ Failed to connect. Code: {reason_code}")

# Create and configure MQTT client
client = mqtt.Client(callback_api_version=mqtt.CallbackAPIVersion.VERSION2)
client.on_connect = on_connect
client.username_pw_set(USERNAME, PASSWORD)
client.tls_set_context(ssl.create_default_context())  # Required for HiveMQ Cloud TLS

# Connect to broker
client.connect(BROKER, PORT)
client.loop_start()

# Publish data continuously
try:
    while True:
        data = generate_current_data()
        result = client.publish(TOPIC, json.dumps(data))
        status = result.rc
        if status == mqtt.MQTT_ERR_SUCCESS:
            print("📤 Data published:", data)
        else:
            print(f"⚠️ Failed to publish message. Status code: {status}")
        time.sleep(2)

except KeyboardInterrupt:
    print("\n⏹️ Stopping publisher...")
    client.loop_stop()
    client.disconnect()
