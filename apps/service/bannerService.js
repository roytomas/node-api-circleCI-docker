module.exports = (app, db) => {
    app.get( "/banners", (req, res) =>
      db.banner.findAll().then( (result) => res.json(result) )
    );
  
    app.get( "/banner/:id", (req, res) =>
      db.banner.findByPk(req.params.id).then( (result) => res.json(result))
    );
  
    app.post("/banner", (req, res) => 
      db.banner.create({
        startdate: req.body.startdate,
        enddate: req.body.enddate,
        width:req.body.width,
        height:req.body.height,
        title:req.body.title,
        subtitle:req.body.subtitle,
        redirectUrl:req.body.redirectUrl,
        bgimgUrl:req.body.bgimgUrl
      }).then( (result) => res.json(result) )
    );
  
    app.put( "/banner/:id", (req, res) =>
      db.banner.update({
        startdate: req.body.startdate,
        enddate: req.body.enddate,
        width:req.body.width,
        height:req.body.height,
        title:req.body.title,
        subtitle:req.body.subtitle,
        redirectUrl:req.body.redirectUrl,
        bgimgUrl:req.body.bgimgUrl,
        updatedAt:new Date()
      },
      {
        where: {
          id: req.params.id
        }
      }).then( (result) => res.json(result) )
    );
  
    app.delete( "/banner/:id", (req, res) =>
      db.banner.destroy({
        where: {
          id: req.params.id
        }
      }).then( (result) => res.json(result) )
    );
  }