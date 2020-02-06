# 10-HW-Template-Engine

* [`Screenshot`] ![My Team](./ScreenShot.png)
* [`Git Hub`](https://github.com/hannalip/10-HW-Template-Engine)
* [`Demo Site`](https://hannalip.github.io/10-HW-Template-Engine/)
* [`JavaScript`](app.js)
* [`Test`](..test.js)
* [`/Templates`](engineer.html, index.html, intern.html, manager.html)
* [`/Lib`](engineer.js, employee.js, intern.js, manager.js)
* [`JSON`](package.json)
* [`JSON`](package-lock.json)
* [`gitgnore`]

In this assignment, we created an application which will prompt the user for information about the team manager and then information about the team members. The user can input any number of team members, and they may be a mix of engineers and interns.

## Approach

* Define a constructor for the base employee, then extend it into the three employee types
* Create html templates for each employee type
* Using the command line, prompt the team leader to enter their information
* Once the team leader is added, begin adding team members
* Using the list of team members, generate the html page containing all members of the team

### Challenges
The most significant challenge was rendering the information received in the command line to the HTML templates.

### Packages
* jest
* inquirer

### Site Demo
![Site](./demo.gif)

