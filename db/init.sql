create table customers (
    customer_id serial primary key,
    email varchar(150) not null,
    password varchar(250) not null
);

create table product (
    product_id serial primary key,
    name varchar(50) not null,
    image varchar(250) not null,
    description text,
    price decimal not null,
    category varchar(25) not null
);

create table customer_cart (
    cart_id serial primary key,
    customer_id int references customers(customer_id),
    paid boolean
);

create table cart_items (
    cart_item_id serial primary key,
    cart_id int references customer_cart(cart_id),
    product_id int references product(product_id),
    qty int,
    price decimal
);