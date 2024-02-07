Tue Feb  6 09:21:26 PM EST 2024

# Angular Ten Second Look

Code: https://github.com/kusl/angulartensecondlook

Deployment: https://github.com/angularten/angularten.github.io

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.0Gi       545Mi       294Mi        13Gi        13Gi
Swap:          8.0Gi          0B       8.0Gi
System Storage
1.2G	.
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
    

Angular CLI: 17.1.2
Node: 20.11.0
Package Manager: yarn 1.22.21
OS: linux x64

Angular: 17.1.2
... animations, cdk, cli, common, compiler, compiler-cli, core
... forms, platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1701.2
@angular-devkit/build-angular   17.1.2
@angular-devkit/core            17.1.2
@angular-devkit/schematics      17.1.2
@angular/material               16.2.14
@schematics/angular             17.1.2
rxjs                            6.6.7
typescript                      5.2.2
zone.js                         0.14.2
    
Done in 0.50s.
yarn install v1.22.21
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.33s.
```
```bash
Latest version:     1.0.30001584
Installed version:  1.0.30001584
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
