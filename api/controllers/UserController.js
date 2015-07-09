/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
   create: function (req, res) {

      var username = req.param("username");
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
              res.send(400, {error: "Username already Taken"});
          } else {

              // var hasher = require("password-hash");
              // password = hasher.generate(password);

              User.create({
                  username: username,
                  emailAddress:emailAddress,
                  password:password

              }).exec(function(error, user) {
                  if (error) {
                      res.send(500, {error: "DB Error"});
                  } else {
                      req.session.user = user;
                      res.view('chat');
                  }
              });
          }
      });
      return false;
  }


};