Fri Oct 27 09:51:47 AM EDT 2023

# Angular Ten Second Look

Code: https://github.com/kusl/angulartensecondlook

Deployment: https://github.com/angularten/angularten.github.io

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       1.6Gi       3.8Gi       255Mi       9.9Gi        13Gi
Swap:          8.0Gi       0.0Ki       8.0Gi
System Storage
1.2G	.
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
    

Angular CLI: 16.2.8
Node: 20.9.0 (Unsupported)
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.2.10
... animations, cdk, common, compiler, compiler-cli, core, forms
... material, platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1602.8
@angular-devkit/build-angular   16.2.8
@angular-devkit/core            16.2.8
@angular-devkit/schematics      16.2.8
@angular/cli                    16.2.8
@schematics/angular             16.2.8
rxjs                            6.6.7
typescript                      5.0.4
zone.js                         0.13.0
    
Warning: The current version of Node (20.9.0) is not supported by Angular.
Done in 1.00s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.80s.
```
```bash
Latest version:     1.0.30001554
Installed version:  1.0.30001554
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
main.e34007833143d993.js      | main          | 385.80 kB |                93.64 kB
styles.1a025a0459c0eda6.css   | styles        |  85.33 kB |                 8.31 kB
polyfills.656f13ad4450dfbe.js | polyfills     |  33.04 kB |                10.63 kB
runtime.a19c91f61fe66ddc.js   | runtime       |   1.06 kB |               603 bytes

| Initial Total | 505.23 kB |               113.17 kB

Build at: 2023-10-27T13:53:10.346Z - Hash: ce5d4ddd202d0d18 - Time: 30906ms

Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 5.23 kB with a total of 505.23 kB.


Done in 33.16s.
```
Fri Oct 27 09:53:47 AM EDT 2023
Fri Oct 27 09:54:06 AM EDT 2023
yarn version v1.22.19
info Current version: 0.0.275
info New version: 0.0.276
Done in 0.16s.
