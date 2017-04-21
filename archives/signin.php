<?php
//require_once("../includes/header.php");
/**
 * Created by PhpStorm.
 * User: kofi
 * Date: 1/21/17
 * Time: 8:18 PM
 */
?>
<html>
<head>
    <title>Tic Tac Toe : Sign Up</title>
    
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
    <?php //require("../includes/navbar.php"); ?>
</div>
<div class="row">

    <div class="container-fluid">
        <div class="col-md-4 col-md-offset-4 col-xs-6 col-xs-offset-3">
            <div id="cookie"">
        </div>

            <form class="form-horizontal" action="../functions/signup.php" method="post">
                <h1>Sign Up:</h1>
                <div class="form-group"><?php
                    if ($_SESSION['error'] == 'SFN') {
                        echo '<div class="alert alert-warning"> Enter a valid name. Name must be more than 3 characters and must not be a number</div>';
                        unset($_SESSION['error']);
                    }
                    ?>
                    <div class="input-group">
                        <div class="input-group-addon">First Name</div>
                        <input name="firstname" type="text" class="form-control" placeholder="First Name">
                    </div>
                </div>
                <div class="form-group"><?php
                    if ($_SESSION['error'] == 'SLN') {
                        echo '<div class="alert alert-warning"> Enter a valid name. Name must be more than 3 characters and must not be a number</div>';
                        unset($_SESSION['error']);
                    } ?>
                    <div class="input-group">
                        <div class="input-group-addon">Last Name</div>
                        <input name="lastname" type="text" class="form-control" placeholder="Last Name">
                    </div>
                </div>
                <div class="form-group"><?php
                    if ($_SESSION['error'] == 'SUN') {
                        echo '<div class="alert alert-warning"> User already taken or is a number</div>';
                        unset($_SESSION['error']);
                    }
                    if ($_SESSION['error'] == 'SUNE') {
                        echo '<div class="alert alert-warning"> Username must be more than 3 characters and must not be a number</div>';
                        unset($_SESSION['error']);
                    } ?>
                    <div class="input-group">
                        <div class="input-group-addon">User Name</div>
                        <input name="username" type="text" class="form-control" placeholder="User Name">
                    </div>
                </div>
                <div class="form-group"><?php
                    if ($_SESSION['error'] == 'SUP') {
                        echo '<div class="alert alert-warning"> Please enter a password. Password must be more than 8 characters</div>';
                        unset($_SESSION['error']);
                    } ?>
                    <div class="input-group">
                        <div class="input-group-addon">Passowrd</div>
                        <input name="password" type="password" class="form-control" placeholder="Password">
                    </div>
                </div>
                <div class="form-group"><?php
                    if ($_SESSION['error'] == 'SUPR') {
                        echo '<div class="alert alert-warning"> Password does not match</div>';
                        unset($_SESSION['error']);
                    } ?>
                    <div class="input-group">
                        <div class="input-group-addon">Confirm Passowrd</div>
                        <input name="c_password" type="password" class="form-control" placeholder="Confirm Password">
                    </div>
                </div>
                <button class="btn btn-primary btn-block">SignUp</button>
            </form>
            Already have an account? <a href="../login/">Log In</a>

        </div>
    </div>
</div>
<hr>
//<?php //require("../includes/footer.php"); ?>
</body>
<script>
    if (!navigator.cookieEnabled) {
        //window.location='nocookie.html';
        document.getElementById("cookie").innerHTML='<div class="alert alert-info"> <strong>You Must Enable Cookies Before You Can Sign Up!!!</strong>  </div>';
    }
</script>
</html>
