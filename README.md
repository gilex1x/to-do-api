# to-do-api
Este proyecto le entregara una base inicial para crear un proyecto node js con typescript como lenguaje de programación.

## Empezando 🚀 
Esta guia tiene como fin entregar al usuario el paso a paso para llevar a cabo la ejecución del proyecto to-do-api. Estas instrucciones le proporcionarán una copia del proyecto en funcionamiento en su máquina local para fines de desarrollo y prueba.

## Prerequisitos 🗒️

Para la ejecución del proyecto serán necesarias las siguientes herramientas.

``` 
  * Git
  * Node Js
  * Insomnia
```

### Instalación ⛏️ 

Una serie de ejemplos paso a paso que le indican cómo ejecutar un entorno de desarrollo.

1. Clonar el proyecto
    ```sh
        $ git clone (https://github.com/NATALIAGJ/to-do-api.git)
    ```
2. Ir al folder to-do-api
    ```sh
        $ cd to-do-api
    ```
4. Escriba y ejecute el siguiente comando
    ```sh
        [to-do-api] $ npm install
    ```
5. Archivos necesarios para configurar el entorno de desarrollo:
        .
        └── .env

6. Se debe crear el archivo .env y es una copia del archivo .env-example con los valores reales.
7. Compilar el typescript.
    ```sh
        [to-do-api] $  npm run tsc
    ```

8. Para ejecutar el aplicativo en desarrollo escriba los siguientes comando.
    ```sh
        [to-do-api] $  npm run watch
    ```

# Esquema de archivos 📁

    Ditribución de alto nivel de las carpetas

    .
    ├── dist
    ├── docs
    ├── node_modules 
    ├── src
    ├── .env
    ├── .env-example
    ├── .gitignore
    ├── package.json
    ├── package-lock.json
    ├── README.md
    ├── tsconfig.json
    └── tslint.json

    
## Construcción:  🔩⚙️

* [Express](https://expressjs.com/es/) - Framework usado
* [TypeScript](https://www.typescriptlang.org/) - Lenguaje de programación

## Versionamiento

Se uso '/v1' como versión.

## Contribuyentes 👩🏻‍🚒

* **Natalia Gonzalez** - *Dev* - [NATALIAGJ](https://github.com/NATALIAGJ)
