<template>

   <div id="WeatherDetails">
        <Weather v-bind:woeid=woeid v-bind:today_weather=false />   
   </div>
   
</template>

<script>
    import Weather from "./weather"
    export default
    {
        name: 'WeatherDetails',
        data () {
            return {
                woeid: parseInt(this.$route.params.woeid)
            }
        },
        components: {
            Weather
        }
    };
</script>

<style>
</style>