	$(document).ready(function() {
	  var quoteSource = [{
	      quote: "Some days are just bad days, that's all. You have to experience sadness to know happiness, and I remind myself that not every day is going to be a good day, that's just the way it is!",
	      name: "Dita Von Teese"
	    }, {
	      quote: "Every human walks around with a certain kind of sadness. They may not wear it on their sleeves, but it's there if you look deep.",
	      name: "Taraji P. Henson"
	    }, {
	      quote: "Tears come from the heart and not from the brain.",
	      name: "Leonardo da Vinci"
	    }, {
	      quote: "Your pain is the breaking of the shell that encloses your understanding",
	      name: "Khalil Gibran"
	    }, {
	      quote: "The word 'happiness' would lose its meaning if it were not balanced by sadness.",
	      name: "Carl Jung"
	    }, {
	      quote: "We never taste a perfect joy; our happiest successes are mixed with sadness.",
	      name: "Pierre Corneille"
	    }, {
	      quote: "A sad soul can kill quicker than a germ",
	      name: "John Steinbeck"
	    }, {
	      quote: "Are sweetest songs are the ones that tell of the saddest thought",
	      name: "Percy Bysshe Shelley"
	    }, {
	      quote: "Dying is the all thing to be sad over, living unhappily is something else",
	      name: "Morrie Schwartz"
	    }, {
	      quote: "Red is the ultimate cure for sadness",
	      name: "Bill Blass"
	    }, {
	      quote: "One must not let oneself be overwhelmed by sadness.",
	      name: "Jackie Kennedy"
	    }, {
	      quote: "Proud people breed sad sorrows for themselves.",
	      name: "Emily Bronte"
	    }, {
	      quote: "Nothing is more sad than the death of an illusion.",
	      name: "Arthur Koestler"
	    }, {
	      quote: "Tears are the summer shower to the soul",
	      name: "Alfred Austin"
	    }, {
	      quote: "There is no sadder sight than a young pessimist.",
	      name: "Mark Twain"
	    }, {
	      quote: "Depression is the inability to construct a future.",
	      name: "Rollo May"
	    }, {
	      quote: "Crying is cleansing. There's a reason for tears, happiness or sadness.",
	      name: "Dionne Warwick"
	    }, {
	      quote: "Get your facts first, then you can distort them as you please.",
	      name: "Mark Twain"
	    }, {
	      quote: "In deep sadness there is no place for sentimentality.",
	      name: "William S. Burroughs"
	    }, {
	      quote: "He who is not just is severe, he who is not wise is sad.",
	      name: "Voltaire"
	    }, {
	      quote: "Good humor is the health of the soul, sadness is its poison.",
	      name: "Philip Stanhope, 4th Earl of Chesterfield"
	    }, {
	      quote: "A teardrop on earth summons the King of heaven.",
	      name: "Charles R. Swindoll"
	    }, {
	      quote: "Sadness is but a wall between two gardens.",
	      name: "Khalil Gibran"
	    }, {
	      quote: "The walls we build around us to keep sadness out also keeps out the joy.",
	      name: "Jim Rohn"
	    }

	  ];

	  $('#quoteButton').click(function(evt) {

	    var quote = $('#quoteContainer p').text();
	    var quoteSad = $('#quoteSad').text();

	    evt.preventDefault();

	    var sourceLength = quoteSource.length;
	    var randomNumber = Math.floor(Math.random() * sourceLength);
	    //set a new quote
	    for (i = 0; i <= sourceLength; i += 1) {
	      var newQuoteText = quoteSource[randomNumber].quote;
	      var newQuoteSad = quoteSource[randomNumber].name;

	      var timeAnimation = 300;
	      var quoteContainer = $('#quoteContainer');

	      quoteContainer.fadeOut(timeAnimation, function() {
	        quoteContainer.html('');
	        quoteContainer.append('<p>' + newQuoteText + '</p>' + '<p id="quoteSad">' + '-								' + newQuoteSad + '</p>');

	        quoteContainer.fadeIn(timeAnimation);
	      });

	      break;
	    };

	  });

	});