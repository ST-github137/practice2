const quiz = [
  {
    question:'ゲーム市場、最も売れたゲーム機は次のうちどれ？',
    answers:[
      'スーパーファミコン', 
      'プレイステーション', 
      'ニンテンドースイッチ', 
      'ニンテンドーDS' 
    ],
    correct:'ニンテンドーDS'

  }, {
    question:'糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
    answers:[
      'MOTHER2', 
      'スーパーマリオブラザーズ3', 
      'スーパードンキーコング', 
      '星のカービィ'
    ],
      correct:'MOTHER2'
  }, {
    question:'ファイナルファンタジーIVの主人公の名前は？',
    answers:['フリオニール', 'クラウド', 'ディーダ', 'セシル'],
    correct:'セシル'
  }, {
      question:'ダンガンロンンパ1に登場する、超高校級の高校生は何人？',
      answers:['10人', '12人', '15人', '16人'],
      correct:'16人'
  }




];

  const quizLength = quiz.length;
  let quizIndex = 0;
  let score = 0;

  const $button = document.getElementsByTagName('button');
  const buttonLength = $button.length;


  const setUpQuiz = ()=>{
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    
    while(buttonIndex < buttonLength){
      $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
      buttonIndex++;
    }
  }

  setUpQuiz();

  //$button[0].textContent = answers[0];
  //$button[1].textContent = answers[1];
  //$button[2].textContent = answers[2];
  //$button[3].textContent = answers[3];

  const clickHandler = (e)=>{
    if(quiz[quizIndex].correct === e.target.textContent){
      window.alert('正解！');
      score++;
    } else {
      window.alert('不正解');
    }

    quizIndex++;

    if(quizIndex < quizLength){
      setUpQuiz();
    }else{
      window.alert('終了！あなたの正解数は'+score+'/'+quizLength+'です');

    }

  };
  
  let handlerIndex = 0;
  
  while(handlerIndex < buttonLength){
    $button[handlerIndex].addEventListener('click', (e)=>{
      
      clickHandler(e);
    });
    handlerIndex++;
  }

  