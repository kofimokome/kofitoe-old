<?php
require_once('../includes/header.php');
$name=$_SESSION['table'];
$id=$_SESSION['sess_id'];
$query = "update {$name} set col_1='e',col_2='e',col_3='e'";
$result = mysqli_query($con, $query);
if (!$result) {
    echo 'connection failed' . mysqli_error($con);
    die();
}
$query="update sessions set moves=0,player=1 where id={$id}";
$result = mysqli_query($con, $query);
if (!$result) {
    echo 'connection failed' . mysqli_error($con);
    die();
}

header('Location: /Tic_Tac_Toe/online/');
?>
