Fri Jul 21 10:57:10 AM EDT 2023

# Angular Ten Second Look

Code: https://github.com/kusl/angulartensecondlook

Deployment: https://github.com/angularten/angularten.github.io

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.4Gi       2.0Gi       334Mi        10Gi        12Gi
Swap:          8.0Gi       1.0Mi       8.0Gi
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
    

Angular CLI: 16.1.5
Node: 18.17.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.1.6
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1601.5
@angular-devkit/build-angular   16.1.5
@angular-devkit/core            16.1.5
@angular-devkit/schematics      16.1.5
@angular/cdk                    16.1.5
@angular/cli                    16.1.5
@angular/material               16.1.5
@schematics/angular             16.1.5
rxjs                            6.6.7
typescript                      5.0.4
zone.js                         0.13.0
    
Done in 0.48s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.41s.
```
```bash
Latest version:     1.0.30001517
Installed version:  1.0.30001517
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
main.74201a685a8d0e37.js      | main          | 380.19 kB |                93.14 kB
styles.dabda077bf7e6132.css   | styles        |  88.93 kB |                 8.68 kB
polyfills.656f13ad4450dfbe.js | polyfills     |  33.04 kB |                10.63 kB
runtime.a19c91f61fe66ddc.js   | runtime       |   1.06 kB |               603 bytes

| Initial Total | 503.22 kB |               113.04 kB

Build at: 2023-07-21T14:57:38.954Z - Hash: 0bef7ed9c393ee2c - Time: 12026ms

Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 3.22 kB with a total of 503.22 kB.


Done in 13.76s.
```
