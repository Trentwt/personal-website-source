<%@LANGUAGE="JAVASCRIPT" CODEPAGE="65001"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<!-- TemplateBeginEditable name="doctitle" -->
<title>Untitled Document</title>
<!-- TemplateEndEditable -->
<!-- TemplateBeginEditable name="head" -->
<!-- TemplateEndEditable -->
<style type="text/css">
<!--
body {
	background-color: #070E18;
	margin: 0;
	padding: 0;
	color: #000;
	font-family: Abel;
	font-size: 14pt;
	line-height: normal;
	text-decoration: none;
	background-image: url(../background.png);
	background-repeat: no-repeat;
}

/* ~~ Element/tag selectors ~~ */
ul, ol, dl { /* Due to variations between browsers, it's best practices to zero padding and margin on lists. For consistency, you can either specify the amounts you want here, or on the list items (LI, DT, DD) they contain. Remember that what you do here will cascade to the .nav list unless you write a more specific selector. */
	padding: 0;
	margin: 0;
}
h1, h2, h3, h4, h5, h6, p {
	margin-top: 0;	 /* removing the top margin gets around an issue where margins can escape from their containing div. The remaining bottom margin will hold it away from any elements that follow. */
	padding-right: 15px;
	padding-left: 15px; /* adding the padding to the sides of the elements within the divs, instead of the divs themselves, gets rid of any box model math. A nested div with side padding can also be used as an alternate method. */
}
a img { /* this selector removes the default blue border displayed in some browsers around an image when it is surrounded by a link */
	border: none;
}

/* ~~ Styling for your site's links must remain in this order - including the group of selectors that create the hover effect. ~~ */
a:link {
	color:#414958;
	text-decoration: underline; /* unless you style your links to look extremely unique, it's best to provide underlines for quick visual identification */
}
a:visited {
	color: #4E5869;
	text-decoration: underline;
}
a:hover, a:active, a:focus { /* this group of selectors will give a keyboard navigator the same hover experience as the person using a mouse. */
	text-decoration: none;
}

/* ~~ this container surrounds all other divs giving them their percentage-based width ~~ */
.container {
	width: 80%;
	max-width: 1260px;/* a max-width may be desirable to keep this layout from getting too wide on a large monitor. This keeps line length more readable. IE6 does not respect this declaration. */
	min-width: 780px;/* a min-width may be desirable to keep this layout from getting too narrow. This keeps line length more readable in the side columns. IE6 does not respect this declaration. */
	background-color: #FFF; /* the auto value on the sides, coupled with the width, centers the layout. It is not needed if you set the .container's width to 100%. */
	height: auto;
	margin-top: 0;
	margin-right: auto;
	margin-bottom: 0;
	margin-left: auto;
}

/* ~~the header is not given a width. It will extend the full width of your layout. It contains an image placeholder that should be replaced with your own linked logo~~ */
.header {
	background-color: #FFFFFF;
}

/* ~~ This is the layout information. ~~ 

1) Padding is only placed on the top and/or bottom of the div. The elements within this div have padding on their sides. This saves you from any "box model math". Keep in mind, if you add any side padding or border to the div itself, it will be added to the width you define to create the *total* width. You may also choose to remove the padding on the element in the div and place a second div within it with no width and the padding necessary for your design.

*/
.content {
	padding: 10px 0;
}

/* ~~ This grouped selector gives the lists in the .content area space ~~ */
.content ul, .content ol { 
	padding: 0 15px 15px 40px; /* this padding mirrors the right padding in the headings and paragraph rule above. Padding was placed on the bottom for space between other elements on the lists and on the left to create the indention. These may be adjusted as you wish. */
}

/* ~~ The footer ~~ */
.footer {
	padding: 10px 0;
	background-color: #434343;
}

/* ~~ miscellaneous float/clear classes ~~ */
.fltrt {  /* this class can be used to float an element right in your page. The floated element must precede the element it should be next to on the page. */
	float: right;
	margin-left: 8px;
}
.fltlft { /* this class can be used to float an element left in your page. The floated element must precede the element it should be next to on the page. */
	float: left;
	margin-right: 8px;
}
.clearfloat { /* this class can be placed on a <br /> or empty div as the final element following the last floated div (within the #container) if the #footer is removed or taken out of the #container */
	clear:both;
	height:0;
	font-size: 1px;
	line-height: 0px;
}
.container .content h1 {
}
.container .content h2 {
	font-family: Gotham Medium;
}
.container .content h1 {
	font-family: Gotham Book;
}
.container .content h2 {
	font-family: Arial Black, Gadget, sans-serif;
}
.container .content h2 {
	font-family: Arial, Helvetica, sans-serif;
}
.container .content h1 {
	font-family: Arial, Helvetica, sans-serif;
	alignment-adjust: middle;
	alignment-baseline: central;
}
.container .content h3 {
	font-family: MS Serif, New York, serif;
}
.container .footer h4 {
	font-family: Verdana, Geneva, sans-serif;
}
.container .footer h4 {
	font-family: Abel;
}
.footer h4 {
	font-family: Abel;
}
.footer {
	color: #FFF;
}
.container .footer .footer {
	font-family: Gotham Medium;
}
.container .footer .footer {
	font-family: Gotham Book;
}
.container .content h3 {
	font-family: Gotham Book;
}
.container .content h2 {
	font-family: Gotham Book;
}
.container .content h2 {
	font-family: Arial, Helvetica, sans-serif;
}
.content h3 {
	font-family: Arial, Helvetica, sans-serif;
}
.content p strong {
	font-family: Georgia, Times New Roman, Times, serif;
}
.content p strong {
	font-family: Arial, Helvetica, sans-serif;
}
.content h1 {
	font-family: Gotham Book;
}
.content h1 {
	font-family: Gotham Book;
}
.container .content h3 {
	font-family: Georgia, Times New Roman, Times, serif;
}
.container .content h3 {
	font-family: Arial, Helvetica, sans-serif;
}
.container .content h1 {
	font-family: Arial, Helvetica, sans-serif;
}
body,td,th {
	color: #434343;
}
-->
</style></head>

<body>

<div class="container">
  <div class="header">
    <div align="center"><a href="#"><img src="../solutions1.png" alt="Insert Logo Here" name="Insert_logo" width="456" height="120" id="Insert_logo" style="background-color: #FFFFFF; display: block;" /></a> 
      <!-- end .header -->
    </div>
  </div>
  <div class="content">
    <h1 align="center"><img src="../Data Mart 1 copy.png" width="766" height="389" align="absmiddle" /></h1>
    <h1 align="center">The Ephemeris Approach to Data Analytics</h1>
    <p align="center"><strong>Understanding Our Clients</strong></p>
    <p align="center"><strong><img src="../consulting1.jpg" width="234" height="126" /></strong></p>
    <p align="center"> We believe the first step to providing the highest quality analytics and consulting is understanding each client's unique situation and set of needs. Our team of consultants will work side-by-side with our clients to obtain a deep knowledge of how your organization functions, and which key performance metrics you want to drive.    </p>
    <p align="center"><strong>Understanding The Data</strong></p>
    <p align="center"><img src="../datatape1.jpg" width="238" height="119" /></p>
    <p align="center"> Ephemeris data scientists will work tirelessly to process, evaluate, and model the data we extract from your organization in order to draw meaningful connections between customer data and performance targets. Our custom models are built on the most cutting edge Machine Learning and Data Science in order to deliver the most accurate results and predictions possible.    </p>
    <p align="center"><strong>Bringing Meaning to The Numbers</strong> </p>
    <p align="center"><img src="../neuralnetwork1.jpg" width="248" height="139" /></p>
    <p align="center">We believe that you shouldn't need a background in data science in order to utilize the powerful insights of data analytics. Unlike the majority of data analytics platforms, Ephemeris Solutions generates reports that translate our findings in the data into actionable advice and directions for your business in order for you to get the most out of the information we extrapolate from the data and help drive your organization's bottom line.</p>
    <h2 align="center">About Us</h2>
    <p align="center">Ephemeris Solutions was founded in 2019 as an initiative to provide small and medium enterprises with the same level of data analytics consulting as what is leveraged by many of the large corporations and multinationals in order to optimise their performance. The data analytics platforms currently available to small business owners provide very little insight and require a deep understanding of data science in order to extrapolate meaning from the information provided.</p>
    <p align="center">Ephemeris Solutions takes a client-oriented approach to data analytics with tailor-made models for each client with reports that help explain our findings, and direct the client towards a course of actions to drive their target metrics.</p>
    <p align="center">Ephemeris provides all of these services at an unrivaled pricepoint, bringing a technology once only accessable to multinational corporations into small businesses accross Canada.</p>
    <h3 align="center"><strong>Coming Soon</strong></h3>
    <p align="left"><strong>Ephemeris Cybersecurity </strong>- Ephemeris Solutions is currently developing a server penetration testing system in order to keep your business safe from potential downtime as well as SQL injections, leaking sensetive information about your organization and its customers.</p>
    <p align="left"><!-- end .content --><strong>Ephemeris Digital Marketing </strong>- In order to help our clients drive sales performance, Ephemeris will additionally be offering marketing services related to branding, advertising, website development, as well as search engine optimization in order to help your business establish a presence on the digital frontier.</p>
  </div>
  <div class="footer"> 
    <h4 align="center" class="footer">CONTACT US</h4>
    <p align="center"> (647) 609 5264</p>
    <p align="center">j.wolfe@ephemerissolutions.com  </p>
    <p align="center">474 Hillsdale Ave E, Toronto ON M4S 1V2</p>
  </div>
  <div align="center"><!-- end .container --></div>
</div>
</body>
</html>
