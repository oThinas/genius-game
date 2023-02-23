import { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { GeniusButton } from './GeniusButton';

import { styles } from './styles';

const colors = ['green', 'red', 'yellow', 'blue'];

export function Genius() {
  const [hasGameStarted, setHasGameStarted] = useState(false);
  const [onWatchPhase, setOnWatchPhase] = useState(false);
  const [onPlayPhase, setOnPlayPhase] = useState(false);

  const [sequence, setSequence] = useState<string[]>([]);
  const [buttonsPressedOnRound, setButtonsPressedOnRound] = useState(0);
  
  const [topScore, setTopScore] = useState(0);
  const [message, setMessage] = useState('Iniciar');

  const [activeButton, setActiveButton] = useState({
    green: false,
    red: false,
    yellow: false,
    blue: false,
  });

  function handleGameOver() {
    if (sequence.length - 1 > topScore) setTopScore(sequence.length - 1);
    setHasGameStarted(false);
    setSequence([]);
    setButtonsPressedOnRound(0);
  }

  function handleButtonPress(color: string) {
    if (color === sequence[buttonsPressedOnRound]) {
      if (buttonsPressedOnRound === sequence.length - 1) {
        setTimeout(() => {
          setButtonsPressedOnRound(0);
          generateSequence();
        }, 500)
      } else {
        setButtonsPressedOnRound(buttonsPressedOnRound + 1);
      }
    } else {
      setMessage('Perdeu');
      handleGameOver();
    }
  }

  function generateSequence() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const newSequence = [...sequence, colors[randomIndex]];
    setSequence(newSequence);
  }

  function handleStartGame() {
    setHasGameStarted(true);
    generateSequence();
  }

  useEffect(() => {
    console.log('sequence: ', sequence);
    if (sequence.length) {
      (function playSequence(index: number) {
        setMessage('Atenção');
        setOnWatchPhase(true);
        setOnPlayPhase(false);
        setTimeout(() => {
          setActiveButton({ ...activeButton, [sequence[index]]: true });
          
          setTimeout(() => {
            setActiveButton({ ...activeButton, [sequence[index]]: false });
            if (index < sequence.length - 1) playSequence(index + 1);

            setTimeout(() => {
              setOnWatchPhase(false);
              setOnPlayPhase(true);
            }, 600 * sequence.length);
          }, 300);
        }, 300);
      })(0)
    }
  }, [sequence])

  useEffect(() => {
    if (onWatchPhase) setMessage('Atenção');
    if (onPlayPhase) setMessage(String(sequence.length - 1));
  }, [onWatchPhase, onPlayPhase]);

  return (
    <View style={styles.container}>
      <Text style={styles.score}>
        Top Score: {topScore || 'Nenhum'}
        {topScore && !hasGameStarted ? '\nClique no botão central para reiniciar' : ''}
      </Text>

      <View style={styles.board}>
        <View style={styles.row}>
          <GeniusButton
            color='green'
            position='top-left'
            disabled={!hasGameStarted || onWatchPhase}
            onPress={() => handleButtonPress('green')}
            active={activeButton.green}
          />

          <GeniusButton
            color='red'
            position='top-right'
            disabled={!hasGameStarted || onWatchPhase}
            onPress={() => handleButtonPress('red')}
            active={activeButton.red}
          />
        </View>

        <View style={styles.playButton}>
          <TouchableOpacity activeOpacity={0.7} onPress={() => handleStartGame()} disabled={hasGameStarted}>
            <Text style={styles.playButtonText}>{message}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <GeniusButton
            color='yellow'
            position='bottom-left'
            disabled={!hasGameStarted || onWatchPhase}
            onPress={() => handleButtonPress('yellow')}
            active={activeButton.yellow}
          />

          <GeniusButton
            color='blue'
            position='bottom-right'
            disabled={!hasGameStarted || onWatchPhase}
            onPress={() => handleButtonPress('blue')}
            active={activeButton.blue}
          />
        </View>
      </View>
    </View>
  );
}
