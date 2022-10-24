<?php
//Importamos las variables del formulario de contacto

@$nombre =addslashes($_POST['nombre']);
@$pedido = addslashes($_POST['pedido']);
@$tel = addslashes($_POST['tel']);
@$direccion = addslashes($_POST['direccion']);
@$email = "jesus.garcia.m1488@gmail.com";


//Preparamos el mensaje de contacto
$cabeceras = "From: $email\n" //La persona que envia el correo
 . "Reply-To: $email\n";
$asunto = "Mensaje desde la pagina Web"; //asunto aparecera en la bandeja del servidor de correo
$email_to = "j79w2000@hotmail.com"; //cambiar por tu email

$contenido = "$nombre ha enviado un mensaje desde la web www\n"
. "\n"
. "Nombre: $nombre\n"
. "Email: $email\n"
. "Telefono: $tel\n"
. "Dirección: $direccion\n"
. "\n";
//Enviamos el mensaje y comprobamos el resultado
$envio=mail($email_to, $asunto ,$contenido ,$cabeceras );
if ($envio) {
	$respuesta='<p> mensaje enviado </p>';

}else{
	$respuesta='<p> mensaje  no enviado </p>';
}

echo $respuesta;
?>