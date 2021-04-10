### Node(Express): Tour ###

```
Run Project by command
dev: yarn start:dev
prod: yarn start:prod

```

## APIs ##
```
// Tour APIs

// Get all tours
* { GET } /api/v1/tours

// Get tour by id
* { GET } /api/v1/tours/6055c999db6eda2b046acc57

// Create tours
* { POST } /api/v1/tours

// Update tour by id
* { PATCH } /api/v1/tours/6060274de2984318d8e0da86

// Get all tours by filter
* { GET } /api/v1/tours?page=1&limit=5&sort=-ratingAverage,price&fields=name,price,ratingAverage

// Top 5 cheapest tours
* { GET } /api/v1/tours/top-5-cheap

// Tour stats
* { GET } /api/v1/tours/tour-stats

// Monthly Plans
* { GET } /api/v1/tours/monthly-plan/2021

// Delete a tour
* { GET } /api/v1/tours/6055c999db6eda2b046acc5f

```

```
// Auth APIs

// Sign Up
* { POST } /api/v1/users/signup

// Login
* { POST } /api/v1/users/login

// Update PassWord
* { PATCH } /api/v1/users/updatePassword

// Forget PassWord , this will return token for reset password
* { POST } /api/v1/users/forgotPassword

// Reset PassWord
* { PATCH } /api/v1/users/resetPassword/8a9ec01ec9c77e826166f8adb3c42e1b2755714f6e62dabc7eb49c7d56fc0bf6

```

```
// User APIs

// Get all users
* { GET } /api/v1/users
```