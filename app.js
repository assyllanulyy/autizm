/* «Сөздер әлеміне саяхат» — offline-friendly learning game. */
const levels = [
  { id: 'picture', title: 'Суретті таны', short: 'Суретті таны', icon: '🖼️', description: 'Суретке қарап, сөзді тап.', tasks: [
    {visual:'🐈',prompt:'Суретте не бар?',options:['Мысық','Ит','Қоян','Түлкі'],answer:'Мысық'},
    {visual:'🍎',prompt:'Суретте не бар?',options:['Алмұрт','Алма','Шие','Өрік'],answer:'Алма'},
    {visual:'🏠',prompt:'Суретте не бар?',options:['Мектеп','Үй','Дүкен','Бақ'],answer:'Үй'},
    {visual:'🐟',prompt:'Суретте не бар?',options:['Құс','Балық','Ара','Көбелек'],answer:'Балық'},
    {visual:'📚',prompt:'Суретте не бар?',options:['Дәптер','Кітап','Қалам','Сөмке'],answer:'Кітап'},
    {visual:'🌷',prompt:'Суретте не бар?',options:['Ағаш','Гүл','Жапырақ','Шөп'],answer:'Гүл'},
    {visual:'🚲',prompt:'Суретте не бар?',options:['Автобус','Ұшақ','Велосипед','Кеме'],answer:'Велосипед'},
    {visual:'🐻',prompt:'Суретте не бар?',options:['Қасқыр','Аю','Тиін','Кірпі'],answer:'Аю'}
  ]},
  { id: 'question', title: 'Сұрақты таңда', short: 'Сұрақты таңда', icon: '❓', description: 'Сөзге сай сұрақты таңда.', tasks: [
    {visual:'👧',prompt:'Қыз бала. Қандай сұрақ қоямыз?',options:['Кім?','Не?','Кімдер?','Нелер?'],answer:'Кім?'},
    {visual:'✏️',prompt:'Қарындаш. Қандай сұрақ қоямыз?',options:['Не?','Кім?','Кімдер?','Нелер?'],answer:'Не?'},
    {visual:'👨‍👩‍👧',prompt:'Балалар. Қандай сұрақ қоямыз?',options:['Кімдер?','Кім?','Не?','Нелер?'],answer:'Кімдер?'},
    {visual:'🌳🌳',prompt:'Ағаштар. Қандай сұрақ қоямыз?',options:['Нелер?','Не?','Кім?','Кімдер?'],answer:'Нелер?'},
    {visual:'👨‍⚕️',prompt:'Дәрігер. Қандай сұрақ қоямыз?',options:['Кім?','Не?','Кімдер?','Нелер?'],answer:'Кім?'},
    {visual:'⚽',prompt:'Доп. Қандай сұрақ қоямыз?',options:['Не?','Кім?','Кімдер?','Нелер?'],answer:'Не?'},
    {visual:'👭',prompt:'Құрбылар. Қандай сұрақ қоямыз?',options:['Кімдер?','Кім?','Не?','Нелер?'],answer:'Кімдер?'},
    {visual:'🍐🍐',prompt:'Алмұрттар. Қандай сұрақ қоямыз?',options:['Нелер?','Не?','Кім?','Кімдер?'],answer:'Нелер?'}
  ]},
  { id: 'number', title: 'Біреу ме, көп пе?', short: 'Біреу ме, көп пе?', icon: '🔢', description: 'Жекеше немесе көпше екенін тап.', tasks: [
    {visual:'🐦',prompt:'Құс — біреу. Бұл қай түр?',options:['Жекеше — біреу','Көпше — көп'],answer:'Жекеше — біреу'},
    {visual:'🍊🍊🍊',prompt:'Апельсиндер — көп. Бұл қай түр?',options:['Көпше — көп','Жекеше — біреу'],answer:'Көпше — көп'},
    {visual:'👦',prompt:'Бала — біреу. Бұл қай түр?',options:['Жекеше — біреу','Көпше — көп'],answer:'Жекеше — біреу'},
    {visual:'🌼🌼',prompt:'Гүлдер — көп. Бұл қай түр?',options:['Көпше — көп','Жекеше — біреу'],answer:'Көпше — көп'},
    {visual:'🚗',prompt:'Көлік — біреу. Бұл қай түр?',options:['Жекеше — біреу','Көпше — көп'],answer:'Жекеше — біреу'},
    {visual:'🐶🐶🐶',prompt:'Күшіктер — көп. Бұл қай түр?',options:['Көпше — көп','Жекеше — біреу'],answer:'Көпше — көп'},
    {visual:'📒',prompt:'Дәптер — біреу. Бұл қай түр?',options:['Жекеше — біреу','Көпше — көп'],answer:'Жекеше — біреу'},
    {visual:'🦋🦋',prompt:'Көбелектер — көп. Бұл қай түр?',options:['Көпше — көп','Жекеше — біреу'],answer:'Көпше — көп'}
  ]},
  { id: 'sentence', title: 'Сөйлем құрастыр', short: 'Сөйлем құрастыр', icon: '🧩', description: 'Сөздерді ретімен қой.', tasks: [
    {visual:'🐈🥛',prompt:'Сөздерді ретімен қойып, сөйлем құрастыр.',words:['Мысық','сүт','ішті'],answer:['Мысық','сүт','ішті']},
    {visual:'👧📖',prompt:'Сөздерді ретімен қойып, сөйлем құрастыр.',words:['оқыды','Айша','кітап'],answer:['Айша','кітап','оқыды']},
    {visual:'🐕🏃',prompt:'Сөздерді ретімен қойып, сөйлем құрастыр.',words:['жүгірді','Ит','далада'],answer:['Ит','далада','жүгірді']},
    {visual:'👦🍎',prompt:'Сөздерді ретімен қойып, сөйлем құрастыр.',words:['алма','жеді','Бала'],answer:['Бала','алма','жеді']},
    {visual:'🌞🌳',prompt:'Сөздерді ретімен қойып, сөйлем құрастыр.',words:['жарқырап','Күн','тұр'],answer:['Күн','жарқырап','тұр']},
    {visual:'🐦🌳',prompt:'Сөздерді ретімен қойып, сөйлем құрастыр.',words:['қонды','Құс','ағашқа'],answer:['Құс','ағашқа','қонды']},
    {visual:'👩‍🍳🥣',prompt:'Сөздерді ретімен қойып, сөйлем құрастыр.',words:['Анам','ас','пісірді'],answer:['Анам','ас','пісірді']},
    {visual:'🌧️☂️',prompt:'Сөздерді ретімен қойып, сөйлем құрастыр.',words:['жауып','Жаңбыр','тұр'],answer:['Жаңбыр','жауып','тұр']}
  ]}
];
const STORAGE_KEY='sozder-alemi-progress-v1';
const DISPLAY_KEY='sozder-alemi-colorful-v1';
const freshState=()=>({completed:{},stars:0});
let state=loadState(), activeLevel=null, taskIndex=0, sentenceSelection=[];
const $=id=>document.getElementById(id);
function loadState(){try{const saved=JSON.parse(localStorage.getItem(STORAGE_KEY));return saved&&saved.completed?{completed:saved.completed,stars:Number(saved.stars)||0}:freshState()}catch{return freshState()}}
function saveState(){try{localStorage.setItem(STORAGE_KEY,JSON.stringify(state))}catch{/* Private browsing may disable storage; the game remains playable. */}}
function totalCompleted(){return Object.values(state.completed).reduce((n,list)=>n+(Array.isArray(list)?list.length:0),0)}
function updateHome(){ $('star-count').textContent=`⭐ ${state.stars}`;$('home-progress').textContent=`${totalCompleted()} / 32 тапсырма`;
  $('level-grid').innerHTML=levels.map((level,index)=>{const done=state.completed[level.id]||[];const percent=Math.round(done.length/level.tasks.length*100);return `<button class="level-card" data-level="${level.id}" aria-label="${index+1}-деңгей: ${level.title}. ${done.length} тапсырма орындалды"><span class="level-icon" aria-hidden="true">${level.icon}</span><strong>${index+1}. ${level.title}</strong><span class="level-meta"><span>${level.description}</span><span>${done.length}/${level.tasks.length}</span></span><span class="mini-progress" aria-hidden="true"><span style="width:${percent}%"></span></span></button>`}).join('');
  document.querySelectorAll('.level-card').forEach(button=>button.addEventListener('click',()=>startLevel(button.dataset.level)));
}
function showScreen(id){['home','game','complete'].forEach(screen=>$(screen).hidden=screen!==id);window.scrollTo({top:0,behavior:'smooth'})}
function startLevel(id){activeLevel=levels.find(level=>level.id===id);taskIndex=0;showScreen('game');renderTask()}
function renderTask(){const task=activeLevel.tasks[taskIndex];sentenceSelection=[];$('level-label').textContent=`${activeLevel.icon} ${activeLevel.title}`;$('step-label').textContent=`${taskIndex+1}-тапсырма`;$('step-count').textContent=`${taskIndex+1} / ${activeLevel.tasks.length}`;$('progress-fill').style.width=`${taskIndex/activeLevel.tasks.length*100}%`;$('question-title').textContent=activeLevel.title;$('visual').textContent=task.visual;$('visual').classList.toggle('sentence-visual',activeLevel.id==='sentence');$('prompt').textContent=task.prompt;$('feedback').textContent='';$('feedback').className='feedback';$('next-button').hidden=true;
  if(activeLevel.id==='sentence')renderSentence(task);else renderAnswers(task);
}
function renderAnswers(task){$('answers').innerHTML=task.options.map((option,index)=>`<button class="answer-button" data-answer="${index}">${option}</button>`).join('');document.querySelectorAll('.answer-button').forEach(button=>button.addEventListener('click',()=>{if(button.disabled)return;const chosen=task.options[Number(button.dataset.answer)];if(chosen===task.answer){button.classList.add('correct');document.querySelectorAll('.answer-button').forEach(item=>item.disabled=true);markCorrect();$('feedback').textContent='Дұрыс жауап.'}else{$('feedback').textContent='Бұл жауап сәйкес келмеді. Басқа жауапты таңда.';$('feedback').classList.add('try-again')}}))}
function renderSentence(task){$('answers').innerHTML=`<div class="sentence-builder" id="sentence-builder" aria-live="polite"></div><div class="word-bank" id="word-bank"></div><button class="primary-button check-button" id="check-sentence">Сөйлемді тексеру</button>`;const bank=[...task.words];drawSentence(task,bank);$('check-sentence').addEventListener('click',()=>{if(sentenceSelection.length!==task.answer.length){$('feedback').textContent='Сөйлемді тексеру үшін барлық сөзді таңда.';$('feedback').classList.add('try-again');return}const correct=sentenceSelection.every((word,index)=>word===task.answer[index]);if(correct){document.querySelectorAll('.word-tile').forEach(button=>button.disabled=true);$('check-sentence').hidden=true;markCorrect();$('feedback').textContent='Сөйлем дұрыс құрылды.'}else{$('feedback').textContent='Сөздердің орнын өзгертіп көр.';$('feedback').classList.add('try-again')}})}
function drawSentence(task,bank){$('sentence-builder').innerHTML=sentenceSelection.length?sentenceSelection.map(word=>`<button class="chosen-word" data-remove="${sentenceSelection.indexOf(word)}">${word}</button>`).join(''):'<span class="empty-sentence">Сөздер осында жиналады</span>';$('word-bank').innerHTML=bank.map((word,index)=>`<button class="word-tile" data-word="${index}" ${sentenceSelection.includes(word)?'disabled':''}>${word}</button>`).join('');document.querySelectorAll('.word-tile').forEach(button=>button.addEventListener('click',()=>{sentenceSelection.push(bank[Number(button.dataset.word)]);drawSentence(task,bank)}));document.querySelectorAll('.chosen-word').forEach(button=>button.addEventListener('click',()=>{sentenceSelection.splice(Number(button.dataset.remove),1);drawSentence(task,bank)}))}
function markCorrect(){const done=state.completed[activeLevel.id]||(state.completed[activeLevel.id]=[]);if(!done.includes(taskIndex)){done.push(taskIndex);state.stars+=1;saveState();updateHome() }$('next-button').hidden=false}
function nextTask(){if(taskIndex+1<activeLevel.tasks.length){taskIndex++;renderTask()}else finishLevel()}
function finishLevel(){const full=(state.completed[activeLevel.id]||[]).length===activeLevel.tasks.length;$('complete-title').textContent=full?'Аялдама аяқталды!':'Саяхат жалғасады!';$('complete-copy').textContent=full?`${activeLevel.title} деңгейіндегі барлық тапсырманы орындадың. Керемет жұмыс!`:'Бүгінгі талпынысың үшін рақмет! Қалған тапсырмаларды кейін жалғастыра аласың.';$('complete-stars').textContent=`⭐ ${state.stars} жұлдыз`;showScreen('complete')}
$('start-button').addEventListener('click',()=>{$('levels').scrollIntoView({behavior:'smooth',block:'start'})});$('back-button').addEventListener('click',()=>{updateHome();showScreen('home')});$('next-button').addEventListener('click',nextTask);$('continue-button').addEventListener('click',()=>{updateHome();showScreen('home')});$('reset-button').addEventListener('click',()=>$('reset-dialog').showModal());$('confirm-reset').addEventListener('click',event=>{event.preventDefault();state=freshState();saveState();updateHome();$('reset-dialog').close();showScreen('home')});
function setColorfulMode(enabled){document.body.classList.toggle('colorful-mode',enabled);$('display-toggle').setAttribute('aria-pressed',String(enabled));$('display-toggle').textContent=`Түсті безендіру: ${enabled?'қосулы':'өшірулі'}`;try{if(enabled)localStorage.setItem(DISPLAY_KEY,'1');else localStorage.removeItem(DISPLAY_KEY)}catch{/* Display choice applies for this visit. */}}
$('display-toggle').addEventListener('click',()=>setColorfulMode($('display-toggle').getAttribute('aria-pressed')!=='true'));
try{setColorfulMode(localStorage.getItem(DISPLAY_KEY)==='1')}catch{setColorfulMode(false)}
updateHome();
