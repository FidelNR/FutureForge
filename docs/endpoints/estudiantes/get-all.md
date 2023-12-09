# Endpoint: `GET /estudiantes`

Permite obtener todos los registro la tabla.


## Parámetros de URL
- `{nombre_tabla}` (obligatorio): Se requiere especificamente poner el nombre la tabla unicamente para traer todos sus registros.


## Ejemplo de Solicitud
```http
GET /estudiantes
```

## Respuesta Exitosa (Código 200 OK)
```json
[
        {
        "ID_Estudiante": 1,
        "Nombre": "Juan",
        "Apellido": "Perez",
        "Edad": 20,
        "Genero": "Masculino"
    },
    {
        "ID_Estudiante": 2,
        "Nombre": "Karla",
        "Apellido": "Ruiz",
        "Edad": 22,
        "Genero": "Femenino"
    },
    {
        "ID_Estudiante": 3,
        "Nombre": "Carlos",
        "Apellido": "Rodriguez",
        "Edad": 19,
        "Genero": "Masculino"
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