let myJokes = [
    {
        "category": "Christmas",
        "type": "twopart",
        "setup": "Why couldn't the skeleton go to the Christmas party?",
        "delivery": "Because he had no body to go with!",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 252,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "twopart",
        "setup": "Why did the programmer quit his job?",
        "delivery": "Because he didn't get arrays.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 16,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Pun",
        "type": "twopart",
        "setup": "The gas Argon walks into a bar.\nThe barkeeper says \"What would you like to drink?\"",
        "delivery": "But Argon doesn't react.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 148,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Dark",
        "type": "single",
        "joke": "I have a fish that can breakdance! Only for 20 seconds though, and only once.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 237,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Dark",
        "type": "twopart",
        "setup": "What did the cannibal do after he dumped his girlfriend?",
        "delivery": "He wiped his ass.",
        "flags": {
            "nsfw": true,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": true
        },
        "id": 158,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Misc",
        "type": "twopart",
        "setup": "Mom asked me where I'm taking her to go out to eat for mother's day.",
        "delivery": "I told her, \"We already have food in the house\".",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 88,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Pun",
        "type": "twopart",
        "setup": "Why did the chicken cross the road, roll in the mud and cross the road again?",
        "delivery": "He was a dirty double-crosser!",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 209,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Dark",
        "type": "twopart",
        "setup": "What's the difference between a baby and a pile of sand?",
        "delivery": "You can't pick a pile of sand up with a pitchfork.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": true
        },
        "id": 120,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "UDP is better in the COVID era since it avoids unnecessary handshakes.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 259,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "// This line doesn't actually do anything, but the code stops working when I delete it.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 12,
        "safe": true,
        "lang": "en"
    }
]
let i = Math.floor(Math.random()*myJokes.length-1)
joke.innerHTML = myJokes[i].joke