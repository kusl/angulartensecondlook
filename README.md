Sun May 12 07:18:47 AM EDT 2024

# Angular Ten Second Look

Code: https://github.com/kusl/angulartensecondlook

Deployment: https://github.com/angularten/angularten.github.io

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       3.2Gi       5.4Gi       238Mi       7.4Gi        12Gi
Swap:          8.0Gi       580Mi       7.4Gi
System Storage
1.2G	.
```
```bash
yarn run v1.22.22
$ ng version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 17.3.7
Node: 20.13.1
Package Manager: yarn 1.22.22
OS: linux x64

Angular: 17.3.7
... animations, cdk, cli, common, compiler, compiler-cli, core
... forms, platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1703.7
@angular-devkit/build-angular   17.3.7
@angular-devkit/core            17.3.7
@angular-devkit/schematics      17.3.7
@angular/material               16.2.14
@schematics/angular             17.3.7
rxjs                            6.6.7
typescript                      5.2.2
zone.js                         0.14.2
    
Done in 0.54s.
yarn install v1.22.22
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.35s.
```
```bash
Browserslist: caniuse-lite is outdated. Please run:
  npx update-browserslist-db@latest
  Why you should do it regularly: https://github.com/browserslist/update-db#readme
Latest version:     1.0.30001617
Installed version:  1.0.30001616
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
warning " > @angular/material@16.2.14" has incorrect peer dependency "@angular/cdk@16.2.14".
warning " > codelyzer@6.0.2" has incorrect peer dependency "@angular/compiler@>=2.3.1 <13.0.0 || ^12.0.0-next || ^12.1.0-next || ^12.2.0-next".
warning " > codelyzer@6.0.2" has incorrect peer dependency "@angular/core@>=2.3.1 <13.0.0 || ^12.0.0-next || ^12.1.0-next || ^12.2.0-next".
warning " > karma-jasmine-html-reporter@1.7.0" has incorrect peer dependency "jasmine-core@>=3.8".
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
warning " > @angular/material@16.2.14" has incorrect peer dependency "@angular/cdk@16.2.14".
warning " > codelyzer@6.0.2" has incorrect peer dependency "@angular/compiler@>=2.3.1 <13.0.0 || ^12.0.0-next || ^12.1.0-next || ^12.2.0-next".
warning " > codelyzer@6.0.2" has incorrect peer dependency "@angular/core@>=2.3.1 <13.0.0 || ^12.0.0-next || ^12.1.0-next || ^12.2.0-next".
warning " > karma-jasmine-html-reporter@1.7.0" has incorrect peer dependency "jasmine-core@>=3.8".
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.22
$ ng build --configuration production
- Generating browser application bundles (phase: setup)...
✔ Browser application bundle generation complete.
✔ Browser application bundle generation complete.

Error: node_modules/@angular/material/legacy-dialog/index.d.ts:105:67 - error TS2344: Type 'MatLegacyDialogContainer' does not satisfy the constraint '_MatDialogContainerBase'.
  Property '_changeDetectorRef' is private in type 'MatLegacyDialogContainer' but not in type '_MatDialogContainerBase'.

105 export declare class MatLegacyDialog extends _MatLegacyDialogBase<MatLegacyDialogContainer> {
                                                                      ~~~~~~~~~~~~~~~~~~~~~~~~


Error: node_modules/@angular/material/legacy-dialog/index.d.ts:199:22 - error TS2415: Class 'MatLegacyDialogContainer' incorrectly extends base class '_MatDialogContainerBase'.
  Property '_changeDetectorRef' is private in type 'MatLegacyDialogContainer' but not in type '_MatDialogContainerBase'.

199 export declare class MatLegacyDialogContainer extends _MatLegacyDialogContainerBase {
                         ~~~~~~~~~~~~~~~~~~~~~~~~



error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
