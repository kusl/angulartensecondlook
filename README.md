Mon May 22 02:06:11 PM EDT 2023

# Angular Ten Second Look

Code: https://github.com/kusl/angulartensecondlook

Deployment: https://github.com/angularten/angularten.github.io

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       3.0Gi       1.8Gi       738Mi        10Gi        11Gi
Swap:          8.0Gi        13Mi       8.0Gi
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
    

Angular CLI: 16.0.2
Node: 18.16.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.0.2
... animations, cli, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1600.2
@angular-devkit/build-angular   16.0.2
@angular-devkit/core            16.0.2
@angular-devkit/schematics      16.0.2
@angular/cdk                    16.0.1
@angular/material               16.0.1
@schematics/angular             16.0.2
rxjs                            6.6.7
typescript                      5.0.4
    
Done in 0.53s.
yarn install v1.22.19
[1/4] Resolving packages...
[2/4] Fetching packages...
warning Pattern ["string-width@^1.0.2 || 2 || 3 || 4"] is trying to unpack in the same destination "/home/kushal/.cache/yarn/v6/npm-string-width-cjs-4.2.3-269c7117d27b05ad2e536830a8ec895ef9c6d010-integrity/node_modules/string-width-cjs" as pattern ["string-width@^4.2.3"]. This could result in non-deterministic behavior, skipping.
[3/4] Linking dependencies...
warning " > @angular-devkit/build-angular@15.2.6" has incorrect peer dependency "typescript@>=4.8.2 <5.0".
warning "@angular-devkit/build-angular > @ngtools/webpack@15.2.6" has incorrect peer dependency "typescript@>=4.8.2 <5.0".
warning " > @angular/compiler-cli@15.2.8" has incorrect peer dependency "typescript@>=4.8.2 <5.0".
warning " > codelyzer@6.0.1" has incorrect peer dependency "@angular/compiler@>=2.3.1 <12.0.0 || ^11.0.0-next || ^11.1.0-next || ^11.2.0-next".
warning " > codelyzer@6.0.1" has incorrect peer dependency "@angular/core@>=2.3.1 <12.0.0 || ^11.0.0-next || ^11.1.0-next || ^11.2.0-next".
[4/4] Building fresh packages...
success Saved lockfile.
Done in 6.81s.
```
```bash
Latest version:     1.0.30001489
Installed versions: 1.0.30001481, 1.0.30001489
Removing old caniuse-lite from lock file
node:internal/fs/utils:347
    throw err;
    ^

Error: EIO: i/o error, open '/home/kushal/src/angular/angulartensecondlook/yarn.lock'
    at Object.openSync (node:fs:601:3)
    at Object.writeFileSync (node:fs:2249:35)
    at updatePackageManually (/home/kushal/src/angular/angulartensecondlook/node_modules/@angular-devkit/build-angular/node_modules/update-browserslist-db/index.js:207:6)
    at updateDB (/home/kushal/src/angular/angulartensecondlook/node_modules/@angular-devkit/build-angular/node_modules/update-browserslist-db/index.js:281:5)
    at Object.<anonymous> (/home/kushal/src/angular/angulartensecondlook/node_modules/@angular-devkit/build-angular/node_modules/browserslist/cli.js:42:3)
    at Module._compile (node:internal/modules/cjs/loader:1254:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
    at Module.load (node:internal/modules/cjs/loader:1117:32)
    at Module._load (node:internal/modules/cjs/loader:958:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12) {
  errno: -5,
  syscall: 'open',
  code: 'EIO',
  path: '/home/kushal/src/angular/angulartensecondlook/yarn.lock'
}

Node.js v18.16.0
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
main.cee23675a6b04418.js      | main          | 380.45 kB |                93.28 kB
styles.0547226d5c86b184.css   | styles        |  89.01 kB |                 8.75 kB
polyfills.9ebe73a0c30df892.js | polyfills     |  33.04 kB |                10.63 kB
runtime.a19c91f61fe66ddc.js   | runtime       |   1.06 kB |               603 bytes

| Initial Total | 503.56 kB |               113.25 kB

Build at: 2023-05-22T18:07:45.436Z - Hash: 7c3801aeb55f98ae - Time: 28873ms

Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 3.56 kB with a total of 503.56 kB.


Done in 31.05s.
```
