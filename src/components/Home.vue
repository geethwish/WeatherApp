<template>
    <div id="home"> 
        <SearchBox/>
        <br>
        <h1>Today Weather</h1> 
        <Weather v-for="woeid in default_cities" :key="woeid" v-bind:woeid=woeid v-bind:today_weather=true  />
    </div>
</template>

<script>
    import SearchBox from './SearchBox'
    import Weather from './weather'

    export default
    {
        name: "Home",
        data ()
        {
            return {
                //cities that display in homepage
                default_cities: [44418,638242,9807,2344116,565346,560743]
            }
        },
        components:
        {
            SearchBox,Weather
        }
    }
</script>

<style>
    body
    {
        margin:0;
        padding:0;
        background-image:url(https://images.pexels.com/photos/257840/pexels-photo-257840.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);
        background-size:cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        width: 100%;
        height: 100%;
        font-family: Arial, Helvetica;
        letter-spacing: 0.02em;
        font-weight: 400;
        -webkit-font-smoothing: antialiased; 

        background-position: top;
    }
</style>
