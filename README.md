Thu Mar  2 08:21:56 AM MST 2023

# Angular Ten Second Look

Code: https://github.com/kusl/angulartensecondlook

Deployment: https://github.com/angularten/angularten.github.io

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       2.5Gi       1.6Gi       112Mi       3.5Gi       4.7Gi
Swap:          7.7Gi        10Mi       7.6Gi
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
    

Angular CLI: 15.2.1
Node: 18.14.2
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 15.2.1
... animations, cdk, cli, common, compiler, compiler-cli, core
... forms, material, platform-browser, platform-browser-dynamic
... router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1502.1
@angular-devkit/build-angular   15.2.1
@angular-devkit/core            15.2.1
@angular-devkit/schematics      15.2.1
@schematics/angular             15.2.1
rxjs                            6.6.7
typescript                      4.8.4
    
Done in 1.25s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.84s.
```
```bash
Latest version:     1.0.30001458
Installed version:  1.0.30001458
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
main.ab274c97812e83f3.js      | main          | 391.22 kB |                95.21 kB
styles.b0fa45db8dcfcdb4.css   | styles        |  89.01 kB |                 8.80 kB
polyfills.fe933134870e5adb.js | polyfills     |  36.19 kB |                11.55 kB
runtime.a19c91f61fe66ddc.js   | runtime       |   1.06 kB |               603 bytes

| Initial Total | 517.49 kB |               116.14 kB

Build at: 2023-03-02T15:22:45.621Z - Hash: 7a111c7003ebc838 - Time: 26179ms

Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 17.49 kB with a total of 517.49 kB.


Done in 29.79s.
```
Thu Mar  2 08:23:25 AM MST 2023
Thu Mar  2 08:23:44 AM MST 2023
yarn version v1.22.19
info Current version: 0.0.114
info New version: 0.0.115
Done in 0.21s.
