<?php
require_once('../includes/header.php');


if ($_POST['type'] == 'create') {
    $id = 'a';
    $name = 'game';
    $pass = $_POST['password'];
    $player = '';
    if ($pass == '') {
        $_SESSION['error'] = "CSK";//Create Session Key
        echo "<script>window.location='../session/';</script>";
        die("please enter a password");
    }

    //  --      Get the user's name     --  //

    $query = "select username from users where id={$_SESSION['login']}";
    $result = mysqli_query($con, $query);
    if (!$result) {
        echo 'connection failed' . mysqli_error($con);
        die();
    }
    while ($row = $result->fetch_assoc()) {
        $player = $row['username'];
    }

    //  --      Get the user's name     --  //

    $query = "insert into sessions values(null,{$_SESSION['login']},'{$name}','{$pass}',1,0,0)";
    $result = mysqli_query($con, $query);
    if (!$result) {
        echo 'connection failed' . mysqli_error($con);
        die();
    }
    $query = "select id from sessions where name='{$name}'";
    $result = mysqli_query($con, $query);
    if (!$result) {
        echo 'connection failed' . mysqli_error($con);
        die();
    }
    while ($row = $result->fetch_assoc()) {
        $id = $row['id'];
    }
    $name = $name . $id;
    $query = "update sessions set name='{$name}' where id={$id}";
    $result = mysqli_query($con, $query);
    if (!$result) {
        echo 'connection failed' . mysqli_error($con);
        die();
    }

    $query = "create table if not exists {$name}(row integer ,col_1 varchar(1),col_2 varchar(10),col_3 varchar(1))";
    $result = mysqli_query($con, $query);
    if (!$result) {
        echo 'connection failed table' . mysqli_error($con);
        die();
    }
    $query = "ALTER TABLE {$name} ADD PRIMARY KEY(row)";
    $result = mysqli_query($con, $query);
    if (!$result) {
        echo 'connection failed' . mysqli_error($con);
        die();
    }

    $query = "insert into {$name}(row) values(1)";
    $result = mysqli_query($con, $query);
    if (!$result) {
        echo 'connection failed' . mysqli_error($con);
        die();
    }
    $query = "insert into {$name}(row) values(2)";
    $result = mysqli_query($con, $query);
    if (!$result) {
        echo 'connection failed' . mysqli_error($con);
        die();
    }
    $query = "insert into {$name}(row) values(3)";
    $result = mysqli_query($con, $query);
    if (!$result) {
        echo 'connection failed' . mysqli_error($con);
        die();
    }
    $query = "update {$name} set col_1='e',col_2='e',col_3='e'";
    $result = mysqli_query($con, $query);
    if (!$result) {
        echo 'connection failed' . mysqli_error($con);
        die();
    }

    $query = "insert into players values(null,{$id},{$_SESSION['login']},1,now())";
    $result = mysqli_query($con, $query);
    if (!$result) {
        echo 'connection failed' . mysqli_error($con);
        die();
    }

    $_SESSION['sess_id'] = $id;
    $_SESSION['table'] = $name;
    setcookie("current_player", 1, time() + (86400 * 30), "/");
    $_SESSION['sess_name'] = $name;
    $_SESSION['sess_key'] = $pass;
    echo "<script>window.location='../session/';</script>";

}
if ($_POST['type'] == 'join') {
    $id = 'a';
    $name = $_POST['name'];
    if ($name == '') {
        $_SESSION['error'] = "JSN";//Join Session Name
        echo "<script>window.location='../session/';</script>";
        die("enter a name");
    }
    $pass = $_POST['password'];
    $query = "select id from sessions where name='{$name}'";
    $result = mysqli_query($con, $query);
    if (!$result) {
        die('connection failed n');
    }
    while ($row = $result->fetch_assoc()) {
        $id = $row['id'];
    }

    if ($id > 0) {
        $query = "select pass from sessions where id={$id}";
        $result = mysqli_query($con, $query);
        if (!$result) {
            echo 'connection failed p' . mysqli_error($con);
            die();
        }
        while ($row = $result->fetch_assoc()) {
            if ($pass == $row['pass']) {
                $_SESSION['game'] = $id;
                $_SESSION['table'] = $name;
                echo "<script>window.location='../session/join';</script>";
            } else {
                $_SESSION['error'] = "JSK";//Join Session Key
                echo "<script>window.location='../session/';</script>";
                die('password incorrect');
            }

        }
    } else {
        $_SESSION['error'] = "JSN";//Join Session Name
        echo "<script>window.location='../session/';</script>";
        die("session not found");
    }


}
if ($_POST['type'] == 'start') {
    $id = 'a';
    $active = 'a';

    $query = "select id from players where user_id='{$_SESSION['login']}' and session_id={$_SESSION['game']}";
    $result = mysqli_query($con, $query);
    if (!$result) {
        echo 'connection failed' . mysqli_error($con);
    }
    while ($row = $result->fetch_assoc()) {
        $id = $row['id'];
    }

    $query = "select active from sessions where id='{$_SESSION['game']}'";
    $result = mysqli_query($con, $query);
    if (!$result) {
        echo 'connection failed' . mysqli_error($con);
    }
    while ($row = $result->fetch_assoc()) {
        $active = $row['active'];
    }

    if ($active == 0) {
        if ($id > 0) {  //if the player if found
            $_SESSION['sess_id'] = $_SESSION['game'];
            echo "<script>window.location='../';</script>";
        } else { //if player is not yet in the database
            $query = "insert into players values(null,{$_SESSION['game']},{$_SESSION['login']},2,now())";
            $result = mysqli_query($con, $query);
            if (!$result) {
                echo 'connection failed' . mysqli_error($con);
                die();
            }
            $query = "update sessions set active=1 where id={$_SESSION['game']}";
            $result = mysqli_query($con, $query);
            if (!$result) {
                echo 'connection failed' . mysqli_error($con);
                die();
            }
            $id = 'a';
            $query = "select id from players where user_id='{$_SESSION['login']}' and session_id={$_SESSION['game']} ";
            $result = mysqli_query($con, $query);
            if (!$result) {
                echo 'connection failed' . mysqli_error($con);
                die();
            }
            while ($row = $result->fetch_assoc()) {
                $id = $row['id'];
            }
            $query = "select status from players where id={$id} ";
            $result = mysqli_query($con, $query);
            if (!$result) {
                echo 'connection failed' . mysqli_error($con);
                die();
            }
            while ($row = $result->fetch_assoc()) {
                setcookie("current_player", $row['status'], time() + (86400 * 30), "/");
            }

            $_SESSION['sess_id'] = $_SESSION['game'];
            echo "<script>window.location='../';</script>";
        }
    }

    if ($active == 1) {
        $id = 'a';
        $opponent;
        $query = "select id from players where user_id='{$_SESSION['login']}' and session_id={$_SESSION['game']}";
        $result = mysqli_query($con, $query);
        if (!$result) {
            echo 'connection failed' . mysqli_error($con);
            die();
        }
        while ($row = $result->fetch_assoc()) {
            $id = $row['id'];
        }
        if ($id > 0) {
            $query = "select status from players where id={$id} ";
            $result = mysqli_query($con, $query);
            if (!$result) {
                echo 'connection failed' . mysqli_error($con);
                die();
            }
            while ($row = $result->fetch_assoc()) {
                setcookie("current_player", $row['status'], time() + (86400 * 30), "/");
                $opponent = $row['status'];
            }
            if ($opponent == 1)
                $opponent = 2;
            else
                $opponent = 1;

            $_SESSION['opponent_status'] = $opponent;

            $query = "select id from players where status='{$opponent}' and session_id={$_SESSION['game']}";
            $result = mysqli_query($con, $query);
            if (!$result) {
                echo 'connection failed' . mysqli_error($con);
                die();
            }
            while ($row = $result->fetch_assoc()) {
                $opponent = $row['id'];
            }
            $_SESSION['sess_id'] = $_SESSION['game'];
            $_SESSION['player_id'] = $id;
            $_SESSION['opponent'] = $opponent;
            echo "<script>window.location='../';</script>";
        } else {
            echo 'Session is already full can not add a new user.';
        }
    }

}
?>
