<template>
    <div>
        <div class="card">
       <div class ="card-body">
           <h2 class="text-primary">{{Sticker.Title}}</h2>
           <br/>
           <p>Description:<br/> <strong>{{Sticker.StickerDescription}}</strong></p>
           <p>Style:<br/> <strong>{{Sticker.Style}}</strong></p>
           <p>Price:<br/> <strong>{{formattedPrice}}</strong></p>
           
       </div>
        </div>


        <router-link v-if="auth" :to="`/Stickers/${this.$route.params.ID}/Checkout`">
        <button type="button" class ="btn btn-success"> Purchase Sticker</button>
        </router-link>
        <router-link v-else :to="`/signin`">
        <button type="button" class ="btn btn-success"> Sign In to Add a Reviewr</button>
        </router-link>
    </div>
</template>


<script>
export default {
    computed:{
        Sticker(){
            var Stickers = this.$store.state.Stickers;
            var thisSticker =Stickers.find((aSticker)=> aSticker.StickerID ==this.$route.params.ID)

            //console.log("Here is the Sticker you want",thisSticker);
            return thisSticker
        },
        formattedPrice(){
            return new Intl.NumberFormat("en-US",{
                style: 'currency',
                currency: 'USD'
            }).format(this.Sticker.Price)
        },
        auth(){return this.$store.state.token}

    }
}
</script>

<style scoped>
</style>