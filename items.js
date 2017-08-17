var express = require('express');
var mysql = require('./dbcon.js');
var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
//var bodyParser = require('body-parser');
//app.use(bodyParser.urlencoded({ extended: false }));
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 3888);
app.get('/reset-table',function(req,res,next){
    var context = {};
    mysql.pool.query("DROP TABLE IF EXISTS masks", function(err){ //replace your connection pool with the your variable containing the connection pool
        var createString = "CREATE TABLE masks("+
            "mask_id INT AUTO_INCREMENT NOT NULL,"+
            "mask_name VARCHAR(255) NOT NULL,"+
            "color_id INT,"+
            "price_id INT,"+
            "type_id INT,"+
            "PRIMARY KEY(mask_id),"+
            "FOREIGN KEY (color_id) REFERENCES colors(color_id),"+
            "FOREIGN KEY (price_id) REFERENCES price(price_id),"+
            "FOREIGN KEY (type_id) REFERENCES type(type_id),"+
            "UNIQUE(mask_name),"
            ENGINE = innoDB;
        mysql.pool.query(createString, function(err){
            context.results = "Table reset";
            res.render('masks',context);
        })
    });
});

app.get('/reset-table',function(req,res,next){
    mysql.pool.query("DROP TABLE IF EXISTS fins", function(err){ //replace your connection pool with the your variable containing the connection pool
        var createString = "CREATE TABLE fins("+
            "fin_id INT AUTO_INCREMENT NOT NULL,"+
            "fin_type VARCHAR(255) NOT NULL,"+
            "fin_name VARCHAR(255) NOT NULL,"+
            "color_id INT,"+
            "price_id INT,"+
            "type_id INT,"+
            "PRIMARY KEY(fin_id),"+
            "FOREIGN KEY (color_id) REFERENCES colors(color_id),"+
            "FOREIGN KEY (price_id) REFERENCES price(price_id),"+
            "FOREIGN KEY (type_id) REFERENCES type(type_id),"+
            "UNIQUE(fin_name),"
            ENGINE = innoDB;
        mysql.pool.query(createString, function(err){
            context.results = "Table reset";
            res.render('fins',context);
        })
    });
});

app.get('/reset-table',function(req,res,next){
    mysql.pool.query("DROP TABLE IF EXISTS snorkels", function(err){ //replace your connection pool with the your variable containing the connection pool
        var createString = "CREATE TABLE snorkels("+
            "snorkel_id INT AUTO_INCREMENT NOT NULL,"+
            "snorkel_name VARCHAR(255) NOT NULL,"+
            "snorkel_type VARCHAR(255) NOT NULL,"+
            "color_id INT,"+
            "price_id INT,"+
            "type_id INT,"+
            "FOREIGN KEY (color_id) REFERENCES colors(color_id),"+
            "FOREIGN KEY (price_id) REFERENCES price(price_id),"+
            "FOREIGN KEY (type_id) REFERENCES type(type_id),"+
            "PRIMARY KEY(snorkel_id),"
        ENGINE = innoDB;
        mysql.pool.query(createString, function(err){
            context.results = "Table reset";
            res.render('snorkels',context);
        })
    });
});

app.get('/reset-table',function(req,res,next){
    mysql.pool.query("DROP TABLE IF EXISTS colors", function(err){ //replace your connection pool with the your variable containing the connection pool
        var createString = "CREATE TABLE colors("+
            "color_id INT AUTO_INCREMENT NOT NULL,"+
            "color_name VARCHAR(255) NOT NULL,"+
            "PRIMARY KEY(color_id),"
        ENGINE = innoDB;
        mysql.pool.query(createString, function(err){
            context.results = "Table reset";
            res.render('colors',context);
        })
    });
});

app.get('/reset-table',function(req,res,next){
    mysql.pool.query("DROP TABLE IF EXISTS price", function(err){ //replace your connection pool with the your variable containing the connection pool
        var createString = "CREATE TABLE price("+
            "price_id INT AUTO_INCREMENT NOT NULL,"+
            "cost DECIMAL(13,2) NOT NULL,"+
            "PRIMARY KEY(PRICE_id),"
        ENGINE = innoDB;
        mysql.pool.query(createString, function(err){
            context.results = "Table reset";
            res.render('price',context);
        })
    });
});
app.get('/reset-table',function(req,res,next){
    mysql.pool.query("DROP TABLE IF EXISTS type", function(err){ //replace your connection pool with the your variable containing the connection pool
        var createString = "CREATE TABLE type("+
            "type_id INT AUTO_INCREMENT,"+
            "use VARCHAR(255) NOT NULL,"+
            "sex VARCHAR(255) NOT NULL,"+
            "PRIMARY KEY(fin_id),"
        ENGINE = innoDB;
        mysql.pool.query(createString, function(err){
            context.results = "Table reset";
            res.render('type',context);
        })
    });
});

app.post('/insert',function(req,res,next) {
    var context = {};
    mysql.pool.query("INSERT INTO masks (`mask_t`,`mask_name`,`type_id`,`price_id`) VALUES ('mask','Tina',2, 2)", "INSERT INTO masks (`mask_t`,`mask_name`,`type_id`,`price_id`) VALUES ('mask','Tri-Quest',3,1)", "INSERT INTO masks (`mask_t`,`mask_name`,`type_id`,`price_id`) VALUES ('mask','Freedom Elite',3,5)",
        "INSERT INTO masks (`mask_t`,`mask_name`,`type_id`,`price_id`) VALUES ('mask','Freedom HD',3,6)", "INSERT INTO masks (`mask_t`,`mask_name`,`type_id`,`price_id`) VALUES ('mask','Freedom Quad',3,1)", "INSERT INTO masks (`mask_t`,`mask_name`,`type_id`,`price_id`) VALUES ('mask','Freedom One',3,1)",
        "INSERT INTO masks (`mask_t`,`mask_name`,`type_id`,`price_id`) VALUES ('mask','Freedom Ceos',2,5)","INSERT INTO masks (`mask_t`,`mask_name`,`type_id`,`price_id`) VALUES ('mask','Kleio II',3,3)",
        "INSERT INTO masks (`mask_t`,`mask_name`,`type_id`,`price_id`) VALUES ('mask','Geminus',6,5)", "INSERT INTO masks (`mask_t`,`mask_name`,`type_id`,`price_id`) VALUES ('mask','Visio Pro',4,4)", "INSERT INTO masks (`mask_t`,`mask_name`,`type_id`,`price_id`) VALUES ('mask','Panthas',1,4)",
        "INSERT INTO masks (`mask_t`,`mask_name`,`type_id`,`price_id`) VALUES ('mask','Imprex 3-D',6,6)", "INSERT INTO masks (`mask_t`,`mask_name`,`type_id`,`price_id`) VALUES ('mask','Liberation Plus',5,7)",
        "INSERT INTO fins (`fin_t`,`fin_type`,`fin_name`,`type_id`,`price_id`) VALUES ('Fin','Open Heal','Switch',3,12)", "INSERT INTO fins (`fin_t`,`fin_type`,`fin_name`,`type_id`,`price_id`) VALUES ('Fin','Open Heal','Vesna',3,13)",
        "INSERT INTO fins (`fin_t`,`fin_type`,`fin_name`,`type_id`,`price_id`) VALUES ('Fin','Open Heal or Full Foot','Solla',3,14)", "INSERT INTO fins (`fin_t`,`fin_type`,`fin_name`,`type_id`,`price_id`) VALUES ('Fin','Open Heal','Duo',3,17)",
        "INSERT INTO fins (`fin_t`,`fin_type`,`fin_name`,`type_id`,`price_id`) VALUES ('Fin','Open Heal or Split fin','X-Pert Z3',6,15)","INSERT INTO fins (`fin_t`,`fin_type`,`fin_name`,`type_id`,`price_id`) VALUES ('Fin','Open Heal','Liberator X',6,16)",
        "INSERT INTO snorkels (`snorkel_t`,`snorkel_name`, `snorkel_type`,`type_id`,`price_id`) VALUES ('Snorkel','Hyper Dry Elite II', 'Drytop',6,8)", "INSERT INTO snorkels (`snorkel_t`,`snorkel_name`, `snorkel_type`,`type_id`,`price_id`) VALUES ('Snorkel','Plantina', 'Not Drytop',3,9)",
        "INSERT INTO snorkels (`snorkel_t`,`snorkel_name`, `snorkel_type`,`type_id`,`price_id`) VALUES ('Snorkel','Imprex II', 'Not Drytop',3,10)", "INSERT INTO snorkels (`snorkel_t`,`snorkel_name`, `snorkel_type`,`type_id`,`price_id`) VALUES ('Snorkel','Reef Tour', 'Not Drytop',6,11)",
        "INSERT INTO colors (`color_name`) VALUES ('Pink')", "INSERT INTO colors (`color_name`) VALUES ('Light Blue')", "INSERT INTO colors (`color_name`) VALUES ('Purple Quartz')", "INSERT INTO colors (`color_name`) VALUES ('Black/Black')",
        "INSERT INTO colors (`color_name`) VALUES ('Black')", "INSERT INTO colors (`color_name`) VALUES ('Cobalt')", "INSERT INTO colors (`color_name`) VALUES ('Fish Blue')", "INSERT INTO colors (`color_name`) VALUES ('Ocean Green')",
        "INSERT INTO colors (`color_name`) VALUES ('Translucent')", "INSERT INTO colors (`color_name`) VALUES ('Black/Fish Blue')", "INSERT INTO colors (`color_name`) VALUES ('Black/Fish Yellow')", "INSERT INTO colors (`color_name`) VALUES ('Black/Hot Pink')",
        "INSERT INTO colors (`color_name`) VALUES ('Indigo')", "INSERT INTO colors (`color_name`) VALUES ('Fish Yellow')", "INSERT INTO colors (`color_name`) VALUES ('Black/Red')", "INSERT INTO colors (`color_name`) VALUES ('Translucent/Black')",
        "INSERT INTO colors (`color_name`) VALUES ('Black/Sea Gree')", "INSERT INTO colors (`color_name`) VALUES ('Ligth Pink')", "INSERT INTO colors (`color_name`) VALUES ('Black/Grey')",
        "INSERT INTO price (`cost`) VALUES (89.00)", "INSERT INTO price (`cost`) VALUES (85.00)", "INSERT INTO price (`cost`) VALUES (72.00)", "INSERT INTO price (`cost`) VALUES (114.00)", "INSERT INTO price (`cost`) VALUES (80.00)",
        "INSERT INTO price (`cost`) VALUES (75.00)", "INSERT INTO price (`cost`) VALUES (65.00)", "INSERT INTO price (`cost`) VALUES (55.00)", "INSERT INTO price (`cost`) VALUES (44.00)", "INSERT INTO price (`cost`) VALUES (34.00)",
        "INSERT INTO price (`cost`) VALUES (17.00)", "INSERT INTO price (`cost`) VALUES (199.00)", "INSERT INTO price (`cost`) VALUES (159.00)", "INSERT INTO price (`cost`) VALUES (119.00)", "INSERT INTO price (`cost`) VALUES (149.00)", "INSERT INTO price (`cost`) VALUES (49.00)",
        "INSERT INTO price (`cost`) VALUES (79.00)", "INSERT INTO type (`use`, `sex`) VALUES ('Scuba', 'Male')", "INSERT INTO type (`use`, `sex`) VALUES ('Scuba', 'Female')", "INSERT INTO type (`use`, `sex`) VALUES ('Scuba', 'Unisex')",
        "INSERT INTO type (`use`, `sex`) VALUES ('Snorkel', 'Male')", "INSERT INTO type (`use`, `sex`) VALUES ('Snorkel', 'Female')", "INSERT INTO type (`use`, `sex`) VALUES ('Snorkel', 'Female')", [req.query.mask_id, req.query.mask_name], function (err, result) {
            if (err) {
                next(err);
                return;
            }
            context.results = "Inserted id" + result.insertid;
            res.render('masks',context);
        });
});

app.post('/items',function(req,res,next){

mysql.pool.query('SELECT mask_t, fin_t, snorkel_t FROM masks INNER JOIN type ON type.type_id = mask.type_id INNER JOIN type.type_id = fins.type_id INNER JOIN type.type_id = snorkels.type_id INNER JOIN mask.mask_name INNER JOIN snorkels.snorkel_name INNER JOIN fins.fin_name ',function(err, rows, fields){
        if(err){
            next(err);
            return;
        }
        context.results = JSON.stringify(rows);
        res.render('rows',context);
    });
});

app.use(function(req,res){
    res.status(404);
    res.render('404');
});

app.use(function(err, req, res, next){
    console.error(err.stack);
    res.type('plain/text');
    res.status(500);
    res.render('500');
});
app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
