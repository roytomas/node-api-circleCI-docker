module.exports = (app, db) => {
    app.get( "/linkshareads", (req, res) =>
      db.linksharead.findAll().then( (result) => res.json(result) )
    );
  
    app.get( "/linksharead/:id", (req, res) =>
      db.linksharead.findByPk(req.params.id).then( (result) => res.json(result))
    );
  
    app.post("/linksharead", (req, res) => 
      db.linksharead.create({
        startdate: req.body.startdate,
        enddate: req.body.enddate
      }).then( (result) => res.json(result) )
    );
  
    app.put( "/linksharead/:id", (req, res) =>
      db.linksharead.update({
        startdate: req.body.startdate,
        enddate: req.body.enddate
      },
      {
        where: {
          id: req.params.id
        }
      }).then( (result) => res.json(result) )
    );
  
    app.delete( "/linksharead/:id", (req, res) =>
      db.linksharead.destroy({
        where: {
          id: req.params.id
        }
      }).then( (result) => res.json(result) )
    );
  }