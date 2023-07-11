<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>constant php</title>
</head>
<body>
    <?php
        define("email","thon@gmail.com <br>");
        echo email;

        define("mycon", true);
        if(mycon){}

        define("constant","hello world");
        define("newconstant","hello php");
        echo newconstant;
    ?>
</body>
</html>