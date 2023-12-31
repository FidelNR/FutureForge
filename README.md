# API RESTful con Node.js

Orientador vocacional que aplica un test y arroja los resultados de posibles profesiones que le pueden servir a la persona que lo responda y deductor de tipo de aprendizaje dominantes y sugiere resultados sobre que actividades hacer para mejorar.

## Tabla de contenido

- [API RESTful con Node.js](#api-restful-con-nodejs)
  - [Tabla de contenido](#tabla-de-contenido)
  - [Requisitos de instalación](#requisitos-de-instalación)
  - [Instrucciones para la instalación](#instrucciones-para-la-instalación)
  - [Documentación detallada](#documentación-detallada)
  - [Enlaces externos](#enlaces-externos)

## Requisitos de instalación

Asegúrate de tener instalado y configurado Docker antes de comenzar.

- [Docker](https://www.docker.com)

## Instrucciones para la instalación

1. Clonar el repositorio en la máquina local:
   
   ```sh
   git clone https://github.com/FidelNR/FutureForge.git
   ```

2. Navegar al directorio del proyecto:
   
   ```sh
   cd FutureForge
   ```

3. Ejecutar el siguiente comando para iniciar los contenedores:

    ```sh
    docker-compose up -d
    ```

    > **IMPORTANTE**
    >
    > Debe estar iniciado el Docker engine para ejecutar el comando anterior,
    > si no lo está, se devolverá un mensaje de error indicando que no se
    > encontró el docker daemon.

4. La API estará disponible en `http://localhost:3000`.

## Documentación detallada

Para obtener información detallada sobre los endpoints y cómo utilizar la API,
consulta la [documentación detallada](./docs/endpoints/README.md).

## Enlaces externos

- [Node.js](https://www.nodejs.org)
- [Docker](https://www.docker.com)