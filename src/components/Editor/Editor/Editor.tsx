import React, { useEffect, useState } from 'react';
import { useAppSelector } from '@/hooks/redux';
import { preview } from 'vite';
import { array } from 'yup';
import slice from '@/store/reducers/editorTabs/slice';

export function Editor() {
  const [code, setCode] = useState<Array<Array<string>>>([['']]);
  const [activeLine, setActiveLine] = useState(0);
  const [activeLineSymbol, setActiveLineSymbol] = useState(0);
  const [activeLineWord, setActiveLineWord] = useState(0);
  const { tabs, activeTabId } = useAppSelector((state) => state.editorTab);
  const [isFocus, setIsFocus] = useState(false);
  const [requestCode, setRequestCode] = useState('');

  let height = activeLine * 20;
  let left = activeLineSymbol * 9.7;
  useEffect(() => {
    height = activeLine * 24;
    const lineLength = getActiveLineLength();
    if (lineLength < activeLineSymbol) {
      setActiveLineSymbol(lineLength);
    }
  }, [activeLine]);
  useEffect(() => {
    left = activeLineSymbol * 9;
  }, [activeLineSymbol]);

  useEffect(() => {
    const item = tabs.find((item) => item.id == activeTabId);
    if (item) {
      setRequestCode(item.requestCode);
    }
  }, [activeTabId]);

  const focusEvent = () => {
    setIsFocus(true);
  };

  const blurEvent = () => {
    setIsFocus(false);
  };

  const test = () => {
    console.log(window.getSelection());
  };

  const updateCode = (newCodeArray: Array<Array<string>>) => {
    setCode(newCodeArray);
  };

  const getActiveLineLength = () => {
    return code[activeLine].reduce((acc, item) => acc + item.length, 0);
  };

  const getCurrentWord = () => {
    const currentLine = code[activeLine];
    let sumLength = 0;
    let word = 0;
    do {
      sumLength += currentLine[word].length;
      word += 1;
    } while (sumLength < activeLineSymbol);
    return {
      word,
      position: currentLine[word - 1].length - (sumLength - activeLineSymbol),
    };
  };

  const addNewLetter = (letter: string) => {
    let newCodeArray;
    const { word, position } = getCurrentWord();
    if (letter === ' ') {
      newCodeArray = code.map((item, index) => {
        if (index === activeLine) {
          const itemArray = [
            ...item.slice(0, word - 1),
            item[word - 1].slice(0, position),
            ' ',
            item[word - 1].slice(position),
            ...item.slice(word),
          ];
          return itemArray;
        }
        return item;
      });
      setActiveLineWord((prevState) => prevState + 1);
    } else {
      newCodeArray = code.map((item, index) => {
        if (index === activeLine) {
          let addToCount = 0;
          if (item[word - 1] === ' ') {
            addToCount += 1;
          }
          const newLineArray = item[word + addToCount - 1].split('');
          newLineArray.splice(position, 0, letter);
          const newLine = newLineArray.join('');
          const newItem = [
            ...item.slice(0, word - 1 + addToCount),
            newLine,
            ...item.slice(word + addToCount),
          ];
          setActiveLineWord(word - 1 + addToCount);
          return newItem;
        }
        return item;
      });
    }
    setActiveLineSymbol((prevState) => prevState + 1);
    updateCode(newCodeArray);
  };

  const addNewLine = () => {
    const newArray = [...code.slice(0, activeLine + 1), [''], ...code.slice(activeLine + 1)];
    setActiveLine((prevState) => prevState + 1);
    setActiveLineWord(0);
    setActiveLineSymbol(0);
    updateCode(newArray);
  };

  const arrowNavigation = (key: string) => {
    switch (key) {
      case 'ArrowUp':
        setActiveLine(activeLine - 1 >= 0 ? activeLine - 1 : activeLine);
        break;
      case 'ArrowDown':
        setActiveLine(activeLine + 2 > code.length ? activeLine : activeLine + 1);
        break;
      case 'ArrowLeft':
        setActiveLineSymbol(activeLineSymbol - 1 >= 0 ? activeLineSymbol - 1 : activeLineSymbol);
        break;
      case 'ArrowRight':
        setActiveLineSymbol(
          activeLineSymbol + 1 > getActiveLineLength() ? activeLineSymbol : activeLineSymbol + 1
        );
        break;
      case 'Home':
        setActiveLineSymbol(0);
        break;
      case 'End':
        setActiveLineSymbol(getActiveLineLength());

        break;
    }
  };

  const deleteSymbol = () => {
    const lineLength = getActiveLineLength();
    const { word, position } = getCurrentWord();
    if (lineLength === 0) {
      if (activeLine === 0) {
        return;
      }
      const newArray = code.filter((item, index) => index !== activeLine);
      const newActiveLine = activeLine - 1 >= 0 ? activeLine - 1 : activeLine;
      setCode(newArray);
      setActiveLine(newActiveLine);
      setActiveLineSymbol(getActiveLineLength());
    } else {
      if (activeLineSymbol !== 0) {
        const newArray = code.map((item, index) => {
          if (index === activeLine) {
            const newString = [
              ...item[word - 1].slice(0, position - 1),
              ...item[word - 1].slice(position),
            ].join('');
            let newLine;
            if (newString) {
              newLine = [...item.slice(0, word - 1), newString, ...item.slice(word)];
            } else if (activeLine === 0 && activeLineSymbol === 1) {
              newLine = [''];
            } else {
              newLine = [...item.slice(0, word - 1), ...item.slice(word)];
            }
            setActiveLineSymbol((prevState) => prevState - 1);
            console.log(newLine);
            return newLine;
          }
          return item;
        });
        updateCode(newArray);
      }
    }
  };

  const inputEvent = async (e: React.KeyboardEvent) => {
    if (isFocus) {
      if ((e.ctrlKey || e.metaKey) && (e.key === 'v' || e.key === 'м')) {
        navigator.clipboard.readText().then((text) => {
          const strings = text.split(/\r?\n/);
          const words = strings.map((st) => st.replace(/ /g, '  ').split(/\s/));
          words.forEach(
            (word, index, arr) =>
              (arr[index] = word.map((elem) => (elem.length == 0 ? elem.replace('', ' ') : elem)))
          );
          const copyCode = JSON.parse(JSON.stringify(code));
          const { word, position } = getCurrentWord();
          console.log(copyCode);

          if (copyCode.length == 1 && copyCode[0] == '') {
            setCode(words);
            setActiveLine(words.length - 1);
          } else if (copyCode.length - 1 == activeLine) {
            copyCode.push(words);
            setCode(copyCode);
            setActiveLine(copyCode.length - 1);
          } else {
            const newCodeArray = copyCode
              .slice(0, activeLine)
              .concat([
                ...copyCode[activeLine].slice(0, word),
                words[0],
                ...copyCode[activeLine].slice(word + 1),
              ])
              .concat(words.slice(1))
              .concat(copyCode.slice(activeLine));

            setCode(newCodeArray);
          }
        });
      } else {
        if (e.key.length === 1) {
          addNewLetter(e.key);
        } else {
          if (e.key === 'Enter') {
            addNewLine();
          }
          if (e.key.includes('Arrow')) {
            arrowNavigation(e.key);
          }
          if (e.key === 'Backspace') {
            deleteSymbol();
          }

          if (e.key === 'Home') {
            arrowNavigation(e.key);
          }
          if (e.key === 'End') {
            arrowNavigation(e.key);
          }
        }
      }
    }
  };
  return (
    <div
      tabIndex={0}
      className="text-black min-h-[500px] h-full grow relative font-SourceCodePro leading-5 outline-0 cursor-text"
      onFocus={focusEvent}
      onBlur={blurEvent}
      onKeyDown={inputEvent}
    >
      {code.map((item, index) => (
        <div
          className="min-h-[20px] whitespace-pre cursor-text truncate"
          key={index}
          data-line={index}
          onClick={test}
        >
          {item.map((element, indexLetter) => (
            <span key={indexLetter} data-letter={indexLetter}>
              {element}
            </span>
          ))}
        </div>
      ))}
      <div
        className={`absolute h-[24px] w-[2px] bg-black animate-blink-cursor ${
          isFocus ? 'visible' : 'hidden'
        }`}
        style={{ top: `${height}px`, left: `${left}px` }}
      />
    </div>
  );
}
