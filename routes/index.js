const home          = require("./home.js");
const employee      = require("./employee.js");
const login         = require("./login.js");
const blog          = require("./blog.js");
const signup        = require("./signup.js");
const newsletter    = require("./newsletter.js");
const register      = require("./register.js");
const contact       = require("./contact.js");
const cms           = require("./cms.js");
const dashboard     = require("./dashboard.js");
const thanks        = require("./thanks.js");
const logout        = require("./logout.js");
const salary        = require("./salary.js");
const system        = require("./system.js");

module.exports= function(app){
    home(app);
    employee(app);
    login(app);
    blog(app);
    signup(app);
    newsletter(app)
    register(app);
    contact(app);
    cms(app);
    dashboard(app);
    logout(app);
    thanks(app);
    salary(app);

    // This need to be always in last cuz it contain 404,500,401,403
    system(app);
    
}