Thu Nov  9 06:18:55 AM EST 2023

# Angular Ten Second Look

Code: https://github.com/kusl/angulartensecondlook

Deployment: https://github.com/angularten/angularten.github.io

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       4.9Gi       1.1Gi       593Mi       9.3Gi       9.5Gi
Swap:          8.0Gi       1.4Gi       6.6Gi
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
    

Angular CLI: 17.0.0
Node: 20.9.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 17.0.1
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1700.0
@angular-devkit/build-angular   17.0.0
@angular-devkit/core            17.0.0
@angular-devkit/schematics      17.0.0
@angular/cdk                    17.0.0
@angular/cli                    17.0.0
@angular/material               16.2.12
@schematics/angular             17.0.0
rxjs                            6.6.7
typescript                      5.2.2
zone.js                         0.14.2
    
Done in 0.53s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.39s.
```
```bash
Latest version:     1.0.30001561
Installed version:  1.0.30001561
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
main.bd93d8a612798d9d.js      | main          | 386.76 kB |                94.06 kB
styles.1a025a0459c0eda6.css   | styles        |  85.33 kB |                 8.31 kB
polyfills.2e5507851b47d81d.js | polyfills     |  33.00 kB |                10.64 kB
runtime.a19c91f61fe66ddc.js   | runtime       |   1.06 kB |               603 bytes

| Initial Total | 506.15 kB |               113.61 kB

Build at: 2023-11-09T11:19:57.652Z - Hash: ac6e78f7266ab260 - Time: 11159ms

Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 6.15 kB with a total of 506.15 kB.


Done in 12.92s.
```
Thu Nov  9 06:20:14 AM EST 2023
Thu Nov  9 06:20:33 AM EST 2023
yarn version v1.22.19
info Current version: 0.0.311
info New version: 0.0.312
Done in 0.12s.
