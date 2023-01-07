Sat Jan  7 07:26:26 AM MST 2023

# Angular Ten Second Look

Code: https://github.com/kusl/angulartensecondlook

Deployment: https://github.com/angularten/angularten.github.io

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       2.4Gi       882Mi       3.0Mi       4.4Gi       5.0Gi
Swap:          7.7Gi          0B       7.7Gi
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
Node: 18.13.0
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
    
Done in 1.27s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.90s.
```
```bash
Latest version:     1.0.30001442
Installed version:  1.0.30001434
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
- and_chr 107
+ and_chr 108
- and_ff 106
+ and_ff 107
- android 107
+ android 108
- chrome 106
- chrome 105
+ chrome 108
- edge 106
- edge 105
+ edge 108
- firefox 106
- firefox 105
+ firefox 108
+ ios_saf 16.2
- safari 16.0
+ safari 16.2
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
main.c78c5e1add7f1c0d.js      | main          | 386.66 kB |                93.86 kB
styles.def9c13039205723.css   | styles        |  84.28 kB |                 8.58 kB
polyfills.9a573026e295a22a.js | polyfills     |  36.18 kB |                11.52 kB
runtime.a19c91f61fe66ddc.js   | runtime       |   1.06 kB |               603 bytes

| Initial Total | 508.17 kB |               114.55 kB

Build at: 2023-01-07T14:29:05.559Z - Hash: 24df2d34a42d70d1 - Time: 69427ms

Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 8.17 kB with a total of 508.17 kB.


Done in 73.82s.
```
Sat Jan  7 07:30:29 AM MST 2023
Sat Jan  7 07:30:48 AM MST 2023
yarn version v1.22.19
info Current version: 0.0.99
info New version: 0.0.100
Done in 0.23s.
