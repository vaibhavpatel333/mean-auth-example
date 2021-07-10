// User controller

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content data.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content data.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content data.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content data.");
};
