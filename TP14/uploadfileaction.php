<?php
    if(isset($_POST["SubmitBtn"])){
        $fileName = $_FILES["resume"]["name"];
        $fileSize = $_FILES["resume"]["size"] / 1024;
        $fileType = $_FILES["resume"]["type"];
        $fileTmpName = $_FILES["resume"]["tmp_name"];

        if($fileType == "application/msword"){
            if($fileSize <= 200){
                $random = rand(1111,9999);
                $newFileName = $random.$fileName;

                $uploadPath = "testUpload/".$fileName;

                if(move_uploaded_file($fileTmpName,$uploadPath)){
                    echo "Sucessfully";
                    echo "File Name : ".$fileName;
                    echo "File size : ".$fileSize."kb";
                    echo "File Type : ".$fileType;
                }
            }else{
                echo "Maximum upload file size limit is 200 kb";

            }
        }else{
            echo "You can only ipload a word doc file";
        }
    }
?>