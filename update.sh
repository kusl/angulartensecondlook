#!/bin/bash

cd /home/kushal/src/angular/angulartensecondlook;
free -h;
source ~/.nvm/nvm.sh;
time nvm install --lts;
time nvm use --lts;
time npm install --global @angular/cli yarn;
export NODE_OPTIONS="--max-old-space-size=6144";
time yarn run ng update;
time yarn run ng update @angular/core @angular/cli @angular/cdk @angular/material;
time yarn version --patch;
time git add .;
time git commit -m "update angular" -m "from a shell script";
time git push origin master;
time yarn run ng build --configuration=production;
time yarn run ng test;
du -sh dist/angulartensecondlook/;
time rsync -av /home/kushal/src/angular/angulartensecondlook/dist/AngularTenSecondLook/ /home/kushal/src/angular/angulartengithubio;
du -sh /home/kushal/src/angular/angulartengithubio;
cd /home/kushal/src/angular/angulartengithubio/;
git add .;
git commit -m "build and deploy";
time git push origin master;
