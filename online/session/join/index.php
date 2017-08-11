<?php
require_once("../../includes/header.php");
/**
 * Created by PhpStorm.
 * User: kofi
 * Date: 1/25/17
 * Time: 4:17 PM
 */
if (!isset($_SESSION['login']) || $_SESSION['login'] == 0) {
    echo "<script>window.location='../';</script>";
}

if (!isset($_SESSION['game'])) {
    echo "<script>window.location='../';</script>";
}
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Tic Tac Toe : Session : Join</title>
    <link rel="stylesheet" href="../../TTT_files/bootstrap.css">
    <link rel="stylesheet" href="../../TTT_files/font-awesome.css">
    <script src="../../TTT_files/jquery-3.1.0.js"></script>
    <script src="../../TTT_files/bootstrap.js"></script>
    <noscript>
        <meta http-equiv="Refresh" CONTENT="0; URL=../../noscript.html"/>
    </noscript>
</head>
<body>
<div class="container-fluid">
    <?php require("../../includes/navbar.php"); ?>
</div>
<div class="col-md-offset-4 col-md-5">
    <form class="form-horizontal " action="../../functions/session.php" method="post">
        <h3>Do you want to join this Session?</h3>
        <input type="hidden" name="type" value="start"/>
        <button class="btn btn-primary btn-block">Join</button>
        <br><br><br><br>
        <a class="btn btn-primary btn-block" href="../../functions/quit.php">GO BACK</a>
    </form>
</div>
</body>
</html>
