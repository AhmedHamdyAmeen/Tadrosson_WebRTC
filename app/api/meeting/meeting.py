import requests
import json

API_KEY = "Tadrosoon_default_secret"
# Tadrosoon_URL = "http://localhost:3000/api/v1/meeting"
# Tadrosoon_URL = "https://p2p.Tadrosoon.com/api/v1/meeting";
# Tadrosoon_URL = "https://Tadrosoon.up.railway.app/api/v1/meeting"
Tadrosoon_URL = "https://Tadrosoon.herokuapp.com/api/v1/meeting"

headers = {
    "authorization": API_KEY,
    "Content-Type": "application/json",
}

response = requests.post(
    Tadrosoon_URL,
    headers=headers
)

print("Status code:", response.status_code)
data = json.loads(response.text)
print("meeting:", data["meeting"])
