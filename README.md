# StackExchange XML parser

## Getting the data
```
ssh -i ~/.ssh/sa ubuntu@wolfgang
sudo su
mkdir /datadrive/sample-data
wget https://archive.org/download/stackexchange/stackoverflow.com-Posts.7z -O /datadrive/sample-data/Posts.7z
wget https://archive.org/download/stackexchange/stackoverflow.com-Users.7z -O /datadrive/sample-data/Users.7z
wget https://archive.org/download/stackexchange/stackoverflow.com-Tags.7z -O /datadrive/sample-data/Tags.7z

cd /datadrive/sample-data
7z x Posts.7z
7z x Users.7z
7z x Tags.7z
rm *.7z

mv /home/ubuntu/thecode/* /datadrive

```

## Use
```
node index.js sample-data/Tags.xml output/Tags.csv
node index.js sample-data/Posts2.xml output/Posts2.csv
```
