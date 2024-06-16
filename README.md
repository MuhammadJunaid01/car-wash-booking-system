# Car Service Booking System

This README file provides comprehensive information about the Car Service Booking API. This API allows users to register, log in, and book various car services. It also provides administrative capabilities to manage services and booking slots. The document includes details on models, API endpoints, and request/response formats.

## Tech Stack

**Server:** Node, Express, Typescript,MongoDB,

## API Reference

#### Car Service Booking System

```http
  POST /api/auth/signup
```

#### Request Body

```
  "name": "Programming Hero",
  "email": "web@programming-hero.com",
  "password": "ph-password",
  "phone": "1234567890",
  "role": "admin", //role can be user or admin
  "address": "123 Main Street, City, Country"

```

| Parameter  | Type     | Description   |
| :--------- | :------- | :------------ |
| `name`     | `string` | **Required**. |
| `email`    | `string` | **Required**. |
| `password` | `string` | **Required**. |
| `phone`    | `string` | **Required**. |
| `role`     | `string` | **Required**. |
| `address`  | `string` | **Required**. |

#### Response

```

  "success": true,
  "statusCode": 200,
  "message": "User registered successfully",
  "data": {
    "_id": "60629b8e8cfcd926384b6e5e",
    "name": "Programming Hero",
    "email": "web@programming-hero.com",
    "phone": "1234567890",
    "role": "admin",
    "address": "123 Main Street, City, Country",
    "createdAt": "2024-06-15T12:00:00Z", // For this, ensure that your model includes the option to enable timestamps
    "updatedAt": "2024-06-15T12:00:00Z", // For this, ensure that your model includes the option to enable timestamps


```

```http
  POST /api/auth/login
```

#### Request Body

```
    "email": "web@programming-hero.com",
    "password": "ph-password",

```

| Parameter  | Type     | Description   |
| :--------- | :------- | :------------ |
| `email`    | `string` | **Required**. |
| `password` | `string` | **Required**. |

#### Response

```

    "success": true,
    "statusCode": 200,
    "message": "User logged in successfully",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MDYyOWI4ZThjZmNkOTI2Mzg0YjZlNWUiLCJuYW1lIjoiUHJvZ3JhbW1pbmcgSGVyb3MiLCJlbWFpbCI6IndlYkBwcm9ncmFtbWluZy1oZXJvLmNvbSIsInBob25lIjoiMTIzNDU2Nzg5MCIsInJvbGUiOiJhZG1pbiIsImFkZHJlc3MiOiIxMjMgTWFpbiBTdHJlZXQsIENpdHksIENvdW50cnkiLCJpYXQiOjE2MjQ1MTY2MTksImV4cCI6MTYyNDUyMDYxOX0.kWrEphO6lE9P5tvzrNBwx0sNogNuXpdyG-YoN9fB1W8",
    "data":
        "_id": "60629b8e8cfcd926384b6e5e",
        "name": "Programming Hero",
        "email": "web@programming-hero.com",
        "phone": "1234567890",
        "role": "admin",
        "address": "123 Main Street, City, Country",
        "createdAt": "2024-06-15T12:00:00Z", // For this, ensure that your model includes the option to enable timestamps
        "updatedAt": "2024-06-15T12:00:00Z", // For this, ensure that your model includes the option to enable timestamps

```

```http
  POST /api/services
```

#### include Authorization: Bearer token

| Parameter     | Type     | Description   |
| :------------ | :------- | :------------ |
| `name`        | `string` | **Required**. |
| `description` | `string` | **Required**. |
| `price`       | `string` | **Required**. |
| `duration`    | `string` | **Required**. |
| `isDeleted`   | `string` | **Required**. |

#### Get Service BY ID

```http
  GET/api/services/:id
```

| Parameter | Type     | Description   |
| :-------- | :------- | :------------ |
| `id`      | `string` | **Required**. |

#### Get All Services

```http
  GET/api/services
```

| Parameter | Type | Description |
| :-------- | :--- | :---------- |

#### Update Services (Only Accessible by Admin)

#### include Authorization: Bearer token

```http
  PUT/api/services/:id
```

| Parameter | Type     | Description   |
| :-------- | :------- | :------------ |
| `price`   | `number` | **Required**. |

#### Delete a Service (Only Accessible by Admin) include Authorization: Bearer token

```http
  DELETE/api/services/:id
```

| Parameter | Type | Description |
| :-------- | :--- | :---------- |

#### Create Slot (Only Accessible by Admin) include Authorization: Bearer token

```http
  DELETE/api/services/:id
```

| Parameter   | Type     | Description   |
| :---------- | :------- | :------------ |
| `service`   | `string` | **Required**. |
| `date`      | `string` | **Required**. |
| `startTime` | `string` | **Required**. |
| `endTime`   | `string` | **Required**. |

#### Get available slots include Authorization: Bearer token

```http
  GET//api/slots/availability?date=2024-06-15&serviceId=60d9c4e4f3b4b544b8b8d1c5
```

#### Book a Service (Only Accessible by User) include Authorization: Bearer token

```http
  POST/api/services/:id
```

| Parameter           | Type     | Description   |
| :------------------ | :------- | :------------ |
| `serviceId`         | `string` | **Required**. |
| `slotId`            | `string` | **Required**. |
| `vehicleType`       | `string` | **Required**. |
| `vehicleBrand`      | `string` | **Required**. |
| `vehicleModel`      | `string` | **Required**. |
| `manufacturingYear` | `number` | **Required**. |
| `registrationPlate` | `string` | **Required**. |

#### Get All Bookings (Only Accessible by Admin) include Authorization: Bearer token

```http
  GET/api/bookings
```

#### Get User's Bookings (Only Accessible by User) include Authorization: Bearer token

```http
  GET/api/my-bookings
```

## Demo

https://github.com/MuhammadJunaid01/car-wash-booking-system.git

## Installation

Install Car Wash Booking System with yarn

```bash
   gti clone https://github.com/MuhammadJunaid01/car-wash-booking-system.git
   cd car-wash-booking-system
   yarn
   yarn dev
```
