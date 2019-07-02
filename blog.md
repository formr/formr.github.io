---
layout: default
title: Blog
description: Learn how to easily build PHP forms with Formr.
permalink: /blog/
sitemap:
  priority: 0.7
  changefreq: weekly
  lastmod: 2019-06-20T00:00:00
---

<div class="home">
	<ul class="post-list">
	{% for post in site.posts %}
		<li>
			<h2>
				<span class="push-left"><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></span>
				<span class="pull-right text-muted small" style="margin-top:5px">{{ post.date | date: "%b %-d, %Y" }}</span>
			</h2>
			<div class="lead">{{ post.excerpt }}</div>
			<p class="lead"><a href="{{ post.url | prepend: site.baseurl }}">more...</a></p>
		</li>
	{% endfor %}
	</ul>
</div>
