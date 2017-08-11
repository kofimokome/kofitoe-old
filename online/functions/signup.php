<?php
/**
 * Created by PhpStorm.
 * User: kofi
 * Date: 1/26/17
 * Time: 12:11 PM
 */


/* Errors with is_nan and see how to the get the length of a string*/
require_once('../includes/header.php');

$password=$_POST['password'];
$username=$_POST['username'];
$firstname=$_POST['firstname'];
$lastname=$_POST['lastname'];
$id=0;


if($_POST['password']=='' || strlen($_POST['password'])<8){
    $_SESSION['error']='SUP';
    echo "<script>window.location='../signup/';</script> ";
    die();
}

if($_POST['password']!=$_POST['c_password']){
    $_SESSION['error']='SUPR';
    echo "<script>window.location='../signup/';</script> ";
    die();
}

if($_POST['firstname']=='' || strlen($_POST['firstname'])<3 || round($_POST['firstname'])%10){
    $_SESSION['error']='SFN';
    echo "<script>window.location='../signup/';</script> ";
    die();
}

if($_POST['lastname']=='' || round($_POST['lastname'])%10 || strlen($_POST['lastname'])<3){
    $_SESSION['error']='SLN';
    echo "<script>window.location='../signup/';</script> ";
    die();
}

if($_POST['username']=='' || round($_POST['username'])%10 || strlen($_POST['username'])<3){
    $_SESSION['error']='SUNE';
    echo "<script>window.location='../signup/';</script> ";
    die();
}

$query="select id from users where username='{$username}'";
$result=mysqli_query($con,$query);
if(!$result){
    echo mysqli_error($con);
    die("Database Error");
}
while($row=$result->fetch_assoc()){
    $id=$row['id'];
}

if($id!=0){
    $_SESSION['error']='SUN';
    echo "<script>window.location='../signup/';</script> ";
    die();
}

$query="insert into users values(null,'{$firstname}','{$lastname}','{$username}','{$password}',0,0,now(),0)";
$result=mysqli_query($con,$query);
if(!$result){
    echo mysqli_error($con);
    die("Database Error");
}
$_SESSION['account_created']=1;
echo "<script>window.location='../login/';</script> ";
