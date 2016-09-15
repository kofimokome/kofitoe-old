<?php
session_start();
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
  $p1='Player 1';
  else {
    $p1=$_POST['p1'];
  }
  if($_POST['p2']=='')
  $p2='Player 2';
  else {
    $p2=$_POST['p2'];
  }
  $reg=1;
}

function setscore(){
  $winner=$_COOKIE['id'];
  // if($winner==1){
  //   $query="insert into high_score values(null,{$p1},4)";
  // }
  // else {
  //   $query="insert into high_score values(null,{$p2},4)";
  // }
  //
  // $result=mysqli_query($con,$query);
  // if(!$result){
  // echo 'query failed';
  // die();}
  echo 'name has been addes';

}
?>
