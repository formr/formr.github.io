---
layout: page
title: Properties
description: A list of variables for building PHP forms with Formr.
permalink: /properties/
sitemap:
  priority: 0.7
  changefreq: weekly
  lastmod: 2019-06-20T00:00:00
---


<header class="post-header">
	<h1 class="post-title"><i class="fa fa-dollar"></i> Properties</h1>
	<p class="lead">This document contains a list of Formr's public properties.</p>
</header>




---

## $action

The form's action. Formr will automatically insert the current script's filename into the `<form>` tag unless you set this property to something else. Typically used with `fastform()`.

{% highlight php startinline %}
// set the form's action to the script `foo.php`
$form->action = 'foo.php';
echo $form->fastform('login');

// will produce
<form action="foo.php" method="post" accept-charset="utf-8">
{% endhighlight %}









## $charset

Formr's default character set is `UTF-8`, however, you can easily change this to something else, such as `Latin-1`.

{% highlight php startinline %}
	$form->charset = 'Latin-1';
{% endhighlight %}









## $comments

Boolean. Set to `TRUE` if you want Formr to print comments (`<!-- [fieldname] -->`) to the HTML for easier debugging.

{% highlight php startinline %}
	$form->comments = true;
{% endhighlight %}









## $controls

An array containing all of the CSS classes used in Formr which you can easily set when instantiating a new form. You can also create your own wrappers and save them in your own wrapper class.

{% highlight php startinline %}
// change the default text error class
$form->controls['text-error'] = 'my-error-class';
{% endhighlight %}

<div class="alert alert-info">
<i class="fa fa-lightbulb-o"></i> 
See the <a href="/#extensability">Extensibility</a> section for more info on creating your own classes.
</div>









## $custom_validation_messages

Works in conjunction with the `post()` method and tells Formr to suppress the default validation messages and only show your own custom message.

{% highlight php startinline %}
$form->custom_validation_messages = true;
$form->post('email', 'Email|Please enter your email', 'valid_email');
{% endhighlight %}

Will only display the error message: &quot;Please enter your email&quot; upon validation error of the email field.






## $html_purifier

Formr will clean any text passed through the `post()` and `get()` methods using a combination of the `strip_tags()` and `FILTER_SANITIZE_SPECIAL_CHARS` PHP functions. However, if you want to go deeper, you can easily use HTML Purifier. Just set the full path to your HTML Purifier script and Formr will do the rest.

{% highlight php startinline %}
$form->html_purifier = '/home/mysite/htdocs/lib/HTMLPurifier.standalone.php';
{% endhighlight %}









## $html5

Boolean. The default setting for Formr is to use HTML5 markup and data attributes. You can disable this by setting this property to `FALSE`.

{% highlight php startinline %}
$form->html5 = false;
{% endhighlight %}









## $id

Sets the `ID` of the form. You most likely will not need this as you can set the ID when creating the form, but it's here if you do.

{% highlight php startinline %}
$form->id = 'MyForm';
{% endhighlight %}









## $inline_errors

Boolean. Default is `FALSE`. Turns off textual error messages and, if you use the following CSS, inserts a small "warning" PNG (included in the img folder) to the right of the form field.

{% highlight php startinline %}
$form->inline_errors = true;
{% endhighlight %}


{% highlight php startinline %}
// CSS class and example code to show the "warning" PNG
.inline-error {
	float: left;
	width: 24px;
	height: 24px;
	background: url('../img/invalid.png') no-repeat 4px 4px;
}
{% endhighlight %}









## $inline_errors_class

Sets the CSS class name if you're using inline error reporting. Default class is `inline-error`.

{% highlight php startinline %}
$form->inline_errors_class = 'inline-error';
{% endhighlight %}









## $link_errors

Boolean. This property inserts an anchor link in the error message that then links to its corresponding form field in the form - handy if you have very long forms and there's a lot of scrolling. Note: the form field's name and ID attributes _must_ be the same for this to work.

{% highlight php startinline %}
// enable linking to errors
$form->link_errors = true;
{% endhighlight %}









## $method

The form's `method`. Formr will automatically insert `method="post"` into the `<form>` tag unless you set this property to something else. Typically used with `fastform()`.

{% highlight php startinline %}
// set the form's method to GET
$form->method = 'get';
echo $form->form_open();

// will produce
<form action="/index.php" method="get" accept-charset="utf-8">
{% endhighlight %}









## $minify

Boolean. Setting this to `TRUE` will remove all formatting and minify your output.

{% highlight php startinline %}
$form->minify = true;
{% endhighlight %}









## $name

Sets the name of the form. You probably won't need this but it's here if you do.

{% highlight php startinline %}
// setting the form's name to "cheese"
$form->name = 'cheese';

// will produce
<form action="foo.php" name="cheese" method="post" accept-charset="utf-8">
{% endhighlight %}









## $required

This one is really powerful. Formr enables you to easily make one field required, all fields required, or all but one field required. The `$form->required` property is global, which means that you don't have to mark each and every form field, form label and `POST` validation rule to "required"... instead, you supply the required field names to this property and Formr will handle everything for you automatically!

You can also omit fields from being required - which can be a huge time saver - because using omitted fields will automatically make all other fields in the form required!

1. To make a field required, just add it to the `$form->required` property.
1. To make all fields required, instead of adding all field names, just add an asterisk.
1. To omit fields, just wrap the omitted field name in parenthesis `()`


###  Example: Make *fname*, *lname*, *email* and *comments* Required

{% highlight php startinline %}
$form->required = 'fname,lname,email,comments';
{% endhighlight %}

###  Example: Make all Form Fields Required

{% highlight php startinline %}
$form->required = '*';
{% endhighlight %}


### Example: Make All Form Fields Required Except for `fname`

{% highlight php startinline %}
$form->required = '(fname)';
{% endhighlight %}


###  Example: Require All Form Fields Except `lname` and `country`

{% highlight php startinline %}
$form->required = '(lname),(country)';
{% endhighlight %}









## $required_indicator
Inserts a visual representation in the label field to let the user know the field is required. You can set this to whatever you like during instantiation, or leave it at the default (empty) value.
{% highlight php startinline %}
$form->required = 'username';
$form->required_indicator = '*';

echo $form->input_text('username','Username');
{% endhighlight %}


Will produce in the label
{% highlight html startinline %}
<label for="username">Username*</label> 
<input type="text" name="username" id="username" required>
{% endhighlight %}









## $session

Automatically puts all submitted form values into a `$_SESSION`. Handy for multi-page forms or if a user submits a form and then refreshes the page. 

{% highlight php startinline %}
$form->session = 'myForm';
{% endhighlight %}

{% highlight php startinline %}
// start our session
session_start();

// give our session a name
$form->session = 'myForm';

if($form->submit()) {
	$form->post('fname');
	$form->post('lname');
	$form->post('email');
	
	$form->printr($_SESSION);
}

// will produce something like the following
Array
(
    [myForm] => Array
        (
            [fname] => Yogi
            [lname] => Bear
            [email] => yogi@jellystone.com
        )
)
{% endhighlight %}

<div class="alert alert-danger">
<i class="fa fa-bomb"></i>	
You must set a session at the top of your script (<code>session_start()</code>) and then pass the <code>POST</code> values through the <code>post()</code> method or the <code>SESSION</code> data will not be set.
</div>









## $session_values 

Boolean. Will automatically populate all form fields with that field's corresponding value in the `$_SESSION`.

{% highlight php startinline %}
$form->session_values = true;
{% endhighlight %}

{% highlight php startinline %}
// tell Formr we want to use the $_SESSION values for all fields except lname
$form->session_values = true;

// By not doing anything Formr automatically uses the $_SESSION value for this element
$form->input_text('fname','First name')

// By entering a variable (or string) we prevent the automatic use of the $_SESSION value for this element
$form->input_text('lname','Last name',$lname)

// you could add the value manually too (like this), but why, when you can be lazy?
$form->input_text('lname','Last name',$_SESSION[$form->session]['lname'])
{% endhighlight %}

<div class="alert alert-info">
<i class="fa fa-lightbulb-o"></i>	
If you do not want the <code>$_SESSION</code> value to populate the field, or if you want to use a variable instead, just create a variable and place it in the third parameter of your input element as you normally would.
</div>









## $submit

The submit button's value as a string. If you don't set this Formr will automatically insert `value="Submit"` into the submit button. You'll probably never use this but it's here if you need it.

{% highlight php startinline %}
$form->submit = 'Submit Me, Jerk!';
$form->input_submit();

// will produce
<input type="submit" name="submit" value="Submit Me, Jerk!" id="submit">
{% endhighlight %}