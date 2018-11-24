<template>
    <div id="SearchResultDisplay">
        <SearchBox v-bind:Current_keyword=Location />

        <!--pass data to the weather component -->
        <span v-if="data">
            <Weather v-for="location in data" :key="location.woeid" v-bind:woeid=location.woeid v-bind:today_weather=true />
        </span>

        <!-- Display the loading while search the data -->
        <span v-else>
            <div v-if="results" class="animationload">
                <div class="osahanloading"></div>
            </div>

            <!-- Show the not found message if the key word is wrong -->       
            <span v-else>
                <div id="mainC">
                    <div class="message">
                        <h1>404</h1>
                        <h3>Ohh.! results not  found. Please check the Keybord and  Try with different  keyword!</h3>
                    </div>

                    <div class="footer">
                        <p class="legal">copyright &copy; 2018&nbsp; Geeth Wishkamal&trade; all rights reserved</p>
                    </div>
                </div>
            </span>
        </span>     
    </div>
</template>

<script>
    import Weather from "./weather"
    import SearchBox from './SearchBox'
    import {WeatherService} from "../Services/api"

    export default
    {
        name : "SearchResultDisplay",
        components:
        {
            Weather, SearchBox
        },
        data()
        {
            return {
                
                Location : '',//city name
                results : true,
                data : null
            }
        },
        created ()
        {
            this.fetchData();
        },
        watch:
        {
            '$route': 'fetchData'
        },
        methods:
        {
            fetchData()
            {
                this.Location = this.$route.params.Location
                // get the values related to the searched keyword
                WeatherService.SearchLocations(this.Location).then((response) => {
                    if(response.data.length > 0)
                        this.data = response.data
                        this.results = false
                    })
                    .catch(function (error)
                    {
                        // get the error msg if there is
                        this.results = false
                        alert(error)
                    })
            }
        }
    }
</script>

