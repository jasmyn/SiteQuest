/**
 * SiteQuest 0.0.2
 *
 * http://github.com/jasmyn/SiteQuest
 * jasmynbianca@gmail.com
 * 
 */

/* Edit the sqConfig variable */
var sqConfig = {
	"xpPerLink": 100 // how much XP to award per link followed
};

var siteQuest = {
	getScore: function () {
		var storage = window.localStorage, score = 0;

		if (storage.getItem('SiteQuest Score') !== null) {
			score = +(localStorage.getItem('SiteQuest Score'));
		}

		return score;
	},
	setScore: function (points) {
		var score = this.getScore();
		
		score += points;

		window.localStorage.setItem('SiteQuest Score', score);
	},
	resetScore: function () {
		var storage = window.localStorage;

		if (storage.getItem('SiteQuest Score') !== null) {
			localStorage.setItem('SiteQuest Score', 0);
		}
	}
};

(function ($) {
	//slideout
	$('#sq-button').click(function() {
		$('#site-quest').slideToggle('slow', function() {
		// Animation complete.
		});
	});

	//set score
	xpPerLink = sqConfig.xpPerLink;
	$('a').click(function () {
		siteQuest.setScore(xpPerLink);
	});
	$('#site-quest').children().first().text('SiteQuest:' + siteQuest.getScore());

	//reset score
	$('#sq-reset').click(function () {
		siteQuest.resetScore();
		$('#site-quest').children().first().text('SiteQuest:' + siteQuest.getScore());
		$('#sq-img').attr('src', 'images/SiteQuest/level-0.png');
	})

	//set image
	var score = siteQuest.getScore();
	if (score >= 100 && score < 200) { 
		$('#sq-img').attr('src', 'images/SiteQuest/level-1.png');
	};
	if (score >= 200 && score < 300) { 
		$('#sq-img').attr('src', 'images/SiteQuest/level-2.png');
	};
	if (score >= 300 && score < 400) { 
		$('#sq-img').attr('src', 'images/SiteQuest/level-3.png');
	};
	if (score >= 400 && score < 500) { 
		$('#sq-img').attr('src', 'images/SiteQuest/level-4.png');
	};
	if (score >= 500 && score < 600) { 
		$('#sq-img').attr('src', 'images/SiteQuest/level-5.png');
	};
	if (score >= 600 && score < 700) { 
		$('#sq-img').attr('src', 'images/SiteQuest/level-6.png');
	};
	if (score >= 700 && score < 800) { 
		$('#sq-img').attr('src', 'images/SiteQuest/level-7.png');
	};
	if (score >= 800 && score < 900) { 
		$('#sq-img').attr('src', 'images/SiteQuest/level-8.png');
	};
	if (score >= 900 && score < 1000) { 
		$('#sq-img').attr('src', 'images/SiteQuest/level-9.png');
	};
	if (score >= 1000) { 
		$('#sq-img').attr('src', 'images/SiteQuest/level-10.png');
	};
}(jQuery));