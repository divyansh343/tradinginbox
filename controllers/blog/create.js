import Blog from "../../models/Blog";

const blogController = async (req, res) => {
  const blog = new Blog({
    headline: req.body.headline,
    description: req.body.description,
    author: req.body.author,
    body: req.body.body,
    about: req.body.about,
  });

  blog.save().then(
    (response) => {
      res.status(201).json({
        status: 201,
        sucess: true,
        response: response,
        message: `blog created sucessfully`,
        updated: req.body
        ,
      });
    }
  ).catch(
    (error) => {
      res.status(401).json({
        status: 401,
        sucess: false,
        error: error
      });
      console.log(error);
    }
  );
}
export {
  blogController
}