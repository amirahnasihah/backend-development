# Express application generator

Use the application generator tool, express-generator, to quickly create an application skeleton.

You can run the application generator with the npx command (available in Node.js 8.2.0).

```shell
$ npx express-generator
```

By default, this installed the view engine is Jade.

## Run the application generator with command options

```shell
Usage: express [options] [dir]
```

To use EJS/Pug as view engine support:

```shell
$ npx express-generator --ejs --view=ejs

$ npx express-generator --pug --view=pug
```

## Directory structure

The generated app has the following directory structure:

```shell
.
├── app.js
├── bin
│   └── www
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── error.pug
    ├── index.pug
    └── layout.pug

7 directories, 9 files
```