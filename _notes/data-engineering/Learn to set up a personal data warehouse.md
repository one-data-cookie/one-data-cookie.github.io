---
title: Learn to set up a personal data warehouse
title-cs: 
category: data-engineering
tags: [learn]
season: spring
dates: [04 Apr 2021, 04 Dec 2021]
sources: Misc
---

# Links

## Fullstack
* [How I made an open housing dataset with BigQuery and dbt](https://verifyanalytics.wordpress.com/2021/02/20/open-housing-dataset-bigquery-dbt/)
* [Data Stacks For Fun & Nonprofit — Part III](https://towardsdatascience.com/data-stacks-for-fun-nonprofit-part-iii-dcfd46da9f9f)
* [A Simple Analytics Project Using Airflow, dbt and Superset](https://datajaffa.com/blog/end-to-end-analytics-project/)
* [Startup analytics 101: from seed to scale](https://blog.flockcover.com/startup-analytics-101-from-seed-to-scale-b8f47d691ade)
* [Open Source Data Stack Conference](https://www.opensourcedatastack.com/)
* [Gaining insights on my workout data with Apache Superset](https://marcel-jan.eu/datablog/2021/10/24/gaining-insights-on-my-workout-data-with-apache-superset/)

## Hosting
* [Hosting web apps for free](https://blog.patricktriest.com/host-webapps-free/)

### Heroku
* [Custom scheduler](https://devcenter.heroku.com/articles/scheduled-jobs-custom-clock-processes)
* [Scheduler plugin](https://devcenter.heroku.com/articles/scheduler)

## Scheduling
### Airflow
* [Running Airflow on Heroku](https://medium.com/@damesavram/running-airflow-on-heroku-ed1d28f8013d)
	* [Using Docker to explore Airflow and other open source projects](https://medium.com/@segal.levi/using-docker-to-explore-airflow-and-other-open-source-projects-e6349ffadf5a)
	* [Running Airflow locally to schedule tasks](https://towardsdatascience.com/your-live-covid-19-tracker-with-airflow-and-github-pages-658c3e048304)
	* [Getting started with Airflow locally and remotely](https://towardsdatascience.com/getting-started-with-airflow-locally-and-remotely-d068df7fcb4)
	* [Apache Airflow and DBT on Docker Compose](https://analyticsmayhem.com/dbt/apache-airflow-dbt-docker-compose/)

## ELT
### Meltano
* [Airbyte vs Meltano](https://www.preset.io/blog/2021-4-22-data-integration-tooling/)
* [Build a Slack Dashboard (Part 1): Extracting Data Using Meltano](https://preset.io/blog/2020-09-22-slack-dashboard/)
* [Meltano Labs](https://github.com/MeltanoLabs)

### Airbyte
* [Airbyte vs Meltano](https://www.preset.io/blog/2021-4-22-data-integration-tooling/)
* [Building an Open-source Ingestion Layer with Airbyte](https://preset.io/blog/building-an-open-source-ingestion-layer-with-airbyte/)
* [Ingestion with Airbyte: A Guided Tutorial](https://preset.io/blog/ingestion-with-airbyte-a-guided-tutorial/)

## Storage
### BigQuery
* [Console](https://console.cloud.google.com/bigquery)
* [Creating a service account](https://cloud.google.com/docs/authentication/getting-started#creating_a_service_account)
* [Meltano setup](https://meltano.com/plugins/loaders/bigquery.html#getting-started)
* dbt setup:
	* [FAQ](https://docs.getdbt.com/tutorial/setting-up)
	* [video](https://www.youtube.com/watch?v=fAwWSxJpFQ8&ab_channel=CodingisforLosers)
	* [config](https://docs.getdbt.com/reference/resource-configs/bigquery-configs)
	* [profile](https://docs.getdbt.com/reference/warehouse-profiles/bigquery-profile)
* [Superset setup](https://superset.apache.org/docs/databases/bigquery)
* [SQL functions](https://cloud.google.com/bigquery/docs/reference/standard-sql/syntax)

### PostgreSQL
* [How to log into a Postgresql database](https://alvinalexander.com/blog/post/postgresql/log-in-postgresql-database/)
* [How to get started with PostgreSQL](https://www.freecodecamp.org/news/how-to-get-started-with-postgresql-9d3bc1dd1b11/)
* [PostgreSQL Database startup / shutdown /restart](https://www.tutorialdba.com/2019/09/postgresql-database-startup-shutdown.html)
* [psql docs](https://www.postgresql.org/docs/9.2/app-psql.html)
* [PostgreSQL on Heroku](https://dev.to/prisma/how-to-setup-a-free-postgresql-database-on-heroku-1dc1)
	* Only 10K rows, 1GB storage; otherwise $9/mo; see [pricing](https://elements.heroku.com/addons/heroku-postgresql)

## Dashboarding
### Superset
* [Running Superset on Heroku](https://chizurumolorondu.medium.com/setting-up-apache-superset-on-heroku-b547302f600e)
	* [Heroku Template no. 1](https://github.com/zi-nt/superset-on-heroku) and [no. 2](https://github.com/dugjason/superset-on-heroku)
* [Adding New Database Drivers in Docker](https://superset.apache.org/docs/databases/dockeradddrivers)

## Querying
### Trino
* [Trino SQL](https://preset.io/blog/2021-6-22-trino-superset/), [PrestoDB vs PrestoSQL, i.e. Presto vs Trino](https://www.starburst.io/learn/open-source-presto/prestosql-and-prestodb/)

# Code
- *data stack:* PostgreSQL/BigQuery, Meltano, dbt, Superset

```shell
### PostgreSQL
# brew install postgresql
# postgres --version
pg_ctl -D /usr/local/var/postgres start
# - for error running it
# ps ax | grep postmaster ## finds the running task
# sudo kill INT ## kill the process
#
# log_min_messages = error in postgres.conf
# to remove warnings
psql -d postgres michal -W # michal, pw:"admin"
create database ds4fnp;
create user ds4fnp with password 'ds4fnp';
grant all privileges on database ds4fnp to ds4fnp;
\q
psql -U ds4fnp
# \c ds4fnp
create schema ds4fnp;
\q

### Directory 
mkdir ds4fnp
cd ds4fnp
python3 -m venv .venv
source .venv/bin/activate

### Meltano
pip install meltano
meltano init meltano
cd meltano
meltano add extractor tap-spreadsheets-anywhere
# meltano invoke tap-spreadsheets-anywhere --help
meltano add loader target-postgres
# meltano invoke target-postgres --help
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
cd ..
pip install apache-superset
# pip install sqlalchemy==1.3.24
superset db upgrade
superset fab create-admin
superset init
superset run -p 8088 --with-threads --reload --debugger # why just one?
# postgresql+psycopg2://ds4fnp:ds4fnp@127.0.0.1:5432/ds4fnp
# pip install pybigquery
# bigquery://{project_id}

### Closing
# - ctrl+c several times
deactivate
pg_ctl -D /usr/local/var/postgres stop

```

## Tasks
* [x] Test if Github works if I copy-paste it
* [x] Move Github from GDrive to michal
* [x] Test one last time from scratch
* [x] Commit
* [ ] Play around with:
	* [x] BigQuery
	* [ ] Airflow
	* [ ] Dockerisation and running on servers
	* [ ] Airbyte, Trino

## Notes
- What might be worth waiting for
	* A follow-up article on ds4np
	* Meltano: new integrations in July (?)