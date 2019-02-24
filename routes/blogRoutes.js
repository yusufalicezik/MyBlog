const express=require("express"),
		Blog=require("../models/blogModel"),
	  router=express.Router();


router.get("/addNewBlog", isLoggedIn, (req,res)=>{
    	res.render("blog/newBlog");
    });



router.post("/addNewBlogDeneme", isLoggedIn, (req,res)=>{
			let title="req.body.data.blogTitle";
			let comSentence="req.body.data.comSentence";
			let comImage=req.body.data.comImage;
			let blog="req.body.data.blog";

			let newBlog={
				title:title, comSentence:comSentence, comImage:comImage, blog:blog
			};

			Blog.create(newBlog)
				.then((newBlog)=>{
					console.log(newBlog);
					res.status(201).json(newBlog);
				})
				.catch((err)=>{
					console.log("========Error error error =========");
					console.log(err);
					res.send(err);
				});


		});





router.post("/addNewBlog", isLoggedIn, (req,res)=>{
			let title=req.body.data.blogTitle;
			let comSentence=req.body.data.comSentence;
			let comImage=req.body.data.comImage;
			let blog=req.body.data.blog;

			let newBlog={
				title:title, comSentence:comSentence, comImage:comImage, blog:blog
			};

			Blog.create(newBlog)
				.then((newBlog)=>{
					console.log(newBlog);
					res.status(201).json(newBlog);
				})
				.catch((err)=>{
					console.log("========Error error error =========");
					console.log(err);
					res.send(err);
				});


		});



router.get("/blogs/:blogId", (req,res)=>{
	Blog.findById(req.params.blogId)
	.then((foundBlog)=>{
		res.render("blog/showBlog", {foundBlog:foundBlog});
	})
	.catch((err)=>{
		console.log("=========Error=========");
		res.send(err);
	});
});

router.get("/testing", (req,res)=>{
	Blog.find()
	.then((foundBlogs)=>{
		res.json(foundBlogs);
	})
	.catch((err)=>{
		console.log(err);
		res.send(err);
	});
});

function isLoggedIn(req,res,next){
	if(req.isAuthenticated()){
		return next(); //istek devam etsin.
	}
	res.redirect("/signin");
}

module.exports=router;
