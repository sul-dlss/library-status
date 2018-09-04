npm i &&

npm run build &&

# checkout to the gh-pages branch
git checkout gh-pages &&

# pull the latest updates
git pull origin gh-pages --rebase &&

cp dist/* ./ &&

git add index.html bundle.js &&

git commit -m 'Update sites' &&

git push origin gh-pages &&

git checkout master
