# Endpoint: `GET /res_ori`

Permite obtener todos los registro la tabla.


## Parámetros de URL
- `{nombre_tabla}` (obligatorio): Se requiere especificamente poner el nombre la tabla unicamente para traer todos sus registros.


## Ejemplo de Solicitud
```http
GET /res_ori
```

## Respuesta Exitosa (Código 200 OK)
```json
[
    {
        "ID_Resultado": 1,
        "ID_Estudiante": 2,
        "Fecha_Orientacion": "2020-04-20T00:00:00.000Z",
        "Carrera_Recomendada": "Panista"
    },
    {
        "ID_Resultado": 2,
        "ID_Estudiante": 2,
        "Fecha_Orientacion": "2023-01-15T00:00:00.000Z",
        "Carrera_Recomendada": "Psicología"
    },
    {
        "ID_Resultado": 3,
        "ID_Estudiante": 3,
        "Fecha_Orientacion": "2023-01-20T00:00:00.000Z",
        "Carrera_Recomendada": "Ingeniería Informática"
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