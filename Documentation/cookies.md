# How Cookies Work (Using [NGX-Cookie-Service][NGXCookie])
## Prerequisites
### Installing/Updating the service via Yarn
This app already has the cookie service installed, but if for whatever reason you need to reinstall it
or update it, use the following command in your console.
> yarn add ngx-cookie-service

## How we used Cookies
### Current Usage
For this web app, we used cookies to remember the users default room choice
so whenever they would reload the base domain, they would be brought to their
desired room.

### Future Usage
In the future, we were thinking of using cookies to remember if the user signed
up for notifications for a specific machine within a certain amount of time. Due to
not enough time, we were unable to implement this feature.

## How the Functions Work
### Setting a Default Room
Within our ```home.component.ts``` is the ```updateCookies``` function. This function
sets the cookies within the browser whenever it is called, in our case, it was called
when clicking the ```Remember current room``` button. The function took in
both the ```room_id``` and ```room_name``` of each room and set cookies using the ```.set```
function of the ngx-cookie-service. Below is an example of one of the cookies we set:
> this.cookieService.set('room_id', id, undefined, '/');

```'room_id'``` = name of cookie.

```id``` = value of the cookie (ex. green_prairie).

```undefined``` = duration cookie is set for.

```'/'``` = the path the cookie is set for (we had to have two paths for each cookie this iteration
due to the addition of different routes).

## More Questions?
The npmjs page for the ngx-cookie-service has all the info you need along with all the different commands
you can use that we did not. Check it out [here][NGXCookie].

[NGXCookie]: https://www.npmjs.com/package/ngx-cookie-service