
const test = require('tape');
const TypeFactory = require('../index.js');

test('creates an object', (t) => {
  const TestType1 = TypeFactory('TestType1');
  TestType1.create({ foo: 'bar' }, (err, result) => {
    t.notOk(err);
    t.ok(result.objectId);
    TestType1.get(result.objectId, (err, result) => {
      t.notOk(err);
      t.equal(result.foo, 'bar');
      t.end();
    });
  });
});

test('deletes an object', (t) => {
  const TestType1 = TypeFactory('TestType1');
  TestType1.create({ beep: 'boop' }, (err, result) => {
    const objectId = result.objectId;
    t.notOk(err);
    t.ok(result.objectId);
    TestType1.get(objectId, (err, result) => {
      t.notOk(err);
      t.equal(result.beep, 'boop');
      TestType1.remove(objectId, (err, result) => {
        t.notOk(err);
        t.equal(result.message, `Successfully deleted object ${objectId}`);
        t.end();
      });
    });
  });
});

test('updates an object', (t) => {
  const TestType1 = TypeFactory('TestType1');
  TestType1.create({ foo: 'bar' }, (err, result) => {
    t.notOk(err);
    t.ok(result.objectId);
    TestType1.update(result.objectId, { foo: 'beep' }, (err) => {
       t.notOk(err);
       TestType1.get(result.objectId, (err, object) => {
         t.notOk(err);
         t.equal(object.foo, 'beep');
         t.end();
       });
    });
  });
});

