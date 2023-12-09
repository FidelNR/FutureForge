# Endpoint: `GET /res_apre`

Permite obtener todos los registro la tabla.


## Parámetros de URL
- `{nombre_tabla}` (obligatorio): Se requiere especificamente poner el nombre la tabla unicamente para traer todos sus registros.


## Ejemplo de Solicitud
```http
GET /res_apre
```

## Respuesta Exitosa (Código 200 OK)
```json
[
{
        "ID_Resultado": 1,
        "ID_Estudiante": 1,
        "Tipo_Aprendizaje": "Visual",
        "Fecha_Test": "2023-01-25T00:00:00.000Z"
    },
    {
        "ID_Resultado": 2,
        "ID_Estudiante": 2,
        "Tipo_Aprendizaje": "Auditivo",
        "Fecha_Test": "2023-01-30T00:00:00.000Z"
    },
    {
        "ID_Resultado": 3,
        "ID_Estudiante": 1,
        "Tipo_Aprendizaje": "Kinestesico",
        "Fecha_Test": "2023-12-08T00:00:00.000Z"
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