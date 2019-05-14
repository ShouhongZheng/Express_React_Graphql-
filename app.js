const express=require("express");
const graphqlHTTP=require("express-graphql");
const schema=require('./schema/schema');
const mongoose=require('mongoose');
const cors=require('cors');
const app=express();
app.use(cors());
mongoose.connect('mongodb+srv://zhengshouhong:E%21xcel123@cluster0-fpbtq.mongodb.net/test?retryWrites=true',{ useNewUrlParser: true });
mongoose.connection.once('open',()=>{
  console.log("connected to databse");
});
app.use("/graphql",graphqlHTTP({
schema,
graphiql:true
}));
app.listen(4000,()=>{
  console.log("I am listening for requests on prot 4000...");
});
