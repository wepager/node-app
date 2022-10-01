

module.exports = async function (req, res) {
    // router.use(cors({ origin: '*' }))
    //  router.use(async (req, res) => {

    var url = req.params['0'];
   var qr=req.query.s


    try {
      qr=new Base64(qr).decode()
      qr=JSON.parse(qr)
    } catch (error) {
      qr={}
    }
    //t
   
   // var type = req.query.type || 'text',
     //   type = type.trim().toLowerCase()

   try {
    url = new Base64(url).decode()
   } catch (error) {
    //  url=""
   }

    var method = 'GET'


    try {
        var obj = {
            method,
           headers: {}
            //body: req.body
        }



        for (var key in req.headers) {
          if ((key[0]+key[1]).toLowerCase()==="x-") {
           obj.headers[key.substring(2)]=req.headers[key]
          }else if ((key[0]+key[1]).toLowerCase()==="o-"&&key.substring(2) !=="headers") {
           obj[key.substring(2)]=req.headers[key]
          }
        }
        
        // console.log(obj);
// console.log(obj.headers);
//console.log(obj);
        url = await fetch(url,obj);
        //  type = type in url ? type : 'text';
        
        res.status(url.status)
        
        var header = url.headers
        // console.log(header);

        res.setHeader("X-Url", url.url)

        url = await url.text();
 
        if (qr.top_text) {
          url=qr.top_text+url
        }
        if (qr.bottom_text) {
          url=qr.bottom_text+url
        }
        if (qr.regex instanceof Array&&qr.regex[0]) {
          try {
            qr.regex[0]=eval(qr.regex[0])
            url=url.replace(qr.regex[0],qr.regex[1])
          } catch (error) {
            qr.regex[0]=null
          }
        }
        
        // console.log(qr);
      // header.forEach((val, key) => {
      //  res.setHeader(key, val)
      //  });
        res.setHeader('x-powered-by', ['nimo-org'])
        //if (header['content-type']) {
          res.setHeader('content-type', header.get('content-type'))
          res.setHeader('content-length', url.length)
  
          res.setHeader("Access-Control-Expose-Headers", "X-Url")
          // res.setHeader("Access-Control-Expose-Headers", " *, Kk")
          // res.setHeader("Access-Control-Request-Headers", "*")
       //}

    //  console.log(header.get('content-type'));

        res.send(url);

    } catch (error) {
         // console.log(error);
         if (error.message) {
           res.setHeader("X-Url", url)
           res.header('x-powered-by', 'nimo-org')
           res.setHeader("Access-Control-Expose-Headers", "X-Url")
           res.status(400).json(error)
       }

    }
    // });
    //  return router
}

////git push heroku main

//heroku logs --tail --app nimo2000