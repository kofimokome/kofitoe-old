<?php
require_once('../includes/header.php');
?>
<html>
<head>
    <title>Session</title>
    <link rel="stylesheet" type="text/css" href="../TTT_files/bootstrap.css" media="all"/>
</head>
<body>
<div class="container-fluid">
    <div class="jumbotron">
        <h1>Welcome to tic tac toe online.</h1>
        <p>Please create a session or join a session to start playing with your friends online</p>
    </div>


    <?php if (!isset($_SESSION['game'])) {
        echo '

<form class="form-horizontal container-fluid col-md-4 col-md-offset-3 col-xs-4 col-xs-offset-3" action="../functions/session.php" method="post">
<h1>Create a session:</h1>
<div class="form-group">
    <label class="sr-only" for="exampleInputAmount">Amount (in dollars)</label>
    <div class="input-group">
      <div class="input-group-addon">Your Name</div>
      <input name="name" type="text" class="form-control"  placeholder="Your Name">
    </div>
  </div>
  <div class="form-group">
    <label class="sr-only" for="exampleInputAmount">Amount (in dollars)</label>
    <div class="input-group">
      <div class="input-group-addon">Session Key</div>
      <input name="password" type="text" class="form-control"placeholder="Key">
    </div>
  </div>
    <input type="hidden" name="type" value="create"/>
    <button class="btn btn-primary btn-block">Create</button>
</form>

<form class="form-horizontal container-fluid col-md-4 col-md-offset-3 col-xs-4 col-xs-offset-3" action="../functions/session.php" method="post">
<h1>Join a session</h1>
<div class="form-group">
    <label class="sr-only" for="exampleInputAmount">Amount (in dollars)</label>
    <div class="input-group">
      <div class="input-group-addon">Session Name</div>
      <input name="name" type="text" class="form-control"placeholder="Session Name">
    </div>
  </div>
  <div class="form-group">
    <label class="sr-only" for="exampleInputAmount">Amount (in dollars)</label>
    <div class="input-group">
      <div class="input-group-addon">Session Key</div>
      <input name="password" type="password" class="form-control"placeholder="Key">
    </div>
  </div>
    <input type="hidden" name="type" value="join"/>
    <button class="btn btn-primary btn-block">Join</button><br><br><br>
    <a class="btn btn-primary btn-block" href="/Tic_Tac_Toe">HOME PAGE</a>
</form>


';
    } else {
        // unset($_SESSION['game']);
        echo '


<form class="form-horizontal container-fluid col-md-4 col-md-offset-3 col-xs-4 col-xs-offset-3" action="../functions/session.php" method="post">
<h1>Please enter your name</h1>
<div class="form-group">
    <label class="sr-only" for="exampleInputAmount">Amount (in dollars)</label>
    <div class="input-group">
      <div class="input-group-addon">Your Name</div>
      <input name="name" type="text" class="form-control"placeholder="Your Name">
    </div>
  </div>
    <input type="hidden" name="type" value="start"/>
    <button class="btn btn-primary btn-block">Start</button><br><br><br><br>
    <a class="btn btn-primary btn-block" href="../functions/quit.php">GO BACK</a>
</form>


';
    }
    ?>
</div>
</body>
</html>
