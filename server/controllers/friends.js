console.log('friends controller');
require('../config/mongoose');
var mongoose = require('mongoose');

var Friend = mongoose.model('Friend');
function FriendsController(){
  this.index = function(req,res){
    Friend.find({}, function(err, friends) {
      res.json({placeholder:'index', friends:friends});
    })
  };
  this.create = function(req,res){
    console.log("CHECK::::",req);
    var friend = new Friend({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      birthday: req.body.birthday,
    });
    friend.save(function(err) {
      if(err){
        console.log("something went wrong");
      } else {
        res.json({placeholder:'create', friend:friend});
      }
    })
  };
  this.update = function(req,res){
    console.log("PPPPPPPPP",req.params.id);
    Friend.findOne({_id:req.params.id}, function(err, friend) {
      if(err){
        console.log("something went wrong");
      } else {
        friend.first_name = req.body.first_name;
        friend.last_name = req.body.last_name;
        friend.birthday = req.body.birthday;
        friend.save(function(err){
          if(err){
            console.log("something went wrong");
          } else {
            res.json({placeholder:'update', friend:friend});
          }
        });
      }
    })
  };
  this.delete = function(req,res){
    Friend.remove({_id:req.params.id}, function(err, friend){
      if(err) {
        console.log('something went wrong');
      } else {
        console.log('successfully delete a friend!');
        res.json({placeholder:'delete', friend:friend});
      }
    })
  };
  this.show = function(req,res){
    Friend.findOne({_id:req.params.id},function(err, friend){
      res.json({placeholder:'show', friend:friend});
    })
  };
}
module.exports = new FriendsController(); 
