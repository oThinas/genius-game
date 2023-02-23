import { forwardRef } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';

interface IGeniusButtonProps extends TouchableOpacityProps {
  color: string;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  active: boolean;
}

export function GeniusButton(props: IGeniusButtonProps) {
    const buttonStyle = {
      backgroundColor: props.color,
      borderTopLeftRadius: props.position === 'top-left' ? 9999 : 0,
      borderTopRightRadius: props.position === 'top-right' ? 9999 : 0,
      borderBottomLeftRadius: props.position === 'bottom-left' ? 9999 : 0,
      borderBottomRightRadius: props.position === 'bottom-right' ? 9999 : 0,
      opacity: props.active ? 0.7 : 1,
    }
    
    return (
      <TouchableOpacity
        style={[styles.button, buttonStyle]}
        activeOpacity={0.7}
        {...props}
      />
    );
};
