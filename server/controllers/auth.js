import User from "../models/User.js";
import bcrypt from "bcrypt";
export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });
    await newUser.save();
    res.status(200).send("user create successfully");
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) res.status(404).json("user not found");

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect) res.status(400).json("Password is not correct");

    const { password, isAdmin, ...otherDetails } = user._doc;
    res.status(200).json(otherDetails);
  } catch (err) {
    next(err);
  }
};
