const express = require("express");
const app = express();
const sql=require("mysql");
const path = require("path");
const bodyparser=require("body-parser");
const moment=require("moment");

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

const con = sql.createConnection(
    {
        host:"127.0.0.1",
        user:"root",
        password:"",
        database:"testing"
    }
);

con.connect(function(err)
{
    if(err) throw err;
    console.log("Connected");
}
);

app.get("/",function(req,res)
{
res.sendFile(path.join(__dirname,"list.html"))
});

const querys =(sq,value,res,successMessage)=>
{
  con.query(sq,value,function(err,result)
  {
    if(err)throw err;
    console.log(successMessage);
    res.json({message:successMessage});
  }
  ) ; 
};

app.post('/insert',function(req,res)
{
    const {userName,emailId,PhoneNo}=req.body;
    const sq="Insert into tabular(userName,emailId,phoneNo)values(?,?,?)";
    const value=[userName,emailId,PhoneNo];
    querys(sq,value,res,"Record inserted successfully");
}
)



app.post('/update', function (req, res) {
    const { userName, emailId } = req.body;
    console.log(`Received update request for user: ${userName}, new email: ${emailId}`);
    
    const sq = "UPDATE tabular SET emailId = ? WHERE userName = ?";
    const values = [emailId, userName];  // Note the order of values has been switched

    querys(sq, values, res, 'Record updated successfully');
});

app.post('/delete', function (req, res) {
    const { userName } = req.body;
    console.log(`Received delete request for user: ${userName}`);

    const sq = "DELETE FROM tabular WHERE userName = ?";
    querys(sq, [userName], res, 'Record deleted successfully');
});

app.post('/search', function (req, res) {
    const { userName } = req.body;
    console.log(`Received delete request for user: ${userName}`);

    const sq = "SELECT * FROM tabular WHERE userName = ?";
    con.query(sq, [userName], function (err, result) {
        if (err) {
            console.error('Error executing search query:');
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            console.log(result);
            res.json(result);
        }
    });
});
app.listen(3001,function(){
    console.log("server is running");
}
);