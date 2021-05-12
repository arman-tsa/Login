import React from 'react';
import { Text, TouchableOpacity, Animated, ActivityIndicator } from 'react-native';

//style
import { styles } from './CustomButtonStyle';

const CustomButton = ({
  text,
  btnStyle,
  textStyle,
  loading,
  onpress
}) => {

  const minScale = React.useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.timing(minScale, {
      toValue: 1,
      duration: 30,
      useNativeDriver: true
    }).start();
  }

  const finishAnimation = () => {
    Animated.timing(minScale, {
      toValue: 0,
      duration: 30,
      useNativeDriver: true
    }).start();
  }

  const scale = minScale.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.95]
  })

  return (
    <Animated.View style={[styles.btnCon, { transform: [{ scale: scale }] }]}>
      <TouchableOpacity
        onPress={onpress}
        onPressIn={startAnimation}
        onPressOut={finishAnimation}
        activeOpacity={1}
        style={[styles.container, btnStyle]}
        disabled={loading}
      >
        {
          loading
            ?
            <ActivityIndicator size="small" color="white" />
            :
            <Text style={[styles.text, textStyle]}>{text}</Text>
        }


      </TouchableOpacity>
    </Animated.View>
  );
}
export default CustomButton;
