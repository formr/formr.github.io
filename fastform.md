---
layout: page
title: Formr | FastForm
description: Create and validate complex PHP forms in seconds.
permalink: /fastform/
sitemap:
  priority: 0.7
  changefreq: weekly
  lastmod: 2019-06-20T00:00:00
---


<header class="post-header">
	<h1 class="post-title"><i class="fa fa-bolt"></i> FastForm</h1>
	<p class="lead">FastForm allows you to create and validate complex forms in mere seconds</p>
</header>


Building forms generally involves a lot of time and typing because you have to build each element, label, wrapper, etc. over and over again for each item in your form &mdash; and then you have to validate it! For some forms this can take hours or days - not so with `fastform()` - because you simply type up your entire form inside a simple array with nothing more than a series of strings.

Yes, strings.

The main advantage to using `fastform()` is that it's stupid fast; you can build a fully-functioning form in seconds, which includes server-side validation and supports form field arrays. The main disadvantage in using `fastform()` as opposed to building each form element piece-by-piece is that you will lose a certain level of control, but not much!

* Supports wrapping fields in `<p>`, `<div>`, `<ul>`, `<ol>`, `<dl>`, Bootstrap's `.form-group`, or your own wrapper.
* Enables you to save/share form &amp; validation sets.
* Accepts names and attributes as comma-delimited (`,`) strings or arrays.
* Has `state`, `province` and `country` drop-downs baked right in, so you can easily create full menus by only typing one word.









# Building Forms with Strings?

All we need to build a `fastform()` is create an initial array and populate it with our element's input type as the `key` and a comma-separated string of the field's attributes/values as the `value` and then pass it through the `fastform()` method. <span class="text-danger"><strong>Each key must be uniquely named or the fields will overwrite each other</strong></span>. You can name the keys anything you like, as long as the field's input type is written first.



---

# Methods

## fastform()

This method allows you to build incredibly complex forms - complete with server-side validation - using simple key/value arrays and strings.

1. The first - and only - parameter contains the array and is required.









## fastform_multipart()

Identical to the `fastform()` method, except it adds `enctype="multipart/form-data"` to the `<form>` tag.









## fastpost()

To validate FastForms you'll use the `fastpost()` method, which lets you quickly set up validation sets and save them with your `fastform()` forms for quick and easy use, as we'll see in an upcoming example.





---




# Value String Parameters

The parameters of the strings in the array's `value` are exactly the same as the parameters of their corresponding input methods.

1. The first parameter contains the field's name and is required.
1. The second parameter optionally contains the field's label text.
1. The third parameter optionally contains a default value.
1. The fourth parameter optionally contains the field's ID.
1. The fifth parameter optionally contains a string, which lets you add CSS, JavaScript, etc.
1. The sixth parameter optionally contains the field's inline help text (Bootstrap only).
1. The seventh parameter optionally contains the value that's selected for a dropdown, or if a checkbox/radio should be ticked.
1. The eighth parameter contains an array of the field's values and is only required if using a drop-down menu.




---




# Let's Build a Sample Form

In the example below, notice how the field types (text, email, select, etc.) are written first in the array key, and then additional identical field types have a letter or number appended to it (text2, select2, radioF). This is so the fields won't have the same array key and overwrite each other.


#### This simple array...
{% highlight php startinline %}
$data = [
    'text' => 'fname,First name:,,fname',
    'text2' => 'lname,Last name:,,lname',
    'email' => 'email,Email:,,email',
    'text3' => 'city,City:,,city',
    'select' => 'state,State:,,state,,,,state',
    'text4' => 'zip,Zip/Postal Code:,,zip',
    'select2' => 'country,Country:,,country,,,US,country',
    'label' => 'sex,What sex are you?',
    'radioM' => 'sex,Male,male,male',
    'radioF' => 'sex,Female,female,female',
    'textarea' => 'comments,Comments:,,comments'
];

echo $form->fastform($data);
{% endhighlight %}

#### ...will produce the following HTML (using Bootstrap as our wrapper)
{% highlight html startinline %}
<form action="/index.php" method="post" accept-charset="utf-8">
<fieldset>
	<div id="_fname" class="form-group">
		<label class=control-label for="fname">First name:	</label>
		<input type="text" name="fname" id="fname" class="form-control">
	</div>
	<div id="_lname" class="form-group">
		<label class=control-label for="lname">Last name:	</label>
		<input type="text" name="lname" id="lname" class="form-control">
	</div>
	<div id="_email" class="form-group">
		<label class=control-label for="email">Email:	</label>
		<input type="email" name="email" id="email" autocorrect="off" autocapitalize="off" class="form-control">
	</div>
	<div id="_city" class="form-group">
		<label class=control-label for="city">City:	</label>
		<input type="text" name="city" id="city" class="form-control">
	</div>
	<div id="_state" class="form-group">
		<label class=control-label for="state">State:	</label>
			<select name="state" id="state" class="form-control">
			<option value="" selected="selected">Select a State...</option>
			<option value="AL">Alabama</option>
			<option value="AK">Alaska</option>
			<option value="AZ">Arizona</option>
			...
			<option value="WI">Wisconsin</option>
			<option value="WY">Wyoming</option>
		</select>
	</div>
	<div id="_zip" class="form-group">
		<label class=control-label for="zip">Zip/Postal Code:	</label>
		<input type="text" name="zip" id="zip" class="form-control">
	</div>
	<div id="_country" class="form-group">
		<label class=control-label for="country">Country:	</label>
		<select name="country" id="country" class="form-control">
			<option value="">Select a Country...</option>
			<option value="US" selected="selected">United States </option>
			<option value="CA">Canada</option>
			<option value="GB">United Kingdom</option>
			<option value=" ">---------------</option>
			<option value="AF">Afghanistan </option>
			<option value="AL">Albania </option>
			...
			<option value="ZM">Zambia</option>
			<option value="ZW">Zimbabwe</option>
		</select>
	</div>
	<label for="sex">What sex are you?</label>
	<div id="_sex" class="radio">
		<label for="male"><input type="radio" name="sex" value="male" id="male">Male</label>
	</div>
	
	<div id="_sex" class="radio">
		<label for="female"><input type="radio" name="sex" value="female" id="female">Female</label>
	</div>
	<div id="_comments" class="form-group">
		<label class=control-label for="comments">Comments:	</label>
		<textarea name="comments" id="comments" class="form-control"></textarea>
	</div>
	<div id="_submit" class="form-group">
		<input type="submit" name="submit" value="Submit" id="submit" class="btn">
	</div>
</fieldset>
</form>
{% endhighlight %}

<div class="alert alert-info">
<i class="fa fa-lightbulb-o"></i>
Notice how we specified our <strong>state</strong> and <strong>country</strong> drop-downs by using the strings <code>state</code> and <code>country</code> in the eighth paramater instead of creating and adding an array full of options? Adding a string instead of an array tells Formr to look for that drop-down menu in the <code>Dropdowns</code> class.
</div>

<div class="alert alert-info">
<i class="fa fa-lightbulb-o"></i>	
Note: obviously we can't add an array of options inside the string, so Formr will also let you build <code>fastform()</code> forms using multidimensional arrays too, as you'll see in the next example.
</div>

<div class="alert alert-info">
<i class="fa fa-lightbulb-o"></i>	
If you need to use a comma in a string, just enter its ASCII or HTML equivalent <code>&amp;#44;</code>.
</div>

<div class="alert alert-danger">
<i class="fa fa-bomb"></i>	
Remember: each field-type key in the array <strong>must</strong> be uniquely named. The value of the <code>name</code> attribute will automatically be used as the <code>ID</code> attribute if an <code>ID</code> isn't provided.
</div>









# Radios, checkboxes &amp; Drop-downs Follow the Same Pattern

As you saw in the previous example, you can add radios, checkboxes and drop-downs using the string method. While this is incredibly fast, it's also somewhat limited, so Formr will allow you to build your forms with multidimensional arrays as well.

#### These arrays...
{% highlight php startinline %}
// build an array with our t-shirt sizes...
$shirts = array(
    'large'  => 'Large',
    'medium' => 'Medium',
    'small'  => 'Small'
);

// build our drop-down array and add the t-shirt array as our list of options
$data = [
        'select' => [
        'name'=> 'shirts',
        'label'=> 'Shirts:',
        'options'=> $shirts,
        'selected'=> 'small'
    ]
];

echo $form->fastform($data);
{% endhighlight %}

#### ...will produce the following HTML (using Bootstrap as our wrapper)

{% highlight html startinline %}
<form action="/index.php" method="post" accept-charset="utf-8">
<fieldset>
	<div id="_shirts" class="form-group">
	<label class=control-label for="shirts">Shirts:	</label>
			<select name="shirts" id="shirts" class="form-control">
			<option value="large">Large</option>
			<option value="medium">Medium</option>
			<option value="small" selected="selected">Small</option>
	</select>
	</div>
	<div id="_submit" class="form-group">
		<input name="submit" type="submit" id="submit" value="Submit" class="btn">
	</div>
</fieldset>
</form>
{% endhighlight %}









# Radio & Checkbox Groups

As we saw in an earlier example, you can build a radio group by adding a label and as many radio elements as you like. However, there is an easier way: just put all of your field names in the array's `value` parameter, separate them with a pipe (`|`) and wrap them with square brackets (`[ ]`).

#### This little array...
{% highlight php startinline %}
$data = array(
    'radio' => 'food,Favorite food:,[steak|chicken|fish],food'
);

echo $form->fastform($data);
{% endhighlight %}

#### ...will produce the following HTML (using Bootstrap as our wrapper)
{% highlight html startinline %}
<form action="/index.php" method="post" accept-charset="utf-8">
<fieldset>
	<div id="_food" class="form-group">
			<label class="control-label">Favorite food:</label>
		<div class="radio">
			<label for="steak"><input type="radio" name="food" value="steak" id="steak">Steak</label>
		</div>
		<div class="radio">
			<label for="chicken"><input type="radio" name="food" value="chicken" id="chicken">Chicken</label>
		</div>
		<div class="radio">
			<label for="fish"><input type="radio" name="food" value="fish" id="fish">Fish</label>
		</div>
	</div>
	<div id="_submit" class="form-group">
		<input type="submit" name="submit" value="Submit" id="submit" class="btn">
	</div>
</fieldset>
</form>
{% endhighlight %}

<div class="alert alert-warning">
<i class="fa fa-warning"></i>	
Since radio elements are usually grouped, a "required field" indicator such as an asterisk <code>*</code> will not be placed next to a required field for each radio element in that group. Adding a <code>&lt;label&gt;</code> for the group (as in the previous example) will give you an <code>*</code> indicating that the entire group is required.
</div>







# Save, Reuse &amp; Share Your Form Sets

Formr comes with a few form/validation sets to get you started, however, it wouldn't be much if you couldn't save your own for reuse and/or sharing, right? This is easy: just copy the `class.formr.forms.php` file into the `my_classes` directory, follow the examples and add your own. Anything in the `my_classes` directory will be loaded before the default classes.

To use your classes, just enter the name of the method (as a string) - just like you would with the `state` or `country` methods in the first example.









# Putting It All Together
Let's bring the `fastform()` and `fastpost()` methods together and see how to build a simple contact form using Formr's `short_contact()` example method.

In this example we'll use the `short_contact()` method that's available in the Forms class. Again, instead of passing an `$data` array to `fastform()`, we'll just pass the method name as a string. We do the same for the validation rules in the `fastpost()` method.
The following code is all you need - it will not only print the form to the browser, but also provide full server-side validation.

{% highlight php startinline %}
<html>
    <body>
    <?php
        require_once 'formr/class.formr.php';
        $form = new Formr();
        $form->id = 'MyForm';

        if($form->submit()) {

            // Formr will automatically validate POST values according to our `fastpost()` rules

            $post  = $form->fastpost('short_contact'); // put each POST value in an array

            $fname = $post['fname'];  // now assign each POST value to a variable
            $email = $post['email'];

        }

        // display the form (notice we're using a string instead of an array)
        echo $form->fastform('short_contact');
    ?>
    </body>
</html>
{% endhighlight %}









# And for the Incredibly Lazy...

There's `fastpost('POST')`. Using `fastpost()` in this manner will return an array of the key/value pairs from the `$_POST` superglobal, plus perform some basic validation based upon the field names. For instance, if the field name is `email` Formr will automatically run the `valid_email` validation rule on it. The list of names and validation rules can be found in the Formr class. Go ahead and add your own! <i class="fa fa-smile-o"></i>

{% highlight php startinline %}
// puts all of our POST key/values into an array named $post
$post = $form->fastpost('POST');

// then just create variables based upon your form's field names
$fname = $post['fname'];
$lname = $post['lname'];
{% endhighlight %}