#!/bin/bash

END=400

for i in $(seq 1 $END)
do
    echo "<mat-spinner></mat-spinner>" >> /home/kushal/src/html/AngularTenSecondLook/src/app/test-component$i/test-component$i.component.html
done
