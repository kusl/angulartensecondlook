Tue Mar 28 08:47:54 PM MDT 2023

# Angular Ten Second Look

Code: https://github.com/kusl/angulartensecondlook

Deployment: https://github.com/angularten/angularten.github.io

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.6Gi       3.1Gi       1.4Gi       104Mi       3.2Gi       4.1Gi
Swap:          7.6Gi        28Mi       7.6Gi
System Storage
1.8G	.
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
    

Angular CLI: 15.2.4
Node: 18.15.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 15.2.4
... animations, cli, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1502.4
@angular-devkit/build-angular   15.2.4
@angular-devkit/core            15.2.4
@angular-devkit/schematics      15.2.4
@angular/cdk                    15.2.3
@angular/material               15.2.3
@schematics/angular             15.2.4
rxjs                            6.6.7
typescript                      4.8.4
    
Done in 1.32s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.85s.
```
```bash
Latest version:     1.0.30001472
Installed version:  1.0.30001469
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
main.03c60d1ea0d6e2bf.js      | main          | 391.48 kB |                95.20 kB
styles.b0fa45db8dcfcdb4.css   | styles        |  89.01 kB |                 8.80 kB
polyfills.fe933134870e5adb.js | polyfills     |  36.19 kB |                11.55 kB
runtime.a19c91f61fe66ddc.js   | runtime       |   1.06 kB |               603 bytes

| Initial Total | 517.74 kB |               116.14 kB

Build at: 2023-03-29T02:50:12.371Z - Hash: b4786b4f2110a4a7 - Time: 71412ms

Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 17.74 kB with a total of 517.74 kB.


Done in 75.81s.
```
Tue Mar 28 08:51:29 PM MDT 2023
Tue Mar 28 08:51:48 PM MDT 2023
yarn version v1.22.19
info Current version: 0.0.122
info New version: 0.0.123
Done in 0.22s.
