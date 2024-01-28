const sql=require("mysql");

const con = sql.createConnection(
    {
        host:"127.0.0.1",
        user:"root",
        password:"",    
        database:"testing"
    }
)

con.connect(function(err)
{
    if(err) throw err;
    console.log("Connected");
}
);
con.query("CREATE TABLE tabular(userName varchar(255),emailId varchar(255),phoneNo int(11))",function(err,result)
{
    if(err)throw err;
    console.log("Table created");
});