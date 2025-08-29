create table student (
    id varchar (48) primary key,
    username varchar (40) unique,
    email varchar (30) unique not null,
    password varchar (40) not null
    );

    insert into table student values (
        (1,"Ajit.G" , "ajit.g@gmail.com" , "Ajit@1234"),
        (2,"Pruthvi.G" , "Pruthvi.G@gmail.com" , "Pruthvi@1234"),
        (3,"Rahul.P" , "Rahul.P@gmail.com" , "Rahul@1234"),
        (4,"Amil.T" , "Amil.T@gmail.com" , "Amil@1234"),
        (5,"Sumit.m" , "Sumit.m@gmail.com" , "Sumit@1234")

    );