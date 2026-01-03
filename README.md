# Library-Management-System

this is a library Management API backend For the Managemnet oof Users And Books

## routes and the End Points

## /user

GET : get all the list of the Users in the System
POST : Adding / Creating A New User , register user

## /user/{id}

GET : get a user by Their IDs
PUT : Updating a UserBy their ID
DELETE :Deleting a user By their ID (check if thhe user Still has an Issued Book ) && ( is there is any Fine TO be Collected or Dued)

## /users/subscription-detials/{id}

GET: get a user Subscription detials by their ID

> > Date of Subscription
> > Valid Until
> > Fine if Any

## /books

GET : Get all the Books in the System
POST : to add a new book to the System

## /book{id}

GET: Get A book by {ID}
PUT : update a Book by ITs ID
DELETE : Delete a book by ITs ID

## /books/issued

GET : get All the ISUED Book

## /books/issued/withFine

GET : Get all issued book with their Fine Amount

### Subscription Type

> > basics (3 Mon)
> > Standatd (6 Mon)
> > Premium (12 Mon)

> > if User Missed the renewal date , then user Should be Collected with 100rs
> > if a user Misses his SubsCription , then used is Expected to pay 100rs
> > if Both 200rs

## Comands:

npm init
npm i express
npm i nodemon --save-dev (change script for Dev Dependency)

npm i (if we Delete packege_lock or node_moudles)


