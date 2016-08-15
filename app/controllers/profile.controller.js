module.exports = {
  index: function(req, res){
  var profile =

      {
        name: 'Lin Minghan',
        email: 'minghanmail@yahoo.com',
        hobbies: 'blah blah blah',
        description: 'blah blah blah',
        img: ''
      };


  res.json(profile);

  }
};
