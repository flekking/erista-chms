const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            "@erista": __dirname + "/resources/js"
        }
    }
    })
    .js('resources/js/app.js', 'public/js')
    .react()
    .postCss('resources/css/app.css', 'public/css', [
        require('autoprefixer'),
        require('postcss-import'),
        require('postcss-nested'),
        require('tailwindcss'),
    ])
    .disableNotifications();
