--drop table address if exists;
--create table address (
--   id bigint not null,
--    city varchar(255),
--    country varchar(255),
--    street varchar(255),
--    customer_id bigint,
--    primary key (id)
--);
    
--drop table customer if exists;
--create table customer (
--   id bigint not null,
--    email varchar(255),
--    firstname varchar(255),
--    lastname varchar(255),
--    primary key (id)
--);

--alter table address
--   add constraint FK93c3js0e22ll1xlu21nvrhqgg
--   foreign key (customer_id)
--   references customer;

INSERT INTO customer (id, email, firstname, lastname) VALUES
  (100, 'dcamara3@gmail.com', 'Daman', 'Camara'),
  (200, 'Dyoussouf12@gmail.com ', 'Youssouf', 'Diarra');

INSERT INTO address (id, customer_id, street, city, country) VALUES
  (1, 100, '5553 walton ave', 'Philly', 'USA'),
  (2, 200, '5... Vodges st', 'Philly', 'USA');

INSERT INTO product (id, name, description, upccode, _size) VALUES
  (1, 'Pair of jeans', 'A classic pair of Jeans that lasts long', 'ABC0123456789', 'Medium'),
  (2, 'A Dress Shirt', 'A regular Dress shirt for work', 'ACB0123456789', 'Large'),
  (3, 'New Product', 'Test new Product', 'ACB0143456789', 'Large');
