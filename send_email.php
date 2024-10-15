<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Comprobar si se han enviado los datos esperados
    if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message']) && isset($_POST['telefone'])) {
        // Validación básica de entrada
        $name = htmlspecialchars($_POST['name']);
        $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
        $message = htmlspecialchars($_POST['message']);
        $telefone = htmlspecialchars($_POST['telefone']);

        if ($email) { // Solo continúa si el correo es válido
            $to = 'maxi@maximilianorey.com';
            $subject = 'Nuevo mensaje del formulario';
            
            // Construcción del cuerpo del mensaje
            $body = "Nombre: $name\n";
            $body .= "Correo: $email\n";
            $body .= "Teléfono: $telefone\n";
            $body .= "Mensaje: $message";
    
            // Encabezados
            $headers = "From: maxi@maximilianorey.com\r\n";  // Usa un email de tu dominio
            $headers .= "Reply-To: $email\r\n"; // El correo del usuario como 'Reply-To'
            $headers .= "MIME-Version: 1.0\r\n";
            $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    
            // Envío del correo
            if (mail($to, $subject, $body, $headers)) {
                echo 'Mensaje enviado con éxito';
            } else {
                echo 'Error al enviar el mensaje';
            }
        } else {
            echo 'Correo electrónico no válido';
        }


    } else {
        echo 'Faltan datos en el formulario.';
    }
}
?>



