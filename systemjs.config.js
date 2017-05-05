/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app : 'ScriptsApp', // 'dist',
            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
           
            '@angular':                   'node_modules/@angular',
             'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
            'rxjs':                       'node_modules/rxjs',
             'NG2_parallax':               'node_modules/ang2-parallzx',

            // other libraries
            'rxjs': 'npm:rxjs',
        },


        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {main: 'ng2-parallax-scroll.umd.js', defaultExtension: 'js' },
            'app':                        { main: 'main.js',  defaultExtension: 'js' },
            'rxjs':                       { defaultExtension: 'js' },
            'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
            'NG2_parallax':               { defaultExtension: 'js' },
                   
        }
    });
})(this);