CREATE TABLE if not exists Bin (
    id serial primary key, 
    binName varchar(10) not null,
    shelfId integer not null,
    itemName varchar(140) not null,
    itemPrice decimal(15, 2) not null
)