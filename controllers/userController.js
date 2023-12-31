const { User, Thought } = require('../models')

const userController = {
  // get all users
  async getUsers(req, res) {
    try {
      const users = await User.find({}).select('-__v')
      res.json(users)
    } catch (err) {
      res.status(500).json(err)
    }
  },

  // get one user
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({
        _id: req.params.userId,
      })
        .select('-__v')
        .populate('thoughts')
        .populate('friends')

      if (!user) {
        return res.status(404).json({ message: 'No user with that id!' })
      }

      res.json(user)
    } catch (err) {
      res.status(500).json(err)
    }
  },

  // create a user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body)
      res.json({ message: 'User created', user })
    } catch (err) {
      res.status(500).json(err)
    }
  },

  // update a user
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      )

      if (!user) {
        return res.status(404).json({ message: 'No user with that id!' })
      }

      res.json({ message: 'User updated', user })
    } catch (err) {
      res.status(500).json(err)
    }
  },

  // delete a user
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId })

      if (!user) {
        return res.status(404).json({ message: 'No user with that id!' })
      }

      await Thought.deleteMany({ username: user.username })

      res.json({ message: 'User and associated thoughts deleted!' })
    } catch (err) {
      res.status(500).json(err)
    }
  },

  // add a friend
  async addFriend(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.params.friendId } },
        { runValidators: true, new: true }
      )

      if (!user) {
        return res.status(404).json({ message: 'No user with that id!' })
      }

      res.json({ message: 'Friend added', user })
    } catch (err) {
      res.status(500).json(err)
    }
  },

  // remove a friend
  async removeFriend(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },
        { runValidators: true, new: true }
      )

      if (!user) {
        return res.status(404).json({ message: 'No user with that id!' })
      }

      res.json({ message: 'Friend removed', user })
    } catch (err) {
      res.status(500).json(err)
    }
  },
}

module.exports = userController
