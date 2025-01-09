# Unhandled Promise Rejection in Express.js Route

This repository demonstrates a common error in Express.js applications: unhandled promise rejections in asynchronous route handlers.  When an asynchronous operation within a route throws an error, and that error isn't properly caught, the server crashes. This example shows the problematic code and a solution using proper error handling.

## Bug

The `bug.js` file contains an Express.js server with an asynchronous route handler.  The `doSomethingAsync` function simulates an asynchronous operation that might throw an error. However, the route handler lacks proper error handling, leading to a crash if the asynchronous operation fails.

## Solution

The `bugSolution.js` file demonstrates how to properly handle the potential error using `.catch()` to gracefully handle errors and prevent the server from crashing.