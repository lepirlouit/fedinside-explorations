create DATABASE athleticsmanager;
CREATE ROLE athleticsmanager LOGIN
  ENCRYPTED PASSWORD 'md5d033c75c2ea224371f65e38fbbbaf69b'
  SUPERUSER INHERIT CREATEDB NOCREATEROLE REPLICATION;
CREATE ROLE fieldtablet LOGIN
  ENCRYPTED PASSWORD 'md5ab1c3fe54a401b73b28abf2bad9cd3eb'
  SUPERUSER INHERIT CREATEDB NOCREATEROLE REPLICATION;
CREATE ROLE macfinish LOGIN
  ENCRYPTED PASSWORD 'md55b889feeaedb767661c283f65ba0f956'
  SUPERUSER INHERIT CREATEDB NOCREATEROLE REPLICATION;
CREATE ROLE test LOGIN
  ENCRYPTED PASSWORD 'md505a671c66aefea124cc08b76ea6d30bb'
  SUPERUSER INHERIT CREATEDB NOCREATEROLE REPLICATION;
CREATE ROLE webfiles LOGIN
  ENCRYPTED PASSWORD 'md57cd3388a6803985f0ad0fb2c6d5c2f6c'
  SUPERUSER INHERIT CREATEDB NOCREATEROLE REPLICATION;
