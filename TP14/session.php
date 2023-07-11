<?php
    session_start();

    $_SESSION["username"] = "nikita";
    $_SESSION["email"]= "nikita@gmail.com";

    echo $_SESSION["username"];
    echo "<br>";
    echo $_SESSION["email"];
?>