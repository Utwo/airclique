# AirClique API

## Config
All necessary configs are in env.example. Just copy env.example to .env 

## Setting up this beauty!

```
$ cp .env.example .env
```
- copy .env.example to .env (don't forget to edit this file according to your needs)

```
$ npm install
```
- install all dependencies

```
$ node ace key:generate
```
- generate a new key for your application

```
$ node ace migration:refresh --seed
```
- reset current migrations, migrate the database, seed the database

```
$ npm run dev
```
- start web server in dev mode with autoreloading enabled

Visit backend dev on [localhost:3333](http://localhost:3333)

```
$  node ace
```
- for a list of all available commands


### Database ###

```
$  node ace migration:run
```
- migrate the database

```
$  node ace migration:reset
```
- reset all migrations

```
$  node ace migration:refresh
```
- refresh migrations

```
$  node ace db:seed
```
- seed the database with dummy data
