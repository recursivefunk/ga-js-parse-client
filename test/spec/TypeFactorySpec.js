describe("TypeFactory", function(){
  it("loads environment variables from localstorage", function(){
    expect(localStorage.getItem("APP_ID")).toBeTruthy()
  })
  it("creates an object", function(done){
    var TestType1 = TypeFactory('TestType1');
    TestType1.create({foo:'bar'}, function(err, result){
      expect(err).toBeFalsy();
      expect(result.objectId).toBeTruthy();
      done();
    })
  })
})
