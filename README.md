# Morris Laundry Facilities
### CSCI 3601 F19 Iteration 4
##### Authors: Robert Beane, Michael Fairbanks, Christian Thielke, Machi Iwata, Kai Zang, and Waller Li

[![Build Status](https://travis-ci.org/UMM-CSci-3601-F19/iteration-4-rockin-reindeer.svg?branch=master)](https://travis-ci.org/UMM-CSci-3601-F19/iteration-4-rockin-reindeer)

## About

A list of tools, languages, and technologies the project uses.

### Look at Each Machine Status

When any room is selected by the user, there is a display of washers and dryers for that selected room. Washers and dryers are distinguishable through the separated menus as well as different icons. Each machine
is then color coded, green for vacant, yellow for in use, and grey for broken machines. This color coding is represented with a left border on each machine as well each machines own progress bar, which can be
a more helpful visual.
 
### See Busy-times of the Laundry Rooms

Two different types of graphs have been implemented through [Chart.js][CHARTjs], one a line graph and one a bar graph, as well as a drop down menu to select which day you would like to look at. The line graph is a 
visual representation of machine usage for all halls with different colored buttons corresponding to each hall that toggles on or off that line on the graph. When you select a specific room, 
you will notice that the line graph has now changed to a bar graph to show more specifically when machines in that hall are at their most busy.

### Check Out Machine Details (see subscribe)

For every machine in every hall, there are three different buttons, the three vertical dots(FOR VACANT MACHINES), a bell icon(FOR MACHINES IN USE), or 
a button that says "Details...". Each button creates a popup dialog that shows: What Type of Machine, Is it Vacant, Report Button, 
as well as a subscription fill-in so you can receive updates through email about that machine.

### Subscribe to Rooms and Machines

With the implementation of () mailing service, users have the ability to make a subscription to a room or machine and receive an email.
Users can click on the details button within a machine card and if the machine is in use then the user is able to enter their email
to be notified when the machine is done. After the user enters their email, a request is sent to the mailing service and then an email
will be sent.

### Choose a Room of Your Liking (button, dropdown)

If you are already on a specific page for a hall, you have two options of selecting different halls to view. If you scroll to the top of the hall's page
you will find a drop down menu displaying buttons for every hall as well as a machine vacancy ratio. You may also click the button that may appear in the 
bottom right that says "Switch Rooms", which just redirects you to the first dropdown at the top of the page.

### Welcome Page Redirection

When you load the website for the first time you will be show a welcome page with a list of buttons for every hall on campus. Each button then redirects you 
to a separate page specifically for viewing that room's machines.

### Set Default Room (using cookies)

This project has the ability to set your favorite/default room. This is done with the help of cookies,
more specifically, [NGX-cookie-service][NGXCookie]. When a user sets a default room, cookies are created
for the ```room_id``` and ```room_name```. The user can also remove their default room by clicking the same
button which resets the cookies to be set to ```all_rooms```. When the user reloads the home domain, the cookies are called
and bring the user to their default room.

### Report Malfunctioning Machines

A report functionality was implemented for the case when a user discovers a problem with a machine. The user can find the machine
that has a problem and can click the machine details button. This will bring up a machine dialog with a "Report an issue" button
located at the bottom. This brings the user to 'The Office of Residential Life' work request form. The report page will have the
following information auto-filled: Building, Apartment/Room/Area, Are you a Resident of... , the Request type and Request Details.

## Documentation

1. [Important Notes for Running Tests](https://github.com/UMM-CSci-3601-F19/iteration-4-rockin-reindeer/blob/master/Documentation/testInstruction.md)
2. [Deployment Guide (HTTPS, server ports and necesssary configurations)](https://github.com/UMM-CSci-3601-F19/iteration-4-rockin-reindeer/blob/master/Documentation/deployment.md)
3. [Known Issues and To-dos](#ToDo-List-&-Known-Issues)
4. [Promotional Pamphlet](https://github.com/UMM-CSci-3601-F19/iteration-4-rockin-reindeer/blob/master/Documentation/softDesignBrochure.jpg)
5. [HTTPS: secure the connection between client and Cloudflare](https://github.com/UMM-CSci-3601-S19/iteration-4-endgame/blob/master/Documentation/HTTPS.md)
6. [How Cookies is Currently Used](https://github.com/UMM-CSci-3601-F19/iteration-4-rockin-reindeer/blob/master/Documentation/cookies.md)

## ToDo List & Known Issues

#### To fix the redirection when top-level/home/ is requested

Currently the history chart cannot update currectly when "top-level/home/" is requested. The initialization function of the home component should be fixed to resolve this problem.

#### To be able to use cookies to remember if a machine has been subscribed to or not

Currently the issue is that if you subscribe to a machine, the icon changes and will not allow you to subscribe again, but if you refresh the page it will allow you to just subscribe again if you wanted to.

#### To check the compatibility of the app on different phlatforms and devices

Currently the sticky small-screen room header only work on IOS 13+. There may exist other unknown css compatibility problems. A cross phlatform test tool like Browserstack can help to accomplish the problem.

#### To break the current client-side components into smaller pieces for better maintainability

Currently we have a huge home.component.ts in our client side. Breaking it into smaller pieces will help to simplify the html and make future development easier.

#### To simplify the styling in html and css files

Currently there exists a lot of styling in html and diferent level of css files. Using simplification tools to reduce the overwrites and duplicates can make future styling easier. Some unnecesssary padding and margins in the current project may have increased the overall complexity of the overall styling, locating and removing the unnecesssary css may help a lot to resolve this problem.

#### To check if the chart displays reasonable if the devices is in a another time zone

Currently it is unknown what info will be displaied when the client runs in a different time zone other than the Chicago time.

#### To add aditional info to help users better understand the "Buzy time"

Current our busy time follows the design of Google map's busy time. Further analysis on what should be displaied on the chart may help users better understand the usage of the laundry machines.

#### To add mat-tool-tip to different elements

Currently only a few buttons have corresponding mat tool tips. Adding more tool tips can help users better understand different features of the web app.

#### To make server's suscription feature more efficient and more stable

Currently the server cannot detect the failure in sending email, the duplicates of the same subscription, or the invalid subscription with falsy room / machines. Adding these features to the server can make it run more stably and more efficiently.

#### Setup environment variable access in of the server

Currently we have to change the code manually if we want to: 1) switch between reading remote data or local test data. 2) Update the base_url (used in sending email) and the sendgrid key on deployment. Setting up environment variable access in the server can makeing testing and deploying easier.

#### To enable the client only receive the machine into of a single room

Currently because there is not too much machines, the client will receive the info of all the machines add calculate how much machines are running in each room after that. Adding a new API for different room's machine info, moving the calculation of the # of running / available machines to the server and only send the requested room's machines together with the numerical summary of other rooms running / available machines numbers can help the client run more efficiently.

#### To add a loading progress bar for potential longer loading delay

Currently a rotating loading spinner is displaied when loading the app. Showing a loading progress bar on the top of the page can provide users a more intuitive feeling when users access the app.

#### To test the dialog componsnts more throughly

For some reasons the current have some diffifulty to find a efficient way to test the dialog functions through Krama and Jasmine. Adding these tests can help to maintain the quality of futural development.

#### To provide e2e tests for different screen sizes

The current e2e tests only work on wider screens (width >= 1200px). Prviding different tests for different screens can help to improve the stabbility of futural development.

[NGXCookie]: https://www.npmjs.com/package/ngx-cookie-service
[CHARTjs]: https://www.chartjs.org/
