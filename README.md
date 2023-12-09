Sat Dec  9 02:29:28 PM EST 2023

# Angular Ten Second Look

Code: https://github.com/kusl/angulartensecondlook

Deployment: https://github.com/angularten/angularten.github.io

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.3Gi       287Mi       268Mi        13Gi        12Gi
Swap:          8.0Gi       368Ki       8.0Gi
System Storage
1.2G	.
```
```bash
yarn run v1.22.21
$ ng version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 17.0.5
Node: 20.10.0
Package Manager: yarn 1.22.21
OS: linux x64

Angular: 17.0.5
... animations, cli, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1700.5
@angular-devkit/build-angular   17.0.5
@angular-devkit/core            17.0.5
@angular-devkit/schematics      17.0.5
@angular/cdk                    17.0.2
@angular/material               16.2.12
@schematics/angular             17.0.5
rxjs                            6.6.7
typescript                      5.2.2
zone.js                         0.14.2
    
Done in 0.67s.
yarn install v1.22.21
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.48s.
```
```bash
Latest version:     1.0.30001566
Installed version:  1.0.30001566
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.21
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
main.7b2820c29c9d04fb.js      | main          | 386.99 kB |                94.04 kB
styles.1a025a0459c0eda6.css   | styles        |  85.33 kB |                 8.31 kB
polyfills.2e5507851b47d81d.js | polyfills     |  33.00 kB |                10.64 kB
runtime.a19c91f61fe66ddc.js   | runtime       |   1.06 kB |               603 bytes

| Initial Total | 506.38 kB |               113.58 kB

Build at: 2023-12-09T19:31:06.114Z - Hash: 3860170b185f31a7 - Time: 35226ms

Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 6.38 kB with a total of 506.38 kB.


Done in 37.51s.
```
Sat Dec  9 02:31:41 PM EST 2023
Sat Dec  9 02:32:00 PM EST 2023
yarn version v1.22.21
info Current version: 0.0.361
info New version: 0.0.362
Done in 0.13s.
