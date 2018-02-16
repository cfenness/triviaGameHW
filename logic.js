var panel = $("#quiz");

var questions = [{
  question: "The first human life to set foot in North America is most likely from...",
  answers: ["Asia", "Africa", "Antarctica", "Europe"],
  correctAnswer: "Asia"
}, {
  question: "What battle was the turning point of the American Revolution?",
  answers: ["Battle of Gettysburg", "The French and Indian War", "Battle of Bunker Hill", "None of the Above"],
  correctAnswer: "None of the Above"
}, {
  question: "Who was the Second President?",
  answers: ["John Quincy Adams", "John Adams", "Thomas Jefferson", "Alexander Hamilton"],
  correctAnswer: "John Adams"
}, {
  question: "Who is the current President of South Africa?",
  answers: ["Nelson Mandela", "Desmond Tutu", "Jacob Zuma", "Gwende Mantashe"],
  correctAnswer: "Jacob Zuma"
}, {
  question: "Who is the Roman God of Love?",
  answers: ["Venus", "Cupid", "Hera", "Mars"],
  correctAnswer: "Cupid"
}, {
  question: "Who Bombed Pearl Harbor",
  answers: ["Chinese", "Koreans", "Japanese", "Vietnamese"],
  correctAnswer: "Japanese"
}, {
  question: "On the Chinese New Year in 1993, it was the year of the?",
  answers: ["Rooster", "Wallaby", "Monkey", "Dog"],
  correctAnswer: "Rooster"
}];

var timer;

var game = {

  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      alert("Pencil's Down!");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<br><input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    panel.append("<button id='done'>Done</button>");
  },

  done: function() {
    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    this.result();

  },


  result: function() {
    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    panel.html("<h1>Done!</h1>");
    panel.append("<h4>Correct Answers: " + this.correct + "</h4>");
    panel.append("<h4>Incorrect Answers: " + this.incorrect + "</h4>");
    panel.append("<h4>Unanswered: " + (questions.length - (this.correct + this.incorrect)) + "</h4>")
  }

};

$(document).on("click", "#start", function() {
  game.start();
})
$(document).on("click", "#done", function() {
  game.done();
})
