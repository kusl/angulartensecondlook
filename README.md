Mon Nov 27 12:02:16 PM EST 2023

# Angular Ten Second Look

Code: https://github.com/kusl/angulartensecondlook

Deployment: https://github.com/angularten/angularten.github.io

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.5Gi       1.1Gi       313Mi        12Gi        12Gi
Swap:          8.0Gi       128Ki       8.0Gi
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
    

Angular CLI: 17.0.3
Node: 20.10.0
Package Manager: yarn 1.22.21
OS: linux x64

Angular: 17.0.4
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1700.3
@angular-devkit/build-angular   17.0.3
@angular-devkit/core            17.0.3
@angular-devkit/schematics      17.0.3
@angular/cdk                    17.0.1
@angular/cli                    17.0.3
@angular/material               16.2.12
@schematics/angular             17.0.3
rxjs                            6.6.7
typescript                      5.2.2
zone.js                         0.14.2
    
Done in 0.51s.
yarn install v1.22.21
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.34s.
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
main.0992659bc7cde43a.js      | main          | 387.00 kB |                94.08 kB
styles.1a025a0459c0eda6.css   | styles        |  85.33 kB |                 8.31 kB
polyfills.2e5507851b47d81d.js | polyfills     |  33.00 kB |                10.64 kB
runtime.a19c91f61fe66ddc.js   | runtime       |   1.06 kB |               603 bytes

| Initial Total | 506.39 kB |               113.63 kB

Build at: 2023-11-27T17:03:18.755Z - Hash: 86a8e84d0f3de812 - Time: 10471ms

Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 6.39 kB with a total of 506.39 kB.


Done in 12.24s.
```
