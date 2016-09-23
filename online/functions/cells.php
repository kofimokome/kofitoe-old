<?php
require_once('../includes/header.php');
header("Cache-Control: no-cache");
header("Pragma: no-cache");
$id = $_SESSION['sess_id'];
$table = $_SESSION['table'];
$A0 = $_COOKIE['A0'];
$A1 = $_COOKIE['A1'];
$A2 = $_COOKIE['A2'];
$A3 = $_COOKIE['A3'];
$A4 = $_COOKIE['A4'];
$A5 = $_COOKIE['A5'];
$A6 = $_COOKIE['A6'];
$A7 = $_COOKIE['A7'];
$A8 = $_COOKIE['A8'];
$change = $_COOKIE['change_player'];
$player = $_COOKIE['player'];


if ($change == 0) {
    $query = "update sessions set player={$player} where id={$id}";
    $result = mysqli_query($con, $query);
    if (!$result) {
        die('A Problem Occured');
    }
}


if ($A0 == 'a') {
    $query = "update {$table} set col_1='e' where row=1";
    $result = mysqli_query($con, $query);
    if (!$result) {
        die('A Problem Occured');
    }
}
if ($A1 == 'a') {
    $query = "update {$table} set col_2='e' where row=1";
    $result = mysqli_query($con, $query);
    if (!$result) {
        die('A Problem Occured');
    }
}
if ($A2 == 'a') {
    $query = "update {$table} set col_3='e' where row=1";
    $result = mysqli_query($con, $query);
    if (!$result) {
        die('A Problem Occured');
    }
}
if ($A3 == 'a') {
    $query = "update {$table} set col_1='e' where row=2";
    $result = mysqli_query($con, $query);
    if (!$result) {
        die('A Problem Occured');
    }
}
if ($A4 == 'a') {
    $query = "update {$table} set col_2='e' where row=2";
    $result = mysqli_query($con, $query);
    if (!$result) {
        die('A Problem Occured');
    }
}
if ($A5 == 'a') {
    $query = "update {$table} set col_3='e' where row=2";
    $result = mysqli_query($con, $query);
    if (!$result) {
        die('A Problem Occured');
    }
}
if ($A6 == 'a') {
    $query = "update {$table} set col_1='e' where row=3";
    $result = mysqli_query($con, $query);
    if (!$result) {
        die('A Problem Occured');
    }
}
if ($A7 == 'a') {
    $query = "update {$table} set col_2='e' where row=3";
    $result = mysqli_query($con, $query);
    if (!$result) {
        die('A Problem Occured');
    }
}
if ($A8 == 'a') {
    $query = "update {$table} set col_3='e' where row=3";
    $result = mysqli_query($con, $query);
    if (!$result) {
        die('A Problem Occured');
    }
}


?>