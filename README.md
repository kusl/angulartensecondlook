Fri Apr 21 03:15:12 AM MDT 2023

# Angular Ten Second Look

Code: https://github.com/kusl/angulartensecondlook

Deployment: https://github.com/angularten/angularten.github.io

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           3.7Gi       1.4Gi       1.2Gi        58Mi       1.2Gi       2.0Gi
Swap:          3.7Gi       514Mi       3.2Gi
System Storage
1.5G	.
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
    

Angular CLI: 15.2.6
Node: 18.16.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 15.2.7
... animations, cdk, common, compiler, compiler-cli, core, forms
... material, platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1502.6
@angular-devkit/build-angular   15.2.6
@angular-devkit/core            15.2.6
@angular-devkit/schematics      15.2.6
@angular/cli                    15.2.6
@schematics/angular             15.2.6
rxjs                            6.6.7
typescript                      4.8.4
    
Done in 1.31s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.84s.
```
```bash
Latest version:     1.0.30001481
Installed version:  1.0.30001480
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
main.16ca87bc2ae038c5.js      | main          | 391.54 kB |                95.19 kB
styles.1e8256daaa2f640d.css   | styles        |  89.65 kB |                 8.81 kB
polyfills.fe933134870e5adb.js | polyfills     |  36.19 kB |                11.55 kB
runtime.a19c91f61fe66ddc.js   | runtime       |   1.06 kB |               603 bytes

| Initial Total | 518.45 kB |               116.13 kB

Build at: 2023-04-21T09:17:25.239Z - Hash: 280e35f8c086512f - Time: 54407ms

Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 18.45 kB with a total of 518.45 kB.


Done in 58.73s.
```
