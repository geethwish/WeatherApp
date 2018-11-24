<template>
    <div class="container">
        <!-- Retriving Data-->
        <div v-if="loading" class="animationload">
            <div class="osahanloading"></div>
        </div>

        <!-- weather information display fields -->
        <div v-if="today_weather">
            <div class="blurred-box">
                <img v-bind:src="'https://www.metaweather.com/static/img/weather/png/64/' + data.consolidated_weather[0].weather_state_abbr + '.png'"
                width="20%" height="3%">
                <div class="user-login-box" >
                    <div class="user-name">City <h2> <router-link :to="'/weather/'+data.woeid">{{data.title}}</router-link></h2></div>
                    <div class="user-name">Tempreature <h3>{{Math.round(data.consolidated_weather[0].the_temp)}}&#x2103;</h3></div>
                    <div class="user-name">Weather Status <h3>{{data.consolidated_weather[0].weather_state_name}}</h3></div>
                    <div class="user-name">Wind Speed <h3>{{Math.round(data.consolidated_weather[0].wind_speed)}}Kmh</h3></div>      
                </div>
            </div>
            <br>
            <hr>
        </div>

        <!-- weather information display fields of single city  -->
        <div v-else>
            <h1 class="head">This Week Weather Details of {{data.title}} </h1>
            <span v-for="weather in data.consolidated_weather" v-bind:key=weather.id>
                <div class="blurred-box">
                    <img v-bind:src="'https://www.metaweather.com/static/img/weather/png/64/' + data.consolidated_weather[0].weather_state_abbr + '.png'" width="20%" height="3%">
                    <div class="user-login-box" >
                        <div class="user-name"> Max: Tempreature
                            <h3>{{Math.round(weather.max_temp)}} &#x2103;</h3>
                        </div>
                        <div class="user-name"> Tempreature
                            <h3>{{Math.round(weather.the_temp)}} &#x2103;</h3>
                        </div>
                        <div class="user-name"> Min: Tempreature
                            <h3>{{Math.round(weather.min_temp)}} &#x2103;</h3>
                        </div>
                        <div class="user-name"> Wind Speed
                            <h3>{{Math.round(weather.wind_speed)}}Kmh</h3>
                        </div>
                        <br>
                        <div class="user-name">Humidity
                            <h3>{{weather.humidity}}%</h3>
                        </div>
                        <div class="user-name"> Weather Stauts
                            <h3>{{weather.weather_state_name}}</h3>
                        </div>
                        <div class="user-name"> Date
                            <h3>{{weather.applicable_date}}</h3>
                        </div>
                        <div class="user-name"> Day
                            <h1>{{weather.applicable_date | dateToWeekday}}</h1>
                        </div>
                        <br>
                        <br>    
                    </div>
                </div>
                <hr>
            </span>
        </div>
        
    </div>
</template>

<script>
    import {WeatherService} from "../Services/api"
    export default
    {
        name:'weather',
        props:
        {
            woeid: Number,
            today_weather: Boolean
        },
        data ()
        {
            return{
                loading: false,
                data: {},
                error: null
            }
        },
        created ()
        {
            this.fetchData()
        },
        methods:
        {
            fetchData ()
            {
                this.data = {}
                this.loading = true
                WeatherService.GetByWoeid(this.woeid).then((response) => {
                this.data = response.data
                this.loading = false
                })
                .catch(function (error) {
                    //this.loading = false
                    alert(error)
                })
            }
        },
        filters:
        {
            dateToWeekday: function (date)
            {
                var d = new Date(date);
                var weekday = [];
                weekday[0] =  "Sunday";
                weekday[1] = "Monday";
                weekday[2] = "Tuesday";
                weekday[3] = "Wednesday";
                weekday[4] = "Thursday";
                weekday[5] = "Friday";
                weekday[6] = "Saturday";
                return weekday[d.getDay()];

            }
        }
        
    }
</script>

<style>

    .animationload
    {
    
        height: 100%;
        left: 0;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 10000;
    }

    .osahanloading
    {
        animation: 1.5s linear 0s normal none infinite running osahanloading;
        background: #f14f04 none repeat scroll 0 0;
        border-radius: 50px;
        height: 50px;
        left: 50%;
        margin-left: -25px;
        margin-top: -25px;
        position: absolute;
        top: 50%;
        width: 50px;
    }

    .osahanloading::after
    {
        animation: 1.5s linear 0s normal none infinite running osahanloading_after;
        border-color: #3f0366 transparent;
        border-radius: 80px;
        border-style: solid;
        border-width: 10px;
        content: "";
        height: 80px;
        left: -15px;
        position: absolute;
        top: -15px;
        width: 80px;
    }
    @keyframes osahanloading
    {
        0% {
            transform: rotate(0deg);
        }
        50% {
            background: #85d6de none repeat scroll 0 0;
            transform: rotate(180deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .blurred-box
    {
        position: relative;
        width: 100%;
        height: 20%px;
        top: calc(30% - 200px);
        left: calc(10% - 25px);
        background: inherit;
        border-radius: 2px;
        overflow: hidden;
    }

    .blurred-box:after
    {
        content: '';
        width: 1000px;
        height: 700px;
        background: inherit; 
        position: absolute;
        left: -25px;
        right: 0;
        top: -25px;  
        bottom: 0;
        box-shadow: inset 0 0 0 400px rgba(145, 142, 142, 0.5);
        filter: blur(10px);
    }

    /* Form which you dont need */
    .user-login-box
    {
        position: relative;
        margin-top: 50px;
        text-align: center;
        z-index: 1;
    }

    .user-login-box > *{
    display: inline-block;
    width: 200px;
    }

    router-link-active
    {
        color: #f14f04
    }
    h2
    {
        color: #f14f04
    }
    hr{
        height: 5px;
    }

</style>

