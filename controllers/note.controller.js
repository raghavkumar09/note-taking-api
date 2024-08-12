const Note = require('../model/note.model');

// Create Note                          
module.exports.createNote = async (req, res) => {
    try {
        const { title, body } = req.body;

        if (!title || !body) {
            return res.status(400).json({
                status_code: 400,
                success: false,
                message: 'Title and body are required'
            });
        }

        const newNote = await Note.create({
            title,
            body
        });

        return res.status(201).json({
            status_code: 201,
            success: true,
            message: 'Note created successfully',
            data: newNote
        });
    } catch (error) {
        return res.status(500).json({
            status_code: 500,
            success: false,
            message: 'Internal server error'
        });
    }
};

// Fetch Note by ID
module.exports.fetchNoteById = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({
                status_code: 400,
                success: false,
                message: 'Id is required'
            });
        }


        const note = await Note.findById(id);
        if (!note) {
            return res.status(404).json({
                status_code: 404,
                success: false,
                message: 'Note not found'
            });
        }

        return res.status(200).json({
            status_code: 200,
            success: true,
            message: 'Note fetched successfully',
            data: note
        });
    } catch (error) {
        return res.status(500).json({
            status_code: 500,
            success: false,
            message: 'Internal server error'
        });
    }
};

// Query Notes by Title
module.exports.queryNotesByTitle = async (req, res) => {
    try {
        const titleSubstring = req.query.title;
        const notes = await Note.find({ title: { $regex: titleSubstring, $options: 'i' } });

        if (!notes) {
            return res.status(404).json({
                status_code: 404,
                success: false,
                message: 'Notes not found'
            });
        }

        return res.status(200).json({
            status_code: 200,
            success: true,
            message: 'Notes fetched successfully',
            data: notes
        });
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update Note
module.exports.updateNote = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({
                status_code: 400,
                success: false,
                message: 'Id is required'
            });
        }
        const { title, body } = req.body;
        if (!title || !body) {
            return res.status(400).json({
                status_code: 400,
                success: false,
                message: 'Title and body are required'
            });
        }

        const note = await Note.findByIdAndUpdate(id, {
            title,
            body
        }, { new: true });

        if (!note) {
            return res.status(404).json({
                status_code: 404,
                success: false,
                message: 'Note not found'
            });
        }

        return res.status(200).json({
            status_code: 200,
            success: true,
            message: 'Note updated successfully',
            data: note
        });
    } catch (error) {
        return res.status(500).json({
            status_code: 500,
            success: false,
            message: 'Internal server error'
        });
    }
};
