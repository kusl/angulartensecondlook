Code: 
https://github.com/kusl/angulartensecondlook

Deployment:
https://github.com/angularten/angularten.github.io

```bash
#!/bin/bash

cd /home/kushal/src/html/angulartensecondlook;
time yarn run ng update;
time yarn run ng build --configuration=production;
time yarn run ng test;
du -sh dist/angulartensecondlook/;
time rsync -av /home/kushal/angular/html/AngularTenSecondLook/dist/AngularTenSecondLook/ /home/kushal/src/angular/angulartengithubio;
du -sh /home/kushal/src/html/angulartengithubio;
cd /home/kushal/src/html/angulartengithubio/;
git add .;
git commit -m "build and deploy";
time git push origin master;
```
