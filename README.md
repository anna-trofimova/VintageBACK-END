## Second-hand

# Description

This is an app to buy and sale vinatage clothes and accessories. You can update your wardrobe and get rid of boring things!

# User Stories

• 404: As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault

• Signup: As an anon I can sign up in the platform so that I can start buying and saling stuff.

• Login: As a user I can login to the platform so that I can buy and sale stuff.

• Logout: As a user I can logout from the platform so no one else can use it

• Make Post: As a user I can do post and add clothes and accessories

• Edit Post: As a user I can edit my post

• Delete Post: As a user I can delete my post

• Edit User profiles: As a user I can edit my personal informaton

• View List of Posts: As a user I want to see the all other user's posts

• Buy: As a user I can buy

• Connect with owner: As a user I want to have connection with owner to buy stuff.

# Backlog

**User profile:**

• edit my profile

• add photo

• rating

• delete posts

• edit posts

**Post view:**

• write comments

• has likes/dislikes

• detail view

**Other:**

• has a cart

• to do a chat

• delete posts from cart

# Client / Frontend

**Routes**

| **Path**             | **Component**    | **Permissions** | **Behavior**                                                    |
| -------------------- | ---------------- | --------------- | --------------------------------------------------------------- |
| /auth/signup         | SignupPage       | anon only       | `Signup form, link to login, navigate to homepage after signup` |
| /auth/login          | LoginPage        | anon only       | `Login form, link to signup, navigate to homepage after login`  |
| /auth/logout         | n/a              | anon only       | `Navigate to homepage after logout, expire session`             |
| /item                | ItemListPage     | user only       | `Shows all posts with item in a list (Home page)`               |
| /item /:id/details   | ItemDetailPage   | user only       | `Details of an item to see more details`                        |
| /item/create         | CreatePost       | user only       | `Create a new post`                                             |
| /item/delete         | n/a              | user only       | `Delete posts`                                                  |
| /me                  | UserPage         | user only       | `Show user's information and his posts`                         |
| /me/:id/edit         | EditUserPage     | user only       | `Edit user's personal information`                              |
| /purchase            | PurchaseListPage | user only       | `Shows all selected posts in the cart`                          |
| /purchase/:id/buy    | MessagePage      | user only       | `Shows owner's contacts and sent a message to user and owner`   |
| /purchase/:id/delete | n/a              | user only       | `Delete a post from cart`                                       |

**Components**

• LoginPage

• SignupPage

• ItemListPage

• ItemDetailPage

• UserPage

• EditUserPage

• CreatePost

• PurchaseListPage

• MessagePage

• Comment

• Navbar

# Services

**Auth Service**
o auth.login(user)

o auth.signup(user)

o auth.logout()

**Item Service**
o Item.list()

o Item t.detail(id)

o Item.create()

o Item.edit(id)

o Item.delete(id)

**PurchaseService**
o Purchase.list()

o Purchase.buy()

# Server / Backend

# Models

<pre>
User model

{   username - String // required & unique     
​    email - String // required & unique   
​    password - String // required & unique  
​    phone – Number // required & unique  
​    img – String // required
​    registrationDate – String  //timestamp
​    myItems - [item._id] 
​    myPurchase – [purchase._id]
  }

Item model

 {    name:String,    
      img:String, 
      description:String  
      year: Number 
​      price: Number
​      category:['clothing', 'shoes', 'accessories']
     isBought:false  
  }

Purschase model

{

​      ownerID:user._id
​      userID:user._id
​      itemID:item._id 
}
</pre>

# API Endpoints (backend routes)


| **HTTP Method** | **URL**              | **Request Body**                                         | **Success status** | **Error Status** | **Description**                                                                                                                   |
| --------------- | -------------------- | -------------------------------------------------------- | ------------------ | ---------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| GET             | /auth/profile        | Saved session                                            | 200                | 404              | `Check if user is logged in and return profile page`                                                                              |
| POST            | /auth/signup         | {name, email, password}                                  | 201                | 404              | `Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session` |
| POST            | /auth/login          | {username, password}                                     | 204                | 401              | `Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session`              |
| POST            | /auth/logout         | (empty)                                                  | 200                | 400              | `Logs out the use`                                                                                                                |
| GET             | /item                | { name, price, img}                                      | 200                | 400              | `Show all items`                                                                                                                  |
| GET             | /item /:id/details   | {id, name, price, img, description, year}                | 201                | 400              | `Show specific item`                                                                                                              |
| POST            | /item/create         | { id, name, price, img, description, year}               | 200                | 400              | `Create and save a new item`                                                                                                      |
| PUT             | /item/:id/edit       | { name, price, img, description, year}                   | 201                | 400              | `Edit item`                                                                                                                       |
| DELETE          | /tem/:id/delete      | {id}                                                     | 201                | 400              | `Delete item`                                                                                                                     |
| POST            | /me                  | {username, img, registrationDate, phone, email, myItems} | 201                | 400              | `Show user information`                                                                                                           |
| POST            | /me/:id/edit         | {username,img,phone, email}                              | 201                | 400              | `Edit user information`                                                                                                           |
| GET             | /purchase            | {ownerID, itemID}                                        | 200                | 404              | `Show all purchases`                                                                                                              |
| DELETE          | /purchase/:id/delete | {id}                                                     | 200                | 400              | `Delete purchase`                                                                                                                 |
| POST            | /purchase/:id/buy    | {phone, email }                                          | 201                | 400              | `Show message`                                                                                                                    |


# Links

**Trello/Kanban**
https://trello.com/b/IrKEwO41/second-hand 
**Git***
BACK-END
FRONT-END

# Slides

The url to your presentation slides
Slides Link
