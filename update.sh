#!/bin/bash

cd /home/kushal/src/angular/angulartensecondlook;
time yarn run ng update;
time yarn run ng update @angular/core @angular/cli @angular/cdk @angular/material @angular/localize rxjs;
time git add .;
time git commit -m "update angular" -m "from a shell script"
time yarn run ng build --configuration=production;
time yarn run ng test;
du -sh dist/angulartensecondlook/;
time rsync -av /home/kushal/angular/angulartensecondlook/dist/angulartensecondlook/ /home/kushal/src/angular/angulartengithubio;
du -sh /home/kushal/src/angular/angulartengithubio;
cd /home/kushal/src/angular/angulartengithubio/;
git add .;
git commit -m "build and deploy";
time git push origin master;
