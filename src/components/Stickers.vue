<template>
    <div>
        <h1>Stickers</h1>
        <hr/>

        <table class="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Style</th>
                    <th></th>
                
                </tr>
            </thead>
            <tbody>
                <tr v-for="thisSticker in Stickers" :key="thisSticker.StickerID">
                    <th>{{thisSticker.Title}}</th>
                    <td>{{thisSticker.StickerDescription}}</td>
                    <td>{{thisSticker.Style}}</td>
                    <td>
                        <router-link :to="`/Stickers/${thisSticker.StickerID}`">
                        <button type ="button" class="btn btn-primary">Details</button>
                        </router-link>
                        </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<script>
export default {
    computed:{
        Stickers(){return this.$store.state.Stickers}
    }
}
</script>

<style scoped>
</style>