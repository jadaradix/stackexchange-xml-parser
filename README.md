# StackExchange XML parser

## Getting the data
```
ssh root@wolfgang1
apt install p7zip-full
mkdir output

wget https://archive.org/download/stackexchange/stackoverflow.com-Tags.7z -O Tags.7z
7z x Tags.7z
mv Tags.xml sample-data/Tags.xml
rm Tags.7z

wget https://archive.org/download/stackexchange/stackoverflow.com-Users.7z -O Users.7z
7z x Users.7z
mv Users.xml sample-data/Users.xml
rm Users.7z

wget https://archive.org/download/stackexchange/stackoverflow.com-Posts.7z -O Posts.7z
7z x Posts.7z
mv Posts.xml sample-data/Posts.xml
rm Posts.7z
```

## Use
```
node index.js sample-data/Tags.xml output/Tags.csv Id,TagName,Count,ExcerptPostId,WikiPostId Id,TagName,Count,ExcerptPostId,WikiPostId
node index.js sample-data/Users.xml output/Users.csv Id,Reputation,CreationDate,DisplayName,LastAccessDate,WebsiteUrl,Location,Views,UpVotes,DownVotes,AccountId
node index.js sample-data/Posts.xml output/Posts.csv Id,PostTypeId,AcceptedAnswerId,OwnerUserId,CreationDate,Title,Body,Tags,ParentId
```
