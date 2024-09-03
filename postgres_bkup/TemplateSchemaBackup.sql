--
-- PostgreSQL database dump
--

-- Dumped from database version 16.3
-- Dumped by pg_dump version 16.3

-- Started on 2024-07-22 23:06:11

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 7 (class 2615 OID 24690)
-- Name: template; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA template;


ALTER SCHEMA template OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 233 (class 1259 OID 24692)
-- Name: category; Type: TABLE; Schema: template; Owner: postgres
--

CREATE TABLE template.category (
    id integer NOT NULL,
    name character varying(45) DEFAULT NULL::character varying,
    parent_id integer NOT NULL
);


ALTER TABLE template.category OWNER TO postgres;

--
-- TOC entry 232 (class 1259 OID 24691)
-- Name: category_id_seq; Type: SEQUENCE; Schema: template; Owner: postgres
--

CREATE SEQUENCE template.category_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE template.category_id_seq OWNER TO postgres;

--
-- TOC entry 4863 (class 0 OID 0)
-- Dependencies: 232
-- Name: category_id_seq; Type: SEQUENCE OWNED BY; Schema: template; Owner: postgres
--

ALTER SEQUENCE template.category_id_seq OWNED BY template.category.id;


--
-- TOC entry 235 (class 1259 OID 24762)
-- Name: order; Type: TABLE; Schema: template; Owner: postgres
--

CREATE TABLE template."order" (
    id integer NOT NULL,
    user_id integer NOT NULL,
    created timestamp without time zone,
    shipping_id integer NOT NULL,
    status integer
);


ALTER TABLE template."order" OWNER TO postgres;

--
-- TOC entry 234 (class 1259 OID 24761)
-- Name: order_id_seq; Type: SEQUENCE; Schema: template; Owner: postgres
--

CREATE SEQUENCE template.order_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE template.order_id_seq OWNER TO postgres;

--
-- TOC entry 4864 (class 0 OID 0)
-- Dependencies: 234
-- Name: order_id_seq; Type: SEQUENCE OWNED BY; Schema: template; Owner: postgres
--

ALTER SEQUENCE template.order_id_seq OWNED BY template."order".id;


--
-- TOC entry 240 (class 1259 OID 24790)
-- Name: order_product; Type: TABLE; Schema: template; Owner: postgres
--

CREATE TABLE template.order_product (
    id integer NOT NULL,
    order_id integer,
    product_id integer,
    quantity integer
);


ALTER TABLE template.order_product OWNER TO postgres;

--
-- TOC entry 239 (class 1259 OID 24789)
-- Name: order_product_id_seq; Type: SEQUENCE; Schema: template; Owner: postgres
--

CREATE SEQUENCE template.order_product_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE template.order_product_id_seq OWNER TO postgres;

--
-- TOC entry 4865 (class 0 OID 0)
-- Dependencies: 239
-- Name: order_product_id_seq; Type: SEQUENCE OWNED BY; Schema: template; Owner: postgres
--

ALTER SEQUENCE template.order_product_id_seq OWNED BY template.order_product.id;


--
-- TOC entry 238 (class 1259 OID 24770)
-- Name: product; Type: TABLE; Schema: template; Owner: postgres
--

CREATE TABLE template.product (
    shop_id integer NOT NULL,
    id integer NOT NULL,
    name character varying(45) DEFAULT NULL::character varying,
    price numeric(10,2) DEFAULT NULL::numeric,
    image character varying(45) DEFAULT NULL::character varying,
    size character varying(10) DEFAULT NULL::character varying,
    details text,
    category_id integer,
    keywords text,
    sku character varying(10) DEFAULT NULL::character varying,
    created timestamp without time zone
);


ALTER TABLE template.product OWNER TO postgres;

--
-- TOC entry 237 (class 1259 OID 24769)
-- Name: product_id_seq; Type: SEQUENCE; Schema: template; Owner: postgres
--

CREATE SEQUENCE template.product_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE template.product_id_seq OWNER TO postgres;

--
-- TOC entry 4866 (class 0 OID 0)
-- Dependencies: 237
-- Name: product_id_seq; Type: SEQUENCE OWNED BY; Schema: template; Owner: postgres
--

ALTER SEQUENCE template.product_id_seq OWNED BY template.product.id;


--
-- TOC entry 236 (class 1259 OID 24768)
-- Name: product_shop_id_seq; Type: SEQUENCE; Schema: template; Owner: postgres
--

CREATE SEQUENCE template.product_shop_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE template.product_shop_id_seq OWNER TO postgres;

--
-- TOC entry 4867 (class 0 OID 0)
-- Dependencies: 236
-- Name: product_shop_id_seq; Type: SEQUENCE OWNED BY; Schema: template; Owner: postgres
--

ALTER SEQUENCE template.product_shop_id_seq OWNED BY template.product.shop_id;


--
-- TOC entry 4684 (class 2604 OID 24695)
-- Name: category id; Type: DEFAULT; Schema: template; Owner: postgres
--

ALTER TABLE ONLY template.category ALTER COLUMN id SET DEFAULT nextval('template.category_id_seq'::regclass);


--
-- TOC entry 4686 (class 2604 OID 24765)
-- Name: order id; Type: DEFAULT; Schema: template; Owner: postgres
--

ALTER TABLE ONLY template."order" ALTER COLUMN id SET DEFAULT nextval('template.order_id_seq'::regclass);


--
-- TOC entry 4694 (class 2604 OID 24793)
-- Name: order_product id; Type: DEFAULT; Schema: template; Owner: postgres
--

ALTER TABLE ONLY template.order_product ALTER COLUMN id SET DEFAULT nextval('template.order_product_id_seq'::regclass);


--
-- TOC entry 4687 (class 2604 OID 24773)
-- Name: product shop_id; Type: DEFAULT; Schema: template; Owner: postgres
--

ALTER TABLE ONLY template.product ALTER COLUMN shop_id SET DEFAULT nextval('template.product_shop_id_seq'::regclass);


--
-- TOC entry 4688 (class 2604 OID 24774)
-- Name: product id; Type: DEFAULT; Schema: template; Owner: postgres
--

ALTER TABLE ONLY template.product ALTER COLUMN id SET DEFAULT nextval('template.product_id_seq'::regclass);


--
-- TOC entry 4850 (class 0 OID 24692)
-- Dependencies: 233
-- Data for Name: category; Type: TABLE DATA; Schema: template; Owner: postgres
--

COPY template.category (id, name, parent_id) FROM stdin;
\.


--
-- TOC entry 4852 (class 0 OID 24762)
-- Dependencies: 235
-- Data for Name: order; Type: TABLE DATA; Schema: template; Owner: postgres
--

COPY template."order" (id, user_id, created, shipping_id, status) FROM stdin;
\.


--
-- TOC entry 4857 (class 0 OID 24790)
-- Dependencies: 240
-- Data for Name: order_product; Type: TABLE DATA; Schema: template; Owner: postgres
--

COPY template.order_product (id, order_id, product_id, quantity) FROM stdin;
\.


--
-- TOC entry 4855 (class 0 OID 24770)
-- Dependencies: 238
-- Data for Name: product; Type: TABLE DATA; Schema: template; Owner: postgres
--

COPY template.product (shop_id, id, name, price, image, size, details, category_id, keywords, sku, created) FROM stdin;
\.


--
-- TOC entry 4868 (class 0 OID 0)
-- Dependencies: 232
-- Name: category_id_seq; Type: SEQUENCE SET; Schema: template; Owner: postgres
--

SELECT pg_catalog.setval('template.category_id_seq', 1, false);


--
-- TOC entry 4869 (class 0 OID 0)
-- Dependencies: 234
-- Name: order_id_seq; Type: SEQUENCE SET; Schema: template; Owner: postgres
--

SELECT pg_catalog.setval('template.order_id_seq', 1, false);


--
-- TOC entry 4870 (class 0 OID 0)
-- Dependencies: 239
-- Name: order_product_id_seq; Type: SEQUENCE SET; Schema: template; Owner: postgres
--

SELECT pg_catalog.setval('template.order_product_id_seq', 1, false);


--
-- TOC entry 4871 (class 0 OID 0)
-- Dependencies: 237
-- Name: product_id_seq; Type: SEQUENCE SET; Schema: template; Owner: postgres
--

SELECT pg_catalog.setval('template.product_id_seq', 1, false);


--
-- TOC entry 4872 (class 0 OID 0)
-- Dependencies: 236
-- Name: product_shop_id_seq; Type: SEQUENCE SET; Schema: template; Owner: postgres
--

SELECT pg_catalog.setval('template.product_shop_id_seq', 1, false);


--
-- TOC entry 4696 (class 2606 OID 24698)
-- Name: category category_pkey; Type: CONSTRAINT; Schema: template; Owner: postgres
--

ALTER TABLE ONLY template.category
    ADD CONSTRAINT category_pkey PRIMARY KEY (id);


--
-- TOC entry 4698 (class 2606 OID 24767)
-- Name: order order_pkey; Type: CONSTRAINT; Schema: template; Owner: postgres
--

ALTER TABLE ONLY template."order"
    ADD CONSTRAINT order_pkey PRIMARY KEY (id);


--
-- TOC entry 4702 (class 2606 OID 24795)
-- Name: order_product order_product_pkey; Type: CONSTRAINT; Schema: template; Owner: postgres
--

ALTER TABLE ONLY template.order_product
    ADD CONSTRAINT order_product_pkey PRIMARY KEY (id);


--
-- TOC entry 4700 (class 2606 OID 24783)
-- Name: product product_pkey; Type: CONSTRAINT; Schema: template; Owner: postgres
--

ALTER TABLE ONLY template.product
    ADD CONSTRAINT product_pkey PRIMARY KEY (id);


--
-- TOC entry 4704 (class 2606 OID 24796)
-- Name: order_product order_product_order_id_fkey; Type: FK CONSTRAINT; Schema: template; Owner: postgres
--

ALTER TABLE ONLY template.order_product
    ADD CONSTRAINT order_product_order_id_fkey FOREIGN KEY (order_id) REFERENCES template."order"(id);


--
-- TOC entry 4705 (class 2606 OID 24801)
-- Name: order_product order_product_product_id_fkey; Type: FK CONSTRAINT; Schema: template; Owner: postgres
--

ALTER TABLE ONLY template.order_product
    ADD CONSTRAINT order_product_product_id_fkey FOREIGN KEY (product_id) REFERENCES template.product(id);


--
-- TOC entry 4703 (class 2606 OID 24784)
-- Name: product product_category_id_fkey; Type: FK CONSTRAINT; Schema: template; Owner: postgres
--

ALTER TABLE ONLY template.product
    ADD CONSTRAINT product_category_id_fkey FOREIGN KEY (category_id) REFERENCES template.category(id);


-- Completed on 2024-07-22 23:06:11

--
-- PostgreSQL database dump complete
--

