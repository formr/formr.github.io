---
layout: page
title: Methods
description: A list of available functions for building PHP forms with Formr.
permalink: /methods/
sitemap:
  priority: 0.7
  changefreq: weekly
  lastmod: 2020-04-21T00:00:00
---

<header class="post-header">
	<h1 class="post-title"><i class="fa fa-code"></i> Methods</h1>
	<p class="lead">This document contains a list of Formr's public methods, grouped by functionality</p>
</header>


---

# Create
## create()

The easiest - and most basic - way to create a form. Simply add a comma delimited list of your form's labels and Formr will create the labels, form fields, IDs, etc. If your label contains the word 'email', Formr will automatically use the <code>email</code> input type.

Other than the <code>email</code> type described previously, all inputs will be defaulted to the <code>text</code> type. However, if you want to add a specific input type simply add a pipe <code>|</code> and then the type you would like to use.

### Example: Create a basic form
{% highlight php startinline %}
$form = new Formr();
echo $form->form_open();
echo $form->create('First name, Last name, Email address, Age|number, Comments|textarea');
echo $form->input_submit();
echo $form->form_close();
{% endhighlight %}

### Produces the following HTML

{% highlight html startinline %}
<form action="/index.php" method="post" accept-charset="utf-8">
    <label for="first_name">
        First name
    </label> 
    <input type="text" name="first_name" id="first_name" class="input">
    
    <label for="last_name">
        Last name
    </label> 
    <input type="text" name="last_name" id="last_name" class="input">

    <label for="email_address">
        Email address
    </label> 
    <input type="email" name="email_address" id="email_address" class="input">

    <label for="age">
        Age
    </label> 
    <input type="number" name="age" id="age" class="input">
    
    <label for="comments">
        Comments
    </label> 
    <textarea name="comments" id="comments" class="input"></textarea>

    <input type="submit" name="submit" value="Submit" id="submit">
</form>
{% endhighlight %}

### Example: Create a basic form with the Bootstrap wrapper
{% highlight php startinline %}
$form = new Formr('bootstrap');
echo $form->form_open();
echo $form->create('First name, Last name, Email address');
echo $form->input_submit();
echo $form->form_close();
{% endhighlight %}

### Produces the following HTML
{% highlight html startinline %}
<form action="/index.php" method="post" accept-charset="utf-8">
    <div id="_first_name" class="form-group">
        <label class="control-label" for="first_name">
            First name
        </label>
        <input type="text" name="first_name" id="first_name" class="form-control">
    </div>
    
    <div id="_last_name" class="form-group">
        <label class="control-label" for="last_name">
            Last name
        </label>
        <input type="text" name="last_name" id="last_name" class="form-control">
    </div>
    
    <div id="_email_address" class="form-group">
        <label class="control-label" for="email_address">
            Email address
        </label>
        <input type="email" name="email_address" id="email_address" class="form-control">
    </div>
    
    <div id="_submit" class="form-group">
        <label class="sr-only" for="submit"></label>
        <input type="submit" name="submit" value="Submit" class="btn" id="submit">
    </div>
</form>
{% endhighlight %}





# CSRF Protection
## csrf()

Generates a hidden input with a CSRF token, which will automatically expire in 1 hour. 

Accepts a single, optional parameter which sets the token timeout duration in seconds. Default is 1 hour.


<div class="alert alert-danger">
<i class="fa fa-bomb"></i>	
When using CSRF protection you <strong>must</strong> enable sessions by adding <code>&lt;?php session_start() ?&gt;</code> at the top of your file.
</div>

### Example: Generate a CSRF token
{% highlight php startinline %}
echo $form->csrf();
{% endhighlight %}

### Produces the following HTML
{% highlight html startinline %}
// note: token will change value with each page refresh
<input type="hidden" name="csrf_token" value="c5bbdceae577a385529ffb71213f7cb9ad223240f305947f75f73e175ef4efbc">
{% endhighlight %}

### Example: Generate a CSRF token with a timeout of 30 minutes
{% highlight php startinline %}
echo $form->csrf(1800);
{% endhighlight %}







# Inputs


## input_text()

Lets you generate a standard text input field.

1. The first parameter contains the field's name and is required.
1. The second parameter optionally contains the field's label text.
1. The third parameter optionally contains a default value.
1. The fourth parameter optionally contains the field's ID.
1. The fifth parameter optionally contains a string, which lets you add CSS, JavaScript, etc.
1. The sixth parameter optionally utilizes Bootstrap's `.help-block` block-level text.

<br>

<div class="alert alert-warning">
	<i class="fa fa-warning"></i>	
	Adding text to the second parameter will automatically create a <code>&lt;label&gt;</code> element in front of the <code>&lt;input&gt;</code> element. If you'd rather create the label yourself, leave the second parameter empty.
</div>



### Example: Create a basic text input
{% highlight php startinline %}
echo $form->input_text('fname');

// will produce
<input type="text" name="fname" id="fname">
{% endhighlight %}

### Example: Create an input with a label
{% highlight php startinline %}
echo $form->input_text('fname','First name:','John','fname','placeholder="first name:"');

// will produce
<label for="fname">First name:</label> 
<input type="text" name="fname" id="fname" value="John" placeholder="first name:">
{% endhighlight %}

### Example: Create an input with an associative array
{% highlight php startinline %}
$data = array(
    'name'      => 'fname',
    'id'        => 'fname',
    'value'     => 'John',
    'maxlength' => '30',
    'class'     => 'input_field'
);

echo $form->input_text($data);

// will produce
<input name="fname" id="fname" value="John" maxlength="30" class="input_field" type="text">
{% endhighlight %}


### Example: adding Bootstrap's `.help-block` class
{% highlight php startinline %}
// use Bootstrap as our wrapper
$form = new Formr('bootstrap');

$data = array(
    'name'      => 'fname',
    'id'        => 'fname',
    'value'     => 'John',
    'maxlength' => '30',
    'string'    => 'class="input_field"',
    'inline'    => 'please enter your name'
);

echo $form->input_text($data);

// will produce
<div id="_fname" class="form-group">
	<input name="fname" id="fname" value="John" maxlength="30" type="text"class="form-control input_field">
	<p class="help-block">please enter your name</p>
</div>
{% endhighlight %}


<div class="alert alert-info">
<i class="fa fa-lightbulb-o"></i>	
You can also specify if you want the <code>.help-block</code> text to show only when there's a form error on that field by wrapping the string with square brackets <code>[ ]</code>
</div>









### Input Arrays

Formr allows for you to create arrays with `text` (and `file`) fields, however, you <strong>must</strong> provide an unique array key for each field that exactly matches that field's ID, otherwise Formr will not know which field to re-populate if there's a `POST` error.

{% highlight php startinline %}
// the fname key in the first parameter matches the fname ID in the fourth
echo $form->input_text('names[fname]','First name','','fname');

// the mname key in the first parameter matches the mname ID in the fourth
echo $form->input_text('names[mname]','Middle name','','mname');

// the lname key in the first parameter matches the lname ID in the fourth
echo $form->input_text('names[lname]','Last name','','lname');
{% endhighlight %}











## input_checkbox()
Lets you generate a `checkbox` element. The parameters are identical to `input_text()` except you may now utilize the seventh parameter - which is optional - and determines if a checkbox/radio should be ticked by default.

1. The first parameter contains the field's name and is required.
1. The second parameter optionally contains the field's label text.
1. The third parameter optionally contains a default value.
1. The fourth parameter optionally contains the field's ID.
1. The fifth parameter optionally contains a string, which lets you add CSS, JavaScript, etc.
1. The sixth parameter optionally contains the field's inline-help text.
1. The seventh parameter optionally tells Formr if a checkbox/radio should be ticked.


#### Example: create a standard checkbox
{% highlight php startinline %}
echo $form->input_checkbox('agree','I Agree','agree','agreeID');

// will produce
<label for="agree">
	<input type="checkbox" name="agree" id="agreeID" value="agree">I Agree
</label>
{% endhighlight %}


#### Example: tick a checkbox on initial page load
{% highlight php startinline %}
echo $form->input_checkbox('agree','I Agree','agree','agree','','','checked');

// will produce
<label for="agree">
	<input checked="checked" type="checkbox" name="agree" id="agree" value="agree">I Agree
</label>
{% endhighlight %}

<div class="alert alert-info">
<i class="fa fa-lightbulb-o"></i>	
Notice how the <code>&lt;label&gt;</code> tag is also wrapped around the checkbox element, and the label's <code>for</code> attribute contains the element's <code>ID</code>.
</div>

<div class="alert alert-info">
<i class="fa fa-lightbulb-o"></i>	
Also, notice how in the seventh parameter we used the string <strong>'checked'</strong> instead of the boolean <code>TRUE</code>? This is because <strong>anything</strong> in that parameter will return <code>TRUE</code>, even if it's an incorrect value. 	Therefore we must either use the string <strong>'checked'</strong> or the string <strong>'selected'</strong> to tell Formr we want this element selected on form load.
</div>

#### Example: tick a checkbox using a variable
{% highlight php startinline %}
$favorite_fruit = 'bananas';

echo $form->input_checkbox('bananas','','bananas','','','',$favorite_fruit);

// will produce
<input checked="checked" type="checkbox" name="bananas" id="bananas" value="bananas">
{% endhighlight %}









## input_checkbox_inline()

Identical to `input_checkbox()` but adds the Bootstrap `.checkbox-inline` class to the `label` element.

Tip: If you don't want bold label text, just add the following to your CSS.

{% highlight css startinline %}
.checkbox-inline label {
	font-weight: normal;
}
{% endhighlight %}








## input_file()

This method is identical in all respects to the `input_text()` method except it sets the input type to `file`, allowing it to be used to upload files. Check out the [Uploading Files](/upload-files/) docs for more info.









## input_hidden()
Allows you to generate hidden input fields.

1. The first parameter contains the field's name.
1. The second parameter contains the field's value.

#### Example: submit a key/value pair to create a single `hidden` element
{% highlight php startinline %}
echo $form->input_hidden('fname','John');

// will produce
<input type="hidden" name="fname" id="fname" value="John">
{% endhighlight %}

#### Example: submit an associative array to create multiple `hidden` elements
{% highlight php startinline %}
$data = [
    'name' => 'John Doh',
    'email' => 'john@mysite.com',
    'url' => 'http://mysite.com'
];

echo $form->input_hidden($data);

// will produce
<input type="hidden" name="name" id="name" value="John Doh">
<input type="hidden" name="email" id="email" value="john@mysite.com">
<input type="hidden" name="url" id="url" value="http://mysite.com">
{% endhighlight %}









## input_image()

Identical to `input_text()` except that it creates an `<input type="image">` element.









## input_password()

Identical to the `input_text()` method except it creates a `password` field type.









## input_radio()

Identical to `input_checkbox()` but produces a `radio` element.







## input_radio_inline()

Identical to `input_radio()` but adds the Bootstrap `.radio-inline` class to the `label` element.










## input_select()

Lets you create a standard `<select>`, or drop-down menu. The parameters are identical to the `input_text()` method, except that `input_select()` accepts a required eighth parameter which contains all of the options for the drop-down.

<div class="alert alert-danger">
<i class="fa fa-bomb"></i>	
The eighth parameter contains a list of options and is required.
</div>

<div class="alert alert-info">
<i class="fa fa-lightbulb-o"></i>	
You may also pass an array of multiple items through the eighth parameter and Formr will create a <code>multiple</code> select for you.
</div>


#### Example: using an array to create a drop-down menu
{% highlight php startinline %}
// put our options into an array
$options = array(
    'cat'    => 'The Cat in the Hat',
    'lorax'  => 'The Lorax',
    'yertle' => 'Yertle the Turtle',
    'grinch' => 'The Grinch Who Stole Christmas',
);

// print the array
// notice that the 7th parameter is a default (selected) option
// notice that the 8th parameter is our list of options
echo $form->input_select('books', 'Books','','','','','yertle',$options);

// will produce
<label for="books">Books</label> 
<select name="books" id="books" >
	<option value="cat">The Cat in the Hat</option>
	<option value="lorax">The Lorax</option>
	<option value="yertle" selected="selected">Yertle the Turtle</option>
	<option value="grinch">The Grinch Who Stole Christmas</option>
</select>
{% endhighlight %}

##### Instead of selecting a value from our `$options` array we can insert a string, and if a match isn't available in our `$options` array then an empty `<option>` will be created instead
{% highlight php startinline %}
echo $form->input_select('books', 'Books','','','','','Select a book',$options);

// will produce
<label for="books">Books</label> 
<select name="books" id="books" >
	<option value="">Select a book</option>
	<option value="cat">The Cat in the Hat</option>
	<option value="lorax">The Lorax</option>
	<option value="yertle">Yertle the Turtle</option>
	<option value="grinch">The Grinch Who Stole Christmas</option>
</select>
{% endhighlight %}

#### Example: selecting multiple options
{% highlight php startinline %}
$options = array(
    'cat'    => 'The Cat in the Hat',
    'lorax'  => 'The Lorax',
    'yertle' => 'Yertle the Turtle',
    'grinch' => 'The Grinch Who Stole Christmas',
);

$featured_books = array('cat', 'yertle');

echo $form->input_select('books', 'Books','','','','',$featured_books,$options);

// will produce
<label for="books">Books</label> 
<select name="books" multiple="multiple" id="books" >
	<option value="cat" selected="selected">The Cat in the Hat</option>
	<option value="lorax">The Lorax</option>
	<option value="yertle" selected="selected">Yertle the Turtle</option>
	<option value="grinch">The Grinch Who Stole Christmas</option>
</select>
{% endhighlight %}

<div class="alert alert-info">
<i class="fa fa-lightbulb-o"></i>	
If the array passed as <code>$options</code> is a multidimensional array, <code>input_select()</code> will produce an <code>&lt;optgroup&gt;</code> with the array key as the label.
</div>









### Drop-downs Use Strings

`input_select()` has a little trick up its sleeve: if you pass a string as the eighth parameter (instead of an array) it will look for the corresponding method name in the `class.formr.dropdowns.php` file. For instance, if you enter "state" it will automatically produce a menu containing all 50 US states. The other two methods that are included in the class are countries, which will produce a menu containing all of the countries in the world, and provinces, which will create a menu of all Canadian provinces and territories.

What this boils down to is that, `class.formr.dropdowns.php` basically behaves as a plugin. If you wanted to add a list of motorcycles, for instance, all you would need to do is add the array of options (motorcycles) as a method to the Dropdowns class and then enter "motorcycles" as the second parameter. Take a look at the methods in the Dropdowns class for examples.

#### Example: produce a list of all US states
{% highlight php startinline %}
echo $form->input_select('state', 'State:','','','','','','state');

// will produce
<label for="state">State:</label> 
<select name="state" id="state" >
	<option value="" selected="selected">Select a State...</option>
	<option value="AL">Alabama</option>
	<option value="AK">Alaska</option>
	...
	<option value="WI">Wisconsin</option>
	<option value="WY">Wyoming</option>
</select>
{% endhighlight %}

#### Example: produce a list of all countries
{% highlight php startinline %}
echo $form->input_select('country', 'Country:','','','','','','country');

// will produce
<label for="country">Country:</label> 
<select name="country" id="country" >
	<option value="" selected="selected">Select a Country...</option>
	<option value="US">United States </option>
	<option value="CA">Canada</option>
	<option value="GB">United Kingdom</option>
	<option value=" ">---------------</option>
	<option value="AF">Afghanistan </option>
	...
	<option value="ZM">Zambia</option>
	<option value="ZW">Zimbabwe</option>
</select>
{% endhighlight %}

#### Example: produce a list of all Canadian provinces
{% highlight php startinline %}
echo $form->input_select('province', 'Province:','','','','','','province');

// will produce
<label for="province">Province:</label> 
<select name="province" id="province" >
	<option value="" selected="selected">Province or Territory...</option>
	<option value="AB">Alberta</option>
	<option value="BC">British Columbia</option>
	...
	<option value="SK">Saskatchewan</option>
	<option value="YT">Yukon</option>
</select>
{% endhighlight %}




### Saving &amp; Sharing Drop-down Menus

Formr comes with a few drop-down menus to get you started, however, it wouldn't be much if you couldn't save your own for reuse and/or sharing, right? This is easy: 

1. Create a folder named <code>my_classes</code> and put it at <code>formr/my_classes</code>.
2. Copy <code>formr/lib/class.formr.dropdowns.php</code> into <code>formr/my_classes</code> and rename it <code>my.dropdowns.php</code>.
3. Rename and then modify the sample classes to create your own.

To use your classes, just enter the name of the method (as a string) - just like you would with the `state` or `country` methods. <span class="text-danger">Make sure your classes have unique names!</span> 

<div class="alert alert-info">
<i class="fa fa-lightbulb-o"></i> 
See the <a href="/#extensability">Extensibility</a> section for more info on creating your own classes.
</div>	









## input_select_multiple()

This method is exactly the same as <code>input_select()</code> but adds the <code>multiple</code> attribute to create a multiple select list.









## input_textarea()

This method is identical in all respects to the `input_text()` method except it generates a `textarea`. Note: Instead of the `maxlength` attribute of the previous `input_text()` example, you will instead specify `rows` and `cols`.










## input_upload()
Alias of the `input_file()` method.










## input_upload_multiple()
Identical to `input_upload()` except that it adds the `multiple` attribute, allowing for multiple files to be uploaded with one field element. May not work in all browsers.









## input()
Lets you create any of the above inputs by specifying your field type in an array.

{% highlight php startinline %}
$data = array(
    'type' => 'text',
    'name' => 'fname',
    'id' => 'fname',
    'value' => 'John',
    'maxlength' => '30',
    'label' => 'Name'
);

echo $form->input($data);

// will produce
<label for="fname">Name</label> 
<input name="fname" id="fname" value="John" maxlength="30" type="text" class="input">
{% endhighlight %}



---




# HTML5 Inputs

Formr supports the following HTML5 input elements.

## input_color()
Identical to `input_text()` except that it creates an `type="color"` element.

## input_date()
Identical to `input_text()` except that it creates an `<input type="date">` element.

## input_datetime()
Identical to `input_text()` except that it creates an `<input type="datetime">` element.

##  input_datetime_local()
Identical to `input_text()` except that it creates an `<input type="datetime_local">` element.

## input_email()
Identical to `input_text()` except that it creates an `<input type="email">` element.

## input_month()
Identical to `input_text()` except that it creates an `<input type="month">` element.

## input_number()
Identical to `input_text()` except that it creates an `<input type="number">` element.

## input_range()
Identical to `input_text()` except that it creates an `<input type="range">` element.

## input_search()
Identical to `input_text()` except that it creates an `<input type="search">` element.

## input_tel()
Identical to `input_text()` except that it creates an `<input type="tel">` element.

## input_time()
Identical to `input_text()` except that it creates an `<input type="time">` element.

## input_url()
Identical to `input_text()` except that it creates an `<input type="url">` element.

##  input_week()
Identical to `input_text()` except that it creates an `<input type="week">` element.




---




# Forms



## form_open()

Opens a form with a standard `<form>` tag and accepts six parameters. All parameters are optional, so you can just leave it empty and the `<form>` tag will be created automatically with the proper attributes.

1. The first parameter optionally contains the form's name.
1. The second parameter optionally contains the form's ID.
1. The third parameter optionally contains the form's action.
1. The fourth parameter optionally contains the form's method. Default is `POST`.
1. The fifth parameter optionally contains a string, which lets you add CSS, JavaScript, etc.
1. The sixth parameter optionally contains an associative array which creates hidden fields.



<div class="alert alert-danger">
<i class="fa fa-bomb"></i>	
If an action isn't specified, <code>form_open()</code> will assume you want to process the form in the current script and will add the script's filename in the form's <code>action</code> attribute using <code>$_SERVER['SCRIPT_NAME']</code>. 
</div>
<div class="alert alert-warning">
<i class="fa fa-warning"></i>	
<code>form_open()</code> will optionally let you add form attributes and hidden input fields, and will always add the attribute <code>accept-charset="utf-8"</code>, unless you change the <code>$charset</code> property.
</div>


<div class="alert alert-warning">
<i class="fa fa-warning"></i>	
A form ID will be added automatically if an ID is used when instantiating Formr, eg: <code>$form->id="MyForm"</code>.
</div>


#### Example: instantiating Formr, setting an ID and opening a form
{% highlight php startinline %}
$form = new Formr();
echo $form->form_open('MyForm');

// will produce (assuming our script name is form.php)
<form action="form.php" name="MyForm" id="MyForm" method="post" accept-charset="utf-8">
{% endhighlight %}

#### Example: adding the form action manually
{% highlight php startinline %}
echo $form->form_open('','','foo.php');

// will produce
<form action="foo.php" method="post" accept-charset="utf-8">
{% endhighlight %}

#### Example: adding an action and a CSS class
{% highlight php startinline %}
echo $form->form_open('','','foo.php','','class="bar"');

// will produce
<form action="foo.php" method="post" accept-charset="utf-8" class="bar">
{% endhighlight %}


#### Example: adding hidden input fields with form_open()
Hidden fields can be added by passing an associative array to the third parameter, where the array key is the field name and the array value is the field's value.
{% highlight php startinline %}
$hidden = array('username' => 'John', 'email' => 'johndoh@email.com');
echo $form->form_open('form.php', '', '','','',$hidden);

// will produce
<form action="form.php" name="MyForm" id="MyForm" method="post" accept-charset="utf-8">

<input type="hidden" name="username" id="username" value="John">
<input type="hidden" name="email" id="email" value="johndoh@email.com">
{% endhighlight %}









## form_open_multipart()
This method is identical to `form_open()` above except that it adds a `multipart/form-data` attribute, which is necessary if you would like to use the form to upload files.









## form_close()
Closes the form with a standard `</form>` element.




---




# Processing




## submit()

The `submit()` method checks to see if the form has been submitted or not. It does this by checking the `$_SERVER['REQUEST_METHOD']` for `POST`. 

{% highlight php startinline %}
if($form->submit()){
    // form is submitted via POST
}
{% endhighlight %}









## submitted()
Alias of <code>submit()</code>

{% highlight php startinline %}
if($form->submitted()){
    // form is submitted via POST
}
{% endhighlight %}









## value()

If you build your form with Formr instead of HTML, eg; `$form->input_text('fname')` all fields will automatically re-populate after form submission. However, if you prefer to build your form fields in HTML you can still re-populate the field value after a `POST` with the `value()` method.

#### Enter the field's name as the function's only parameter.
{% highlight php startinline %}
<input type="text" name="fname" value="<?php echo $form->value('fname'); ?>">
{% endhighlight %}









## post()

The `post()` method processes and validates (if required) the `POST` form input based upon a series of chainable rules.

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









## get()

Identical to `post()` except that it processes information via the `$_GET` Superglobal









## validate()

The easiest - and most basic - way to validate a form. Simply add a comma delimited list of your form's labels and Formr will grab all of the <code>POST</code> data, validate it according to your rules, and put the values into an array. If your label contains the word <code>email</code>, Formr will automatically assign the <code>valid_email</code> validation rule. This method is bascially a basic wrapper around the [post()](/validation#post) method.

There is one parameter to the `validate()` function:

1. The first parameter is required and accepts a comma delimited string of form labels and their associated validation rules, wrapped in parentheses <code>()</code>.


#### Usage
{% highlight php startinline %}
$form->validate('Name, Email, Comments');
{% endhighlight %}

#### Example: Get the value of the form fields after the form has been submitted
{% highlight php startinline %}
$data = $form->validate('Name, Email address');

$name = $data['name'];
$email = $data['email_address'];
{% endhighlight %}

<div class="alert alert-info">
<i class="fa fa-lightbulb-o"></i>	
Notice how our label is named <code>Email address</code> yet our form field is named <code>email_address</code>? This is because Formr will take any spaces in your labels and convert them to an underscore.
</div>

#### Example: Ensure the Name field has a minimum of 3 characters and a max of 5 characters
{% highlight php startinline %}
$form->validate('Name(min_length[3]|max_length[5]), Email address');
{% endhighlight %}

<div class="alert alert-info">
<i class="fa fa-lightbulb-o"></i>	
You can add as many validation rules as you like by separating each rule with a pipe (<code>|</code>) character.
</div>


---




# FastForm

The FastForm methods are quite powerful and the documentation is rather extensive, so [a separate docs page](/fastform/) has been devoted just to them.











## fastform()

This method lets you quickly and easily build a form with as many fields - and field types - as you want.









## fastform_multipart()
Identical to the `fastform()` method, except it adds `enctype="multipart/form-data"` to the `<form>` tag.









## fastpost()
Use this in concert with `fastform()` to create form and validation sets which you can quickly and easily plugin and reuse. This method will also return an array of the key/value pairs from the `POST` array, plus perform some basic validation based upon the field names.





---




# Buttons



## input_submit()

Creates the standard `<input type="submit">` element.

1. The first parameter optionally contains the button name.
1. The second parameter optionally contains label text. If text is entered a `<label>` element will be created.
1. The third parameter optionally contains the button's <code>value</code>.
1. The fourth parameter optionally contains the button's ID.
1. The fifth parameter optionally contains a string, which lets you add CSS, JavaScript, etc.

{% highlight php startinline %}
echo $form->input_submit()

// will produce
<input type="submit" name="submit" value="Submit" id="submit">
{% endhighlight %}


<div class="alert alert-info">
<i class="fa fa-lightbulb-o"></i>	
Sometimes you may want to put a label next to your submit button so it will line up with your other form elements. This is really easy: just add <code>&amp;nbsp;</code> as your label text. A label will be added and the person viewing your page won't see it.
</div>

{% highlight php startinline %}
echo $form->input_submit('submitForm', '&nbsp;', 'Submit Form', 'buttonID', 'class="submitButton"');

// will produce
<label for="submitForm">&nbsp;</label> 
<input type="submit" name="submitForm" value="Submit Form" id="buttonID" class="submitButton">
{% endhighlight %}









## input_reset()
Identical to `input_submit()` except that it creates an `<input type="reset">` element









## input_button()
Identical to `input_submit()` but creates an `<button type="button">` element.





---





## input_button_submit()
Identical to `input_button()` but creates an `<button type="submit">` element.





---




# Labels



## label()

Creates the standard `<label>` element.

1. The first parameter contains the field name for which this label is being created and is required.
1. The second parameter contains the label text and is required.
1. The third parameter optionally contains an ID attribute.
1. The fourth parameter optionally contains a string, which lets you add CSS, JavaScript, etc.


#### Example: Create a label for the `full_name` field
{% highlight php startinline %}
echo $form->label('full_name','Full name:');

// will produce
<label for="full_name">Full name:</label> 
{% endhighlight %}

#### Example: Add a CSS class to our label
{% highlight php startinline %}
echo $form->label('full_name','Full name:','','class="label"'); 

// will produce
<label for="full_name" class="label">Full name:</label> 
{% endhighlight %}

#### Example: Wrap our label text in a `div`
{% highlight php startinline %}
echo $form->label('full_name','<div id="myLabel" class="fooBar">Full name</div>','','class="label"'); 

// will produce
<label for="full_name" class="label">
	<div id="myLabel" class="fooBar">Full name</div>
</label> 
{% endhighlight %}









## label_open()

Creates the opening `<label>` element. This is identical to the `label()` method, except that it does not close the element.









## label_close()

Creates the standard `</label>` element.

The only parameter to `label_close()` contains the label text. This is handy if you want to wrap a `label` around a `checkbox` or `radio` button and want the text to be after the element, rather than before.

{% highlight php startinline %}
echo $form->label_close('Derby');

// will produce

Derby
</label>

echo $form->label_open('bowler');
echo $form->input_checkbox('bowler','','bowler');
echo $form->label_close('Bowler');

// will produce
<label for="bowler">
    <input type="checkbox" name="bowler" id="bowler" value="bowler">Bowler
</label>
{% endhighlight %}




---




# Fieldsets




## fieldset_open()

Creates the standard `<fieldset>` element.

1. The first parameter optionally contains the legend text.
1. The second parameter optionally contains a string, which lets you add CSS, JavaScript, etc.

{% highlight php startinline %}
echo $form->fieldset_open('Contact information');

// will produce
<fieldset>
	<legend>Contact information</legend>
{% endhighlight %}

{% highlight php startinline %}
echo $form->fieldset_open('Contact information', 'id="contact"');

// will produce
<fieldset id="contact">
	<legend>Contact information</legend>
{% endhighlight %}









## fieldset_close()

Creates the standard `</fieldset>` element, with an optional string as the first parameter.





---




# Messaging




## messages()

Basically, this is the method you'll use to print your messages. You can set the HTML element in which you'd like to contain the messages in the first and second parameters, or leave them blank and they'll be formatted automatically using Bootstrap 3's `.alert` classes (if you use Bootstrap as your wrapper).

#### Example: Print messages to the screen
{% highlight php startinline %}
echo $form->messages();
{% endhighlight %}


#### Example: Use your own CSS HTML and classes
{% highlight php startinline %}
$form->messages('<div class="error">','</div>');
{% endhighlight %}

<div class="alert alert-info">
<i class="fa fa-lightbulb-o"></i> 
<code>messages()</code> will not print anything to the screen if it's empty, so there's really no reason why you shouldn't have it in your scripts as it will print out error messages if you forgot to add a property or configured something incorrectly. A good place to put it is right before your <code>&lt;form&gt;</code> or in the <code>&lt;header&gt;</code> of your pages.
</div>	









## error_message()

Add your own custom error messages throughout your application and it will print via the `messages()` method. Uses the Bootstrap `.alert .alert-danger` classes, which can be changed via the `$controls` property or by creating your own wrapper class. See the [Extensibility](/#extensability) section for more info on creating your own classes.

{% highlight php startinline %}
$form->error_message('This is bad, and you should feel bad!');
{% endhighlight %}









## info_message()

Identical to `error_message()` except uses the Bootstrap `.alert-info` classs.









## success_message()

Identical to `error_message()` except uses the Bootstrap `.alert-success` classs.









## warning_message()

Identical to `error_message()` except uses the Bootstrap `.alert-warning` class.









## in_errors()

Use this to see if a field is in the `$errors` array

#### Example: Check if the `email` field is in the `$errors` array
{% highlight php startinline %}
if($form->in_errors('email')) {
    // do something here...
}
{% endhighlight %}









## in\_errors_if()

If the defined field is in the `$errors` array, return a string

{% highlight php startinline %}
echo $form->in_errors_if('name','please enter your name');
{% endhighlight %}









## in\_errors_else()

If the defined field is in the `$errors` array return a string, else return another string

{% highlight php startinline %}
echo $form->in_errors_else('name','please enter your name','you entered your name');
{% endhighlight %}









## errors()

Use this method to see if the `$errors` array is empty.

{% highlight php startinline %}
if($form->errors()) {
    echo 'there were errors';
} else {
    echo 'no errors!';
}
{% endhighlight %}









## add\_to_errors()

Manually add a field's key to the `$errors` array.

{% highlight php startinline %}
$form->add_to_errors('name');
{% endhighlight %}

<div class="alert alert-danger">
<i class="fa fa-bomb"></i>	
This is different from the <code>error_messages()</code> method in that this method adds to the <code>$errors</code> array via <code>array_push()</code>, whereas <code>error_message()</code> just prints an error message string without adding it to the <code>$errors</code> array.
</div>




---




# Misc. Methods







## send_email()

Sends a **very basic** HTML or plain-text email using PHP's `mail()` function. Optionally loops though the contents of the `$_POST` array and prints the `key` / `value` pair in the email.

1. The first parameter is the recipient's email address and is required.
1. The second parameter is the email subject and is required.
1. The third parameter contains the message body and is required.
1. The fourth parameter is optional and contains a 'from' email address.
1. The optional fifth parameter is binary; set to `TRUE` if you'd like to send the email in HTML.

### Example: Send a Plain-Text Email
{% highlight php startinline %}
$to      = 'recipient@email.com';
$subject = 'Ahoy, Matey!';
$message = 'Welcome to our website!...';

$form->send_email($to, $subject, $message);
{% endhighlight %}



### Example: Send an HTML Email with a Return Address
{% highlight php startinline %}
$to      = 'recipient@email.com';
$from    = 'me@domain.com';
$subject = 'Ahoy, Matey!';
$message = 'Welcome to our website!...';

$form->send_email($to, $subject, $message, $from, TRUE);
{% endhighlight %}


### Example: Automatically Format and Send the POST Contents as HTML
By setting the `message` parameter to **'POST'**, Formr will loop through the PHP `$_POST` array and automatically clean and print the field name and value.
{% highlight php startinline %}
$to      = 'recipient@email.com';
$from    = 'me@domain.com';
$subject = 'Ahoy, Matey!';

$form->send_email($to, $subject, 'POST', $from, TRUE);
{% endhighlight %}

Produces something like
{% highlight html startinline %}
first_name: Jack
last_name: Black
{% endhighlight %}



### Example: Formatting Fields with Underscores for Prettier Emails
If you want prettier emails while looping through the `$_POST` array, name your input fields with capital letters and underscores, and then prepend each name with an underscore. Prepending a field with an underscore tells Formr to replace all underscores with spaces, making for an easier to read email!
{% highlight php startinline %}
$form->input_text('_First_Name','First Name');
$form->input_text('_Last_Name','Last Name');
{% endhighlight %}

And the email will look like this...
{% highlight html startinline %}
First Name: Jack
Last Name: Black
{% endhighlight %}







## printr()

Incredibly handy! Formr's shortcut for `print_r()`, which automatically formats (in `<pre>` tags) and prints the contents of an array, which massively speeds up testing.

#### Prints the contents of an array
{% highlight php startinline %}
$form->printr($_POST);
$form->printr($_GET);
$form->printr($data);
$form->printr('POST');	// lazy alias...
$form->printr('GET');	// lazy alias...
{% endhighlight %}









## dd()
Alias of `printr()`









## slug()

Only allows letters, numbers and underscores in a string. If any character other than a letter, number or underscore is encountered it will be converted to an underscore.

#### Example: Slug the string 'P Sherman 42'
{% highlight php startinline %}
$username = $form->slug('P Sherman 42');
// produces
'P_Sherman_42'
{% endhighlight %}







## heading()

This is useful if you have a form that is more along the lines of a test, or questionnaire and you want to really call out the field when there's an error in the form. Basically, you enter the field name in the first parameter and the string in the second, and if there's an error the string will be enclosed in <span class="error"> tags.

{% highlight html startinline %}
<h3><?php echo $form->heading('question1','How many inches in a foot?'); ?></h3>

// will produce upon page load
<h3>How many inches in a foot?</h3>

// will produce upon form error
<h3><span class="error">How many inches in a foot?</span></h3>
{% endhighlight %}








## form_info()

Prints out the settings of your form. Try it!

{% highlight php startinline %}
$form->form_info();
{% endhighlight %}









## redirect()

Redirects to the supplied URL after form submission.

{% highlight php startinline %}
if ($form->submit()) {
    // form has been submitted
    if (! $form->errors()) {
        // there are no errors, redirect to thank you page
        $form->redirect('https://mysite.com/thankyou/');
    }
}
{% endhighlight %}

