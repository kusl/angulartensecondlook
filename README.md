Thu Jan 11 12:31:47 PM EST 2024

# Angular Ten Second Look

Code: https://github.com/kusl/angulartensecondlook

Deployment: https://github.com/angularten/angularten.github.io

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       3.3Gi       1.5Gi       506Mi        11Gi        11Gi
Swap:          8.0Gi       768Ki       8.0Gi
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
    

Angular CLI: 17.0.10
Node: 20.11.0
Package Manager: yarn 1.22.21
OS: linux x64

Angular: 17.0.9
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1700.10
@angular-devkit/build-angular   17.0.10
@angular-devkit/core            17.0.10
@angular-devkit/schematics      17.0.10
@angular/cdk                    17.0.5
@angular/cli                    17.0.10
@angular/material               16.2.12
@schematics/angular             17.0.10
rxjs                            6.6.7
typescript                      5.2.2
zone.js                         0.14.2
    
Done in 0.52s.
yarn install v1.22.21
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.38s.
```
```bash
Latest version:     1.0.30001576
Installed version:  1.0.30001576
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
main.4e80be4d7e0ff120.js      | main          | 387.07 kB |                93.85 kB
styles.1a025a0459c0eda6.css   | styles        |  85.33 kB |                 8.31 kB
polyfills.2e5507851b47d81d.js | polyfills     |  33.00 kB |                10.64 kB
runtime.a19c91f61fe66ddc.js   | runtime       |   1.06 kB |               603 bytes

| Initial Total | 506.46 kB |               113.40 kB

Build at: 2024-01-11T17:32:45.850Z - Hash: cba6e125fd545b37 - Time: 14184ms

Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 6.46 kB with a total of 506.46 kB.


Done in 15.97s.
```
Thu Jan 11 12:33:07 PM EST 2024
Thu Jan 11 12:33:26 PM EST 2024
yarn version v1.22.21
info Current version: 0.0.456
info New version: 0.0.457
Done in 0.12s.
