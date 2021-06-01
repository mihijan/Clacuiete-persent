<?php

$all = intval($_POST['all']);
$wins = intval($_POST['wins']);
// $res = $all / 100 * $wins;
$res =   $wins / $all * 100  ;


echo json_encode("<p>$res%</p>");
