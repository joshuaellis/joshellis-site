# Josh Ellis – Site

## Authors

- [Josh Ellis](https://bitbucket.org/joshua_ellis/)

## Tech / Requirements

- Node, version `>=8.15.1`
- NPM, version `>=5`
- Heroku CLI (for deployment)

## Development

1. `nvm use` to get the correct version of node running
2. `yarn install` to install modules
3. `yarn run dev` to begin running
4. [http://localhost:3000/](http://localhost:3000/)

## Domains / Environments

Both hosting environments are managed on Heroku, the domain is registered with GoDaddy.

- Staging is found at [joshellis-staging](https://joshellis-staging.herokuapp.com/)
- Production is found at [joshellis.co.uk](https://joshellis.co.uk)

Strings for the site can be found [here](https://docs.google.com/spreadsheets/d/1s8q_k8eTo0Rx7l5EnacQv300jRF6k0J-29ax2IQCtTU/edit?usp=drive_web&ouid=107176943068560084374). To fetch them you can use the following command: `yarn fetch:strings`

## Deployment

### Staging

`yarn deploy:staging`

### Production

`yarn deploy:prod`
