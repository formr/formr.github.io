---

layout: post

title:  "Formr for Designers"

date:   2015-04-23

---

Formr is a PHP micro framework which allows developers to easily build forms; but what if you're not a PHP developer? No Problem, Formr has you covered. If you can type (or even copy + paste), you can use Formr, and this article aims to show you how.

## Installation

Formr isn't at all complicated; to install it all you have to do is [download Formr from GitHub](http://formr.github.io), drag the `Formr` folder into your site folder and type:
{% highlight php startinline %}
<?php
	require_once 'Formr/class.formr.php';
	$form = new Formr();
?>
{% endhighlight %}

and that's it! Formr is now installed and ready to go to work.


## Building a Form

Build your form in HTML like you normally would, and when you come to your element's `value` attribute you'll enter a small snippet of PHP that will allow Formr to do the heavy lifting for you.

{% highlight php startinline %}
$form->value('the_fieldname_goes_here');
{% endhighlight %}

In your form it may look something like this:

{% highlight php startinline %}
<input type="text" name="name" value="<?php echo $form->value('name'); ?>">
<input type="email" name="email" value="<?php echo $form->value('email'); ?>">
{% endhighlight %}

So now if your visitor submits the form and there's an error, the information will be displayed in the field so they won't have to retype and fill out the whole form again.

## Processing the Form

Once your visitor clicks the `submit` button you need to process the posted information and do something with it, which usually involves typing lots of code and validating the information and sending an email or putting something in a database. This is really easy with Formr.

First thing we do is check if the form has been submitted, we do this with the `submit()` function.

{% highlight php startinline %}
if($form->submit()) {
    // form has been submitted
}
{% endhighlight %}

Next, we process and validate our form fields. The easiest way to do this is to use Formr's `fastpost()` function, and let it do all the work for us. We'll take all of the form fields and put them into an array and name it `$post`.

{% highlight php startinline %}
$post = $form->fastpost('POST');
{% endhighlight %}

This will process every field in your form and put it into that `$post` array for later use. Granted, it's not incredibly flexible and won't perform strict validation on every field, but it *will* clean all input (making it safe) and will validate email addresses, among a few other things.

So now our script looks like this:

{% highlight php startinline %}
if($form->submit()) {
    $post = $form->fastpost('POST');
}
{% endhighlight %}

## Checking for Errors

If you've made some form fields required - and the visitor didn't fill them out - Formr will let them know via error messages, but first you must tell Formr which fields are required and where to display the error messages.

To make fields required we use the `required` variable, like so:

{% highlight php startinline %}
$form->required = '*';
{% endhighlight %}

Entering an asterisk `*` tells Formr that you want **all** fields required. If you only want some of the fields required just enter a comma separated list of those field's names.

{% highlight php startinline %}
$form->required = 'name,email';
{% endhighlight %}

To display error messages, we use the `messages()` function.

{% highlight php startinline %}
echo $form->messages()
{% endhighlight %}

This can appear anywhere in your document, as along as it's **after** where you check if the form has been submitted, i.e., after `$form->submit()`

## Sending Email

Now that our form has been processed, let's check for errors, and if no errors are found we'll email the results to our client. Since we're doing a simple email let's skip putting our `POST` values into the `$post` array and just send them right from inside Formr's `send_email()` email function!

{% highlight php startinline %}
// check if the form has been submitted
if($form->submit()) {
    
    // make sure there are no errors
    if(!$form->errors()) {
	
		$to = 'client@email.com';
		$subject = 'Form Submission';
		$from = 'designer@email.com';
		
		// entering 'POST' as our third parameter tells Formr to loop through
		// all the form fields and print them in the email
				
		$form->send_email($to, $subject, 'POST', $from);
	}
}
{% endhighlight %}

## Our Final Form

{% highlight html startinline %}
<?php

require_once 'Formr/class.formr.php';
$form = new Formr();
$form->required = '*';

if($form->submit()) {
	
	if(!$form->errors()) {

        $to = 'client@email.com';
        $subject = 'Form Submission';
        $from = 'designer@email.com';

        $form->send_email($to, $subject, 'POST', $from);
    }
}
?>
<!DOCTYPE html>
	<html lang="en">
	<html>
	<head>
		<meta charset="utf-8">
		<title>Formr for Designers</title>
	</head>
	<body>
		
		<?php echo $form->messages(); ?>
		
		<form action="form.php" method="post">
			<input type="text" name="name" value="<?php echo $form->value('name'); ?>"><br>
			<input type="email" name="email" value="<?php echo $form->value('email'); ?>"><br>
			<textarea name="comments"><?php echo $form->value('comments'); ?></textarea><br>
			<input type="submit" name="submit" value="Submit">
		</form>
		
	</body>
</html>
{% endhighlight %}