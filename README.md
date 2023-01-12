Wed Jan 11 06:47:29 PM MST 2023

# Angular Ten Second Look

Code: https://github.com/kusl/angulartensecondlook

Deployment: https://github.com/angularten/angularten.github.io

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       2.8Gi       1.8Gi       6.0Mi       3.0Gi       4.5Gi
Swap:          7.7Gi        17Mi       7.6Gi
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
    

Angular CLI: 15.0.5
Node: 18.13.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 15.0.4
... animations, cdk, common, compiler, compiler-cli, core, forms
... material, platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1500.5
@angular-devkit/build-angular   15.0.5
@angular-devkit/core            15.0.5
@angular-devkit/schematics      15.0.5
@angular/cli                    15.0.5
@schematics/angular             15.0.5
rxjs                            6.6.7
typescript                      4.8.4
    
Done in 1.30s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.89s.
```
```bash
Latest version:     1.0.30001442
Installed version:  1.0.30001442
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
main.166c22bd215f77bb.js      | main          | 386.87 kB |                94.06 kB
styles.aea5a6118342150e.css   | styles        |  87.30 kB |                 8.71 kB
polyfills.239772369c73808a.js | polyfills     |  36.16 kB |                11.48 kB
runtime.a19c91f61fe66ddc.js   | runtime       |   1.06 kB |               603 bytes

| Initial Total | 511.40 kB |               114.83 kB

Build at: 2023-01-12T01:49:47.541Z - Hash: 2a0be0032ce93138 - Time: 73220ms

Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 11.40 kB with a total of 511.40 kB.


Done in 77.64s.
```
Wed Jan 11 06:51:12 PM MST 2023
Wed Jan 11 06:51:31 PM MST 2023
yarn version v1.22.19
info Current version: 0.0.102
info New version: 0.0.103
Done in 0.22s.
