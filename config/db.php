<?php

$host = "localhost";
$user = "root";
$password = "";
$db = "clevent_db";

$conn = mysqli_connect($host,$user,$password,$db);

if(!$conn){
    die("Koneksi gagal");
}

?>