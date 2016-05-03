
describe("TypeFactory", function(){
  beforeEach(function(){
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
  })
  it("loads environment variables from localstorage", function(){
    expect(localStorage.getItem("APP_ID")).toBeTruthy()
  })
  it("creates an object", function(done){
    var TestType1 = TypeFactory('TestType1');
    TestType1.create({foo:'bar'}, function(err, result){
      expect(err).toBeFalsy();
      expect(result.objectId).toBeTruthy();
      TestType1.get(result.objectId, function(err, result){
        expect(err).toBeFalsy()
        expect(result.foo).toEqual('bar')
        done();
      })
    })
  })
  it("deletes an object", function(done){
    var TestType1 = TypeFactory('TestType1');
    TestType1.create({beep:'boop'}, function(err, result){
      expect(err).toBeFalsy();
      expect(result.objectId).toBeTruthy();
      var objectId = result.objectId
      console.log("created")
      TestType1.get(objectId, function(err, result){
        expect(err).toBeFalsy()
        expect(result.beep).toEqual('boop')
        console.log("got")
        TestType1.remove(result.objectId, function(err, result){
          expect(err).toBeFalsy()
          expect(result.message).toEqual("Successfully deleted object " + objectId)
          console.log("removed")
          done()
        })
      })
    })
  })
})
