<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo 'REQUEST METHOD NOT ALLOWED';
    return;
}

use PHPMailer\PHPMailer\PHPMailer;

require "./phpmailer/PHPMailer.php";
require "./phpmailer/Exception.php";
require "./phpmailer/SMTP.php";



$data = json_decode(file_get_contents('php://input'), true);

$nombre = $data['nombre'];
$asunto = $data['asunto'];
$email = $data['email'];
$tel = $data['tel'];
$msg = $data['mensaje'];


$body = "<h1>Nelson Gamero Dev - Contacto</h1>
    <br>
    <p>Mensaje nuevo</p>
    <br>
    <br>
    <p>Nombre : <b><span>$nombre</span></b></p>
    <br>
    <p>Asunto : <b><span>$asunto</span></b></p>
    <br>
    <p>E-mail : <b><span>$email</span></b></p>
    <br>
    <p>Teléfono : <b><span>$tel</span></b></p>
    <br>
    <p>Mensaje : <b><span>$msg</span></b></p>";



$mail = new PHPMailer(true);

try {

    $mail->Host = 'mail.nelsongamerodev.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'nelgamportfolio96@nelsongamerodev.com';
    $mail->Password = 'a47aa492f484';
    $mail->SMTPSecure = "ssl";
    $mail->Port = 465;

    //Recipients
    $mail->setFrom('nelgamportfolio96@nelsongamerodev.com', 'Nelson');
    $mail->addAddress('gamero.nelson96@gmail.com');

    //Content
    $mail->isHTML(true);
    $mail->Subject = $asunto;
    $mail->Body = $body;

    $mail->send();
    header("HTTP/1.1 200");
    echo json_encode(array('msgOk' => true));
    return;
} catch (Exception $e) {
    header("HTTP/1.1 200");
    echo json_encode(array('msgOk' => false));
    return;
}
