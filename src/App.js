import "./styles.css";

import { useEffect, useState, useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { motion } from "framer-motion";

const GAMES = [
  {
    title: "The Oddysey",
    description: "Explore unknown galaxies.",
    longDescription:
      "Throughout their journey, players will encounter diverse alien races, each with their own unique cultures and technologies. Engage in thrilling space combat, negotiate complex diplomatic relations, and make critical decisions that affect the balance of power in the galaxy.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/space.png",
  },
  {
    title: "Angry Rabbits",
    description: "They are coming for you.",
    longDescription:
      "The rabbits are angry and they are coming for you. You have to defend yourself with your carrot gun. The game is not simple, you have to be fast and accurate to survive.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/rabbit.png",
  },
  {
    title: "Ghost town",
    description: "Find the ghosts.",
    longDescription:
      "You are in a ghost town and you have to find the ghosts. But be careful, they are dangerous.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/ghost.webp",
  },
  {
    title: "Pirates in the jungle",
    description: "Find the treasure.",
    longDescription:
      "You are a pirate and you have to find the treasure in the jungle. But be careful, there are traps and wild animals.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/pirate.png",
  },

  {
    title: "Lost in the mountains",
    description: "Find your way home.",
    longDescription:
      "You are lost in the mountains and you have to find your way home. But be careful, there are dangerous animals and you can get lost.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/boy.webp",
  },
];

function SharedLayout() {
  const [activeGame, setActiveGame] = useState(null);
  const ref = useRef(null);

  useOnClickOutside(ref, () => setActiveGame(null));

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActiveGame(null);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      {activeGame ? (
        <motion.div
          className="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            layoutId={`${activeGame.title}`}
            className="active-game"
            ref={ref}
            style={{ borderRadius: 12 }}
          >
            <div className="inner">
              <div className="header">
                <motion.img
                  height={56}
                  width={56}
                  alt="Game"
                  src={activeGame.image}
                  style={{ borderRadius: 12 }}
                  layoutId={`image-${activeGame.title}`}
                />
                <div className="header-inner">
                  <div className="content-wrapper">
                    <motion.h2
                      layoutId={`title-${activeGame.title}`}
                      className="game-title"
                    >
                      {activeGame.title}
                    </motion.h2>
                    <motion.p
                      layoutId={`desc-${activeGame.title}`}
                      className="game-description"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {activeGame.description}
                    </motion.p>
                  </div>
                  <motion.button
                    layoutId={`button-${activeGame.title}`}
                    className="button"
                  >
                    Get
                  </motion.button>
                </div>
              </div>
              <div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="long-description"
                  transition={{
                    duration: 0.1,
                  }}
                >
                  {activeGame.longDescription}
                </motion.p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}

      <ul className="list">
        {GAMES.map((game) => (
          <motion.li
            key={game.title}
            onClick={() => setActiveGame(game)}
            style={{ borderRadius: 8 }}
            layoutId={`${game.title}`}
          >
            <motion.img
              layoutId={`image-${game.title}`}
              height={56}
              width={56}
              alt="Game"
              src={game.image}
              style={{ borderRadius: 12 }}
            />
            <div className="game-wrapper">
              <div className="content-wrapper">
                <motion.h2
                  layoutId={`title-${game.title}`}
                  className="game-title"
                >
                  {game.title}
                </motion.h2>
                <motion.p
                  layoutId={`desc-${game.description}`}
                  className="game-description"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {game.description}
                </motion.p>
              </div>
              <motion.button
                layoutId={`button-${game.title}`}
                className="button"
              >
                Get
              </motion.button>
            </div>
          </motion.li>
        ))}
      </ul>
    </>
  );
}

export default function App() {
  return (
    <div className="App">
      <SharedLayout />
    </div>
  );
}
