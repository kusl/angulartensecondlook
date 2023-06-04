Sat Jun  3 10:53:21 PM EDT 2023

# Angular Ten Second Look

Code: https://github.com/kusl/angulartensecondlook

Deployment: https://github.com/angularten/angularten.github.io

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       1.6Gi       1.3Gi       226Mi        12Gi        13Gi
Swap:          8.0Gi       1.0Mi       8.0Gi
System Storage
1.0G	.
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
    

Angular CLI: 16.0.4
Node: 18.16.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.0.4
... animations, cli, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1600.4
@angular-devkit/build-angular   16.0.4
@angular-devkit/core            16.0.4
@angular-devkit/schematics      16.0.4
@angular/cdk                    16.0.3
@angular/material               16.0.3
@schematics/angular             16.0.4
rxjs                            6.6.7
typescript                      5.0.4
    
Done in 0.51s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.39s.
```
```bash
Latest version:     1.0.30001494
Installed version:  1.0.30001494
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
main.6ccaab7515dba94b.js      | main          | 380.32 kB |                93.20 kB
styles.0547226d5c86b184.css   | styles        |  89.01 kB |                 8.75 kB
polyfills.9ebe73a0c30df892.js | polyfills     |  33.04 kB |                10.63 kB
runtime.a19c91f61fe66ddc.js   | runtime       |   1.06 kB |               603 bytes

| Initial Total | 503.43 kB |               113.18 kB

Build at: 2023-06-04T02:53:54.766Z - Hash: 2af15b5eb42be65f - Time: 10935ms

Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 3.43 kB with a total of 503.43 kB.


Done in 12.65s.
```
