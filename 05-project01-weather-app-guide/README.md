- [Project 1 - Weather App](#project-1---weather-app)
  - [Guide](#guide)
  - [Specifications of the Project:](#specifications-of-the-project)

# Project 1 - Weather App

Weather app is a simple project which touches on a few fundamentals that we have developed so far in the course and enforce the learnings further.

## Guide

**Pre-Requisite Skills:**
-	Understanding of Controllers
-	Understanding of express fundamentals 
-	Understanding Templating 

**Goals of the Project:**
-	Learning how to manage secrets
-	Learning to integrate third party services into the application 
-	Practicing and re-enforcing core API fundamentals 
-	Getting a grasp over templating 

**Required 3rd Party Integrations:**
-	OpenCage API (sign up for API Key here https://opencagedata.com/)
-	OpenMeteo API

> express, ejs, dotenv, axios, nodemon
> folder config, public, routes, controllers, views
> require express, path, dotenv, axios. mw json, urlencoded, view engine --ejs, static --public, cors

## Specifications of the Project: 

1. /(root route):

Render a search page where users can search for a location.

> search results

This page can be rendered with an EJS template which takes a single query and forwards it to the forecast route, passing on the input value into it as the query string.

2. /forecast?q=query (forecast):

Render the results for the specific location

> results of the searching

The page must have 3 sections: 
-	Location Block (contains information about the location) 
-	Current Time Block (contains weather data for the current time) 
-	Hourly Block (gives weather information by the hour) 

To achieve this, we need to do the following. 

-	Create a controller which obtains the forecast information for the requested location.
-	Extract the location from the query string.
-	One small caveat we run into is the fact that OpenMeteo api just takes the longitude and latitude, but unfortunately for us we don’t have something to geocode (converting location name to coordinates). To fix this we bring in the OpenCage API. 
-	Use the OpenCage API to geocode the location which was passed on and extract the coordinates.
-	Using these coordinates make further requests to the Open Meteo API and check the parameters for hourly and current time weather. 
-	Create a template with corresponding cards and render the data onto those pages by passing the retrieved information in parameters to the render method.
