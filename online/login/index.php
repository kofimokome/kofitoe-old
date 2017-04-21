<?php
require_once("../includes/header.php");
/**
 * Created by PhpStorm.
 * User: kofi
 * Date: 1/21/17
 * Time: 8:18 PM
 */
?>
<html>
<head>
    <title>Tic Tac Toe : Login</title>
    <link rel="stylesheet" href="../TTT_files/bootstrap.css">
    <link rel="stylesheet" href="../TTT_files/login.css">
    <link rel="stylesheet" href="../TTT_files/font-awesome.css">
    <script src="../TTT_files/jquery-3.1.0.js"></script>
    <script src="../TTT_files/bootstrap.js"></script>
    <?php
    if (isset($_SESSION['login']) && $_SESSION['login'] != 0) {
        echo "<script>window.location='../';</script>";
    }
    ?>
    <noscript>
        <meta http-equiv="Refresh" CONTENT="0; URL=../noscript.html"/>
    </noscript>


</head>
<body>
<div class="container-fluid">
    <?php require("../includes/navbar.php"); ?>
</div>
<div class="row">
    <div class="container-fluid">
        <div class="col-md-4 col-md-offset-4 col-xs-6 col-xs-offset-3">
            <div id="cookie"">
            </div>
            <?php
            if (isset($_SESSION['account_created'])) {
                echo '
            <div class="alert alert-success">
                Your Account has been created. Please log in to your account
            </div>';
                unset($_SESSION['account_created']);
            } ?>
            <form class="form-horizontal" action="../functions/login.php" method="post">
                <h1>Please Login:</h1>
                <div class="form-group"><?php
                    if ($_SESSION['error'] == 'LUN') {
                        echo '<div class="alert alert-warning"> User not found</div>';
                        unset($_SESSION['error']);
                    } ?>
                    <div class="input-group">
                        <div class="input-group-addon">User Name</div>
                        <input name="username" type="text" class="form-control" placeholder="User Name">
                    </div>
                </div>
                <div class="form-group"><?php
                    if ($_SESSION['error'] == 'LUP') {
                        echo '<div class="alert alert-warning"> Password Incorrect</div>';
                        unset($_SESSION['error']);
                    } ?>
                    <div class="input-group">
                        <div class="input-group-addon">Passowrd</div>
                        <input name="password" type="password" class="form-control" placeholder="Password">
                    </div>
                </div>
                <input type="hidden" name="type" value="create"/>
                <button class="btn btn-primary btn-block">Login</button>
            </form>
            Forgot my password (comming soon)<br>
            Don't yet have an account? <a href="../signup/">Sign Up</a>

        </div>
    </div>
</div>
<hr>
<?php require("../includes/footer.php"); ?>
</body>
<script>
    if (!navigator.cookieEnabled) {
        //window.location='nocookie.html';
        document.getElementById("cookie").innerHTML='<div class="alert alert-info"> <strong>You Must Enable Cookies Before You Can Login !!!</strong>  </div>';
    }
</script>
</html>
