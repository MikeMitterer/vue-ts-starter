# VUE Typescript with Babel Starter
> [Live](http://vuetsstarter.example.mikemitterer.at) | [Home GitHub](https://github.com/MikeMitterer/vue-ts-starter)

Basically this App has three components: AppHeader, AppFooter, HelloWorld (for testing)
and two views: Home + About.

In `.env` is the title define - check it out.

'Click' modifies and displays text in the lower right

The cat on the top right is add statically, the Lamborghini is added dynamically. (AppHeader component)

For State Management I added a "CounterModule" (Vuex)

![Screenshot](doc/screenshot.png)

## Babel 7, TypeScript 4.5 , Jest 24 + ES6 Modules
> This example work with node-modules in ES6 format!

### Important

   - Use yarns [Selective dependency resolutions](https://yarnpkg.com/en/docs/selective-version-resolutions)

package.json:

    {
        ...
        // Overwrite VUE's jest dependencies
        
        "resolutions": {
            "@vue/cli-plugin-unit-jest/jest": "24",
            "@vue/cli-plugin-unit-jest/babel-jest": "24"
        }
    }   

Rename `.babelrc` to `babel.config.js`

jest.config.js: (Here I'm using my own, private!!! @mmit/communication-module )

    module.exports = {
        ...

        // Use direce-node-path to your transformers        
        transform: {
            '\\.jsx?$': '<rootDir>/node_modules/babel-jest',
    
            '^.+\\.vue$': '<rootDir>/node_modules/vue-jest',
    
            '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    
            "^.+\\.(ts|tsx)$": "<rootDir>/node_modules/ts-jest",
        },

                    
        // A MUST! if the following module is in ES6-Format!!!!
        //
        transformIgnorePatterns: [
          "<rootDir>/node_modules/(?!@mmit\/communication)"
        ],
    
    }
  
As for now (28. May 2019) you have to add `vue-jest@beta` to you devDependencies

    yarn add vue-jest@beta -D
    yarn add ts-jest@24 -D
     
## Environment-Vars and Template-Vars

These vars are set in `vue.config.js`

If you want to see how you can use e.g. `process.env.VUE_APP_VERSION` check out `AppFooter.vue`

`/public/index.html` tests if VUE_APP_DEV_MODE is set to true:

```html
...
<html lang="en" <%if(VUE_APP_DEV_MODE){%>
    devmode="true"<%}%>> ...
</html>
```

## Install

    # Clone Repo
    git clone https://github.com/MikeMitterer/vue-ts-starter <your new repo>

    # Remove original .git-dir
    cd <your new repo> && rm -rf .git

    # Change project name
    sed -i'' -e 's/@mmit\/vuetsstarter/your-project-name/g' package.json

    # e.g.
    sed -i'' -e 's/@mmit\/vuetsstarter/@mmit\/<your new repo>/g' package.json

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn run start
```

### Compiles and minifies for production

```
yarn run build
```

### Run your tests

```
yarn run test
```

### Lints and fixes files

```
yarn run lint
```

### Run your unit tests

```
yarn run test:unit
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
