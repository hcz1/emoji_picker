import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Block } from "baseui/block";
import { emojis } from "../../emojiLookup";
import EmojiLine from "../EmojiLine";

const EmojiBox = ({ partialMatch, onEmojiSelect }) => {
  const filteredEmojis = useMemo(() => {
    return emojis.filter((emoji) =>
      emoji.shortName.includes(partialMatch.slice(1))
    );
  }, [partialMatch]);
  const [selected, setSelected] = useState(0);
  const handleUserKeyPress = useCallback(
    (e) => {
      switch (e.code) {
        case "ArrowUp":
          e.preventDefault();
          if (selected === 0) break;
          setSelected((prev) => prev - 1);
          break;
        case "ArrowDown":
          e.preventDefault();
          if (selected === filteredEmojis.length - 1) break;
          setSelected((prev) => prev + 1);
          break;
        case "Enter":
          onEmojiSelect(filteredEmojis[selected].emoji);
          break;
        default:
          break;
      }
    },
    [selected, filteredEmojis, onEmojiSelect]
  );
  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);

    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [handleUserKeyPress]);
  return filteredEmojis.length ? (
    <Block maxHeight={"200px"} overflow="scroll">
      {filteredEmojis.map((emoji, i) => {
        return (
          <EmojiLine
            key={emoji.shortName}
            isSelected={selected === i}
            emojiIcon={emoji.emoji}
            emojiName={emoji.shortName}
            onClick={onEmojiSelect}
          />
        );
      })}
    </Block>
  ) : null;
};

export default EmojiBox;
