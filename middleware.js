const isLogin =(req,res,next)=>{

    if(!req.isAuthenticated()){
        req.flash('error','Please Login')
      return  res.redirect('/login')
    }
    next();
}


module.exports={
    isLogin
}