<img src="./readme/title1.svg"/>

<div align="center">

> Hello world! This is the project’s summary that describes the project plain and simple, limited to the space available.

**[PROJECT PHILOSOPHY](https://github.com/malak-joumaa/homemade#-project-philosophy) • [WIREFRAMES](https://github.com/malak-joumaa/homemade#-wireframes) • [TECH STACK](https://github.com/malak-joumaa/homemade#-tech-stack) • [IMPLEMENTATION](https://github.com/malak-joumaa/homemade#-impplementation) • [HOW TO RUN?](https://github.com/malak-joumaa/homemade#-how-to-run)**

</div>

<br><br>

<img src="./readme/title2.svg"/>

> Homemade is a website that allows users to sell and buy homemade food. This website helps both, home cooks who are not able to find a job and people who don't have access to homemade food.

Cooks can create menus with their special recipes and sell them to the community, while customers can discover various menus and home cooks around them.

### User Stories

#### &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; As a Customer:

- I want to see menus of home cooks that are located in my area and have the option to view cooks from other areas.
- I want to see the top and new home cooks.
- I want to view the cook details with their menu and order food.
- I want to see my placed orders that are not delivered yet.
- I want to view the route between my location and the cook's location.
- I want to chat with the cook.
- I want to be able to rate the cook.

#### &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; As a Cook:

- I want to create and view my menu.
- I want to be able to check my customer's orders and change the status of the orders.
- I want to be able to view the route between my location and the customer' location.
- I want to be able to chat with the customer.
- I want to be able to view other cooks.

<br><br>

<img src="./readme/title3.svg"/>

> This design was planned before on paper, then moved to Figma app for the fine details.
> Note that i didn't use any styling library or theme, all from scratch and using pure css modules

| Main Page                                        | Cook Page                                     |
| ------------------------------------------------ | --------------------------------------------- |
| ![Main Page](readme/Images/wf-main-page.png)     | ![Cook Page](readme/Images/wf-cook-page.png)  |
| Order Modal                                      | Cart                                          |
| ![Order Modal](readme/Images/wf-order-modal.png) | ![Cart](readme/Images/wf-cart.png)            |
| Checkout                                         | Ordered                                       |
| ![Checkout](readme/Images/wf-checkout.png)       | ![Ordered](readme/Images/wf-cook-profile.png) |

<br><br>

<img src="./readme/title4.svg"/>

Here's a brief high-level overview of the tech stack the Homemade website uses:

- This project uses the [ReactJS](https://reactjs.org/). React is a JavaScript library used for building composable user interfaces. It encourages the creation of reusable UI components, which present data that changes over time.
- For persistent storage (database), the app uses the [Mongoose ODM](https://mongoosejs.com) package which allows the app to create a custom storage schema and save it to [MongoDB](https://www.mongodb.com).
- To send Messages, the app uses [Socket.IO](https://socket.io/) which is a library that enables low-latency, bidirectional and event-based communication between a client and a server.
- To display maps and get user's location, the app uses the [React Leaflet](https://react-leaflet.js.org/) package which is an open-source library for creating interactive maps.

<br><br>
<img src="./readme/title5.svg"/>

> Using the above mentioned tech stacks and the wireframes build with figma from the user stories we have, the implementation of the app is shown as below, these are screenshots from the real app

| Landing                                            | Sign In                                               |
| -------------------------------------------------- | ----------------------------------------------------- |
| ![Landing](readme/Images/Landing.png)              | ![Sign In](readme/Images/sign-in.gif)                 |
| Sign Up                                            | Follow Up                                             |
| ![Sign Up](readme/Images/Sign-up.png)              | ![Follow Up](readme/Images/follow-up1.gif)            |
| Follow Up                                          | Follow Up                                             |
| ![Sign Up](readme/Images/follow-up2.png)           | ![Follow Up](readme/Images/follow-up3.gif)            |
| Explore Page                                       | Cooks From Different Areas                            |
| ![Main Page](readme/Images/explore-page.gif)       | ![Different Areas](readme/Images/different-areas.gif) |
| Cook Page                                          | Order Modal                                           |
| ![Cook Page](readme/Images/cook-page.gif)          | ![Order Modal](readme/Images/order-modal.gif)         |
| Cart                                               | Checkout                                              |
| ![Cart](readme/Images/cart.png)                    | ![Checkout](readme/Images/checkout.png)               |
| Ordered                                            | Rate                                                  |
| ![Ordered](readme/Images/ordered.gif)              | ![Rate](readme/Images/rate.png)                       |
| Cook Profile Orders                                | Cook Profile Menu                                     |
| ![Checkout](readme/Images/cook-profile-orders.png) | ![Ordered](readme/Images/cook-profile-menu.png)       |
| Chat                                               | Add Menu                                              |
| ![Checkout](readme/Images/chat.gif)                | ![Ordered](readme/Images/add-menu.png)                |

<br><br>
<img src="./readme/title6.svg"/>

> This is an example of how you may give instructions on setting up your project locally.
> To get a local copy up and running follow these simple example steps.

### Prerequisites

First, you need to have the latest npm version installed.

````bash

- npm
  ```sh
  npm install npm@latest -g
````

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = "ENTER YOUR API";
   ```
