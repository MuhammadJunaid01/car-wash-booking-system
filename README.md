# Car Service Booking System

This README file provides comprehensive information about the Car Service Booking API. This API allows users to register, log in, and book various car services. It also provides administrative capabilities to manage services and booking slots. The document includes details on models, API endpoints, and request/response formats.

## Tech Stack

**Server:** Node, Express, Typescript,MongoDB,

## API Reference

#### Car Service Booking System

```http
  POST /api/auth/signup
```

| Parameter  | Type     | Description   |
| :--------- | :------- | :------------ |
| `name`     | `string` | **Required**. |
| `email`    | `string` | **Required**. |
| `password` | `string` | **Required**. |
| `phone`    | `string` | **Required**. |
| `role`     | `string` | **Required**. |
| `address`  | `string` | **Required**. |

```http
  POST /api/auth/login
```

| Parameter  | Type     | Description   |
| :--------- | :------- | :------------ |
| `email`    | `string` | **Required**. |
| `password` | `string` | **Required**. |

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
