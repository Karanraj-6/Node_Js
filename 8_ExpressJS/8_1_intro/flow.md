Here’s a typical folder structure:

1️⃣ Root folder

package.json → npm dependencies

.env → environment variables (Mongo URI, ports, secrets)

server.js or app.js → main entry point

2️⃣ Folders inside root

routes/

Contains all route definitions.

Example:

routes/
  userRoutes.js
  authRoutes.js


controllers/

Logic for handling requests (CRUD, validation, etc.)

Example:

controllers/
  userController.js
  authController.js


models/

Mongoose schemas and models.

Example:

models/
  userModel.js
  productModel.js


middlewares/

Custom middleware (auth, logger, error handler)

Example:

middlewares/
  authMiddleware.js
  errorHandler.js


config/

DB connection, constants, or config files

Example:

config/
  db.js
  constants.js


utils/ (optional)

Helper functions used across the project

Example:

utils/
  emailSender.js
  tokenGenerator.js


public/ (optional for static assets)

If you serve images, CSS, JS files directly

Example:

public/
  css/
  js/
  images/

3️⃣ Example flow
server.js             <-- entry point
.env                  <-- env variables
package.json          <-- dependencies

config/db.js          <-- Mongoose connection
models/userModel.js
controllers/userController.js
routes/userRoutes.js
middlewares/authMiddleware.js
utils/tokenGenerator.js


Flow:

server.js → connects DB, uses routes

routes/userRoutes.js → defines endpoints /users, /users/:id

controllers/userController.js → contains logic like createUser(), deleteUser()

models/userModel.js → defines User schema