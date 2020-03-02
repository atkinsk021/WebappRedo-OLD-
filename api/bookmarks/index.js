import express from 'express';
import { bookmarks } from './bookmarks';

const router = express.Router();

router.get('/', (req, res) => {
  res.send({ bookmarks: bookmarks });
});

//creating bookmark
router.post('/', (req, res) => {
        let newBookmark = req.body;
        if (newBookmark){   //possible error??? lab2 02
          bookmarks.push({title : newBookmark.title, link: newBookmark.link }) ;
          res.status(201).send({message: "Bookmark Created"});
      }else{
            res.status(400).send({message: "Unable to find Bookmark in request. No Bookmark Found in body"});
      }
});

// visit a bookmark
router.bookmark('/:id/visit', (req, res) => {
  const id = req.params.id;
         if (stubAPI.visit(id)) {
              return res.status(200).send({message: `bookmark ${id} visited`});
         }
         return res.status(404).send({message: `Unable to find bookmark ${id}`});
});

// Update bookmark
router.put('/:id', (req, res) => {
  const key = req.params.id;
  const updateBookmark = req.body;
  const index = bookmarks.map((bookmark) => {
    return bookmark.link;
  }).indexOf(key);
  if (index !== -1) {
    bookmarks.splice(index, 1, {
      title: updateBookmark.title,
      link: updateBookmark.link
    });
    res.status(200).send({
      message: 'Bookmark Updated'
    });
  } else {
    res.status(400).send({
      message: 'Unable to find bookmark in request. No bookmark Found in body'
    });
  }
});

// Delete bookmark
router.delete('/:id', (req, res) => {
  const key = req.params.id;
  const index = bookmarks.map((bookmark) => {
    return bookmark.link;
  }).indexOf(key);
  if (index > -1) {
    bookmarks.splice(index, 1);
    res.status(200).send({
      message: `Deleted bookmark with link of: ${key}.`
    });
  } else {
    res.status(400).send({
      message: `Unable to find bookmark with link of: ${key}.`
    });
  }
});

export default router;