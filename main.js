var button = document.getElementsByTagName('button')[0];
button.addEventListener('click', function() {
  var userName = document.getElementsByClassName('form-control')[0].value;
  var nameList = document.createElement('li');
  var newName = document.createTextNode(userName + ":");
  nameList.appendChild(newName);
  document.getElementsByClassName('posts')[0].append(nameList);
  //posts name to forum
  var userWords = document.getElementsByClassName('form-control')[1].value;
  var wordsList = document.createElement('li');
  var newWords = document.createTextNode(userWords);
  wordsList.appendChild(newWords);
  document.getElementsByClassName('posts')[0].append(wordsList);
  //posts message to forum
  var blank = document.createElement('li');
  var newBlank = document.createTextNode('');
  blank.appendChild(newBlank);
  document.getElementsByClassName('posts')[0].append(blank);
  //adds a space between each post
});
