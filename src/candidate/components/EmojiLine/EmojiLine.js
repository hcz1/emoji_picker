import { useStyletron } from "baseui";
import { Block } from "baseui/block";

const EmojiLine = ({ emojiIcon, emojiName, isSelected, onClick }) => {
  const [css] = useStyletron();
  return (
    <Block
      className={css({
        padding: "5px",
        backgroundColor: "white",
        ":hover": { backgroundColor: "blue", color: "white" },
        ...(isSelected && { backgroundColor: "blue", color: "white" }),
      })}
      onClick={() => {
        onClick(emojiIcon);
      }}
    >
      <span
        className={css({
          marginRight: "5px",
        })}
      >
        {emojiIcon}
      </span>
      <span>{emojiName}</span>
    </Block>
  );
};
export default EmojiLine;
