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
    amazonStoreUrl: "https://www.amazon.com/s?rh=n%3A2350149011%2Cp_4%3AOssi%2BAnna%2BGames"
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
      platforms: ["Fire Tablet", "Fire TV"],
      color: "#ec4899",                                      // Card color (any hex color)
      status: "live",                                        // "live" = on Amazon now, "soon" = coming soon
      isNew: true                                            // Shows a "NEW" label on the card
    },
    ------------------------------------------------------------------------------------- */
  ]
};
