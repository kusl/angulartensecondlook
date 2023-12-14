Thu Dec 14 09:00:11 AM EST 2023

# Angular Ten Second Look

Code: https://github.com/kusl/angulartensecondlook

Deployment: https://github.com/angularten/angularten.github.io

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.7Gi       1.0Gi       293Mi        12Gi        12Gi
Swap:          8.0Gi       3.2Mi       8.0Gi
System Storage
1.6G	.
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
    

Angular CLI: 17.0.6
Node: 20.10.0
Package Manager: yarn 1.22.21
OS: linux x64

Angular: 17.0.6
... animations, cli, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1700.6
@angular-devkit/build-angular   17.0.6
@angular-devkit/core            17.0.6
@angular-devkit/schematics      17.0.6
@angular/cdk                    17.0.3
@angular/material               16.2.12
@schematics/angular             17.0.6
rxjs                            6.6.7
typescript                      5.2.2
zone.js                         0.14.2
    
Done in 0.51s.
yarn install v1.22.21
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.36s.
```
```bash
Latest version:     1.0.30001570
Installed version:  1.0.30001568
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
warning " > @angular/material@16.2.12" has incorrect peer dependency "@angular/cdk@16.2.12".
warning " > codelyzer@6.0.2" has incorrect peer dependency "@angular/compiler@>=2.3.1 <13.0.0 || ^12.0.0-next || ^12.1.0-next || ^12.2.0-next".
warning " > codelyzer@6.0.2" has incorrect peer dependency "@angular/core@>=2.3.1 <13.0.0 || ^12.0.0-next || ^12.1.0-next || ^12.2.0-next".
warning " > karma-jasmine-html-reporter@1.7.0" has incorrect peer dependency "jasmine-core@>=3.8".
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
warning " > @angular/material@16.2.12" has incorrect peer dependency "@angular/cdk@16.2.12".
warning " > codelyzer@6.0.2" has incorrect peer dependency "@angular/compiler@>=2.3.1 <13.0.0 || ^12.0.0-next || ^12.1.0-next || ^12.2.0-next".
warning " > codelyzer@6.0.2" has incorrect peer dependency "@angular/core@>=2.3.1 <13.0.0 || ^12.0.0-next || ^12.1.0-next || ^12.2.0-next".
warning " > karma-jasmine-html-reporter@1.7.0" has incorrect peer dependency "jasmine-core@>=3.8".
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
main.ee317f90a8760ea9.js      | main          | 387.08 kB |                93.96 kB
styles.1a025a0459c0eda6.css   | styles        |  85.33 kB |                 8.31 kB
polyfills.2e5507851b47d81d.js | polyfills     |  33.00 kB |                10.64 kB
runtime.a19c91f61fe66ddc.js   | runtime       |   1.06 kB |               603 bytes

| Initial Total | 506.47 kB |               113.50 kB

Build at: 2023-12-14T14:01:51.406Z - Hash: b540d925291861ab - Time: 33158ms

Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 6.47 kB with a total of 506.47 kB.


Done in 35.36s.
```
Thu Dec 14 09:02:28 AM EST 2023
Thu Dec 14 09:02:47 AM EST 2023
yarn version v1.22.21
info Current version: 0.0.373
info New version: 0.0.374
Done in 0.12s.
