<?php
require_once('../includes/header.php');
$message=$_POST['message'];
$user=$_COOKIE['current_player'];
$session=$_SESSION['sess_id'];
$query="insert into chats values(null,{$session},{$user},\"{$message}\")";
$result=mysqli_query($con, $query);
if(!$result){
    echo "connection failed".mysqli_error($con);
    die();
}
header('Location: ../');
