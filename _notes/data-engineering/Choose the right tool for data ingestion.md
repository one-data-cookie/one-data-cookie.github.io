---
title: Choose the right tool for data ingestion
lang: en 
category: data-engineering
tags: [tools]
season: winter
created: 2021-06-20
updated: 2023-04-07
sources: https://docs.airbyte.io/faq/differences-with/, https://preset.io/blog/2021-4-22-data-integration-tooling/
---

* **Airbyte**: open-source, big hit on GitHub, sustainable business model, setup with docker
	* The downsides of full containerization are the inherent performance costs and the added steps when modifying or building new connectors. The Airbyte team seems to be focused on building and maintaining their own containerized connectors rather than relying solely on the Singer ecosystem, which is a welcome move. That being said, maintaining a long list of data connectors as a small team is a real challenge, and a number of Airbyte connectors are only partially healthy at the time of writing.
	-   Web GUI provides easy access to core pipelining functionality with a shallow learning curve
	-   Fully containerized connectors provide huge flexibility in implementation
	-   API offers programmatic control not otherwise available through the GUI
	-   Automatically generates a mostly normalized data model for source APIs
	-   Integrated workers support concurrency and will provide scaling performance as connectors become more sophisticated in the future
	-   Set-up really couldn't be smoother
* **Singer**: slightly outdated but with big selection of connectors
	- Each Singer tap or target is its own open-source project, which means some are better maintained than others
* **Meltano**: easy to set up, GitLab project, built on top of Singer, dbt integration
	-   CLI-first interface ideal for data engineers
	-   Access to the many taps and targets in the Singer ecosystem out of the box
	-   Broader integration with existing data tools, including Airflow and DBT
	-   Handles transformation of data at ingestion with DBT models
	-   A competent and improving web GUI for pipeline creation and monitoring
	-   Tight integration with source-control
* **Fivertran and Stitch**: commercial tools but industry standards
* **PipelineWise**: open-source but quite small, built by TransferWise