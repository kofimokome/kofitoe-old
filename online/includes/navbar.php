<?php
/**
 * Created by PhpStorm.
 * User: kofi
 * Date: 1/25/17
 * Time: 2:47 PM
 */ ?>
<style>
    img{
        width:2em;
        height:2em;
        border-radius:1em;
    }

    body{
        overflow-x:hidden;
    }
</style>
<nav class="navbar navbar-default">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#"></a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
            <li><a href="../../">Home <span class="sr-only">(current)</span></a></li>
            <li class="active"><a href="#">Web</a></li>
            <li><a href="#">Andriod</a></li>
            <li><a href="#">Java</a></li>
            <li><a href="#">About the Author</a></li>
        </ul>
        <?php
        if (isset($_SESSION['login']) && $_SESSION['login'] != 0) {
            $location='';
            if($_SESSION['user_picture']==1)
                $location='pics/'.$_SESSION['login'].'.jpg';
            else
                $location='pics/default.png';
            echo "
            <ul class='nav navbar-nav navbar-right' >
            <li class='dropdown' >
                <a href = '#' class='dropdown-toggle' data-toggle = 'dropdown' role = 'button' aria-haspopup = 'true' aria-expanded = 'false' > 
                <img src='{$_SESSION['root_url']}/{$location}' alt=''> {$_SESSION['login_user']} 
                <span class='caret' ></span >
                </a >
                <ul class='dropdown-menu' >
                    <li ><a href = '#' > Edit Profile</a ></li >
                    <li role = 'separator' class='divider' ></li >
                    <li ><a href = '../logout/' > Sign Out </a ></li >
                    
                </ul >
            </li >
        </ul >
        ";
        } ?>
    </div>
</nav>
