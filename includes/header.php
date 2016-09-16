<?php
session_start();
echo '<script> var com=0;</script>';
$server='localhost';
$user='root';
$password='root';
$dbname='tic_tac_toe';
$con=mysqli_connect($server,$user,$password);
if(!$con){
  echo 'Server Connection Failed';
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
