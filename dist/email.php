<?php
// Permite solicitudes desde tu frontend (si usas dominios distintos)
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=utf-8');

try {
  // Lee el cuerpo de la solicitud (JSON crudo)
  $json = file_get_contents("php://input");
  $data = json_decode($json);

  // Verifica que los datos existan
  if (!$data || empty($data->template_params->from_email) || empty($data->template_params->message)) {
    http_response_code(400);
    echo json_encode(["error" => "Datos incompletos"]);
    exit;
  }

  // Extrae los valores
  $nombre = $data->template_params->from_name;
  $correo = $data->template_params->from_email;
  $mensaje = $data->template_params->message;

  // Aquí puedes enviar el correo (ejemplo usando mail())
  $para = "erick.olachea16@gmail.com";
  $asunto = "Nuevo mensaje de $nombre";
  $contenido = "Nombre: $nombre\nEmail: $correo\n\nMensaje:\n$mensaje";

   mail($para, $asunto, $contenido); // Descomenta si tu servidor lo soporta

  // Respuesta correcta
  http_response_code(200);
  echo json_encode(["status" => "success", "message" => "Correo enviado correctamente"]);
  
} catch (Exception $e) {
  http_response_code(500);
  echo json_encode(["error" => "Error interno: " . $e->getMessage()]);
}
?>
