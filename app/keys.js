// https://gist.github.com/rickyzhang82/8581a762c9f9fc6ddb8390872552c250
// https://github.com/torvalds/linux/blob/master/include/uapi/linux/input-event-codes.h
const keys = [
  {
    keyCode: 0,
    keyName: "Reserved",
    timesClicked: 0,
  },
  {
    keyCode: 1,
    keyName: "Esc",
    timesClicked: 0,
  },
  {
    keyCode: 2,
    keyName: "1",
    timesClicked: 0,
  },
  {
    keyCode: 3,
    keyName: "2",
    timesClicked: 0,
  },
  {
    keyCode: 4,
    keyName: "3",
    timesClicked: 0,
  },
  {
    keyCode: 5,
    keyName: "4",
    timesClicked: 0,
  },
  {
    keyCode: 6,
    keyName: "5",
    timesClicked: 0,
  },
  {
    keyCode: 7,
    keyName: "6",
    timesClicked: 0,
  },
  {
    keyCode: 8,
    keyName: "7",
    timesClicked: 0,
  },
  {
    keyCode: 9,
    keyName: "8",
    timesClicked: 0,
  },
  {
    keyCode: 10,
    keyName: "9",
    timesClicked: 0,
  },
  {
    keyCode: 11,
    keyName: "0",
    timesClicked: 0,
  },
  {
    keyCode: 12,
    keyName: "-",
    timesClicked: 0,
  },
  {
    keyCode: 13,
    keyName: "=",
    timesClicked: 0,
  },
  {
    keyCode: 14,
    keyName: "Backspace",
    timesClicked: 0,
  },
  {
    keyCode: 15,
    keyName: "Tab",
    timesClicked: 0,
  },
  {
    keyCode: 16,
    keyName: "Q",
    timesClicked: 0,
  },
  {
    keyCode: 17,
    keyName: "W",
    timesClicked: 0,
  },
  {
    keyCode: 18,
    keyName: "E",
    timesClicked: 0,
  },
  {
    keyCode: 19,
    keyName: "R",
    timesClicked: 0,
  },
  {
    keyCode: 20,
    keyName: "T",
    timesClicked: 0,
  },
  {
    keyCode: 21,
    keyName: "Y",
    timesClicked: 0,
  },
  {
    keyCode: 22,
    keyName: "U",
    timesClicked: 0,
  },
  {
    keyCode: 23,
    keyName: "I",
    timesClicked: 0,
  },
  {
    keyCode: 24,
    keyName: "O",
    timesClicked: 0,
  },
  {
    keyCode: 25,
    keyName: "P",
    timesClicked: 0,
  },
  {
    keyCode: 26,
    keyName: "{",
    timesClicked: 0,
  },
  {
    keyCode: 27,
    keyName: "}",
    timesClicked: 0,
  },
  {
    keyCode: 28,
    keyName: "Enter",
    timesClicked: 0,
  },
  {
    keyCode: 29,
    keyName: "LeftControl",
    timesClicked: 0,
  },
  {
    keyCode: 30,
    keyName: "A",
    timesClicked: 0,
  },
  {
    keyCode: 31,
    keyName: "S",
    timesClicked: 0,
  },
  {
    keyCode: 32,
    keyName: "D",
    timesClicked: 0,
  },
  {
    keyCode: 33,
    keyName: "F",
    timesClicked: 0,
  },
  {
    keyCode: 34,
    keyName: "G",
    timesClicked: 0,
  },
  {
    keyCode: 35,
    keyName: "H",
    timesClicked: 0,
  },
  {
    keyCode: 36,
    keyName: "J",
    timesClicked: 0,
  },
  {
    keyCode: 37,
    keyName: "K",
    timesClicked: 0,
  },
  {
    keyCode: 38,
    keyName: "L",
    timesClicked: 0,
  },
  {
    keyCode: 39,
    keyName: ";",
    timesClicked: 0,
  },
  {
    keyCode: 40,
    keyName: "'",
    timesClicked: 0,
  },
  {
    keyCode: 41,
    keyName: "`",
    timesClicked: 0,
  },
  {
    keyCode: 42,
    keyName: "LeftShift",
    timesClicked: 0,
  },
  {
    keyCode: 43,
    keyName: "\\",
    timesClicked: 0,
  },
  {
    keyCode: 44,
    keyName: "Z",
    timesClicked: 0,
  },
  {
    keyCode: 45,
    keyName: "X",
    timesClicked: 0,
  },
  {
    keyCode: 46,
    keyName: "C",
    timesClicked: 0,
  },
  {
    keyCode: 47,
    keyName: "V",
    timesClicked: 0,
  },
  {
    keyCode: 48,
    keyName: "B",
    timesClicked: 0,
  },
  {
    keyCode: 49,
    keyName: "N",
    timesClicked: 0,
  },
  {
    keyCode: 50,
    keyName: "M",
    timesClicked: 0,
  },
  {
    keyCode: 51,
    keyName: ",",
    timesClicked: 0,
  },
  {
    keyCode: 52,
    keyName: ".",
    timesClicked: 0,
  },
  {
    keyCode: 53,
    keyName: "/",
    timesClicked: 0,
  },
  {
    keyCode: 54,
    keyName: "RightShift",
    timesClicked: 0,
  },
  {
    keyCode: 55,
    keyName: "KP*",
    timesClicked: 0,
  },
  {
    keyCode: 56,
    keyName: "LeftAlt",
    timesClicked: 0,
  },
  {
    keyCode: 57,
    keyName: "Space",
    timesClicked: 0,
  },
  {
    keyCode: 58,
    keyName: "CapsLock",
    timesClicked: 0,
  },
  {
    keyCode: 59,
    keyName: "F1",
    timesClicked: 0,
  },
  {
    keyCode: 60,
    keyName: "F2",
    timesClicked: 0,
  },
  {
    keyCode: 61,
    keyName: "F3",
    timesClicked: 0,
  },
  {
    keyCode: 62,
    keyName: "F4",
    timesClicked: 0,
  },
  {
    keyCode: 63,
    keyName: "F5",
    timesClicked: 0,
  },
  {
    keyCode: 64,
    keyName: "F6",
    timesClicked: 0,
  },
  {
    keyCode: 65,
    keyName: "F7",
    timesClicked: 0,
  },
  {
    keyCode: 66,
    keyName: "F8",
    timesClicked: 0,
  },
  {
    keyCode: 67,
    keyName: "F9",
    timesClicked: 0,
  },
  {
    keyCode: 68,
    keyName: "F10",
    timesClicked: 0,
  },
  {
    keyCode: 69,
    keyName: "NumLock",
    timesClicked: 0,
  },
  {
    keyCode: 70,
    keyName: "ScrollLock",
    timesClicked: 0,
  },
  {
    keyCode: 71,
    keyName: "7 KP",
    timesClicked: 0,
  },
  {
    keyCode: 72,
    keyName: "8 KP",
    timesClicked: 0,
  },
  {
    keyCode: 73,
    keyName: "9 KP",
    timesClicked: 0,
  },
  {
    keyCode: 74,
    keyName: "- KP",
    timesClicked: 0,
  },
  {
    keyCode: 75,
    keyName: "4 KP",
    timesClicked: 0,
  },
  {
    keyCode: 76,
    keyName: "5 KP",
    timesClicked: 0,
  },
  {
    keyCode: 77,
    keyName: "6 KP",
    timesClicked: 0,
  },
  {
    keyCode: 78,
    keyName: "+ KP",
    timesClicked: 0,
  },
  {
    keyCode: 79,
    keyName: "1 KP",
    timesClicked: 0,
  },
  {
    keyCode: 80,
    keyName: "2 KP",
    timesClicked: 0,
  },
  {
    keyCode: 81,
    keyName: "3 KP",
    timesClicked: 0,
  },
  {
    keyCode: 82,
    keyName: "0 KP",
    timesClicked: 0,
  },
  {
    keyCode: 83,
    keyName: ". KP",
    timesClicked: 0,
  },
  // For some reason, this doesn't exists
  // {
  //   keyCode: 84,
  //   keyName: "G",
  //   timesClicked: 0,
  // },
  {
    keyCode: 85,
    keyName: "KEY_ZENKAKUHANKAKU",
    timesClicked: 0,
  },
  {
    keyCode: 86,
    keyName: "KEY_102ND",
    timesClicked: 0,
  },
  {
    keyCode: 87,
    keyName: "F11",
    timesClicked: 0,
  },
  {
    keyCode: 88,
    keyName: "F12",
    timesClicked: 0,
  },
  {
    keyCode: 89,
    keyName: "KEY_RO",
    timesClicked: 0,
  },
  {
    keyCode: 90,
    keyName: "KEY_KATAKANA",
    timesClicked: 0,
  },
  {
    keyCode: 91,
    keyName: "KEY_HIRAGANA",
    timesClicked: 0,
  },
  {
    keyCode: 92,
    keyName: "KEY_HENKAN",
    timesClicked: 0,
  },
  {
    keyCode: 93,
    keyName: "KEY_KATAKANAHIRAGANA",
    timesClicked: 0,
  },
  {
    keyCode: 94,
    keyName: "KEY_MUHENKAN",
    timesClicked: 0,
  },
  {
    keyCode: 95,
    keyName: "KEY_KPJPCOMMA",
    timesClicked: 0,
  },
  {
    keyCode: 96,
    keyName: "KEY_KPENTER",
    timesClicked: 0,
  },
  {
    keyCode: 97,
    keyName: "RightControl",
    timesClicked: 0,
  },
  {
    keyCode: 98,
    keyName: "/ KP",
    timesClicked: 0,
  },
  {
    keyCode: 99,
    keyName: "KEY_SYSRQ",
    timesClicked: 0,
  },
  {
    keyCode: 100,
    keyName: "RightAlt",
    timesClicked: 0,
  },
  {
    keyCode: 101,
    keyName: "LineFeed",
    timesClicked: 0,
  },
  {
    keyCode: 102,
    keyName: "Home",
    timesClicked: 0,
  },
  {
    keyCode: 103,
    keyName: "UpArrow",
    timesClicked: 0,
  },
  {
    keyCode: 104,
    keyName: "PageUp",
    timesClicked: 0,
  },
  {
    keyCode: 105,
    keyName: "LeftArrow",
    timesClicked: 0,
  },
  {
    keyCode: 106,
    keyName: "RightArrow",
    timesClicked: 0,
  },
  {
    keyCode: 107,
    keyName: "End",
    timesClicked: 0,
  },
  {
    keyCode: 108,
    keyName: "DownArrow",
    timesClicked: 0,
  },
  {
    keyCode: 109,
    keyName: "PageDown",
    timesClicked: 0,
  },
  {
    keyCode: 110,
    keyName: "Insert",
    timesClicked: 0,
  },
  {
    keyCode: 111,
    keyName: "Delete",
    timesClicked: 0,
  },
  {
    keyCode: 112,
    keyName: "Macro",
    timesClicked: 0,
  },
  {
    keyCode: 113,
    keyName: "Mute",
    timesClicked: 0,
  },
  {
    keyCode: 114,
    keyName: "VolumeDown",
    timesClicked: 0,
  },
  {
    keyCode: 115,
    keyName: "VolumeUp",
    timesClicked: 0,
  },
];
