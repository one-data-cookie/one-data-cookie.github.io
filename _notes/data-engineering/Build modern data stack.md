---
title: Build modern data stack
lang: en 
category: data-engineering
tags: [learn]
season: summer
created: 2021-04-04
updated: 2024-10-18
sources: Misc
---

> A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away.
> -- Antoine de Saint-Exupéry 

# Links

## Context
* [Modern Data Stack](https://preset.io/blog/modern-data-stack/). Read what the modern data stack is and how came around.
* [[Find out about Redshift's impact on modern data stack]]
* [Data Stack](https://www.moderndatastack.xyz/stacks). Learn how some of the most amazing companies in the world are organising their data stack. Learn more about the tools that they are using and why.
* The modern data stack was built around **SQL**.

## Fullstack
* [How I made an open housing dataset with BigQuery and dbt](https://verifyanalytics.wordpress.com/2021/02/20/open-housing-dataset-bigquery-dbt/)
* [Data Stacks For Fun & Nonprofit — Part III](https://towardsdatascience.com/data-stacks-for-fun-nonprofit-part-iii-dcfd46da9f9f)
* [A Simple Analytics Project Using Airflow, dbt and Superset](https://datajaffa.com/blog/end-to-end-analytics-project/)
* [dbt Core & Airflow](https://medium.com/albert-franzi/dbt-core-airflow-7d94edac9cdf)
* [Startup analytics 101: from seed to scale](https://blog.flockcover.com/startup-analytics-101-from-seed-to-scale-b8f47d691ade)
* [Open Source Data Stack Conference](https://www.opensourcedatastack.com/)
* [Gaining insights on my workout data with Apache Superset](https://marcel-jan.eu/datablog/2021/10/24/gaining-insights-on-my-workout-data-with-apache-superset/)
* [The four priorities of a one-person analytics team: lessons from Lola.com](https://blog.getdbt.com/the-four-priorities-of-an-analytics-team-of-one-lessons-from-lola-com/)
* [Bootstrap a Modern Data Stack in 5 minutes with Terraform](https://towardsdatascience.com/bootstrap-a-modern-data-stack-in-5-minutes-with-terraform-32342ee10e79)
* [Jan Soubusta – Data Pipeline as Code: Journey of our Blueprint](https://medium.com/gooddata-developers/data-pipeline-as-code-journey-of-our-blueprint-99912b1485d2)
* Recipes from Airbyte:
	* [Set up a modern data stack with Docker](https://airbyte.io/recipes/modern-data-stack-docker)
	* [Orchestrate ELT pipelines with Prefect, Airbyte and dbt](https://airbyte.io/recipes/elt-pipeline-prefect-airbyte-dbt)
* [mdsinabox](https://mdsinabox.com/) – a sports monte carlo simulator
* [Modern Data Stack in a Box with DuckDB](https://duckdb.org/2022/10/12/modern-data-stack-in-a-box.html)

## Hosting
* [Hosting web apps for free](https://blog.patricktriest.com/host-webapps-free/)
* For long time, the best choice was [Heroku](https://www.heroku.com/), hence it's used rather extensively below. However, Salesforce who [acquired the company in 2011](https://www.salesforce.com/news/press-releases/2011/01/03/salesforce-com-completes-acquisition-of-heroku/) decided to [eliminate free plans](https://techcrunch.com/2022/08/25/heroku-announces-plans-to-eliminate-free-plans-blaming-fraud-and-abuse/) in 2022. There are quite a few modern alternatives though, [here](https://medium.com/dictcp/top-6-heroku-alternative-drop-in-replacement-in-2022-ff456fe050e4) or [here](https://www.makeuseof.com/heroku-alternatives-free-full-stack-hosting/).

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
	* [Start using Airflow on Heroku](https://blog.devgenius.io/start-using-airflow-on-heroku-first-step-cc4d8fe3c921)

### Other paid
- [Dagster](https://dagster.io/)

### Other open-source
- [Kestra](https://kestra.io/)
- [Prefect](https://www.prefect.io/)

## ELT
### Meltano
* [Airbyte vs Meltano](https://www.preset.io/blog/2021-4-22-data-integration-tooling/)
* [Build a Slack Dashboard (Part 1): Extracting Data Using Meltano](https://preset.io/blog/2020-09-22-slack-dashboard/)
* [Meltano Labs](https://github.com/MeltanoLabs)

### Airbyte
* [Airbyte vs Meltano](https://www.preset.io/blog/2021-4-22-data-integration-tooling/)
* [Building an Open-source Ingestion Layer with Airbyte](https://preset.io/blog/building-an-open-source-ingestion-layer-with-airbyte/)
* [Ingestion with Airbyte: A Guided Tutorial](https://preset.io/blog/ingestion-with-airbyte-a-guided-tutorial/)

### CI
- [Setup a slim CI for dbt with BigQuery and Docker](https://medium.com/teads-engineering/setup-a-slim-ci-for-dbt-with-bigquery-and-docker-ce8e0a1a38f)
- [GitHub Actions](https://github.com/pricing)
	- *Team* might offer good value for money
	- There is even a specific [action for dbt](https://github.com/marketplace/actions/dbt-action) and for follow-up [notification to Slack](https://github.com/marketplace/actions/slack-notify)

### Python
- [data load tool (dlt)](https://github.com/dlt-hub/dlt): open-source Python library that makes data loading easy

## Transformation
### dbt
- dbt Cloud: free for one developer
- dbt Core:
	- [How to Deploy dbt to Production using GitHub Actions](https://towardsdatascience.com/how-to-deploy-dbt-to-production-using-github-action-778bf6a1dff6)
	- hint on deploying [from dbt](https://docs.getdbt.com/docs/guides/building-packages#5-deploy-the-docs-for-your-package)
	- to specify steps based on trigger: `if: github.event_name == 'workflow_dispatch'`
### Docs
- [How to deploy dbt docs to GitLab Pages](https://vitorbaptista.com/how-to-deploy-dbt-docs-to-gitlab-pages)
- Make it [password protected](https://github.com/chrissy-dev/protected-github-pages)

### SQLMesh
- [official site](https://sqlmesh.com/), [github](https://github.com/TobikoData/sqlmesh), [docs](https://sqlmesh.readthedocs.io/en/stable/), [blog](https://tobikodata.com/blog.html), [paid offering](https://tobikodata.com/)
- [comparison to dbt](https://sqlmesh.readthedocs.io/en/stable/comparisons/)
- my thoughts after testing it a bit:
> SQLMesh is heavily built around the “incremental idea” — it saves database snapshots and compares them over time, adjusting or supplementing as needed. This approach allows for the “terraform plan & apply” model they use and optimises for cost by default, recognising that storage is cheap but compute is expensive. This is quite a paradigm shift, especially compared to dbt, which primarily relies on the “full refresh” concept.
> 
> Because of this incremental approach, scheduling is tightly integrated. SQLMesh needs to “understand the state” of the data. It’s built to work well with Airflow, but also supports DLT and Kestra — all open-source tools, which is evident in the project’s open nature. There’s no paid offering either.
> 
> One key feature is its primary focus on SQL, while understanding the code itself. It knows when you’re only making formatting changes, can translate between SQL flavours, and automatically handles column lineage. Importantly, there’s no YAML or other configuration languages — just SQL and occasionally Python. They don’t even use Jinja for templating; macros are built directly into SQL, and you can write Python macros using any Python package. This is possible thanks to their sqlglot library, which directly manipulates SQL semantics rather than just doing text substitution.
> 
> The whole platform feels very geared toward the engineering experience. The Browser UI and Observer, for example, are clearly designed for developers, not end users. This focus is visible across the product: everything is written in SQL, it has the “terraform” style plan, a built-in CI/CD bot, unit tests, audits (like dbt tests), and so on.
> 
> They do, however, acknowledge some of the things dbt does well, such as SQL-based transformations, the CLI experience, managing environments (dev vs. prod), and project structures. They ensure backward compatibility with dbt through a “dbt package,” which allows the use of dbt projects and packages.
> 
> However, some aspects of SQLMesh feel more complicated. It took me longer to get the basics compared to dbt, possibly due to its more complex underlying concept. There are more commands to learn, the documentation is somewhat weaker, and overall it doesn’t feel as straightforward or streamlined. It gives the impression of senior engineers piecing together a complex solution, while dbt started as a simpler idea that gradually matured and expanded with additional tools and packages.


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
* Monthly free: 10 GB storage, 1 TB for analysis

### PostgreSQL
* [How to log into a Postgresql database](https://alvinalexander.com/blog/post/postgresql/log-in-postgresql-database/)
* [How to get started with PostgreSQL](https://www.freecodecamp.org/news/how-to-get-started-with-postgresql-9d3bc1dd1b11/)
* [PostgreSQL Database startup / shutdown /restart](https://www.tutorialdba.com/2019/09/postgresql-database-startup-shutdown.html)
* [psql docs](https://www.postgresql.org/docs/9.2/app-psql.html)
* [PostgreSQL on Heroku](https://dev.to/prisma/how-to-setup-a-free-postgresql-database-on-heroku-1dc1)
	* Only 10K rows, 1GB storage; otherwise $9/mo; see [pricing](https://elements.heroku.com/addons/heroku-postgresql)

### DuckDB
* [Official site](https://duckdb.org/)
* [Modern Data Stack in a Box with DuckDB](https://duckdb.org/2022/10/12/modern-data-stack-in-a-box.html)
* [`pg_duckdb`](https://github.com/duckdb/pg_duckdb): DuckDB-powered Postgres for high performance apps & analytics
* And they have [friendly SQL](https://duckdb.org/docs/sql/dialect/friendly_sql)

## Dashboarding
### Superset
* [Set up using Makefile](https://dev.to/lyndsiwilliams/apache-superset-installing-locally-is-easy-using-the-makefile-4ofi)
* Running on Heroku:
	* [Running Superset on Heroku](https://chizurumolorondu.medium.com/setting-up-apache-superset-on-heroku-b547302f600e)
		* [Heroku Template no. 1](https://github.com/zi-nt/superset-on-heroku) and [no. 2](https://github.com/dugjason/superset-on-heroku)

```shell
# Set up basics
$ pip install apache-superset
$ pip install psycopg2
$ pip freeze > requirements.txt # or just limit to installed above
$ echo "web: superset db upgrade" > Procfile
$ echo "python-3.8.2" > runtime.txt
# add configs to superset_config.py

# Generate secret key
$ python
>>> from cryptography import fernet  
>>> fernet.Fernet.generate_key()

# Set up Heroku app
$ heroku login
$ heroku create mds4all-superset
$ heroku config:set SECRET_KEY=<SECRET_KEY>
$ heroku config:set PORT=<PORT>
$ heroku addons:create heroku-postgresql:hobby-dev
$ git push heroku main
$ heroku logs –-tail # check for errors

# Initialise Superset
$ heroku run bash
$ export FLASK_APP=superset
$ superset fab create-admin
$ superset init
$ exit

# Finalise app
$ echo 'web: gunicorn "superset.app:create_app()"' > Procfile
$ git push heroku main
$ heroku logs --tail # check for errors

# Open app
$ heroku open
# add pybigquery to requirements.txt for BigQuery connections
```

* Running **Superset on GCP**
	* *Cloud Run*: example [one](https://towardsdatascience.com/deploying-apache-superset-on-google-cloud-run-4e8f9b85a78a) and [two](https://github.com/K12-Analytics-Engineering/superset)
	* *App Engine*: example [here](https://medium.com/@feroult/serverless-superset-on-google-cloud-87d3cf324845)
	* [Cloud Run vs App Engine](https://medium.com/google-cloud/cloud-run-vs-app-engine-whats-the-lowest-cost-6c82b874ed61)
* [Adding New Database Drivers in Docker](https://superset.apache.org/docs/databases/dockeradddrivers)

## Querying
### Trino
* [Trino SQL](https://preset.io/blog/2021-6-22-trino-superset/), [PrestoDB vs PrestoSQL, i.e. Presto vs Trino](https://www.starburst.io/learn/open-source-presto/prestosql-and-prestodb/)

## Editor
- [How we set up our computers for working on dbt projects](https://discourse.getdbt.com/t/how-we-set-up-our-computers-for-working-on-dbt-projects/243)

### VSCode
- [dbt Power User](https://marketplace.visualstudio.com/items?itemName=innoverio.vscode-dbt-power-user)
- [vscode-dbt](https://marketplace.visualstudio.com/items?itemName=bastienboutonnet.vscode-dbt)
- [vscode-bigquery](https://github.com/google/vscode-bigquery)
- [SQL (BigQuery)](https://marketplace.visualstudio.com/items?itemName=shinichi-takii.sql-bigquery)
- [Better Jinja](https://marketplace.visualstudio.com/items?itemName=samuelcolvin.jinjahtml)
- [Rainbow CSV](https://marketplace.visualstudio.com/items?itemName=mechatroner.rainbow-csv)

### Atom
- [atom-dbt](https://atom.io/packages/atom-dbt)


# Code
## Local installs
- *data stack:* PostgreSQL/BigQuery, Meltano, dbt, Superset on Heroku

```shell
### BigQuery

# Install gcloud from https://cloud.google.com/sdk/docs/install 
$ gcloud auth login
 
# Add var
$ PROJECT_ID=$(gcloud config get-value project)

# Create user
$ gcloud iam service-accounts create bigquery-sa --display-name="BigQuery SA"

# Add perms
$ gcloud projects add-iam-policy-binding $PROJECT_ID --member="serviceAccount:bigquery-sa@$PROJECT_ID.iam.gserviceaccount.com" --role="roles/bigquery.user"

$ gcloud projects add-iam-policy-binding ${PROJECT_ID} --member="serviceAccount:bigquery-sa@${PROJECT_ID}.iam.gserviceaccount.com" --role="roles/bigquery.dataEditor"

# Get creds to local
$ gcloud iam service-accounts keys create bigquery-sa.json --iam-account=bigquery-sa@${PROJECT_ID}.iam.gserviceaccount.com


### PostgreSQL
# $ brew install postgresql
# $ postgres --version
$ pg_ctl -D /usr/local/var/postgres start
# - for error running it
# $ ps ax | grep postmaster ## finds the running task
# $ sudo kill INT ## kill the process
#
# log_min_messages = error in postgres.conf
# to remove warnings
$ psql -d postgres michal -W # michal, pw:"admin"
> create database ds4fnp;
> create user ds4fnp with password 'ds4fnp';
> grant all privileges on database ds4fnp to ds4fnp;
> \q
$ psql -U ds4fnp
# > \c ds4fnp
> create schema ds4fnp;
> \q

### Directory 
$ mkdir ds4fnp
$ cd ds4fnp
$ python3 -m venv .venv
$ source .venv/bin/activate

### Meltano
$ pip install meltano
$ meltano init meltano
$ cd meltano
$ meltano add extractor tap-spreadsheets-anywhere
# $ meltano invoke tap-spreadsheets-anywhere --help
$ meltano add loader target-postgres
# $ meltano invoke target-postgres --help
# - error on macOS: https://stackoverflow.com/a/62931654

### ELT
# - add config info to tap and target in meltano.yml
$ meltano elt tap-spreadsheets-anywhere target-postgres

### dbt
# $ brew update
# $ brew install git
# $ brew tap fishtown-analytics/dbt
# $ brew install dbt
# - set up profiles.yml
$ cd ..
$ pip install dbt  
$ dbt init dbt --adapter postgres
$ cd dbt
$ dbt debug
# - set up dbt_project.yml
# - set up schema.yml files
$ dbt run
$ dbt docs generate
$ dbt docs serve

### Superset
$ cd ..
$ pip install apache-superset
# $ pip install sqlalchemy==1.3.24
$ superset db upgrade
$ superset fab create-admin
$ superset init
$ superset run -p 8088 --with-threads --reload --debugger # why just one?
# postgresql+psycopg2://ds4fnp:ds4fnp@127.0.0.1:5432/ds4fnp
# $ pip install pybigquery
# bigquery://{project_id}

### Closing
# - ctrl+c several times
$ deactivate
$ pg_ctl -D /usr/local/var/postgres stop

```

## Docker
- *data stack:* PostgreSQL, Superset, (dbt locally)
- [How to Deploy Docker Containers to The Cloud](https://towardsdatascience.com/how-to-deploy-docker-containers-to-the-cloud-b4d89b2c6c31)

```shell

# Postgres
$ docker pull postgres
$ docker run --name postgres -e POSTGRES_USER=cookie -e POSTGRES_PASSWORD=cookie -p 5432:5432 -d postgres

$ brew install libpq
$ brew link --force libpq
$ docker exec -it postgres psql -U cookie -d postgres

# Superset
$ docker pull apache/superset
$ docker run -d -p 8080:8088 --name superset apache/superset
# -v $PWD/local_config.py:/app/pythonpath/superset_config.py
$ docker exec -it superset superset fab create-admin \
              --username admin \
              --firstname Superset \
              --lastname Admin \
              --email admin@superset.com \
              --password admin
$ docker exec -it superset superset db upgrade
# $ docker exec -it superset superset load_examples
$ docker exec -it superset superset init

# postgresql+psycopg2://cookie:cookie@host.docker.internal:5432/postgres
```

## Tasks
* [x] Test if Github works if I copy-paste it
* [x] Move Github from GDrive to michal
* [x] Test one last time from scratch
* [x] Commit
* [ ] Play around with:
	* [x] BigQuery
	* [ ] Different hosting (GCP)
	* [ ] Google Data Studio
	* [ ] Keboola
	* [ ] Airflow
	* [ ] Dockerisation and running on servers
	* [ ] Airbyte, Trino

## Notes
- What might be worth waiting for
	* A follow-up article on ds4np
	* Meltano: new integrations in July (?)