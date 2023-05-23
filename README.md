Tue May 23 12:44:22 AM EDT 2023

# Angular Ten Second Look

Code: https://github.com/kusl/angulartensecondlook

Deployment: https://github.com/angularten/angularten.github.io

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       5.8Gi       2.4Gi       619Mi       7.0Gi       8.5Gi
Swap:          8.0Gi          0B       8.0Gi
System Storage
1.2G	.
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
    
Done in 0.60s.
yarn install v1.22.19
[1/4] Resolving packages...
warning @angular/cli > pacote > @npmcli/run-script > node-gyp > make-fetch-happen > cacache > @npmcli/move-file@2.0.1: This functionality has been moved to @npmcli/fs
warning protractor@7.0.0: We have news to share - Protractor is deprecated and will reach end-of-life by Summer 2023. To learn more and find out about other options please refer to this post on the Angular blog. Thank you for using and contributing to Protractor. https://goo.gle/state-of-e2e-in-angular
warning protractor > webdriver-manager > request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
warning protractor > webdriver-manager > request > uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
warning protractor > webdriver-manager > request > har-validator@5.1.5: this library is no longer supported
warning tslint@6.1.3: TSLint has been deprecated in favor of ESLint. Please see https://github.com/palantir/tslint/issues/4534 for more information.
[2/4] Fetching packages...
[3/4] Linking dependencies...
warning "@angular-devkit/build-angular > postcss-loader > cosmiconfig-typescript-loader@4.3.0" has incorrect peer dependency "ts-node@>=10".
warning " > codelyzer@6.0.2" has incorrect peer dependency "@angular/compiler@>=2.3.1 <13.0.0 || ^12.0.0-next || ^12.1.0-next || ^12.2.0-next".
warning " > codelyzer@6.0.2" has incorrect peer dependency "@angular/core@>=2.3.1 <13.0.0 || ^12.0.0-next || ^12.1.0-next || ^12.2.0-next".
warning " > karma-jasmine-html-reporter@1.7.0" has incorrect peer dependency "jasmine-core@>=3.8".
[4/4] Building fresh packages...
success Saved lockfile.
Done in 29.62s.
```
```bash
Latest version:     1.0.30001489
Installed version:  1.0.30001489
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
main.cee23675a6b04418.js      | main          | 380.45 kB |                93.28 kB
styles.0547226d5c86b184.css   | styles        |  89.01 kB |                 8.75 kB
polyfills.9ebe73a0c30df892.js | polyfills     |  33.04 kB |                10.63 kB
runtime.a19c91f61fe66ddc.js   | runtime       |   1.06 kB |               603 bytes

| Initial Total | 503.56 kB |               113.25 kB

Build at: 2023-05-23T04:45:39.325Z - Hash: 4a5834381abd2c01 - Time: 25741ms

Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 3.56 kB with a total of 503.56 kB.


Done in 27.66s.
```
