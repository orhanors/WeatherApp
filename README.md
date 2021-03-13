# WeatherApp with TypeScript and Redux

<details>
<summary><b> Initial Setup </b></summary>
    </br>
    <p> To run this project locally on port 3000, run the following commands: </p>
  
```bash
npm i 
```
```bash
npm start 
```

 <p> Create a .env file under the project root folder and put following variables inside of it </p>

```bash
REACT_APP_GOOGLE_API_KEY
REACT_APP_BE_URL
```
If you run the related [backend](https://github.com/orhanors/WeatherApp-BE) on locally you can set REACT_APP_BE_URL=http://localhost:3001/api
</details>




### Features

<details>
<summary><b> Search from WeatherAPI</b></summary>
    </br>
    <p> You can search whatever city you want around the world and you'll see the next 6 days weather report </p>
   <a href="https://github.com/orhanors/WeatherApp/blob/master/screenshots/w1.png">
  <img alt="app" src="https://github.com/orhanors/WeatherApp/blob/master/screenshots/w1.png" />
</a>
</details>

<details>
<summary><b> Login with your Google or Facebook Account </b></summary>
 </br>
    <p> You can create account to save cities as your favorite. Backend implementation keeps your cities in database you can see them anytime you want </p>
   <a href="https://github.com/orhanors/WeatherApp/blob/master/screenshots/w3.png">
  <img alt="app" src="https://github.com/orhanors/WeatherApp/blob/master/screenshots/w3.png" />
</a>
</details>

<details>
<summary><b> Like cities and see them when you come back </b></summary>
 </br>
    <a href="https://github.com/orhanors/WeatherApp/blob/master/screenshots/w2.png">
  <img alt="app" src="https://github.com/orhanors/WeatherApp/blob/master/screenshots/w2.png" />
</a>
</details>

<details>
<summary><b> See the location of the searched city on map </b></summary>
 </br>
    <p> You'll love this feature. It responds immediately to changes </p>
    Map component implemantation can be found <a href="https://github.com/orhanors/WeatherApp/blob/master/src/components/Map/index.tsx">here</a>
</details>
