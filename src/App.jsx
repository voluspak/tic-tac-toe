import { useGame } from './hooks/useGame'
import { Square } from './components/Square'
import { TURNS } from './constanst'
import WinnerModal from './components/WinnerModal'

function App () {
  const { resetGame, updateBoard, turn, winner, board } = useGame()

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={() => resetGame()}>Reiniciar</button>
      <section className='game'>
        {
          board.map((square, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.x}>{TURNS.x}</Square>
        <Square isSelected={turn === TURNS.o}>{TURNS.o}</Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}

export default App
