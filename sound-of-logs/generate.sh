kubectl logs $1 > data.txt
node convertlogs.js data.txt > data.js
echo 'Notes are created'
