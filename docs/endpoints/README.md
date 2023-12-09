# Documentación de la API RESTful

Bienvenido a la documentación de la API. A continuación, se presenta una lista
de endpoints disponibles con enlaces a sus respectivas documentaciones detalladas.

## Descripción General de Endpoints

| Recurso                    | Descripción |
| -------------------------- | ----------- |
| [`GET /carreras/{id}`](./carreras/get-id.md)          | Obtiene información detallada sobre una carrera en especifico. |
| [`GET /carreras`](./carreras/get-all.md)   | Recupera la lista de todas las carreras disponibles. |
| [`POST /carreras`](./carreras/post.md)     | Ingresa registros a esta tabla en formato JSON. |
| [`PATCH /carreras/{id}`](./carreras/patch.md)    | Actualiza un registro especifico existente de la tabla al indicarle la llave primaria del registro. |
| [`GET /estudiantes/{id}`](./estudiantes/get-id.md) | Obtiene la información especifica de un estudiante. |
| [`GET /estudiantes`](./estudiantes/get-all.md) | Recupera la lista de todos los estudiantes que han respondido. |
| [`POST /estudiantes`](./estudiantes/post.md)   | Ingresa registros a esta tabla en formato JSON. |
| [`PATCH /estudiantes/{id}`](./estudiantes/patch.md)    | Actualiza un registro especifico existente de la tabla al indicarle la llave primaria del registro. |
| [`GET /preg_test/{id}`](./preg_test/get-id.md)   | Obtiene la información de una de las preguntas especificada. |
| [`GET /preg_test`](./preg_test/get-all.md)   | Recupera la lista de todas las preguntas del test. |
| [`POST /preg_test`]     | Ingresa registros a esta tabla en formato JSON. |
| [`PATCH /preg_test/{id}`]     | Actualiza un registro especifico existente de la tabla al indicarle la llave primaria del registro. |
| [`GET /resp_test/{id}`](./endpoints/get-temas-id-libros.md)   | Obtiene la información de una de las respuestas especificada del test. |
| `GET /resp_test`   | Obtiene la información de todas las respuestas del test. |
| `POST /resp_test`     | Ingresa registros a esta tabla en formato JSON. |
| `PATCH /resp_test`     | Actualiza un registro especifico existente de la tabla al indicarle la llave primaria del registro. |
| [`GET /resp_apre/{id}`](./endpoints/get-temas-id-libros.md)   | Obtiene el resultado especifico del test de tipos de conocimientos de un usuario. |
| `GET /resp_apre`   | Obtiene el resultado de todos los test de tipos de conocimientos de un usuario. |
| `POST /resp_test`     | Ingresa registros a esta tabla en formato JSON. |
| `PATCH /resp_test`     | Actualiza un registro especifico existente de la tabla al indicarle la llave primaria del registro. |
| [`GET /res_ori/{id}`](./endpoints/get-temas-id-libros.md)   | Obtiene el resultado especifico del test de orientacion vocacional de un usuario. |
| `GET /res_ori`     | Obtiene el resultado de todos los test de orientacion vocacional de un usuario. |
| `POST /resp_test`     | Ingresa registros a esta tabla en formato JSON. |
| `PATCH /resp_test`     | Actualiza un registro especifico existente de la tabla al indicarle la llave primaria del registro. |