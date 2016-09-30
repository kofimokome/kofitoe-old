<?php
require_once('includes/header.php');

if (!isset($_SESSION['sess_id'])) {
    header('Location: session/');
}

//unset($_SESSION['sess_id']);
?>
<html>
<head>
    <title>
        KOFI : Tic Tac Toe
    </title>
    <script type="text/javascript" src="TTT_files/jquery-3.1.0.js"></script>
    <link rel="stylesheet" type="text/css" href="TTT_files/TTTcss.css" media="all"/>

</head>
<body>
<div class="welcome">
    Welcome to Tic Tac Toe. <span id="player"></span> <a href="functions/quit.php">QUIT GAME</a>
</div>
<?php
$query = "select active from sessions where id='{$_SESSION['sess_id']}'";
$result = mysqli_query($con, $query);
if (!$result) {
    echo 'connection failed' . mysqli_error($con);
}
while ($row = $result->fetch_assoc()) {
    $active = $row['active'];
}
if ($active == 0) {
    echo '
  <div class="welcome">
    Waiting for a player to join <input type="hidden" id="stats"/> 
  </div>';
} else {
    echo '
      <div class="welcome">
      Player one: <span id="stats"></span> : Player two
      </div>';
} ?>


<div id="success" class="alert-success transit">
    Player wins
</div>
<div id="error" class="alert-danger transit">
    Move not allowed!!!!!!
</div>
<div class="board">

    <!-- error when moving from C21 to C22  check it out-->

    <form name="game" class="board">
        <div id="gamelet" class="fr"><input id="11" onclick="C_11(cplayer); autoname(0);" name="C11" type="text"
                                            class="gamelet1" readonly/></div>
        <div id="gamelet" class="sr"><input id="12" onclick="C_12(cplayer); autoname(1);" name="C12" type="text"
                                            class="gamelet1" readonly/></div>
        <div id="gamelet" class="tr"><input id="13" onclick="C_13(cplayer); autoname(2);" name="C13" type="text"
                                            class="gamelet1" readonly/></div>
        <div id="gamelet" class="fr"><input id="21" onclick="C_21(cplayer); autoname(3);" name="C21" type="text"
                                            class="gamelet1 gamelet2" readonly/></div>
        <div id="gamelet" class="sr"><input onclick="C_22(cplayer); autoname(4);" name="C22" type="text"
                                            class="gamelet1 gamelet2" readonly/></div>
        <div id="gamelet" class="tr"><input onclick="C_23(cplayer); autoname(5);" name="C23" type="text"
                                            class="gamelet1 gamelet2" readonly/></div>
        <div id="gamelet" class="fr"><input onclick="C_31(cplayer); autoname(6);" name="C31" type="text"
                                            class="gamelet1 gamelet2" readonly/></div>
        <div id="gamelet" class="sr"><input onclick="C_32(cplayer); autoname(7);" name="C32" type="text"
                                            class="gamelet1 gamelet2" readonly/></div>
        <div id="gamelet" class="tr"><input onclick="C_33(cplayer); autoname(8);" name="C33" type="text"
                                            class="gamelet1 gamelet2" readonly/></div>
    </form>
</div>
<div id="info" class="alert-info transit">

</div>


<div id="score">

</div>
<div class="chat">
    <hr>

    <div style="text-align: center;">Live Chat</div>
    <hr>
    <div id="chat"></div>
    <?php
    echo '
  <form action="functions/post_chat.php" method="post">
      <input type="text" name="message"  placeholder="Your Meassage here">
      <button>Send</button>
  </form>';
    ?>
</div>
<script type="text/javascript" src="TTT_files/TTTscript.js">

</script>

</body>
</html>
