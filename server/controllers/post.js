const Post = require('../models/post');
const slugify = require('slugify');

exports.create = async (req, res) => {
    const { num, content, fee, from, user } = req.body;
    const slug = slugify(num);

    try {
        if (!num || !content || !fee || !from) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const post = await Post.create({ num, content, fee, from, user, slug });

        res.json(post);
    } catch (err) {
        res.status(400).json({ error: 'Duplicate Vehicle Number or other error occurred' });
    }
};

exports.list = async (req, res) => {
    try {
        const posts = await Post.find({})
            .limit(10)
            .sort({ createdAt: -1 })
            .exec();
        res.json(posts);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'An error occurred' });
    }
};

exports.read = async (req, res) => {

    const { slug } = req.params;
    
    try {
        const post = await Post.findOne({ slug }).exec();
        res.json(post);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'An error occurred' });
    }
    
};

exports.update = async (req, res) => {
    const { slug } = req.params;
    const { num, content, fee, from, user } = req.body;
    try {
        const post = await Post.findOneAndUpdate({ slug }, { num, fee, content, from, user }, { new: true }).exec();
        res.json(post);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'An error occurred' });
    }
};

exports.remove = async (req, res) => {
    const { slug } = req.params;
    try {
        await Post.findOneAndRemove({ slug }).exec();
        res.json({ message: 'Data Deleted' });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'An error occurred' });
    }
};

exports.count = async (req, res) => {
    const { slug } = req.params;
    try {
        const count = await Post.countDocuments({ slug }).exec();
        res.json({ count });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'An error occurred' });
    }
};
