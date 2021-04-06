---
title: Learn to set up a personal data warehouse
title-cs: 
category: data-engineering
tags: [learn]
season: spring
dates: [04 Apr 2021, 06 Apr 2021]
sources: Misc
---

## Links
* [How I made an open housing dataset with BigQuery and dbt](https://verifyanalytics.wordpress.com/2021/02/20/open-housing-dataset-bigquery-dbt/)
* [Data Stacks For Fun & Nonprofit — Part III](https://towardsdatascience.com/data-stacks-for-fun-nonprofit-part-iii-dcfd46da9f9f)
* [Build a Slack Dashboard (Part 1): Extracting Data Using Meltano](https://preset.io/blog/2020-09-22-slack-dashboard/)
* [How to get started with PostgreSQL](https://www.freecodecamp.org/news/how-to-get-started-with-postgresql-9d3bc1dd1b11/)
* [PostgreSQL Database startup / shutdown /restart](https://www.tutorialdba.com/2019/09/postgresql-database-startup-shutdown.html)

## Code

```shell
### PostgreSQL
# brew install postgresql
# postgres --version
pg_ctl -D /usr/local/var/postgres start
psql postgres # michal, pw:"admin"
create database ds4fnp;
create user ds4fnp with password 'ds4fnp';
grant all privileges on database ds4fnp to ds4fnp;
\q
psql -U ds4fnp
# \c ds4fnp
create schema ds4fnp_src;
\q

### Directory 
mkdir ds4fnp
cd ds4np
python3 -m venv .venv
source .venv/bin/activate

### Meltano
pip install meltano
meltano init meltano
cd meltano
meltano add extractor tap-spreadsheets-anywhere
# meltano invoke tap-spreadsheets-anywhere --help;
meltano add loader target-postgres
# meltano invoke target-postgres --help;
# - error on macOS: https://stackoverflow.com/a/62931654

### ELT
# - add config info to tap and target in meltano.yml
meltano elt tap-spreadsheets-anywhere target-postgres

### dbt
# brew update
# brew install git
# brew tap fishtown-analytics/dbt
# brew install dbt
# - set up profiles.yml
cd ..
pip install dbt  
dbt init dbt --adapter postgres
cd dbt
dbt debug
# - set up dbt_project.yml
# - set up schema.yml files
dbt run
dbt docs generate
dbt docs serve

### Superset
pip install apache-superset
superset db upgrade
superset fab create-admin
superset init
superset run -p 8088 --with-threads --reload --debugger
# postgresql+psycopg2://ds4fnp:ds4fnp@localhost:5432/ds4fnp

### Closing
# - ctrl+c several times
deactivate
pg_ctl -D /usr/local/var/postgres stop

```

## Tasks
* [ ] Test if Github works if I copy-paste it
* [ ] Move Github from GDrive to michal
* [ ] Test one last time from scratch
* [ ] Commit
* [ ] Play around with Airflow and dockerisation
	* [ ] Myself: wait for a follow-up article in a few weeks (or research)
	* [ ] Melatno: wait for integrations in July