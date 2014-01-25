    (function() {
      var quotes = [
        {
          text1: "Biomedical Engineering Society",
		  link1: "http://bmes.org/",
          img1:  "img/bmes65.jpg",
		  text2: "University of Colorado Engineering Council",
		  link2: "http://www.colorado.edu/engineering/ucec",
          img2:  "img/ucec65.jpg"
        },
        {
          text1: "Biomedical Engineering Society",
		  link1: "http://bmes.org/",
          img1:  "img/bmes65.jpg",
		  text2: "Anchor - Physical Therapy, Spine & Sports Medicine, P.C.",
		  link2: "http://www.anchorphysicaltherapy.net/",
          img2:  "img/anchor65.jpg"
        },
		{
          text1: "University of Colorado Engineering Council",
		  link1: "http://www.colorado.edu/engineering/ucec",
          img1:  "img/ucec65.jpg",
		  text2: "Biomedical Engineering Society",
		  link2: "http://bmes.org/",
          img2:  "img/bmes65.jpg"
        },
		{
          text1: "University of Colorado Engineering Council",
		  link1: "http://www.colorado.edu/engineering/ucec",
          img1:  "img/ucec65.jpg",
		  text2: "Anchor - Physical Therapy, Spine & Sports Medicine, P.C.",
		  link2: "http://www.anchorphysicaltherapy.net/",
          img2:  "img/anchor65.jpg"
        },
		{
          text1: "Anchor - Physical Therapy, Spine & Sports Medicine, P.C.",
		  link1: "http://www.anchorphysicaltherapy.net/",
          img1:  "img/anchor65.jpg",
		  text2: "Biomedical Engineering Society",
		  link2: "http://bmes.org/",
          img2:  "img/bmes65.jpg"
        },
		{
          text1: "Anchor - Physical Therapy, Spine & Sports Medicine, P.C.",
		  link1: "http://www.anchorphysicaltherapy.net/",
          img1:  "img/anchor65.jpg",
		  text2: "University of Colorado Engineering Council",
		  link2: "http://www.colorado.edu/engineering/ucec",
          img2:  "img/ucec65.jpg"
        }
      ];
      var quote = quotes[Math.floor(Math.random() * quotes.length)];
      document.getElementById("quote").innerHTML =
		'<div class="media footer-post">' +
		'<a class="pull-left" href="#">' +
		'<img class="media-object" src="' + quote.img1 + '" alt="...">' +
		'</a>' +
		'<div class="media-body">' +
		'<a  href="' + quote.link1 + '">' + quote.text1 + '</a>' +
		'</div>' +
		'</div>' +
		'<div class="media footer-post">' +
		'<a class="pull-left" href="#">' +
		'<img class="media-object" src="' + quote.img2 + '" alt="...">' +
		'</a>' +
		'<div class="media-body">' +
		'<a  href="' + quote.link2 + '">' + quote.text2 + '</a>' +
		'</div>' +
		'</div>';
    })();
	
//	    (function() {
//      var quotes = [
//        {
//          text: "text1",
//          img:  "http://i.stack.imgur.com/FqBE6.jpg?s=32&g=1"
//        },
//        {
//          text: "text2",
//          img:  "https://www.gravatar.com/avatar/ca3e484c121268e4c8302616b2395eb9?s=32&d=identicon&r=PG",
//        }
 //     ];
 //     var quote = quotes[Math.floor(Math.random() * quotes.length)];
//      document.getElementById("quote").innerHTML =
//        '<p>' + quote.text + '</p>' +
//        '<img src="' + quote.img + '">';
//		'<div class="media footer-post">' +
//		'<a class="pull-left" href="#">' +
//		'<img class="media-object" src="img/65.jpg" alt="...">' +
//		'</a>' +
//		'<div class="media-body">' +
//		'<a  href="#">Reprehenderit in culpa dolore labore ullamco exercitation</a>' +
//		'<span class="footer-post-date">January 22, 2013</span>' +
//		'</div>' +
//		'</div>';
 //   })();