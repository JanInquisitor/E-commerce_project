USE ecommerce_db;

INSERT INTO category (category_name)
VALUES ("Home"),
       ("Kitchen"),
       ("Entertainment"),
       ("School");

INSERT INTO product (product_name, price, stock, category_id)
VALUES ("Television", 500, 10, 3),
       ("Pizza", 3, 100, 2),
       ("Smarth phone", 800, 300, 3);

INSERT INTO tag (tag_name)
VALUES ("Food"),
       ("cars"),
       ("Music"),
       ("Gardening");