---
title: "프로젝트"
layout: archive
permalink: categories/codestates_project
author_profile: true
sidebar_main: true
---


{% assign posts = site.categories.codestates_project %}
{% for post in posts %} {% include archive-single.html type=page.entries_layout %} {% endfor %}