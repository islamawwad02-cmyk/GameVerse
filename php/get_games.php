<?php

header("Content-Type: application/json");

include "db.php";

$sql = "SELECT id, name, genre, platform, description, image, link FROM games";

$result = $conn->query($sql);

$games = [];

while ($row = $result->fetch_assoc()) {
    $games[] = $row;
}

echo json_encode($games);

$conn->close();

?>