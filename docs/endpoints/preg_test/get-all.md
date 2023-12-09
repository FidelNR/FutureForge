# Endpoint: `GET /preg_test`

Permite obtener todos los registro la tabla.


## Parámetros de URL
- `{nombre_tabla}` (obligatorio): Se requiere especificamente poner el nombre la tabla unicamente para traer todos sus registros.


## Ejemplo de Solicitud
```http
GET /preg_test
```

## Respuesta Exitosa (Código 200 OK)
```json
[
{
        "ID_Pregunta": 1,
        "Texto_Pregunta": "¿Prefieres aprender de forma visual?",
        "Opcion_A": "Sí",
        "Opcion_B": "No",
        "Opcion_C": "A veces",
        "Opcion_D": "No sé"
    },
    {
        "ID_Pregunta": 2,
        "Texto_Pregunta": "¿Prefieres cantar o no?",
        "Opcion_A": "Sí",
        "Opcion_B": "No",
        "Opcion_C": "A veces",
        "Opcion_D": "No guta"
    },
    {
        "ID_Pregunta": 3,
        "Texto_Pregunta": "¿Prefieres comer afuera o adentro?",
        "Opcion_A": "Sí",
        "Opcion_B": "No",
        "Opcion_C": "A veces",
        "Opcion_D": "No tengo idea"
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