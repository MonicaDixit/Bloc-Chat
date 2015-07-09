/**
 * MainController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	login: function (req, res) {

      var emailAddress = req.param("emailAddress");
      var password = req.param("password");

      console.log("email received from post: " + emailAddress);
      //console.log(User);
      
     User.findOneByEmailAddress(emailAddress).exec(function(err, usr) {

          console.log("err returns ---> " , err);
          console.log("usr returns ---> " , usr);
          if (err) {
              res.send(500, { error: "DB Error" });
          } else if (usr) {
            req.session.user = usr;
            res.view('chat');
          } 
      });
  }, 

	logout: function(req,res){
    req.session.destroy(function(err){
      res.redirect('/');
    });
	}  
};

