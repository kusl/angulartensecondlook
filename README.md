Tue Jan 30 08:56:42 AM EST 2024

# Angular Ten Second Look

Code: https://github.com/kusl/angulartensecondlook

Deployment: https://github.com/angularten/angularten.github.io

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       9.7Gi       402Mi       563Mi       6.1Gi       5.6Gi
Swap:          8.0Gi       4.4Gi       3.6Gi
System Storage
2.5G	.
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
    

Angular CLI: 17.1.1
Node: 20.11.0
Package Manager: yarn 1.22.21
OS: linux x64

Angular: 17.1.1
... animations, cdk, cli, common, compiler, compiler-cli, core
... forms, platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1701.1
@angular-devkit/build-angular   17.1.1
@angular-devkit/core            17.1.1
@angular-devkit/schematics      17.1.1
@angular/material               16.2.13
@schematics/angular             17.1.1
rxjs                            6.6.7
typescript                      5.2.2
zone.js                         0.14.2
    
Done in 0.57s.
yarn install v1.22.21
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.38s.
```
```bash
Latest version:     1.0.30001581
Installed version:  1.0.30001581
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
Tue Jan 30 08:57:55 AM EST 2024
Tue Jan 30 08:58:15 AM EST 2024
yarn version v1.22.21
info Current version: 0.0.525
info New version: 0.0.526
Done in 0.12s.
