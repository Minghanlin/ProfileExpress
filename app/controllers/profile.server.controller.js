module.exports = {
  index: function(req, res){
  res.json(
      {
          name: 'Lin Minghan',
          email: 'minghanmail@yahoo.com',
          hobbies: 'blah blah blah',
          description: 'boom boom boom boom boom'
        }
      );
  }
};
