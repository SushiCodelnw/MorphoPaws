export const list1 = [
  {
    character: { name: "shin", reaction: "normal", size: "800*1000" },
    background: "street",
    speaker: "ชิน",
    word: "โอ้ยยยย ข้อสอบวันนี้นี่มันยากจริงๆเลย... รีบกลับบ้านดีกว่า",
  },
  {
    character: { name: "shin", reaction: "see-right", size: "800*1000" },
    background: "street",
    speaker: "ชิน",
    word: "โว๊ะ นั่นอะไรน่ะ? กล่องกระดาษเหรอ? สงสัยจังว่าอะไรอยู่ข้างใน...",
  },
  {
    character: "",
    background: "dog",
    speaker: "ชิน",
    word: "เชี่ย! มีลูกหมาอยู่ข้างในด้วย!",
    nextList: "list2",
  },
];

export const list2 = [
  {
    character: "",
    background: "dog",
    speaker: "ชิน",
    word: "ฉันยิ่งชอบหมาอยู่ด้วยสิ... เอาไงกับมันดีนะ?",
    choices: [
      {
        word: "เก็บมันมาเลี้ยง",
        nextList: "list3",
      },
      {
        word: "ปล่อยมันไว้อย่างงั้นแหละ",
        nextList: "list2No2",
      },
      {
        word: "โทรหาศูนย์ช่วยเหลือสัตว์",
        nextList: "list2No3",
      },
    ],
  },
];

export const list2No2 = [
  {
    character: "",
    background: "dog",
    speaker: "ชิน",
    word: "ไม่ๆๆๆ จะทิ้งมันไว้ได้ไงน่าสงสารจะตาย",
    choices: [
      {
        word: "เก็บมันมาเลี้ยง",
        nextList: "list3",
      },
      {
        word: "โทรหาศูนย์ช่วยเหลือสัตว์",
        nextList: "list2No2No3",
      },
    ],
  },
];
export const list2No2No3 = [
  {
    character: "",
    background: "dog",
    speaker: "ชิน",
    word: "ไม่รู้เบอร์ว่ะ",
    choices: [
      {
        word: "เก็บมันมาเลี้ยง",
        nextList: "list3",
      },
    ],
  },
];
export const list2No3 = [
  {
    character: "",
    background: "dog",
    speaker: "ชิน",
    word: "ไม่รู้เบอร์ว่ะ",
    choices: [
      {
        word: "เก็บมันมาเลี้ยง",
        nextList: "list3",
      },
      {
        word: "ปล่อยมันไว้อย่างงั้นแหละ",
        nextList: "list2No3No2",
      },
    ],
  },
];
export const list2No3No2 = [
  {
    character: "",
    background: "dog",
    speaker: "ชิน",
    word: "ไม่ๆๆๆ จะทิ้งมันไว้ได้ไงน่าสงสารจะตาย",
    choices: [
      {
        word: "เก็บมันมาเลี้ยง",
        nextList: "list3",
      },
    ],
  },
];

export const list3 = [
  {
    character: { name: "shin", reaction: "normal", size: "800*1000" },
    background: "street",
    speaker: "ชิน",
    word: "โอเค ฉันจะเก็บเจ้านี้มาเลี้ยงเอง",
  },
  {
    character: { name: "shin", reaction: "angry", size: "800*1000" },
    background: "street",
    speaker: "ชิน",
    word: "ใครมันอำมหิตเลวทรามต่ำช้าชั่วช้าใจหมาขนาดนี้ แต่เดี๋ยวฉันพาเจอนี้ไปอยู่ด้วย",
  },
  {
    character: { name: "shin", reaction: "normal", size: "800*1000" },
    background: "street",
    speaker: "ชิน",
    word: "เห.. มีใบกระดาษอยู่ในกล่องด้วย.. เขียนว่า ซูชิ",
  },
  {
    character: { name: "shin", reaction: "normal", size: "800*1000" },
    background: "street",
    speaker: "ชิน",
    word: "งั้นหรอ นายชื่อซูชิสินะ ไปกันเถอะ ซูชิ!!",
  },
  {
    character: { name: "shin", reaction: "normal", size: "800*1000" },
    background: "street",
    speaker: "ชิน",
    word: "ก่อนอื่น... คงต้องหาข้าวให้มันกินก่อน",
  },
  {
    character: { name: "shin", reaction: "normal", size: "800*1000" },
    background: "street",
    speaker: "ชิน",
    word: "ไปซื้ออาหารหมาดีกว่า",
  },
  {
    character: { name: "shin", reaction: "normal", size: "800*1000" },
    background: "store",
    speaker: "ชิน",
    word: "สวัสดีคร้าบบบบบบ มีใครอยู่มั้ยฮะ",
  },
  {
    character: { name: "chan", reaction: "normal", size: "800*1000" },
    background: "store",
    speaker: "...",
    word: "หวัสดีจ่ะหลาน! เอาอะไรดีล่ะ?",
  },
  {
    character: { name: "shin", reaction: "normal", size: "800*1000" },
    background: "store",
    speaker: "ชิน",
    word: "เอาเป็นอาหารหมา... พี่แนะนำได้ไหมครับว่าเอาแบบไหนดี",
  },
  {
    character: { name: "chan", reaction: "normal" , size: "800*1000"},
    background: "store",
    speaker: "...",
    word: "พี่เพ่ออะไร ลุงอายุ 80 กว่าแล้วเนี่ย ลุงชื่อจันทร์นะ",
  },
  {
    character: { name: "chan", reaction: "normal" , size: "800*1000"},
    background: "store",
    speaker: "ลุงจันทร์",
    word: "แล้วก็ ลุงมีนี่แนะนำนะ อาหารหมาจากญี่ปุ่น ปกติเหมือนจะขายกันหลายร้อยเลยนะ แต่ลุงได้มาฟรีน่ะ เมื่อวานเพื่อนลุงซื้อมาฝาก งั้นลุงขายแค่ 100 เดียวจ่ะ",
  },
  {
    character: { name: "shin", reaction: "normal", size: "800*1000" },
    background: "store",
    speaker: "ชิน",
    word: "โอ้ววว ลุงใจดีจัง ขอบคุณมากนะครับลุง",
  },
  {
    character: { name: "chan", reaction: "normal", size: "800*1000" },
    background: "store",
    speaker: "ลุงจันทร์",
    word: "ไม่เป็นไรจ่ะ โชคดีนะ ว่าแต่หมาตัวนั้นมันชื่อไรล่ะ",
  },
  {
    character: { name: "shin", reaction: "normal", size: "800*1000" },
    background: "store",
    speaker: "ชิน",
    word: "มันชื่อซูชิครับ ผมก็เพิ่งได้มานี่แหละครับ",
  },
  {
    character: { name: "chan", reaction: "normal", size: "800*1000" },
    background: "store",
    speaker: "ลุงจันทร์",
    word: "อ๋อ มือใหม่เหรอเนี่ย โชคดีนะเลี้ยงมันดีๆล่ะ",
  },
  {
    character: { name: "shin", reaction: "normal", size: "800*1000" },
    background: "store",
    speaker: "ชิน",
    word: "ครับ ขอบคุณครับ แล้วเจอกันนะครับ",
  },
  {
    character: { name: "shin", reaction: "normal", size: "800*1000" },
    background: "store",
    speaker: "ชิน",
    word: "เอาแหละ ได้เวลากลับบ้านกันแล้ว!!",
  },
  {
    character: "",
    background: "home",
    speaker: "ชิน",
    word: "เฮ้อ... ถึงบ้านสักที รอแป๊บนะ",
  },
  {
    character: { name: "shin", reaction: "normal", size: "800*1000" },
    background: "bedroom",
    speaker: "ชิน",
    word: "เดี๋ยวฉันจะเทข้าวให้กินนะ",
  },
  {
    character: "",
    background: "dogeat",
    speaker: "ซูชิ",
    word: "ง่ำๆๆๆๆๆ",
  },
  {
    character: "",
    background: "dogeatbright",
    speaker: "ชิน",
    word: "เห้ย! เกิดอะไรขึ้นเนี่ย?",
  },
  {
    character: "",
    background: "dogeatverybright",
    speaker: "ชิน",
    word: "อ้าาาาาา!!!",
  },
  {
    character: { name: "shin", reaction: "normal", size: "800*1000" },
    background: "bedroom",
    speaker: "ชิน",
    word: "ว๊าา! อะไรเนี่ย!!",
  },
  {
    character: { name: "sushi", reaction: "surprised1", size: "800*1000" },
    background: "bedroom",
    speaker: "ซูชิ",
    word: "สะ.. สูงจัง",
  },
  {
    character: { name: "shin", reaction: "surprised", size: "1000*1000" },
    background: "bedroom",
    speaker: "ชิน",
    word: ".",
  },
  {
    character: { name: "sushi", reaction: "surprised1", size: "800*1000" },
    background: "bedroom",
    speaker: "ซูชิ",
    word: "..",
  },
  {
    character: { name: "shin", reaction: "surprised", size: "1000*1000" },
    background: "bedroom",
    speaker: "ชิน",
    word: "...",
  },
  {
    character: { name: "sushi", reaction: "surprised1", size: "800*1000" },
    background: "bedroom",
    speaker: "ซูชิ",
    word: "....",
  },
  {
    character: { name: "shin", reaction: "surprised", size: "1000*1000" },
    background: "bedroom",
    speaker: "ชิน",
    word: "นี่มัน... อะไรกันล่ะเนี่ย? น่ะ...นาย.. เป็นคน? งั้นหรอ?",
  },
  {
    character: { name: "sushi", reaction: "surprised2", size: "800*1000" },
    background: "bedroom",
    speaker: "ซูชิ",
    word: "ฉันก็ไม่รู้วววววว ทำไมอยู่ดีๆฉันกลายเป็นเหมือนนายล่ะเนี่ย",
  },
  {
    character: { name: "shin", reaction: "surprised", size: "1000*1000" },
    background: "bedroom",
    speaker: "ชิน",
    word: "อะไรกันล่ะเนี่ย (แต่... ตอนเป็นหมาก็น่ารักอยู่แล้วนะ ทะ..ทำไมตอนนายกลายเป็นคนมันก็....)",
  },
  {
    character: { name: "shin", reaction: "normal", size: "800*1000" },
    background: "bedroom",
    speaker: "ชิน",
    word: "หรือว่าจะเป็นเพราะอาหารหมาที่ลุงให้มากันนะ เพราะหลังจากที่นายกิน นายก็กลายเป็นคนเลยในอีกไม่กี่วินาทีตอนมา",
  },
  {
    character: { name: "shin", reaction: "normal", size: "800*1000" },
    background: "bedroom",
    speaker: "ชิน",
    word: "ถึงจะยังไม่เข้าใจก็เหอะ แต่นายต้องอยู่กับฉันไปก่อนล่ะนะ",
  },
  {
    character: { name: "SushiCodelnw", reaction: "Dog", size: "600*600" },
    background: "bedroom",
    speaker: "ซูชิ(Codelnw)",
    word: "จ๊ะเอ๋ จบบทแรกจ้า ส่วนบทสองก็ Coming soon.....",
  },
];
