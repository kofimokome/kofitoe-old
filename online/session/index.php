<?php
require_once('../includes/header.php');
?>
<html>
<head>
    <title>Session</title>
</head>
<body>
Welcome to tic tac toe online. please create a session or join a session to start playing with your friends online
<br><br>
<?php if(!isset($_SESSION['game'])){
    echo'
Create a session:
<br>
<form action="../functions/session.php" method="post">
    Your name: <input type="text" name="name"/><br><br>
    Session key: <input type="text" name="password"/><br><br>
    <input type="hidden" name="type" value="create"/>
    <button>Create</button>
</form><br>

OR
<br><br><br>
Join a session
<form action="../functions/session.php" method="post">
    Session name: <input type="text" name="name"/><br><br>
    Session key: <input type="password" name="password"/>
    <input type="hidden" name="type" value="join"/><br><br>
    <button>Join</button>
</form>

<a href="/Tic_Tac_Toe"><button>HOME PAGE</button></a>
';
}
else{
   // unset($_SESSION['game']);
    echo'

Please enter your name
<form action="../functions/session.php" method="post">
    Your name: <input type="text" name="name"/><br><br>
    <input type="hidden" name="type" value="start"/><br><br>
    <button>Start</button>
</form>
<br><br>
<a href="../functions/quit.php">GO BACK</a>
';
}
?>
</body>
</html>
