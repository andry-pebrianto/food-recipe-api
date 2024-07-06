<div align="center">
  <img src="./readme/logo.svg" />
</div>
<h3 align="center">Koleksi Resep API</h3>
<p align="center">
  <a href="https://koleksi-resep-api.onrender.com">View API Demo</a>
  ·
  <a href="https://github.com/andry-pebrianto/koleksi-resep-api/issues">Report Bug</a>
</p>

<!-- ABOUT THE PROJECT -->
## About The Project

This is a Restful API repository for Koleksi Resep. This Restful API is built using ExpressJS and PostgreSQL.

### Technology Used

- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [JWT](https://jwt.io/)
- [Google APIs](https://github.com/googleapis/google-api-nodejs-client)
- [Google Auth Library](https://www.npmjs.com/package/google-auth-library)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [Nodemailer](https://nodemailer.com/about/)
- [Cloudinary](https://cloudinary.com/)
- [Neon PostgreSQL](https://neon.tech/)

## Getting Started

### Installation

- Clone this project with `git clone https://github.com/andry-pebrianto/koleksi-resep-api.git
- Install package required with `yarn`
- Setting .env

```bash
APP_NAME=
NODE_ENV=
PORT=
API_URL=
CLIENT_URL=

# database
PGUSER=
PGHOST=
PGPASSWORD=
PGDATABASE=
PGPORT=

# jwt
ACCESS_TOKEN_KEY=
REFRESH_TOKEN_KEY=

# google
EMAIL_FROM=
EMAIL_USER=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
REDIRECT_URI=
GMAIL_REFRESH_TOKEN=

# cloudinary
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
CLOUDINARY_CLOUD_NAME=
```

- Migrate database using `yarn run migrate up`

### Executing program

- Run program with `yarn run dev` for development and `yarn run start` for production

<!-- RELATED PROJECT -->
## Related Project 

- [Koleksi Resep Client](https://github.com/andry-pebrianto/koleksi-resep-client)
- [Koleksi Resep Demo](https://koleksi-resep.netlify.app/)

## Authors

Contributors names and contact info:

1. Andry Pebrianto

- [Linkedin](https://www.linkedin.com/in/andry-pebrianto)

## License

This project is licensed under the MIT License - see the LICENSE file for details
