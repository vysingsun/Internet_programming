<html>
    <body>
        You register sucessfully!

        <?php
    if(isset($_POST['Submit'])){
        $name = trim($_POST["name"]);
        $number = trim($_POST["number"]);
        $email = trim($_POST["email"]);
        if($name ==""){
            $errorMsg ="erroe: You dit not enter a name";
            $code = "1";
        }elseif($number == ""){
            $errorMsg = "error: Plase enter number";
            $code="2";
        }elseif(strlen(trim($number)) == false){
            $errorMsg = "error: Plase enter nummeric value";
            $code="2";
        }elseif(strlen($number)<10){
            $errorMsg = "error: Number should be ten digits";
            $code="2";
        }elseif($email == ""){
            $errorMsg = "error:You dit not enter email";
            $code="3";
        }elseif(!preg_match("/^[_\.0-9a-zA-Z]+@([0-9a-zA-Z][0-9a-zA-Z-]+\.)+[a-zA-Z]{2,6}$/i", $email)){
            $errorMsg = "error: You dit not enter email";
            $code="3";
        }else{
            echo "Success";
        } 
    }
    ?>

    </body>
</html>