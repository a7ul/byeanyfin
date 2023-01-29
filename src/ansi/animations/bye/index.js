/* eslint-disable no-await-in-loop */
const symbols = require('../../symbols');

const delay = async (millisec) => new Promise((resolve) => {
  setTimeout(() => resolve(), millisec);
});

const frames = {
  simple: (text = '') => `
             ${text}
`,
  smile: (text1 = '', text2 = '', text3 = '') => `
             ${text1}
     ^^^     
    (●‿●)    ${text2}
    (> <)    
             ${text3}
 `,
  lastDay: (text1 = '', text2 = '', text3 = '') => `
             ${text1}
     ^^^     
    (●_●)    ${text2}
    (>  )>   
             ${text3}
`,
  lastDayCloseEye: (text1 = '', text2 = '', text3 = '') => `
             ${text1}
     ^^^     
    ( _ )    ${text2}
    (>  )>   
             ${text3}
`,
  anyfin: (text1 = '', text2 = '') => `
            ${text1}    
  ${text2}
       
             /####\\              
           /########\\              
          /###########\\             
          \\###########/            
      /##\\ \\########/             
    /######\\ \\####/________       
  /##########\\   |#########|       
  \\###########/  |#########|       
    \\#######/    |#########|       
      \\###/      |#########|       
                                                                                     
`,

  exanyfin: (text1 = '', text2 = '', text3 = '', h = '', h2 = '') => `
${h}

   ^^^        ${h2}
  (■‿■)       ${text1}
  (> <)       ${text2}
              ${text3}
 `,
};

const animHi = async (stream) => {
  stream.push(symbols.PAGE_BREAK);
  for (let i = 0; i < 5; i += 1) {
    stream.push(symbols.PAGE_BREAK);
    stream.push(frames.anyfin('Hej 👋', 'Today is my last day here ☹️  (potentially)'));
    await delay(600);
    stream.push(symbols.PAGE_BREAK);
    stream.push(frames.anyfin('Hej 🫲', 'Today is my last day here ☹️  (potentially)'));
    await delay(600);
  }
  await delay(500);
  const messages = [
    'I am taking a six month leave to build a startup',
    '(Worst time 🤷‍♂️, I know 🤣)',
    'I wanted to take a moment to thank you and convey my deepest gratitude ❤️ ...',
  ];
  for (let i = 0; i < 5; i += 1) {
    stream.push(symbols.PAGE_BREAK);
    stream.push(frames.lastDay(...messages));
    await delay(800);
    stream.push(symbols.PAGE_BREAK);
    stream.push(frames.lastDayCloseEye(...messages));
    await delay(800);
  }
  stream.push(symbols.PAGE_BREAK);
  stream.push(frames.lastDay(...messages));
  await delay(1000);
};

const beginning = async (stream) => {
  stream.push(symbols.PAGE_BREAK);
  for (let i = 0; i < 4; i += 1) {
    const dots = new Array(i).fill('.').join('');
    stream.push(symbols.PAGE_BREAK);
    stream.push(frames.simple(`Feb 2019 ${dots}`));
    await delay(600);
  }
  await delay(500);
  const messages = [
    'I met Sven, Husse and Filip',
    'Instantly knew that I wanted to work here',
    'The passion, honesty and kindness was contagious. I was sold ✅',
  ];
  for (let i = 0; i < 3; i += 1) {
    stream.push(symbols.PAGE_BREAK);
    stream.push(frames.simple('Feb 2019 ...'));
    const lines = [];
    for (let m = 0; m <= i; m += 1) {
      lines.push(messages[m]);
    }
    stream.push(frames.smile(...lines));
    await delay(2000);
  }
  await delay(1500);
};

module.exports = async (stream) => {
  // await animHi(stream);
  await beginning(stream);
  stream.push('\\n');
  stream.push(null);
};
