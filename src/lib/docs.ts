import fs from 'fs'

const expressJSDocSwagger = require('express-jsdoc-swagger');

class SwaggerDoc {
  async generateDocFile (app: any) {
    const options = {
        info: {
          version: '1.0.0',
          title: 'Example Api',
          license: {
            name: 'MIT',
          },
        },
        security: {
          BasicAuth: {
            type: 'http',
            scheme: 'basic',
          },
        },
        filesPattern: './**/*.ts', // Glob pattern to find your jsdoc files
        swaggerUIPath: 'htttp://localhost:8080', // SwaggerUI will be render in this url. Default: '/v1/api-docs'
        baseDir: __dirname,
    };

    const listener = expressJSDocSwagger(app)(options);

    // Event emitter API
    listener.on('error', (error: any) => {
        console.error(`Error: ${error}`);
    });

    listener.on('process', (entity: any, swaggerObject: any) => {
        console.log(`entity: ${entity}`);
        console.log('swaggerObject');
        console.log(swaggerObject);
    });

    listener.on('finish', (swaggerObject: any) => {
        console.log('Finish');
        console.log(swaggerObject);
        console.log(swaggerObject.paths);
        fs.writeFileSync('swagger.json', JSON.stringify(swaggerObject))
    });

    return
  }

}

export default new SwaggerDoc()
