---
layout: default
title: Blog
permalink: /blog/
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
