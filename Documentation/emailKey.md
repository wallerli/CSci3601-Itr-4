# How to Get Key for Email (Using [SendGrid])
## Sign up for the website
Follow the steps on the website to sign up an account on SendGrid website. 

## Generate the key
After you have signed into your account, do as following:

* click: **Settings** -> **API Keys** -> **Create API Key**;
* name your key, and choose **Restricted Access**;
* choose all access for **Mail Send** and **Mail Settings**;
* click **Create & View**.

**Important note**: Be sure to copy down and save your key safely since you will no longer be able to view it after you leave this page. Besides, do not upload your key to any public website in case some one used it illegally.

## Use the key
For loacl usage, copy the key and replace it with the value of ```SEND_KEY = "a_fake_key"``` with your keyat line 20 of /server/src/main/java/umm3601/mailing/MailingController.java:
```{java}
private final String SEND_KEY = "(your key in here)";           
```
**Important note**: Do not run tests with the actual key!

For deploy usage, follow the steps in [Deployment Guide (HTTPS, server ports and necesssary configurations)](https://github.com/UMM-CSci-3601-F19/iteration-4-rockin-reindeer/blob/master/Documentation/deployment.md).

## More information
You could check out SendGrid's website for more features they provide. [SendGrid](https://sendgrid.com).
