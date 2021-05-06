const router = require('express').Router();
const postController = require('../controllers/post.controller');
const multer = require("multer");
const upload = multer();

router.get('/', postController.readPost);
router.post('/', upload.single("file"), postController.createPost);
router.get('/:id', postController.getPost);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);
router.get('/friendly/:id', postController.getPostUser);
router.patch('/like-post/:id', postController.likePost);
router.patch('/unlike-post/:id', postController.unlikePost);

//comments

router.patch('/comment-post/:id', postController.commentPost);
router.put('/edit-comment-post/:id', postController.editCommentPost )
router.patch('/delete-comment-post/:id', postController.deleteCommentPost )

module.exports = router;
