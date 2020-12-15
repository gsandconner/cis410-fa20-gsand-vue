<template>
    <div>
        <h1>Account</h1>
        <hr/>
        <h3> {{CustomerFName}}'s Sticker Purchases </h3>

        <p v-if="accountError" class="form-text text-danger">Can not get your account information, please try again later</p>
        
        <table v-if="CheckOutUser" class="table">
            <thead>
                <th>Sticker</th>
                <th>Number Of Items</th>
                <th>Date Of Order</th>
            </thead>
            <tbody>
                <tr v-for="thisPurchase in CheckOutUser" :key="thisPurchase.CustomerID">
                    <th><router-link :to="`/Stickers/${thisPurchase.ID}`"> 
                    {{thisPurchase.StickerID}}</router-link></th>
                    <th>{{thisPurchase.NumberOfItems}}</th>
                    <th>{{thisPurchase.DateofOrder}}</th>
                </tr>
            </tbody>   
        </table>
    </div>
</template>


<script>
import axios from 'axios';
export default {
    data(){
        return{
            CheckOutUser: null,
            accountError: false
        }
    },
    computed:{
    CustomerFName(){
        console.log(this.$store.state)
        return this.$store.state.user.CustomerFName}
    },
    created(){
        axios.get("/CheckOut/me", {
            headers: {
                Authorization: `Bearer ${this.$store.state.token}`
            }
        })
        .then((response)=>{ 
            console.log("here is the CheckOut/me response:", response)
            this.CheckOutUser = response.data})
        .catch(()=>{
            this.accountError = true
        })
    }
}
</script>

<style scoped>
</style>