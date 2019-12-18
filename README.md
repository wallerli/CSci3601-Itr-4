# Morris Laundry Facilities
### A Software Design Project (CSci-3601-F19)
##### Iteration 4 Contributors: Robert Beane, Michael Fairbanks, Christian Thielke, Machi Iwata, Kai Zang, and Waller Li

[![Build Status](https://travis-ci.org/UMM-CSci-3601-F19/iteration-4-rockin-reindeer.svg?branch=master)](https://travis-ci.org/UMM-CSci-3601-F19/iteration-4-rockin-reindeer)

## About

This project was designed for people doing laundry at the University of Minnesota Morris Campus. Its main purpose was to develop an supervision-free web app to provide an easy-to-use online access to campus laundry facilities and send helpful notification to users who want to get the status update of the laundry facilities through email subscription.

### Look at Each Machine Status

When any room is selected by the user, there is a display of washers and dryers for that selected room. Washers and dryers are distinguishable through the separated menus as well as different icons. Each machine is then color-coded, green for vacant, yellow for in use, and grey for broken machines. This color-coding is represented with a left border on each machine as well each machines own progress bar, which can be
a more helpful visual.
 
### See Busy-times of the Laundry Rooms

Two different types of graphs have been implemented through [Chart.js][CHARTjs], one a line graph and one a bar graph, as well as a drop-down menu to select which day you would like to look at. The line graph is a visual representation of machine usage for all halls with different colored buttons corresponding to each hall that toggles on or off that line on the graph. When you select a specific room, you will notice that the line graph has now changed to a bar graph to show more specifically when machines in that hall are at their most busy.

### Check Out Machine Details (see subscribe)

For every machine in every hall, there are three different buttons, the three vertical dots(FOR VACANT MACHINES), a bell icon(FOR MACHINES IN USE), or a button that says "Details...". Each button creates a popup dialog that shows: What Type of Machine, Is it Vacant, Report Button, as well as a subscription fill-in so you can receive updates through email about that machine.

### Subscribe to Rooms and Machines

With the implementation of the mailing service, users have the ability to make a subscription to a room or machine and receive an email. Users can click on the details button within a machine card and if the machine is in use then the user is able to enter their email to be notified when the machine is done. After the user enters their email, a request is sent to the mailing service and then an email will be sent.

### Choose a Room of Your Liking (button, dropdown)

If you are already on a specific page for a hall, you have two options for selecting different halls to view. If you scroll to the top of the hall's page you will find a drop-down menu displaying buttons for every hall as well as a machine vacancy ratio. You may also click the button that may appear in the bottom right that says "Switch Rooms", which just redirects you to the first dropdown at the top of the page.

### Welcome Page Redirection

When you load the website for the first time you will be shown a welcome page with a list of buttons for every hall on campus. Each button then redirects you to a separate page specifically for viewing that room's machines.

### Set Default Room (using cookies)

This project has the ability to set your favorite/default room. This is done with the help of cookies, more specifically, [NGX-cookie-service][NGXCookie]. When a user sets a default room, cookies are created for the ```room_id``` and ```room_name```. The user can also remove their default room by clicking the same button which resets the cookies to be set to ```all_rooms```. When the user reloads the home domain, the cookies are called and bring the user to their default room.

### Report Malfunctioning Machines

A report functionality was implemented for the case when a user discovers a problem with a machine. The user can find the machine that has a problem and can click the machine details button. This will bring up a machine dialog with a "Report an issue" button located at the bottom. This brings the user to 'The Office of Residential Life' work request form. The report page will have the following information auto-filled: Building, Apartment/Room/Area, Are you a Resident of... , the Request type and Request Details.

## ToDo List & Known Issues
To see the list of ToDos and known issues, please take a look at our [issue page](https://github.com/UMM-CSci-3601-F19/iteration-4-rockin-reindeer/issues). Known issues are within ```New Issues``` and ToDos are in the ```Icebox```. Each issue/ToDo comes with a brief description describing what the issue is or what we wanted to add. If you have installed the ZenHub browser plug-in, you may check out our [ZenHub](https://github.com/UMM-CSci-3601-F19/iteration-4-rockin-reindeer#zenhub) for more details.

## Tools, Languages, & Technologies

* [Sendgrid][SendGrid] - Used as our Email-sending service.
* [Chart.js][CHARTjs] - Used for displaying historical data in a nice graph.
* [ngx-cookie-service][NGXCookie] - The cookie servivce we used.
* [Yarn][yarn] - The dependency management system we used.
* [Gradle][GD] - The build tool of the project.
* [Angular][Ang] - A helpful tool to build our client.
* [Angular CLI][AngCli] - Made using Angular easier.
* [Angular Material][AngMat] - Used for our UI.
* [TypeScript][TS] - We used TypeScript for our client.
* [Java Spark][spark] - We used Java Spark for our server.
* [JUnit][JU] - We used JUnit for server-side tests.
* [Travis-ci][travis] - Used for continuous integration.
* [Karma][karma] - Used for testing.
* [Jasmine][jasmine] - Used for testing.
* [mongoDB][mongo] - The database we used for this project.
* [Digital Ocean][DO] - Used for deployment.
* [Cloudflare][CF] - Needed for making this project HTTPS.
* [BrowserStack][BS] - Used when testing compatibility of different devices and platforms.

## Documentation

* [Important Notes for Running Tests](https://github.com/UMM-CSci-3601-F19/iteration-4-rockin-reindeer/blob/master/Documentation/testInstruction.md)
* [Deployment Guide (HTTPS, server ports and necesssary configurations)](https://github.com/UMM-CSci-3601-F19/iteration-4-rockin-reindeer/blob/master/Documentation/deployment.md)
* [Get your key for the email service](https://github.com/UMM-CSci-3601-F19/iteration-4-rockin-reindeer/blob/master/Documentation/emailKey.md)
* [Todo List & Known Issues](https://github.com/UMM-CSci-3601-F19/iteration-4-rockin-reindeer/issues)
* [Promotional Pamphlet](https://github.com/UMM-CSci-3601-F19/iteration-4-rockin-reindeer/blob/master/Documentation/softDesignBrochure.jpg)
* [HTTPS: secure the connection between client and Cloudflare](https://github.com/UMM-CSci-3601-S19/iteration-4-endgame/blob/master/Documentation/HTTPS.md)
* [How Cookies is Currently Used](https://github.com/UMM-CSci-3601-F19/iteration-4-rockin-reindeer/blob/master/Documentation/cookies.md)

[NGXCookie]: https://www.npmjs.com/package/ngx-cookie-service
[CHARTjs]: https://www.chartjs.org/
[AngMat]: https://material.angular.io/
[SendGrid]: https://sendgrid.com/
[yarn]: https://yarnpkg.com/lang/en/
[GD]: https://gradle.org/
[Ang]: https://angular.io/
[AngCli]: https://cli.angular.io/
[TS]: https://www.typescriptlang.org/
[spark]: http://sparkjava.com/
[JU]: https://junit.org/junit5/
[travis]: https://travis-ci.org/
[karma]: https://karma-runner.github.io/latest/index.html
[jasmine]: https://jasmine.github.io/
[mongo]: https://www.mongodb.com/
[DO]: https://www.digitalocean.com/
[CF]: https://www.cloudflare.com/
[BS]: https://www.browserstack.com/
