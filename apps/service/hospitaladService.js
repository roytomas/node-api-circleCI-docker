module.exports = (app, db) => {
    app.get( "/hospitalads", (req, res) =>
      db.hospitalad.findAll().then( (result) => res.json(result) )
    );
  
    app.get( "/hospitalad/:id", (req, res) =>
      db.hospitalad.findByPk(req.params.id).then( (result) => res.json(result))
    );
  
    app.post("/hospitalad", (req, res) => 
      db.hospitalad.create({
        startdate: req.body.startdate,
        enddate: req.body.enddate,
        content:req.body.content
      }).then( (result) => res.json(result) )
    );
  
    app.put( "/hospitalad/:id", (req, res) =>
      db.hospitalad.update({
        startdate: req.body.startdate,
        enddate: req.body.enddate,
        content:req.body.content
      },
      {
        where: {
          id: req.params.id
        }
      }).then( (result) => res.json(result) )
    );
  
    app.delete( "/hospitalad/:id", (req, res) =>
      db.hospitalad.destroy({
        where: {
          id: req.params.id
        }
      }).then( (result) => res.json(result) )
    );
  }