const express=require("express");
const app =express();
const path=require("path");
const mysql=require("mysql");
const bodyParser=require("body-parser");
const moment=require("moment");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var con=mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"testing"
});
con.connect(function(err)
{
    if(err) throw err;
    console.log("Connected");
});
app.get("/",function(req,res)
{
    res.sendFile(path.join(__dirname,"index.html"));
}
)
const executeQuery = (sql, values, res, successMessage) => {
    con.query(sql, values, (err, result) => {
        if (err) {
            console.error(`Error executing query: ${err}`);
            res.status(500).send('Internal Server Error');
        } else {
            console.log(successMessage);
            res.json({ message: successMessage });
        }
    });
};
app.post('/create', (req, res) => {
    const { userName, emailId, phoneNo, password } = req.body;
    const dateTime = moment().format('YYYY-MM-DD HH:mm:ss');
    const sql = "INSERT INTO userData (userName, emailId, phoneNo, password, dateTime) VALUES (?, ?, ?, ?, ?)";
    const values = [userName, emailId, phoneNo, password, dateTime];
    executeQuery(sql, values, res, 'Record inserted successfully');
});
app.post('/search', function (req, res) {
    const emailId = req.body.emailId;

    con.query('SELECT * FROM userData WHERE emailId = ?', [emailId], function (err, result) {
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
app.post('/update', (req, res) => {
    const { emailId, newPassword } = req.body;
    const sql = "UPDATE userData SET password = ? WHERE emailId = ?";
    const values = [newPassword, emailId];
    executeQuery(sql, values, res, 'Record updated successfully');
});
app.post('/delete', (req, res) => {
    const { emailId } = req.body;
    const sql = "DELETE FROM userData WHERE emailId = ?";
    executeQuery(sql, [emailId], res, 'Record deleted successfully');
});
app.listen(3000, () => {
    console.log("Running at Port 3000");
});