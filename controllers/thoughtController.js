const { Thought, User } = require('../models')

const thoughtController = {
  // get all thoughts
  async getAllThoughts(req, res) {
    try {
      const thoughts = await Thought.find({}).sort({ createdAt: -1 })
      res.json(thoughts)
    } catch (err) {
      res.status(500).json(err)
    }
  },

  // get one thought

  async getOneThought(req, res) {
    try {
      const thought = await Thought.findOne({
        _id: req.params.thoughtId,
      }).select('-__v')

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that id!' })
      }

      res.json(thought)
    } catch (err) {
      res.status(500).json(err)
    }
  },

  // create a thought
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body)
      const user = await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $addToSet: { thoughts: thought._id } },
        { new: true }
      )

      if (!user) {
        return res.status(404).json({ message: 'No user with that id!' })
      }

      res.json({ message: 'Thought created' }, thought)
    } catch (err) {
      res.status(500).json(err)
    }
  },

  // update a thought
  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      )

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that id!' })
      }

      res.json({ message: 'Thought updated' }, thought)
    } catch (err) {
      res.status(500).json(err)
    }
  },

  // delete a thought
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({
        _id: req.params.thoughtId,
      })

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that id!' })
      }

      const user = await User.findOneAndUpdate(
        { thoughts: req.params.thoughtId },
        { $pull: { thoughts: req.params.thoughtId } },
        { new: true }
      )

      if (!user) {
        return res.status(404).json({ message: 'No user with that id!' })
      }

      res.json({ message: 'Thought deleted!' })
    } catch (err) {
      res.status(500).json(err)
    }
  },

  // add a reaction
  async addReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      )

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that id!' })
      }

      res.json({ message: 'Reaction added' }, thought)
    } catch (err) {
      res.status(500).json(err)
    }
  },

  // delete a reaction
  async deleteReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { runValidators: true, new: true }
      )

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that id!' })
      }

      res.json({ message: 'Reaction deleted' }, thought)
    } catch (err) {
      res.status(500).json(err)
    }
  },
}

module.exports = thoughtController
