npm --prefix ./webapp run build 
# npm --prefix ./functions run build 
cd ./webapp
ng build -c=production
cd ..
firebase use nternouski
firebase deploy --only "hosting"