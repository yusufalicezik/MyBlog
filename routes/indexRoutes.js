const express=require("express"),
Blog=require("../models/blogModel"),
	  router=express.Router();


/*
let data=[
		{
			postTitle:"Baslik 1",
			postSubTitle:"Aciklama 1",
			image:"https://images.unsplash.com/photo-1549043230-75076f483df5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
		},
		{
			postTitle:"Baslik 2",
			postSubTitle:"Aciklama 2",
			image:"https://images.unsplash.com/photo-1549051131-498886fe66b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
		},
		{
			postTitle:"Baslik 3",
			postSubTitle:"Aciklama 3",
			image:"https://images.unsplash.com/photo-1470073564688-bd3e07238084?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
}

];


router.get("/", (req,res)=>{
	res.render("home",{data : data});
});
*/
router.get("/", (req,res)=>{
	Blog.find({},(err,foundBlogs)=>{
		if(err){
			console.log(err);

		}else{
			console.log("all blogs");
			console.log(foundBlogs);
			res.render("home", {foundBlogs:foundBlogs});
		}
	});
	
});


router.get("/about", (req,res)=>{
	res.render("about");
});

router.get("/contact", (req,res)=>{
	res.render("contact");
});

router.get("/resume", (req,res)=>{
	res.render("resume");
});


module.exports=router;
