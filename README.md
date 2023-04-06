# Config ExpressJS Server connect to MongoDB with TypeScript

Build server NodeJS with ExpressJS framework, I use TypeScript language for this project. The server will connect to MongoDB. I will use @typegoose/typegoose to write schema with typescript

## Run Server

1. Dowload project from git and open folder

```bash
cd ExpressTS_Server_Config
```

2. Install dependencies

- You can install all dependencies like that:

```bash
npm i
```
- Or you can install the latest package with this:

```bash
npm install express dotenv mongoose
```

```bash
npm install --save-dev typescript ts-node-dev @types/node @types/express nodemon rimraf concurrently @babel/core @babel/node @babel/preset-env @typegoose/typegoose
```

3. Run server
```bash
npm run dev
```

## Config package and command

1. Config tsconfig.json

```json
{
    "compilerOptions": {
        "target": "ES2022",
        // "module": "NodeNext",
        "lib": [
            "dom",
            "es6",
            "es2017",
            "esnext.asynciterable"
        ],
        "skipLibCheck": true,
        "sourceMap": false,
        "outDir": "./dist",
        "moduleResolution": "node",
        "removeComments": true,
        "noImplicitAny": true,
        "strictNullChecks": true,
        "strictFunctionTypes": true,
        "noImplicitThis": true,
        "noUnusedLocals": true,
        "noUnusedParameters": true,
        "noImplicitReturns": true,
        "noFallthroughCasesInSwitch": true,
        "allowSyntheticDefaultImports": true,
        "esModuleInterop": true,
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "resolveJsonModule": true,
        "baseUrl": "."
    },
    "exclude": [
        "node_modules"
    ],
    "include": [
        "./src/**/*.ts"
    ]
}
```

> With this server I don't use option module. When we don't use this option. tsc will compile to `.js` file with `import` syntax. But NodeJS can't run `.js` file with `import` syntax. Instead of that, we use babel-node to run that file.

2. `npm run dev`

```json
"dev": "ts-node-dev --respawn --transpile-only ./src/index.ts",
```

> During coding and develop, maybe we don't need to compile and run `.js` file. So we can use `ts-node-dev` to run `.ts` file directly without compile.


