import React from 'react'
import { useEffect, useState } from 'react'
import './App.css'

import clubs_ace from './assets/modified/clubs_ace.svg'
import clubs2 from './assets/modified/clubs_2.svg'
import clubs3 from './assets/modified/clubs_3.svg'
import clubs4 from './assets/modified/clubs_4.svg'
import clubs5 from './assets/modified/clubs_5.svg'
import clubs6 from './assets/modified/clubs_6.svg'
import clubs7 from './assets/modified/clubs_7.svg'
import clubs8 from './assets/modified/clubs_8.svg'
import clubs9 from './assets/modified/clubs_9.svg'
import clubs10 from './assets/modified/clubs_10.svg'
import clubs_jack from './assets/modified/clubs_jack.svg'
import clubs_queen from './assets/modified/clubs_queen.svg'
import clubs_king from './assets/modified/clubs_king.svg'

import diamond_ace from './assets/modified/diamonds_ace.svg'
import diamond2 from './assets/modified/diamonds_2.svg'
import diamond3 from './assets/modified/diamonds_3.svg'
import diamond4 from './assets/modified/diamonds_4.svg'
import diamond5 from './assets/modified/diamonds_5.svg'
import diamond6 from './assets/modified/diamonds_6.svg'
import diamond7 from './assets/modified/diamonds_7.svg'
import diamond8 from './assets/modified/diamonds_8.svg'
import diamond9 from './assets/modified/diamonds_9.svg'
import diamond10 from './assets/modified/diamonds_10.svg'
import diamond_jack from './assets/modified/diamonds_jack.svg'
import diamond_queen from './assets/modified/diamonds_queen.svg'
import diamond_king from './assets/modified/diamonds_king.svg'

import spades2 from './assets/modified/spades_2.svg'
import spades3 from './assets/modified/spades_3.svg'
import spades4 from './assets/modified/spades_4.svg'
import spades5 from './assets/modified/spades_5.svg'
import spades6 from './assets/modified/spades_6.svg'
import spades7 from './assets/modified/spades_7.svg'
import spades8 from './assets/modified/spades_8.svg'
import spades9 from './assets/modified/spades_9.svg'
import spades10 from './assets/modified/spades_10.svg'
import spades_jack from './assets/modified/spades_jack.svg'
import spades_queen from './assets/modified/spades_queen.svg'
import spades_king from './assets/modified/spades_king.svg'
import spades_ace from './assets/modified/spades_ace.svg'

function App() {
  // const [Cards, setCards] = useState<any[]>([
  //   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
  //   27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
  // ])
  const [Cards, setCards] = useState<any[]>([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
    27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
  ])
  const [Score1, SetScore1] = useState<any>(0)
  const [Score2, SetScore2] = useState<any>(0)
  const [TotalCards, SetTotalCards] = useState<any>(39)
  const [p1value, Setp1value] = useState<any>(1)
  const [p2value, Setp2value] = useState<any>(1)
  const [disable1, setDisable1] = useState<boolean>(false)
  const [disable2, setDisable2] = useState<boolean>(false)
  const [Winner1, setWinner1] = useState<boolean>(false)
  const [Winner2, setWinner2] = useState<boolean>(false)
  const [Draw, setDraw] = useState<boolean>(false)
  const [Replay, setReplay] = useState<boolean>(false)
  const [NextRound, setNextRound] = useState<boolean>(false)
  const [screenshots, setScreenshots] = useState<any[]>([])

  useEffect(() => {
    setScreenshots([
      {
        value: 1,
        image: diamond_ace,
      },
      {
        value: 2,
        image: diamond2,
      },
      {
        value: 3,
        image: diamond3,
      },
      {
        value: 4,
        image: diamond4,
      },
      {
        value: 5,
        image: diamond5,
      },
      {
        value: 6,
        image: diamond6,
      },
      {
        value: 7,
        image: diamond7,
      },
      {
        value: 8,
        image: diamond8,
      },
      {
        value: 9,
        image: diamond9,
      },
      {
        value: 10,
        image: diamond10,
      },
      {
        value: 11,
        image: diamond_jack,
      },
      {
        value: 12,
        image: diamond_queen,
      },
      {
        value: 13,
        image: diamond_king,
      },
      {
        value: 14,
        image: clubs_ace,
      },
      {
        value: 15,
        image: clubs2,
      },
      {
        value: 16,
        image: clubs3,
      },
      {
        value: 17,
        image: clubs4,
      },
      {
        value: 18,
        image: clubs5,
      },
      {
        value: 19,
        image: clubs6,
      },
      {
        value: 20,
        image: clubs7,
      },
      {
        value: 21,
        image: clubs8,
      },
      {
        value: 22,
        image: clubs9,
      },
      {
        value: 23,
        image: clubs10,
      },
      {
        value: 24,
        image: clubs_jack,
      },
      {
        value: 25,
        image: clubs_queen,
      },
      {
        value: 26,
        image: clubs_king,
      },
      {
        value: 27,
        image: spades_ace,
      },

      {
        value: 28,
        image: spades2,
      },
      {
        value: 29,
        image: spades3,
      },
      {
        value: 30,
        image: spades4,
      },
      {
        value: 31,
        image: spades5,
      },
      {
        value: 32,
        image: spades6,
      },
      {
        value: 33,
        image: spades7,
      },
      {
        value: 34,
        image: spades8,
      },
      {
        value: 35,
        image: spades9,
      },
      {
        value: 36,
        image: spades10,
      },
      {
        value: 37,
        image: spades_jack,
      },
      {
        value: 38,
        image: spades_queen,
      },
      {
        value: 39,
        image: spades_king,
      },
    ])
    // setCards([
    //   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
    //   27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
    // ])

    if (disable1 && disable2 && TotalCards >= 0) {
      if (p1value > p2value) {
        SetScore1(Score1 + 1)
        setNextRound(true)
      } else {
        SetScore2(Score2 + 1)
        setNextRound(true)
      }
    }

    if (TotalCards === 0) {
      if (Score1 === Score2) {
        setDraw(true)
        setDisable1(true)
        setDisable2(true)
        setReplay(true)
      } else if (Score1 > Score2) {
        setWinner1(true)
        setDisable1(true)
        setDisable2(true)
        setReplay(true)
      } else {
        setWinner2(true)
        setDisable1(true)
        setDisable2(true)
        setReplay(true)
      }
    }
  }, [p1value, p2value, TotalCards])

  async function rematch() {
    window.location.reload()
  }

  async function nextRound() {
    setNextRound(false)
    setDisable1(false)
    setDisable2(false)
  }

  async function DrawCard1() {
    //get a random number
    const randomnumber = Math.floor(Math.random() * (Cards.length - 1 + 1))
    const array = Array(...Cards)
    const index = array[randomnumber]
    Setp1value(index)
    array.splice(randomnumber, 1)
    setCards(array)
    setDisable1(true)
    SetTotalCards(TotalCards - 1)
    //decrease 1 from deck
  }
  async function DrawCard2() {
    //get a random number
    const randomnumber = Math.floor(Math.random() * (Cards.length - 1 + 1))
    //set temp array
    const array = Array(...Cards)
    //find the value of the array
    const index = array[randomnumber]
    //set the vard value to state and delete it, disable button, decrease amount of cards available
    Setp2value(index)
    array.splice(randomnumber, 1)
    setCards(array)
    setDisable2(true)
    SetTotalCards(TotalCards - 1)
  }

  return (
    <div className='App w-screen'>
      {Draw && <div>its a draw!</div>}
      <div className='w-full justify-center flex flex-row items-center'>
        <div className='justify-center w-full flex-col'>
          {Winner1 && <div>you won the game</div>}
          <div>{Score1}</div>
          <div className='flex justify-center'>
            {screenshots
              .filter(
                (o) => o.value === p1value, // filter the array based on some conditions
              )
              .map(
                (item) => (
                  <img key={item.value} src={item.image}></img>
                ), // print the name of the filtered items
              )}
          </div>
          <div>
            {disable1 ? (
              <button
                disabled={disable1}
                onClick={DrawCard1}
                className='px-4 py-2 font-semibold text-sm  bg-gray-500 text-white rounded-full shadow-sm'
              >
                DRAW
              </button>
            ) : (
              <button
                disabled={disable1}
                onClick={DrawCard1}
                className='px-4 py-2 font-semibold text-sm hover:bg-cyan-700 bg-cyan-500 text-white rounded-full shadow-sm'
              >
                DRAW
              </button>
            )}
          </div>
        </div>
        <div className='justify-center w-full flex-col'>
          {Winner2 && <div>you won the game</div>}
          <div>{Score2}</div>
          <div className='flex justify-center'>
            {screenshots
              .filter(
                (o) => o.value === p2value, // filter the array based on some conditions
              )
              .map(
                (item) => (
                  <img key={item.value} src={item.image}></img>
                ), // print the name of the filtered items
              )}
          </div>
          <div>
            {disable2 ? (
              <button
                disabled={disable2}
                onClick={DrawCard2}
                className='px-4 py-2 font-semibold text-sm  bg-gray-500 text-white rounded-full shadow-sm'
              >
                DRAW
              </button>
            ) : (
              <button
                disabled={disable2}
                onClick={DrawCard2}
                className='px-4 py-2 font-semibold text-sm hover:bg-cyan-700 bg-cyan-500 text-white rounded-full shadow-sm'
              >
                DRAW
              </button>
            )}
          </div>
        </div>
      </div>
      {NextRound && (
        <button
          className='px-4 py-2 font-semibold text-sm hover:bg-cyan-700 bg-cyan-500 text-white rounded-full shadow-sm'
          onClick={nextRound}
        >
          Next Round!
        </button>
      )}
      {Replay && (
        <button
          className='px-4 py-2 font-semibold text-sm hover:bg-cyan-700 bg-cyan-500 text-white rounded-full shadow-sm'
          onClick={rematch}
        >
          Rematch!
        </button>
      )}
    </div>
  )
}

export default App
