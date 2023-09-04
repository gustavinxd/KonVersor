import { useContext, useState} from 'react';
import { TouchableOpacity, Text} from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import { Styles } from '../styles/GlobalStyles';
import { TextBold } from '../Fonts';

interface ButtonProps {
    onPress: () => void;
    title: string;
    isBlue?: boolean;
    isGray?: boolean;
    isBblue?: boolean;
    isResult?: boolean;
}

export default function Button({title, onPress, isBlue, isGray, isBblue, isResult}: ButtonProps) {
    const theme = useContext(ThemeContext);
    return (
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
            <TextBold
                text={title}
                style={
                    isBlue || isGray
                    ? Styles.smallTextLight
                    : isBblue
                    ? Styles.smallTextBlue
                    : theme === "dark"
                    ? Styles.smallTextLight
                    : Styles.smallTextDark
                }
            />
                
            
            
        </TouchableOpacity>
    );
}

