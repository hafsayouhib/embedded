import bookdbM from "../model/bookM.js";
import Userdb from "../model/user.js";

const bookM = (req,res)=>{
    Userdb.find()
    .then(users => {
        res.render('addbookM.ejs', { users });
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "some error occur while retrieving users"
        })
    });
}

const addbookM = (req,res)=>{
    if (!req.body) {
        res.status(400).send({ message: "content cannot be empty" })
        return;
    }
    console.log(req.body)
    const book = new bookdbM({
        users:[
            {
            name:req.body.users[0]
            },
            {
            name:req.body.users[1]
            }
        ],
        name: req.body.book,
        author: req.body.author,
        date: req.body.date
    })
    // save book in database
    book
        .save(book)
        .then(data => {
            // console.log(data)
            // res.send(data)
            res.redirect('getbookM')
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "some error occur while creating a create operation"
            })
        })
}

const getbookM = (req, res) => {
    bookdbM.find().populate('users') .exec()
    .then(books => {
        console.log(users)
        res.render('getbookM', { books ,users});
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "some error occur while retrieving users"
        })
    });

};


export {bookM,addbookM,getbookM} 