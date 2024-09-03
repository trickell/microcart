pg_dump: last built-in OID is 16383
pg_dump: reading extensions
pg_dump: identifying extension members
pg_dump: reading schemas
pg_dump: reading user-defined tables
pg_dump: reading user-defined functions
pg_dump: reading user-defined types
pg_dump: reading procedural languages
pg_dump: reading user-defined aggregate functions
pg_dump: reading user-defined operators
pg_dump: reading user-defined access methods
pg_dump: reading user-defined operator classes
pg_dump: reading user-defined operator families
pg_dump: reading user-defined text search parsers
pg_dump: reading user-defined text search templates
pg_dump: reading user-defined text search dictionaries
pg_dump: reading user-defined text search configurations
pg_dump: reading user-defined foreign-data wrappers
pg_dump: reading user-defined foreign servers
pg_dump: reading default privileges
pg_dump: reading user-defined collations
pg_dump: reading user-defined conversions
pg_dump: reading type casts
pg_dump: reading transforms
pg_dump: reading table inheritance information
pg_dump: reading event triggers
pg_dump: finding extension tables
pg_dump: finding inheritance relationships
pg_dump: reading column info for interesting tables
pg_dump: finding table default expressions
pg_dump: flagging inherited columns in subtables
pg_dump: reading partitioning data
pg_dump: reading indexes
pg_dump: flagging indexes in partitioned tables
pg_dump: reading extended statistics
pg_dump: reading constraints
pg_dump: reading triggers
pg_dump: reading rewrite rules
pg_dump: reading policies
pg_dump: reading row-level security policies
pg_dump: reading publications
pg_dump: reading publication membership of tables
pg_dump: reading publication membership of schemas
pg_dump: reading subscriptions
pg_dump: reading dependency data
pg_dump: saving encoding = UTF8
pg_dump: saving standard_conforming_strings = on
pg_dump: saving search_path =
pg_dump: creating SCHEMA "dev"
pg_dump: creating TABLE "dev.address"
pg_dump: creating TABLE "dev.admin"
pg_dump: creating SEQUENCE "dev.admin_id_seq"
pg_dump: creating SEQUENCE OWNED BY "dev.admin_id_seq"
pg_dump: creating TABLE "dev.role"
pg_dump: creating SEQUENCE "dev.role_id_seq"
pg_dump: creating SEQUENCE OWNED BY "dev.role_id_seq"
pg_dump: creating TABLE "dev.shipping"
pg_dump: creating SEQUENCE "dev.shipping_id_seq"
pg_dump: creating SEQUENCE OWNED BY "dev.shipping_id_seq"
pg_dump: creating TABLE "dev.shop"
pg_dump: creating SEQUENCE "dev.shop_id_seq"
pg_dump: creating SEQUENCE OWNED BY "dev.shop_id_seq"
pg_dump: creating TABLE "dev.theme"
pg_dump: creating SEQUENCE "dev.theme_id_seq"
pg_dump: creating SEQUENCE OWNED BY "dev.theme_id_seq"
pg_dump: creating TABLE "dev.user"
pg_dump: creating SEQUENCE "dev.user_id_seq"
pg_dump: creating SEQUENCE OWNED BY "dev.user_id_seq"
pg_dump: creating DEFAULT "dev.admin id"
pg_dump: creating DEFAULT "dev.role id"
pg_dump: creating DEFAULT "dev.shipping id"
pg_dump: creating DEFAULT "dev.shop id"
pg_dump: creating DEFAULT "dev.theme id"
pg_dump: creating DEFAULT "dev.user id"
pg_dump: processing data for table "dev.address"
pg_dump: dumping contents of table "dev.address"
pg_dump: processing data for table "dev.admin"
pg_dump: dumping contents of table "dev.admin"
pg_dump: processing data for table "dev.role"
pg_dump: dumping contents of table "dev.role"
pg_dump: processing data for table "dev.shipping"
pg_dump: dumping contents of table "dev.shipping"
pg_dump: processing data for table "dev.shop"
pg_dump: dumping contents of table "dev.shop"
pg_dump: processing data for table "dev.theme"
pg_dump: dumping contents of table "dev.theme"
pg_dump: processing data for table "dev.user"
pg_dump: dumping contents of table "dev.user"
pg_dump: executing SEQUENCE SET admin_id_seq
pg_dump: executing SEQUENCE SET role_id_seq
pg_dump: executing SEQUENCE SET shipping_id_seq
pg_dump: executing SEQUENCE SET shop_id_seq
pg_dump: executing SEQUENCE SET theme_id_seq
pg_dump: executing SEQUENCE SET user_id_seq
pg_dump: creating CONSTRAINT "dev.address address_pkey"
pg_dump: creating CONSTRAINT "dev.admin admin_pkey"
pg_dump: creating CONSTRAINT "dev.role role_pkey"
pg_dump: creating CONSTRAINT "dev.shipping shipping_pkey"
pg_dump: creating CONSTRAINT "dev.shop shop_pkey"
pg_dump: creating CONSTRAINT "dev.theme theme_pkey"
pg_dump: creating CONSTRAINT "dev.admin unique_username"
pg_dump: creating CONSTRAINT "dev.user user_pkey"
pg_dump: creating INDEX "dev.fki_billing_id"
pg_dump: creating INDEX "dev.fki_user_shipping_id_fkey"
pg_dump: creating FK CONSTRAINT "dev.admin admin_role_id_fkey"
pg_dump: creating FK CONSTRAINT "dev.shop shop_admin_id_fkey"
pg_dump: creating FK CONSTRAINT "dev.user user_billing_id_fkey"
pg_dump: creating FK CONSTRAINT "dev.user user_role_id_fkey"
pg_dump: creating FK CONSTRAINT "dev.user user_shipping_id_fkey"
pg_dump: creating FK CONSTRAINT "dev.user user_theme_id_fkey"
pg_dump: creating ACL "SCHEMA dev"
pg_dump: creating ACL "dev.TABLE address"
pg_dump: creating ACL "dev.TABLE admin"
pg_dump: creating ACL "dev.TABLE role"
pg_dump: creating ACL "dev.TABLE shipping"
pg_dump: creating ACL "dev.TABLE shop"
pg_dump: creating ACL "dev.TABLE theme"
pg_dump: creating ACL "dev.TABLE "user""
pg_dump: creating ACL "dev.SEQUENCE user_id_seq"