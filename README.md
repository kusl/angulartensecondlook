Mon Oct 16 11:20:12 PM EDT 2023

# Angular Ten Second Look

Code: https://github.com/kusl/angulartensecondlook

Deployment: https://github.com/angularten/angularten.github.io

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       1.4Gi        10Gi       237Mi       2.9Gi        13Gi
Swap:          8.0Gi          0B       8.0Gi
System Storage
1.6G	.
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
    

Angular CLI: 16.2.6
Node: 18.18.2
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.2.9
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1602.6
@angular-devkit/build-angular   16.2.6
@angular-devkit/core            16.2.6
@angular-devkit/schematics      16.2.6
@angular/cdk                    16.2.8
@angular/cli                    16.2.6
@angular/material               16.2.8
@schematics/angular             16.2.6
rxjs                            6.6.7
typescript                      5.0.4
zone.js                         0.13.0
    
Done in 0.58s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.47s.
```
```bash
Latest version:     1.0.30001549
Installed version:  1.0.30001549
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
main.b301105063200a80.js      | main          | 385.80 kB |                93.58 kB
styles.1a025a0459c0eda6.css   | styles        |  85.33 kB |                 8.31 kB
polyfills.656f13ad4450dfbe.js | polyfills     |  33.04 kB |                10.63 kB
runtime.a19c91f61fe66ddc.js   | runtime       |   1.06 kB |               603 bytes

| Initial Total | 505.22 kB |               113.11 kB

Build at: 2023-10-17T03:20:44.586Z - Hash: a5f880b4ba3ee44f - Time: 12581ms

Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 5.22 kB with a total of 505.22 kB.


Done in 14.59s.
```
Mon Oct 16 11:21:03 PM EDT 2023
Mon Oct 16 11:21:22 PM EDT 2023
yarn version v1.22.19
info Current version: 0.0.264
info New version: 0.0.265
Done in 0.12s.
