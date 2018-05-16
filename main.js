$(document).ready(function () {
  var choice = null
  var possibleChoices = ['rock', 'paper', 'scissors']
  var compChoice
  var wins = 0
  var losses = 0
  var ties = 0
  var gamesPlayed = 0

  $('.pics').on('click', function(){
    $('#result').text("")
    $('#comp').text("")

  })

  $('#rock').on('click', function () {
    choice = 'rock'
    $('#choice').text('You have chosen ' + choice)
  })

  $('#paper').on('click', function () {
    choice = 'paper'
    $('#choice').text('You have chosen ' + choice)
  })

  $('#scissors').on('click', function () {
    choice = 'scissors'
    $('#choice').text('You have chosen ' + choice)
  })

  $('#play').on('click', function () {
    compChoice = possibleChoices[(Math.floor(Math.random() * possibleChoices.length))]
    winCondition()
  })

  function winCondition() {
    if (choice == null){
    $('#choice').text('Make a choice first')
    return null
    }
    gamesPlayed++
    $('#comp').text('The computer chooses ' + compChoice + '!')
    if (compChoice == choice) {
      $('#result').addClass('tie')
      $('#result').removeClass('lose')
      $('#result').removeClass('win')
      $('#result').text('You have tied!')
      ties++
      $('#ties').text('Ties: ' + ties)
      percentageWin()
      return null;
    }
    if (choice == 'rock') {
      rock()
    } else if (choice == 'paper') {
      paper()
    } else {
      scissors()

    }
  }

  function rock() {
    if (compChoice == 'scissors') {
      win()
    } else {
      loss()
    }

  }
  function paper() {
    if (compChoice == 'rock') {
      win()
    } else {
      loss()
    }

  }
  function scissors() {
    if (compChoice == 'paper') {
      win()
    } else {
      loss()
    }

  }
  function win() {
    $('#result').removeClass('tie')
    $('#result').removeClass('lose')
    $('#result').addClass('win')
    $('#result').text('You have won!')
    wins++
    $('#wins').text('Wins: ' + wins)
    percentageWin()
  }
  function loss() {
    $('#result').addClass('lose')
    $('#result').removeClass('tie')
    $('#result').removeClass('win')
    $('#result').text('You have lost!')
    losses++
    $('#losses').text('Losses: ' + losses)
    percentageWin()
  }
  function percentageWin(){
    var winPercentage = (wins/gamesPlayed * 100).toFixed(2);
    $('#winPercent').text("Win Percentage: " + winPercentage + "%")
  }
})