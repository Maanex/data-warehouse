# data-warehouse

A very tiny data collection service using REST and MySQL.

## Usage

Requests go to `POST <server>/event/:namespace/:type`. Individual events are placed as a JSON-Array in the request body.

Event namespaces and types are defined in **src/data/event_structure.json**. You may define as many events as you like and use js primitives as types. Use the same names as your database uses. For a database template visit **sql/create.sql**.

Authorization is not set up yet, yet every request required the precense of a 'Authorization' header. To add validation checks for said header, go to **/src/server.ts** to implement one.

## Setup

Either build and run the docker container or use `yarn build` and `yarn run`

Required environment variables (change these in the Dockerfile or create a .env file):
**SQL_HOST**
**SQL_USER**
**SQL_PASSWORD**
**SERVER_PORT**

## Info

This project was made to collect data for a Discord bot but already shut down before going into production in favor of a less accurate analytics setup because we did not actually need this much detail in our data. That being said this server works completely fine and can be used in production.
