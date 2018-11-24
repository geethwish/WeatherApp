<template>
    <div class="container">
        <br/>
        <div class="row justify-content-center">
            <div class="col-12 col-md-10 col-lg-8">
                <form class="card card-sm" @submit.prevent="searchlocation">
                    <div class="card-body row no-gutters align-items-center">
                        
                        <div class="col-auto">
                            <i class="fab fa-searchengin"></i>
                        </div>
                        
                        <div class="col">
                            <input class="form-control form-control-lg form-control-borderless" type="search" placeholder="Search City" v-model="Location" name="Location">
                        </div>
                        
                        <div class="col-auto">
                            <button class="btn btn-lg btn-success" type="submit">Search</button>
                        </div>
                        
                    </div>
                </form>
            </div>
        </div>
    </div> 
</template>

<style>
    .form-control-borderless
    {
        border: none;
    }

    .form-control-borderless:hover, .form-control-borderless:active, .form-control-borderless:focus
    {
        border: none;
        outline: none;
        box-shadow: none;
    }
</style>

<script>
    export default
    {
        name:"SearchBox",
        props:
        {
            Current_keyword: String,
        },
        data ()
        {
            return {
                Location: ''
            }
        },
        methods:
        {
            searchlocation ()
            { 
                this.$router.push({ path: '/search/'+this.Location })
            },
        },
        created()
        {
            if(this.Current_keyword) this.Location = this.Current_keyword;
        } 
    }
</script>

