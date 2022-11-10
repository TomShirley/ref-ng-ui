FROM nginx:1-alpine
LABEL version="0.1.0"
COPY nginx.conf /etc/nginx/conf.d/default.conf
# N.B the package.json name of this microsite is part of the source path below. Keep these 2 locations in sync
# (or find a way to build this app without the published files being put in a subfolder under ./dist)
COPY ./dist/ng-ref-microsite /usr/share/nginx/html
