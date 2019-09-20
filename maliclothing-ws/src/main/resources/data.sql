drop table address if exists;
create table address (
   id bigint not null,
    city varchar(255),
    country varchar(255),
    street varchar(255),
    customer_id bigint,
    primary key (id)
);

INSERT INTO address (id, customer_id, street, city, country) VALUES
  (1, 100, '5553 walton ave', 'Philly', 'USA'),
  (2, 200, '5... Vodges st', 'Philly', 'USA');
    
drop table customer if exists;
create table customer (
   id bigint not null,
    email varchar(255),
    firstname varchar(255),
    lastname varchar(255),
    primary key (id)
);

INSERT INTO customer (id, email, firstname, lastname) VALUES
  (100, 'dcamara3@gmail.com', 'Daman', 'Camara'),
  (200, 'Dyoussouf12@gmail.com ', 'Youssouf', 'Diarra');

alter table address 
   add constraint FK93c3js0e22ll1xlu21nvrhqgg 
   foreign key (customer_id) 
   references customer;
