Sat Jan  7 07:33:53 AM MST 2023

# Angular Ten Second Look

Code: https://github.com/kusl/angulartensecondlook

Deployment: https://github.com/angularten/angularten.github.io

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       2.7Gi       1.6Gi       3.0Mi       3.4Gi       4.7Gi
Swap:          7.7Gi        14Mi       7.6Gi
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
    
Done in 1.01s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.90s.
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
main.c78c5e1add7f1c0d.js      | main          | 386.66 kB |                93.86 kB
styles.def9c13039205723.css   | styles        |  84.28 kB |                 8.58 kB
polyfills.9a573026e295a22a.js | polyfills     |  36.18 kB |                11.52 kB
runtime.a19c91f61fe66ddc.js   | runtime       |   1.06 kB |               603 bytes

| Initial Total | 508.17 kB |               114.55 kB

Build at: 2023-01-07T14:34:42.717Z - Hash: 24df2d34a42d70d1 - Time: 27086ms

Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 8.17 kB with a total of 508.17 kB.


Done in 30.47s.
```
Sat Jan  7 07:35:27 AM MST 2023
Sat Jan  7 07:35:46 AM MST 2023
yarn version v1.22.19
info Current version: 0.0.100
info New version: 0.0.101
Done in 0.21s.
