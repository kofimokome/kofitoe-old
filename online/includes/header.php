<?php
session_start();
echo "<script>var com=0;</script>";
$server='localhost';
$user='root';
$password='root';
$con=mysqli_connect($server,$user,$password);
if(!$con){
  echo 'Server Connection Failed'.mysqli_error($con);
  die();
}
$dbname='tic_tac_toe';
$db=mysqli_select_db($con,$dbname);
if(!$db){
    echo "Database Connection Failed";
    die();
}

/*create the table=> create table if not exists kofid(row integer ,col_1 varchar(1),col_2 varchar(10),col_3 varchar(1));;
create row=> do for each row=> insert into table(row) values(2);
set all cols to zero =>update kofid set col_1='e',col_2='e',col_3='e';
update a particular row=>update kofi set col_1=0,col_2=0,col_3=0 where row=1;
set primary key=> ALTER TABLE tablename ADD PRIMARY KEY(`row`);
deleting a tble=> DROP TABLE tablename



*/

//$reg=0;
//if(isset($_POST['p1']) || isset($_POST['p2'])){
//  if($_POST['p1']=='')
//  $_SESSION['p1']='Player 1';
//  else {
//    $_SESSION['p1']=$_POST['p1'];
//  }
//  if($_POST['p2']==''){
//    echo '<script> com=1;</script>';
//  $_SESSION['p2']='Genious';
//}
//  else {
//    $_SESSION['p2']=$_POST['p2'];
//  }
//  $reg=1;
//}
?>
