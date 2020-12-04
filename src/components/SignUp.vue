<template>
    <div>
        <h1>Sign UP</h1>
          <form @submit.prevent="onSubmit">
            <div class="form-group"><label for="fname-input">First name</label> <input type="text" id="fname-input" required="required" placeholder="First name" class="form-control" v-model="CustomerFName"></div> 

            <div class="form-group"><label for="lname-input">Last name</label> <input type="text" id="lname-input" required="required" placeholder="Last name" class="form-control" v-model="CustomerLName"></div> 

            <div class="form-group"><label for="email-input">Email address</label> <input type="email" id="email-input" required="required" placeholder="Enter email" class="form-control" v-model="CustomerEmail"> 
            <small v-if="dupEmail" class="from-text text-danger">Please chose a different email.</small>
            </div> 


            <div class="form-group"><label for="password-input">Password</label> <input type="password" id="password-input" placeholder="Password" required="required" value="asdfasdf" class="form-control" v-model="CustomerPassword">

            </div> <button type="submit" class="btn btn-primary">Submit</button> <p id="error-signup" class="text-danger">{{errorMessage}}</p>

            </form>
    </div>
</template>


<script>
import axios from 'axios';
export default {
    data(){
return{
   CustomerFName:'',
   CustomerLName:'',
   CustomerEmail:'',
CustomerPassword:'',
    errorMessage:'',
    dupEmail:false
}
    },
    methods:{
        onSubmit(){
            const myFormData ={
                CustomerFName:this.CustomerFName,
                CustomerLName:this.CustomerLName,
                CustomerEmail:this.CustomerEmail,
               CustomerPassword:this.CustomerPassword
            }
           /// console.log(myFormData)
           axios.post("/Customer", myFormData)
           .then((myResponse)=>{
            //console.log(myResponse)
            this.$router.replace("/signin?signupsuccess=true")
            
            })
            .catch((myError)=>{
                if(myError.response.status ===409){
                    this.dupEmail= true;
                }else{
                    this.errorMessage = "Cannot sign you up, Please try again Later"
                }
            })
        }
    }
}
</script>

<style scoped>
</style>