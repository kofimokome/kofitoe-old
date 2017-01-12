<?php
require_once('includes/header.php');
?>
<html>
<head>
    <title>
        KOFI : Tic Tac Toe
    </title>
    <link rel="stylesheet" type="text/css" href="TTT_files/TTTcss.css" media="all"/>

    <!--Java script codes here-->

    <script type="text/javascript" src="TTT_files/TTTscript.js">
    </script>
    <script type="text/javascript">
    info_msg='Click on a cell to start playing';


    var xhr = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("MSXML2.XMLHTTP.3.0");
    function sendRequest() {
        var output=document.getElementById('score');
        if(xhr){
          document.getElementById('score').innerHTML="ok we are waiting for some text";
            xhr.open("GET","score.php",true);
            xhr.send(null);
            xhr.onreadystatechange=function () {handleResponse(xhr)}

            }

        }

    function handleResponse(xhr) {
        if(xhr.readyState==4 && xhr.status==200){
            document.getElementById('score').innerHTML="<h3>High Scores</h3>"+xhr.responseText;
        }

    }
    </script>


</head>
<body>
  <div class="welcome">
    Welcome to Tic Tac Toe. <span id="player"></span>
  </div>
  <div class="welcome">
    Player one: <span id="stats"></span> : Player two
  </div>
  <?php
  if($reg==0){
    echo '
    <link rel="stylesheet" type="text/css" href="TTT_files/bootstrap.css" media="all"/>
  <div id="registration" class="container-fluid">
  <div class="jumbotron">
        <h1>Welcome to tic tac toe.</h1>
        <p>Please enter your names. Leave player 2 blank if you want to play against Genious</p>
    </div>

    <form class="form-horizontal container-fluid col-md-4 col-md-offset-3 col-xs-4 col-xs-offset-3" method="post" action="index.php" >
    <div class="form-group">
    <div class="input-group">
      <div class="input-group-addon">Player 1:</div>
      <input name="p1" type="text" class="form-control input-group-sm" placeholder="Your Name">
    </div>
  </div>
  <div class="form-group">
    <div class="input-group">
      <div class="input-group-addon">Player 2:</div>
      <input name="p2" type="text" class="form-control input-group-sm"  placeholder="Your Name">
    </div>
  </div>
    <button class="btn btn-primary" onclick="start()">Start Game</button>
    <a class="btn btn-primary" href="online/" style="margin-left:30%;">Play Online</a>
    </form>

  </div>';
}
else{
  echo '


    <div id="success" class="alert-success transit">
        Player wins
    </div>
    <div id="error" class="alert-danger transit">
        Move not allowed!!!!!!
    </div>
<div class="board">

      <!-- error when moving from C21 to C22  check it out-->

    <form name="game" class="board">
        <div id="gamelet" class="fr"><input onclick="C_11(cplayer); autoname(0);" name="C11" type="text" class="gamelet1" readonly/></div>
        <div id="gamelet" class="sr"><input onclick="C_12(cplayer); autoname(1);" name="C12" type="text" class="gamelet1" readonly/></div>
        <div id="gamelet" class="tr"><input onclick="C_13(cplayer); autoname(2);" name="C13" type="text" class="gamelet1" readonly/></div>
        <div id="gamelet" class="fr"><input onclick="C_21(cplayer); autoname(3);" name="C21" type="text" class="gamelet1 gamelet2" readonly/></div>
        <div id="gamelet" class="sr"><input onclick="C_22(cplayer); autoname(4);" name="C22" type="text" class="gamelet1 gamelet2" readonly/></div>
        <div id="gamelet" class="tr"><input onclick="C_23(cplayer); autoname(5);" name="C23" type="text" class="gamelet1 gamelet2" readonly/></div>
        <div id="gamelet" class="fr"><input onclick="C_31(cplayer); autoname(6);" name="C31" type="text" class="gamelet1 gamelet2" readonly/></div>
        <div id="gamelet" class="sr"><input onclick="C_32(cplayer); autoname(7);" name="C32" type="text" class="gamelet1 gamelet2" readonly/></div>
        <div id="gamelet" class="tr"><input onclick="C_33(cplayer); autoname(8);" name="C33" type="text" class="gamelet1 gamelet2" readonly/></div>
    </form>
</div>
<div id="info" class="alert-info transit">

</div>';
}

?>
<div id="score">

</div>
<script type="text/javascript">
var infos=document.getElementById('info');
var events=document.getElementById('success');
var alerts=document.getElementById('error');
      setInterval("check(); infos.innerHTML=info_msg;", 100)
      setInterval("alerts.innerHTML=alert_msg;",100);
      setInterval("events.innerHTML=event_msg;",100);
      setInterval("alerts.style.display='none';infos.style.display='none';",4100);
      setInterval("if(wins==0){document.getElementById('player').innerHTML='Player '+cplayer+ 's turn';}",100);
      setInterval("if(wins==1){document.getElementById('player').innerHTML='';}",100);
      setInterval("document.getElementById('stats').innerHTML=''+score1+'    '+score2;",100);

</script>

</body>
</html>
