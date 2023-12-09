# Endpoint: `GET /carreras`

Permite obtener todos los registro la tabla.


## Parámetros de URL
- `{nombre_tabla}` (obligatorio): Se requiere especificamente poner el nombre la tabla unicamente para traer todos sus registros.


## Ejemplo de Solicitud
```http
GET /carreras
```

## Respuesta Exitosa (Código 200 OK)
```json
[
    {
        "ID_Carrera": 1,
        "Nombre_Carrera": "Compu",
        "Descripcion": "Diseño de espacios y construcciones"
    },
    {
        "ID_Carrera": 2,
        "Nombre_Carrera": "Psicología",
        "Descripcion": "Estudio del comportamiento humano"
    },
    {
        "ID_Carrera": 3,
        "Nombre_Carrera": "Arquitectura",
        "Descripcion": "Diseño de espacios y construcciones"
    }
]
```

## Respuestas de Errores Posibles
- Código 400 Not Found:

    ```
    No se puede OBTENER /carrera
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