---
layout: default
title: Formr | A PHP Micro-framework Which Helps You Quickly Build and Validate Web Forms
permalink: /
exclude_from_nav: true
---

<div class="jumbotron" id="welcome">
	<h1><i class="fa fa-check-square-o text-success"></i> Formr</h1>
	<p>Formr is a PHP micro-framework which installs easily and helps you build, layout and validate forms quickly, painlessly, and without all the complicated, messy overhead.</p>
	<br>
	<div class="row">
		<div class="col-sm-4">
			<a href="https://github.com/formr/Formr">
				<button class="btn btn-info btn-lg btn-block">
					<div class="hidden-sm"><i class="fa fa-github-alt"></i> View on GitHub</div>
					<div class="hidden-lg hidden-md hidden-xs"><i class="fa fa-github-alt"></i> GitHub</div>
				</button>
			</a>
		</div>
		<div class="col-sm-4">
			<a href="https://github.com/formr/Formr/zipball/master">
				<button class="btn btn-success btn-lg btn-block">
					<div class="hidden-sm"><i class="fa fa-cloud-download"></i> Download .zip</div>
					<div class="hidden-lg hidden-md hidden-xs"><i class="fa fa-cloud-download"></i> .zip</div>
				</button>
			</a>
		</div>
		<div class="col-sm-4">
			<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top"><input type="hidden" name="cmd" value="_s-xclick">
				<input type="hidden" name="hosted_button_id" value="Q8SGKD4YF5QSU">
				<button type="submit" class="btn btn-warning btn-lg btn-block">
					
					<div class="hidden-sm"><i class="fa fa-paypal"></i> Donate via PayPal</div>
					<div class="hidden-lg hidden-md hidden-xs"><i class="fa fa-paypal"></i> Donate</div>
				</button>
			</form>
		</div>
	</div>
	<br><br>
	<div class="row">
		<div class="col-sm-12 text-center">
			<iframe src="https://ghbtns.com/github-btn.html?user=formr&repo=Formr&type=star&count=true&size=small" frameborder="0" scrolling="0" width="160px" height="30px"></iframe> 
			<iframe src="https://ghbtns.com/github-btn.html?user=formr&repo=Formr&type=watch&count=true&size=small&v=2" frameborder="0" scrolling="0" width="160px" height="30px"></iframe> 
			<iframe src="https://ghbtns.com/github-btn.html?user=formr&repo=Formr&type=fork&count=true&size=small" frameborder="0" scrolling="0" width="158px" height="30px"></iframe>
		</div>
	</div>
</div>


# <i class="fa fa-leaf text-success"></i> Features
<ul class="fa-ul">
	<li><i class="fa-li fa fa-check-circle"></i> Create complex forms with server-side processing and validation in only minutes</li>
	<li><i class="fa-li fa fa-check-circle"></i> Instantly make one field required, all fields required, or all but one field required</li>
	<li><i class="fa-li fa fa-check-circle"></i> Built-in POST validation rules, including validating email, comparisons, slugging and hashing</li>
	<li><i class="fa-li fa fa-check-circle"></i> Bootstrap 3 ready; automatically wrap all of your form elements and messages in Bootstrap classes</li>
	<li><i class="fa-li fa fa-check-circle"></i> Automatically build and format <code>&lt;label&gt;</code> tags, saving lots of time</li>
	<li><i class="fa-li fa fa-check-circle"></i> Extensible: roll your own form &amp; validation sets and dropdown menus and share 'em with others</li>
	<li><i class="fa-li fa fa-check-circle"></i> Create and validate radio groups and checkbox arrays in seconds</li>
	<li><i class="fa-li fa fa-check-circle"></i> Automatically wrap field elements in <code>&lt;p&gt;</code>, <code>&lt;div&gt;</code>, <code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, <code>&lt;dl&gt;</code>, Bootstrap's <code>.form-control</code> or roll your own</li>
	<li><i class="fa-li fa fa-check-circle"></i> Object-oriented; supports multiple forms per page</li>
	<li><i class="fa-li fa fa-check-circle"></i> Little helpers to assist in building, layout, testing and debugging</li>
	<li><i class="fa-li fa fa-check-circle"></i> And a ton of other cool stuff too!</li>
</ul>
<br>

<div class="alert alert-info">
<i class="fa fa-lightbulb-o"></i>
<strong>A Quick Note on Terminology</strong><br>
When we're talking about <strong>methods</strong> we're referring to a <strong>function</strong> inside a PHP class. When we're talking about <strong>properties</strong> we're referring to <strong>variables</strong> inside a PHP class.
</div>

<div class="alert alert-warning">
<i class="fa fa-warning"></i> Formr does not have database capabilities, and very limited email capabilities; there are plenty of great classes out there that do that much, much better than I ever could.
</div>


# <i class="fa fa-plug text-warning"></i><a name="extensability"></a> Extensibility

Formr is extensible in that it has some additional classes to which you can easily modify and add methods; this should hopefully make your life a little easier by enabling you to build, save and share custom dropdown menus, CSS classes, field wrappers, and form/validation sets.

To create your own:

1. Open the appropriate `class.` file in the `formr/lib` directory and copy a method.
1. Paste the method into the appropriate class file in the `my_classes` directory.
1. Rename and modify the method to create your own. <span class="text-danger">Make sure your methods have unique names!</span> 

<br>

<div class="alert alert-info">
<i class="fa fa-bomb"></i> For now you may only add your own custom wrapper class by editing the <code>formr/lib/class.wrappers.php</code> file. I plan on updating the Wrapper to make it a true plugin when I can find the time.
</div>







# <i class="fa fa-youtube-play text-danger"></i> Screencasts

If you want to dive right in without reading all of this documentation (and I wouldn't blame you!) take a look at the following screencasts.

<div class="row">
	<div class="col-sm-6">
		<ul class="fa-ul">
			<li><i class="fa-li fa fa-youtube-play text-danger"></i> 1. <a href="https://youtu.be/Lg8VQwuNCPE">Installing and Building a Registration Form</a></li>
			<li><i class="fa-li fa fa-youtube-play text-danger"></i> 2. <a href="https://youtu.be/Yj5HrMlmalo">Working with Dropdown Menus</a></li>
			<li><i class="fa-li fa fa-youtube-play text-danger"></i> 3. <a href="https://youtu.be/-nbE4qkMxis">Checkboxes and Checkbox Arrays</a></li>
		</ul>
	</div>
	<div class="col-sm-6">
		<ul class="fa-ul">
			<li><i class="fa-li fa fa-youtube-play text-danger"></i> 4. <a href="https://youtu.be/qgUWy9P1k70">Uploading and Resizing Images</a></li>
			<li><i class="fa-li fa fa-youtube-play text-danger"></i> 5. <a href="https://youtu.be/h1MUdjw1c1M">Process and Validate POST Data</a></li>
		</ul>
	</div>
</div>


---




#### A Note From the Developer

Hi,

Thank you for checking out Formr. I began writing Formr for myself a couple years ago, and I've found it to be such an invaluable part of my toolkit that I decided to share it. I'm well aware the code behind Formr isn't something a rock star coder would write, and that's because I'm not a rock star coder; I just like creating things. <i class="fa fa-smile-o"></i>

As with all software, there are bound to be some bugs in Formr. Heck, I'm the only person (up until now) that's ever used it! So if you find a bug, <a href="https://github.com/formr/Formr/issues" title="Report Formr bugs"><span class="text-danger">please report it!</span></a> And if you find Formr useful (bugs and all), <a href="#welcome" title="Donate to Formr">please consider a donation</a>. Donating even $2 will really help in allowing me to work more on improving Formr and less on the day-to-day stuff in my freelancer life.

Thanks, and I hope you find Formr as useful as I have!

&mdash; Tim



---




# <i class="fa fa-power-off"></i> Installing and Instantiating Formr

Before you can do anything you'll need to <a href="https://github.com/timgavin/formr/zipball/master">download</a> Formr and put it in your project directory.

Next you'll need to include Formr in your script and then create an instance of the Formr class. Since each form is an object, you may have as many forms as you want in each  page.

### Creating an instance is really easy...
{% highlight php startinline %}
// require the Formr class
require_once 'formr/class.formr.php';

// now create an instance and give it a name, such as $form
$form = new Formr();
{% endhighlight %}

#### That's all there is to it. You're now ready to start building your forms!


---



# <i class="fa fa-wrench"></i> Building a Form: the Basics
Let's begin by taking a quick look at Formr's `input_text()` method, which creates a standard `<input type="text">` element and is the building block of most forms. While it will take a little longer to build a form using individual methods (as opposed to using [fastform()](/fastform/)) this approach will give you the most control. Plus, knowing how the individual methods behave will give you a better understanding of how Formr works, so this is where we'll begin.

<div class="alert alert-info">
<i class="fa fa-lightbulb-o"></i> Most Formr input methods accept 6 - 8 parameters, with only the first one being required. You can read all about Formr's methods in the <a href="/methods/">Formr Methods documentation</a>. Also, instead of filling out all parameters of the <code>input_text()</code> method, the first parameter may contain an associative array containing all of the data you want your field to contain.
</div>




## input_text()

Lets you generate a standard text input field.

1. The first parameter contains the field's name and is required.
1. The optional second parameter contains the field's label text.
1. The optional third parameter contains a default value.
1. The optional fourth parameter contains the field's ID.
1. The optional fifth parameter contains a string, which lets you add additional attributes, CSS, JavaScript, etc.
1. The optional sixth parameter contains the field's inline help text (Bootstrap only).

<br>

<div class="alert alert-info">
<i class="fa fa-lightbulb-o"></i> Adding text to the second parameter will automatically create a <code>&lt;label&gt;</code> element before the <code>&lt;input&gt;</code> element. If you'd rather manually create the label yourself, leave the second parameter empty.
</div>


### Example: Create a basic text input...
{% highlight php startinline %}
echo $form->input_text('fname');

// will produce
<input type="text" name="fname" id="fname">
{% endhighlight %}

### Example: Create an input with a label, ID, default value and placeholder text
{% highlight php startinline %}
echo $form->input_text('fname','First name:','John','fname','placeholder="first name:"');

// will produce
<label for="fname">First name:</label>
<input type="text" name="fname" id="fname" value="John" placeholder="first name:">
{% endhighlight %}









## form_open()

Opens the form with a standard `<form>` tag and accepts three parameters &mdash; all of them optional &mdash; so you can just leave it empty and the `<form>` tag will be created automatically with the proper attributes.

{% highlight php startinline %}
// assuming our script is named index.php and is in the root...
echo $form->form_open();

// will produce
<form action="/index.php" method="post" accept-charset="utf-8">
{% endhighlight %}









## input_submit()

Creates a standard `<input type="submit">` element.

{% highlight php startinline %}
echo $form->input_submit();

// will produce
<input type="submit" name="submit" value="Submit" id="submit">
{% endhighlight %}









# <i class="fa fa-code"></i> Wrapping Fields

You can easily (and automatically) wrap each form field in a `<div>`, `<p>` Bootstrap `.form-group` or roll your own wrapper. Just pass Formr the wrapper type when instantiating your form.

{% highlight php startinline %}
// wrap each form field in a `<div>`
$form = new Formr('div');
{% endhighlight %}

{% highlight php startinline %}
// wrap each form field in a `<p>`
$form = new Formr('p');
{% endhighlight %}

{% highlight php startinline %}
// wrap each form field in a `<div class="form-group">`
$form = new Formr('bootstrap');
{% endhighlight %}









### Example: Build a Simple Contact Form Using Bootstrap

Let's see how easy it is to incorporate Bootstrap into our Formr workflow...

{% highlight php startinline %}
require_once 'formr/class.formr.php';

// just add 'bootstrap' as your wrapper when you instantiate Formr
$form = new Formr('bootstrap');

// now build your form...
echo $form->form_open();
echo $form->input_text('name');
echo $form->input_email('email');
echo $form->input_submit();
echo $form->form_close();
{% endhighlight %}

The above code produces the following HTML with full Bootstrap formatting
{% highlight html startinline %}
<form action="/index.php" method="post" accept-charset="utf-8">
    <div id="_name" class="form-group">
        <input type="text" name="name" id="name" class="form-control">
    </div>
    <div id="_email" class="form-group">
        <input type="email" name="email" id="email" autocorrect="off" autocapitalize="off" class="form-control">
    </div>
    <div id="_submit" class="form-group">
        <input type="submit" name="submit" value="Submit" id="submit" class="btn">
    </div>
</form>
{% endhighlight %}









### Example: Repopulating the POSTed Fields

If you build your form in PHP with Formr (instead of HTML), eg; `$form->input_text('fname);` all fields will automatically re-populate if there is an error upon form submission. However, if you prefer to build your form fields in HTML you can still re-populate the field value after a `POST` with the `value()` method, like so:

{% highlight php startinline %}
// enter the field's name as the method's sole parameter
<input type="text" name="fname" value="<?php echo $form->value('fname'); ?>">
{% endhighlight %}









### Example: Building and Validating a Simple Contact Form

Let's rebuild that contact form, except this time we'll do it within HTML, then submit the form and validate it.
The following code contains a complete form that includes all of the necessary classes and libraries and performs server-side PHP validation; it checks to see if the fields are required, if the email address is valid, slugs the username (Twitter style), checks if the passwords match, and then hashes the password using the PHP `password_hash()` function.
Notice that we're also using Formr's `value()` method, which prints the `POST` value in the element's `value` attribute.

#### PHP for Processing the POST
{% highlight php startinline %}
<?php
// include and instantiate Formr
require_once 'formr/class.formr.php';
$form = new Formr();

// make all fields required
$form->required = '*';

// check if the form was submitted
if($form->submit()) {

	// process and validate the POST data
	$username = $form->post('uname','Username','slug');
	$email = $form->post('email','Email','valid_email');
	$password = $form->post('passwd','Password','min_length[6]|hash');
	$pass_conf = $form->post('passwd_conf','Confirm Password','min_length[6]|matches[passwd]');
	
	// check if there were any errors
	if(!$form->errors()) {
		// no errors
		// user has entered a valid email address, username, and confirmed their password
		echo $form->success_message('Success!');
	}
}

// print messages
echo $form->messages();
?>
{% endhighlight %}

#### The HTML Form
{% highlight html startinline %}
<form action="index.php" method="post">
    <label for="email">Email:</label>
    <input type="email" name="email" value="<?php echo $form->value('email'); ?>">
    
    <label for="uname">Username:</label>
    <input type="text" name="uname" value="<?php echo $form->value('uname'); ?>">
    
    <label for="passwd">Password:</label>
    <input type="password" name="passwd">
    
    <label for="passwd_conf">Confirm Password:</label>
    <input type="password" name="passwd_conf">
    
    <input type="submit" name="submit" value="Register">
</form>
{% endhighlight %}









# <i class="fa fa-upload"></i> Handling POST Data

When a form is submitted, the `POST` data is returned as either a string or an array, depending upon the method used to process and validate the `$_POST` array, and/or if you're POSTing a string or array.
For instance, if you're posting a `first_name` text field, then it'll be returned as a string. However, if you're posting an array of text fields, then they'll be returned as an array.
Here's how a string will be handled - which will probably be 95% of what you process.

#### Here's your form field...
{% highlight php startinline %}
$form->input_text('first_name');
{% endhighlight %}

#### This is how you would get the `POST` value - as a string
{% highlight php startinline %}
$first_name = $form->post('first_name');
{% endhighlight %}

#### Posting an array is pretty much the same
{% highlight php startinline %}
// a checkbox array
$form->input_checkbox('foods[],Lobster,lobster,lobster');
$form->input_checkbox('foods[],Steak,steak,steak');

// POST the form, then put the foods[] array into a variable
$foods = $form->post('foods[]');

// loop through the foods[] array
foreach($foods as $key => $value) {
    // do something with the results here
    ...
}
{% endhighlight %}

#### Retrieving the value of a `fast_post()` array...
{% highlight php startinline %}
// get the POST value...
$post = $form->fast_post('form_name');

// get the foods array out of the $post array...
$foods = $post['foods'];

foreach($foods as $key => $value) {
    // do something with the results here
    ...
}
{% endhighlight %}









# <i class="fa fa-user-secret"></i> Hashing Input

During `POST` validation, Formr can return an encrypted (or hashed) string from those values by passing either `md5`, `sha1`, or `hash` in the `post()` method's third parameter.

{% highlight php startinline %}
// hashing a password with SHA1
$password = $form->post('password','Password|A password is required','sha1');

// hashing a password using PHP's `password_hash()` function
$password = $form->post('password','Password|A password is required','hash');
{% endhighlight %}









# <i class="fa fa-shield"></i> HTML Purifier

While we're still talking about validation and security now is a good time to tell you that Formr is ready for HTML Purifier - and it's real easy to set up. Just [download HTML Purifier](http://htmlpurifier.org) and tell Formr where the HTML Purifier class is located (full path!) when instantiating the form.

{% highlight php startinline %}
// we're using the standalone version of HTML Purifier
$form->html_purifier = '/path/to/HTMLPurifier.standalone.php';
{% endhighlight %}

<div class="alert alert-info">
<i class="fa fa-lightbulb-o"></i>	
If you enter the wrong path to HTML Purifier, Formr will use the default cleaning methods instead.
</div>









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