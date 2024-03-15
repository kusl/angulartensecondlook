Thu Mar 14 09:18:45 PM EDT 2024

# Angular Ten Second Look

Code: https://github.com/kusl/angulartensecondlook

Deployment: https://github.com/angularten/angularten.github.io

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       4.3Gi       558Mi       585Mi        11Gi        10Gi
Swap:          8.0Gi       304Mi       7.7Gi
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
    

Angular CLI: 17.2.3
Node: 20.11.1
Package Manager: yarn 1.22.22
OS: linux x64

Angular: 17.2.4
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1702.3
@angular-devkit/build-angular   17.2.3
@angular-devkit/core            17.2.3
@angular-devkit/schematics      17.2.3
@angular/cdk                    17.2.2
@angular/cli                    17.2.3
@angular/material               16.2.14
@schematics/angular             17.2.3
rxjs                            6.6.7
typescript                      5.2.2
zone.js                         0.14.2
    
Done in 0.55s.
yarn install v1.22.22
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.45s.
```
```bash
Latest version:     1.0.30001597
Installed version:  1.0.30001597
caniuse-lite is up to date
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
Thu Mar 14 09:21:35 PM EDT 2024
Thu Mar 14 09:21:54 PM EDT 2024
yarn version v1.22.22
info Current version: 0.0.659
info New version: 0.0.660
Done in 0.14s.
