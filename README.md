![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | Express roles


## Introduction

You are asked to create **a full learning platform** covering not only the related CRUDS but adding an extra security layer through sessiones and roles.

As the Ironhack Student Portal is, **all the routes from this platform will also be protected** - except the login and signup ones to allow users to authenticate. 

Any other route should be private, and any attempt to access without being logged must be rejected. 

Fuegote! 🔥


## Requirements

- Fork this repo
- Clone this repo

## Submission

- Upon completion, run the following commands:

  ```
  git add .
  git commit -m "done"
  git push origin master
  ```

- Create Pull Request so your TAs can check up your work.

## Instructions

## Iteration #1: Allow users to acess the platform

Create the full auth system to allow users to signup, login and logout on our platform. 

You will need to install all related dependences, as well as to develop both the routes and views, but we already provided 90% of the user schema in the `models/user.model.js` file. Extend it to add these potential roles: **'BOSS', 'DEV', 'TA', 'STUDENT', 'GUEST'**, and set 'GUEST' as the default one.




## Iteration #2: Allow logged users to see other user's profiles

Our users want to check other user's profiles.

**Tasks:**

- Create a `/users` endpoint listing all current users from the plaform.
- Include one `/users/:id` link per user on the list, to render a nice profile page with the info from the `id` matching user.
- Prevent access to these routes for any non logged visitor.



## Iteration #3: Grant specific privileges to the General Manager

There will be only one user that will have the **BOSS** role. That user should be able not only to access the platform, but to edit or remove any of the current users.


**Tasks:**

- Use Mongo Compass to give a user the **BOSS** role.
- This user will be able to see a _Delete user_ and _Edit user_ buttons on each user profile. 
- Develop the needed routing system and views to archive this two goals.
- Avoid any other user to see these extra buttons, access the routes or perform any of the related actions.


## Iteration #4: General Manager role handling 

The General Manager, as a boss, can appoint any user as a Developer or a TA. 


**Tasks:**

- Allow the General Manager to update through the application any user role to 'DEV' or 'TA'.
- Avoid any other user to archive this.


## Iteration #5: User profile editing

At this point only our General Manager is allowed to edit user's profiles. Develop the system to allow each user to edit their own profile.


**Tasks:**

- Create the system that would allow each user to edit _their own profile_.
- Avoid any user to edit other user's profile (except our General Manager, of course!)




## Bonus: Course creation

We have users already defined, so our next step is to be able to create our courses. An Ironhack platform without courses is nothing.

The TAs will have the responsibility to create courses, so we will have to create the routes and views to let them create courses. **The courses can be created just by TAs**. The course model is already created for you.

**Tasks:**

- Create a CRUD to let the TAs add/list/update/remove courses from the platform.
- The routes need to be protected, and the TA role will be the only one with this permission being granted.

## Bonus: Plaform extras

There are some details to accomplish on your application in order to archive a super proffessional platform:

- Integrate form validation in order to:
  - Ensure all fields from all forms are filled before submitting to the database.
  - Signup: avoid weak passwords. 8 characters as minimum length, one number required.
  - Signup: ensure the user is properly informed when truing to signup with an already taken username.
- Add a security layer on the user profile and course details routes, both containing an ID on the URL:
  - Ensure the requested ID matches the MongoDB ID format to avoid your application to crash.
  - Avoid your application to crash when requested ID does not retrieve any results from the database.
- Allow users assist to any course they want:
  - Include a "Join course" button on every course to add that user to the `students` field from the course model.
  - Render the list of assistants on every the course view.

Happy coding! :heart:
