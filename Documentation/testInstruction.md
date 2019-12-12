#Important Things to Note Before Running Tests

**To run the E2E tests**, because the E2E tests is based on a fixed data and the auto updating should be turn off, **please set the "autoRefresh" false** at line 24 of client/src/app/home/home.component.ts, and **set the "seedLocalSourse" true** at line 31 of server/src/main/java/umm3601/laundry/LaundryController.java to use the local test data. 

At client/src/app/home/home.component.ts:24
```{java}
private autoRefresh = false;                
```
At server/src/main/java/umm3601/laundry/LaundryController.java:31
```{java}
private boolean seedLocalSourse = true;     
```
Please run the e2e test with the following instructions:

```
./gradlew clearMongoDB
./gradlew seedMongoDB
./gradlew run
./gradlew runE2ETests
```

There are 2 skipped e2e tests, we provide some reasons as comments before the code of both tests.

**To run other tests**, please **set the "autoRefresh" true** and **set the "seedLocalSource" false.**

There are 5 skipped client tests, we provide some reasons as comments before the code of these tests.

We did not remove the modules of users' functionality in the client and the server because they will be helpful as a template for future iterations.

We use SendGrid as tool to send our subscription email. It requires a paired key to connect to SendGrid's server. We use "a-fake-key" at line 473 in MailingController.java for testing purpose. The steps for using actual key are as following:

Sign in/sign up into SendGrid -> Generate a key with all mail and mail setting restrictions -> Copy the key generated ->
After deploy your project onto Digital Ocean, manually paste and replace "a-fake-key" with the key you copied ->
Run you droplet.

At server/src/main/java/umm3601/mailing/MailingController.java:473
```
final String key = "a_fake_key";
```
