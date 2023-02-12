#!/bin/bash

API_KEY="Tadrosoon_default_secret"
# Tadrosoon_URL="http://localhost:3000/api/v1/meeting"
# Tadrosoon_URL="https://p2p.Tadrosoon.com/api/v1/meeting"
# Tadrosoon_URL="https://Tadrosoon.up.railway.app/api/v1/meeting"
Tadrosoon_URL="https://Tadrosoon.herokuapp.com/api/v1/meeting"

curl $Tadrosoon_URL \
    --header "authorization: $API_KEY" \
    --header "Content-Type: application/json" \
    --request POST