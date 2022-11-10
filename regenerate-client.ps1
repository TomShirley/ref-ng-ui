
docker run --rm --add-host localhost:192.168.1.115 -v ${PWD}/../ef-net-core-ref-app:/api -v ${PWD}/templates:/templates -v ${PWD}:/src -w /src local-nswag run ./nswag.blogs-api.json /runtime:NetCore31
