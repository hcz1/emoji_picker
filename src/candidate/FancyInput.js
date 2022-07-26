import React, { useCallback, useState } from "react";
import { Popover } from "baseui/popover";
import { Input } from "baseui/Input";
import { useEmoji } from "./hooks/useEmoji";
import EmojiBox from "./components/EmojiBox";

function FancyInput({ placeholder }) {
  const [input, setInput] = useState("");
  const { isOpen, partialMatch, resetMatch, close } = useEmoji({ input });

  const handleEmojiSelect = (emoji) => {
    setInput((prev) => prev.replace(partialMatch, emoji));
    close();
    resetMatch();
  };
  const handleInputChange = useCallback((e) => {
    const {
      target: { value },
    } = e;
    setInput(value);
  }, []);

  return (
    <Popover
      autoFocus
      focusLock
      returnFocus
      isOpen={isOpen}
      onClickOutside={() => {
        close();
        resetMatch();
      }}
      content={() => (
        <EmojiBox
          partialMatch={partialMatch}
          onEmojiSelect={handleEmojiSelect}
        />
      )}
      placement="top"
    >
      <InputWithRef
        placeholder={placeholder}
        input={input}
        onInputChange={handleInputChange}
      />
    </Popover>
  );
}

export { FancyInput };

const InputWithRef = React.forwardRef((props, ref) => {
  const { placeholder, input, onInputChange } = props;
  return (
    <Input
      overrides={{
        Root: {
          props: { ref },
        },
      }}
      placeholder={placeholder}
      value={input}
      onChange={onInputChange}
    />
  );
});
