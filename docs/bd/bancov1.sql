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

create table Schedules
(
    Id         int auto_increment
        primary key,
    ClientId int                                        not null,
    SpecialistId int                                    not null,
    SpecialtyId int                                     not null,
    PaymentId int                                       not null,
    AppointmentId int,
    StartDate  datetime(6)                              not null,
    EndDate    datetime(6)                              not null,
    CreatedOn  datetime(6) default CURRENT_TIMESTAMP(6) not null,
    UpdatedOn  datetime(6) default CURRENT_TIMESTAMP(6) not null on update CURRENT_TIMESTAMP(6),
    constraint FK_Schedules_Clients_ClientId
        foreign key (ClientId) references Clients (Id)
            on delete cascade
);

create table Appointments
(
    Id         int auto_increment
        primary key,
    ScheduleId int                                      not null,
    CallStartedDate  datetime(6)                        not null,
    CallEndedDate  datetime(6)                          not null,
    ClientRating int,
    SpecialistRating int,
    CreatedOn  datetime(6) default CURRENT_TIMESTAMP(6) not null,
    UpdatedOn  datetime(6) default CURRENT_TIMESTAMP(6) not null on update CURRENT_TIMESTAMP(6),
    constraint FK_Appointments_Schedules_ScheduleId
        foreign key (ScheduleId) references Schedules (Id)
            on delete cascade
);

create table Payments
(
    Id         int auto_increment
        primary key,
    CreditId int                                        not null,
    SpecialistAmount int                                not null,
    PlatformFee int                                     not null,
    Status int                                          not null,
    CreatedOn  datetime(6) default CURRENT_TIMESTAMP(6) not null,
    UpdatedOn  datetime(6) default CURRENT_TIMESTAMP(6) not null on update CURRENT_TIMESTAMP(6),
    constraint FK_Payments_Credits_CreditId
        foreign key (CreditId) references Credits (Id)
            on delete cascade
);

create table Wallets
(
    Id         int auto_increment
        primary key,
    UserId int                                          not null,
    Credits int                                         not null,
    CreatedOn  datetime(6) default CURRENT_TIMESTAMP(6) not null,
    UpdatedOn  datetime(6) default CURRENT_TIMESTAMP(6) not null on update CURRENT_TIMESTAMP(6),
    constraint FK_Wallets_Users_UserId
        foreign key (UserId) references Users (Id)
            on delete cascade
);

create table Credits
(
    Id         int auto_increment
        primary key,
    WalletId int                                        not null,
    Amount int                                          not null,
    TransactionDate  datetime(6)                        not null,
    CreatedOn  datetime(6) default CURRENT_TIMESTAMP(6) not null,
    UpdatedOn  datetime(6) default CURRENT_TIMESTAMP(6) not null on update CURRENT_TIMESTAMP(6),
    constraint FK_Credits_Wallets_WalletId
        foreign key (WalletId) references Wallets (Id)
            on delete cascade
);

