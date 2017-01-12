<?php
require_once('../includes/header.php');
header("Cache-Control: no-cache");
header("Pragma: no-cache");
$id=$_SESSION['sess_id'];
$table=$_SESSION['table'];
$move = $_COOKIE['cell'];
$player = $_COOKIE['player'];
$next=$player;
$smove=$_COOKIE['moves'];


if($smove>=6){
    $smove=7;
}

if ($player == 1) {
    $player = 2;
} else {
    $player = 1;
}

if ($move == 0) {
    $query = "update {$table} set col_1={$player} where row=1";
}
if ($move == 1) {
    $query = "update {$table} set col_2={$player} where row=1";
}
if ($move == 2) {
    $query = "update {$table} set col_3={$player} where row=1";
}
if ($move == 3) {
    $query = "update {$table} set col_1={$player} where row=2";
}
if ($move == 4) {
    $query = "update {$table} set col_2={$player} where row=2";
}
if ($move == 5) {
    $query = "update {$table} set col_3={$player} where row=2";
}
if ($move == 6) {
    $query = "update {$table} set col_1={$player} where row=3";
}
if ($move == 7) {
    $query = "update {$table} set col_2={$player} where row=3";
}
if ($move == 8) {
    $query = "update {$table} set col_3={$player} where row=3";
}

$result=mysqli_query($con, $query);
if(!$result){
    die('A Problem Occured');
}

$query="update sessions set player={$next} where id={$id}";
$result=mysqli_query($con, $query);
if(!$result){
    die('A Problem Occured');
}

$query="update sessions set moves={$smove} where id={$id}";
$result=mysqli_query($con, $query);
if(!$result){
    die('A Problem Occured');
}


?>
