create table users (
    id int auto_increment primary key,
    username varchar(255) not null unique,
    email varchar(255) not null unique,
    role enum("admin", "staff") not null,
    password varchar(255) not null,
    createdAt datetime not null,
    updatedAt datetime not null
);

create table categories (
    id int auto_increment primary key,
    name varchar(255) not null unique,
    image varchar(255)
);

create table ingredients (
    id int auto_increment primary key,
    name varchar(50) not null,
    price decimal(10, 2) not null,
    unit enum("г", "мл", "шт", "л", "кг", "мг") not null,
    quantity int unsigned not null
);

create table dishes (
    id int auto_increment primary key,
    name varchar(100) not null unique,
    description text,
    ingredients json,
    price decimal(10, 2) not null,
    category_id int,
    image varchar(255),
    cost_price decimal(10, 2) not null,
    foreign key (category_id) references categories(id)
);