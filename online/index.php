<?php
require_once('includes/header.php');
if (!isset($_SESSION['login']) || $_SESSION['login'] == 0) {
    echo "<script>window.location='login/';</script>";
}
if (!isset($_SESSION['sess_id'])) {
    echo "<script>window.location='session/';</script>";
}

/*echo "status: ".$_SESSION['opponent_status'];
echo " opponent: ".$_SESSION['opponent'];*/


//unset($_SESSION['sess_id']);

?>
<html>
<head>
    <title>
        KOFI : Tic Tac Toe
    </title>
    <script type="text/javascript" src="TTT_files/jquery-3.1.0.js"></script>
    <script type="text/javascript" src="TTT_files/scripts.js"></script>
    <link rel="stylesheet" type="text/css" href="TTT_files/TTTcss.css" media="all"/>
    <noscript>
        <meta http-equiv="Refresh" CONTENT="0; URL=noscript.html"/>
    </noscript>

</head>
<body>
<div class="welcome">
    Tic Tac Toe: <span id="player"></span> <a href="functions/quit.php">QUIT GAME</a>
    <br>
    <?php
    $player = $_SESSION['opponent_status'];
    echo 'Player ' . $player . ": ";

    ?><span id="user_status"></span>
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

    <form name="game" id="board">
      <input onclick="C_11(cplayer); autoname(0);" name="C11" type="text" class="row1 col1" readonly>
      <input onclick="C_12(cplayer); autoname(1);" name="C12" type="text" class="row1 col2" readonly>
      <input onclick="C_13(cplayer); autoname(2);" name="C13" type="text" class="row1 col3" readonly>
      <input onclick="C_21(cplayer); autoname(3);" name="C21" type="text" class="row2 col1" readonly>
      <input onclick="C_22(cplayer); autoname(4);" name="C22" type="text" class="row2 col2" readonly>
      <input onclick="C_23(cplayer); autoname(5);" name="C23" type="text" class="row2 col3" readonly>
      <input onclick="C_31(cplayer); autoname(6);" name="C31" type="text" class="row3 col1" readonly>
      <input onclick="C_32(cplayer); autoname(7);" name="C32" type="text" class="row3 col2" readonly>
      <input onclick="C_33(cplayer); autoname(8);" name="C33" type="text" class="row3 col3" readonly>
      <span></span>
    </form>
</div>
<div id="info" class="alert-info transit">

</div>


<div id="score">

</div>

<div class="chat-sidebar focus">
    <div class="list-group">
        <!-- <p class="text-center visible-xs"><a href="#" class="hide-chat btn btn-success">Hide</a></p> -->
        <p class="text-center chat-title">Chat</p>
        <hr>
        <div class="chat">
            <div id="chat"></div>
        </div>
        <div class="chat-search">
            <form action="functions/post_chat.php" method="post">
                <input type="text" name="message" placeholder="Your Meassage here">
                <button>Send</button>
            </form>
        </div>


    </div>
</div>
<div class="chat-toggle chat-toggle-width">
    <b>Hide/Show</b>
</div>
<script type="text/javascript" src="TTT_files/TTTscript.js">

</script>

</body>
</html>
