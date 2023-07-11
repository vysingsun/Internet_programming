<?php 
    $multiarray = array(
        "A" => array(0 => "red", 2=> "blue", 3 => "green"),
        "B" => array(1 => "orange", 2=> "black"),
        "c" => array(0 => "white", 4=> "purple", 8 => "grey")
    );

    echo $multiarray["A"][3];
    echo "br";
    echo $multiarray["c"][8];
?>