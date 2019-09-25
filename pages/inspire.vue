<template>
    <v-layout>
        <v-flex class="text-center">
            <img src="/v.png" alt="Vuetify.js" class="mb-5" />
            <blockquote class="blockquote">
                &#8220;First, solve the problem. Then, write the code.&#8221;
                <footer>
                    <small>
                        <em>&mdash;John Johnson</em>
                    </small>
                </footer>
            </blockquote>
        </v-flex>
    </v-layout>
</template>


<script>
export default {
    created() {
     this.$axios.get(process.env.VUE_APP_DATABASE_URL + '/users.json').then(res=>{console.log(res.data)})
    }
}
</script> 
