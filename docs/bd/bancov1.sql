create table Categories
(
    Id        int auto_increment
        primary key,
    Name      longtext                                 not null,
    IsActive  tinyint(1)                               not null,
    CreatedOn datetime(6) default CURRENT_TIMESTAMP(6) not null,
    UpdatedOn datetime(6) default CURRENT_TIMESTAMP(6) not null on update CURRENT_TIMESTAMP(6)
);

create table Documents
(
    Id        int auto_increment
        primary key,
    Type      int                                      not null,
    Number    varchar(14)                              not null,
    CreatedOn datetime(6) default CURRENT_TIMESTAMP(6) not null,
    UpdatedOn datetime(6) default CURRENT_TIMESTAMP(6) not null on update CURRENT_TIMESTAMP(6),
    DeletedOn datetime(6)                              null
);

create table Specialties
(
    Id         int auto_increment
        primary key,
    CategoryId int                                      not null,
    Name       longtext                                 not null,
    IsActive   tinyint(1)                               not null,
    CreatedOn  datetime(6) default CURRENT_TIMESTAMP(6) not null,
    UpdatedOn  datetime(6) default CURRENT_TIMESTAMP(6) not null on update CURRENT_TIMESTAMP(6),
    constraint FK_Specialties_Categories_CategoryId
        foreign key (CategoryId) references Categories (Id)
            on delete cascade
);

create index IX_Specialties_CategoryId
    on Specialties (CategoryId);

create table Users
(
    Id         int auto_increment
        primary key,
    Type       int                                      not null,
    Name       longtext                                 not null,
    Email      longtext                                 not null,
    Password   longtext                                 not null,
    BirthDate  date                                     not null,
    IsActive   tinyint(1)                               not null,
    CreatedOn  datetime(6) default CURRENT_TIMESTAMP(6) not null,
    UpdatedOn  datetime(6) default CURRENT_TIMESTAMP(6) not null on update CURRENT_TIMESTAMP(6),
    DeletedOn  datetime(6)                              null,
    DocumentId int                                      not null,
    constraint IX_Users_DocumentId
        unique (DocumentId),
    constraint FK_Users_Documents_DocumentId
        foreign key (DocumentId) references Documents (Id)
            on delete cascade
);

create table Clients
(
    Id        int auto_increment
        primary key,
    UserId    int                                      not null,
    CreatedOn datetime(6) default CURRENT_TIMESTAMP(6) not null,
    UpdatedOn datetime(6) default CURRENT_TIMESTAMP(6) not null on update CURRENT_TIMESTAMP(6),
    constraint FK_Clients_Users_UserId
        foreign key (UserId) references Users (Id)
            on delete cascade
);

create index IX_Clients_UserId
    on Clients (UserId);

create table Specialists
(
    Id              int auto_increment
        primary key,
    UserId          int                                      not null,
    WorkingDays     longtext                                 not null,
    BusyHours       longtext                                 not null,
    StartingHour    int                                      not null,
    EndingHour      int                                      not null,
    SessionDuration int                                      not null,
    NoShowThreshold int                                      not null,
    Bio             text                                     not null,
    CreatedOn       datetime(6) default CURRENT_TIMESTAMP(6) not null,
    UpdatedOn       datetime(6) default CURRENT_TIMESTAMP(6) not null on update CURRENT_TIMESTAMP(6),
    constraint FK_Specialists_Users_UserId
        foreign key (UserId) references Users (Id)
            on delete cascade
);

create table SpecialistSpecialty
(
    SpecialistsId int not null,
    SpecialtiesId int not null,
    primary key (SpecialistsId, SpecialtiesId),
    constraint FK_SpecialistSpecialty_Specialists_SpecialistsId
        foreign key (SpecialistsId) references Specialists (Id)
            on delete cascade,
    constraint FK_SpecialistSpecialty_Specialties_SpecialtiesId
        foreign key (SpecialtiesId) references Specialties (Id)
            on delete cascade
);

create index IX_SpecialistSpecialty_SpecialtiesId
    on SpecialistSpecialty (SpecialtiesId);

create index IX_Specialists_UserId
    on Specialists (UserId);

create table __EFMigrationsHistory
(
    MigrationId    varchar(150) not null
        primary key,
    ProductVersion varchar(32)  not null
);


