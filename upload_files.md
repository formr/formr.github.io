---
layout: page
title: Upload Files
description: Easily upload, rename, and resize images in your PHP forms.
permalink: /upload-files/
sitemap:
  priority: 0.7
  changefreq: weekly
  lastmod: 2020-10-11T00:00:00
---

<header class="post-header">
	<h1 class="post-title"><i class="fa fa-cloud-upload"></i> Uploading Files</h1>
	<p class="lead">Quickly and easily upload, rename and resize files and images</p>
</header>



Formr's method of uploading and resizing files is fairly simplistic: Formr will provide basic security in renaming uploaded file names - by stripping out anything that's not a letter, number or underscore - and allows for the checking of mime types and/or file extensions. It may satisfy most people's uploading needs. However, if your file operations are more complex I suggest you disable file uploading (`$form->process_uploads = false`) and use the excellent [class.upload.php](http://www.verot.net/php_class_upload.htm) by Colin Verot, available at [http://verot.net](http://verot.net).

<br>

<div class="alert alert-info">
<i class="fa fa-lightbulb-o"></i>	
Disabling upload processing will still let you use Formr to build your input fields, it just won't upload and process the files.
</div>









## form\_open\_multipart()

In order to upload files you will need to use the `form_open_multipart()` method to add `multipart/form-data` to your `<form>` tag. If you're building a form in `fastform()` you'll need to use the `fastform_multipart()` method.









## input_file()

This method is identical in all respects to the `input_text()` method except it sets the input type to `file`, allowing it to be used to upload files.

{% highlight php startinline %}
// a single file upload element
$form->input_file('file');
{% endhighlight %}

{% highlight php startinline %}
// multiple input elements using an array
$form->input_upload('file[]','Photo 1');
$form->input_upload('file[]','Photo 2');
{% endhighlight %}









## input_upload()

Alias of `input_file()`









## input\_upload_multiple()

Identical to `input_upload()` except that it adds the `multiple` attribute to the input element, which allows the user to select multiple files with only one input. May not work in all browsers.

{% highlight php startinline %}
$form->input_upload_multiple('files[]');
{% endhighlight %}

### Example: Multiple File Inputs in the Same Form

{% highlight php startinline %}
$form->input_upload('photo','Photo');
$form->input_upload_multiple('files[]');
{% endhighlight %}

<div class="alert alert-danger">
<i class="fa fa-bomb"></i>	
Since we're uploading multiple files at the same time we have to add square brackets <code>[]</code> to the end of our field name to let PHP know we're uploading an array.
</div>







## $upload\_accepted_types

Lets you specify the types of files you will allow for upload to your server. Enter each file extension separated by a comma.

{% highlight php startinline %}
$form->upload_accepted_types = 'jpg,jpeg,gif,png';
{% endhighlight %}

You can also just enter the string `images` and Formr will automatically allow `JPG`, `GIF`, and `PNG` files.
{% highlight php startinline %}
$form->upload_accepted_types = 'images';
{% endhighlight %}









## $upload\_accepted_mimes

Same as `$upload_accepted_types` but more secure. Instead of checking file's extension it checks the file's mime type.

{% highlight php startinline %}
$form->upload_accepted_mimes = 'image/jpg,image/jpeg,image/gif,image/png';
{% endhighlight %}

You can also just enter the string `images` and Formr will automatically allow `JPG`, `GIF`, and `PNG` files.

{% highlight php startinline %}
$form->upload_accepted_mimes = 'images';
{% endhighlight %}









## $upload\_max_filesize

Maximum allowed size of the uploaded file, measured in bytes. Default is 2MB.

{% highlight php startinline %}
$form->upload_max_filesize = 3145728; // 3145728 bytes = 3MB
{% endhighlight %}









## $upload_rename

Lets you rename the file after it's been uploaded.

{% highlight php startinline %}
// rename the file with a 32 character random hash.
$form->upload_rename = 'hash';

// will produce something like
ZVHGgmvNGV30b2YwZ3Hx4T0xH2dNlWm4.jpg
{% endhighlight %}

{% highlight php startinline %}
// rename the file with a hash of your own length.
$form->upload_rename = 'hash[12]';

// will produce something like
3Hx4T0YwZ3Hx.jpg
{% endhighlight %}

{% highlight php startinline %}
// rename the file with a unix timestamp.
$form->upload_rename = 'timestamp';

// will produce something like
1374967622.jpg
{% endhighlight %}

{% highlight php startinline %}
// prepend a string onto the original filename.
$form->upload_rename = 'prepend[my-file-]';

// will produce something like
my-file-our_day_at_the_beach.jpg
{% endhighlight %}

{% highlight php startinline %}
// rename the uploaded file with a custom string.
$form->upload_rename = 'string[myFilename]';

// will produce
myFilename.jpg
{% endhighlight %}









## $upload_dir

Specifies the path to your upload directory. 

{% highlight php startinline %}
$form->upload_dir = '/htdocs/uploads/';
{% endhighlight %}









## $upload_resize

Allows you to resize your uploaded images.

There are five (5) parameters to the `$upload_resize` property. Note: resizing is fairly basic; if you require more advanced resizing try [class.upload.php](http://www.verot.net/php_class_upload.htm) by Colin Verot. 

1. Parameter one contains the max width of the resized image and is required.
1. Parameter two contains the max height of the resized image and is required.
1. Parameter three optionally adds a string to the beginning of the file name.
1. Parameter four optionally specifies the upload directory. Leave this blank and Formr will use the same directory specified in `$upload_dir`
1. Parameter five optionally contains the quality of the resized image. Default is 80%. JPG only.


The `$upload_resize` property takes an array as its value. The array key is the name of the process and can be anything you like, such as: "thumbnail", "avatar", "large_image", etc. The array values are a simple string, and tell Formr what to do with the image. Each array key/value pair will perform a resize process on the uploaded image, so if you want to resize it 10 times, just add 10 key/value pairs.

{% highlight php startinline %}
// resize the original file to a max width and height of 150px and place it in `$upload_dir`
$form->upload_resize = array('resize' => '150,150');
{% endhighlight %}

{% highlight php startinline %}
// create a thumbnail image with `'tn_'` prepended to the file name, upload it into `/htdocs/uploads/tn/` and give it a max width and max height of 100px.
$form->upload_resize = array('thumbnail' => '100,100,tn_,/htdocs/uploads/tn/');
{% endhighlight %}

#### Resize the image 3 times, for a total of 4 images; the original upload and three resized images.

* The first key will create an image with a max width and height of 600 pixels, will be put into the "large" directory and have a JPG quality of 80% (80% is the default if no quality is specified).
* The second key will create an image with a max width and height of 100 pixels, will have the filename prepended with "tn_", be put into the "thumbnail" directory and have a JPG quality of 90%.
* The third key will create an image with a max width and height of 64 pixels, be put it into the "avatars" directory and have a JPG quality of 80%.

{% highlight php startinline %}
$resize = array(
	'large'		=> '600,600,,/www/formr/uploads/large/',
	'thumbnail'	=> '100,100,tn_,/www/formr/uploads/thumbnails/,90',
	'avatar'	=> '64,64,,/www/formr/uploads/avatars/'
);
$form->upload_resize = $resize;
{% endhighlight %}





---




### A Complete Example

{% highlight php startinline %}
// instantiate Formr
$form = new Formr\Formr();

// set our upload directory
$form->upload_dir = 'uploads';

// rename our upload with a 32-character hash
$form->upload_rename = 'hash';

// only allow images to be uploaded
$form->upload_accepted_mimes = 'images';

// resize the upload
$form->upload_resize = array(
	'thumbnail'	=> '100,100,tn_,/www/formr/uploads/thumbnails/,90'
);

// check if the form has been submitted
if($form->submit()) {
	
	// process the upload and put it into an array
	$file = $form->post('file');

    // printr() the array to see its keys/values
    $form->printr($file);
}

// always print Formr's messages!
echo $form->messages();

// open our form element
echo $form->form_open_multipart();

// add our file element
echo $form->input_upload('file');

// submit button
echo $form->input_submit();

//close the form
echo $form->form_close();
{% endhighlight %}




---




## $upload_process

If you want to use Formr to build your form fields, but do not want it to upload and process files, just set this to `FALSE` and drop your favorite upload class/functions into your PHP script.

{% highlight php startinline %}
$form->upload_process = false
{% endhighlight %}