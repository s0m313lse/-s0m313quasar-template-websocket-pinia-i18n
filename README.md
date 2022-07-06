This is a demonstration of app data management driven by websocket events. To see this in action, open the app in two separate windows. Notice the actions of one are reflected in the other. Spooky action at a distance!

As a boilerplate starting point for developing your own great app, this simple Todo List app packs a lot of features.

Instant Network => a real time network of users connected via websockets, the app is entirely event driven and designed to be responsive, scalable and secure.

Fast Development => the entire tech stack is written in JavaScript; one language to build servers, databases, and mobile views as well as the usual website scripting. Hot reloading speeds your develpment process and minimizes mistakes. Working code examples of the features allow you to get right into development rather than researching syntax.

This app is built on the Quasar framework which can build a website, an Android APK, an IOS app, or a desktop app from the same codebase. The front end implements the Composition API of Vue3 and uses Pinia state management Servers are built using Node v14 and Express, which also provides the websocket API. 

# Quasar App (quasar-project)

A Quasar Project

## To install the dependencies

```bash
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
# to start the websocket server
npm run dev
```
then, in a separate terminal

```bash
quasar dev
```

### Lint the files
```bash
npm run lint
```

### Build the app for production
```bash
quasar build
```
