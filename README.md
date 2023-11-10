Thu Nov  9 11:41:00 PM EST 2023

# Angular Ten Second Look

Code: https://github.com/kusl/angulartensecondlook

Deployment: https://github.com/angularten/angularten.github.io

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       1.8Gi       3.1Gi       273Mi        10Gi        13Gi
Swap:          8.0Gi       3.2Mi       8.0Gi
System Storage
2.0G	.
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

Angular: 17.0.2
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
Done in 0.34s.
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
main.c5a18554f5d433b6.js      | main          | 386.74 kB |                93.96 kB
styles.1a025a0459c0eda6.css   | styles        |  85.33 kB |                 8.31 kB
polyfills.2e5507851b47d81d.js | polyfills     |  33.00 kB |                10.64 kB
runtime.a19c91f61fe66ddc.js   | runtime       |   1.06 kB |               603 bytes

| Initial Total | 506.13 kB |               113.51 kB

Build at: 2023-11-10T04:42:03.246Z - Hash: b6ceac803c1e81b7 - Time: 10627ms

Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 6.13 kB with a total of 506.13 kB.


Done in 12.45s.
```
Thu Nov  9 11:42:20 PM EST 2023
Thu Nov  9 11:42:39 PM EST 2023
yarn version v1.22.19
info Current version: 0.0.316
info New version: 0.0.317
Done in 0.12s.
