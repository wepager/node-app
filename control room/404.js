module.exports=function (req,res) {
     id = req.path;
     id=String(id).trim();

     id = redirector(id, {
     '/': [[/[^]*home/]]
      }, res)

        if (id == false) {
           res.status(404).render('404', req)
        }
}