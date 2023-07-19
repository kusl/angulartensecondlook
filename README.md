Tue Jul 18 10:24:59 PM EDT 2023

# Angular Ten Second Look

Code: https://github.com/kusl/angulartensecondlook

Deployment: https://github.com/angularten/angularten.github.io

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.2Gi       2.4Gi       298Mi        10Gi        12Gi
Swap:          8.0Gi       0.0Ki       8.0Gi
System Storage
1.5G	.
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
    

Angular CLI: 16.1.4
Node: 18.17.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.1.5
... animations, cdk, common, compiler, compiler-cli, core, forms
... material, platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1601.4
@angular-devkit/build-angular   16.1.4
@angular-devkit/core            16.1.4
@angular-devkit/schematics      16.1.4
@angular/cli                    16.1.4
@schematics/angular             16.1.4
rxjs                            6.6.7
typescript                      5.0.4
    
Done in 0.52s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.37s.
```
```bash
Latest version:     1.0.30001516
Installed version:  1.0.30001516
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
main.b5e570ff51ff4435.js      | main          | 380.19 kB |                93.10 kB
styles.dabda077bf7e6132.css   | styles        |  88.93 kB |                 8.68 kB
polyfills.656f13ad4450dfbe.js | polyfills     |  33.04 kB |                10.63 kB
runtime.a19c91f61fe66ddc.js   | runtime       |   1.06 kB |               603 bytes

| Initial Total | 503.22 kB |               113.00 kB

Build at: 2023-07-19T02:25:32.790Z - Hash: f8a8a59df4aa5374 - Time: 12171ms

Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 3.22 kB with a total of 503.22 kB.


Done in 13.79s.
```
Tue Jul 18 10:25:54 PM EDT 2023
Tue Jul 18 10:26:13 PM EDT 2023
yarn version v1.22.19
info Current version: 0.0.178
info New version: 0.0.179
Done in 0.13s.
