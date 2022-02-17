exports.home = function(req, res, next) {
    res.render('index', { title: 'Home' });
  }
exports.about = function(req, res, next) {
    res.render('about', { title: 'About me' });
  }
exports.projects = function(req, res, next) {
    res.render('projects', { title: 'Projects' });
  }
exports.services = function(req, res, next) {
    res.render('services', { title: 'Services' });
  }
exports.contact = function(req, res, next) {
    res.render('contact', { title: 'Contact me' });
  }  
  

