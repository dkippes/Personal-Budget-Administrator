let guestMiddleware = (req, res, next) => {
  if (req.session.usuarioLogueado != undefined) {
    next();
  } else {
    res.redirect('/users/login');
  }
};

module.exports = guestMiddleware;
