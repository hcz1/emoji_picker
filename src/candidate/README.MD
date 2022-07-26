Hi! Thanks for taking the time to look over my solution 😊  
Firstly I made this script to get all of the emojis and their names from the webpage supplied.

```javascript copy(
    [...document.querySelectorAll("tr")].reduce(
      (prev, curr) => [
        ...prev,
        ...(curr.querySelector(".chars")
          ? [
              {
                emoji: curr.querySelector(".chars").innerText,
                shortName: curr
                  .querySelector(".name")
                  .innerText.replaceAll(" ", "_"),
              },
            ]
          : []),
      ],
      []
    )
  );
```

Going through the list of requirements, I think I have achieved most of them (feel free to point out the ones I didn't)

- An emoji picker that's triggered where the user types a colon (:) character followed by 2 or more alphnumeric characters ✅
- The menu should remain open until either:
  - The user selects an emoji; ✅
  - The user types a space; ✅
  - The user types a character sequence that doesn't match an emoji; 🤔
  - The user moves the cursor to another part of the input; ❌
- When the user selects an emoji, it should be appended to the value of the input, replacing the string that triggered the picker ✅

Reasoning:

The user types a character sequence that doesn't match an emoji:  
_Technically_ the popper is still open, if the list partial match doesn't match anything in the list then the list returns null.

The user moves the cursor to another part of the input:  
Ran out of time, my thinking is to track the caret position and check `onKeyUp` and when it changes close the emoji selector.
