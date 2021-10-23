# Civitatis callenge by Mati Rocha
Challenge to job application to Full Stack PHP position

## Requirements

Backend

1. PHP >= 7.2.5
2. BCMath PHP Extension
3. Ctype PHP Extension
4. Fileinfo PHP extension
5. JSON PHP Extension
6. Mbstring PHP Extension
7. OpenSSL PHP Extension
8. PDO PHP Extension
9. Tokenizer PHP Extension
10. XML PHP Extension
11. Composer

Frontend

1. Node.js or later
2. npm package manager

# Frontend Readme

In the frontend we use NextJS, the React Framework. 
1. Run the following command:
``
    cd frontend
    npm install
``
2. Configure the .env file with the api url
3. Once finished, we can run the following command to get the app live in localhost:3000.
``
    npm run dev
``

## Backend Readme
1. Run the following command:
``
    cd backend
    composer install
``
2. Create a new mysql database
3. Configure the .env file with the database credentials
4. After, run the following command for the migrations and seeder:
``
    php artisan migrate --seed
``
5. Once finished, we can serve our app by running the following command
 ``
    php artisan serve
``
