Tue Nov 29 08:22:15 AM MST 2022

# Angular Ten Second Look

Code: https://github.com/kusl/angulartensecondlook

Deployment: https://github.com/angularten/angularten.github.io

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       2.3Gi       1.9Gi       3.0Mi       3.4Gi       5.1Gi
Swap:          7.7Gi        49Mi       7.6Gi
System Storage
1.1G	.
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
    
Done in 0.98s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.85s.
```
```bash
Latest version:     1.0.30001434
Installed version:  1.0.30001434
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
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

Build at: 2022-11-29T15:23:06.248Z - Hash: 664e61f001369d75 - Time: 26041ms

./src/custom-theme.scss - Warning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
Deprecation $weight: Passing a number without unit % (60) is deprecated.

To preserve current behavior: $weight * 1%

More info: https://sass-lang.com/d/function-units

@material/slider/_slider-theme.scss 77:5                                    @use
node_modules/@angular/material/slider/_slider-theme.scss 3:1                @use
node_modules/@angular/material/core/density/private/_all-density.scss 25:1  @forward
@angular/_index.scss 18:1                                                   @use
src/custom-theme.scss 1:1                                                   root stylesheet



Done in 29.57s.
```
