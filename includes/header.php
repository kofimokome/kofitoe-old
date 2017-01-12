<?php
session_start();
echo '<script> var com=0;</script>';
$server='localhost';//set your server name here
$user='root'; //Set your server user name here
$password='root';//Set your server password here
$dbname='tic_tac_toe';
$con=mysqli_connect($server,$user,$password);
if(!$con){
  echo 'Server Connection Failed. Please open includes/header.php and set you server name($server), server user name ($user) and server password($password). Make sure your server is on and running';
  die();
}
$query="create database if not exists tic_tac_toe";
$result=mysqli_query($con, $query);
if(!$result){
  echo 'connection failed'.mysqli_error($con);
  die();
}
$db=mysqli_select_db($con,$dbname);
if(!$db){
  echo "Database Connection Failed";
  die();
}
$reg=0;
if(isset($_POST['p1']) || isset($_POST['p2'])){
  if($_POST['p1']=='')
  $_SESSION['p1']='Player 1';
  else {
    $_SESSION['p1']=$_POST['p1'];
  }
  if($_POST['p2']==''){
    echo '<script> com=1;</script>';
  $_SESSION['p2']='Genious';
}
  else {
    $_SESSION['p2']=$_POST['p2'];
  }
  $reg=1;
}
?>
