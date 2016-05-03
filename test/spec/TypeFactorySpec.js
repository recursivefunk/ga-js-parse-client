describe("TypeFactory", function(){
  it("loads environment variables from localstorage", function(){
    expect(localStorage.getItem("APP_ID")).toBeTruthy()
  })
})
