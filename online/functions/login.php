<?php
/**
 * Created by PhpStorm.
 * User: kofi
 * Date: 1/21/17
 * Time: 8:29 PM
 */
include_once("../includes/header.php");
$username=$_POST['username'];
$password=$_POST['password'];
$found=0;

$query="select id,username,password from users";
$result=mysqli_query($con,$query);
if(!$result){
    die("Error accessing the database");
}
else{
    while ($row = $result->fetch_assoc()) {
        if ($username==$row['username']) {
            if($password==$row['password']){
                $query="select first_name,last_name,picture from users where id={$row['id']}";
                $result1=mysqli_query($con,$query);
                if(!$result1){
                    die("Error accessing the database");
                }else{
                    while ($row1 = $result1->fetch_assoc()) {
                        $_SESSION['login_user']=$row1['first_name']."   ".$row1['last_name'];
                        $_SESSION['user_picture']=$row1['picture'];
                    }
                }
                $_SESSION['login']=$row['id'];
                $found=1;
                echo "<script>window.location='../';</script> ";

            }
            else{
                $_SESSION['error']="LUP";//Join Session Name
                echo "<script>window.location='../';</script>";
                die('Please your password is incorrect');
            }
        }
    }
    if($found==0){
        $_SESSION['error']="LUN";//Join Session Name
        echo "<script>window.location='../';</script>";
        die('Your user name was not found');
    }
}
