const env = process.env.NODE_ENV;
if (env === 'production') {
    console.log("NODE_ENV=" + process.env.NODE_ENV);
    console.log("API_URL=" + process.env.API_URL);
} else {
    console.log("NODE_ENV=development");
    console.log("API_URL=http://localhost:8080/api");
}