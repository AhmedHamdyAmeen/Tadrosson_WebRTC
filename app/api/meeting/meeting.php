<?php

$API_KEY = "Tadrosoon_default_secret";
// $Tadrosoon_URL = "http://localhost:3000/api/v1/meeting";
// $Tadrosoon_URL = "https://p2p.Tadrosoon.com/api/v1/meeting";
// $Tadrosoon_URL = "https://Tadrosoon.up.railway.app/api/v1/meeting";
$Tadrosoon_URL = "https://Tadrosoon.herokuapp.com/api/v1/meeting";


$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $Tadrosoon_URL);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POST, 1);

$headers = [
    'authorization:' . $API_KEY,
    'Content-Type: application/json'
];

curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
$response = curl_exec($ch);
$httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

curl_close($ch);

echo "Status code: $httpcode \n";
$data = json_decode($response);
echo "meeting: ", $data->{'meeting'}, "\n";
