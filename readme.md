## Setup your environment

```
$ touch .env
$ echo "APP_ID=ga-js-ps" >> .env
$ echo "APP_KEY=<GET THIS VALUE FROM JOHNNY>" >> .env
$ echo "APP_HOST=<GET THIS VALUE FROM JOHNNY>" >> .env
$ npm install
```

## Quick Start

Open up `app.js`

```
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

```
MyType.create(myobj, callbackFunction);
```

----

Getting an existing object

```
MyType.get(objectId, callbackFunction);
```

----

Get *ALL* objects that have been created

```
MyType.getAll(callbackFunction);
```

----

Updating an existing object

```
MyType.update(objectId, updatedProps, callbackFunction);
```

----

Delete an existing object

```
MyType.remove(objectId, callbackFunction);
```

----

## Running the tests

Testing is Fundamental :)

```
npm test
```