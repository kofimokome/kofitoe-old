<?php
require_once('../includes/header.php');
$message=$_POST['message'];
$user=$_COOKIE['current_player'];
$session=$_SESSION['sess_id'];
$query="create table if not exists chats(id int not null primary key auto_increment,session_id int,player int, message varchar(255))";
$result=mysqli_query($con, $query);
if(!$result){
    echo "connection failed".mysqli_error($con);
    die();
}
$query="insert into chats values(null,{$session},{$user},\"{$message}\")";
$result=mysqli_query($con, $query);
if(!$result){
    echo "connection failed".mysqli_error($con);
    die();
}
header('Location: ../');
