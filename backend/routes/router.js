const express = require('express')
const router = express.Router()
const schema = require('../models/schemas')

router.get('/notes', async (req, res) => {
    const noteData = await schema.find({}).exec()
    if (noteData) {
        res.send(JSON.stringify(noteData))
    }
})

router.post('/add', async (req, res) => {
    const {title, content} = req.body
    const noteData = {title: title, content: content}
    const newNote = new schema(noteData)
    const saveNote = await newNote.save()
    if (saveNote) {
        res.send('Note added successfully!')
    } else {
        res.send('Failed to add note.')
    }
    res.end()
})

router.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;
    const deletedNote = await schema.findByIdAndDelete(id);
    if (deletedNote) {
        res.send('Note deleted successfully!');
    } else {
        res.send('Failed to delete note.')
    }
});

module.exports = router