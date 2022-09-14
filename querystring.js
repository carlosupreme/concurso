const getValues = (qs) => qs.split("&").map(element => element.split('=')[1]).filter(el=>el)

console.log(getValues("bar=2&bar=3&&foo=1")) // 2 , 3, 1
console.log(getValues("username=test&password=12345&age=20")) // test, 12345, 20
console.log(getValues("name=shirt&colors=white&colors=black")) // shirt, white, black