Sat Mar 18 04:22:14 PM MDT 2023

# Angular Ten Second Look

Code: https://github.com/kusl/angulartensecondlook

Deployment: https://github.com/angularten/angularten.github.io

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.6Gi       2.0Gi       120Mi        17Mi       5.5Gi       5.3Gi
Swap:          7.6Gi       1.3Gi       6.4Gi
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
    

Angular CLI: 15.2.2
Node: 18.15.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 15.2.2
... animations, cdk, cli, common, compiler, compiler-cli, core
... forms, material, platform-browser, platform-browser-dynamic
... router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1502.2
@angular-devkit/build-angular   15.2.2
@angular-devkit/core            15.2.2
@angular-devkit/schematics      15.2.2
@schematics/angular             15.2.2
rxjs                            6.6.7
typescript                      4.8.4
    
Done in 1.58s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 1.06s.
```
```bash
Latest version:     1.0.30001467
Installed version:  1.0.30001466
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
main.6da662652d3a1028.js      | main          | 391.44 kB |                95.27 kB
styles.b0fa45db8dcfcdb4.css   | styles        |  89.01 kB |                 8.80 kB
polyfills.fe933134870e5adb.js | polyfills     |  36.19 kB |                11.55 kB
runtime.a19c91f61fe66ddc.js   | runtime       |   1.06 kB |               603 bytes

| Initial Total | 517.70 kB |               116.20 kB

Build at: 2023-03-18T22:25:31.419Z - Hash: a9edf2855a767ae7 - Time: 89142ms

Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 17.70 kB with a total of 517.70 kB.


Done in 94.81s.
```
Sat Mar 18 04:27:17 PM MDT 2023
Sat Mar 18 04:27:36 PM MDT 2023
yarn version v1.22.19
info Current version: 0.0.118
info New version: 0.0.119
Done in 0.32s.
