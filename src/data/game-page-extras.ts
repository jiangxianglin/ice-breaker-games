export type GameFaqItem = {
  q: string;
  a: string;
};

export type GamePageSource = {
  label: string;
  href: string;
  external?: boolean;
};

export type GamePageExtrasContent = {
  howToSteps?: { title: string; body: string }[];
  variations?: { title: string; body: string }[];
  rulesTiming?: { label: string; body: string }[];
  adultsWork?: string;
  whyItWorks?: string;
  facilitatorScript?: { speaker: string; line: string }[];
  pitfalls?: { title: string; body: string }[];
  originalVariant?: { title: string; body: string };
  /** Editorial quotation + cite links for GEO / AI visibility audits */
  quote?: {
    text: string;
    citeLead?: string;
    citeLinks: { label: string; href: string }[];
  };
  sourcesIntro?: string;
  sources?: GamePageSource[];
  faqs: GameFaqItem[];
};

/**
 * Editorial blocks for high-opportunity / page-2 game pages.
 * Single source for on-page FAQ UI (+ optional JSON-LD consumers).
 */
export const GAME_PAGE_EXTRAS: Record<string, GamePageExtrasContent> = {
  "name-that-movie-quote": {
    howToSteps: [
      {
        title: "Set the tone and theme",
        body: "Tell the group this is a playful quoting game, not a trivia exam. Optionally pick a theme (90s comedies, Pixar, workplace movies) so quieter players are not stuck searching for obscure lines.",
      },
      {
        title: "Take turns quoting a line",
        body: "One person delivers a short movie line—no titles, actors, or year hints. Keep quotes under one sentence so the pace stays quick.",
      },
      {
        title: "Group guesses, then reveal",
        body: "Anyone can shout a guess, or go around the circle once. After a correct answer (or 10–15 seconds), the quoter confirms the film and the next person goes.",
      },
      {
        title: "Optional scoring or team mode",
        body: "Award one point for a correct film title, or split into two teams that alternate quotes. Stop while energy is high—usually 8–12 minutes.",
      },
    ],
    variations: [
      {
        title: "TV quote round",
        body: "Allow TV shows and streaming series. Great for mixed-age groups who share fewer classic films.",
      },
      {
        title: "Decade challenge",
        body: "Restrict quotes to one decade (or rotate decades each round) to level the playing field.",
      },
      {
        title: "Silent / chat version",
        body: "For virtual meetings, players type the quote in chat; others reply with the movie title. Use reactions to vote when multiple guesses appear.",
      },
    ],
    rulesTiming: [
      {
        label: "Players",
        body: "4–30 people. Above 15, split into two quoting circles or use team mode.",
      },
      {
        label: "Time",
        body: "8–12 minutes. Aim for ~30–45 seconds per quote including guesses.",
      },
      {
        label: "House rules",
        body: "No humming the soundtrack, no actor names, and skip quotes that rely on spoilers for recent releases if anyone asks.",
      },
    ],
    adultsWork:
      "For work meetings, pick PG workplace-friendly films (Office Space lines can get spicy—set a clean-quote rule). Use it after a long agenda block when you want laughs without personal disclosure. Remote teams can run the chat variation in 5 minutes.",
    faqs: [
      {
        q: "How do you play Name That Movie Quote?",
        a: "Players take turns saying a short movie line without naming the film. The group guesses the title, then the next person quotes. Optional scoring or themed rounds keep it competitive without needing materials.",
      },
      {
        q: "What are good starter movie quotes for icebreakers?",
        a: "Use widely known lines such as “Here’s looking at you, kid,” “I am your father,” “To infinity and beyond,” or “May the Force be with you.” Prefer quotes your audience is likely to know over niche deep cuts.",
      },
      {
        q: "How long does Name That Movie Quote take?",
        a: "Most groups finish in 8–12 minutes. Cap each quote at about 45 seconds of guessing so everyone gets a turn.",
      },
      {
        q: "Can you play it virtually?",
        a: "Yes. Have the quoter unmute or type the line in chat. Others reply with the movie title in chat or with a reaction. Breakout rooms work well for groups larger than 12.",
      },
      {
        q: "How do you keep it inclusive?",
        a: "Offer themed rounds (animated films, sports movies) and allow a “pass” if someone cannot think of a quote. Avoid spoilers and quotes that need cultural knowledge only a few people share.",
      },
    ],
  },

  "find-your-match": {
    howToSteps: [
      {
        title: "Prepare even pairs",
        body: "Print or write famous pairs on separate cards—one half per card. Count attendees and make sure you have an even number of cards (a facilitator can sit out if needed).",
      },
      {
        title: "Hand out cards face-down",
        body: "Each person gets one half. Explain the rule: you may ask only yes/no questions and may not say the text on your card out loud.",
      },
      {
        title: "Mingle and match",
        body: "People move around asking questions like “Am I a food?” or “Are we from a comic book?” When two people believe they match, they confirm cards and sit or stand together.",
      },
      {
        title: "Pair introductions",
        body: "Each pair shares their famous duo and a 10-second personal intro (name + role). Total run time is usually 15–20 minutes.",
      },
    ],
    variations: [
      {
        title: "Themed decks",
        body: "Use company-product pairs, book characters, or local landmarks so the set matches your audience.",
      },
      {
        title: "Odd-number fix",
        body: "Add a “wildcard” card that can pair with anyone, or let the facilitator join so every card has a match.",
      },
      {
        title: "Virtual breakouts",
        body: "DM each person their half, then open random breakout rooms of 4–6 for yes/no questioning. Rematch rooms every 2 minutes until pairs reunite in the main session.",
      },
    ],
    rulesTiming: [
      {
        label: "Players",
        body: "Best with 10–50 people and an even headcount.",
      },
      {
        label: "Time",
        body: "15–20 minutes: ~5–10 minutes mingling, then pair intros.",
      },
      {
        label: "Core rule",
        body: "Yes/no questions only—no reading your card aloud and no “Are you Juliet?” style giveaways if the card says Romeo.",
      },
    ],
    adultsWork:
      "At networking events and conferences, Find Your Match creates movement and a built-in conversation partner. For corporate offsites, use work-safe pairs (calendar + meeting, coffee + Monday) so nobody needs pop-culture fluency.",
    faqs: [
      {
        q: "How do you play Find Your Match?",
        a: "Participants receive cards with one half of a famous pair. They find their matching partner by asking yes/no questions without saying what is on their card. Once pairs reunite, they introduce themselves to the group.",
      },
      {
        q: "How many people can play Find Your Match?",
        a: "It works best with 10–50 people. You need an even number of participants (or a wildcard/facilitator card). Larger groups can run with more prepared pairs.",
      },
      {
        q: "What materials do you need?",
        a: "Cards with famous pairs split across two halves—for example peanut butter / jelly, Sherlock Holmes / Watson, Batman / Robin. Print or handwrite them before the session.",
      },
      {
        q: "How long does Find Your Match take?",
        a: "Typically 15–20 minutes including setup and pair introductions. Mingling usually lasts 5–10 minutes.",
      },
      {
        q: "What are some example famous pairs?",
        a: "Classics: PB & jelly, Batman & Robin, Romeo & Juliet, salt & pepper. Corporate: email & inbox, slides & presenter. Student-friendly: Wi‑Fi & password, coffee & monday.",
      },
      {
        q: "Can Find Your Match be played virtually?",
        a: "Yes. Send each person their half via chat or email, then use breakout rooms for questioning. Reconvene so pairs announce themselves in the main room.",
      },
    ],
  },

  chainlink: {
    howToSteps: [
      {
        title: "Start with one clear fact",
        body: "Person A shares a short, positive fact (“I run on weekends”). Keep it specific enough that someone else can link to it.",
      },
      {
        title: "Link, then add",
        body: "Person B names a shared trait with A (“I also run”) and adds a new fact (“…and I have a dog”). The spoken link is what makes the chain stick.",
      },
      {
        title: "Continue around the circle",
        body: "Each next person links to the previous speaker’s newest fact, then adds their own. For groups over ~15, split into sub-circles so the chain stays memorable.",
      },
      {
        title: "Debrief in one minute",
        body: "Ask what made linking easy or hard. That short reflection turns a mixer into a listening warm-up.",
      },
    ],
    variations: [
      {
        title: "Work-safe prompts",
        body: "Limit facts to hobbies, tools, or “one thing that helps me focus” so the chain stays professional.",
      },
      {
        title: "Small-circle mode",
        body: "For 20–40 people, run 3–4 simultaneous chains of 8–10, then share one highlight from each circle.",
      },
      {
        title: "Memory stretch",
        body: "Advanced groups may optionally recite the last two links before adding theirs—use only if the group is small and game for it.",
      },
    ],
    rulesTiming: [
      {
        label: "Players",
        body: "8–40 people (split above 15).",
      },
      {
        label: "Time",
        body: "10–15 minutes; about one minute per person in a small circle.",
      },
      {
        label: "Linking rule",
        body: "Every turn must include an explicit shared trait with the previous person before adding a new fact.",
      },
    ],
    adultsWork:
      "Chainlink works well as a meeting opener when you want names plus common ground without a long icebreaker. Follow it with how to play the name game if the group still needs name recall.",
    quote: {
      text: "Introduction chains work when each person must name a shared trait before adding their own fact—so listening for overlap becomes the skill, not memorizing the whole circle.",
      citeLead:
        "Ice Breaker Games Editorial Team, summarizing guidance from",
      citeLinks: [
        {
          label: "Wikipedia, “Icebreaker (facilitation)”",
          href: "https://en.wikipedia.org/wiki/Icebreaker_(facilitation)",
        },
        {
          label: "SessionLab’s icebreaker library",
          href: "https://www.sessionlab.com/library/icebreaker",
        },
      ],
    },
    sourcesIntro:
      "Facilitation framing for Chainlink draws on established icebreaker references:",
    sources: [
      {
        label: "Wikipedia — Icebreaker (facilitation)",
        href: "https://en.wikipedia.org/wiki/Icebreaker_(facilitation)",
        external: true,
      },
      {
        label: "SessionLab — Icebreaker library",
        href: "https://www.sessionlab.com/library/icebreaker",
        external: true,
      },
      {
        label: "Harvard Business Review — Remote Work",
        href: "https://hbr.org/topic/subject/remote-work",
        external: true,
      },
      {
        label: "Ice Breaker Games — Name game icebreakers",
        href: "/name-game-icebreakers",
      },
      {
        label: "Ice Breaker Games — Icebreaker games for meetings",
        href: "/icebreaker-games-for-meetings",
      },
    ],
    faqs: [
      {
        q: "How do you play Chainlink?",
        a: "Person A shares a fact. Person B states a shared trait with A, then adds a new fact. Each next person links to the previous speaker and adds theirs, building a chain of commonalities around the group.",
      },
      {
        q: "What facts work for Chainlink?",
        a: "Short, linkable facts work best: hobbies, pets, tools you use, places you have lived, or foods you love. Avoid sensitive topics and one-word answers that are hard to link.",
      },
      {
        q: "How long does Chainlink take?",
        a: "With 8–15 people, a full round takes about 10–15 minutes. Larger groups should split into sub-circles.",
      },
      {
        q: "Can it work for large groups?",
        a: "Yes. Split into circles of 8–12. Each circle builds its own chain, then optionally shares one funny link with the full room.",
      },
      {
        q: "What does Chainlink reveal?",
        a: "It shows how people listen for overlap and build on each other’s contributions—useful before collaboration or brainstorming.",
      },
    ],
  },

  "emoji-introduction": {
    howToSteps: [
      {
        title: "Set the count",
        body: "Ask for 2–3 emojis that represent the person (or their week). Model a vivid example first so the room knows the tone.",
      },
      {
        title: "Share in chat or on paper",
        body: "Everyone posts at once in Zoom/Teams/Slack chat, or writes emojis on sticky notes in person. Simultaneous sharing keeps energy up.",
      },
      {
        title: "One guess, then clarify",
        body: "Invite one group guess, then a one-sentence explanation. For groups over 12, keep most shares chat-only and unmute a few volunteers.",
      },
      {
        title: "Bridge to the agenda",
        body: "Note one theme you heard (energy, hobbies, weekend plans) and open the real meeting or lesson while curiosity is high.",
      },
    ],
    variations: [
      {
        title: "Meeting energy trio",
        body: "Ask for one emoji for energy, one for focus, and one for what people need from the meeting—closer to a check-in than a full intro.",
      },
      {
        title: "Fake-emoji round",
        body: "Optional Two Truths twist: include one misleading emoji and let the group spot it. Use only with groups that enjoy light bluffing.",
      },
      {
        title: "Breakout pairs",
        body: "Pairs decode each other’s emoji sets for 90 seconds, then introduce their partner in one sentence to the full room.",
      },
    ],
    rulesTiming: [
      {
        label: "Players",
        body: "5–30 people. Above 12, use chat-first sharing or breakout rooms.",
      },
      {
        label: "Time",
        body: "5–15 minutes. Chat-only rounds can finish in under eight minutes; spoken explains need more time.",
      },
      {
        label: "Setup",
        body: "Shared chat (Zoom/Teams/Slack) or paper/sticky notes for in-person groups.",
      },
    ],
    adultsWork:
      "For work meetings, keep emojis work-safe (role, tools, weekend hobbies). Remote teams can post in chat first, then unmute only if they want to explain—good for mixed introvert/extrovert groups. Pair with short virtual icebreakers when the agenda is tight.",
    faqs: [
      {
        q: "How do you play Emoji Introduction?",
        a: "Each person picks 2–3 emojis that represent them, posts in chat (or on paper), the group gets one guess, then the person explains in one sentence. Continue until enough people have shared for the room size.",
      },
      {
        q: "How many people can play Emoji Introduction?",
        a: "It works with 5–30 people. Under 12, everyone can speak briefly. Above 12, keep most answers in chat and unmute a handful of volunteers so the opener stays under 15 minutes.",
      },
      {
        q: "What materials do you need?",
        a: "A chat window or sticky notes. No special props. In person, phones with an emoji keyboard also work.",
      },
      {
        q: "How long does Emoji Introduction take?",
        a: "Chat-first rounds often finish in 5–8 minutes. If everyone explains aloud, budget 10–15 minutes and cap each turn at about 30–60 seconds.",
      },
      {
        q: "What are good emojis for self-introduction?",
        a: "Pick specific, conversation-friendly symbols: hobbies, pets, foods, tools you use, or places you’ve lived. Avoid inside jokes the room cannot decode and skip anything that invites status pressure.",
      },
      {
        q: "Can Emoji Introduction work in classrooms?",
        a: "Yes. Use school-safe prompts (weekend plans, favorite subject energy, one hobby). Offer a pass option and keep explanations short so class time stays on track.",
      },
    ],
  },

  "weather-check-in": {
    howToSteps: [
      {
        title: "Frame the metaphor",
        body: "Ask everyone to describe how they feel right now as weather—sunny, foggy, stormy, partly cloudy, windy. Say one light example so people know short answers are enough.",
      },
      {
        title: "Model and invite",
        body: "Facilitator goes first: “Mostly sunny with a chance of email thunder.” Invite a pass option so nobody is forced to overshare.",
      },
      {
        title: "Collect answers fast",
        body: "Go around the circle or post in chat simultaneously. Cap spoken turns at one sentence. For 15+ people, chat-only is usually cleaner.",
      },
      {
        title: "Name the room pattern",
        body: "Reflect the overall forecast in one sentence (“lots of partly cloudy—makes sense after a busy week”), then open the agenda. Skip long analysis unless the meeting is about wellbeing.",
      },
    ],
    variations: [
      {
        title: "Weekend forecast",
        body: "Ask for the weather of their weekend so far, not their mood—lighter when the group is new.",
      },
      {
        title: "Project weather",
        body: "For work teams: “What’s the weather on this project?” Keep it about workload and clarity, not personal crisis.",
      },
      {
        title: "Emoji + weather",
        body: "Combine with Emoji Check-In: one weather word plus one emoji in chat for hybrid rooms.",
      },
    ],
    rulesTiming: [
      {
        label: "Players",
        body: "5–25 people. Above 15, prefer chat posts over spoken rounds.",
      },
      {
        label: "Time",
        body: "3–8 minutes including the one-sentence room summary.",
      },
      {
        label: "Safety",
        body: "Metaphors can still surface hard feelings—thank the share, don’t therapize mid-meeting, and offer a pass.",
      },
    ],
    adultsWork:
      "Weather Check-In is a meeting-friendly opener when you need a fast energy read before decisions or a long agenda. Pair it with One Word Check-In or Emoji Check-In if the team already likes short rituals. Keep examples work-safe and move on once you’ve named the room pattern.",
    quote: {
      text: "Short, metaphorical check-ins help remote and hybrid teams recreate hallway connection—without forcing long personal monologues before the real agenda.",
      citeLead:
        "Ice Breaker Games Editorial Team, summarizing guidance from",
      citeLinks: [
        {
          label: "Harvard Business Review (Remote Work)",
          href: "https://hbr.org/topic/subject/remote-work",
        },
        {
          label: "MIT Sloan Management Review",
          href: "https://sloanreview.mit.edu/tag/remote-work/",
        },
        {
          label: "SessionLab’s icebreaker library",
          href: "https://www.sessionlab.com/library/icebreaker",
        },
      ],
    },
    sourcesIntro:
      "Facilitation framing for Weather Check-In draws on established remote-work and icebreaker references:",
    sources: [
      {
        label: "Harvard Business Review — Remote Work",
        href: "https://hbr.org/topic/subject/remote-work",
        external: true,
      },
      {
        label: "MIT Sloan — Research on workplace connection",
        href: "https://sloanreview.mit.edu/tag/remote-work/",
        external: true,
      },
      {
        label: "SessionLab — Icebreaker library",
        href: "https://www.sessionlab.com/library/icebreaker",
        external: true,
      },
      {
        label: "Wikipedia — Icebreaker (facilitation)",
        href: "https://en.wikipedia.org/wiki/Icebreaker_(facilitation)",
        external: true,
      },
      {
        label: "Ice Breaker Games — Virtual icebreaker games",
        href: "/virtual-icebreaker-games",
      },
      {
        label: "Ice Breaker Games — Short virtual icebreakers",
        href: "/short-virtual-icebreakers",
      },
    ],
    faqs: [
      {
        q: "How do you play Weather Check-In?",
        a: "Each person describes their current feeling as weather (sunny, foggy, stormy, partly cloudy). Go around quickly or post in chat, allow a pass, then the facilitator names the group’s overall weather in one sentence before starting the agenda.",
      },
      {
        q: "How long does Weather Check-In take?",
        a: "Most groups finish in 3–8 minutes. Chat-only rounds for larger teams often take under five minutes.",
      },
      {
        q: "Is Weather Check-In good for virtual meetings?",
        a: "Yes. It was designed for remote and hybrid rooms: people can type weather answers in chat without unmuting, then unmute only if they want to add a detail.",
      },
      {
        q: "What are good Weather Check-In examples?",
        a: "Try: “mostly sunny,” “foggy but clearing,” “light drizzle,” “thunderstorm with bright spots,” or “partly cloudy with a strong coffee breeze.” Keep metaphors short and optional.",
      },
      {
        q: "How is Weather Check-In different from One Word Check-In?",
        a: "One Word Check-In asks for a single word (energy, focus, mood). Weather Check-In uses a metaphor, which often feels safer when people want nuance without a long personal story.",
      },
    ],
  },

  "christmas-connection": {
    howToSteps: [
      {
        title: "Write preference prompts, not biography prompts",
        body: "Prepare 8–12 Christmas (or winter-holiday) questions that can be answered in one sentence: lights vs candles, early gifts vs Christmas morning, movies vs music, cooking vs takeout. Avoid questions that assume a specific religion, family structure, travel budget, or childhood tradition. Label the list “holiday preferences” so guests who do not celebrate Christmas can still play.",
      },
      {
        title: "Brief the room in 45 seconds",
        body: "Hold up one sample card and model a 10-second answer. Tell people they will mingle, find someone with a similar answer to the current prompt, then sit or stand together until you call the next prompt. Announce the pass rule: anyone can skip a prompt or sit out a round without explaining why.",
      },
      {
        title: "Run three timed mingle waves",
        body: "Wave 1 (3 minutes): people find one match on prompt A and share names only. Wave 2 (4 minutes): new prompt; pairs can grow into trios if two matches collide. Wave 3 (4 minutes): a slightly more personal but still low-stakes prompt (“a holiday food you actually like”). Use a visible timer. If the room is over 30 people, split into two zones so nobody has to shout across a hall.",
      },
      {
        title: "Cluster, then harvest one theme",
        body: "Ask matching clusters of 3–5 to pick one spokesperson. Each cluster gets 20 seconds: names plus the shared preference. You write 4–6 themes on a flip chart (“early gift openers,” “cookie bakers”). Stop while energy is still up. Do not force every cluster to perform if the room is already loud.",
      },
      {
        title: "Close with a next-step, not a speech",
        body: "Point to the chart and name one way the group can use it (seating, dessert table, playlist). Then release people to food or the agenda. The game is a mixer, not a testimony circle.",
      },
    ],
    variations: [
      {
        title: "Winter-holiday deck (more inclusive)",
        body: "Replace Christmas-specific items with winter or year-end prompts: soup vs stew, indoor vs outdoor New Year, lights in the window vs no lights. Keep the mingle mechanic. This is the default for mixed-faith workplaces.",
      },
      {
        title: "Seated table version",
        body: "Each table gets a card stack. People take turns answering one card, then pass it left. After six cards, tables report one surprising match. Use this when you cannot clear a dance floor.",
      },
      {
        title: "Virtual breakout version",
        body: "Drop the prompt in chat. Open random breakouts of 4 for 3 minutes. People type their answer first, then talk. Two rematch rounds. Harvest themes in the main room via chat, not long unmutes.",
      },
    ],
    rulesTiming: [
      {
        label: "Players",
        body: "10–50. Below 10, use the seated table version. Above 50, run two rooms or two time slots so mingling stays audible.",
      },
      {
        label: "Time",
        body: "15–20 minutes including the 45-second brief and a 2-minute harvest. Do not stretch past 25 minutes—preference mixers go stale.",
      },
      {
        label: "Materials",
        body: "A printed prompt list or 8–12 cards, a timer, and optional name tags. No prizes required.",
      },
      {
        label: "House rules",
        body: "No scoring people on “most Christmas spirit.” No questions about money, grief, or who they spend the holiday with. Pass is always allowed.",
      },
    ],
    whyItWorks:
      "Christmas Connection works when you treat it as a preference map, not a tradition contest. People move, they hear names, and they get a lightweight reason to talk. The shared-answer clusters create an instant subgroup without requiring a life story. That is useful at holiday parties where half the room is related and the other half just met. It fails when prompts imply that everyone has the same holiday, or when you let clusters turn into 3-minute speeches.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "This is a preference mixer, not a quiz about who loves Christmas the most. If a prompt does not fit you, sit this round out or pick the nearest winter equivalent.",
      },
      {
        speaker: "Model",
        line: "My sample prompt is lights or candles. I am team candles. I will find one other candle person, say my name, and wait for the next call.",
      },
      {
        speaker: "Wave call",
        line: "Prompt two: movies or music as background during cooking. Find a match in this half of the room. You have four minutes. Go.",
      },
      {
        speaker: "Close",
        line: "Clusters of three to five: one sentence on what you matched on. Then we are done—use the list if you need a seating or playlist idea.",
      },
    ],
    pitfalls: [
      {
        title: "Faith-assuming prompts",
        body: "“What does your family do after church?” excludes guests and coworkers. Swap for food, weather, music, and gift-timing questions that anyone can answer or skip.",
      },
      {
        title: "One giant clump",
        body: "If everyone likes cookies, the mingle collapses. Add a tie-breaker: “chocolate or not chocolate” inside the clump, or cap clusters at five and start a second cookie group.",
      },
      {
        title: "Too many prompts",
        body: "Eight waves feels like speed dating. Three waves plus a harvest is enough for 15–20 minutes.",
      },
    ],
    originalVariant: {
      title: "Preference Passport (site original)",
      body: "Give each person a small card with three empty boxes. Each mingle wave, they collect one “stamp” (initials) from someone who matched them. They may not stamp the same person twice. After three stamps they sit with their last match and compare passports for 60 seconds. This keeps popular answers from forming a 20-person blob and gives quieter guests a concrete task besides talking.",
    },
    adultsWork:
      "For office holiday parties, print a winter-holiday deck and skip childhood-memory prompts. For client mixers, keep answers work-safe (food, travel timing, movies). If the event includes people who do not celebrate Christmas, say so in the first sentence and use the inclusive deck. Pair this mixer with a seated follow-up from our Christmas table games guide if dinner starts immediately after.",
    faqs: [
      {
        q: "How do you play Christmas Connection?",
        a: "Prepare holiday preference questions. People mingle to find others with similar answers, form small clusters, then share one theme with the room. Time-box three waves and allow anyone to pass.",
      },
      {
        q: "What if guests do not celebrate Christmas?",
        a: "Use winter or year-end preference prompts and say that up front. The mechanic is matching on taste, not proving holiday credentials.",
      },
      {
        q: "How many people can play?",
        a: "It works best with 10–50 people. Larger groups need zones or two sessions so conversations stay audible.",
      },
      {
        q: "Can you play Christmas Connection at work?",
        a: "Yes, if you drop religion, family, and money prompts. Food, lights, travel timing, and movies are usually safe. Keep it optional.",
      },
      {
        q: "How is this different from Christmas Pick a Side?",
        a: "Pick a Side moves the whole room left or right on binary choices. Christmas Connection is a mingle that builds small clusters around similar answers, then harvests a few themes.",
      },
    ],
    sources: [
      { label: "Christmas table icebreaker games", href: "/blog/christmas-table-icebreaker-games" },
      { label: "Icebreaker games for adults in large groups", href: "/blog/ice-breaker-games-for-adults-large-groups" },
      { label: "Browse all ice breaker games", href: "/games" },
    ],
  },

  "motion-name-game": {
    howToSteps: [
      {
        title: "Check bodies and space before you start",
        body: "You need a circle where everyone can see everyone, plus room to raise arms without hitting a neighbor. Offer a seated or small-gesture version before anyone stands. If anyone uses a mobility aid, model a finger or shoulder motion first so they are not the exception.",
      },
      {
        title: "Set the memory rule",
        body: "Each person says their name and shows one repeatable motion (a wave, a clap pattern, a sports mime). The group repeats name + motion immediately. Then the next person goes. You are not building a 30-person memory palace in one go unless the group is under 12.",
      },
      {
        title: "Chunk the circle",
        body: "For 8–12 people, you can grow the full sequence. For 13–30, split into two or three circles, or use “name + motion, group repeats that person only” without reciting the whole chain. Reciting 25 names is where this game dies.",
      },
      {
        title: "Do one recall round, then stop",
        body: "After the last person, pick three volunteers to replay someone else’s motion while the group names them. Keep it kind: no “gotcha” if a name is missed. Thank the room and move to the agenda. The point is faces-to-names, not a performance.",
      },
    ],
    variations: [
      {
        title: "Seated / desk version",
        body: "Everyone stays in chairs. Motions must be above the table: two snaps, a book-open mime, a typing flourish. Use this in classrooms and conference rooms with fixed seating.",
      },
      {
        title: "Work meeting version",
        body: "Name + role + a tiny motion. Ban dance moves. Time-box to 8 minutes. Skip the growing-list variant so you do not eat the standup.",
      },
      {
        title: "Virtual version",
        body: "Gallery view, one person at a time. Motion must read on camera (wave, mug lift, headphone tap). Others repeat on mute. Type names in chat as a backup for late joiners.",
      },
    ],
    rulesTiming: [
      {
        label: "Players",
        body: "8–30. Below 8, a simple name-and-role round is enough. Above 30, split rooms.",
      },
      {
        label: "Time",
        body: "8–12 minutes. Budget 20–25 seconds per person including the group repeat.",
      },
      {
        label: "Materials",
        body: "Open space or a clear sightline. No props.",
      },
      {
        label: "House rules",
        body: "Motions stay school- and work-safe. No mimicking someone’s disability, accent, or clothing. Pass or use a nod as the motion.",
      },
    ],
    whyItWorks:
      "Names stick better when they ride on a motor pattern, not on a list people hear once. Motion Name-Game is a dual-code opener: sound plus a distinctive gesture. It also equalizes talk time—everyone gets the same 10 seconds. It is a poor choice when people are in tight rows, when the culture punishes looking silly, or when you actually need a discussion icebreaker rather than name learning.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "We are going to attach a small motion to each name so faces stick. You can pass, or you can use a tiny seated gesture. Nothing has to be funny.",
      },
      {
        speaker: "Model",
        line: "I am Alex, and this is my two-finger wave. When I point at you, say Alex and do the wave with me.",
      },
      {
        speaker: "Chunk",
        line: "We will not recite all twenty names in a row. We repeat the person who just went, then we do one short recall round at the end.",
      },
      {
        speaker: "Close",
        line: "Three replays only. If you blank on a name, they can restate it. Then we sit and start the session.",
      },
    ],
    pitfalls: [
      {
        title: "The growing-list trap",
        body: "Repeating every previous name works for a dozen people and humiliates the last person in a group of 25. Chunk or drop the cumulative rule.",
      },
      {
        title: "Performative dancing",
        body: "If the first three people go big, later people feel they must entertain. Model a boring motion on purpose.",
      },
      {
        title: "Ignoring access",
        body: "Standing circles exclude some students and colleagues. Offer seated gestures in the first sentence, not as an afterthought.",
      },
    ],
    originalVariant: {
      title: "Silent Replay (site original)",
      body: "After one pass around the circle, you (the facilitator) perform three motions with no names. The group calls the names together. Then one volunteer does the same with two motions. No individual is put on the spot to recite the whole room. You still test memory, but the unit of success is the group, which keeps psychological safety intact.",
    },
    adultsWork:
      "For onboarding days, use name + team + a tiny motion and cap at 12 minutes. For recurring meetings where people already know names, skip this and use a check-in instead. Teachers can run the seated version in advisory; keep motions school-safe and never grade “energy.” Pair with other name games if you need a second pass later in the week rather than stacking two name games in one hour.",
    faqs: [
      {
        q: "How do you play the Motion Name-Game?",
        a: "Stand or sit in a circle. Each person says their name with a small motion. The group repeats that name and motion. Chunk large groups so nobody recites 20 names in a row. Finish with a short group recall.",
      },
      {
        q: "Is the Motion Name-Game good for shy people?",
        a: "It can be, if you model a tiny gesture and allow a pass. It is harder if early players turn it into a talent show. Set the tone with a boring example.",
      },
      {
        q: "Can you play it with high school students?",
        a: "Yes, especially in advisory or first-week classes. Use the seated version in cramped rooms and keep motions school-safe.",
      },
      {
        q: "How is it different from The Name Game?",
        a: "The Name Game usually adds a verbal cue (role, adjective, hobby) and may recap previous names. Motion Name-Game uses a physical cue and should avoid long cumulative recitals in large groups.",
      },
      {
        q: "What if someone cannot or does not want to move?",
        a: "A nod, a finger tap, or saying the name only is enough. Never require standing.",
      },
    ],
    sources: [
      { label: "Name game icebreakers", href: "/name-game-icebreakers" },
      { label: "Ice breaker games for high school students", href: "/icebreaker-games-for-high-school-students" },
      { label: "How to play The Name Game", href: "/games/the-name-game" },
      { label: "Chainlink icebreaker", href: "/games/chainlink" },
    ],
  },

  "team-superpower-collage": {
    howToSteps: [
      {
        title: "Frame it as team identity, not costume party",
        body: "Tell the group they will build one shared collage of capabilities the team wants to be known for—not personal superhero alter egos that invite mockery. Give two example tiles: “we close loops in writing” and “we ask the quiet person last.” Ban body comments and celebrity look-alike jokes.",
      },
      {
        title: "Set a tight canvas",
        body: "One whiteboard, mural, or slide. Four to six tiles maximum. If you let every person add a private superpower, you get a sticker wall with no shared language. Small groups of 3–5 discuss for 4 minutes, then each group may add only one tile.",
      },
      {
        title: "Use a constraint so it stays honest",
        body: "Each tile needs a concrete behavior (what people would see in a week) plus one “kryptonite” (a process gap that blocks that power). Example: power = “we decide in the room”; kryptonite = “decisions live only in Slack threads nobody owns.” Constraints keep this from becoming a pep-poster.",
      },
      {
        title: "Gallery and harvest, not a pitch contest",
        body: "Walk the collage for 3 minutes. Each small group explains their tile in 30 seconds. You star two tiles the whole room agrees to try until the next retro. Photograph the board. Do not vote on who was funniest.",
      },
    ],
    variations: [
      {
        title: "Remote whiteboard",
        body: "Use a shared board with sticky notes. Cameras on optional. Type first, then unmute only the spokesperson. Time-box stickies to 6 minutes of silent add, then 8 minutes of cluster-and-name.",
      },
      {
        title: "New-hire version",
        body: "Tiles must describe how this team already helps someone succeed in week one (docs, buddy, meeting norms). Skip fantasy powers.",
      },
      {
        title: "Training cohort version",
        body: "If people are not a real team, collage “skills we are practicing this course” instead of identity. Still cap tiles and still require a behavior.",
      },
    ],
    rulesTiming: [
      {
        label: "Players",
        body: "6–25. Below 6, do a verbal list on a doc. Above 25, split into two collages and compare.",
      },
      {
        label: "Time",
        body: "15–25 minutes: 2-minute brief, 4-minute huddles, 8-minute build, 5-minute harvest.",
      },
      {
        label: "Materials",
        body: "Whiteboard or shared slide, markers or stickies, optional printed icons. Magazines are optional and slow; skip them unless you have 25 minutes and a table.",
      },
      {
        label: "House rules",
        body: "No ranking people. No powers about appearance. Kryptonite must be a process, not a named coworker.",
      },
    ],
    whyItWorks:
      "Collage is a cheap way to make abstract “team values” visible. The useful part is not the artwork. It is forcing a group to name a behavior and the thing that usually blocks it. That is closer to a working agreement than to an icebreaker joke. Use it in training, offsites, and kickoffs after names are already known. Skip it as a first-minute opener with strangers—they have nothing honest to collage yet.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "We are building one team collage, not personal costumes. Each small group gets one tile: a power we want to be known for, written as a behavior we could observe next week.",
      },
      {
        speaker: "Constraint",
        line: "Every tile also needs a kryptonite: a process gap, not a person. If the power is “we decide in the room,” the kryptonite might be “decisions vanish into chat.”",
      },
      {
        speaker: "Time",
        line: "Four minutes in groups of three to five. Then eight minutes at the board. I will stop you while there is still space on the canvas.",
      },
      {
        speaker: "Close",
        line: "We will star two tiles to try until our next retro. Everything else stays on the photo as a backlog, not a personality test.",
      },
    ],
    pitfalls: [
      {
        title: "Superhero cosplay",
        body: "If people draw capes and punch names, you have entertainment without a decision. Re-state the behavior rule and ask them to rewrite the tile.",
      },
      {
        title: "Too many tiles",
        body: "A 20-sticky mural is unread. Cap at six tiles for the whole group.",
      },
      {
        title: "Kryptonite as blame",
        body: "If a tile names a person, stop and rewrite it as a system (“handoffs have no owner”).",
      },
    ],
    originalVariant: {
      title: "Two-tile contract (site original)",
      body: "After the collage, the group may keep only two tiles as a 30-day contract. Photograph those two. At the next meeting, spend 3 minutes scoring each tile: observed / not observed this week. Retire or rewrite a tile that never showed up. This turns a creative icebreaker into a lightweight working-agreement loop without extra software.",
    },
    adultsWork:
      "For work kickoffs, this belongs after a name-learning opener, not instead of one. Keep language work-safe and skip magazine collage if you are in a suit-and-badge environment—sticky notes on a board are enough. Managers should add a tile last, not first, so they do not anchor the art. Use it in training rooms where a cohort needs a shared vocabulary for the week.",
    faqs: [
      {
        q: "How do you facilitate Team Superpower Collage?",
        a: "Brief the behavior-plus-kryptonite rule, huddle in small groups, add a few tiles to one canvas, then harvest two tiles to try. Do not run it as a costume contest.",
      },
      {
        q: "What materials do you need?",
        a: "A whiteboard or shared slide and stickies is enough. Magazines and scissors are optional and often waste time.",
      },
      {
        q: "Is this a good first icebreaker for strangers?",
        a: "Usually no. People need a little context about the work. Start with a name or check-in game, then collage.",
      },
      {
        q: "Can remote teams do it?",
        a: "Yes, on a shared board. Silent sticky time first, then one spokesperson per group. Keep cameras optional.",
      },
      {
        q: "How do you keep it from feeling childish?",
        a: "Require observable behaviors, cap the number of tiles, and attach a process kryptonite. Skip capes.",
      },
    ],
    sources: [
      { label: "Icebreaker games for work", href: "/icebreaker-games-for-work" },
      { label: "Ice breaker games for meetings", href: "/icebreaker-games-for-meetings" },
      { label: "How we choose icebreaker games", href: "/how-we-choose-icebreakers" },
    ],
  },
};

export function getGamePageExtras(slug: string): GamePageExtrasContent | null {
  return GAME_PAGE_EXTRAS[slug] ?? null;
}

export function getGamePageFaqs(slug: string): GameFaqItem[] {
  return GAME_PAGE_EXTRAS[slug]?.faqs ?? [];
}
