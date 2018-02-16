# Hunt Builder

## **User stories**
1. When the user loads the app they will be directed to register or signin
2. Once logged in, the user will see the landing page, where they will be able to search for hunts, view nearby hunts, and navigate the app with the static bottom nav bar
3. When a user makes a scavenger hunt they will having an option of how many steps they want their hunt to be. Each step will have a qr code to scan. There will be clues attached the each qr code for the next steps in the hunt
4. A user will be able to create their own hunt quickly and simply - by dragging and orienting a map to choose the boundaries, selecting how many steps they want their hunt to be, and filling in the hints for each step of the hunt, the qr codes will automatically be generated and sent to the email address associated with that user's account

## **Why Did we build this? What problem does this solve?**
We built this for the scavenger hunt enthusiast. There are many 'hunt' applications specific to different cities around the world, but few tools to easily and quickly create city based hunts of your own. This is intended to be a light, quick way to design and build a hunt.

## **Approach**


## **Installation instructions**
Go to the Play or App store on your android or app phone and download.

## **Technology used**
This app was developed with React.js as the front-end framework and a Ruby-Sinatra API making queries to a Postgres database for the back-end. Maps are handled by Google Maps API, Mailgun handles email automation for sending the generated QR codes.

## **Unsolved problems**
Originally, this was being developed in React <i>Native</i>, with the intent of deploying for iOS when finished, but there were issues with compatibility between versions of React Native and the Maps API, which lead to further problems when those issues were attempted to be resolved via version switching. 


#### Wireframes
![user flow](https://i.imgur.com/EsuzO3H.jpg)


![table data and user stories](https://i.imgur.com/aYN2kmE.jpg)