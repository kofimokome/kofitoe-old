<?php
session_start();
echo "<script>var com=0;</script>";
$server='localhost';//Set your server name here
$user='root';//Set your server user name here
$password='root';//Set your server password here
$con=mysqli_connect($server,$user,$password);
if(!$con){
  echo 'Server Connection Failed. Please open online/includes/header.php and set you server name($server), server user name ($user) and server password($password). Make sure your server is on and running'.mysqli_error($con);
  die();
}
$query="create database if not exists tic_tac_toe";
$result=mysqli_query($con, $query);
if(!$result){
    echo 'connection failed'.mysqli_error($con);
    die();
}
$dbname='tic_tac_toe';
$db=mysqli_select_db($con,$dbname);
if(!$db){
    echo "Database Connection Failed";
    die();
}

//      --       Creating the users table        --

$query="create table if not exists users (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT , first_name VARCHAR(10) NOT NULL , last_name VARCHAR(10) NOT NULL , username VARCHAR(10) NOT NULL ,  password VARCHAR(80) NOT NULL ,  phone INT(20) NULL ,  email VARCHAR(20) NULL ,   last_seen TIMESTAMP NOT NULL ,  picture INT(1) NULL)";
$result=mysqli_query($con, $query);
if(!$result){
    echo 'connection failed'.mysqli_error($con);
    die("Error creating users table");
}

//      --      Creating the users table         --

//TIMESTAMP NOT NULL
$query="create table if not exists players(id int not null primary key auto_increment, session_id int,user_id INT(255) NOT NULL,status int(1),last_seen TIMESTAMP)";
$result=mysqli_query($con, $query);
if(!$result){
    echo 'connection failed'.mysqli_error($con);
    die("Error creating players table");
}
$query="create table if not exists sessions(id int not null primary key auto_increment, user_id INT NOT NULL,name varchar(10),pass varchar(255),player int(1),active tinyint(1),moves int(1))";
$result=mysqli_query($con, $query);
if(!$result){
    echo 'connection failed'.mysqli_error($con);
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
$_SESSION['root_url']="/Tic_Tac_Toe/online";

?>
