<?php
require_once('../includes/header.php');
if (!isset($_SESSION['login']) || $_SESSION['login'] == 0) {
    echo "<script>window.location='../login/';</script>";
}
if (isset($_SESSION['game'])) {
    echo "<script>window.location='../';</script>";
}
?>
<html>
<head>
    <title>Tic Tac Toe : Session</title>
    <link rel="stylesheet" type="text/css" href="../TTT_files/bootstrap.css" media="all"/>
    <link rel="stylesheet" href="../TTT_files/session.css">
    <link rel="stylesheet" href="../TTT_files/font-awesome.css">
    <script src="../TTT_files/jquery-3.1.0.js"></script>
    <script src="../TTT_files/bootstrap.js"></script>
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
        <div id="firefox" class="alert alert-danger alert-dismissible text-center" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <strong>Notice!!!: </strong>Fire fox is not officialy supported.
        </div>


        <div class="col-md-4 col-xs-4">
            <div class="panel panel-info">
                <div class="panel-heading">
                    <h3 class="panel-title">Games Created</h3>
                </div>
                <div class="panel-body">
                    <?php
                    $query = "select name from sessions where user_id={$_SESSION['login']}";
                    $result = mysqli_query($con, $query);
                    if (!$result) {
                        echo "Database Error";
                    } else {
                        echo "<table class='table table-striped'>";
                        while ($row = $result->fetch_assoc()) {
                            echo "<tr><td>" . $row['name'] . "</td></tr>";
                        }
                        echo "</table>";
                    }
                    ?>

                </div>
            </div>
        </div>


        <div class="col-md-4 col-xs-4">
            <?php
            if (isset($_SESSION['sess_name']) && isset($_SESSION['sess_key'])) {
                echo "
            <div class='alert alert-info'>
                Your session has been created !!!  <a href='../../online'>Start Game</a><br>
                Session Name: {$_SESSION["sess_name"]}<br>
                Session Key: {$_SESSION['sess_key']}<br>
                Give this information to your friend
            </div>";
                unset($_SESSION['sess_key']);
                unset($_SESSION['sess_name']);
            }
            ?>


            <form class="form-horizontal" action="../functions/session.php" method="post">
                <h1>Create a session:</h1>
                <!--<div class="form-group">
                    <div class="input-group">
                      <div class="input-group-addon">Your Name</div>
                      <input name="name" type="text" class="form-control"  placeholder="Your Name">
                    </div>
                  </div> -->
                <div class="form-group">
                    <?php
                    if ($_SESSION['error'] == 'CSK') {
                        echo '<div class="alert alert-warning"> Please enter a key</div>';
                        unset($_SESSION['error']);
                    }
                    ?>
                    <div class="input-group">
                        <div class="input-group-addon">Session Key</div>
                        <input name="password" type="text" class="form-control" placeholder="Key">
                    </div>
                </div>
                <input type="hidden" name="type" value="create"/>
                <button class="btn btn-primary btn-block">Create</button>
            </form>

            <form class="form-horizontal" action="../functions/session.php" method="post">
                <h1>Join a session</h1>
                <div class="form-group">
                    <?php
                    if ($_SESSION['error'] == 'JSN') {
                        echo '<div class="alert alert-warning"> Session not found or incorrect</div>';
                        unset($_SESSION['error']);
                    }
                    ?>
                    <div class="input-group">
                        <div class="input-group-addon">Session Name</div>
                        <input name="name" type="text" class="form-control" placeholder="Session Name">
                    </div>
                </div>
                <div class="form-group">
                    <?php
                    if ($_SESSION['error'] == 'JSK') {
                        echo '<div class="alert alert-warning"> Session key is incorrect</div>';
                        unset($_SESSION['error']);
                    }
                    ?>
                    <div class="input-group">
                        <div class="input-group-addon">Session Key</div>
                        <input name="password" type="password" class="form-control" placeholder="Key">
                    </div>
                </div>
                <input type="hidden" name="type" value="join"/>
                <button class="btn btn-primary btn-block">Join</button>
                <br><br><br>
            </form>

        </div>


        <div class="col-md-4 col-xs-4">
            <div class="panel panel-success">
                <div class="panel-heading">
                    <h3 class="panel-title">Games Joined</h3>
                </div>
                <div class="panel-body">
                    <table class="table table-striped">
                        <?php
                        $query = "select session_id from players where user_id={$_SESSION['login']} and status=2";
                        $result = mysqli_query($con, $query);
                        if (!$result) {
                            echo "Database error";
                        } else {
                            while ($row = $result->fetch_assoc()) {
                                $query = "select name from sessions where id={$row['session_id']}";
                                $result1 = mysqli_query($con, $query);
                                if (!$result1) {
                                    echo "Database error";
                                } else {

                                    while ($row1 = $result1->fetch_assoc()) {
                                        echo "<tr><td>" . $row1['name'] . "</td></tr>";
                                    }

                                }
                            }
                        }
                        ?>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
<?php require("../includes/footer.php"); ?>
</body>
</html>
