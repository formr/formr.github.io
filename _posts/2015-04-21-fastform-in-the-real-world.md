---

layout: post

title:  "FastForm in the Real World"

date:   2015-04-22 21:27:27

categories: formr fastform

---

One of my favority things about Formr is the ability to save form + validation sets for reuse. I can't even count the number of times I've had to create a registration form and all I had to type was...

{% highlight php startinline %}
echo $form->fastform('registration');
{% endhighlight %}

...and, BLAMMO! Out pops a registration form, ready to go! And then to process and validate it, I just type...

{% highlight php startinline %}
$post = $form->fastpost('registration');
{% endhighlight %}

...and KERRANG! My registration form is now enabled for server-side validation, complete with verifying the email address, and matching and hashing the password! Plus, all of my `POST` data is available for me in the `$post` variable, so if I want the username I just do...

{% highlight php startinline %}
$username = $post['username'];
{% endhighlight %}

In fact, this is pretty much what my registration forms now look like from a PHP standpoint...

{% highlight php startinline %}
<?php
	require_once 'Formr/class.formr.php';
	$form = new Formr('bootstrap');
	
	if($form->submit()) {
		$form->required = '*';
		$post = $form->fastpost('registration');
		
		if(!$form->error()) {
			$session->process_registration();
		}
	}
	
	echo $form->messages();
	echo $form->fastform('registration');
?>
{% endhighlight %}

**Seriously, can it not get any easier than that?** I do the exact same thing for a login form and a contact form. This alone saves me hours, if not days, in development time. The forms are ready and waiting for me in `lib/class.forms.php`, and if I want to modify them I just copy one and paste it into `my_classes/my.forms.php`, give it a new name and enter that as the `fastform()` argument; it's now ready and willing any time I need it!