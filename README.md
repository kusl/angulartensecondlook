Tue Jun 27 01:23:42 PM EDT 2023

# Angular Ten Second Look

Code: https://github.com/kusl/angulartensecondlook

Deployment: https://github.com/angularten/angularten.github.io

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.6Gi       2.4Gi       509Mi        10Gi        11Gi
Swap:          8.0Gi        55Mi       7.9Gi
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
    

Angular CLI: 16.1.1
Node: 18.16.1
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.1.2
... animations, cdk, common, compiler, compiler-cli, core, forms
... material, platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1601.1
@angular-devkit/build-angular   16.1.1
@angular-devkit/core            16.1.1
@angular-devkit/schematics      16.1.1
@angular/cli                    16.1.1
@schematics/angular             16.1.1
rxjs                            6.6.7
typescript                      5.0.4
    
Done in 0.56s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.35s.
```
```bash
Latest version:     1.0.30001508
Installed version:  1.0.30001507
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
warning " > codelyzer@6.0.2" has incorrect peer dependency "@angular/compiler@>=2.3.1 <13.0.0 || ^12.0.0-next || ^12.1.0-next || ^12.2.0-next".
warning " > codelyzer@6.0.2" has incorrect peer dependency "@angular/core@>=2.3.1 <13.0.0 || ^12.0.0-next || ^12.1.0-next || ^12.2.0-next".
warning " > karma-jasmine-html-reporter@1.7.0" has incorrect peer dependency "jasmine-core@>=3.8".
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
warning " > codelyzer@6.0.2" has incorrect peer dependency "@angular/compiler@>=2.3.1 <13.0.0 || ^12.0.0-next || ^12.1.0-next || ^12.2.0-next".
warning " > codelyzer@6.0.2" has incorrect peer dependency "@angular/core@>=2.3.1 <13.0.0 || ^12.0.0-next || ^12.1.0-next || ^12.2.0-next".
warning " > karma-jasmine-html-reporter@1.7.0" has incorrect peer dependency "jasmine-core@>=3.8".
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
main.715cdd01e8648ec7.js      | main          | 380.41 kB |                93.27 kB
styles.0547226d5c86b184.css   | styles        |  89.01 kB |                 8.75 kB
polyfills.656f13ad4450dfbe.js | polyfills     |  33.04 kB |                10.63 kB
runtime.a19c91f61fe66ddc.js   | runtime       |   1.06 kB |               603 bytes

| Initial Total | 503.52 kB |               113.24 kB

Build at: 2023-06-27T17:24:39.963Z - Hash: b6f031c1ec3747e3 - Time: 26943ms

Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 3.52 kB with a total of 503.52 kB.


Done in 28.99s.
```
