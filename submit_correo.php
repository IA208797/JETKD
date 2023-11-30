<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $msn = $_POST["mensaje"];
    $telefono = $_POST["telefono"];
    $para = "igedhxks7@relay.firefox.com";  //Reemplaza con la dirección de correo de destino

    $asunto = "Mensaje de contacto de $nombre";
    $mensaje = "Hola, soy " . $nombre . " \n" . $msn . " \n" . "Este es mi número de teléfono: " . $telefono;


    $cabeceras = "From: $email\r\n";
    $cabeceras .= "Reply-To: $email\r\n";
    $cabeceras .= "X-Mailer: PHP/" . phpversion();

    if (mail($para, $asunto, $mensaje, $cabeceras)) {
        header("Location: confirmacion.html");
    } else {
        echo "Error al enviar el correo.";
    }
}

?>