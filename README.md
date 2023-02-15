Tue Feb 14 06:30:58 PM MST 2023

# Angular Ten Second Look

Code: https://github.com/kusl/angulartensecondlook

Deployment: https://github.com/angularten/angularten.github.io

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       3.4Gi       1.5Gi        81Mi       2.7Gi       3.9Gi
Swap:          7.7Gi       1.0Mi       7.7Gi
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
    

Angular CLI: 15.1.1
Node: 18.14.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 15.1.0
... animations, cdk, common, compiler, compiler-cli, core, forms
... material, platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1501.1
@angular-devkit/build-angular   15.1.1
@angular-devkit/core            15.1.1
@angular-devkit/schematics      15.1.1
@angular/cli                    15.1.1
@schematics/angular             15.1.1
rxjs                            6.6.7
typescript                      4.8.4
    
Done in 1.27s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.84s.
```
```bash
Latest version:     1.0.30001452
Installed version:  1.0.30001445
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
main.0de9acea2314bbbd.js      | main          | 387.03 kB |                94.08 kB
styles.aea5a6118342150e.css   | styles        |  87.30 kB |                 8.71 kB
polyfills.239772369c73808a.js | polyfills     |  36.16 kB |                11.48 kB
runtime.a19c91f61fe66ddc.js   | runtime       |   1.06 kB |               603 bytes

| Initial Total | 511.56 kB |               114.85 kB

Build at: 2023-02-15T01:33:24.816Z - Hash: 30c46550be6eccbc - Time: 66787ms

Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 11.56 kB with a total of 511.56 kB.


Done in 71.00s.
```
Tue Feb 14 06:34:41 PM MST 2023
Tue Feb 14 06:35:01 PM MST 2023
yarn version v1.22.19
info Current version: 0.0.105
info New version: 0.0.106
Done in 0.32s.
