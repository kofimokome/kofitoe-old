<?php
/**
 * Created by PhpStorm.
 * User: kofi
 * Date: 1/21/17
 * Time: 8:49 PM
 */
require_once('../includes/header.php');
$_SESSION['login']=0;
unset($_SESSION['login']);
$_SESSION['login_user']='unknown';
unset($_SESSION['login_user']);
unset($_SESSION['game']);
unset($_SESSION['sess_id']);
echo "<script>window.location='../';</script>";