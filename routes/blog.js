const express = require('express');
const Blog = require('../models/blog');
const Contact = require('../models/contact');
const router = express();
const Review = require('../models/review')
const {isLogin} = require('../middleware')
const Swal = require('sweetalert2');
const User = require('../models/user');


router.get('/admin-blog',isLogin, async(req,res)=>{
   
 const blogs = await  Blog.find({});
    res.render('admin/index',{blogs});
})

router.get('/admin-blog/new',isLogin,async(req,res)=>{
   
    res.render('admin/create');
})
// create new blogs
router.post('/blogs',isLogin,async(req,res)=>{
    try{
       
        await Blog.create(req.body.blog)
        req.flash('success','Blog Create Successfully !! ✔✔❤')
        res.redirect('/admin-blog')
    }catch(e){
        console.log(e.message)
        req.flash('error','Can,t Blog Create  !! 👀👀')
        res.render()
    }
   
})
// show post
router.get('/admin/blog/:id',isLogin,async(req,res)=>{
    try{
        const blog = await Blog.findById(req.params.id);
        res.render('admin/show',{blog})
    }
    catch(e){
        console.log(e.message)
        res.render()
    }

})
// edit post
router.get('/admin/blog/:id/edit',isLogin,async(req,res)=>{
try{
    const blog = await Blog.findById(req.params.id)
    res.render('admin/edit',{blog})
}
catch(e){
    console.log(e.message)
        res.render() 
}

})
// edit post
router.patch('/blogs/:id',isLogin,async(req,res)=>{
  
await Blog.findByIdAndUpdate(req.params.id, req.body.blog);
try
{
    req.flash('success','update Sucessfully✔✔✔✔🎉')
    res.redirect(`/admin/blog/${req.params.id}`)
}catch(e)
{
console.log("Something Went Problem");

}

})
// delete 
router.delete('/admin/blog/:id',isLogin,async(req,res)=>{
    try{
        await Blog.findByIdAndDelete(req.params.id);
        res.redirect('/admin-blog')
    }
    catch(e){
        res.send("Something Went Problem");
    }
 
})


router.get('/blog/:id',async(req,res)=>{
    try{
        const blog = await Blog.findById(req.params.id).populate('reviews');
        console.log(blog);
        res.render('blog/shows',{blog})
    }
    catch(e){
        res.send("Something Went Problem");
    }
    
    })
    router.get('/',async(req,res)=>{
    try{
        const blogs = await  Blog.find({});
        res.render('blog/home',{blogs});
    }
    catch(e){
        res.send("Something Went Problem");
    }
  
   })
   router.get('/cake-product',async(req,res)=>{
    try{
        const blogs = await  Blog.find({});
        res.render('blog/index',{blogs});
    }
    catch(e){
        res.send("Something Went Problem");
    }
  
   })
  


// create a new Reviwe
router.post('/blog/:id/review',isLogin,async(req,res)=>{
    try{
        const blog = await Blog.findById(req.params.id);
        // const review = new Review(req.body);
        const review = new Review({
            user:req.user.username,
            ...req.body
        });
        console.log(review);
        blog.reviews.push(review);
       await review.save();
       await blog.save();
       res.redirect(`/blog/${req.params.id}`)
    }
    catch(e){

    }
})

router.get('/about',async(req,res)=>{
    try{
       
        res.render('blog/about')
    }
    catch(e){
        console.log(e.message)
            res.render() 
    }
    })


    router.get('/servies',async(req,res)=>{
        try{
           
            res.render('blog/servies')
        }
        catch(e){
            console.log(e.message)
                res.render() 
        }
        })
        router.get('/contact',async(req,res)=>{
            try{
               
                res.render('blog/contact')
            }
            catch(e){
                console.log(e.message)
                    res.render() 
            }
            })
          

            router.get('/findcategory',async(req,res)=>{
                try{
                   const blogs = await  Blog.find({category:req.query.q});
                res.render('blog/category',{blogs});
               
                }
                catch(e){
                    console.log(e.message)
                        res.render() 
                }
                })
                router.get('/user/:userId/cart',isLogin,async(req,res)=>{
                    try {
                        const user = await User.findById(req.params.userId).populate('cart');
                        console.log("user : ",user)
                        res.render('blog/cart', { userCart: user.cart });
                    }
                    catch (e) {
                        console.log("hello")
                    }
                  
                   })
                // add to cart 
                router.post('/user/:id/cart', isLogin, async (req, res) => {
  
                    try {
                        const product = await Blog.findById(req.params.id);
                
                        const user = req.user;
                
                        user.cart.push(product);
                
                        await user.save();
                        req.flash('success', 'Added to cart successfully')
                        res.redirect(`/user/${req.user._id}/cart`);
                    }
                    catch (e) {
                        req.flash('error', 'Unable to get the cart at this moment');
                        res.render('error');
                    }
                });
                // create message 
                router.post('/contactmessage',async(req,res)=>
                {
                    try{
                       
                     await Contact.create(req.body.message)
                        req.flash('success','Successfully !! ✔✔❤')
                        res.redirect('/contact')
                    }catch(e){
                        console.log(e.message)
                        req.flash('error','Can,t Blog Create  !! 👀👀')
                        res.render()
                    }
                   
                })
                // reomve add to cart product
                router.delete('/user/:userid/cart/:id', async(req, res) => {

                    const { userid, id } = req.params;
                    await User.findByIdAndUpdate(userid,{$pull:{cart:id}})
                    res.redirect(`/user/${req.user._id}/cart`);
                })
                
                router.get('/cart/payment', (req, res) => {
                    res.render('payment/payment')
                })
module.exports = router;