9 lines (60 sloc)  2.28 KB
  
<template>
     <div class="row justify-content-center">
         <div class="col-lg-10">
             <div class="card">
                 <div class="card-body">
                     <h4>Create a Review</h4> 
                     <form id="review-form" @submit.prevent="submitPurchase">
                        <div class="form-group">
                             <label for="ratinginput">Enter Number of Stickers You want to Purchase</label> 
                             <input type="number" id="ratinginput" name=" rating" min="1" max="10" required="required" class="form-control" v-model="NumberOfItems">
                        </div>
                         <div class="form-group">
                            <label for="summaryinput">Enter Todays Date</label> <textarea row="3" id="dateinput" name="Date" required="required" class="form-control" v-model="DateOfOrder"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit Purchase</button> 
                        
                        <button v-on:click="cancelPurchase" type="clear" class="btn btn-outline-danger">
                        Cancel
                        </button>

                        <p v-if="errorMessage" class="form-text text-danger">{{errorMessage}}</p>
                    </form>
                </div>
        </div>
        </div>
        </div>
</template>
<script>
import axios from 'axios';
export default {
    data(){
return{
    NumberOfItems:null,
    DateOfOrder:null,
    
    errorMessage:null
}
    },
    methods:{
        submitPurchase(){
            const myPurchase={
                NumberOfItems:this.NumberOfItems,
                DateOfOrder:this.DateOfOrder,
                StickerID:this.$route.params.ID
            }
            //console.log("this is the Purchase",myPurchase)
            const token =this.$store.state.token;
            axios.post("/CheckOut",myPurchase,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            .then(()=>{this.$router.replace('/Account')})
            .catch(()=>{this.errorMessage ="Unable to Purchse Sticker, Please try again later"})
        },
        cancelPurchase(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
</style>