Tue Nov 29 08:14:10 AM MST 2022

# Angular Twelve

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       2.4Gi       1.4Gi       3.0Mi       3.8Gi       5.0Gi
Swap:          7.7Gi        13Mi       7.6Gi
System Storage
712M	.
```
```bash
yarn run v1.22.19
$ ng version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 15.0.1
Node: 18.12.1
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 15.0.1
... animations, cli, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1500.1
@angular-devkit/build-angular   15.0.1
@angular-devkit/core            15.0.1
@angular-devkit/schematics      15.0.1
@angular/cdk                    15.0.0
@angular/material               15.0.0
@schematics/angular             15.0.1
rxjs                            6.6.7
typescript                      4.8.4
    
Done in 0.99s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.83s.
```
```bash
Browserslist: caniuse-lite is outdated. Please run:
  npx browserslist@latest --update-db
  Why you should do it regularly: https://github.com/browserslist/browserslist#browsers-data-updating
Latest version:     1.0.30001434
Installed versions: 1.0.30001161, 1.0.30001228, 1.0.30001286, 1.0.30001378, 1.0.30001431
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
warning " > codelyzer@6.0.1" has incorrect peer dependency "@angular/compiler@>=2.3.1 <12.0.0 || ^11.0.0-next || ^11.1.0-next || ^11.2.0-next".
warning " > codelyzer@6.0.1" has incorrect peer dependency "@angular/core@>=2.3.1 <12.0.0 || ^11.0.0-next || ^11.1.0-next || ^11.2.0-next".
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
warning " > codelyzer@6.0.1" has incorrect peer dependency "@angular/compiler@>=2.3.1 <12.0.0 || ^11.0.0-next || ^11.1.0-next || ^11.2.0-next".
warning " > codelyzer@6.0.1" has incorrect peer dependency "@angular/core@>=2.3.1 <12.0.0 || ^11.0.0-next || ^11.1.0-next || ^11.2.0-next".
caniuse-lite has been successfully updated

Target browser changes:
- and_chr 96
+ and_chr 107
- and_ff 94
+ and_ff 106
- and_qq 10.4
+ and_qq 13.1
- and_uc 12.12
+ and_uc 13.4
- android 96
+ android 107
- baidu 7.12
+ baidu 13.18
- chrome 96
- chrome 95
- chrome 94
+ chrome 107
+ chrome 106
+ chrome 105
- edge 96
- edge 95
+ edge 107
+ edge 106
+ edge 105
- firefox 95
- firefox 94
+ firefox 107
+ firefox 106
+ firefox 105
- ios_saf 15.0-15.1
- ios_saf 14.0-14.4
- ios_saf 12.2-12.5
+ ios_saf 16.1
+ ios_saf 16.0
+ ios_saf 15.6
+ ios_saf 15.5
- op_mob 64
+ op_mob 72
- opera 82
- opera 81
- opera 80
+ opera 92
+ opera 91
- safari 15.1
- safari 15
- safari 14.1
- safari 13.1
+ safari 16.1
+ safari 16.0
+ safari 15.6
- samsung 15.0
- samsung 14.0
+ samsung 19.0
+ samsung 18.0
```
```bash
yarn run v1.22.19
$ ng build --configuration production
- Generating browser application bundles (phase: setup)...
✔ Browser application bundle generation complete.
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.
- Generating service worker...
✔ Service worker generation complete.

Initial Chunk Files           | Names         |  Raw Size | Estimated Transfer Size
main.5f29b5ea04ebfb5b.js      | main          | 368.42 kB |                89.76 kB
styles.def9c13039205723.css   | styles        |  84.28 kB |                 8.58 kB
polyfills.9a573026e295a22a.js | polyfills     |  36.18 kB |                11.52 kB
runtime.a19c91f61fe66ddc.js   | runtime       |   1.06 kB |               603 bytes

| Initial Total | 489.94 kB |               110.45 kB

Build at: 2022-11-29T15:16:21.233Z - Hash: 664e61f001369d75 - Time: 69330ms

./src/custom-theme.scss - Warning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
Deprecation $weight: Passing a number without unit % (60) is deprecated.

To preserve current behavior: $weight * 1%

More info: https://sass-lang.com/d/function-units

@material/slider/_slider-theme.scss 77:5                                    @use
node_modules/@angular/material/slider/_slider-theme.scss 3:1                @use
node_modules/@angular/material/core/density/private/_all-density.scss 25:1  @forward
@angular/_index.scss 18:1                                                   @use
src/custom-theme.scss 1:1                                                   root stylesheet



Done in 73.21s.
```
