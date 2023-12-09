# Endpoint: `GET /resp_test`

Permite obtener todos los registro la tabla.


## Parámetros de URL
- `{nombre_tabla}` (obligatorio): Se requiere especificamente poner el nombre la tabla unicamente para traer todos sus registros.


## Ejemplo de Solicitud
```http
GET /resp_test
```

## Respuesta Exitosa (Código 200 OK)
```json
[
{
        "ID_Respuesta": 1,
        "ID_Estudiante": 1,
        "ID_Pregunta": 1,
        "Respuesta_Elegida": "S"
    },
    {
        "ID_Respuesta": 2,
        "ID_Estudiante": 1,
        "ID_Pregunta": 2,
        "Respuesta_Elegida": "N"
    },
    {
        "ID_Respuesta": 3,
        "ID_Estudiante": 2,
        "ID_Pregunta": 1,
        "Respuesta_Elegida": "S"
    }
]
```

## Respuestas de Errores Posibles
- Código 400 Not Found:

    ```
    No se puede OBTENER /tabla
    ```

- Código 500 Internal Server Error:
  ```json
  {
    "errno": 500,
    "error": "internal_error",
    "error_description": "Ocurrió un problema para procesar la solicitud"
  }
  ``` 

## Notas Adicionales

- Asegurate de incluir el nombre correcto de la tabla en la solicitud para obtener la información solicitada.