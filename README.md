Thu Apr  6 09:25:59 AM MDT 2023

# Angular Ten Second Look

Code: https://github.com/kusl/angulartensecondlook

Deployment: https://github.com/angularten/angularten.github.io

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.6Gi       2.9Gi       1.5Gi        79Mi       3.2Gi       4.4Gi
Swap:          7.6Gi       318Mi       7.3Gi
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
    

Angular CLI: 15.2.5
Node: 18.15.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 15.2.6
... animations, cdk, common, compiler, compiler-cli, core, forms
... material, platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1502.5
@angular-devkit/build-angular   15.2.5
@angular-devkit/core            15.2.5
@angular-devkit/schematics      15.2.5
@angular/cli                    15.2.5
@schematics/angular             15.2.5
rxjs                            6.6.7
typescript                      4.8.4
    
Done in 1.14s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.84s.
```
```bash
Latest version:     1.0.30001474
Installed version:  1.0.30001474
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
main.537b89f3024007a5.js      | main          | 391.64 kB |                95.20 kB
styles.1e8256daaa2f640d.css   | styles        |  89.65 kB |                 8.81 kB
polyfills.fe933134870e5adb.js | polyfills     |  36.19 kB |                11.55 kB
runtime.a19c91f61fe66ddc.js   | runtime       |   1.06 kB |               603 bytes

| Initial Total | 518.55 kB |               116.15 kB

Build at: 2023-04-06T15:26:46.164Z - Hash: a85d3d5fae6ee84d - Time: 25043ms

Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 18.55 kB with a total of 518.55 kB.


Done in 28.74s.
```
Thu Apr  6 09:27:22 AM MDT 2023
Thu Apr  6 09:27:42 AM MDT 2023
yarn version v1.22.19
info Current version: 0.0.126
info New version: 0.0.127
Done in 0.22s.
