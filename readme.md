# Josh Ellis – Site

## Authors

- [Josh Ellis](https://bitbucket.org/joshua_ellis)

## Tech / Requirements

- Heroku
- Node @ 10.15.3
- NPM

## Domains / Environments

- Staging is found at [joshellis-staging.herokuapp.com](https://joshellis-staging.herokuapp.com/)
- Production is found at [joshellis.co.uk](https://joshellis.co.uk)

## Development

1. `nvm use` to set up correct node version
2. `npm install` to install modules
3. `npm run dev` to run
4. [http://localhost:3000/](http://localhost:3000/)

## Deployment

### Initial

Both hosting environments are managed on Heroku, the domain is registered with GoDaddy.
There are two things that need to be done before you can deploy, that is to add the correct apps to the repo.

1. Add `heroku-staging`: `heroku git:remote -a joshellis-staging -r heroku-staging`
2. Add `heroku-production`: `heroku git:remote -a joshellis-production -r heroku-production`

### Staging

Run either of the following:

1. `git push heroku-staging develop:master`
2. `npm run deploy:staging`

### Production

Run either of the following:

1. `git push heroku-production master:master`
2. `npm run deploy:prod`
