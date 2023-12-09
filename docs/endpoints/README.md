# Documentación de la API RESTful

Bienvenido a la documentación de la API. A continuación, se presenta una lista
de endpoints disponibles con enlaces a sus respectivas documentaciones detalladas.

## Descripción General de Endpoints

### Carreras
| Recurso                    | Descripción |
| -------------------------- | ----------- |
| [`GET /carreras/{id}`](./carreras/get-id.md)          | Obtiene información detallada sobre una carrera en especifico. |
| [`GET /carreras`](./carreras/get-all.md)   | Recupera la lista de todas las carreras disponibles. |
| [`POST /carreras`](./carreras/post.md)     | Ingresa registros a esta tabla en formato JSON. |
| [`PATCH /carreras/{id}`](./carreras/patch.md)    | Actualiza un registro especifico existente de la tabla al indicarle la llave primaria del registro. |

### Estudiantes
| Recurso                    | Descripción |
| -------------------------- | ----------- |
| [`GET /estudiantes/{id}`](./estudiantes/get-id.md) | Obtiene la información especifica de un estudiante. |
| [`GET /estudiantes`](./estudiantes/get-all.md) | Recupera la lista de todos los estudiantes que han respondido. |
| [`POST /estudiantes`](./estudiantes/post.md)   | Ingresa registros a esta tabla en formato JSON. |
| [`PATCH /estudiantes/{id}`](./estudiantes/patch.md)    | Actualiza un registro especifico existente de la tabla al indicarle la llave primaria del registro. |

### Preguntas del test
| Recurso                    | Descripción |
| -------------------------- | ----------- |
| [`GET /preg_test/{id}`](./preg_test/get-id.md)   | Obtiene la información de una de las preguntas especificada. |
| [`GET /preg_test`](./preg_test/get-all.md)   | Recupera la lista de todas las preguntas del test. |
| [`POST /preg_test`](./preg_test/post.md)    | Ingresa registros a esta tabla en formato JSON. |
| [`PATCH /preg_test/{id}`](./preg_test/patch.md)     | Actualiza un registro especifico existente de la tabla al indicarle la llave primaria del registro. |

### Respuestas del test
| Recurso                    | Descripción |
| -------------------------- | ----------- |
| [`GET /resp_test/{id}`](./resp_test/get-id.md)   | Obtiene la información de una de las respuestas especificada del test. |
| [`GET /resp_test`](./resp_test/get-all.md)   | Obtiene la información de todas las respuestas del test. |
| [`POST /resp_test`](./resp_test/post.md)     | Ingresa registros a esta tabla en formato JSON. |
| [`PATCH /resp_test/{id}`](./resp_test/patch.md)     | Actualiza un registro especifico existente de la tabla al indicarle la llave primaria del registro. |

### Resultados de tipo de aprendizaje
| Recurso                    | Descripción |
| -------------------------- | ----------- |
| [`GET /res_apre/{id}`](./res_apre/get-id.md)   | Obtiene el resultado especifico del test de tipos de conocimientos de un usuario. |
| [`GET /res_apre`](./res_apre/get-all.md)   | Obtiene el resultado de todos los test de tipos de conocimientos de un usuario. |
| [`POST /res_apre`](./res_apre/post.md)     | Ingresa registros a esta tabla en formato JSON. |
| [`PATCH /res_apre/{id}`](./res_apre/patch.md)     | Actualiza un registro especifico existente de la tabla al indicarle la llave primaria del registro. |
### Respuestas de orientador vocacional
| Recurso                    | Descripción |
| -------------------------- | ----------- |
| [`GET /res_ori/{id}`](./res_ori/get-id.md)   | Obtiene el resultado especifico del test de orientacion vocacional de un usuario. |
| [`GET /res_ori`](./res_ori/get-all.md)      | Obtiene el resultado de todos los test de orientacion vocacional de un usuario. |
| [`POST /res_ori`](./res_ori/post.md)      | Ingresa registros a esta tabla en formato JSON. |
| [`PATCH /res_ori/{id}`](./res_ori/patch.md)      | Actualiza un registro especifico existente de la tabla al indicarle la llave primaria del registro. |