module.exports = (app, db) => {
    app.get( "/linkstaffads", (req, res) =>
      db.linkstaffad.findAll().then( (result) => res.json(result) )
    );
  
    app.get( "/linkstaffad/:id", (req, res) =>
      db.linkstaffad.findByPk(req.params.id).then( (result) => res.json(result))
    );
  
    app.post("/linkstaffad", (req, res) => 
      db.linkstaffad.create({
        startdate: req.body.startdate,
        enddate: req.body.enddate
      }).then( (result) => res.json(result) )
    );
  
    app.put( "/linkstaffad/:id", (req, res) =>
      db.linkstaffad.update({
        startdate: req.body.startdate,
        enddate: req.body.enddate
      },
      {
        where: {
          id: req.params.id
        }
      }).then( (result) => res.json(result) )
    );
  
    app.delete( "/linkstaffad/:id", (req, res) =>
      db.linkstaffad.destroy({
        where: {
          id: req.params.id
        }
      }).then( (result) => res.json(result) )
    );
  }