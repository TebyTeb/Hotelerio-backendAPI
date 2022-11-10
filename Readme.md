# HOTELERIO
## DESCRIPTION
Hotelerio is a platform focused on creating hotel reservations on demand to end-point users. This is a MVP version of the back-end and, for now, it uses three DB collections: Users, Rooms and Reservations. Although it will be further developed in the future to implement new characteristics. 

# DB SCHEMAS

## USERS

| KEY        | TYPE         | REFERENCE | REQUIRED | VALIDATION       |
|------------|--------------|-----------|----------|------------------|
| name       | string       |           | YES      |                  |
| surname    | string       |           | YES      |                  |
| birthday   | date         |           | NO       |                  |
| identtification       | string       |           | YES      |                  |
| email      | string       |           | YES      | RegExp, Unique                 |
| phone      | number       |           | NO       |                  |
| password   | string       |           | YES      |                  |
| role       | enum       |           | NO       | Admin, Client                |
| reservs    | [Objectid]      | reservation          | NO       | {role:client}               |
...

## ROOM

| KEY         | TYPE          | REFERENCE | REQUIRED | VALIDATION        |
|-------------|---------------|-----------|----------|-------------------|
| roomNumber  | number        |           | YES      |                   |
| roomFloor   | number        |           | YES      |                   |
| typeOfRoom  | string        |           | NO       |                   |
| occupied    | boolean       |           | YES      |                   |
| prepared    | boolean       |           | YES      |                   |
| capacity    | number        |           | NO       |                   |
...

## RESERVATION

| KEY         | TYPE          | REFERENCE | REQUIRED | VALIDATION        |
|-------------|---------------|-----------|----------|-------------------|
| client      | [Objectid]      |  user         | YES      |   {role:client}                 |
| room        | [Objectid]     |  room         | YES      |   {role:client}                 |
| checkIn     | date          |           | YES      |                   |
| checkOut    | date          |           | YES      |                   |
| companions  | [{Object}]   |           | NO       |                   |
...

## COMPANION

| KEY         | TYPE           | REFERENCE | REQUIRED | VALIDATION                         |
|-------------|----------------|-----------|----------|------------------------------------|
| name        | string         | YES       | YES      |                                    |
| surname     | string         | YES       | YES      |                                    |
| identtification    | string         | YES       | YES      |                                    |
...

# API ROUTES

## AUTHENTICATION ENDPOINTS

| METHOD | URL             | AUTH | FUNCTION                 |
|--------|-----------------|------|--------------------------|
| POST   | '/auth/login'   | NO   | Authenticate a user      |
| POST   | '/auth/signup'   | NO   | Create a user account     |

## USERS ENDPOINTS

| METHOD | URL                  | AUTH    | FUNCTION                    |
|--------|----------------------|---------|-----------------------------|
| GET    | '/users/'            | Admin   | List all clients            |
| GET    | '/users/:id    '     | User / Admin | List one user          |
| POST   | '/users/             | Admin   | Create a admin account      |
| PUT    | '/users/:id'         | User / Admin | Update an user or an admin profile    |
| Delete | '/users/:id'         | User / Admin | Delete an user or an admin profile    |
...

## ROOM ENDPOINTS

| METHOD | URL                  | AUTH    | FUNCTION                    |
|--------|----------------------|---------|-----------------------------|
| GET    | '/rooms/'            | Admin   | List all rooms              |
| GET    | '/rooms/available'   | User / Admin | List all available rooms|
| GET    | ''/rooms/:id'        | Admin   | List one room                |
| GET    | '/roomsid/occupants' | Admin   | List all occupants in one room |
| POST   | '/rooms/'            | Admin   | Create one room              |
| PUT    | '/rooms/:id'               | Admin   | Update one room              |
| Delete | '/rooms/:id'               | Admin   | Delete one room              |
...

## RESERVATION ENDPOINTS

| METHOD | URL                  | AUTH    | FUNCTION                    |
|--------|----------------------|---------|-----------------------------|
| GET    | '/reserv/'           | Admin   | List all reservations       |
| GET    | '/reserv/:id'        | User / Admin | List all own reservations |
| POST   | '/reserv/'           | User / Admin   | Create one reservation  |
| PUT    | '/reserv/:id'        | User / Admin   | Update one reservation  |
| Delete | '/reserv/:id'        | User / Admin   | Delete one reservation  |

...