/* eslint-disable no-await-in-loop */
const symbols = require("../../symbols");

const delay = async (millisec) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(), millisec);
  });

const frames = {
  simple: (text = "") => `
             ${text}
`,
  dab: (text1 = "", text2 = "", text3 = "", text4 = "") => `
${text1}

     ^^^     
  \\(●‿\\)  ${text2}
    (   )   ${text3}
            ${text4}  

`,
  miss: (text1 = "", text2 = "", text3 = "", text4 = "") => `
${text1}

     ^^^    ${text2}
    (●_●,)  ${text3}
    (/  \\)  ${text4} 
             

`,
  proud: (text1 = "", text2 = "", text3 = "", text4 = "") => `
${text1}

     ^^^     
   \\(^‿^)/  ${text2}
    (   )   ${text3}
            ${text4}  

`,
  smile: (text1 = "", text2 = "", text3 = "") => `
             ${text1}
     ^^^     
    (●‿●)    ${text2}
    (> <)    
             ${text3}
 `,
  pointRight: (text1 = "", text2 = "", text3 = "") => `
             ${text1}
     ^^^     
    (●_●)    ${text2}
    (>  )>   
             ${text3}
`,
  pointRightCloseEye: (text1 = "", text2 = "", text3 = "") => `
             ${text1}
     ^^^     
    ( _ )    ${text2}
    (>  )>   
             ${text3}
`,
  bowDown: (text1 = "", text2 = "", text3 = "") => `
  ${text1}
             
     ^^^      ${text2}
   m(●‿●)m   
              ${text3}
`,
  bow: (text1 = "", text2 = "", text3 = "") => `
  ${text1}
     ^^^     
   \\(●‿●)/    ${text2}
    (   )   
              ${text3}
`,
  anyfin: (text1 = "", text2 = "") => `
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

  exanyfin: (text1 = "", text2 = "", text3 = "", h = "", h2 = "") => `
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
    stream.push(
      frames.anyfin("Hej 👋", "Today is my last day here ☹️  (potentially)")
    );
    await delay(600);
    stream.push(symbols.PAGE_BREAK);
    stream.push(
      frames.anyfin("Hej 🫲", "Today is my last day here ☹️  (potentially)")
    );
    await delay(600);
  }
  await delay(500);
  const messages = [
    "I am taking a six month leave to build a startup",
    "(Worst time 🤷‍♂️, I know 🤣)",
    "I wanted to take a moment to thank you and convey my deepest gratitude ❤️ ...",
  ];
  for (let i = 0; i < 5; i += 1) {
    stream.push(symbols.PAGE_BREAK);
    stream.push(frames.pointRight(...messages));
    await delay(800);
    stream.push(symbols.PAGE_BREAK);
    stream.push(frames.pointRightCloseEye(...messages));
    await delay(800);
  }
  stream.push(symbols.PAGE_BREAK);
  stream.push(frames.pointRight(...messages));
  await delay(1000);
};

const beginning = async (stream) => {
  stream.push(symbols.PAGE_BREAK);
  for (let i = 0; i < 4; i += 1) {
    const dots = new Array(i).fill(".").join("");
    stream.push(symbols.PAGE_BREAK);
    stream.push(frames.simple(`Feb 2019 ${dots}`));
    await delay(600);
  }
  await delay(500);
  const messages = [
    "I met Sven, Husse and Filip",
    "Instantly knew that I wanted to work here",
    "The passion, honesty and kindness was contagious. I was sold ✅",
  ];
  for (let i = 0; i < 3; i += 1) {
    stream.push(symbols.PAGE_BREAK);
    stream.push(frames.simple("Feb 2019 ..."));
    const lines = [];
    for (let m = 0; m <= i; m += 1) {
      lines.push(messages[m]);
    }
    stream.push(frames.smile(...lines));
    await delay(2000);
  }
  await delay(1500);
};

const grateful = async (stream) => {
  stream.push(symbols.PAGE_BREAK);
  const messages = [
    "Last four years, I am grateful for",
    "all the blind trust and opportunities",
    "I was given ❤️",
  ];
  for (let i = 0; i < 5; i += 1) {
    stream.push(symbols.PAGE_BREAK);
    stream.push(frames.bow(...messages));
    await delay(800);
    stream.push(symbols.PAGE_BREAK);
    stream.push(frames.bowDown(...messages));
    await delay(800);
  }
  stream.push(symbols.PAGE_BREAK);
  stream.push(frames.bow(...messages));
  await delay(1000);
};

const proudof = async (stream) => {
  stream.push(symbols.PAGE_BREAK);
  const messages = [
    "Things I am proud of",
    "- The amazing engineering team we have",
    "- The modern tech stack we built",
    `- Going from : 
    "I work at a fintech Anyfin. It's a startup in..." 
                       ⬇️ 
    "I work at Anyfin" and people recognising 🤯`,
  ];
  for (let i = 0; i < 4; i += 1) {
    stream.push(symbols.PAGE_BREAK);
    const lines = [];
    for (let m = 0; m <= i; m += 1) {
      lines.push(messages[m]);
    }
    stream.push(frames.proud(...lines));
    await delay(2000);
  }
  await delay(2000);
};

const miss = async (stream) => {
  stream.push(symbols.PAGE_BREAK);
  const messages = [
    "Things I will miss",
    "My people ❤️",
    "I am grateful to have worked with",
    `some of the kindest 🌟 brightest minds
            I am lucky to call them my friends`,
  ];
  for (let i = 0; i < 4; i += 1) {
    stream.push(symbols.PAGE_BREAK);
    const lines = [];
    for (let m = 0; m <= i; m += 1) {
      lines.push(messages[m]);
    }
    stream.push(frames.miss(...lines));
    await delay(2000);
  }
  await delay(2000);
};

const learning = async (stream) => {
  stream.push(symbols.PAGE_BREAK);
  const messages = [
    "Things I learnt here",
    "Be action oriented - Get stuff out always",
    "Everyone sees the problem - Find solutions not the problem",
    `Drive the change - You have more influence than you think`,
  ];
  for (let i = 0; i < 4; i += 1) {
    stream.push(symbols.PAGE_BREAK);
    const lines = [];
    for (let m = 0; m <= i; m += 1) {
      lines.push(messages[m]);
    }
    stream.push(frames.miss(...lines));
    await delay(2000);
  }
  await delay(2000);
};

const whatNext = async (stream) => {};

const contacts = async (stream) => {};

module.exports = async (stream) => {
  // await animHi(stream);
  // await beginning(stream);
  // await grateful(stream);
  // await proudof(stream);
  // await miss(stream);
  await learning(stream);
  await whatNext(stream);
  await contacts(stream);
  stream.push("\\n");
  stream.push(null);
};
