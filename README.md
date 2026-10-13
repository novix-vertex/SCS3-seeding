# SCS3-seeding
Aggregation Pipeline (Ritik's Session) seed the db into local mongo db


## Database Seeding

Follow the steps below to seed the movie data into your local MongoDB database from ritik's session aggregation shared db link but make sure that json file provided by Ritik is in the data folder. (I have not added it here as it was quite large in size.)

### Steps

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

2. **Make sure MongoDB is installed and running locally**

   The project currently uses a local MongoDB connection string configured in the `.env` file.

   You can change the `MONGO_URI` in `.env` according to your MongoDB setup.

3. **Install dependencies and seed the database**

   Run:

   ```bash
   npm i && npm run seed
   ```

4. **Check your local MongoDB**

   Open MongoDB Compass or your preferred MongoDB client and refresh the database/collection.

5. **You're done!**

   The movie data has now been seeded into your local MongoDB database.
