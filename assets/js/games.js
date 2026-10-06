/* =========================================================================
   OSSI ANNA GAMES — site settings & games list
   -------------------------------------------------------------------------
   This is the ONLY file you need to edit to add a new game to the website.
   Add each new game at the TOP of the "games" list (newest first).
   ========================================================================= */

window.OSSIANNA = {
  site: {
    name: "Ossi Anna Games",
    email: "admin-amzn@ossiannagames.com",
    // Link to all your games on Amazon (developer page)
    amazonStoreUrl: "https://www.amazon.com/s?i=mobile-apps&rh=p_4%3AOssi%2BAnna%2BGames&search-type=ss"
  },

  games: [
    /* ---------- COPY THIS BLOCK FOR EACH NEW GAME (remove the  /*  and  *\/ ) ----------
    {
      name: "Space Runner",                                  // Game name
      tagline: "Dodge asteroids and race across the galaxy.", // One short sentence
      description: "Longer description shown when someone clicks the game.\nYou can use several lines.",
      icon: "assets/img/games/space-runner.png",             // App icon (512x512 PNG) — upload it to assets/img/games/
      banner: "",                                            // Optional wide image (1024x500). Leave "" if none
      screenshots: [],                                       // Optional: ["assets/img/games/space-1.jpg", "..."]
      amazonUrl: "https://www.amazon.com/dp/B0XXXXXXXX",     // Link of the game on Amazon
      genre: "Arcade",                                       // Arcade, Puzzle, Racing, Kids, Action...
      platforms: ["Fire Tablet", "Offline", "No ads"],
      color: "#ec4899",                                      // Card color (any hex color)
      status: "live",                                        // "live" = on Amazon now, "soon" = coming soon
      isNew: true                                            // Shows a "NEW" label on the card
    },
    ------------------------------------------------------------------------------------- */

    {
      name: "Hexa Stack Sort",
      tagline: "Drag hex stacks, merge matching colours and clear the board.",
      description: "Three stacks of colourful hexagon tiles wait in the tray. Drag one onto an empty cell of the hex board, and if a neighbouring stack shares the same top colour, the tiles slide across and merge. Gather ten or more of one colour on a single stack and they clear away.\nEach stage asks you to clear a number of tiles before the board runs out of space. Rocks, ice cells, surprise stacks and a sixth colour keep things fresh across 50 stages, all checked as winnable.\nThe emptier the board when you win, the more stars you earn. Hammer and Shuffle boosters are paid for with coins you earn. Playable offline, with no adverts, no purchases and no data collection.",
      icon: "assets/img/games/hexa-stack-sort.png",
      screenshots: ["assets/img/games/hexa-stack-sort-1.jpg", "assets/img/games/hexa-stack-sort-2.jpg", "assets/img/games/hexa-stack-sort-3.jpg", "assets/img/games/hexa-stack-sort-4.jpg", "assets/img/games/hexa-stack-sort-5.jpg"],
      amazonUrl: "https://www.amazon.com/dp/B0HLSL5BTL",
      genre: "Puzzle",
      platforms: ["Fire Tablet", "Offline", "No ads"],
      color: "#f59e0b",
      status: "live",
      isNew: true
    },
    {
      name: "Mini Golfs Games",
      tagline: "Drag back, release and putt through 50 colourful holes.",
      description: "Look at the hole, drag back from anywhere on the course and release to putt. The further you pull, the harder the shot. Use the walls to bank around corners and sink the ball in as few strokes as you can.\nFifty holes span five themes: Candy Meadow, Sunny Beach, Frosty Peak, Twilight Garden and Starry Sky, with sand traps, bumpers, water, sliding blocks, ice, windmills and slopes.\nHit par for three stars. The Guide booster shows the full bounce path and Undo takes back a shot, both bought with coins you earn. Plays offline, without ads, purchases or data collection.",
      icon: "assets/img/games/mini-golf.png",
      screenshots: ["assets/img/games/mini-golf-1.jpg", "assets/img/games/mini-golf-2.jpg", "assets/img/games/mini-golf-3.jpg", "assets/img/games/mini-golf-4.jpg", "assets/img/games/mini-golf-5.jpg"],
      amazonUrl: "https://www.amazon.com/dp/B0HLQVZ7KX",
      genre: "Sports",
      platforms: ["Fire Tablet", "Offline", "No ads"],
      color: "#22c55e",
      status: "live",
      isNew: true
    },
    {
      name: "Purr Cafe Of Cats",
      tagline: "Run a cozy cat café and match every guest with their dream cat.",
      description: "Bunnies, bears, pandas, foxes, frogs and koalas drop by your café, and each one dreams of a particular cat: a sleepy one, a playful one, a fluffy one, a fancy one. Drag Biscuit, Mochi, Pepper, Latte and the rest of the gang to the right table, then serve lattes, cocoa, berry cake or paw cookies.\nEach stage is one café day with a coin goal. Quick, well-planned service earns bigger tips and more stars. Messy tables and hungry cats keep every day fresh.\nWhen things get hectic, use Cozy Tune or Magic Paw. Fifty days in all. Plays offline with no ads, no in-app purchases and zero data collection.",
      icon: "assets/img/games/purr-cafe.png",
      screenshots: ["assets/img/games/purr-cafe-1.jpg", "assets/img/games/purr-cafe-2.jpg", "assets/img/games/purr-cafe-3.jpg", "assets/img/games/purr-cafe-4.jpg", "assets/img/games/purr-cafe-5.jpg"],
      amazonUrl: "https://www.amazon.com/dp/B0HLN51LCG",
      genre: "Casual",
      platforms: ["Fire Tablet", "Offline", "No ads"],
      color: "#ec4899",
      status: "live",
      isNew: true
    },
    {
      name: "Mochi Pet Game",
      tagline: "Feed, bathe, dress up and play with your own little mochi pet.",
      description: "Your mochi is a soft little blob with a big personality, and it needs you. Drag snacks to its mouth in the kitchen, scrub it with soap in the bath, turn off the lamp for a nap and try on hats and colourful new looks.\nFifty stages rotate through five mini-games: Snack Catch, Bubble Pop, Memory Match, Cloud Hop and Color Party, each with a score goal and up to three stars, leading to a Moon Party finale on stage 50.\nMade for little hands and big hearts. Offline, free of ads and purchases, and no personal data leaves the device.",
      icon: "assets/img/games/mochi-pet.png",
      screenshots: ["assets/img/games/mochi-pet-1.jpg", "assets/img/games/mochi-pet-2.jpg", "assets/img/games/mochi-pet-3.jpg", "assets/img/games/mochi-pet-4.jpg", "assets/img/games/mochi-pet-5.jpg"],
      amazonUrl: "https://www.amazon.com/dp/B0HLMW9Q99",
      genre: "Kids",
      platforms: ["Fire Tablet", "Offline", "No ads"],
      color: "#3b82f6",
      status: "live",
      isNew: true
    },
    {
      name: "Cat & Hanni: Snack Beat",
      tagline: "A rhythm duel: tap the snacks to the beat and outscore Hanni the bunny.",
      description: "Snacks slide down three candy lanes in time with the music. Tap a lane just as a treat lands on the plate and your cat gobbles it up. Meanwhile Hanni, a bunny with a pink bow, plays the same song, and a tug bar shows who's ahead.\n50 original songs across seven styles, from Bubble Pop to Swing Time. Hold lolly sticks, hit double snacks, grab golden treats and avoid hot peppers.\nBeat Hanni's score to win, then chase high accuracy for extra stars. All music is generated inside the game, so it plays anywhere, even offline. No ads, no purchases, no data collected.",
      icon: "assets/img/games/cat-hanni.png",
      screenshots: ["assets/img/games/cat-hanni-1.jpg", "assets/img/games/cat-hanni-2.jpg", "assets/img/games/cat-hanni-3.jpg", "assets/img/games/cat-hanni-4.jpg", "assets/img/games/cat-hanni-5.jpg"],
      amazonUrl: "https://www.amazon.com/dp/B0HLMQ4S26",
      genre: "Music",
      platforms: ["Fire Tablet", "Offline", "No ads"],
      color: "#ef4444",
      status: "live",
      isNew: true
    },
    {
      name: "Glam Nails Girls Makeup",
      tagline: "Copy each customer's nail design and run the cutest salon in town.",
      description: "A customer sits down and holds up a card: this is the manicure they want. Recreate it on their hand as closely as you can. Pick a bottle and swipe over a nail to paint it, keeping inside the edges. A live MATCH bar shows how close you are.\nThe salon toolbox grows as you go: glitter, stickers, gems, stencils, ombre sponges and shimmering magic polishes in holo, pearl, chrome, gold and silver.\n50 customers, up to three stars each. Creative and kid-friendly. No ads, no in-app purchases, no internet required, and nothing is collected.",
      icon: "assets/img/games/glam-nails.png",
      screenshots: ["assets/img/games/glam-nails-1.jpg", "assets/img/games/glam-nails-2.jpg", "assets/img/games/glam-nails-3.jpg", "assets/img/games/glam-nails-4.jpg", "assets/img/games/glam-nails-5.jpg"],
      amazonUrl: "https://www.amazon.com/dp/B0H8J8FWDT",
      genre: "Creative",
      platforms: ["Fire Tablet", "Offline", "No ads"],
      color: "#a855f7",
      status: "live",
      isNew: true
    }
  ]
};
