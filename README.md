# Config ExpressJS Server connect to MongoDB and GraphQL with TypeScript and Apollo Server

Config ExpressTS, use TypeScript language. Connect to MongoDB and use GraphQL with Apollo Server

## Run Server

1. Dowload project from git and open folder

```bash
cd ExpressTS_GraphQL_ApolloServer_MongoDB_TypeScript
```

2. Install dependencies

```bash
npm i
```
- Or you can install the latest package but i will share in below

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

## Package Install

- In this moment i make this project. The most recent version of `type-graphql` only works with `graphql` verison `^15.5.0`. Almost all newest versions of `@apollo/server`and graphql-related libraries, on the other hand, only support `graphql` version `>=16`. Fortunately, a newer version of `type-graphq` (version `2.0.0`), which is still in beta, is available under the `next` tag version in `npm`. To install it, first uninstall `type-graphql` and then reinstall it specifying the next tag:

```bash
npm uninstall type-graphql
npm install type-graphql@next
```

## How to know what version fix together

1. type-graphql

> First you can check [release of type-graphql](https://github.com/MichalLytek/type-graphql/releases) and check latest version

> In my case, i check [this](https://github.com/MichalLytek/type-graphql/releases/tag/v1.2.0-rc.1) 
>> update graphql-js peer dependency to ^15.5.0




