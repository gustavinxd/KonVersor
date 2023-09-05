import { useContext, useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';
import { Styles } from '../../styles/GlobalStyles';
import { TextBold } from '../../Fonts';

// declarando os button propos
interface ButtonProps {
  onPress: () => void;
  title: string;
  isBlue?: boolean;
  isGray?: boolean;
  isBblue?: boolean;
  isResult?: boolean;
}

// exportando as funcoes dos botoes
export default function Button({
  title,
  onPress,
  isBlue,
  isGray,
  isBblue,
  isResult
}: ButtonProps) {
  // esse theme seria utilizado para o darktheme que esta funcional no código porem nao foi adicionado no figma
  const theme = useContext(ThemeContext);
  return (
    // pressionavel do botao
    <TouchableOpacity
      style={
        isBlue
          ? Styles.btnBluee
          : isGray
          ? Styles.btnGray
          : isBblue
          ? Styles.btnGray
          : isResult
          ? Styles.btnGray2
          : theme === 'light'
          ? Styles.btnLight
          : Styles.btnDark
      }
      onPress={onPress}
    >
      {/* texto que vai dentro do botao  */}
      <TextBold
        text={title}
        style={
          isBlue || isGray
            ? Styles.smallTextLight
            : isBblue
            ? Styles.smallTextBlue
            : theme === 'dark'
            ? Styles.smallTextLight
            : Styles.smallTextDark
        }
      />
    </TouchableOpacity>
  );
}
