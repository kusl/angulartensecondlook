Fri May 26 06:05:22 AM EDT 2023

# Angular Ten Second Look

Code: https://github.com/kusl/angulartensecondlook

Deployment: https://github.com/angularten/angularten.github.io

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       4.3Gi       1.1Gi       725Mi       9.8Gi       9.9Gi
Swap:          8.0Gi       2.0Mi       8.0Gi
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
    

Angular CLI: 16.0.2
Node: 18.16.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.0.3
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1600.2
@angular-devkit/build-angular   16.0.2
@angular-devkit/core            16.0.2
@angular-devkit/schematics      16.0.2
@angular/cdk                    16.0.1
@angular/cli                    16.0.2
@angular/material               16.0.1
@schematics/angular             16.0.2
rxjs                            6.6.7
typescript                      5.0.4
    
Done in 0.58s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.36s.
```
```bash
Latest version:     1.0.30001489
Installed version:  1.0.30001489
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
main.d3f446fecb7c7b41.js      | main          | 380.43 kB |                93.19 kB
styles.0547226d5c86b184.css   | styles        |  89.01 kB |                 8.75 kB
polyfills.9ebe73a0c30df892.js | polyfills     |  33.04 kB |                10.63 kB
runtime.a19c91f61fe66ddc.js   | runtime       |   1.06 kB |               603 bytes

| Initial Total | 503.54 kB |               113.17 kB

Build at: 2023-05-26T10:06:45.131Z - Hash: d33204af0d01df00 - Time: 35790ms

Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 3.54 kB with a total of 503.54 kB.


Done in 42.05s.
```
Fri May 26 06:07:21 AM EDT 2023
Fri May 26 06:07:40 AM EDT 2023
yarn version v1.22.19
info Current version: 0.0.145
info New version: 0.0.146
Done in 0.13s.
