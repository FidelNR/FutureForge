# Endpoint: `POST /carreras`

Permite ingresar un nuevo registro, al incluir la tabla donde se almacenara.


## Parámetros de URL
- `{nombre_tabla}` (obligatorio): Se requiere especificamente poner el nombre la tabla para poder ingresar el nuevo registro.

## Ejemplo de Solicitud
```http
POST /carreras
```

## Valor de entrada de Solicitud
```json
    {
        "Nombre_Carrera": "Compu",
        "Descripcion": "Diseño de espacios y construcciones"
    }
```

## Respuesta Exitosa (Código 201 OK)
```json
{
    "status": 201, 
    "message": "Created"
}
```

## Respuestas de Errores Posibles
- Código 400 Bad Request:

    ```json
   { 
        "errno": 400, 
        "error": "Bad Request" 
    }
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

- Asegurate de incluir el nombre correcto de la tabla en la solicitud para ingresar un nuevo registro satisfactoriamente.