#Deploying Your Droplet on DigitalOcean
##Prerequisites

* [UMM-CSci-3601's Droplet Setup Instructions](https://github.com/UMM-CSci-3601/droplet-setup-and-build)
* [HTTPS: How to secure your connection between client and Cloudflare as HTTPS, with notes on what may be done to secure Cloudflare to server](https://github.com/UMM-CSci-3601-S19/iteration-4-endgame/blob/master/Documentation/HTTPS.md)

##Main Differences from the Default Setup Instructions

###Very Important First Step (Setting Server Local Time)
For this project, it is very important that the servers local time is set correctly. This is important because
if the server is not set to the right local time, your charts are going to be displaying the data incorrectly,
in our case it was six hours in the future. This can be done by the following commands:

#####Checking Current Local Time
To check your servers current local time, run the following command:
>$ timedatectl

#####Seeing List of all Available Timezones
To see the list of all available timezones, run the following command:
>$ timedatectl list-timezones

#####Setting Server Local Time
Now that you know what the code is for your local time, it is now time to set your servers local time. Just run the following command:
>$ sudo timedatectl set-timezone your_time_zone

###Droplet Setup (for HTTPS)
Instead of deploying the project in ```deploy-user```, deploy your project in ```root```.
After your in ```root```, cd into Server.java.
>cd ~
>cd your-repos-name-here/server/src/main/java/umm3601/
>nano Server.java

And change the server port to ```80``` instead of ```4567```.
#### `Server.java`
```java
private static final int serverPort = 80;
```

###Changing environment.prod.ts
Instead of using the droplet ip, use your top level domain. Also, change from ```http``` to ```https```. You also do not need
to include the port. Your file should look something like this:

>API_URL: 'https://top-level.domain/api/'

###Changing MailingController SEND_KEY and APP_BASE
Changing the special ```MAIL_KEY``` follows the same steps as in environment.prod.ts, except the ```MailingController.java```
is in a different location. Steps to change these are as follows:
>cd ~
>cd your-repos-name-here/server/src/main/java/umm3601/mailing/
>nano MailingController.java

Change the following lines to look like this:
####`MailingController.java`
```java
  private final String SEND_KEY = "your_special_key";
  private final String APP_BASE = "https://top-level.domain/";
```
If you are not using HTTPS, use your droplets ip instead of a top-level domain and remove the ```s``` from ```https```.
