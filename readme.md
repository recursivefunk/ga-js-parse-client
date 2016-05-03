## Setup your environment

```
$ git clone https://github.com/recursivefunk/ga-js-parse-client
$ cd ga-js-parse-client
$ touch .env
$ echo "APP_ID=ga-js-ps" >> .env
$ echo "API_KEY=<GET THIS VALUE FROM JOHNNY>" >> .env
$ echo "API_HOST=<GET THIS VALUE FROM JOHNNY>" >> .env
$ npm install
```

## Quick Start

Open up `app.js`

```javascript
// First define the type of object you want to work with. 
// This can be named anything you like!
var MyTypeFactory = require('./index.js');
var MyType = MyTypeFactory('MyType');

// Now you can start creating instances of your object type! Everything in 
// the API is asynchronous so remember your callback functions!
MyType.create({ foo: 'bar' }, function(err, result) {
  // If an error occured, the err object will exist. Otherwise it will be null
  
  // If the error object is null, everything went OK. Print the result
  // parameter so see what you're working with!
});
```

## The API

Creating an object

```javascript
MyType.create(myobj, callbackFunction);
```

----

Getting an existing object

```javascript
MyType.get(objectId, callbackFunction);
```

----

Get *ALL* objects that have been created

```javascript
MyType.getAll(callbackFunction);
```

----

Updating an existing object

```javascript
MyType.update(objectId, updatedProps, callbackFunction);
```

----

Delete an existing object

```javascript
MyType.remove(objectId, callbackFunction);
```

----

## Running the tests

Testing is Fundamental :)

```
npm test
```
