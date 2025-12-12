<?php
$host = 'localhost';
$user = 'root';
$pass = '';
$db   = 'fave';

$conn = mysqli_connect($host, $user, $pass, $db);
if(isset($conn)){
    echo 'connected';
}else{
    echo 'not connected';
}

?>
