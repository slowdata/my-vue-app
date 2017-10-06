const appRouter = (app) => {
  app.get("/", (req, res) => {
    res.status(200).json({message: "Welcome to our restful API"})
  })
  
  app.get("/skills", (req, res) => {
    res.status(200).send(
      ['Laravel', 'Vue', 'JS', 'Tooling']
    )
  })

  app.post("/projects", (req, res) => {
    if (Object.keys(req.body).length > 0) { 
      res.send(req.body)
    } else {
      res.status('500')
    }
    
  })
  
}

module.exports = appRouter