---
layout: page
title: Formr | Validation
description: Validating PHP forms with Formr
permalink: /validation/
sitemap:
  priority: 0.7
  changefreq: weekly
  lastmod: 2019-06-28T00:00:00
---

<header class="post-header">
	<h1 class="post-title"><i class="fa fa-check"></i> Form Validation</h1>
	<p class="lead">This document contains a list of Formr's form validation methods and rules</p>
    <p class="lead">Note: Form validation mainly takes place inside the <code>post()</code> function, which is covered on this page. You can find more about processing forms with Formr on the <a href="https://formr.github.io/methods/#processing">Methods</a> page.</p>
</header>


---

# Receive Input

## post()

The `post()` function processes and validates (if required) the `POST` form input based upon a series of chainable rules.

There are three parameters to the `post()` function:

1. The first parameter is required and contains the field name: the <em>exact</em> name you've given the form field.
1. The optional second parameter contains the human readable text for this field, which will be inserted into the error message. It can optionally contain a custom error message string that will be shown if the field is required, yet left empty when submitted.
1. The optional third parameter contains pipe-delimited (`|`) validation rules for this field.

<div class="alert alert-info">
<i class="fa fa-lightbulb-o"></i>	
The form data is passed through the PHP <code>trim()</code> and <code>strip_tags()</code> functions for basic sanitation. If you want to allow HTML in your forms, just add <code>allow_html</code> as a validation rule in the <code>post()</code> method's validation parameter and only <code>trim()</code> will be applied to the input.
</div>

#### Example: Process the form input for the `fname` field and put it into a variable
{% highlight php startinline %}
// this is basically the same as strip_tags(trim($_POST['fname']))
$fname = $form->post('fname');
{% endhighlight %}


#### Example: Make sure an email address is valid using `FILTER_VALIDATE_EMAIL`
{% highlight php startinline %}
$form->post('email','Email','valid_email');
{% endhighlight %}


#### Example: Require `password` is no less than 6 characters and no more than 20
{% highlight php startinline %}
$form->post('password','Password','min_length[6]|max_length[20]');
{% endhighlight %}


#### Example: Require `password_conf` matches `password`, is no less than 6 characters and no more than 20
{% highlight php startinline %}
$form->post('password_conf','Password Confirm','matches[password]|min_length[6]|max_length[20]');
{% endhighlight %}


#### Example: Create a custom error message string
{% highlight php startinline %}
// adding a pipe (`|`) character after the human readable text will create a custom error string
$form->post('email','Email|Please enter your email address','valid_email');
{% endhighlight %}




# Validation Rules

# <i class="fa fa-filter"></i> Form Validation Rules

The following table contains all of Formr's validation rules for the `post()` method.

<div class="row">
<div class="col-sm-12 table-responsive">
<table class="table table-striped table-bordered table-hover">
<tr>
<th align="left">Rule</th>
<th align="left">Parameter</th>
<th align="left">Description</th>
<th align="left">Example</th>
</tr>
<tr>
<td class="td"><strong>matches</strong></td>
<td class="td text-center">Yes</td>
<td class="td">Returns FALSE if the form element does not match the one in the parameter.</td>
<td class="td">matches[form_item]</td>
</tr>
<tr>
<td class="td"><strong>min_length</strong></td>
<td class="td text-center">Yes</td>
<td class="td">Returns FALSE if the form element is shorter then the parameter value.</td>
<td class="td">min_length[6]</td>
</tr>
<tr>
<td class="td"><strong>max_length</strong></td>
<td class="td text-center">Yes</td>
<td class="td">Returns FALSE if the form element is longer then the parameter value.</td>
<td class="td">max_length[12]</td>
</tr>
<tr>
<td class="td"><strong>exact_length</strong></td>
<td class="td text-center">Yes</td>
<td class="td">Returns FALSE if the form element is not exactly the parameter value.</td>
<td class="td">exact_length[8]</td>
</tr>
<tr>
<td class="td"><strong>greater_than</strong></td>
<td class="td text-center">Yes</td>
<td class="td">Returns FALSE if the form element is less than the parameter value or not numeric.</td>
<td class="td">greater_than[8]</td>
</tr>
<tr>
<td class="td"><strong>less_than</strong></td>
<td class="td text-center">Yes</td>
<td class="td">Returns FALSE if the form element is greater than the parameter value or not numeric.</td>
<td class="td">less_than[8]</td>
</tr>
<tr>
<td class="td"><strong>alpha</strong></td>
<td class="td text-center">No</td>
<td class="td">Returns FALSE if the form element contains anything other than alphabetical characters.</td>
<td class="td">&nbsp;</td>
</tr>
<tr>
<td class="td"><strong>alpha_numeric</strong></td>
<td class="td text-center">No</td>
<td class="td">Returns FALSE if the form element contains anything other than alpha-numeric characters.</td>
<td class="td">&nbsp;</td>
</tr>
<tr>
<td class="td"><strong>alpha_dash</strong></td>
<td class="td text-center">No</td>
<td class="td">Returns FALSE if the form element contains anything other than alpha-numeric characters, underscores or dashes.</td>
<td class="td">&nbsp;</td>
</tr>
<tr>
<td class="td"><strong>numeric</strong></td>
<td class="td text-center">No</td>
<td class="td">Returns FALSE if the form element contains anything other than numeric characters.</td>
<td class="td">&nbsp;</td>
</tr>
<tr>
<td class="td"><strong>integer</strong></td>
<td class="td text-center">No</td>
<td class="td">Returns FALSE if the form element contains anything other than an integer.</td>
<td class="td">&nbsp;</td>
</tr>
<tr>
<td class="td"><strong>decimal</strong></td>
<td class="td text-center">No</td>
<td class="td">Returns FALSE if the form element is not exactly the parameter value.</td>
<td class="td">&nbsp;</td>
</tr>
<tr>
<td class="td"><strong>valid_email</strong></td>
<td class="td text-center">No</td>
<td class="td">Returns FALSE if the form element does not contain a valid email address.</td>
<td class="td">&nbsp;</td>
</tr>
<tr>
<td class="td"><strong>valid_ip</strong></td>
<td class="td text-center">No</td>
<td class="td">Returns FALSE if the supplied IP is not valid.</td>
<td class="td">&nbsp;</td>
</tr>
<tr>
<td class="td"><strong>md5</strong></td>
<td class="td text-center">No</td>
<td class="td">Returns an md5 encrypted string.</td>
<td class="td">&nbsp;</td>
</tr>
<tr>
<td class="td"><strong>sha1</strong></td>
<td class="td text-center">No</td>
<td class="td">Returns an sha1 encrypted string.</td>
<td class="td">&nbsp;</td>
</tr>
<tr>
<td class="td"><strong>hash</strong></td>
<td class="td text-center">No</td>
<td class="td">Returns an encrypted string using the password_hash() function.</td>
<td class="td">&nbsp;</td>
</tr>
<tr>
<td class="td"><strong>sanitize_string</strong></td>
<td class="td text-center">No</td>
<td class="td">Passes result through the FILTER_SANITIZE_STRING function.</td>
<td class="td">&nbsp;</td>
</tr>
<tr>
<td class="td"><strong>sanitize_url</strong></td>
<td class="td text-center">No</td>
<td class="td">Passes result through the FILTER_SANITIZE_URL function.</td>
<td class="td">&nbsp;</td>
</tr>
<tr>
<td class="td"><strong>sanitize_email</strong></td>
<td class="td text-center">No</td>
<td class="td">Passes result through the FILTER_SANITIZE_EMAIL function.</td>
<td class="td">&nbsp;</td>
</tr>
<tr>
<td class="td"><strong>slug</strong></td>
<td class="td text-center">No</td>
<td class="td">Creates a Twitter-style username string containing only letters, numbers and underscores.</td>
<td class="td">&nbsp;</td>
</tr>
<tr>
<td class="td"><strong>strip_numeric</strong></td>
<td class="td text-center">No</td>
<td class="td">Strips out everything but numbers.</td>
<td class="td">&nbsp;</td>
</tr>
<tr>
<td class="td"><strong>allow_html</strong></td>
<td class="td text-center">No</td>
<td class="td">Allows HTML, script tags, etc. Use with caution!</td>
<td class="td">&nbsp;</td>
</tr>
</table>
</div>
</div>