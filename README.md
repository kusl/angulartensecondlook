Wed Nov 29 06:58:38 PM EST 2023

# Angular Ten Second Look

Code: https://github.com/kusl/angulartensecondlook

Deployment: https://github.com/angularten/angularten.github.io

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       4.2Gi       1.2Gi       432Mi        10Gi        11Gi
Swap:          8.0Gi       187Mi       7.8Gi
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
    

Angular CLI: 17.0.4
Node: 20.10.0
Package Manager: yarn 1.22.21
OS: linux x64

Angular: 17.0.5
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1700.4
@angular-devkit/build-angular   17.0.4
@angular-devkit/core            17.0.4
@angular-devkit/schematics      17.0.4
@angular/cdk                    17.0.1
@angular/cli                    17.0.4
@angular/material               16.2.12
@schematics/angular             17.0.4
rxjs                            6.6.7
typescript                      5.2.2
zone.js                         0.14.2
    
Done in 0.54s.
yarn install v1.22.21
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.37s.
```
```bash
Latest version:     1.0.30001565
Installed version:  1.0.30001565
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
main.fdad613b0f5dca7b.js      | main          | 386.92 kB |                93.98 kB
styles.1a025a0459c0eda6.css   | styles        |  85.33 kB |                 8.31 kB
polyfills.2e5507851b47d81d.js | polyfills     |  33.00 kB |                10.64 kB
runtime.a19c91f61fe66ddc.js   | runtime       |   1.06 kB |               603 bytes

| Initial Total | 506.32 kB |               113.52 kB

Build at: 2023-11-30T00:00:09.913Z - Hash: c11a28b4588f5fbd - Time: 31102ms

Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 6.32 kB with a total of 506.32 kB.


Done in 33.13s.
```
Wed Nov 29 07:00:43 PM EST 2023
Wed Nov 29 07:01:02 PM EST 2023
yarn version v1.22.21
info Current version: 0.0.347
info New version: 0.0.348
Done in 0.12s.
