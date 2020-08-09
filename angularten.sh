#!/bin/bash

cd /home/kushal/src/html/AngularTenSecondLook;
time git add .; 
time git commit -m "update" -m "commit whatever we have here"
time yarn run ng update;
time yarn run ng --version;
time ng update @angular/core @angular/cli @angular/cdk @angular/material rxjs;
time yarn run ng --version;
time git add .;
time git commit -m "update angular"
time yarn run ng build --configuration=production;
time yarn run ng test;
du -sh dist/AngularTenSecondLook/;
time rsync -av /home/kushal/src/html/AngularTenSecondLook/dist/AngularTenSecondLook/ /home/kushal/src/html/angulartengithubio;
du -sh /home/kushal/src/html/angulartengithubio;
cd /home/kushal/src/html/angulartengithubio/;
git add .;
git commit -m "build and deploy";
time git push origin master;
