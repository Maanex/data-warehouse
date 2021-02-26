--

CREATE DATABASE warehouse;
USE warehouse;

--

-- CREATE TABLE languages(
--   id INT(6) PRIMARY KEY,
--   code VARCHAR(5) UNIQUE NOT NULL,
--   name_en VARCHAR(20) UNIQUE NOT NULL
-- );

-- CREATE TABLE currencies(
--   id INT(4) PRIMARY KEY,
--   symbol VARCHAR(1) UNIQUE NOT NULL,
--   name_en VARCHAR(10) UNIQUE NOT NULL
-- );

--

CREATE TABLE freestuff_guild_joins(
  time TIMESTAMP PRIMARY KEY,
  region INT(4),
  member_count INT(16),
  guild_id INT(32)
);

CREATE TABLE freestuff_guild_leaves(
  time TIMESTAMP PRIMARY KEY,
  region INT(4),
  member_count INT(16),
  guild_id INT(32)
);

-- CREATE TABLE freestuff_guild_list(
--   guild_id INT(32) PRIMARY KEY,
--   channel_setup BOOLEAN,
--   role_setup BOOLEAN,
--   reaction BOOLEAN,
--   alt_date_format BOOLEAN,
--   trash BOOLEAN,
--   min_price INT(16),
--   theme INT(6),
--   currency INT(4) REFERENCES currencies.id,
--   lang INT(6) REFERENCES languages.id,
--   store_steam BOOLEAN,
--   store_epic BOOLEAN,
--   store_humble BOOLEAN,
--   store_gog BOOLEAN,
--   store_origin BOOLEAN,
--   store_uplay BOOLEAN,
--   store_twitch BOOLEAN,
--   store_itch BOOLEAN,
--   store_discord BOOLEAN,
--   store_apple BOOLEAN,
--   store_google BOOLEAN,
--   store_switch BOOLEAN,
--   store_ps BOOLEAN,
--   store_xbox BOOLEAN,
--   store_other BOOLEAN
-- );

CREATE TABLE freestuff_commands(
  time TIMESTAMP PRIMARY KEY,
  command VARCHAR(14),
  user_id INT(32),
  guild_id INT(32),
  lang INT(6),
  slash BOOLEAN,
  manager BOOLEAN
);

CREATE TABLE freestuff_workers(
  time TIMESTAMP PRIMARY KEY,
  name VARCHAR(32)
);

CREATE TABLE test(
  time TIMESTAMP PRIMARY KEY,
  text VARCHAR(32),
  toggle TINYINT(1),
  num INT(32)
);
