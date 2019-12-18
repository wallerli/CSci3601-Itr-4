# Important Things to Note Before Running Tests

## To run the E2E tests
The E2E tests is based on a fixed data and the auto updating should be turn off, **please set the "autoRefresh" false** at line 24 of client/src/app/home/home.component.ts, and **set the "seedLocalSourse" true** at line 31 of server/src/main/java/umm3601/laundry/LaundryController.java to use the local test data. 

At client/src/app/home/home.component.ts:24
```{java}
private autoRefresh = false;                
```
At server/src/main/java/umm3601/laundry/LaundryController.java:31
```{java}
private boolean seedLocalSourse = true;     
```

We used sendKeys() function in our E2E tests, which causes some issues that all tests used this function have a high chance to fail. If it is possible, please set the value to be 100 at line 19 of client/e2e/home.e2e-spec.ts:
```{java}
return protractor.promise.delayed(100);              
```

Please run the e2e test with the following instructions:
```
./gradlew clearMongoDB
./gradlew seedMongoDB
./gradlew run
./gradlew runE2ETests
```

There are 2 skipped e2e tests, we provide some reasons as comments before the code of both tests.

## To run other tests
Please **set the "autoRefresh" true** and **set the "seedLocalSource" false.**

**Do not use actual key to run any test!**

There are 5 skipped client tests, we provide some reasons as comments before the code of these tests.

## More notes
We did not remove the modules of users' functionality in the client and the server because they will be helpful as a template for future iterations.
