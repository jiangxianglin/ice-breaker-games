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
        title: "Classroom prompts",
        body: "Use three school-safe prompts: mood today, favorite activity, and one thing they are curious about. Offer a pass option and keep explanations under 30 seconds.",
      },
      {
        title: "Large-group pattern share",
        body: "One emoji per person in chat. Discuss patterns (lots of coffee cups, lots of sleepy faces) instead of asking everyone to explain individually.",
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
    whyItWorks:
      "Emoji Introduction works because people can show something personal without a long monologue—chat-first sharing lowers the barrier for quieter voices, and a one-sentence decode keeps the room curious instead of bored. It fails when everyone must unmute and explain, when the prompt asks for status symbols (job level, salary vibe, exclusivity), or when you treat wrong guesses as a quiz. Skip it if the group cannot use chat or sticky notes, or if you need name learning more than mood/hobby signals—use a name game instead.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "Pick two or three emojis that represent you—or your week. Post them in chat at the same time. Pass is fine. I’ll model first.",
      },
      {
        speaker: "Model",
        line: "Mine are coffee, books, and a bike. One sentence: I live on caffeine, learn for fun, and ride when I can.",
      },
      {
        speaker: "Close",
        line: "I’m hearing lots of [theme]. We’ll keep explanations short and move into the agenda while that curiosity is still up.",
      },
    ],
    pitfalls: [
      {
        title: "Unlimited unmute tour",
        body: "If every person explains aloud in a 20+ room, the opener eats the meeting. Cap spoken shares or keep most answers chat-only.",
      },
      {
        title: "Vague or status-heavy emojis",
        body: "Generic hearts or flex symbols invite awkward guesses. Ask for concrete hobbies, tools, pets, or places—and ban anything that ranks people.",
      },
      {
        title: "No pass rule",
        body: "Forcing a share turns a light visual intro into pressure. Say pass is full participation before the first post.",
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
    sources: [
      { label: "Emoji icebreaker games", href: "/emoji-icebreaker-games" },
      { label: "Emoji Check-In", href: "/games/emoji-check-in" },
      { label: "Short virtual icebreakers", href: "/short-virtual-icebreakers" },
      { label: "Funny icebreaker games for meetings", href: "/funny-icebreaker-games-for-meetings" },
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

  "common-ground": {
    howToSteps: [
      {
        title: "Explain the search, not the confession",
        body: "Tell the group they will find shared interests or experiences in a short timed round—not personal trauma stories. Give category examples: hobbies, food, tools, weekend habits, learning goals. Announce pass and “keep it work- or school-safe.”",
      },
      {
        title: "Pair or trio for two to four minutes",
        body: "People stand or stay seated in twos or threes. They list as many commonalities as they can that are not obvious (not “we all work here”). Visible timer. If the room is large, assign zones so people do not shout across the hall.",
      },
      {
        title: "Rotate once",
        body: "Call a switch. New partners for two minutes. Cap at two rounds unless you have a full workshop block. Three rounds usually feel repetitive.",
      },
      {
        title: "Harvest two themes",
        body: "Ask for two volunteer pairs to name one surprising commonality each (10–15 seconds). You mirror patterns (“lots of podcast people”) and move to the agenda. Do not force every pair to report.",
      },
    ],
    variations: [
      {
        title: "Chat Common Ground (virtual)",
        body: "In breakouts of 3, people type commonalities in the breakout chat first, then unmute for 60 seconds. Return and paste one line into main chat.",
      },
      {
        title: "Category cards",
        body: "Hand each pair a card with one category (food, sports, apps, commute). Limits blank stares and keeps school groups on-topic.",
      },
      {
        title: "Unique + Shared combo",
        body: "After one Common Ground round, add one unique fact each. Bridges into Unique and Shared without a second long game.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "6–40. Above 40, run zones or sample pairs only." },
      { label: "Time", body: "8–12 minutes including brief and harvest." },
      { label: "Materials", body: "Timer; optional category cards." },
      {
        label: "House rules",
        body: "No scoring “most commonalities wins” if it pushes oversharing. Ban dating, money, and family-conflict topics in school and work rooms.",
      },
    ],
    whyItWorks:
      "Common Ground works when similarity is a door to conversation, not a contest. Short timed searches lower the social cost of starting talk. It fails when categories are too intimate, when pairs have nothing safe in common and freeze, or when you skip the model round. New groups and visitor-heavy rooms need category cards more than free-form searching.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "You will find things you share that are not obvious—hobbies, food, tools, weekend habits. Pass is fine. Keep it school- and work-safe.",
      },
      {
        speaker: "Model",
        line: "If I pair with Sam, we might share ‘both commute with podcasts’—not ‘both work at this company.’ Specific beats generic.",
      },
      {
        speaker: "Time",
        line: "Two minutes. Timer is visible. When I call switch, thank your partner and find a new one.",
      },
      {
        speaker: "Close",
        line: "Two pairs only: one surprising commonality each. Then we start the agenda.",
      },
    ],
    pitfalls: [
      {
        title: "Obvious commons only",
        body: "‘We are all human’ wastes the round. Require at least one specific, optional detail.",
      },
      {
        title: "Forced reporting",
        body: "Making every pair speak creates a parade. Harvest two voices and stop.",
      },
      {
        title: "Intimate categories",
        body: "Health, politics, and family conflict do not belong in a first mixer. Stick to preference-level topics.",
      },
    ],
    originalVariant: {
      title: "Three-strike card (site original)",
      body: "Each person gets a card with three blank lines. In round one they fill one shared item with partner A; round two, one with partner B; they leave the third blank on purpose. At the end they keep the card as a personal memory aid—no group read-aloud of the full card. Quieter people leave with notes without performing.",
    },
    adultsWork:
      "For work kickoffs, use tool and hobby categories. For church small groups with visitors, prefer food and weekend prompts over testimony. For teens and high school, pair with a category card and ban dating prompts. Continue with Common Ground alternatives on the games-like Two Truths hub when you want storytelling instead of similarity search.",
    faqs: [
      {
        q: "How do you play Common Ground?",
        a: "Pairs or trios have a few minutes to list shared interests that are not obvious. Optionally rotate partners once, then harvest one or two examples for the room.",
      },
      {
        q: "How long does Common Ground take?",
        a: "Usually 8–12 minutes including the brief and a short harvest.",
      },
      {
        q: "What if people cannot find anything in common?",
        a: "Hand out category cards, allow ‘we both dislike X,’ or switch to a preference poll like This or That.",
      },
      {
        q: "Can Common Ground be virtual?",
        a: "Yes. Use breakout rooms of three, type first in chat, then unmute briefly.",
      },
      {
        q: "Is Common Ground good for shy groups?",
        a: "Yes if you model a boring example, use categories, and do not force every pair to report out.",
      },
    ],
    sources: [
      { label: "Ice breaker games for small groups", href: "/icebreaker-games-for-small-groups" },
      { label: "Icebreaker games for church", href: "/icebreaker-games-for-church" },
      { label: "Games like Two Truths and a Lie", href: "/games-like-two-truths-and-a-lie" },
      { label: "Ice breaker games for meetings", href: "/icebreaker-games-for-meetings" },
    ],
  },

  "would-you-rather": {
    howToSteps: [
      {
        title: "Write binary prompts that stay light",
        body: "Prepare 8–12 either/or questions. Prefer taste, tools, and silly hypotheticals over moral dilemmas or trauma choices. Example: mountains or beach; async docs or live debate; early bird or night owl.",
      },
      {
        title: "Show how to answer",
        body: "You pick a side in one sentence. Optional one-line why. Pass is allowed. No debating the ‘correct’ answer.",
      },
      {
        title: "Run quick rounds",
        body: "Read a prompt. People move to sides of the room, raise hands, or type A/B in chat. Sample one voice per side for 10 seconds. Move on while energy is high—usually 6–10 prompts.",
      },
      {
        title: "Close without a winner",
        body: "Name one pattern (“this room loves async”) and start the agenda. Do not score people.",
      },
    ],
    variations: [
      {
        title: "Seated hand-raise",
        body: "No movement. Left hand vs right hand. Use in lecture halls and formal rooms.",
      },
      {
        title: "Virtual A/B chat",
        body: "Everyone types A or B on three. Spot-check two unmutes. Fits short virtual agendas.",
      },
      {
        title: "Work decision warm-up",
        body: "Use product or process pairs (ship Tuesday or Thursday; docs or slides) before a real decision meeting.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "6–100+. Large rooms need a mic and seated options." },
      { label: "Time", body: "5–10 minutes for 6–10 prompts." },
      { label: "Materials", body: "Prompt list; optional slide." },
      {
        label: "House rules",
        body: "No humiliation prompts. No forced justification. Skip any question someone flags.",
      },
    ],
    whyItWorks:
      "Would You Rather works as a low-disclosure preference poll with optional movement. The binary structure is easy to explain. It fails when prompts are creepy, political, or force people to defend identity. It is a poor opener after bad news—skip the game and go to the topic.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "These are preference questions, not tests. Pick a side, or pass. One sentence of why is optional.",
      },
      {
        speaker: "Model",
        line: "Mountains or beach? I am mountains—quieter weekends. Your turn on the next one.",
      },
      {
        speaker: "Pace",
        line: "Ten seconds to choose. One voice per side if we have time. Next prompt.",
      },
      {
        speaker: "Close",
        line: "I heard a lot of async fans. We will use that energy in the next discussion.",
      },
    ],
    pitfalls: [
      {
        title: "Edgy internet prompts",
        body: "Party-game lists often include gross or personal traps. Curate a clean deck for work and school.",
      },
      {
        title: "Debate spiral",
        body: "If sides start arguing, cut to the next prompt. This is not a panel.",
      },
      {
        title: "Too many prompts",
        body: "Fifteen rounds feels like a quiz show. Six to ten is enough.",
      },
    ],
    originalVariant: {
      title: "Rather → Retro (site original)",
      body: "After three fun prompts, ask one work- or class-relevant rather (“document decisions in the room or in chat?”). Capture the majority on a sticky. That single sticky becomes a 30-day trial norm—turning a silly opener into a lightweight agreement without a second activity.",
    },
    adultsWork:
      "For meetings, mix silly and process prompts. For teens and high school, ban body and dating questions. For virtual rooms, prefer chat A/B. If you need laughs with less disclosure, compare with funny meeting icebreakers on the hub, then return here for the binary format.",
    faqs: [
      {
        q: "How do you play Would You Rather as an icebreaker?",
        a: "Ask either/or questions. People pick a side by moving, raising hands, or typing A/B. Optionally hear one short reason per side, then move on.",
      },
      {
        q: "How many Would You Rather questions should I ask?",
        a: "Six to ten in five to ten minutes. Stop while energy is still high.",
      },
      {
        q: "What are good work-safe Would You Rather prompts?",
        a: "Coffee or tea; cameras on or optional; docs or slides; early standup or late; ship Tuesday or Thursday.",
      },
      {
        q: "Can shy people play without talking?",
        a: "Yes. Hand-raise or chat votes are enough. Do not require a spoken why.",
      },
      {
        q: "When should I skip Would You Rather?",
        a: "Skip when the topic is heavy, time is gone, or you only have edgy prompts on hand.",
      },
    ],
    sources: [
      { label: "Funny ice breaker games for meetings", href: "/funny-icebreaker-games-for-meetings" },
      { label: "Free fun icebreaker games", href: "/free-fun-icebreaker-games" },
      { label: "Ice breaker games for teens", href: "/icebreaker-games-for-teens" },
      { label: "Virtual ice breaker games", href: "/virtual-icebreaker-games" },
    ],
  },

  "this-or-that-questions": {
    howToSteps: [
      {
        title: "Build a short preference list",
        body: "Prepare 8–12 this-or-that pairs. Keep them fast: coffee or tea; books or movies; morning or night. Avoid moral traps.",
      },
      {
        title: "Choose a response channel",
        body: "Hands, stand-to-side, or chat. Tell people they can pass. Model one answer in five seconds.",
      },
      {
        title: "Run brisk rounds",
        body: "Read pair. Collect answers. Optionally ask two people for a one-line why. Advance every 30–45 seconds.",
      },
      {
        title: "Bridge to the meeting",
        body: "If you used a process pair, note the majority. Otherwise thank the room and start the agenda.",
      },
    ],
    variations: [
      {
        title: "Emoji this-or-that",
        body: "Assign two emojis for the options. Everyone drops one emoji in chat on three.",
      },
      {
        title: "Silent continuum",
        body: "People stand along a wall from “this” to “that.” No talking. Photograph for fun only if everyone consents—default is no photos.",
      },
      {
        title: "Project this-or-that",
        body: "Replace lifestyle pairs with project choices before a planning session.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "4–60+ with a clear signal." },
      { label: "Time", body: "5–8 minutes." },
      { label: "Materials", body: "Prompt list or slide." },
      {
        label: "House rules",
        body: "No shame for minority answers. Pass allowed. Keep school/work decks clean.",
      },
    ],
    whyItWorks:
      "This or That is Would You Rather’s calmer cousin: shorter prompts, less hypothetical drama, easy chat play. Use it when you need energy without a story. Skip when the room needs names first—run a name game, then preferences.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "Quick preferences only. Coffee or tea—show of hands. Pass if you want.",
      },
      {
        speaker: "Pace",
        line: "Three seconds to choose. I will not call on everyone. Next pair.",
      },
      {
        speaker: "Optional why",
        line: "One volunteer for coffee, one for tea—five seconds each.",
      },
      {
        speaker: "Close",
        line: "Thanks—preferences noted. Agenda time.",
      },
    ],
    pitfalls: [
      {
        title: "Slow storytelling",
        body: "If people give speeches, cut the why. The format is a poll, not a panel.",
      },
      {
        title: "Loaded pairs",
        body: "Replace identity or politics pairs with taste and process pairs.",
      },
    ],
    originalVariant: {
      title: "Two-channel vote (site original)",
      body: "Run the first four pairs as silent hand-raises. Run the last two as chat-only. Then ask: which channel felt easier? That 30-second meta question helps hybrid rooms agree how they will vote in the real meeting—without a second icebreaker.",
    },
    adultsWork:
      "Ideal for standups and workshops that need a two-minute pulse. For church rooms with visitors, keep prompts about food, weather, and weekends. For teens, keep it light and optional. Pair with One Word Check-In when you need words instead of binaries.",
    faqs: [
      {
        q: "How do you play This or That Questions?",
        a: "Offer two options. People choose with hands, movement, or chat. Optionally hear a short why, then move to the next pair.",
      },
      {
        q: "How is This or That different from Would You Rather?",
        a: "This or That is usually shorter lifestyle or process pairs. Would You Rather often uses bigger hypotheticals. Both should stay optional and clean.",
      },
      {
        q: "How long should This or That take?",
        a: "Five to eight minutes for about eight pairs.",
      },
      {
        q: "Can it work on Zoom?",
        a: "Yes. Use chat letters or reactions. Keep unmutes optional.",
      },
      {
        q: "What are good This or That examples?",
        a: "Coffee or tea; books or movies; early or late meetings; slides or docs; indoor or outdoor breaks.",
      },
    ],
    sources: [
      { label: "Ice breaker games for meetings", href: "/icebreaker-games-for-meetings" },
      { label: "Short virtual icebreakers", href: "/short-virtual-icebreakers" },
      { label: "Icebreaker games for work", href: "/icebreaker-games-for-work" },
      { label: "One Word Check-In", href: "/games/one-word-check-in" },
    ],
  },

  "the-name-game": {
    howToSteps: [
      {
        title: "Decide cumulative vs chunked",
        body: "Under ~12 people, a growing list can work. Above that, repeat only the person who just spoke—or split circles. Reciting 25 names humiliates the last person.",
      },
      {
        title: "Add a light memory cue",
        body: "Name + role, hobby, or adjective. Keep cues positive and optional. Model a boring cue on purpose.",
      },
      {
        title: "Allow help immediately",
        body: "If someone blanks, neighbors may whisper the name. Frame forgetting as normal. Name tags help.",
      },
      {
        title: "One recall, then stop",
        body: "Do not run three full circles. After one pass, ask two volunteers to name the people beside them, thank the room, and start.",
      },
    ],
    variations: [
      {
        title: "Name + gesture",
        body: "Small seated motion instead of a long verbal list. See also Motion Name-Game.",
      },
      {
        title: "Chat backup (virtual)",
        body: "People type names in chat as they speak for late joiners.",
      },
      {
        title: "Role-first work meeting",
        body: "Name + role + one current project if useful. Skip adjectives if the culture is formal.",
      },
      {
        title: "Classroom memory hooks",
        body: "Pair each name with a favorite subject, hobby, or simple adjective so students have a memory cue without turning it into a talent show.",
      },
      {
        title: "Split circles for large groups",
        body: "Break into circles of 6–10 instead of one long round, then invite a few names to be shared back to the full room.",
      },
      {
        title: "Shy groups with name tags",
        body: "Let people read from visible name tags and treat blanks as normal—neighbors may help immediately so forgotten names never become a test.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "6–20 per circle; split larger groups." },
      { label: "Time", body: "8–12 minutes." },
      { label: "Materials", body: "Optional name tags; open sightlines." },
      {
        label: "House rules",
        body: "No mocking forgotten names. Pass or nod-only is allowed. Accessible seated options first.",
      },
    ],
    whyItWorks:
      "The Name Game attaches sound and a cue to faces. It is for name learning, not entertainment. It fails when the cumulative list grows too long or when early players turn cues into a talent show. If names are already known, skip it and use a check-in instead.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "We will learn names with a short cue. You can pass. Neighbors may help if someone blanks—that is success, not failure.",
      },
      {
        speaker: "Model",
        line: "I am Alex, ops. When it is your turn, say previous names if we are in the small circle—or just your own if we are chunking.",
      },
      {
        speaker: "Chunk",
        line: "We are not reciting all twenty names. Repeat the person before you, then add yours.",
      },
      {
        speaker: "Close",
        line: "Two quick recalls only. Then we sit and start.",
      },
    ],
    pitfalls: [
      {
        title: "Growing-list trap",
        body: "Drop cumulative recall above a dozen people.",
      },
      {
        title: "Performative adjectives",
        body: "Model a plain cue so later people do not feel pressure to entertain.",
      },
      {
        title: "Standing-only circles",
        body: "Offer seated play from the first sentence.",
      },
    ],
    originalVariant: {
      title: "Neighbor-only recall (site original)",
      body: "After one pass, each person turns to the person on their right and says that one name aloud. No full-room recital. You still test memory, but failure is private and recoverable. Then everyone faces center and you start the session.",
    },
    adultsWork:
      "Use on onboarding days and first workshops. For teens and high school advisory, keep cues school-safe. For recurring meetings, skip name games. Compare Chainlink and Motion Name-Game when you want linking or movement instead of a list.",
    faqs: [
      {
        q: "How do you play The Name Game icebreaker?",
        a: "Each person says their name with a short cue. In small groups they may repeat previous names; in larger groups, chunk so nobody recites the whole room.",
      },
      {
        q: "How many people can play The Name Game?",
        a: "Best with 6–20 per circle. Split larger groups.",
      },
      {
        q: "Is The Name Game good for students?",
        a: "Yes, especially first week. Use help-allowed rules and optional cues.",
      },
      {
        q: "How do you make The Name Game less awkward?",
        a: "Name tags, a boring model, immediate help, and no shaming for blanks.",
      },
      {
        q: "How is it different from Motion Name-Game?",
        a: "The Name Game uses a verbal cue; Motion Name-Game uses a small gesture. Both should avoid long cumulative lists in big rooms.",
      },
    ],
    sources: [
      { label: "Name game icebreakers", href: "/name-game-icebreakers" },
      { label: "Motion Name-Game", href: "/games/motion-name-game" },
      { label: "Chainlink icebreaker", href: "/games/chainlink" },
      { label: "Ice breaker games for high school students", href: "/icebreaker-games-for-high-school-students" },
    ],
  },

  "one-word-check-in": {
    howToSteps: [
      {
        title: "Pick one prompt",
        body: "Examples: one word for your energy; one word for your focus; one word for what you need from this meeting. One prompt only.",
      },
      {
        title: "Choose the channel",
        body: "Go-around, chat waterfall, or volunteer sample. Announce that silence or “pass” is valid.",
      },
      {
        title: "Collect without diagnosing",
        body: "Do not probe why someone said “stormy” or “tired.” Mirror one or two themes in ten seconds.",
      },
      {
        title: "Start the agenda",
        body: "Total run time should stay inside three to five minutes for routine meetings.",
      },
    ],
    variations: [
      {
        title: "Chat-first hybrid",
        body: "Everyone types; unmute only if they want. Best for large Zoom rooms.",
      },
      {
        title: "Weekly rotating prompt",
        body: "Same ritual, new word focus each week for recurring teams.",
      },
      {
        title: "Weather metaphor upgrade",
        body: "If one word feels blunt, switch to Weather Check-In.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "4–40; sample voices above ~20." },
      { label: "Time", body: "3–5 minutes." },
      { label: "Materials", body: "None; chat optional." },
      {
        label: "House rules",
        body: "No follow-up interrogation. Pass allowed. Keep words optional.",
      },
    ],
    whyItWorks:
      "One Word Check-In is an arrival ritual, not a mixer. It equalizes talk time and gives the facilitator a pulse. It fails when you turn each word into a therapy prompt or when the agenda already needed those three minutes for a decision.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "One word for your focus today. Pass is fine. Chat is fine.",
      },
      {
        speaker: "Collect",
        line: "I will read themes, not call everyone out.",
      },
      {
        speaker: "Mirror",
        line: "I hear focused, curious, and a few ‘tired’s. Thanks.",
      },
      {
        speaker: "Close",
        line: "Agenda starts now.",
      },
    ],
    pitfalls: [
      {
        title: "Forced poetry",
        body: "Do not require clever words. ‘Okay’ is enough.",
      },
      {
        title: "Manager diagnosis",
        body: "Never publicly analyze someone’s mood word.",
      },
    ],
    originalVariant: {
      title: "Word + need (site original)",
      body: "After the one-word round in chat, ask optionally for a second word that is a need from the meeting (clarity, decision, quiet). Facilitator only reads needs in aggregate (“three clarity, two decision”)—never attaches needs to names. Shapes the agenda without a second icebreaker.",
    },
    adultsWork:
      "Default opener for standups and recurring work meetings. For teens, keep it optional and never grade energy. For church visitors, prefer preference polls if mood shares feel exposed. Compare Weather Check-In and Emoji Check-In for metaphor or emoji channels.",
    faqs: [
      {
        q: "How do you run a One Word Check-In?",
        a: "Ask for one word on a single prompt. Collect via go-around or chat, mirror themes, and start the agenda within a few minutes.",
      },
      {
        q: "How long should it take?",
        a: "Three to five minutes for most teams.",
      },
      {
        q: "What if someone passes?",
        a: "Accept it and move on. Pass is a valid contribution.",
      },
      {
        q: "Is it good for virtual meetings?",
        a: "Yes—especially chat-first so people are not forced to unmute.",
      },
      {
        q: "How is it different from Weather Check-In?",
        a: "One Word asks for a single word. Weather Check-In uses a weather metaphor for more nuance without a long story.",
      },
    ],
    sources: [
      { label: "Ice breaker games for meetings", href: "/icebreaker-games-for-meetings" },
      { label: "Weather Check-In", href: "/games/weather-check-in" },
      { label: "Emoji Check-In", href: "/games/emoji-check-in" },
      { label: "Short virtual icebreakers", href: "/short-virtual-icebreakers" },
    ],
  },

  "six-word-memoirs": {
    howToSteps: [
      {
        title: "Explain the constraint",
        body: "Everyone writes exactly six words about a prompt: today, this team, this week, or a goal. Not a life story unless the group already trusts each other.",
      },
      {
        title: "Silent write for 60–90 seconds",
        body: "Paper or chat draft. No judging spelling. Pass allowed—people may write and not share.",
      },
      {
        title: "Share selectively",
        body: "Volunteers read aloud, or everyone pastes in chat. Cap spoken shares so you finish in time.",
      },
      {
        title: "Optional theme board",
        body: "Note two recurring words on a flip chart. Do not critique anyone’s memoir.",
      },
    ],
    variations: [
      {
        title: "Team six words",
        body: "Small groups write one shared six-word line about the project.",
      },
      {
        title: "Humor round",
        body: "Prompt for a funny six-word day summary—still school/work safe.",
      },
      {
        title: "Chat-only virtual",
        body: "Paste six words; reactions only; no unmutes required.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "4–30 for spoken shares; larger with chat-only." },
      { label: "Time", body: "8–12 minutes." },
      { label: "Materials", body: "Paper or digital notes." },
      {
        label: "House rules",
        body: "No grading writing. No requiring personal trauma. Pass on reading aloud.",
      },
    ],
    whyItWorks:
      "The six-word limit forces brevity and often invites wit. It works after people already know names. It fails as a first-minute stranger opener when the prompt is “your life story,” or when managers treat memoirs as performance reviews.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "Six words about your focus this week. You may write and not read aloud.",
      },
      {
        speaker: "Time",
        line: "Ninety seconds to write. Timer is running.",
      },
      {
        speaker: "Share",
        line: "Volunteers only—or paste in chat. Celebrate brevity, not drama.",
      },
      {
        speaker: "Close",
        line: "I heard ‘ship’ and ‘clarify’ a lot. Onto the agenda.",
      },
    ],
    pitfalls: [
      {
        title: "Life-story prompt on day one",
        body: "Use today/this week prompts for new groups.",
      },
      {
        title: "Forced reading",
        body: "Chat paste or pass must be real options.",
      },
    ],
    originalVariant: {
      title: "Six words → one sticky (site original)",
      body: "After shares, the group may keep only one six-word line as the meeting’s working title on a sticky. Retire it next week. Turns memoirs into a disposable framing device instead of a keepsake performance.",
    },
    adultsWork:
      "Good for workshops and offsites after a check-in. For teens, keep prompts about the day or class, not family history. For church visitors, avoid testimony pressure—use “this week” prompts. Links well after Common Ground when the room is warm.",
    faqs: [
      {
        q: "How do you play Six Word Memoirs?",
        a: "People write exactly six words on a prompt, then optionally share aloud or in chat.",
      },
      {
        q: "Do the six words have to be about your whole life?",
        a: "No. For icebreakers, prompt today, this week, this team, or a goal.",
      },
      {
        q: "How long does it take?",
        a: "About 8–12 minutes including writing and a short share.",
      },
      {
        q: "Can introverts participate without speaking?",
        a: "Yes. Writing-only or chat paste is enough.",
      },
      {
        q: "What are example six-word memoirs?",
        a: "“Coffee first, then clear decisions.” “Learning names, still finding rhythm.” “Quiet week, loud inbox.”",
      },
    ],
    sources: [
      { label: "Ice breaker games for meetings", href: "/icebreaker-games-for-meetings" },
      { label: "Ice breaker games for small groups", href: "/icebreaker-games-for-small-groups" },
      { label: "Icebreaker games for church small groups", href: "/icebreaker-games-for-church-small-groups" },
      { label: "Common Ground", href: "/games/common-ground" },
    ],
  },

  "rock-paper-scissors-tournament": {
    howToSteps: [
      {
        title: "Explain best-of-one and the cheer rule",
        body: "People play rock-paper-scissors. Loser joins the winner’s cheer squad. Winners keep playing winners until one champion remains—or until you stop at final four.",
      },
      {
        title: "Clear the floor safely",
        body: "Enough space to stand without bumping. Offer a seated clap-along for anyone who cannot play. No running.",
      },
      {
        title: "Signal start loudly",
        body: "On your count, pairs play. Winners raise hands to find new opponents. Keep rounds under 30 seconds.",
      },
      {
        title: "End on a celebration, not a roast",
        body: "Cheer the finalists. Thank cheer squads. Do not mock losers—there are none if everyone is cheering.",
      },
    ],
    variations: [
      {
        title: "Final-four stop",
        body: "End when four remain; all four win a small optional recognition. Faster for agendas.",
      },
      {
        title: "Virtual emoji tournament",
        body: "People type R/P/S in chat in pairs via breakout or assigned partners. Harder to scale—use only for small groups.",
      },
      {
        title: "Silent tournament",
        body: "No yelling; hands only. Better for shared office floors.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "12–200 with space; under 12 feels thin." },
      { label: "Time", body: "5–10 minutes." },
      { label: "Materials", body: "Open floor; optional bracket board." },
      {
        label: "House rules",
        body: "No body contact beyond the gesture. Seated option required. Stop if the room gets unsafe.",
      },
    ],
    whyItWorks:
      "The tournament creates shared noise and a clear end state without personal disclosure. Cheer squads keep “losers” engaged. It fails in tight rows, formal ceremonies, or when someone cannot stand and you forgot a seated role. Not for crisis meetings.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "We will play rock-paper-scissors. If you lose, you cheer for the person who beat you. Seated clap-along is a full role.",
      },
      {
        speaker: "Start",
        line: "Find a partner. On three—one, two, three. Winners hands up.",
      },
      {
        speaker: "Pace",
        line: "Winners find winners. Cheer squads follow your champion.",
      },
      {
        speaker: "Close",
        line: "Final cheer for everyone who played or clapped. Sit—agenda time.",
      },
    ],
    pitfalls: [
      {
        title: "No cheer rule",
        body: "Without squads, losers disengage. Teach the cheer in the first sentence.",
      },
      {
        title: "Unsafe stampede",
        body: "Zone the room. No sprinting across cables.",
      },
    ],
    originalVariant: {
      title: "Squad interview (site original)",
      body: "When someone joins a cheer squad, they must learn the champion’s first name before the next bout. Finalists introduce their squad by name. Adds name learning without a second game—use only if acoustics allow.",
    },
    adultsWork:
      "Strong large-group energizer for orientations and conferences. For teens and youth nights, watch volume and space. For work offsites, keep it optional and brief. See large-group adult guidance for run sheets above 30 people.",
    faqs: [
      {
        q: "How do you run a Rock Paper Scissors Tournament icebreaker?",
        a: "Pairs play; losers become cheerleaders for winners; winners keep playing until you crown a finalist or stop at final four.",
      },
      {
        q: "How many people can play?",
        a: "It scales from about 12 to very large rooms if you have floor space and a loud signal.",
      },
      {
        q: "How long does it take?",
        a: "Usually 5–10 minutes.",
      },
      {
        q: "What if someone does not want to play?",
        a: "Offer seated cheer or clap roles. Never force the gesture game.",
      },
      {
        q: "Does it work virtually?",
        a: "Only for small groups with typed R/P/S. In-person is the native format.",
      },
    ],
    sources: [
      { label: "Icebreaker games for adults in large groups", href: "/blog/ice-breaker-games-for-adults-large-groups" },
      { label: "Ice breaker games for teens", href: "/icebreaker-games-for-teens" },
      { label: "Free fun icebreaker games", href: "/free-fun-icebreaker-games" },
      { label: "Ice breaker games for youth group", href: "/icebreaker-games-for-youth-group" },
    ],
  },

  "never-have-i-ever": {
    howToSteps: [
      {
        title: "Rewrite the prompt deck before you arrive",
        body: "Party versions often shame people. Build a clean list: travel, food, skills, hobbies, mild work-safe firsts. Ban dating, alcohol-for-minors, illegal acts, and trauma.",
      },
      {
        title: "Explain fingers or sit/stand safely",
        body: "Classic: five fingers up; put one down if you have done the thing. Or raise a hand. Offer pass. No drinking games in school or work.",
      },
      {
        title: "Facilitator reads prompts",
        body: "You control the list. Do not let the room invent prompts live unless you can veto instantly.",
      },
      {
        title: "Stop early",
        body: "Six to eight prompts. Celebrate curiosity, not who is ‘most experienced.’",
      },
    ],
    variations: [
      {
        title: "Never Have I Ever… at work",
        body: "Prompts about tools and mild fails (“never have I ever shipped on a Friday on purpose”). Keep kind.",
      },
      {
        title: "Chat version",
        body: "Type “I have” or pass in chat. No fingers needed.",
      },
      {
        title: "Skip entirely",
        body: "If you only have party prompts, play This or That instead.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "6–30 for finger rounds; larger with chat." },
      { label: "Time", body: "5–10 minutes." },
      { label: "Materials", body: "Curated prompt list." },
      {
        label: "House rules",
        body: "Facilitator-owned prompts. Pass always. No alcohol mechanics. School bans dating/money/family conflict.",
      },
    ],
    whyItWorks:
      "Only the clean, facilitator-owned version belongs on this site. The game can surface surprise stories with low setup. The internet party version often fails PASS safety. When in doubt, skip—see our skip guide—and use preference polls.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "I will read work- and school-safe prompts only. Put a finger down or raise a hand if it applies. Pass anytime. No explaining required.",
      },
      {
        speaker: "Prompt",
        line: "Never have I ever cooked for more than five people…",
      },
      {
        speaker: "Pace",
        line: "Glance at the room. Next prompt. We are not ranking anyone.",
      },
      {
        speaker: "Close",
        line: "Thanks—curiosity only. Agenda next.",
      },
    ],
    pitfalls: [
      {
        title: "Crowd-sourced prompts",
        body: "Someone will push a cruel question. Keep the mic.",
      },
      {
        title: "Drinking-game framing",
        body: "Never attach alcohol to this icebreaker in professional or youth settings.",
      },
      {
        title: "Shame energy",
        body: "If laughter targets a person, cut the game immediately.",
      },
    ],
    originalVariant: {
      title: "Never Have I Facilitated (site original)",
      body: "Only facilitators or hosts answer, with prompts about meeting design (“never have I ever ended on time,” “never have I ever used breakout rooms”). Participants guess which are true. Flips exposure onto the host and keeps guests safer—use for facilitator meetups, not for vulnerable student groups.",
    },
    adultsWork:
      "Use only with a clean deck. For teens and high school, prefer Human Bingo or Would You Rather if risk feels high. For church youth, visitor-safe preference games are usually better. Document your bans on the slide.",
    faqs: [
      {
        q: "How do you play Never Have I Ever as a team icebreaker?",
        a: "A facilitator reads safe prompts. People indicate if they have done the thing. Keep rounds short and optional.",
      },
      {
        q: "Is Never Have I Ever appropriate for work?",
        a: "Only with a curated professional deck and no alcohol. Otherwise choose another game.",
      },
      {
        q: "Is it okay for high school?",
        a: "Only with school-safe prompts and a pass rule. Many teachers should skip to preference games instead.",
      },
      {
        q: "How many prompts?",
        a: "Six to eight is enough.",
      },
      {
        q: "What are safe example prompts?",
        a: "Never have I ever traveled solo; cooked for five+; given a talk to 50+; learned a new language; worked remotely for a year.",
      },
    ],
    sources: [
      { label: "When to skip an icebreaker", href: "/when-to-skip-an-icebreaker" },
      { label: "How we choose icebreaker games", href: "/how-we-choose-icebreakers" },
      { label: "Ice breaker games for high school students", href: "/icebreaker-games-for-high-school-students" },
      { label: "Would You Rather", href: "/games/would-you-rather" },
    ],
  },

  "human-bingo": {
    howToSteps: [
      {
        title: "Print more cards than heads",
        body: "Each person gets a bingo grid of prompts (has a pet, speaks two languages, likes hiking). Extra cards prevent bottlenecks. Customize for school or work.",
      },
      {
        title: "Explain mingling rules",
        body: "Find a different person for each square when possible. Initials in the square. No blocking doorways. Pass on any square.",
      },
      {
        title: "Call a soft mid-point",
        body: "After a few minutes, ask who has a line or four corners. Keep mingling so late finishers are not shamed.",
      },
      {
        title: "Close with optional shares",
        body: "Two people share one interesting square. Collect cards or recycle. Do not require full-card completion.",
      },
    ],
    variations: [
      {
        title: "Student-safe card",
        body: "Use classroom prompts; see the printable guide for ready grids.",
      },
      {
        title: "Virtual bingo",
        body: "People unmute in breakouts or use chat to claim squares. Slower—cap group size.",
      },
      {
        title: "Theme deck",
        body: "Conference theme or onboarding facts only.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "15–150; under 12 feels thin." },
      { label: "Time", body: "10–20 minutes." },
      { label: "Materials", body: "Printed cards; pens." },
      {
        label: "House rules",
        body: "No invasive squares (salary, dating, disability jokes). Pass any square. Accessibility: seated mingling ok.",
      },
    ],
    whyItWorks:
      "Human Bingo gives shy people a script for approaching strangers and creates many short conversations. It fails when prompts are invasive, when the room cannot move, or when you treat bingo as a hard competition. For alternatives, use the games-like Human Bingo hub.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "Each square needs a different person when you can. Initials only. Skip any square that does not fit you.",
      },
      {
        speaker: "Start",
        line: "Stand, mingle, ask, initial. I will call a soft check in four minutes.",
      },
      {
        speaker: "Mid",
        line: "Hands for anyone with a line—keep going so others can finish.",
      },
      {
        speaker: "Close",
        line: "Two quick stories from the cards. Then we sit.",
      },
    ],
    pitfalls: [
      {
        title: "Too-personal squares",
        body: "Rewrite the card. ‘Has a pet’ beats ‘has been divorced.’",
      },
      {
        title: "Single winner energy",
        body: "Celebrate multiple finishers or lines so the room does not stampede one person.",
      },
      {
        title: "No extras printed",
        body: "Always print spares.",
      },
    ],
    originalVariant: {
      title: "Bingo → breakout seed (site original)",
      body: "After mingling, people sit with someone whose initial is on their card. That pair becomes the first discussion partner for the real agenda item. The icebreaker directly seeds working pairs instead of dissolving when cards are collected.",
    },
    adultsWork:
      "Classic for conferences, orientations, and church welcome nights with clean cards. For teens and high school, use student printables. For large adult groups, combine with zoning. Work rooms should avoid drinking and dating squares.",
    faqs: [
      {
        q: "How do you play Human Bingo?",
        a: "People mingle with a bingo card of prompts, collecting initials from others who match each square, aiming for a line or full card.",
      },
      {
        q: "How many people do you need?",
        a: "It works best with about 15 or more so mingling feels natural.",
      },
      {
        q: "What materials do you need?",
        a: "Printed bingo cards and pens. Customize prompts to your audience.",
      },
      {
        q: "Can Human Bingo be virtual?",
        a: "Yes with breakouts or chat, but it is slower. Cap group size or shorten the card.",
      },
      {
        q: "Where can I find student cards?",
        a: "Use our Human Bingo for students printable guide for classroom-safe grids.",
      },
    ],
    sources: [
      { label: "Games like Human Bingo", href: "/games-like-human-bingo" },
      { label: "Human Bingo for students printable", href: "/blog/human-bingo-for-students-printable" },
      { label: "Icebreaker games for adults in large groups", href: "/blog/ice-breaker-games-for-adults-large-groups" },
      { label: "Free fun icebreaker games", href: "/free-fun-icebreaker-games" },
    ],
  },

  "chat-waterfall": {
    howToSteps: [
      {
        title: "Pick one short prompt",
        body: "Examples: one win this week; one emoji for energy; one tool you cannot work without. One prompt only. Announce that cameras stay optional.",
      },
      {
        title: "Explain the waterfall",
        body: "Everyone types silently. On your count (“3-2-1 send”), all hit enter together. Nobody unmutes unless you invite volunteers later.",
      },
      {
        title: "Read the pattern, not every line",
        body: "Spend 20–40 seconds naming themes (“lots of coffee and deadlines”). Do not call out individuals unless they opt in.",
      },
      {
        title: "Optional 60-second spotlight",
        body: "Invite one or two people to unmute and expand. Then start the agenda. Total time stays inside three to six minutes.",
      },
    ],
    variations: [
      {
        title: "Reaction waterfall",
        body: "Use reactions only (clap, heart) for ultra-large rooms where chat floods.",
      },
      {
        title: "Two-prompt waterfall",
        body: "First send: energy emoji. Second send: one word need. Still no forced unmutes.",
      },
      {
        title: "In-person sticky waterfall",
        body: "Everyone writes on a sticky and posts on a wall on your count—same simultaneous reveal.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "8–200+ on Zoom/Teams; works best when chat is usable." },
      { label: "Time", body: "3–6 minutes." },
      { label: "Materials", body: "Meeting chat or sticky notes." },
      {
        label: "House rules",
        body: "No reading someone’s private message aloud without consent. Pass = blank chat is fine.",
      },
    ],
    whyItWorks:
      "Chat Waterfall equalizes participation: typing is faster than going around a gallery view. It fails when the prompt is too personal, when you force every unmute, or when chat is disabled. For hybrid rooms, tell in-person people to type on phones so the waterfall stays shared.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "Type one word for your focus. Do not hit send yet. Cameras optional. Pass is fine.",
      },
      {
        speaker: "Send",
        line: "Three, two, one—send.",
      },
      {
        speaker: "Mirror",
        line: "I see focused, curious, and a few ‘tired’s. Thanks.",
      },
      {
        speaker: "Close",
        line: "Two optional unmutes only—then we start the doc.",
      },
    ],
    pitfalls: [
      {
        title: "Slow roll send",
        body: "If people trickle in, early posters feel exposed. Enforce the count.",
      },
      {
        title: "Chat lecture",
        body: "Do not read twenty messages aloud. Themes only.",
      },
    ],
    originalVariant: {
      title: "Waterfall → agenda vote (site original)",
      body: "After the energy waterfall, run a second silent send with A/B/C options for how to spend the next 15 minutes. Majority letter becomes the working plan. Turns a warm-up into a micro-decision without a second icebreaker.",
    },
    adultsWork:
      "Default remote opener for standups and all-hands. Pair with short virtual icebreakers when the clock is tight. For funny meetings, use a silly but clean prompt. Not a substitute for name learning—run a name game on day one of a new team.",
    faqs: [
      {
        q: "How do you play Chat Waterfall?",
        a: "Everyone types an answer silently, then sends on a shared count. The facilitator mirrors themes; unmutes stay optional.",
      },
      {
        q: "How long should Chat Waterfall take?",
        a: "Three to six minutes for most meetings.",
      },
      {
        q: "What if chat is off?",
        a: "Use reactions, a shared doc, or switch to One Word Check-In with volunteers only.",
      },
      {
        q: "Is Chat Waterfall good for shy people?",
        a: "Yes—typing first removes unmute pressure. Keep reading themes, not names.",
      },
      {
        q: "Can you use it in person?",
        a: "Yes with sticky notes posted on a count, or phones into a shared chat.",
      },
    ],
    sources: [
      { label: "Virtual ice breaker games", href: "/virtual-icebreaker-games" },
      { label: "Short virtual icebreakers", href: "/short-virtual-icebreakers" },
      { label: "Emoji icebreaker games", href: "/emoji-icebreaker-games" },
      { label: "Funny ice breaker games for meetings", href: "/funny-icebreaker-games-for-meetings" },
    ],
  },

  "skittles-sharing": {
    howToSteps: [
      {
        title: "Assign colors to prompts",
        body: "Before the room arrives, map each candy color to a light prompt (red = favorite food, yellow = hobby, green = weekend plan). Post the key on a slide. Avoid trauma or dating prompts.",
      },
      {
        title: "Hand out a few pieces",
        body: "Each person gets 3–5 candies (or colored tokens if allergies). They pick one color to speak to—or pass.",
      },
      {
        title: "Share in small circles",
        body: "Groups of 4–6. One color at a time around the circle. Cap each share at 20–30 seconds.",
      },
      {
        title: "Optional whole-room harvest",
        body: "Two volunteers share one line. Do not force eating the candy; tokens work for allergy-safe rooms.",
      },
    ],
    variations: [
      {
        title: "Allergy-safe tokens",
        body: "Use paper chips or beads instead of candy. Same color key.",
      },
      {
        title: "Virtual color picker",
        body: "People type a color emoji, then answer that prompt in chat or breakouts.",
      },
      {
        title: "Faith-optional church deck",
        body: "Keep prompts about food, hobbies, and gratitude for a small win—not testimony pressure on week one.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "6–40; split above 12." },
      { label: "Time", body: "10–15 minutes." },
      { label: "Materials", body: "Colored candy or tokens; prompt key." },
      {
        label: "House rules",
        body: "Allergy announcement first. Pass allowed. No forcing food. Clean prompts only.",
      },
    ],
    whyItWorks:
      "Color constraints make sharing easy for people who freeze on open questions. It fails when candy is required despite allergies, when prompts go intimate, or when circles grow past six. Youth and church rooms like the tactile cue; work rooms may prefer tokens.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "If you have allergies, take paper tokens instead. Each color has a prompt on the slide. Pass anytime.",
      },
      {
        speaker: "Model",
        line: "I drew yellow—hobby. I hike on weekends. Twenty seconds max.",
      },
      {
        speaker: "Circles",
        line: "Groups of four to six. One color each. Timer is eight minutes.",
      },
      {
        speaker: "Close",
        line: "Two volunteers only. Then we start.",
      },
    ],
    pitfalls: [
      {
        title: "Ignoring allergies",
        body: "Always offer non-food tokens in the first sentence.",
      },
      {
        title: "Testimony creep",
        body: "In mixed-faith rooms, keep prompts preference-level.",
      },
    ],
    originalVariant: {
      title: "Color → partner seed (site original)",
      body: "After the circle, people find someone who spoke the same color prompt and sit together for the next agenda item. The candy game seeds working pairs without a second mixer.",
    },
    adultsWork:
      "Youth group and church small groups use this often; keep visitor-safe prompts. For free-fun adult socials, tokens beat messy candy on carpet. Not ideal for formal board meetings—use a check-in instead.",
    faqs: [
      {
        q: "How do you play Skittles Sharing?",
        a: "Assign prompts to colors. People draw a color and share a short answer in small groups. Tokens can replace candy.",
      },
      {
        q: "What if someone cannot eat candy?",
        a: "Use paper chips or beads with the same colors. Never require eating.",
      },
      {
        q: "How long does it take?",
        a: "About 10–15 minutes including the brief.",
      },
      {
        q: "Is it okay for church visitors?",
        a: "Yes with light prompts and a pass rule. Avoid pressure to share faith stories on week one.",
      },
      {
        q: "Can it work online?",
        a: "Yes—pick a color emoji, then answer in breakouts or chat.",
      },
    ],
    sources: [
      { label: "Ice breaker games for youth group", href: "/icebreaker-games-for-youth-group" },
      { label: "Icebreaker games for church", href: "/icebreaker-games-for-church" },
      { label: "Free fun icebreaker games", href: "/free-fun-icebreaker-games" },
      { label: "Ice breaker games for small groups", href: "/icebreaker-games-for-small-groups" },
    ],
  },

  "emoji-check-in": {
    howToSteps: [
      {
        title: "State one emoji prompt",
        body: "Energy, focus, or “what you need from today.” One emoji is enough; ban long strings that become essays.",
      },
      {
        title: "Collect simultaneously",
        body: "Chat drop on three, or reaction picker. In person, people can show a phone emoji or a drawn face.",
      },
      {
        title: "Mirror the board",
        body: "Spend 20–30 seconds on the pattern. Optional: two volunteers explain.",
      },
      {
        title: "Start work",
        body: "Keep the whole ritual inside three to five minutes for routine meetings.",
      },
    ],
    variations: [
      {
        title: "Dual emoji",
        body: "One for energy, one for focus—still optional speech.",
      },
      {
        title: "Classroom whiteboard",
        body: "Students sketch a quick face; teacher samples three. Keep prompts school-safe (mood, focus, curiosity)—never grade the emoji.",
      },
      {
        title: "Large-group pattern only",
        body: "One emoji per person in chat or reactions. Facilitator mirrors the pattern in one sentence; no individual call-outs.",
      },
      {
        title: "Project emoji",
        body: "Emoji for the project status, not personal mood—useful before retros.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "5–100+ with chat." },
      { label: "Time", body: "2–5 minutes." },
      { label: "Materials", body: "Chat, reactions, or paper." },
      {
        label: "House rules",
        body: "Pass allowed. No diagnosing emoji choices. School-safe prompts only.",
      },
    ],
    whyItWorks:
      "Emoji Check-In is a visual One Word Check-In. It includes people who do not want to speak. It fails when managers quiz people on sad emojis in public, or when the prompt demands vulnerability. Use Weather Check-In when metaphors feel safer than faces.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "Drop one emoji for your energy. Pass is fine. No need to explain.",
      },
      {
        speaker: "Send",
        line: "Three, two, one—send.",
      },
      {
        speaker: "Mirror",
        line: "Mostly sunny faces with a few sleepy ones. Thanks.",
      },
      {
        speaker: "Close",
        line: "Agenda now.",
      },
    ],
    pitfalls: [
      {
        title: "Emoji interrogation",
        body: "Never force someone to justify a down emoji in front of the group.",
      },
      {
        title: "Emoji novels",
        body: "Cap at one or two emojis so the board stays scannable.",
      },
    ],
    originalVariant: {
      title: "Emoji → need tag (site original)",
      body: "After the energy emoji, optionally add a second emoji that means a need (hourglass = more time, wrench = help, check = ready to decide). Facilitator only summarizes needs in aggregate. Shapes the meeting without naming individuals.",
    },
    adultsWork:
      "Strong default for virtual and hybrid work meetings. For teens, keep it optional and never grade mood. See the emoji hub for related formats. Pair with Chat Waterfall when you want words plus emoji.",
    faqs: [
      {
        q: "What is an Emoji Check-In icebreaker?",
        a: "Each person shares one emoji for mood, energy, or focus. The facilitator reads the pattern; explanations stay optional.",
      },
      {
        q: "How long should Emoji Check-In take?",
        a: "Most groups finish in 2–5 minutes.",
      },
      {
        q: "Is Emoji Check-In good for meetings?",
        a: "Yes—especially remote rooms that need a fast, inclusive pulse before the agenda.",
      },
      {
        q: "Can Emoji Check-In work in classrooms?",
        a: "Yes with simple prompts and a text or pass alternative.",
      },
      {
        q: "What are good Emoji Check-In prompts?",
        a: "One emoji for energy; one for focus; one for what you need from today’s session.",
      },
    ],
    sources: [
      { label: "Emoji icebreaker games", href: "/emoji-icebreaker-games" },
      { label: "Ice breaker games for meetings", href: "/icebreaker-games-for-meetings" },
      { label: "Emoji Introduction", href: "/games/emoji-introduction" },
      { label: "Chat Waterfall", href: "/games/chat-waterfall" },
    ],
  },

  "telephone-charades": {
    howToSteps: [
      {
        title: "Write work- or school-safe phrases",
        body: "Movie titles, workplace clichés, or animal actions. Avoid private jokes that exclude visitors and anything crude.",
      },
      {
        title: "Form a line or mute chain",
        body: "In person: a line of 6–8. Virtually: breakout chain or sequential unmutes. Person 1 sees the phrase; acts to person 2 without words; the gesture travels down the line.",
      },
      {
        title: "Reveal both ends",
        body: "Last person guesses the phrase. Show the original card. Laugh at the mutation, not at people.",
      },
      {
        title: "Rotate once",
        body: "One or two phrases is enough for an icebreaker. Stop before it becomes a talent show.",
      },
    ],
    variations: [
      {
        title: "Silent Zoom version",
        body: "Gallery view; one actor at a time; others guess in chat.",
      },
      {
        title: "Team vs team",
        body: "Two short lines race the same phrase—watch volume and space.",
      },
      {
        title: "Seated hands-only",
        body: "Gestures above the desk for rooms that cannot stand.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "6–16 per chain; multiple chains for larger rooms." },
      { label: "Time", body: "8–12 minutes." },
      { label: "Materials", body: "Phrase cards." },
      {
        label: "House rules",
        body: "No touching others. No forced performing—pass the role. Keep phrases clean.",
      },
    ],
    whyItWorks:
      "Telephone Charades creates shared laughter from signal loss, not from personal disclosure. It fails when phrases are exclusive, when people are forced to perform, or when the room cannot see. Prefer Chat Waterfall if cameras-off culture is strong.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "This is gesture telephone—not a roast. You may pass a turn. No touching.",
      },
      {
        speaker: "Start",
        line: "Person one reads the card silently. Act to person two only. Everyone else faces away until it is their turn.",
      },
      {
        speaker: "Reveal",
        line: "Last person guesses. Here is the original card—laugh at the mutation.",
      },
      {
        speaker: "Close",
        line: "One more round max—then we sit.",
      },
    ],
    pitfalls: [
      {
        title: "Inside jokes",
        body: "Visitors lose. Use widely known titles or workplace-neutral phrases.",
      },
      {
        title: "Forced spotlight",
        body: "Allow pass; let someone hold the card instead of act.",
      },
    ],
    originalVariant: {
      title: "Chat caption telephone (site original)",
      body: "Virtual-only: person 1 types a phrase to person 2 in DM; person 2 acts on camera; person 3 types a guess in chat; continue. Mixes text and gesture so camera-shy people can take text roles.",
    },
    adultsWork:
      "Fits funny meeting openers and free-fun socials. For Human Knot alternatives when you want laughter without contact, this is safer. Keep corporate phrases PG.",
    faqs: [
      {
        q: "How do you play Telephone Charades?",
        a: "A phrase is acted silently down a line; the last person guesses. Reveal the original and rotate once or twice.",
      },
      {
        q: "Can Telephone Charades be virtual?",
        a: "Yes with sequential acting or a chat-caption hybrid. Keep rounds short.",
      },
      {
        q: "How many people?",
        a: "About 6–16 per chain. Run parallel chains for bigger groups.",
      },
      {
        q: "What phrases work?",
        a: "Well-known movie titles, simple actions, or clean workplace clichés.",
      },
      {
        q: "How is it different from regular charades?",
        a: "The message mutates through multiple people like telephone, which is the joke.",
      },
    ],
    sources: [
      { label: "Funny ice breaker games for meetings", href: "/funny-icebreaker-games-for-meetings" },
      { label: "Games like the Human Knot", href: "/games-like-the-human-knot" },
      { label: "Virtual ice breaker games", href: "/virtual-icebreaker-games" },
      { label: "Free fun icebreaker games", href: "/free-fun-icebreaker-games" },
    ],
  },

  "virtual-background-story": {
    howToSteps: [
      {
        title: "Set a theme and a time box",
        body: "Examples: favorite place, fictional office, calm nature. Give two minutes to pick a background. Allow a blur or plain wall as a full pass.",
      },
      {
        title: "Model a short story",
        body: "You show a background and give a 15-second reason. Ban travel-flex bragging that pressures money talk.",
      },
      {
        title: "Gallery share or breakouts",
        body: "Under 12: go around. Above 12: breakouts of 4 for two minutes, then two volunteers in main.",
      },
      {
        title: "Reset backgrounds",
        body: "Ask people to return to normal backgrounds before the working agenda so slides stay readable.",
      },
    ],
    variations: [
      {
        title: "Object on desk instead",
        body: "If backgrounds fail, hold up one object and tell a 15-second story.",
      },
      {
        title: "Team theme",
        body: "Everyone picks a background that matches a project metaphor (rocket, garden, workshop).",
      },
      {
        title: "Guess the why",
        body: "Partners guess why someone chose a background before they explain—keep guesses kind.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "4–30; sample above 12." },
      { label: "Time", body: "8–12 minutes." },
      { label: "Materials", body: "Video platform with virtual backgrounds; optional." },
      {
        label: "House rules",
        body: "Plain wall is valid. No mocking homes. Bandwidth issues = automatic pass.",
      },
    ],
    whyItWorks:
      "Virtual Background Story gives remote rooms a visual hook without deep disclosure. It fails when platforms block backgrounds, when people feel judged for their real room, or when stories run long. Always treat blur/plain as success.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "Pick a background that fits the theme—or stay blurred. That counts. Two minutes.",
      },
      {
        speaker: "Model",
        line: "Mine is a quiet trail—I reset there after noisy weeks. Fifteen seconds when you share.",
      },
      {
        speaker: "Share",
        line: "Breakouts of four for two minutes. Then two volunteers in main.",
      },
      {
        speaker: "Close",
        line: "Reset backgrounds so we can read slides. Agenda time.",
      },
    ],
    pitfalls: [
      {
        title: "Home shaming",
        body: "Never comment on someone’s real room if backgrounds fail.",
      },
      {
        title: "Tech rabbit hole",
        body: "If half the room cannot load backgrounds, switch to object-on-desk immediately.",
      },
    ],
    originalVariant: {
      title: "Background → working metaphor (site original)",
      body: "After shares, the group votes (chat A/B/C) on one metaphor background to keep as the meeting’s motif for 30 minutes (“we are in workshop mode”). Then everyone resets to neutral for docs. Links play to purpose without keeping distracting images up.",
    },
    adultsWork:
      "Good for remote socials and funny meeting openers. For high school online classes, allow plain walls and skip travel-wealth themes. Not for low-bandwidth required trainings—use Chat Waterfall instead.",
    faqs: [
      {
        q: "How do you play Virtual Background Story?",
        a: "People choose a themed virtual background (or blur), share a short why, then reset before the agenda.",
      },
      {
        q: "What if someone cannot use virtual backgrounds?",
        a: "Blur, plain wall, or an object on the desk all count. Do not force the feature.",
      },
      {
        q: "How long does it take?",
        a: "About 8–12 minutes including setup.",
      },
      {
        q: "Is it okay for work?",
        a: "Yes with professional themes and no pressure to show personal spaces.",
      },
      {
        q: "Can large all-hands use it?",
        a: "Use breakouts or volunteer samples—do not hear 80 stories.",
      },
    ],
    sources: [
      { label: "Virtual ice breaker games", href: "/virtual-icebreaker-games" },
      { label: "Funny ice breaker games for meetings", href: "/funny-icebreaker-games-for-meetings" },
      { label: "Free fun icebreaker games", href: "/free-fun-icebreaker-games" },
      { label: "Short virtual icebreakers", href: "/short-virtual-icebreakers" },
    ],
  },

  "guess-who-personal-trivia": {
    howToSteps: [
      {
        title: "Collect one safe fact each",
        body: "Before or at the start, people submit one quirky, optional fact on a slip or form. Ban dating, salary, and trauma. Facilitator screens cards.",
      },
      {
        title: "Read anonymously",
        body: "Draw a card, read aloud, group guesses who wrote it. Owner reveals when ready—or never, if they pass.",
      },
      {
        title: "Limit the stack",
        body: "Six to ten facts for an icebreaker. Save the rest for later weeks.",
      },
      {
        title: "Close kindly",
        body: "Thank writers. Do not roast wrong guesses.",
      },
    ],
    variations: [
      {
        title: "Chat anonymous dump",
        body: "People DM the host; host pastes facts without names; guesses in chat.",
      },
      {
        title: "Two truths lite",
        body: "If you want more structure, switch to Two Truths and a Lie instead.",
      },
      {
        title: "Team trivia only",
        body: "Facts must be work- or class-skill related for professional rooms.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "6–25 for live guessing." },
      { label: "Time", body: "10–15 minutes." },
      { label: "Materials", body: "Paper, bowl, or form." },
      {
        label: "House rules",
        body: "Facilitator screens facts. Owners may refuse reveal. No mean guessing.",
      },
    ],
    whyItWorks:
      "Anonymous facts create curiosity with a reveal payoff. It fails when facts are invasive or when people are forced to claim a card. Screen everything. For church youth and small groups, prefer hobbies over personal history.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "Write one school- or work-safe quirky fact. I will screen cards. You may pass on reveal later.",
      },
      {
        speaker: "Play",
        line: "Guess who—then the owner can claim it or pass.",
      },
      {
        speaker: "Pace",
        line: "We will do eight cards max.",
      },
      {
        speaker: "Close",
        line: "Thanks for the surprises. Agenda next.",
      },
    ],
    pitfalls: [
      {
        title: "Unscreened cards",
        body: "One cruel joke ruins trust. Read privately first.",
      },
      {
        title: "Forced outing",
        body: "Owners can decline to claim a fact.",
      },
    ],
    originalVariant: {
      title: "Fact → follow-up coffee (site original)",
      body: "After three reveals, people star one fact they want to ask about later. They message that person after the meeting—not during—for a optional 5-minute chat. Moves curiosity off the public stage.",
    },
    adultsWork:
      "Useful in small groups and games-like Two Truths comparisons. For riddle-style virtual meetings, keep facts light. Not for first-day large lectures—too slow.",
    faqs: [
      {
        q: "How do you play Guess Who Personal Trivia?",
        a: "People submit one safe fact. The group guesses who wrote each fact; owners may reveal or pass.",
      },
      {
        q: "How do you keep it appropriate?",
        a: "Facilitator screens every card and bans dating, money, and trauma topics.",
      },
      {
        q: "How long does it take?",
        a: "About 10–15 minutes for six to ten facts.",
      },
      {
        q: "Can it be virtual?",
        a: "Yes—DM facts to the host and guess in chat.",
      },
      {
        q: "How is it different from Two Truths and a Lie?",
        a: "Guess Who uses one true fact per person. Two Truths mixes truths with a lie.",
      },
    ],
    sources: [
      { label: "Ice breaker games for small groups", href: "/icebreaker-games-for-small-groups" },
      { label: "Games like Two Truths and a Lie", href: "/games-like-two-truths-and-a-lie" },
      { label: "Icebreaker games for church youth group", href: "/icebreaker-games-for-church-youth-group" },
      { label: "Two Truths and a Lie", href: "/games/two-truths-and-a-lie" },
    ],
  },

  "line-up": {
    howToSteps: [
      {
        title: "Pick a sortable criterion",
        body: "Birthday month, commute time, how spicy you like food (1–5), years in the org. Avoid income, weight, or other sensitive rankings.",
      },
      {
        title: "Explain silent or spoken rules",
        body: "Silent line-up: no talking, only gestures. Spoken: short yes/no questions allowed. State which mode you are in.",
      },
      {
        title: "Time-box the arrange",
        body: "Two to four minutes. Then check accuracy with a quick reveal from one end to the other.",
      },
      {
        title: "Debrief 60 seconds",
        body: "What signals helped? What assumptions failed? Then sit.",
      },
    ],
    variations: [
      {
        title: "Seated hand continuum",
        body: "No standing line—raise hands along a 1–5 scale from seats.",
      },
      {
        title: "Virtual continuum",
        body: "People type a number in chat; host sorts a named list on screen.",
      },
      {
        title: "Blindfold-free only",
        body: "Never add blindfolds for icebreakers—access and safety first.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "8–40 for physical lines; larger with seated continuum." },
      { label: "Time", body: "5–10 minutes." },
      { label: "Materials", body: "Clear floor space or chat." },
      {
        label: "House rules",
        body: "No sensitive criteria. Offer seated options. No pushing.",
      },
    ],
    whyItWorks:
      "Line-Up creates a visible group snapshot and light teamwork without long intros. It fails when the criterion shames people or when mobility needs are ignored. As a Human Knot alternative, it has far less contact risk.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "Line up by birthday month—January to the left. You may stay seated and raise a hand for your month if standing is hard.",
      },
      {
        speaker: "Mode",
        line: "Silent gestures only for two minutes. Go.",
      },
      {
        speaker: "Check",
        line: "Call months down the line. Celebrate fixes, not perfection.",
      },
      {
        speaker: "Close",
        line: "One insight about communication—then we sit.",
      },
    ],
    pitfalls: [
      {
        title: "Sensitive sorts",
        body: "Never line up by salary, grades, or body metrics.",
      },
      {
        title: "Forced standing",
        body: "Offer a seated continuum in the first sentence.",
      },
    ],
    originalVariant: {
      title: "Line-up → pair neighbors (site original)",
      body: "After the line is set, people turn to one neighbor and exchange names plus one work-safe fact for 30 seconds. Converts a sorting game into name learning without a second full icebreaker.",
    },
    adultsWork:
      "Works for high school, church, and free-fun rooms with clean criteria. For large adult ballrooms, use aisle continua. Link to Human Knot alternatives when you need movement without tangling.",
    faqs: [
      {
        q: "How do you play Line-Up?",
        a: "The group arranges itself by a given criterion, often silently, then checks the order and debriefs briefly.",
      },
      {
        q: "What are safe Line-Up criteria?",
        a: "Birthday month, commute time, spice preference, how many siblings—avoid money, grades, and body topics.",
      },
      {
        q: "Can Line-Up be virtual?",
        a: "Yes—type numbers in chat and sort on a shared list.",
      },
      {
        q: "How long does it take?",
        a: "Usually 5–10 minutes.",
      },
      {
        q: "Is it a good Human Knot alternative?",
        a: "Yes when you want movement and teamwork with less physical contact.",
      },
    ],
    sources: [
      { label: "Games like the Human Knot", href: "/games-like-the-human-knot" },
      { label: "Ice breaker games for high school students", href: "/icebreaker-games-for-high-school-students" },
      { label: "Icebreaker games for church", href: "/icebreaker-games-for-church" },
      { label: "Free fun icebreaker games", href: "/free-fun-icebreaker-games" },
    ],
  },

  "beach-ball-qa": {
    howToSteps: [
      {
        title: "Write questions on the ball",
        body: "Use a beach ball or soft tossable with 6–12 light prompts in permanent marker. School- and work-safe only.",
      },
      {
        title: "Explain catch-and-answer",
        body: "Catch, read the question nearest your right thumb (or any visible prompt), answer in 15 seconds, toss gently to someone new.",
      },
      {
        title: "Control the chaos",
        body: "No hard throws. Seated rows can roll the ball along aisles. Offer a pass: catch and toss without answering.",
      },
      {
        title: "Stop while energy is high",
        body: "Eight to twelve catches is enough for an icebreaker.",
      },
    ],
    variations: [
      {
        title: "Mic-assisted large room",
        body: "Facilitator holds the mic; ball still travels; answers go through the mic.",
      },
      {
        title: "Virtual ‘ball’",
        body: "Host ‘tosses’ by naming the next person; they answer a random prompt from a slide.",
      },
      {
        title: "Category ball",
        body: "Color panels map to prompt categories.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "10–60 in a circle or aisles; larger with mic." },
      { label: "Time", body: "8–12 minutes." },
      { label: "Materials", body: "Soft beach ball; written prompts." },
      {
        label: "House rules",
        body: "Gentle tosses only. Pass allowed. Clear breakables and hot drinks.",
      },
    ],
    whyItWorks:
      "The ball creates random turn-taking without facilitator favoritism. It fails in crowded tight seats without aisle plans, or when prompts are invasive. Youth and teen rooms like the kinetic cue; formal boards may prefer a check-in.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "Soft tosses only. Answer the prompt near your hand—or catch and pass. Fifteen seconds.",
      },
      {
        speaker: "Start",
        line: "I toss first. Then keep it moving to someone new.",
      },
      {
        speaker: "Pace",
        line: "If it stalls, I will restart with a new throw.",
      },
      {
        speaker: "Close",
        line: "Ball back to me. Thanks—agenda time.",
      },
    ],
    pitfalls: [
      {
        title: "Hard throws",
        body: "Stop the game if anyone beans a neighbor. Reset rules.",
      },
      {
        title: "Same three people",
        body: "Ask tossers to pick someone who has not answered.",
      },
    ],
    originalVariant: {
      title: "Two-ball slow lane (site original)",
      body: "In rooms over 40, run two balls in opposite halves. Each half only tosses inside its zone. Doubles answers without cross-room missiles.",
    },
    adultsWork:
      "Teens, youth group, and church youth nights are natural fits. For seated adult large groups, use aisle rolls. Keep prompts clean for mixed ages.",
    faqs: [
      {
        q: "How do you play Beach Ball Q&A?",
        a: "Toss a soft ball with written prompts. Catch, answer briefly, toss to someone new. Pass is allowed.",
      },
      {
        q: "How many people can play?",
        a: "Best from about 10–60; larger rooms need zones or a mic.",
      },
      {
        q: "What if the room is seated?",
        a: "Roll the ball along aisles or use a virtual name-toss with slide prompts.",
      },
      {
        q: "How long does it take?",
        a: "Usually 8–12 minutes.",
      },
      {
        q: "What prompts work?",
        a: "Favorite food, weekend hobby, one show you like, a skill you are learning—keep it light.",
      },
    ],
    sources: [
      { label: "Ice breaker games for teens", href: "/icebreaker-games-for-teens" },
      { label: "Ice breaker games for youth group", href: "/icebreaker-games-for-youth-group" },
      { label: "Icebreaker games for church youth group", href: "/icebreaker-games-for-church-youth-group" },
      { label: "Icebreaker games for adults in large groups", href: "/blog/ice-breaker-games-for-adults-large-groups" },
    ],
  },

  "scavenger-hunt": {
    howToSteps: [
      {
        title: "Write a short, site-safe list",
        body: "8–12 items max for an icebreaker hunt: something blue, a team photo pose, a sticky with a kind word. No trespassing, no stealing, no risky stunts.",
      },
      {
        title: "Form small teams",
        body: "Teams of 3–5. Appoint a timekeeper. Phones for photos if allowed by policy.",
      },
      {
        title: "Set a hard stop",
        body: "7–10 minutes hunting. Whistle or timer ends it even if lists are incomplete.",
      },
      {
        title: "Share two highlights",
        body: "Each team shows one photo or item for 20 seconds. No full scoring ceremony unless you have time.",
      },
    ],
    variations: [
      {
        title: "Indoor office hunt",
        body: "Only items visible without entering private offices.",
      },
      {
        title: "Virtual scavenger hunt",
        body: "Find objects on camera within your home workspace—blur private spaces.",
      },
      {
        title: "Photo-only hunt",
        body: "No carrying objects; reduces mess and arguments.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "9–40 in teams; larger with multiple identical lists." },
      { label: "Time", body: "12–20 minutes including share-out." },
      { label: "Materials", body: "Printed lists; phones optional." },
      {
        label: "House rules",
        body: "Stay in approved areas. Respect property. Include seated roles (photographer, checker).",
      },
    ],
    whyItWorks:
      "Scavenger hunts create teamwork fast through a shared checklist. They fail when lists encourage unsafe or invasive behavior, or when the hunt eats the whole workshop. Keep icebreaker hunts short and photo-based when possible.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "Teams of three to five. Stay in the marked zone. Photo proof beats stealing supplies.",
      },
      {
        speaker: "Time",
        line: "Eight minutes. When I call time, freeze and return.",
      },
      {
        speaker: "Share",
        line: "Each team—one highlight in twenty seconds.",
      },
      {
        speaker: "Close",
        line: "Lists away. Agenda next.",
      },
    ],
    pitfalls: [
      {
        title: "Unsafe items",
        body: "No rooftop shots, no running in parking lots, no restricted rooms.",
      },
      {
        title: "Unequal mobility",
        body: "Design seated roles so everyone can contribute.",
      },
    ],
    originalVariant: {
      title: "Hunt → gratitude sticky (site original)",
      body: "One required item is a sticky note thanking a behind-the-scenes person (facilities, TA, host). Teams post stickies on a recognition wall before sitting. Links play energy to appreciation.",
    },
    adultsWork:
      "Teens and youth retreats love this; keep school rules. For networking events, photo hunts beat object grabs. As a Human Bingo alternative, it moves people without personal bingo squares.",
    faqs: [
      {
        q: "How do you run a short scavenger hunt icebreaker?",
        a: "Give small teams a short safe list, time-box the hunt, then share one highlight each.",
      },
      {
        q: "How long should it be?",
        a: "About 12–20 minutes total for an icebreaker—not a half-day event.",
      },
      {
        q: "Can it be virtual?",
        a: "Yes—find workspace objects on camera with privacy in mind.",
      },
      {
        q: "How do you keep it inclusive?",
        a: "Offer seated roles and avoid items that require running or stairs only.",
      },
      {
        q: "What items should I avoid?",
        a: "Anything that risks injury, trespass, privacy invasion, or property damage.",
      },
    ],
    sources: [
      { label: "Ice breaker games for teens", href: "/icebreaker-games-for-teens" },
      { label: "Ice breaker games for youth group", href: "/icebreaker-games-for-youth-group" },
      { label: "Games like Human Bingo", href: "/games-like-human-bingo" },
      { label: "Games like the Human Knot", href: "/games-like-the-human-knot" },
    ],
  },

  "skribbl-pictionary-online": {
    howToSteps: [
      {
        title: "Say what this site provides",
        body: "Ice Breaker Games publishes facilitation rules. Skribbl and similar drawing sites are third-party tools—not our multiplayer product, and not required to use this page’s ideas.",
      },
      {
        title: "Open one shared room",
        body: "Host creates a private room on a drawing-guess site you already trust, or use a shared whiteboard. Share the link in chat. Cap at ~12 for one room.",
      },
      {
        title: "Set round rules",
        body: "Custom word list if available: work-safe nouns only. 60–90 seconds per draw. Skip words that need niche culture.",
      },
      {
        title: "Rotate and stop",
        body: "Six to eight turns. Then leave the third-party site and return to your meeting agenda.",
      },
    ],
    variations: [
      {
        title: "Whiteboard only (no external game)",
        body: "Use Zoom/Teams whiteboard. Drawer marks; others guess in chat. Zero third-party accounts.",
      },
      {
        title: "Team canvas",
        body: "Two breakout rooms draw the same word; compare.",
      },
      {
        title: "Emoji Pictionary",
        body: "Build a scene with emoji only—no drawing tool needed.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "4–12 per room; parallel rooms for larger groups." },
      { label: "Time", body: "10–20 minutes." },
      { label: "Materials", body: "Shared whiteboard or a third-party draw/guess tool of your choice." },
      {
        label: "House rules",
        body: "Work-safe words. No forcing account creation on teammates. Offer a no-draw guess-only role.",
      },
    ],
    whyItWorks:
      "Drawing-and-guessing creates laughs without personal stories. It fails when people must create accounts they do not want, when words are exclusive, or when the tool eats the meeting. Prefer the whiteboard variation when IT locks unknown sites.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "We will draw and guess on a shared board. If you do not want to draw, guess only. Word list is work-safe.",
      },
      {
        speaker: "Link",
        line: "I will paste the room link. Mute unless you are drawing.",
      },
      {
        speaker: "Pace",
        line: "Sixty to ninety seconds per turn. Six turns total.",
      },
      {
        speaker: "Close",
        line: "Leave the drawing tab. Back to our agenda doc.",
      },
    ],
    pitfalls: [
      {
        title: "Account wall",
        body: "Pick a tool that allows guest join—or use the built-in whiteboard.",
      },
      {
        title: "Public rooms",
        body: "Use private rooms so strangers do not join a work meeting.",
      },
    ],
    originalVariant: {
      title: "Agenda Pictionary (site original)",
      body: "Word list is only nouns from today’s agenda (budget, timeline, launch). After guessing, the drawer says one real sentence about that agenda item. Warm-up doubles as a preview of the meeting content.",
    },
    adultsWork:
      "Funny virtual meetings and remote socials. Clarify third-party tools are optional. For classrooms, check school filter policies first. Not a product of Ice Breaker Games beyond the facilitation guide.",
    faqs: [
      {
        q: "Do I need Skribbl to use this icebreaker?",
        a: "No. Any shared whiteboard works. Skribbl-style sites are optional third-party tools.",
      },
      {
        q: "Is Ice Breaker Games a multiplayer game platform?",
        a: "No. We publish free rules and facilitation guides. You host the activity in your own meeting tools.",
      },
      {
        q: "How many people can play?",
        a: "About 4–12 per drawing room; run parallel rooms for larger groups.",
      },
      {
        q: "How long does it take?",
        a: "Usually 10–20 minutes.",
      },
      {
        q: "How do you keep it work-safe?",
        a: "Use a custom clean word list and private rooms.",
      },
    ],
    sources: [
      { label: "Virtual ice breaker games", href: "/virtual-icebreaker-games" },
      { label: "Funny ice breaker games for meetings", href: "/funny-icebreaker-games-for-meetings" },
      { label: "Riddle icebreakers for virtual meetings", href: "/riddle-icebreakers-for-virtual-meetings" },
      { label: "About Ice Breaker Games", href: "/about" },
    ],
  },

  "take-a-picture-of-your-shoes": {
    howToSteps: [
      {
        title: "Frame the joke and the pass",
        body: "People show shoes on camera—or a sock, slipper, or desk footrest. Bare floors and “camera off” are full passes. No commenting on cost or brands as status.",
      },
      {
        title: "Three-second gallery",
        body: "On count, tilt cameras down or hold the shoe to camera. Host screenshots only with consent—default is no screenshots.",
      },
      {
        title: "Optional one-line story",
        body: "Volunteers only: where these shoes have been, or why they are comfy. Fifteen seconds.",
      },
      {
        title: "Cameras up",
        body: "Return to faces before the agenda so the meeting feels normal again.",
      },
    ],
    variations: [
      {
        title: "Mug or plant instead",
        body: "If shoes feel odd culturally, use a desk object.",
      },
      {
        title: "In-person shoe circle",
        body: "People stand in a circle and glance down—still allow pass.",
      },
      {
        title: "Emoji shoe rating",
        body: "Chat an emoji for shoe comfort; no cameras needed.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "5–30 on video; sample in larger rooms." },
      { label: "Time", body: "3–6 minutes." },
      { label: "Materials", body: "Camera optional." },
      {
        label: "House rules",
        body: "No brand shaming. Pass without explanation. Consent before any photo save.",
      },
    ],
    whyItWorks:
      "Shoes are a silly, low-disclosure visual that breaks gallery-view sameness. It fails when people feel judged for footwear, when cameras are required, or when the joke targets poverty. Always offer object or emoji alternatives.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "Optional shoe cameo—or a mug. Camera off is fine. No brand talk.",
      },
      {
        speaker: "Count",
        line: "Three, two, one—tilt or show.",
      },
      {
        speaker: "Share",
        line: "Two volunteers, fifteen seconds each.",
      },
      {
        speaker: "Close",
        line: "Cameras to faces. Agenda time.",
      },
    ],
    pitfalls: [
      {
        title: "Status comments",
        body: "Shut down ‘nice sneakers’ hierarchies immediately.",
      },
      {
        title: "Forced cameras",
        body: "Never require video for this game.",
      },
    ],
    originalVariant: {
      title: "Shoe → commute word (site original)",
      body: "After the optional show, everyone types one word in chat about their commute or morning (walk, bus, stairs, kitchen). Host mirrors commute themes. Links the gag to arrival context without more camera time.",
    },
    adultsWork:
      "Light virtual and high-school online warm-up. Skip in formal client sales calls. Prefer Chat Waterfall when trust is low.",
    faqs: [
      {
        q: "How do you play Take a Picture of Your Shoes?",
        a: "On a count, people optionally show shoes on camera, then a few volunteers share a short line. Pass and camera-off are allowed.",
      },
      {
        q: "What if someone does not want to show shoes?",
        a: "Show a mug, keep camera off, or type an emoji. All count.",
      },
      {
        q: "How long does it take?",
        a: "About 3–6 minutes.",
      },
      {
        q: "Is it appropriate for work?",
        a: "For casual remote teams, yes. Skip for formal external meetings.",
      },
      {
        q: "Should I screenshot the gallery?",
        a: "Only with clear consent. Default is no screenshots.",
      },
    ],
    sources: [
      { label: "Virtual ice breaker games", href: "/virtual-icebreaker-games" },
      { label: "Short virtual icebreakers", href: "/short-virtual-icebreakers" },
      { label: "Ice breaker games for high school students", href: "/icebreaker-games-for-high-school-students" },
      { label: "Chat Waterfall", href: "/games/chat-waterfall" },
    ],
  },

  "train-wreck": {
    howToSteps: [
      {
        title: "Clear space and explain the call",
        body: "People stand scattered. You call a category (“everyone who had coffee today”). Matching people run—or walk quickly—to a new spot while others hold still. Offer a walking-only rule for safety.",
      },
      {
        title: "Model one round",
        body: "Demonstrate walking pace. No shoving. Seated participants can raise hands and swap places with a volunteer walker if needed.",
      },
      {
        title: "Call 5–8 categories",
        body: "Keep categories light: morning people, pet owners, playlist makers. Avoid body and dating calls.",
      },
      {
        title: "Cool down",
        body: "Last call is ‘everyone walk to a new neighbor and say your name.’ Then sit.",
      },
    ],
    variations: [
      {
        title: "Walk-only wreck",
        body: "Ban running entirely—better for mixed ages and formalwear.",
      },
      {
        title: "Seated hand wreck",
        body: "Stand-if / sit-if without crossing the room.",
      },
      {
        title: "Virtual reaction wreck",
        body: "Categories via reactions; no movement—use when remote.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "15–60 with open floor." },
      { label: "Time", body: "5–10 minutes." },
      { label: "Materials", body: "Open space; clear trip hazards." },
      {
        label: "House rules",
        body: "Walking default. No body-based categories. Stop if collisions risk rises.",
      },
    ],
    whyItWorks:
      "Train Wreck mixes a crowd quickly with shared movement. It fails in tight rooms, with running culture, or with shaming categories. Prefer walk-only. Good large-group energizer when Rock Paper Scissors is too competitive.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "Walking pace only. When I call a category you match, move to a new empty spot. Others freeze.",
      },
      {
        speaker: "Call",
        line: "Anyone who listened to music this morning—move.",
      },
      {
        speaker: "Safety",
        line: "Hands free, eyes up, no shoving. Seated folks raise hands instead.",
      },
      {
        speaker: "Close",
        line: "Walk to a new neighbor, say your name, then sit.",
      },
    ],
    pitfalls: [
      {
        title: "Sprinting",
        body: "Reset to walk-only at the first sprint.",
      },
      {
        title: "Exclusive categories",
        body: "Skip anything that outs private life.",
      },
    ],
    originalVariant: {
      title: "Wreck → name lock (site original)",
      body: "After three category moves, the next call is ‘lock arms with the nearest person and exchange names—then unlock.’ Adds name learning without a full Name Game. Keep contact optional; elbow-touch or wave substitute allowed.",
    },
    adultsWork:
      "Youth nights, teens, and large adult mixers with space. For church rooms, keep categories visitor-safe. See large-group adult guide for run sheets. Not for boardrooms with fixed seats—use This or That instead.",
    faqs: [
      {
        q: "How do you play Train Wreck?",
        a: "Call categories; matching people move to new spots while others stay. Keep it walk-only and time-boxed.",
      },
      {
        q: "How many people?",
        a: "Works well from about 15–60 with open floor space.",
      },
      {
        q: "Is running required?",
        a: "No. Walking is safer and still works.",
      },
      {
        q: "Can it be virtual?",
        a: "Use reaction-based categories instead of movement.",
      },
      {
        q: "What categories should I avoid?",
        a: "Body, dating, money, and anything that outs private information.",
      },
    ],
    sources: [
      { label: "Ice breaker games for teens", href: "/icebreaker-games-for-teens" },
      { label: "Ice breaker games for youth group", href: "/icebreaker-games-for-youth-group" },
      { label: "Games like the Human Knot", href: "/games-like-the-human-knot" },
      { label: "Icebreaker games for adults in large groups", href: "/blog/ice-breaker-games-for-adults-large-groups" },
    ],
  },

  "human-knot": {
    howToSteps: [
      {
        title: "Consent and access first",
        body: "Explain that this involves holding hands in a circle. Offer a no-contact alternative immediately (Line-Up, Count Up, or seated problem-solving). Anyone may opt out without explanation and still help as a ‘spotter coach.’",
      },
      {
        title: "Small circles only",
        body: "Circles of 6–10. Larger groups split. People stand shoulder-to-shoulder, reach across, and each hand holds a different person’s hand—not the neighbors’.",
      },
      {
        title: "Untangle without unlocking",
        body: "Time-box 5–8 minutes. Spotters watch for unsafe twisting. Stop if anyone feels pain. Success is optional; learning communication is the point.",
      },
      {
        title: "Debrief",
        body: "What instructions helped? Where did you assume? Then shake out hands and sit.",
      },
    ],
    variations: [
      {
        title: "No-contact knot",
        body: "Hold ribbon ends or rope loops instead of hands.",
      },
      {
        title: "Verbal-only knot",
        body: "One person faces away and gives instructions while the group holds a rope shape—reduces crowding.",
      },
      {
        title: "Skip to Line-Up",
        body: "If the room hesitates, switch games. Skipping is professional.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "6–10 per circle; multiple circles for larger groups." },
      { label: "Time", body: "10–15 minutes including debrief." },
      { label: "Materials", body: "Open space; optional ribbons for no-contact." },
      {
        label: "House rules",
        body: "Opt-out honored. No forced contact. Stop on pain. Avoid with fragile trust or formal attire constraints.",
      },
    ],
    whyItWorks:
      "Human Knot is a teamwork metaphor when consent is real and circles are small. It fails—and can harm trust—when contact is coerced, when mobility needs are ignored, or when the group is already tense. Prefer games-like Human Knot alternatives for many workplaces and mixed-ability rooms.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "This involves holding hands. If you want a no-contact version, take a ribbon or join as a coach. Both roles count.",
      },
      {
        speaker: "Form",
        line: "Circles of six to ten. Cross hands; each hand finds a different person.",
      },
      {
        speaker: "Solve",
        line: "Untangle without unlocking. Pain means stop. Five to eight minutes.",
      },
      {
        speaker: "Close",
        line: "What helped? One sentence each circle—then sit.",
      },
    ],
    pitfalls: [
      {
        title: "Forced participation",
        body: "Never guilt people into contact games.",
      },
      {
        title: "Giant circle",
        body: "Above ten, split. Giant knots become unsafe and impossible.",
      },
      {
        title: "No debrief",
        body: "Without a minute of reflection it is only a stunt.",
      },
    ],
    originalVariant: {
      title: "Knot with veto cards (site original)",
      body: "Each person gets a red veto card. Anyone may raise it to pause and renegotiate holds (switch to ribbons, step out, or restart). Normalizes mid-activity consent instead of toughing out discomfort.",
    },
    adultsWork:
      "Youth retreats sometimes use this; many work teams should pick Line-Up or Marshmallow Challenge instead. Always present alternatives from the Human Knot hub. Skip when trust is low—see when to skip an icebreaker.",
    faqs: [
      {
        q: "How do you play the Human Knot?",
        a: "Small circles hold hands across the group and try to untangle without letting go. Opt-outs and no-contact variants should be offered first.",
      },
      {
        q: "Is the Human Knot safe for work?",
        a: "Only with clear consent, small circles, and easy opt-outs. Many workplaces should choose a no-contact alternative.",
      },
      {
        q: "How many people per knot?",
        a: "About 6–10. Split larger groups.",
      },
      {
        q: "What if someone does not want to touch hands?",
        a: "Use ribbons, coaching roles, or switch to Line-Up / other alternatives.",
      },
      {
        q: "Where can I find alternatives?",
        a: "See our games like the Human Knot hub for lower-contact options.",
      },
    ],
    sources: [
      { label: "Games like the Human Knot", href: "/games-like-the-human-knot" },
      { label: "When to skip an icebreaker", href: "/when-to-skip-an-icebreaker" },
      { label: "Line-Up", href: "/games/line-up" },
      { label: "Ice breaker games for youth group", href: "/icebreaker-games-for-youth-group" },
    ],
  },

  "the-check-in": {
    howToSteps: [
      {
        title: "Choose one channel and one prompt",
        body: "Examples: one word, a color, weather, or a number 1–5 for energy. Post the prompt on a slide. Do not stack three prompts.",
      },
      {
        title: "Announce pass and time",
        body: "Silence, chat, or “pass” all count. Cap spoken shares so a 20-person room still finishes in five minutes—sample voices if needed.",
      },
      {
        title: "Collect without diagnosing",
        body: "Mirror themes (“I hear focused and a few yellows”). Never publicly analyze someone’s mood.",
      },
      {
        title: "Bridge to the agenda",
        body: "One sentence connecting the pulse to the meeting purpose, then start work.",
      },
    ],
    variations: [
      {
        title: "Chat-only check-in",
        body: "Everyone types; no unmutes. Best for large Zoom rooms.",
      },
      {
        title: "Recurring ritual",
        body: "Same slot each standup; rotate the prompt weekly.",
      },
      {
        title: "Upgrade to Weather or One Word",
        body: "If the room wants more nuance, switch to Weather Check-In or One Word Check-In pages for tighter scripts.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "3–40; sample above ~20." },
      { label: "Time", body: "3–8 minutes." },
      { label: "Materials", body: "None; slide optional." },
      {
        label: "House rules",
        body: "Pass allowed. No mood interrogation. Keep prompts work-safe.",
      },
    ],
    whyItWorks:
      "The Check-In is a family of arrival rituals, not one rigid game. It works when the prompt is single and optional. It fails when every person must give a speech, or when the meeting already needed those minutes for a decision—skip instead.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "One color for your energy today. Pass or chat is fine.",
      },
      {
        speaker: "Collect",
        line: "I will mirror themes, not call everyone.",
      },
      {
        speaker: "Mirror",
        line: "Lots of green and yellow—thanks.",
      },
      {
        speaker: "Close",
        line: "We will keep today’s block tight. Agenda now.",
      },
    ],
    pitfalls: [
      {
        title: "Therapy drift",
        body: "Do not ask people to explain hard feelings in a status meeting.",
      },
      {
        title: "Triple prompts",
        body: "One prompt. Stacking word + color + weather triples the time.",
      },
    ],
    originalVariant: {
      title: "Check-in → parking lot (site original)",
      body: "After the pulse, anyone may drop one agenda worry in a shared “parking lot” doc anonymously. Facilitator only skims themes later. Separates arrival mood from issue capture without a second icebreaker.",
    },
    adultsWork:
      "Default for work meetings and standups. Distinguish from One Word / Weather pages by treating this as the generic ritual chooser. Link those when you want a fixed mechanic. See meetings hub for when to pick which opener.",
    faqs: [
      {
        q: "What is The Check-In icebreaker?",
        a: "A short arrival ritual using one prompt—word, color, weather, or scale—so the facilitator can read the room before the agenda.",
      },
      {
        q: "How long should a meeting check-in take?",
        a: "Usually 3–8 minutes. Sample voices in larger groups.",
      },
      {
        q: "How is it different from One Word Check-In?",
        a: "One Word is a specific mechanic. The Check-In is the broader ritual that can use words, colors, or weather.",
      },
      {
        q: "Can people pass?",
        a: "Yes. Pass, chat, or silence should be valid.",
      },
      {
        q: "When should I skip The Check-In?",
        a: "When the clock is gone or the topic is a hard conversation that needs no warm-up game.",
      },
    ],
    sources: [
      { label: "Ice breaker games for meetings", href: "/icebreaker-games-for-meetings" },
      { label: "One Word Check-In", href: "/games/one-word-check-in" },
      { label: "Weather Check-In", href: "/games/weather-check-in" },
      { label: "When to skip an icebreaker", href: "/when-to-skip-an-icebreaker" },
    ],
  },

  "the-question-web": {
    howToSteps: [
      {
        title: "Prep a soft ball of yarn and clean prompts",
        body: "Prompts: small win, hobby, learning goal, value you care about at work. Avoid trauma and dating. Clear trip hazards.",
      },
      {
        title: "Explain hold-and-toss",
        body: "Speaker keeps a finger on the yarn, answers in 20 seconds, gently tosses the ball to someone across the circle who has not spoken. The strand stays, forming a web.",
      },
      {
        title: "Time-box the web",
        body: "Stop after everyone has one turn or after 8–10 minutes. Do not force a perfect web.",
      },
      {
        title: "Debrief the picture",
        body: "Look at the web: who is connected? What happens if one person tugs? Then carefully rewind.",
      },
    ],
    variations: [
      {
        title: "Ribbon web (lower mess)",
        body: "Use short ribbon segments between pairs instead of one giant ball.",
      },
      {
        title: "Virtual web",
        body: "Draw lines on a shared whiteboard between names as people unmute to answer.",
      },
      {
        title: "Work question only",
        body: "Every prompt is about collaboration habits, not personal life.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "6–16 in one circle; split larger groups." },
      { label: "Time", body: "10–15 minutes." },
      { label: "Materials", body: "Yarn or string; open circle." },
      {
        label: "House rules",
        body: "Soft tosses. Pass allowed (hold yarn and pass on). Seated option: roll yarn along the floor.",
      },
    ],
    whyItWorks:
      "The visible web makes connection concrete. It fails in huge rooms, when tosses get wild, or when prompts dig too deep. For meetings that need less prop work, use Common Ground or a check-in instead.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "We will build a yarn web. Answer in twenty seconds, keep a finger on the strand, toss gently to someone new.",
      },
      {
        speaker: "Prompt",
        line: "Share one small win this week—or pass and toss on.",
      },
      {
        speaker: "Notice",
        line: "Look at the web. Who is holding many strands?",
      },
      {
        speaker: "Close",
        line: "One insight about listening—then we rewind carefully.",
      },
    ],
    pitfalls: [
      {
        title: "Hard throws",
        body: "Reset to underhand rolls if anyone gets hit.",
      },
      {
        title: "Oversharing prompts",
        body: "Keep questions preference- and work-safe.",
      },
    ],
    originalVariant: {
      title: "Web → action strand (site original)",
      body: "Before rewinding, place one sticky on a strand that represents a collaboration habit to keep this month (e.g., “write decisions down”). Photo optional. Links the metaphor to one behavior without a second exercise.",
    },
    adultsWork:
      "Fits workshops and training more than daily standups. For work kickoffs after names are known. See meetings and work hubs for lighter openers when time is tight.",
    faqs: [
      {
        q: "How do you play The Question Web?",
        a: "People answer a prompt while holding yarn and toss it across the circle, forming a web, then debrief what the web shows.",
      },
      {
        q: "How many people can play?",
        a: "Best with about 6–16 per circle.",
      },
      {
        q: "Can it be virtual?",
        a: "Yes—draw connection lines on a whiteboard as people share.",
      },
      {
        q: "What prompts work?",
        a: "Small wins, hobbies, learning goals, and work values—not trauma stories.",
      },
      {
        q: "How long does it take?",
        a: "About 10–15 minutes including debrief.",
      },
    ],
    sources: [
      { label: "Ice breaker games for meetings", href: "/icebreaker-games-for-meetings" },
      { label: "Icebreaker games for work", href: "/icebreaker-games-for-work" },
      { label: "Common Ground", href: "/games/common-ground" },
      { label: "How we choose icebreaker games", href: "/how-we-choose-icebreakers" },
    ],
  },

  "topics-tables": {
    howToSteps: [
      {
        title: "Prep topic cards per table",
        body: "3–5 prompts per table: project hopes, tools you like, weekend hobbies. Keep cards work- or event-safe. Place water and pens.",
      },
      {
        title: "Brief the rotate rule",
        body: "Discuss for 4–5 minutes. Optional: one person stays as host while others rotate, or whole tables swap cards.",
      },
      {
        title: "Signal loudly",
        body: "Use a timer and a clear “rotate” call. Cap at two rotations for an icebreaker block.",
      },
      {
        title: "Harvest one line per table",
        body: "Each table shares one insight in 15 seconds. Do not hear every prompt aloud.",
      },
    ],
    variations: [
      {
        title: "Speed topics",
        body: "Two minutes per card, three cards, no rotate—tighter agendas.",
      },
      {
        title: "Virtual breakout tables",
        body: "Breakouts of 4 with a shared doc of prompts; rematch once.",
      },
      {
        title: "Conference theme tables",
        body: "Prompts match tracks (product, ops, culture).",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "12–80 seated at tables of 4–8." },
      { label: "Time", body: "12–20 minutes." },
      { label: "Materials", body: "Printed prompt cards; timer." },
      {
        label: "House rules",
        body: "Pass on any prompt. No forced introductions beyond name + role if desired.",
      },
    ],
    whyItWorks:
      "Topics Tables works when people are already seated and you want conversation without clearing a dance floor. It fails when prompts are dull or when rotations eat the keynote. Keep one harvest round only.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "Each table has three prompts. Four minutes. Pass anytime. Names first if you have not met.",
      },
      {
        speaker: "Rotate",
        line: "Leave one host; others move one table clockwise—or swap card stacks if mobility is limited.",
      },
      {
        speaker: "Harvest",
        line: "One sentence per table—go.",
      },
      {
        speaker: "Close",
        line: "Cards down. Welcome remarks next.",
      },
    ],
    pitfalls: [
      {
        title: "Too many rotations",
        body: "Two max for an icebreaker. More becomes musical chairs.",
      },
      {
        title: "Vague cards",
        body: "Replace “talk about life” with concrete prompts.",
      },
    ],
    originalVariant: {
      title: "Table → working pod (site original)",
      body: "After the last rotation, tables stay together as discussion pods for the first agenda item. The icebreaker seating becomes the work structure—no reshuffle.",
    },
    adultsWork:
      "Strong for meetings, workshops, and conferences with banquet seating. Pair with Speed Networking when you need 1:1s instead of table talk. See meetings hub chooser.",
    faqs: [
      {
        q: "How do you facilitate Topics Tables?",
        a: "Seat people at tables with prompt cards, time a short discussion, optionally rotate once, then harvest one line per table.",
      },
      {
        q: "How many prompts per table?",
        a: "Three to five is enough. Quality beats a thick stack.",
      },
      {
        q: "Can Topics Tables work virtually?",
        a: "Yes—breakout rooms with a shared prompt doc.",
      },
      {
        q: "How long does it take?",
        a: "Usually 12–20 minutes including one harvest.",
      },
      {
        q: "What if people cannot move between tables?",
        a: "Rotate the card stacks instead of the people.",
      },
    ],
    sources: [
      { label: "Ice breaker games for meetings", href: "/icebreaker-games-for-meetings" },
      { label: "Icebreaker games for work", href: "/icebreaker-games-for-work" },
      { label: "Speed Networking", href: "/games/speed-networking" },
      { label: "Ice breaker games for small groups", href: "/icebreaker-games-for-small-groups" },
    ],
  },

  "what-are-you-bringing-to-the-meeting": {
    howToSteps: [
      {
        title: "Define “bringing” as a resource, not a confession",
        body: "People name one thing they bring: a skill, a question, energy, a doc, or a decision need. Ban status flexing and personal crises as required shares.",
      },
      {
        title: "Model a concrete line",
        body: "“I am bringing the draft timeline and one open risk.” Fifteen seconds max.",
      },
      {
        title: "Collect via go-around or chat",
        body: "Large rooms: chat waterfall of “bringing…” lines. Facilitator groups themes (decisions, blockers, energy).",
      },
      {
        title: "Use it to order the agenda",
        body: "If three people bring blockers, start there. The icebreaker shapes the meeting.",
      },
    ],
    variations: [
      {
        title: "Bringing / leaving",
        body: "Optional second word: what you want to leave with (clarity, decision, owners).",
      },
      {
        title: "Silent sticky wall",
        body: "In person, post stickies under Bring / Need columns.",
      },
      {
        title: "Async pre-read version",
        body: "People post in a channel before the call; meeting starts by reading clusters.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "4–30; chat for larger." },
      { label: "Time", body: "5–10 minutes." },
      { label: "Materials", body: "None; sticky notes optional." },
      {
        label: "House rules",
        body: "Pass allowed. No forcing emotional disclosure. Keep it about the meeting’s work.",
      },
    ],
    whyItWorks:
      "This opener ties warmth to usefulness: people state contribution and needs. It fails when it becomes a brag circle or when leaders punish “I bring confusion.” Psychological safety matters—treat blockers as valuable brings.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "In one sentence: what are you bringing to this meeting—a doc, a question, energy, or a decision need? Pass is fine.",
      },
      {
        speaker: "Model",
        line: "I am bringing the agenda draft and one timing risk.",
      },
      {
        speaker: "Collect",
        line: "Chat or go-around—fifteen seconds each.",
      },
      {
        speaker: "Close",
        line: "I heard three blockers and two decision needs. We will start with blockers.",
      },
    ],
    pitfalls: [
      {
        title: "Brag sheet",
        body: "Redirect “I bring excellence” to a concrete artifact or question.",
      },
      {
        title: "Punishing honesty",
        body: "If someone brings “confusion,” thank them and use it.",
      },
    ],
    originalVariant: {
      title: "Bring / borrow board (site original)",
      body: "Two columns on a doc: Bring and Borrow. People may list one item they can lend the room (template, intro, review slot). Facilitator matches one borrow to one bring before the meeting ends. Turns the icebreaker into micro-help without a second networking game.",
    },
    adultsWork:
      "Purpose-built for work meetings. Use after a tiny mood check-in or instead of one when the agenda is dense. See icebreaker games for work and meetings hubs.",
    faqs: [
      {
        q: "How do you run What Are You Bringing to the Meeting?",
        a: "Each person names one contribution or need for the session in one sentence; the facilitator clusters themes and may reorder the agenda.",
      },
      {
        q: "Is this an icebreaker or a status update?",
        a: "Both. Keep it to one sentence so it stays a warm-up, not a report.",
      },
      {
        q: "How long does it take?",
        a: "About 5–10 minutes.",
      },
      {
        q: "Can it be virtual?",
        a: "Yes—chat waterfall works well.",
      },
      {
        q: "What are good example answers?",
        a: "“Draft slides,” “a blocking question,” “fresh eyes,” “I need a decision on owners.”",
      },
    ],
    sources: [
      { label: "Ice breaker games for meetings", href: "/icebreaker-games-for-meetings" },
      { label: "Icebreaker games for work", href: "/icebreaker-games-for-work" },
      { label: "Chat Waterfall", href: "/games/chat-waterfall" },
      { label: "The Check-In", href: "/games/the-check-in" },
    ],
  },

  "desert-island-scenario": {
    howToSteps: [
      {
        title: "Set a playful constraint",
        body: "“You can take three items / one skill / one person-as-role (not a real coworker crush).” Keep it fictional and light.",
      },
      {
        title: "Think time",
        body: "60–90 seconds silent. Pass allowed—people may listen only.",
      },
      {
        title: "Share in small groups",
        body: "Trios for three minutes. Optional: one volunteer per trio reports a funny combo.",
      },
      {
        title: "Optional work bridge",
        body: "Ask: which ‘item’ maps to a resource our project actually needs? One minute only—or skip the bridge.",
      },
    ],
    variations: [
      {
        title: "Office island",
        body: "Items must be workplace tools (docs, snacks, headphones).",
      },
      {
        title: "No-lie storytelling cousin",
        body: "If you want personal facts without fantasy, switch to Two Truths alternatives.",
      },
      {
        title: "Chat island",
        body: "Everyone types three items; react to favorites.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "6–30." },
      { label: "Time", body: "8–12 minutes." },
      { label: "Materials", body: "None." },
      {
        label: "House rules",
        body: "No targeting real people romantically. Keep humor kind. Pass allowed.",
      },
    ],
    whyItWorks:
      "Desert Island is imaginative preference-sharing with a clear structure. It fails when it invites exclusionary jokes or when the room needed a real check-in instead of fantasy. Use as a mid-energy opener after names are known.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "Three items for a desert island—work-safe and fictional. Pass is fine.",
      },
      {
        speaker: "Think",
        line: "Sixty seconds. Write if you want.",
      },
      {
        speaker: "Share",
        line: "Trios for three minutes. One funny combo may come back to main.",
      },
      {
        speaker: "Close",
        line: "Optional: one resource our project actually needs—then agenda.",
      },
    ],
    pitfalls: [
      {
        title: "Mean humor",
        body: "Shut down jokes that punch down.",
      },
      {
        title: "Endless shares",
        body: "Cap volunteer reports at two.",
      },
    ],
    originalVariant: {
      title: "Island → kit list (site original)",
      body: "After shares, the room builds a six-item “project island kit” on a sticky (three tools, two rituals, one rest item). Photo and revisit in a month. Moves fantasy into a lightweight working agreement.",
    },
    adultsWork:
      "Meetings and workshops that can spare ~10 minutes. For storytelling without fantasy, use games like Two Truths. Keep corporate versions tool-themed.",
    faqs: [
      {
        q: "How do you play Desert Island Scenario?",
        a: "People choose a few fictional items or skills for a desert island, share in small groups, and optionally bridge to real project needs.",
      },
      {
        q: "How long does it take?",
        a: "About 8–12 minutes.",
      },
      {
        q: "Is it appropriate for work?",
        a: "Yes with tool-themed constraints and kind humor.",
      },
      {
        q: "Can it be virtual?",
        a: "Yes—type items in chat or use breakout trios.",
      },
      {
        q: "What if someone hates hypotheticals?",
        a: "Allow pass or switch to What Are You Bringing to the Meeting.",
      },
    ],
    sources: [
      { label: "Ice breaker games for meetings", href: "/icebreaker-games-for-meetings" },
      { label: "Games like Two Truths and a Lie", href: "/games-like-two-truths-and-a-lie" },
      { label: "What Are You Bringing to the Meeting", href: "/games/what-are-you-bringing-to-the-meeting" },
      { label: "Free fun icebreaker games", href: "/free-fun-icebreaker-games" },
    ],
  },

  "speed-networking": {
    howToSteps: [
      {
        title: "Set round length and prompt",
        body: "2–3 minutes per pair. Prompt examples: name + role + one project hope; or “ask one curious question.” Ring a clear signal.",
      },
      {
        title: "Line or breakout logistics",
        body: "In person: two lines, one side shifts each round. Virtual: breakout rooms of 2, rematch 3–4 times. Publish the shift direction once.",
      },
      {
        title: "Enforce equal airtime",
        body: "At halfway, call “switch who is speaking.” Pass on personal questions is fine.",
      },
      {
        title: "Close with optional follow-ups",
        body: "People may exchange contact info voluntarily. Do not force LinkedIn spam.",
      },
    ],
    variations: [
      {
        title: "Speed mentoring",
        body: "One line is mentors; shorter rounds; mentees rotate.",
      },
      {
        title: "Topic booths",
        body: "Hosts stay at topics; visitors rotate—hybrid with Topics Tables.",
      },
      {
        title: "Chat-only intros",
        body: "When video fatigue is high: 90-second DM or chat pair prompts.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "12–100; even counts help (facilitator fills)." },
      { label: "Time", body: "15–25 minutes for 4–6 rounds." },
      { label: "Materials", body: "Timer/bell; space or breakout tool." },
      {
        label: "House rules",
        body: "Work-safe questions. Opt out of a round by sitting a turn. No mandatory contact exchange.",
      },
    ],
    whyItWorks:
      "Speed Networking maximizes introductions per minute with a clock. It fails when rounds run long, when prompts are invasive, or when odd numbers strand people—always plan a floater role. Better than free mingling for introverts who like structure.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "Two minutes per pair: name, role, one hope for today. When I ring, the left line shifts one person.",
      },
      {
        speaker: "Halfway",
        line: "Switch who is talking.",
      },
      {
        speaker: "Rotate",
        line: "Bell—shift. New pair. Go.",
      },
      {
        speaker: "Close",
        line: "Last bell. Optional notes for follow-up. Sit for the program.",
      },
    ],
    pitfalls: [
      {
        title: "Five-minute rounds",
        body: "Too long. Keep 2–3 minutes.",
      },
      {
        title: "No floaters",
        body: "Odd numbers need a host pair or trio.",
      },
    ],
    originalVariant: {
      title: "Speed → sticky match (site original)",
      body: "After the final round, people write one name on a sticky of someone they want a 10-minute follow-up with. Stickies go on a “office hours” board; matches are optional. Captures intent without forcing cards on everyone.",
    },
    adultsWork:
      "Conferences, onboarding, and cross-team meetings. Listed on work and best-icebreaker curated lists. Pair with Human Bingo when you want roaming instead of timed pairs.",
    faqs: [
      {
        q: "How do you run Speed Networking?",
        a: "Pair people for short timed rounds with a simple prompt, rotate several times, and optionally allow follow-ups.",
      },
      {
        q: "How long should each round be?",
        a: "Two to three minutes is enough for an icebreaker.",
      },
      {
        q: "How do you handle odd numbers?",
        a: "Use a trio, a floater host, or have the facilitator sit in.",
      },
      {
        q: "Can it be virtual?",
        a: "Yes—breakout rooms of two with automatic rematching if available.",
      },
      {
        q: "Is it good for introverts?",
        a: "Often yes, because the structure and time box reduce awkward open mingling.",
      },
    ],
    sources: [
      { label: "Icebreaker games for work", href: "/icebreaker-games-for-work" },
      { label: "Ice breaker games for meetings", href: "/icebreaker-games-for-meetings" },
      { label: "Games like Human Bingo", href: "/games-like-human-bingo" },
      { label: "Best icebreaker games", href: "/best-icebreaker-games" },
    ],
  },

  "passions-tic-tac-toe": {
    howToSteps: [
      {
        title: "Print a 3×3 passion grid",
        body: "Squares like cooking, hiking, podcasts, puzzles, gardening, languages. Leave one free space. Avoid identity-sensitive squares.",
      },
      {
        title: "Explain bingo-lite rules",
        body: "People initial a square if it is a true passion. Find others who share a square for a 30-second chat. First to three-in-a-row may shout “tic-tac-toe”—keep celebrating soft.",
      },
      {
        title: "Mingle time-box",
        body: "6–8 minutes. Encourage multiple conversations, not racing alone.",
      },
      {
        title: "Harvest two shares",
        body: "Volunteers name one shared passion they discovered. Sit.",
      },
    ],
    variations: [
      {
        title: "Work passions grid",
        body: "Squares about craft skills (facilitation, SQL, design systems) for professional rooms.",
      },
      {
        title: "Virtual grid",
        body: "Shared doc; claim squares in comments; DM matches.",
      },
      {
        title: "No winners",
        body: "Remove the race; just fill two shared squares.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "10–40." },
      { label: "Time", body: "10–15 minutes." },
      { label: "Materials", body: "Printed grids; pens." },
      {
        label: "House rules",
        body: "Pass on any square. No shaming uncommon hobbies. Soft win culture.",
      },
    ],
    whyItWorks:
      "Passions Tic-Tac-Toe is Human Bingo’s smaller cousin: faster card, passion-focused. It fails when squares exclude people or when winning matters more than conversation. Good work curated opener after names.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "Initial squares that are true for you. Find someone who shares a square—thirty seconds. Three in a row is optional fun.",
      },
      {
        speaker: "Start",
        line: "Eight minutes. Mingle.",
      },
      {
        speaker: "Mid",
        line: "If you have a line, keep helping others find matches.",
      },
      {
        speaker: "Close",
        line: "Two passion shout-outs—then sit.",
      },
    ],
    pitfalls: [
      {
        title: "Status hobbies only",
        body: "Mix everyday passions, not only expensive sports.",
      },
      {
        title: "Hard competition",
        body: "Downplay winning; emphasize matches.",
      },
    ],
    originalVariant: {
      title: "Passion → skill swap (site original)",
      body: "After mingling, people star one square they can teach in 15 minutes and one they want to learn. Post on a wall for optional lunch swaps later in the week—extends the icebreaker into lightweight learning without a second event.",
    },
    adultsWork:
      "Work offsites and team socials. Curated on the work hub. For pure networking scale, use Human Bingo or Speed Networking instead.",
    faqs: [
      {
        q: "How do you play Passions Tic-Tac-Toe?",
        a: "Fill a 3×3 passion grid, mingle to find shared squares, and optionally aim for three in a row while talking.",
      },
      {
        q: "How is it different from Human Bingo?",
        a: "Smaller grid, passion-focused squares, usually faster.",
      },
      {
        q: "How long does it take?",
        a: "About 10–15 minutes.",
      },
      {
        q: "Can it be virtual?",
        a: "Yes with a shared doc and DMs or breakouts.",
      },
      {
        q: "What squares should I avoid?",
        a: "Anything that outs private identity, wealth, or health status.",
      },
    ],
    sources: [
      { label: "Icebreaker games for work", href: "/icebreaker-games-for-work" },
      { label: "Human Bingo", href: "/games/human-bingo" },
      { label: "Speed Networking", href: "/games/speed-networking" },
      { label: "Free fun icebreaker games", href: "/free-fun-icebreaker-games" },
    ],
  },

  minefield: {
    howToSteps: [
      {
        title: "Build a simple, safe course",
        body: "Use cones, paper “mines,” or chairs as obstacles in a short lane. No real hazards. Clear sharp edges. Offer a seated verbal-only version if needed.",
      },
      {
        title: "Pairs and roles",
        body: "Walker is blindfolded only with consent—or closes eyes. Guide gives verbal instructions only; no pulling. Swap roles after one run.",
      },
      {
        title: "Run short attempts",
        body: "60–90 seconds per attempt. Spotters watch for trips. Stop on discomfort.",
      },
      {
        title: "Debrief with work language",
        body: "What instructions helped? Where did assumptions show up? How does this map to handoffs at work? Three minutes.",
      },
    ],
    variations: [
      {
        title: "No blindfold",
        body: "Walker looks at the ceiling or follows only audio—reduces anxiety.",
      },
      {
        title: "Virtual minefield",
        body: "Guide describes a path on a shared grid; walker marks cells—no physical risk.",
      },
      {
        title: "Team radio",
        body: "Only one guide may speak; others silent—highlights channel noise.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "6–20 in rotating pairs." },
      { label: "Time", body: "15–25 minutes including debrief." },
      { label: "Materials", body: "Soft obstacles; optional blindfolds; spotters." },
      {
        label: "House rules",
        body: "Consent for eyes-closed. No touching the walker. Abort anytime. Not for fragile trust or crisis meetings.",
      },
    ],
    whyItWorks:
      "Minefield makes unclear instructions expensive in a low-stakes way—then the debrief carries the learning. It fails when blindfolds are coerced, when the course is actually unsafe, or when you skip the debrief. Historical search interest in “minefield teamwork” is about this facilitation use—not a combat game.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "Pairs: guide and walker. Eyes-closed is optional. Guides speak only—no pulling. Spotters welcome.",
      },
      {
        speaker: "Course",
        line: "Soft obstacles only. Ninety seconds. Abort if anyone feels unsafe.",
      },
      {
        speaker: "Swap",
        line: "Switch roles once.",
      },
      {
        speaker: "Debrief",
        line: "What clarity helped? What assumptions appeared? How do we hand off work this week?",
      },
    ],
    pitfalls: [
      {
        title: "Forced blindfolds",
        body: "Always offer eyes-open audio-only.",
      },
      {
        title: "Skipping debrief",
        body: "Without reflection it is only a stunt.",
      },
      {
        title: "Unsafe props",
        body: "No hard furniture edges as “mines.”",
      },
    ],
    originalVariant: {
      title: "Minefield → ticket language (site original)",
      body: "During debrief, rewrite one unclear “mine” moment as a better work instruction (“turn 45 degrees toward the window” → “state direction + distance + landmark”). Capture two phrases on a sticky as the team’s communication norms for the sprint.",
    },
    adultsWork:
      "Training and team-building days on the work hub curated list. Not a daily standup game. Skip when trust is low—see when to skip. Prefer virtual grid version for remote teams.",
    faqs: [
      {
        q: "How do you play the Minefield team building game?",
        a: "A walker navigates soft obstacles using only a partner’s verbal guidance, then pairs debrief what made instructions clear or unclear.",
      },
      {
        q: "Do people have to be blindfolded?",
        a: "No. Eyes-closed or audio-only options should be offered with easy opt-out.",
      },
      {
        q: "How long does Minefield take?",
        a: "About 15–25 minutes including debrief.",
      },
      {
        q: "Is Minefield safe for work?",
        a: "Yes with soft props, spotters, consent, and no forced contact. Skip if the room is tense.",
      },
      {
        q: "Can Minefield be virtual?",
        a: "Yes—use a shared grid and spoken directions instead of a physical course.",
      },
    ],
    sources: [
      { label: "Icebreaker games for work", href: "/icebreaker-games-for-work" },
      { label: "When to skip an icebreaker", href: "/when-to-skip-an-icebreaker" },
      { label: "Games like the Human Knot", href: "/games-like-the-human-knot" },
      { label: "Ice breaker games for meetings", href: "/icebreaker-games-for-meetings" },
    ],
  },

  "picture-sharing": {
    howToSteps: [
      {
        title: "Set a theme and privacy rule",
        body: "Themes: favorite mug, a plant, a view from your window, a hobby tool. Ban photos of children without consent, IDs, or messy private spaces. Camera-off with a chat description is a full pass.",
      },
      {
        title: "Prep time",
        body: "60–90 seconds to grab or open a photo. Do not require leaving the desk if mobility is limited—phone gallery is fine.",
      },
      {
        title: "Share in breakouts or samples",
        body: "Under 12: gallery go-around, 20 seconds each. Above 12: breakouts of 4 for three minutes, then two volunteers in main.",
      },
      {
        title: "Reset screens",
        body: "Stop screen shares before the agenda so slides stay readable.",
      },
    ],
    variations: [
      {
        title: "Chat photo link only",
        body: "Paste a link or emoji stand-in—no live camera needed.",
      },
      {
        title: "Same object challenge",
        body: "Everyone finds something blue; compare on three.",
      },
      {
        title: "In-person phone pass",
        body: "Show a gallery photo to a neighbor without posting online.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "4–30; sample in larger rooms." },
      { label: "Time", body: "6–12 minutes." },
      { label: "Materials", body: "Camera or phone gallery optional." },
      {
        label: "House rules",
        body: "No screenshots without consent. Pass anytime. No commenting on homes as status.",
      },
    ],
    whyItWorks:
      "Picture Sharing gives remote rooms a visual hook with low verbal load. It fails when people feel judged for their space, when themes invade privacy, or when everyone must screen-share long stories. Always treat blur/chat as success.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "Show a photo of something that fits the theme—or describe it in chat. Camera off is fine.",
      },
      {
        speaker: "Prep",
        line: "Ninety seconds to choose. Do not leave if that is hard—gallery works.",
      },
      {
        speaker: "Share",
        line: "Breakouts of four for three minutes. Then two volunteers in main.",
      },
      {
        speaker: "Close",
        line: "Stop shares. Agenda time.",
      },
    ],
    pitfalls: [
      {
        title: "Home shaming",
        body: "Shut down comments about money, mess, or neighborhood.",
      },
      {
        title: "Forced video",
        body: "Never require camera for this game.",
      },
    ],
    originalVariant: {
      title: "Picture → prompt sticky (site original)",
      body: "After shares, each person types one adjective from someone else’s picture into a shared doc. Facilitator reads five adjectives as the room’s “arrival mood board,” then starts work—no more storytelling.",
    },
    adultsWork:
      "Virtual and short-virtual hubs. Prefer Chat Waterfall when trust is low. For high school online classes, use school-safe themes (book, snack, hobby tool).",
    faqs: [
      {
        q: "How do you play Picture Sharing?",
        a: "People optionally show a themed photo or describe it in chat, share briefly in small groups, then stop screen shares before the agenda.",
      },
      {
        q: "What if someone cannot or will not use a camera?",
        a: "Chat descriptions or emoji stand-ins count. Pass is allowed.",
      },
      {
        q: "How long does it take?",
        a: "About 6–12 minutes.",
      },
      {
        q: "Is it okay for work?",
        a: "Yes with professional themes and no pressure to show private rooms.",
      },
      {
        q: "Should I screenshot the gallery?",
        a: "Only with clear consent. Default is no.",
      },
    ],
    sources: [
      { label: "Virtual ice breaker games", href: "/virtual-icebreaker-games" },
      { label: "Short virtual icebreakers", href: "/short-virtual-icebreakers" },
      { label: "Chat Waterfall", href: "/games/chat-waterfall" },
      { label: "Virtual Background Story", href: "/games/virtual-background-story" },
    ],
  },

  "show-and-tell": {
    howToSteps: [
      {
        title: "Define the object rule",
        body: "One object within arm’s reach: mug, book, headphones, plant. No valuables that create status pressure. Virtual: hold to camera; in person: place on table.",
      },
      {
        title: "Model a 20-second tell",
        body: "Name the object and one reason it matters today—not a life story.",
      },
      {
        title: "Sample or breakout",
        body: "Large rooms: six volunteers or breakouts of 4. Do not hear 40 monologues.",
      },
      {
        title: "Thank and move on",
        body: "Optional: note one theme (“lots of tea people”). Start agenda.",
      },
    ],
    variations: [
      {
        title: "Tool show-and-tell",
        body: "Objects must be work tools—great for onboarding.",
      },
      {
        title: "Mystery bag",
        body: "Reach without looking; describe by touch first—keep it school-safe.",
      },
      {
        title: "Chat photo tell",
        body: "Paste a photo instead of holding the object.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "5–25 for spoken rounds; larger with samples." },
      { label: "Time", body: "8–15 minutes." },
      { label: "Materials", body: "One personal object optional." },
      {
        label: "House rules",
        body: "Pass allowed. No judging taste or cost. Keep stories under 30 seconds.",
      },
    ],
    whyItWorks:
      "Show and Tell creates concrete conversation starters without inventing facts. It fails when it becomes a wealth display or when every person must perform. Cap samples. Prefer Picture Sharing if objects feel awkward.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "Grab one object in reach—or pass. Twenty seconds: what it is and why it is here today.",
      },
      {
        speaker: "Model",
        line: "This mug keeps my water visible so I actually drink it.",
      },
      {
        speaker: "Share",
        line: "Breakouts of four—or six volunteers in main.",
      },
      {
        speaker: "Close",
        line: "Thanks. Agenda next.",
      },
    ],
    pitfalls: [
      {
        title: "Status objects",
        body: "Redirect luxury flexing to “what it helps you do.”",
      },
      {
        title: "Long memoirs",
        body: "Enforce the 20–30 second cap.",
      },
    ],
    originalVariant: {
      title: "Object → need tag (site original)",
      body: "After the tell, people optionally add one emoji need tag in chat (hourglass, wrench, check). Facilitator only summarizes needs in aggregate before the working agenda.",
    },
    adultsWork:
      "Virtual meetings and light socials. For funny meetings, allow playful objects but keep PG. Not for crisis topics—skip the opener.",
    faqs: [
      {
        q: "How do you run Show and Tell as an icebreaker?",
        a: "Each person optionally shows one nearby object and gives a short why; sample voices in large groups.",
      },
      {
        q: "What objects work for work meetings?",
        a: "Mugs, notebooks, headphones, plants, a favorite pen—avoid expensive flex items as the point.",
      },
      {
        q: "How long does it take?",
        a: "About 8–15 minutes.",
      },
      {
        q: "Can people pass?",
        a: "Yes. Listening only is valid.",
      },
      {
        q: "Virtual tips?",
        a: "Hold the object to camera or paste a photo; stop shares before slides.",
      },
    ],
    sources: [
      { label: "Virtual ice breaker games", href: "/virtual-icebreaker-games" },
      { label: "Funny ice breaker games for meetings", href: "/funny-icebreaker-games-for-meetings" },
      { label: "Picture Sharing", href: "/games/picture-sharing" },
      { label: "Short virtual icebreakers", href: "/short-virtual-icebreakers" },
    ],
  },

  "crossword-names": {
    howToSteps: [
      {
        title: "Explain the grid goal",
        body: "People write their first name, then build a crossword-style grid by adding names that share letters. Keep it collaborative, not competitive spelling bees.",
      },
      {
        title: "Start with a seed name",
        body: "Facilitator writes one name in the center of a shared whiteboard or paper. Next person adds a name interlocking on a letter.",
      },
      {
        title: "Help freely",
        body: "Neighbors may suggest placements. Forgotten spellings are normal—ask the owner.",
      },
      {
        title: "Stop while readable",
        body: "8–12 names or 8 minutes. Photo optional. Do not force every late joiner into a cramped corner.",
      },
    ],
    variations: [
      {
        title: "Virtual whiteboard crossword",
        body: "Shared board; people type their name when called.",
      },
      {
        title: "Team mini-grids",
        body: "Breakouts of 5 build small grids, then screenshot to main.",
      },
      {
        title: "Role crossword",
        body: "Add role abbreviations instead of long last names.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "6–16 for one grid; split larger groups." },
      { label: "Time", body: "8–12 minutes." },
      { label: "Materials", body: "Whiteboard, paper, or shared board." },
      {
        label: "House rules",
        body: "No mocking unusual names. Ask for preferred spelling/pronunciation. Pass allowed.",
      },
    ],
    whyItWorks:
      "Crossword Names teaches spelling and faces together—useful for riddle/virtual puzzle warm-ups. It fails when names are mocked or when the grid becomes a test. Pair with pronunciation checks. Not a substitute for Motion Name-Game when energy is needed.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "We will build a name crossword. Ask for spellings. Help is encouraged.",
      },
      {
        speaker: "Seed",
        line: "I will place the first name. Next person adds a name sharing a letter.",
      },
      {
        speaker: "Pace",
        line: "Eight minutes—keep the grid readable.",
      },
      {
        speaker: "Close",
        line: "Say your name once more as we point to it—then we start.",
      },
    ],
    pitfalls: [
      {
        title: "Spelling shame",
        body: "Owners correct gently; never joke about “weird” names.",
      },
      {
        title: "Overcrowded grid",
        body: "Split into two boards above ~12.",
      },
    ],
    originalVariant: {
      title: "Pronounce-as-you-place (site original)",
      body: "When someone adds a name, the whole group repeats the pronunciation once before the next placement. Turns the puzzle into a pronunciation drill without a second name game.",
    },
    adultsWork:
      "Riddle virtual meetings and name-learning workshops. For pure remote pulse, Chat Waterfall is faster. Link name-game hub for movement options.",
    faqs: [
      {
        q: "How do you play Crossword Names?",
        a: "Build a crossword-like grid of first names that share letters on a shared board, helping with names and spellings.",
      },
      {
        q: "How many people?",
        a: "About 6–16 per grid.",
      },
      {
        q: "Can it be virtual?",
        a: "Yes—use a shared whiteboard.",
      },
      {
        q: "What if names do not fit?",
        a: "Start a second mini-grid or allow a free-floating name nearby.",
      },
      {
        q: "How long does it take?",
        a: "Usually 8–12 minutes.",
      },
    ],
    sources: [
      { label: "Riddle icebreakers for virtual meetings", href: "/riddle-icebreakers-for-virtual-meetings" },
      { label: "Name game icebreakers", href: "/name-game-icebreakers" },
      { label: "The Name Game", href: "/games/the-name-game" },
      { label: "Virtual ice breaker games", href: "/virtual-icebreaker-games" },
    ],
  },

  "guess-that-team-member": {
    howToSteps: [
      {
        title: "Collect clues ahead or live",
        body: "Each person submits 2–3 work-safe clues (favorite tool, snack, hobby). Facilitator screens. No dating or salary clues.",
      },
      {
        title: "Read clues anonymously",
        body: "Host reads one clue set. Group guesses who it is in chat or aloud. Owner confirms or passes on reveal.",
      },
      {
        title: "Limit the stack",
        body: "Six to eight people for an icebreaker. Save others for later meetings.",
      },
      {
        title: "Close kindly",
        body: "Wrong guesses stay light. No roasting.",
      },
    ],
    variations: [
      {
        title: "Photo mystery (consent)",
        body: "Childhood or pet photos only with explicit OK—skip if any hesitation.",
      },
      {
        title: "New-hire edition",
        body: "Clues about onboarding surprises, not private life.",
      },
      {
        title: "Emoji clue only",
        body: "Three emojis stand for a person; guess in chat.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "6–20." },
      { label: "Time", body: "10–15 minutes." },
      { label: "Materials", body: "Form or chat DMs to host." },
      {
        label: "House rules",
        body: "Facilitator screens clues. Owners may refuse reveal. Keep guesses kind.",
      },
    ],
    whyItWorks:
      "Guess That Team Member builds curiosity with a reveal payoff—similar to Guess Who trivia but team-focused. It fails with unscreened clues or forced outing. Prefer for teams that already know faces slightly.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "DM me two work-safe clues. I will screen them. You may pass on reveal later.",
      },
      {
        speaker: "Play",
        line: "Guess in chat—kind guesses only.",
      },
      {
        speaker: "Pace",
        line: "Eight rounds max.",
      },
      {
        speaker: "Close",
        line: "Thanks for the surprises. Agenda next.",
      },
    ],
    pitfalls: [
      {
        title: "Unscreened clues",
        body: "One cruel joke ends trust. Read first.",
      },
      {
        title: "Forced reveal",
        body: "Owners can decline.",
      },
    ],
    originalVariant: {
      title: "Clue → collaborator match (site original)",
      body: "After three reveals, people star one clue that connects to their work. They optionally message that person for a 10-minute follow-up later—moves curiosity off the public stage.",
    },
    adultsWork:
      "Riddle virtual warm-ups and small-group meetings. Compare Guess Who Personal Trivia and Two Truths. Not for brand-new 100-person all-hands.",
    faqs: [
      {
        q: "How do you play Guess That Team Member?",
        a: "People submit safe clues; the group guesses who matches each clue set; owners may confirm or pass.",
      },
      {
        q: "How do you keep it appropriate?",
        a: "Facilitator screens every clue and bans dating, money, and trauma topics.",
      },
      {
        q: "How long does it take?",
        a: "About 10–15 minutes for six to eight rounds.",
      },
      {
        q: "Can it be fully virtual?",
        a: "Yes—DM clues to the host and guess in chat.",
      },
      {
        q: "How is it different from Guess Who Personal Trivia?",
        a: "Same family; this framing emphasizes teammates and work-safe clues.",
      },
    ],
    sources: [
      { label: "Riddle icebreakers for virtual meetings", href: "/riddle-icebreakers-for-virtual-meetings" },
      { label: "Guess Who Personal Trivia", href: "/games/guess-who-personal-trivia" },
      { label: "Virtual ice breaker games", href: "/virtual-icebreaker-games" },
      { label: "Two Truths and a Lie", href: "/games/two-truths-and-a-lie" },
    ],
  },

  "mystery-envelope": {
    howToSteps: [
      {
        title: "Prep envelopes with clean prompts",
        body: "Prompts: act a morning routine without hands; share a small win; describe an ideal weekend in three words. Ban humiliating dares.",
      },
      {
        title: "Distribute randomly",
        body: "One envelope per person or per pair. Pass allowed—swap once with the facilitator pile.",
      },
      {
        title: "Reveal and respond",
        body: "Open, read aloud, respond in 30–45 seconds. Virtual: host DMs prompts or uses a random slide.",
      },
      {
        title: "Stop early",
        body: "Six to eight reveals for an icebreaker. Save extras.",
      },
    ],
    variations: [
      {
        title: "Pair envelopes",
        body: "Two people open one prompt together.",
      },
      {
        title: "Riddle envelopes",
        body: "Prompt is a mini-riddle; answer then share one related preference.",
      },
      {
        title: "Digital deck",
        body: "Randomizer slide instead of paper—better for remote.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "6–20." },
      { label: "Time", body: "10–15 minutes." },
      { label: "Materials", body: "Envelopes/cards or digital randomizer." },
      {
        label: "House rules",
        body: "Swap once OK. No cruel dares. School/work-safe only.",
      },
    ],
    whyItWorks:
      "Mystery Envelope adds surprise without requiring personal secrets—if the deck is clean. It fails when prompts are party-game mean. Facilitator owns the deck. Fits riddle and small-group hubs.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "Each envelope has a light prompt. You may swap once. Thirty to forty-five seconds.",
      },
      {
        speaker: "Model",
        line: "I drew “three-word weekend”—quiet, coffee, trail.",
      },
      {
        speaker: "Play",
        line: "Volunteers open first. Pass is fine.",
      },
      {
        speaker: "Close",
        line: "Enough surprises—agenda time.",
      },
    ],
    pitfalls: [
      {
        title: "Dare culture",
        body: "Rewrite any prompt that humiliates.",
      },
      {
        title: "Too many envelopes",
        body: "Eight reveals max for an opener.",
      },
    ],
    originalVariant: {
      title: "Envelope → agenda seed (site original)",
      body: "Include two “work” envelopes in the stack (name a risk; name a helper). Whoever draws them posts on a sticky that starts the real discussion. Links play to purpose.",
    },
    adultsWork:
      "Small groups, riddle virtual, and light workshops. For funny meetings, keep PG. Skip if trust is fragile.",
    faqs: [
      {
        q: "How do you play Mystery Envelope?",
        a: "People open a random clean prompt and respond briefly; swaps and passes are allowed.",
      },
      {
        q: "What prompts should I avoid?",
        a: "Anything humiliating, dating-related, or that forces trauma disclosure.",
      },
      {
        q: "Can it be virtual?",
        a: "Yes—use a random slide or DM prompts.",
      },
      {
        q: "How long does it take?",
        a: "About 10–15 minutes.",
      },
      {
        q: "How many envelopes?",
        a: "Prepare more than people, but only reveal six to eight in an icebreaker.",
      },
    ],
    sources: [
      { label: "Riddle icebreakers for virtual meetings", href: "/riddle-icebreakers-for-virtual-meetings" },
      { label: "Ice breaker games for small groups", href: "/icebreaker-games-for-small-groups" },
      { label: "Funny ice breaker games for meetings", href: "/funny-icebreaker-games-for-meetings" },
      { label: "When to skip an icebreaker", href: "/when-to-skip-an-icebreaker" },
    ],
  },

  "invention-pitch": {
    howToSteps: [
      {
        title: "Give playful constraints",
        body: "Teams of 3–4 invent a useless-but-delightful product in 4 minutes. Examples: app nobody needs; gadget for a first-world problem. Keep pitches PG.",
      },
      {
        title: "Pitch format",
        body: "30–45 seconds: name, problem, one feature, one joke. Optional soft voting with snaps—not elimination humiliation.",
      },
      {
        title: "Time-box tightly",
        body: "Two to four pitches max for an icebreaker. Longer belongs in a workshop block.",
      },
      {
        title: "Debrief optional",
        body: "What made a pitch clear? Then sit—do not turn it into a real product meeting unless planned.",
      },
    ],
    variations: [
      {
        title: "Virtual pitch",
        body: "Breakouts invent; one spokesperson unmutes; others react in chat.",
      },
      {
        title: "Headline-only pitch",
        body: "Just a product name + tagline—faster.",
      },
      {
        title: "Work-safe office inventions",
        body: "Inventions must “fix” meeting problems (too many tabs, cold coffee).",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "6–30 in small teams." },
      { label: "Time", body: "12–20 minutes." },
      { label: "Materials", body: "Timer; optional prompt cards." },
      {
        label: "House rules",
        body: "No mocking accents or identities. Soft votes only. Pass on speaking roles OK (scribe/designer).",
      },
    ],
    whyItWorks:
      "Invention Pitch creates shared laughter and quick teamwork without personal disclosure. It fails when judging gets mean or when prep time expands forever. Fits funny meeting openers. Not a daily standup.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "Teams of three to four. Invent a playful product in four minutes. Keep it kind and PG.",
      },
      {
        speaker: "Pitch",
        line: "Forty-five seconds: name, problem, one feature. Snaps for favorites—no elimination roast.",
      },
      {
        speaker: "Pace",
        line: "Three pitches max today.",
      },
      {
        speaker: "Close",
        line: "Laugh noted. Agenda next.",
      },
    ],
    pitfalls: [
      {
        title: "Mean judging",
        body: "Ban roast culture. Celebrate creativity.",
      },
      {
        title: "Scope creep",
        body: "Four minutes invent, under one minute pitch.",
      },
    ],
    originalVariant: {
      title: "Pitch → meeting fix (site original)",
      body: "After the fun pitches, spend 60 seconds inventing one serious “meeting fix” product name. Write it on a sticky as a reminder of the pain point to solve later—bridges comedy to process without a second activity.",
    },
    adultsWork:
      "Funny meetings and training creativity blocks. Keep corporate audiences on office-problem themes. See funny meetings hub.",
    faqs: [
      {
        q: "How do you run Invention Pitch as an icebreaker?",
        a: "Small teams invent a playful product quickly, pitch in under a minute, and optionally soft-vote—then return to the agenda.",
      },
      {
        q: "How long does it take?",
        a: "About 12–20 minutes.",
      },
      {
        q: "Can it be virtual?",
        a: "Yes—breakouts invent, one speaker pitches, chat reacts.",
      },
      {
        q: "What if someone hates performing?",
        a: "Offer scribe or designer roles; another teammate can speak.",
      },
      {
        q: "Is voting required?",
        a: "No. Soft snaps are optional; skip winners entirely if you prefer.",
      },
    ],
    sources: [
      { label: "Funny ice breaker games for meetings", href: "/funny-icebreaker-games-for-meetings" },
      { label: "Free fun icebreaker games", href: "/free-fun-icebreaker-games" },
      { label: "Icebreaker games for work", href: "/icebreaker-games-for-work" },
      { label: "Virtual ice breaker games", href: "/virtual-icebreaker-games" },
    ],
  },

  "news-headline-warm-up": {
    howToSteps: [
      {
        title: "Set a fiction rule",
        body: "People invent a playful headline about the team or day—not real breaking news about tragedies. Ban politics and disaster jokes.",
      },
      {
        title: "Write for 60 seconds",
        body: "One headline, max ~12 words. Pass allowed.",
      },
      {
        title: "Share selectively",
        body: "Chat paste all; read three aloud. Or breakouts share then one volunteer.",
      },
      {
        title: "Optional theme pick",
        body: "Room snaps for a “masthead” headline of the meeting—then start work.",
      },
    ],
    variations: [
      {
        title: "Sports section",
        body: "Headlines must sound like sports recaps of the project.",
      },
      {
        title: "Weather page",
        body: "Headline as weather metaphor for the team—links to Weather Check-In.",
      },
      {
        title: "Silent headline wall",
        body: "Stickies only; no reading aloud.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "5–40." },
      { label: "Time", body: "5–10 minutes." },
      { label: "Materials", body: "Chat or sticky notes." },
      {
        label: "House rules",
        body: "Fiction only. No punching down. No real crisis headlines.",
      },
    ],
    whyItWorks:
      "News Headline Warm-Up rewards brevity and wit without personal confession. It fails when people paste real tragic news or roast coworkers. Facilitator must state fiction + kindness first. Good funny-meeting opener.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "Invent a playful fictional headline about our day—not real tragedies. Pass is fine.",
      },
      {
        speaker: "Write",
        line: "Sixty seconds. About twelve words max.",
      },
      {
        speaker: "Share",
        line: "Paste in chat. I will read three.",
      },
      {
        speaker: "Close",
        line: "Our masthead today is… Thanks. Agenda.",
      },
    ],
    pitfalls: [
      {
        title: "Real news trauma",
        body: "Shut it down; restate fiction rule.",
      },
      {
        title: "Roasts",
        body: "No headlines that target a person.",
      },
    ],
    originalVariant: {
      title: "Headline → decision subhead (site original)",
      body: "After the fun headline, write one serious subhead that states today’s decision in eight words. Keep both on the slide: humor + purpose.",
    },
    adultsWork:
      "Funny virtual and hybrid meetings. Skip when the real agenda is a crisis communication—see when to skip. Pair with Chat Waterfall for quieter rooms.",
    faqs: [
      {
        q: "How do you play News Headline Warm-Up?",
        a: "People invent a short fictional headline about the team or day, share in chat or aloud, and optionally pick a masthead line.",
      },
      {
        q: "Can we use real news?",
        a: "No for this icebreaker—keep it fictional and kind.",
      },
      {
        q: "How long does it take?",
        a: "About 5–10 minutes.",
      },
      {
        q: "Is it remote-friendly?",
        a: "Yes—chat paste works well.",
      },
      {
        q: "What are example headlines?",
        a: "“Local Team Survives Monday With Extra Coffee.” “Roadmap Draft Spotted in Wild.”",
      },
    ],
    sources: [
      { label: "Funny ice breaker games for meetings", href: "/funny-icebreaker-games-for-meetings" },
      { label: "Virtual ice breaker games", href: "/virtual-icebreaker-games" },
      { label: "Chat Waterfall", href: "/games/chat-waterfall" },
      { label: "When to skip an icebreaker", href: "/when-to-skip-an-icebreaker" },
    ],
  },

  pterodactyl: {
    howToSteps: [
      {
        title: "Explain the silly rule clearly",
        body: "Classic: people must say “pterodactyl” without showing teeth (lips over teeth). Anyone who flashes teeth is out—or soft version: just laugh and continue without elimination.",
      },
      {
        title: "Prefer the soft version at work",
        body: "No elimination. Count how many clean “pterodactyls” the circle can do in 60 seconds. Keeps dignity intact.",
      },
      {
        title: "Demonstrate once",
        body: "Model the mouth shape. Allow pass—watching counts.",
      },
      {
        title: "Stop quickly",
        body: "One or two minutes of play is enough. Then sit.",
      },
    ],
    variations: [
      {
        title: "Elimination-free only",
        body: "Recommended default for meetings and mixed ages.",
      },
      {
        title: "Virtual gallery",
        body: "Everyone unmuted on mute-all except one speaker rotating—or all try on mute while cameras show faces.",
      },
      {
        title: "Word swap",
        body: "Use another hard-to-say work-safe word if “pterodactyl” is tired.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "6–20." },
      { label: "Time", body: "2–5 minutes." },
      { label: "Materials", body: "None." },
      {
        label: "House rules",
        body: "Soft version preferred. No mocking faces or accents. Pass allowed. Not for formal client calls.",
      },
    ],
    whyItWorks:
      "Pterodactyl is pure silly energy with zero disclosure. It fails when elimination shames people or when the room is too formal. Use soft scoring. Funny meetings hub material—not a trust exercise.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "We will say pterodactyl without showing teeth. Soft version—no one is out. Pass if you want.",
      },
      {
        speaker: "Model",
        line: "Watch my mouth. Pterodactyl.",
      },
      {
        speaker: "Play",
        line: "Around the circle once—or sixty seconds of attempts.",
      },
      {
        speaker: "Close",
        line: "Laugh done. Agenda time.",
      },
    ],
    pitfalls: [
      {
        title: "Harsh elimination",
        body: "Skip outs in professional rooms.",
      },
      {
        title: "Accent teasing",
        body: "Shut it down immediately.",
      },
    ],
    originalVariant: {
      title: "Pterodactyl → stretch reset (site original)",
      body: "After the word round, do one silent shoulder roll while keeping the same “no teeth” grin for five seconds. Releases face tension and marks the end of silly mode before serious talk.",
    },
    adultsWork:
      "Funny meeting openers and youth energy. Skip for executive boardrooms and crisis agendas. Prefer Chat Waterfall when cameras-off culture is strong.",
    faqs: [
      {
        q: "How do you play Pterodactyl?",
        a: "People try to say “pterodactyl” without showing teeth. Prefer a no-elimination version for work and mixed groups.",
      },
      {
        q: "Is elimination required?",
        a: "No. Soft timed rounds are better for most meetings.",
      },
      {
        q: "How long does it take?",
        a: "Two to five minutes.",
      },
      {
        q: "Can it be virtual?",
        a: "Yes with cameras optional; mute/unmute carefully so audio is clear.",
      },
      {
        q: "When should I skip it?",
        a: "Formal client meetings, low-trust rooms, or any agenda that needs gravity first.",
      },
    ],
    sources: [
      { label: "Funny ice breaker games for meetings", href: "/funny-icebreaker-games-for-meetings" },
      { label: "Free fun icebreaker games", href: "/free-fun-icebreaker-games" },
      { label: "Virtual ice breaker games", href: "/virtual-icebreaker-games" },
      { label: "When to skip an icebreaker", href: "/when-to-skip-an-icebreaker" },
    ],
  },

  "alliterative-name-game": {
    howToSteps: [
      {
        title: "Explain the pattern",
        body: "Each person says their name plus a positive adjective that starts with the same letter or sound—e.g. “Patient Priya,” “Calm Chris.” Model a plain, non-showy pair so later players do not feel pressure to perform.",
      },
      {
        title: "Offer easy exits",
        body: "Hard letters (X, Q, uncommon first letters) may use a nickname initial, a role word, or skip the adjective and say name only. Pass is always allowed. Never force rhymes or jokes about appearance.",
      },
      {
        title: "Go around once",
        body: "Under ~15: full circle. Above that, split into two circles or do name-only in the large group and adjectives in breakouts of six. Keep each turn under five seconds.",
      },
      {
        title: "Optional soft recall",
        body: "After the pass, ask two volunteers to name the person on their left—neighbors may help. Do not run a cumulative “say everyone’s pair” recital.",
      },
    ],
    variations: [
      {
        title: "Role + name (work)",
        body: "Name + team or job word with matching letter when possible; skip forced alliteration if it feels silly in a formal room.",
      },
      {
        title: "Chat list (virtual)",
        body: "Type “Adjective Name” in chat while speaking so late joiners and screen-reader users can follow.",
      },
      {
        title: "Motion pair",
        body: "Add a tiny seated gesture with the adjective. Prefer Motion Name-Game if movement is the main goal.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "6–20 per circle; split larger rooms." },
      { label: "Time", body: "5–12 minutes." },
      { label: "Materials", body: "None; optional name tags." },
      {
        label: "House rules",
        body: "Positive or neutral adjectives only. No body or accent jokes. Pass / name-only is success. Help on recall is allowed.",
      },
    ],
    whyItWorks:
      "Alliterative Name Game sticks names with a light memory hook. It fails when adjectives become a comedy roast, when hard letters shame people, or when the circle forces a long cumulative list. Use it for first meetings and student workshops—not for recurring standup.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "Say your name plus a same-letter adjective. Keep it simple. Pass or name-only is fine—especially for tricky letters.",
      },
      {
        speaker: "Model",
        line: "I am Steady Sam. Boring on purpose.",
      },
      {
        speaker: "Play",
        line: "Around once. Neighbors may whisper if someone blanks on recall later.",
      },
      {
        speaker: "Close",
        line: "Two quick neighbor recalls only. Then we start.",
      },
    ],
    pitfalls: [
      {
        title: "Roast adjectives",
        body: "Shut down teasing words immediately; reset with a neutral model.",
      },
      {
        title: "Hard-letter trap",
        body: "Pre-announce X/Q/unusual initials may skip alliteration.",
      },
      {
        title: "Growing-list demand",
        body: "Do not make the last person recite every pair.",
      },
    ],
    originalVariant: {
      title: "Adjective sticky → agenda (site original)",
      body: "After the circle, each person types only their adjective into chat or a shared doc. Facilitator reads five adjectives as the room’s “arrival weather,” then starts the agenda—no second name recital. Names still got said once; the harvest is mood, not memory exam.",
    },
    adultsWork:
      "Strong for students, workshops, and name-game hubs. For work kickoffs, prefer role-first or The Name Game if alliteration feels childish. Teens: keep school-safe adjectives. Recurring teams: skip.",
    faqs: [
      {
        q: "How do you play the Alliterative Name Game?",
        a: "Each person says their name with a positive same-letter adjective, or passes / says name only. One short circle beats a long memory test.",
      },
      {
        q: "What if someone’s name starts with a hard letter?",
        a: "Allow nickname initials, a role word, or name-only. Never force a joke.",
      },
      {
        q: "How long does it take?",
        a: "About 5–12 minutes depending on group size.",
      },
      {
        q: "Is it good for work meetings?",
        a: "Yes for first workshops if you keep adjectives professional; otherwise use name + role.",
      },
      {
        q: "How is it different from The Name Game?",
        a: "Alliteration adds a letter hook. The Name Game may use any cue and often focuses on recall structure.",
      },
    ],
    sources: [
      { label: "Name game icebreakers", href: "/name-game-icebreakers" },
      { label: "The Name Game", href: "/games/the-name-game" },
      { label: "Motion Name-Game", href: "/games/motion-name-game" },
      { label: "Ice breaker games for teens", href: "/icebreaker-games-for-teens" },
      { label: "Ice breaker games for meetings", href: "/icebreaker-games-for-meetings" },
    ],
  },

  "blind-name-tag": {
    howToSteps: [
      {
        title: "Prep a clean name list",
        body: "Use work-safe or school-safe names only: colleagues present (with consent), fictional characters that are mild, or animals/objects. Ban celebrities known for scandal, political figures as punchlines, and anything body- or identity-mocking. Facilitator screens every sticker.",
      },
      {
        title: "Place tags without spoilers",
        body: "Classic: sticky on forehead or upper back so the wearer cannot see it. Offer forehead-free placement for anyone with sensory or hair concerns. Virtual: facilitator DMs a name; player keeps it off screen and asks the room.",
      },
      {
        title: "Yes/no questions only",
        body: "Wearers ask the group yes/no questions to guess. Cap at 5–8 questions or two minutes each. Group answers honestly but does not volunteer spoilers. Pass or swap once is allowed.",
      },
      {
        title: "Reveal and reset",
        body: "Guess or time’s up → remove tag, thank the room, sit. Sample 4–6 people in large rooms instead of forcing everyone.",
      },
    ],
    variations: [
      {
        title: "Colleague edition (consent)",
        body: "Only names of people in the room who opted in. Guessers learn faces, not parody celebrities.",
      },
      {
        title: "Object / animal tags",
        body: "Lower social risk for mixed-age or low-trust rooms.",
      },
      {
        title: "Chat poll (virtual)",
        body: "Room answers yes/no in chat; one speaker asks aloud.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "6–20 active; sample in larger groups." },
      { label: "Time", body: "10–15 minutes." },
      { label: "Materials", body: "Sticky notes or safe tape; virtual: DM list." },
      {
        label: "House rules",
        body: "Screened names only. No mean reveals. Swap once. Pass anytime. No photos of people with tags without consent.",
      },
    ],
    whyItWorks:
      "Blind Name Tag is a playful guessing mixer when trust is already medium-high. It fails when tags humiliate, when strangers are forced to perform, or when sticky placement ignores sensory needs. Prefer The Name Game or Chat Waterfall for brand-new or formal rooms.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "You get a screened name on a sticky. Ask yes/no questions. Swap once or pass anytime.",
      },
      {
        speaker: "Safety",
        line: "I screened every name. Nothing mean. Forehead optional—back is fine.",
      },
      {
        speaker: "Play",
        line: "Two minutes each, or five questions. Then reveal and sit.",
      },
      {
        speaker: "Close",
        line: "Stickies off. Agenda time.",
      },
    ],
    pitfalls: [
      {
        title: "Humiliating names",
        body: "Facilitator owns the list. If a bad name slips through, remove it and apologize.",
      },
      {
        title: "Forced forehead",
        body: "Offer back placement or virtual DM from the start.",
      },
      {
        title: "Whole-room marathon",
        body: "Sample volunteers in large groups.",
      },
    ],
    originalVariant: {
      title: "Name-tag → one fact harvest (site original)",
      body: "After three reveals, each guesser shares one work-safe fact they used (e.g. “asks about projects”). Facilitator lists three listening habits on a slide—no more guessing. Turns the party game into a short observation debrief.",
    },
    adultsWork:
      "Playful adult groups and name-game hubs. Skip for first client meetings, grief contexts, or low-trust onboarding. For teens, use animal/object tags only unless the class already knows each other well.",
    faqs: [
      {
        q: "How do you play Blind Name Tag?",
        a: "People wear or hold a screened name they cannot see, ask yes/no questions to guess, then reveal. Pass and swap are allowed.",
      },
      {
        q: "Is Blind Name Tag appropriate for work?",
        a: "Only with screened professional names and medium trust. Otherwise choose a simpler name game.",
      },
      {
        q: "Can it be virtual?",
        a: "Yes—DM names and answer yes/no in chat.",
      },
      {
        q: "How long does it take?",
        a: "About 10–15 minutes if you sample players.",
      },
      {
        q: "What names should I avoid?",
        a: "Anything embarrassing, political as a punchline, body-related, or without consent if using real people.",
      },
    ],
    sources: [
      { label: "Name game icebreakers", href: "/name-game-icebreakers" },
      { label: "The Name Game", href: "/games/the-name-game" },
      { label: "Guess That Team Member", href: "/games/guess-that-team-member" },
      { label: "When to skip an icebreaker", href: "/when-to-skip-an-icebreaker" },
      { label: "Ice breaker games for meetings", href: "/icebreaker-games-for-meetings" },
    ],
  },

  "10-things-in-common": {
    howToSteps: [
      {
        title: "Pair or trio up",
        body: "Groups of 2–3 work best. In large rooms, assign randomly so friends do not cluster. Virtual: breakouts of three.",
      },
      {
        title: "Ban obvious answers",
        body: "Disallow “we are in this meeting,” “we are human,” or “we have jobs.” Push toward hobbies, routines, foods, tools, or learning goals—not trauma, politics, or salary.",
      },
      {
        title: "List toward ten",
        body: "Six to ten shared things is the target. Five is fine on a tight clock. One person scribes; others talk. Time-box 6–8 minutes.",
      },
      {
        title: "Harvest one surprise",
        body: "Each group shares one unexpected commonality with the room (20 seconds). Thank them and start the agenda—do not hear every list.",
      },
    ],
    variations: [
      {
        title: "Five things sprint",
        body: "Six minutes total for short meetings.",
      },
      {
        title: "Theme rounds",
        body: "Hobbies only, then food, then work habits—three mini lists instead of one long one.",
      },
      {
        title: "Unique + shared hybrid",
        body: "Also note one thing each person alone has. See Unique and Shared.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "6–30; pairs or trios." },
      { label: "Time", body: "10–15 minutes (or 6 with a five-item sprint)." },
      { label: "Materials", body: "Paper or shared doc optional." },
      {
        label: "House rules",
        body: "No digging for secrets. Pass on any prompt. Share-outs are optional. Keep lists work- or school-safe.",
      },
    ],
    whyItWorks:
      "10 Things in Common turns discovery into a collaborative list—Human Bingo’s quieter cousin. It fails when groups stall on surface answers, when facilitators demand ten no matter what, or when share-outs become long stories. Great after a big mixer; less ideal as the first second of a cold room.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "In pairs or threes, list things you share. Skip the obvious. Aim for about ten—five is fine if time is short.",
      },
      {
        speaker: "Ban",
        line: "Not “we are in this room.” Hobbies, routines, snacks, tools are fair game.",
      },
      {
        speaker: "Time",
        line: "Seven minutes. One scribe. Then one surprise for the room.",
      },
      {
        speaker: "Close",
        line: "Three groups share one line. Agenda starts.",
      },
    ],
    pitfalls: [
      {
        title: "Surface stall",
        body: "Offer category prompts after two minutes if lists are empty.",
      },
      {
        title: "Forced ten",
        body: "Celebrate five solid items over ten weak ones.",
      },
      {
        title: "Oversharing",
        body: "Redirect medical, financial, or gossip topics immediately.",
      },
    ],
    originalVariant: {
      title: "Common → next-step sticky (site original)",
      body: "After share-outs, each pair writes one shared interest that could help the project (e.g. “both like async docs”). Stickies go on a “working preferences” board. Names stay private if preferred—keeps the mixer tied to how the team will collaborate.",
    },
    adultsWork:
      "Best-icebreakers and games-like-bingo hubs. Strong for work kickoffs and adult workshops. For teens, keep prompts school-safe. Prefer Common Ground when you want whole-room categories instead of private lists.",
    faqs: [
      {
        q: "How do you play 10 Things in Common?",
        a: "Pairs or trios list shared interests beyond the obvious, then share one surprising find with the room.",
      },
      {
        q: "Do you need exactly ten?",
        a: "No. Five to ten quality items beat a forced full list.",
      },
      {
        q: "How long does it take?",
        a: "About 10–15 minutes, or six with a five-item sprint.",
      },
      {
        q: "Is it like Human Bingo?",
        a: "Similar discovery goal, but collaborative listing instead of a bingo grid.",
      },
      {
        q: "Can it be virtual?",
        a: "Yes—use breakout rooms and a shared doc or chat list.",
      },
    ],
    sources: [
      { label: "Best icebreaker games", href: "/best-icebreaker-games" },
      { label: "Games like Human Bingo", href: "/games-like-human-bingo" },
      { label: "Human Bingo", href: "/games/human-bingo" },
      { label: "Common Ground", href: "/games/common-ground" },
      { label: "Ice breaker games for work", href: "/icebreaker-games-for-work" },
    ],
  },

  "one-word-at-a-time": {
    howToSteps: [
      {
        title: "Set a story goal",
        body: "The group builds one sentence or short story by adding exactly one word each turn. Pick a light theme: “our project kickoff,” “a rainy commute,” “a lunch order gone wrong.” Ban romance, violence, and coworker-roast plots.",
      },
      {
        title: "Establish turn order",
        body: "Circle order in person; gallery or named list online. Allow pass—the next person continues. No correcting others’ grammar mid-flow unless someone asks for help.",
      },
      {
        title: "Keep rounds short",
        body: "One sentence (8–20 words) or two minutes max. A second round with a new theme is optional. Stop while energy is high.",
      },
      {
        title: "Optional read-back",
        body: "Facilitator or a volunteer reads the full line once. Laugh, thank, move on—no critique of “bad” words.",
      },
    ],
    variations: [
      {
        title: "One sentence only",
        body: "Stop at the first period for a 3-minute opener.",
      },
      {
        title: "Chat cascade (virtual)",
        body: "People type one word in chat in order; facilitator pastes the line aloud.",
      },
      {
        title: "Pair stories",
        body: "Two people build a sentence, then share with the room—better for shy large groups.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "5–16 active; sample or pair in larger rooms." },
      { label: "Time", body: "5–10 minutes." },
      { label: "Materials", body: "None; optional shared doc." },
      {
        label: "House rules",
        body: "One word per turn. Pass allowed. Work-safe themes. No mocking accents or word choice. Soft end—no winners.",
      },
    ],
    whyItWorks:
      "One Word at a Time is collaborative silliness with almost no disclosure. It fails when themes invite cruelty, when perfectionists freeze the circle, or when rounds drag. Use it as a funny warm-up on the best-games list—not as a trust or feedback tool. Prefer One Word Check-In when you need real arrival status.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "We will build one sentence—one word each. Pass if you want. Keep it work-safe.",
      },
      {
        speaker: "Theme",
        line: "Theme: a rainy commute. I start with Once.",
      },
      {
        speaker: "Play",
        line: "Around once until we hit a period—or two minutes.",
      },
      {
        speaker: "Close",
        line: "I will read it back. Then agenda.",
      },
    ],
    pitfalls: [
      {
        title: "Roast plots",
        body: "Redirect immediately if someone targets a coworker.",
      },
      {
        title: "Grammar police",
        body: "Block mid-turn corrections; flow matters more than polish.",
      },
      {
        title: "Confusion with One Word Check-In",
        body: "This is storytelling; check-in is one status word about yourself.",
      },
    ],
    originalVariant: {
      title: "Word story → verb harvest (site original)",
      body: "After the silly sentence, each person adds one verb they want more of today (focus, ask, rest, ship). Facilitator reads five verbs as the room’s intention list—bridges play into work without a second icebreaker.",
    },
    adultsWork:
      "Best-icebreakers curated list and funny meeting openers. Great for creative workshops. Skip when the agenda is crisis or performance review. For teens, keep themes school-safe. Differentiate clearly from One Word Check-In on the same site.",
    faqs: [
      {
        q: "How do you play One Word at a Time?",
        a: "Players take turns adding one word to build a shared sentence or short story, then the facilitator reads it back.",
      },
      {
        q: "Is it the same as One Word Check-In?",
        a: "No. Check-in is one personal status word. This game is collaborative storytelling.",
      },
      {
        q: "How long does it take?",
        a: "About 5–10 minutes.",
      },
      {
        q: "Can it be virtual?",
        a: "Yes—use a speaking order or a chat cascade.",
      },
      {
        q: "When should I skip it?",
        a: "Formal client calls, low-trust rooms that dislike silliness, or agendas that need gravity first.",
      },
    ],
    sources: [
      { label: "Best icebreaker games", href: "/best-icebreaker-games" },
      { label: "One Word Check-In", href: "/games/one-word-check-in" },
      { label: "Funny ice breaker games for meetings", href: "/funny-icebreaker-games-for-meetings" },
      { label: "Six-Word Memoirs", href: "/games/six-word-memoirs" },
      { label: "When to skip an icebreaker", href: "/when-to-skip-an-icebreaker" },
    ],
  },

  "category-mixer": {
    howToSteps: [
      {
        title: "Pick inclusive categories",
        body: "Call 4–6 rounds: morning person / night owl, tea / coffee, first conference / returning, remote today / on-site. Ban body, income, politics, and dating categories. Announce seated / edge-of-room options for anyone who cannot move fast.",
      },
      {
        title: "Move, greet, sit",
        body: "People walk to matching zones, greet two strangers in 20 seconds, then listen for the next call. Do not require full room share every round.",
      },
      {
        title: "Sample one voice",
        body: "Optional: one volunteer from a zone gives a one-line reason. Cap at two samples per round so the mixer stays kinetic.",
      },
      {
        title: "Land the agenda",
        body: "After 4–6 rounds, ask everyone to sit with someone they just met if the next activity needs pairs—or return to assigned seats.",
      },
    ],
    variations: [
      {
        title: "Workplace tracks",
        body: "Categories like “product / sales / ops” or “new hire under 90 days.”",
      },
      {
        title: "Virtual rooms",
        body: "Rename breakout rooms by category; 90-second visits, then return.",
      },
      {
        title: "Silent point",
        body: "Point to walls instead of walking—lower mobility load.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "12–60; works best in open floors." },
      { label: "Time", body: "8–12 minutes." },
      { label: "Materials", body: "None; optional wall signs." },
      {
        label: "House rules",
        body: "Inclusive categories only. Seated option always. No racing or shoving. Pass = stay put.",
      },
    ],
    whyItWorks:
      "Category Mixer creates Human Bingo style discovery through clusters with almost no prep. It fails when categories shame people or when the room is too crowded to move safely. Prefer Chat Waterfall for cameras-off virtual teams.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "I will call categories. Move to your zone, greet two people, then wait. Seated option is fine.",
      },
      {
        speaker: "Round",
        line: "Coffee people this side, tea that side. Twenty seconds of hellos.",
      },
      {
        speaker: "Sample",
        line: "One volunteer from coffee—one sentence why. Thanks.",
      },
      {
        speaker: "Close",
        line: "Last round done. Sit for the agenda.",
      },
    ],
    pitfalls: [
      {
        title: "Body categories",
        body: "Never sort by height, weight, or clothing cost.",
      },
      {
        title: "Stampede",
        body: "Call “walk, do not run” and leave aisles clear.",
      },
    ],
    originalVariant: {
      title: "Category → pairing sticky (site original)",
      body: "On the final round, people stay in zones and write one work-safe preference on a sticky (async docs / live calls). Facilitator clusters stickies on a wall as a living “how we work” map—mixer becomes operating norms without a second exercise.",
    },
    adultsWork:
      "Games-like-bingo and large-group blogs. Strong for conferences. Soften for church visitors with gentle categories. Teens: school-safe only.",
    faqs: [
      {
        q: "How do you play Category Mixer?",
        a: "The facilitator calls inclusive categories; people move to zones, greet strangers briefly, then sit after several rounds.",
      },
      {
        q: "How is it different from Human Bingo?",
        a: "No cards or signatures—just cluster movement and short hellos.",
      },
      {
        q: "How long does it take?",
        a: "About 8–12 minutes.",
      },
      {
        q: "Can it be virtual?",
        a: "Yes with named breakout rooms, though Chat Waterfall is often smoother.",
      },
      {
        q: "What if someone cannot move?",
        a: "Offer seated pointing or let them stay put and greet neighbors.",
      },
    ],
    sources: [
      { label: "Games like Human Bingo", href: "/games-like-human-bingo" },
      { label: "Human Bingo", href: "/games/human-bingo" },
      { label: "Ice breaker games for adults large groups", href: "/blog/ice-breaker-games-for-adults-large-groups" },
      { label: "Icebreaker Bingo", href: "/games/icebreaker-bingo" },
    ],
  },

  "icebreaker-bingo": {
    howToSteps: [
      {
        title: "Build themed cards",
        body: "Customize squares for work, school, or conference tracks. Prefer opt-in hobbies over identity traps. Include “free space: introduce yourself” and at least two easy squares so newcomers can win dignity, not only speed.",
      },
      {
        title: "Explain soft wins",
        body: "First line wins a cheer; blackout is optional. Signatures mean a real question was asked—no shouting across the room. Pass on any square.",
      },
      {
        title: "Mingle on a timer",
        body: "10–15 minutes of circulating. Music optional. Facilitator models one question aloud.",
      },
      {
        title: "Harvest, do not crown only",
        body: "Celebrate first line and most signatures lightly. Ask two people to share one interesting human they met—not their full card.",
      },
    ],
    variations: [
      {
        title: "Four corners only",
        body: "Shorter slot: complete any four edge squares.",
      },
      {
        title: "Industry / track cards",
        body: "Different decks per conference track.",
      },
      {
        title: "Virtual chat bingo",
        body: "Squares answered in chat with names tagged—cameras optional.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "10–60." },
      { label: "Time", body: "15–25 minutes." },
      { label: "Materials", body: "Printed or digital themed bingo cards." },
      {
        label: "House rules",
        body: "Inclusive prompts. Soft wins. No body or salary squares. Pass anytime.",
      },
    ],
    whyItWorks:
      "Icebreaker Bingo is Human Bingo’s twin with easier theme customization. It fails when cards invade privacy or when only the fastest extroverts are celebrated. Differentiate on-page from classic Human Bingo by stressing custom decks.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "These cards match today’s theme. Ask real questions, collect signatures. First line gets a cheer—pass anytime.",
      },
      {
        speaker: "Model",
        line: "I need someone who has shipped a project this quarter—tell me one sentence.",
      },
      {
        speaker: "Play",
        line: "Fifteen minutes. Soft win on a line.",
      },
      {
        speaker: "Close",
        line: "Two shares of someone interesting you met. Cards down. Agenda.",
      },
    ],
    pitfalls: [
      {
        title: "Identity traps",
        body: "Remove squares about religion, orientation, or medical status unless the event explicitly opted in.",
      },
      {
        title: "Duplicate of Human Bingo page",
        body: "Lead with custom themes so this URL is not a thin twin.",
      },
    ],
    originalVariant: {
      title: "Bingo → skill board (site original)",
      body: "After mingling, each person stars one square that matches a skill they can offer peers this week. Stickies go onto a “ask me about…” board. Networking becomes a living help map, not only a race.",
    },
    adultsWork:
      "Workshops, conferences, student events. Link both to Human Bingo and games-like-bingo. For church, screen squares for visitor safety.",
    faqs: [
      {
        q: "How do you play Icebreaker Bingo?",
        a: "People mingle with themed bingo cards, ask questions, collect signatures, and celebrate soft line wins.",
      },
      {
        q: "How is it different from Human Bingo?",
        a: "Same mechanic; Icebreaker Bingo emphasizes custom theme decks for events, industries, or schools.",
      },
      {
        q: "How long does it take?",
        a: "About 15–25 minutes.",
      },
      {
        q: "Do you need printed cards?",
        a: "Print helps in person; digital cards or chat bingo work virtually.",
      },
      {
        q: "What prompts should I avoid?",
        a: "Body, salary, trauma, and non-consensual identity questions.",
      },
    ],
    sources: [
      { label: "Games like Human Bingo", href: "/games-like-human-bingo" },
      { label: "Human Bingo", href: "/games/human-bingo" },
      { label: "Category Mixer", href: "/games/category-mixer" },
      { label: "Ice breaker games for work", href: "/icebreaker-games-for-work" },
    ],
  },

  "reception-line": {
    howToSteps: [
      {
        title: "Form two facing lines",
        body: "Guests stand opposite a partner. Leave wheelchair and cane space at the ends. Virtual: use timed pair breakouts instead of literal lines.",
      },
      {
        title: "Timed intro",
        body: "45–60 seconds: name, role or hometown, one light prompt. Timer is visible. Both people speak.",
      },
      {
        title: "Shift one line",
        body: "One line steps sideways so everyone meets someone new. Repeat 4–6 shifts. End early if energy dips.",
      },
      {
        title: "Seat for the program",
        body: "Thank the room; do not force a full-room report-out of every partner.",
      },
    ],
    variations: [
      {
        title: "Prompt cards",
        body: "Name + role + one hobby each round.",
      },
      {
        title: "Welcome desk hybrid",
        body: "Half the line is staff hosts who stay put while guests rotate.",
      },
      {
        title: "Seated pairs",
        body: "Rows of chairs face each other for accessibility.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "12–40." },
      { label: "Time", body: "10–15 minutes." },
      { label: "Materials", body: "None; optional timer and prompt cards." },
      {
        label: "House rules",
        body: "Equal airtime. Pass on personal prompts. Accessible spacing. No forced hugging.",
      },
    ],
    whyItWorks:
      "Reception Line guarantees introductions when free-form mingling leaves wallflowers stranded. It fails when timers are ignored, when lines crush mobility aids, or when prompts dig too deep for visitors. Ideal for formal welcomes—not crisis meetings.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "Two lines, face a partner. Sixty seconds—name, role, one hobby. Both speak.",
      },
      {
        speaker: "Shift",
        line: "This line steps one person to your right. New partner. Go.",
      },
      {
        speaker: "Close",
        line: "Last shift done. Please sit for the program.",
      },
    ],
    pitfalls: [
      {
        title: "One-sided talking",
        body: "Ring a halfway bell so partners swap who speaks.",
      },
      {
        title: "Blocked aisles",
        body: "Keep ends open for mobility devices.",
      },
    ],
    originalVariant: {
      title: "Reception → connector card (site original)",
      body: "After three shifts, each person writes one name they want to continue with and one topic. Cards go to a host basket; hosts make two warm email intros after the event—extends the line into real follow-up without public pressure.",
    },
    adultsWork:
      "Games-like-bingo and adult mixer contexts. Strong for church welcome nights if prompts stay light. Compare Speed Networking for conference-style rotations.",
    faqs: [
      {
        q: "How do you play Reception Line?",
        a: "Two facing lines introduce on a timer; one line shifts so everyone meets new partners, then the group sits.",
      },
      {
        q: "How long does it take?",
        a: "About 10–15 minutes.",
      },
      {
        q: "Is it good for formal events?",
        a: "Yes—it structures hellos when open mingling feels awkward.",
      },
      {
        q: "What if someone cannot stand?",
        a: "Use seated facing rows or skip movement and rotate conversation partners in place.",
      },
      {
        q: "How is it different from Speed Networking?",
        a: "Reception Line is a simple shift-and-greet; Speed Networking often uses more prompts and professional goals.",
      },
    ],
    sources: [
      { label: "Games like Human Bingo", href: "/games-like-human-bingo" },
      { label: "Speed Networking", href: "/games/speed-networking" },
      { label: "Ice breaker games for adults", href: "/blog/ice-breaker-games-for-adults" },
      { label: "Icebreaker Bingo", href: "/games/icebreaker-bingo" },
    ],
  },

  "sole-mate": {
    howToSteps: [
      {
        title: "Frame as optional and kind",
        body: "Ask people to find someone with a similar shoe color, style, or story—shoes stay on. Offer non-clothing prompts immediately: similar commute, favorite snack, same favorite season. Anyone may sit out without explaining.",
      },
      {
        title: "Pair and share",
        body: "Pairs take 60 seconds on why they matched. No commenting on cost, brand status, or foot size.",
      },
      {
        title: "Remix once",
        body: "Second prompt (favorite walk or playlist for commuting). New pairs. Keep total under 12 minutes.",
      },
      {
        title: "Close light",
        body: "Two volunteers share a fun match reason. Sit.",
      },
    ],
    variations: [
      {
        title: "Snack mate",
        body: "Skip shoes entirely—match on favorite snack.",
      },
      {
        title: "Virtual background mate",
        body: "Match on similar virtual backgrounds or mug colors.",
      },
      {
        title: "Sock stories",
        body: "Only if the group already trusts each other; otherwise skip clothing focus.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "8–30." },
      { label: "Time", body: "8–12 minutes." },
      { label: "Materials", body: "None; shoes stay on." },
      {
        label: "House rules",
        body: "No shoe removal. No status comments. Alternate non-clothing prompts. Pass anytime.",
      },
    ],
    whyItWorks:
      "Sole Mate is a visual find-someone-who mixer without cards. It fails when clothing becomes class signaling or when people feel inspected. Always lead with an opt-out and a non-clothing alternate.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "Find a sole mate—similar shoe color or style. Shoes stay on. Or match on commute style instead. Pass is fine.",
      },
      {
        speaker: "Share",
        line: "Sixty seconds on why you matched. No brand talk.",
      },
      {
        speaker: "Remix",
        line: "New prompt: favorite snack. New partner.",
      },
      {
        speaker: "Close",
        line: "Two fun shares. Then we sit.",
      },
    ],
    pitfalls: [
      {
        title: "Class signaling",
        body: "Shut down comments about expensive shoes.",
      },
      {
        title: "Forced shoe focus",
        body: "Offer snack/commute matches from the first sentence.",
      },
    ],
    originalVariant: {
      title: "Sole → path sticky (site original)",
      body: "After pairs form, each duo writes one place they both like to walk or think (park, kitchen, transit). Stickies become a “thinking places” map—keeps the metaphor without dwelling on footwear.",
    },
    adultsWork:
      "Playful adult and bingo-like hubs. Soft for church visitors via snack-mate variant. Skip when attire anxiety is high (interviews, formal galas).",
    faqs: [
      {
        q: "How do you play Sole Mate?",
        a: "People find someone with a similar shoe style or an alternate prompt, share briefly, remix once, then sit.",
      },
      {
        q: "Do people take shoes off?",
        a: "No. Shoes stay on.",
      },
      {
        q: "What if clothing focus feels awkward?",
        a: "Use commute, snack, or season matches instead.",
      },
      {
        q: "How long does it take?",
        a: "About 8–12 minutes.",
      },
      {
        q: "Can it be virtual?",
        a: "Yes—match on mugs, backgrounds, or snacks visible on camera (camera optional with chat descriptions).",
      },
    ],
    sources: [
      { label: "Games like Human Bingo", href: "/games-like-human-bingo" },
      { label: "Category Mixer", href: "/games/category-mixer" },
      { label: "Take a Picture of Your Shoes", href: "/games/take-a-picture-of-your-shoes" },
      { label: "When to skip an icebreaker", href: "/when-to-skip-an-icebreaker" },
    ],
  },

  "marshmallow-challenge": {
    howToSteps: [
      {
        title: "Brief the build",
        body: "Teams of 3–5 get identical materials: dry spaghetti, tape, string, one marshmallow. Goal: tallest free-standing tower with the marshmallow on top when time ends. Celebrate process, not only height.",
      },
      {
        title: "Allergy and diet note",
        body: "Offer a paper cube or foam stand-in for anyone avoiding marshmallows (gelatin, allergies). Do not force tasting.",
      },
      {
        title: "Time-box build",
        body: "12–18 minutes. Facilitator gives a five-minute and one-minute warning. No stealing materials.",
      },
      {
        title: "Measure and debrief",
        body: "Measure standing towers only. Ask: What did you prototype early? Who held which role? What assumption failed? Keep debrief under five minutes.",
      },
    ],
    variations: [
      {
        title: "Twelve-minute sprint",
        body: "Sharper time pressure for training days.",
      },
      {
        title: "Remote kit",
        body: "Household items only—one marshmallow equivalent each; compare photos.",
      },
      {
        title: "No race scoring",
        body: "Score “still standing after ten seconds” as a shared win for mixed-ability rooms.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "8–40 in teams of 3–5." },
      { label: "Time", body: "15–20 minutes including debrief." },
      { label: "Materials", body: "Spaghetti, tape, string, marshmallow or allergen-safe stand-in per team." },
      {
        label: "House rules",
        body: "Allergen-safe option. No mocking collapses. Seated builders welcome. Debrief over crowning.",
      },
    ],
    whyItWorks:
      "Marshmallow Challenge is a problem-solving substitute for knot-style icebreakers—collaboration under constraint. It fails when height shaming dominates or when food allergies are ignored. Use it for kickoffs and training, not as a first-minute stranger mixer without a debrief plan.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "Build the tallest free-standing tower. Marshmallow on top. Paper cube stand-ins are fine for allergies.",
      },
      {
        speaker: "Time",
        line: "Eighteen minutes. Five-minute warning coming.",
      },
      {
        speaker: "Measure",
        line: "Hands off. We measure standing towers only.",
      },
      {
        speaker: "Debrief",
        line: "What did you try early? What assumption broke? Then we start the real agenda.",
      },
    ],
    pitfalls: [
      {
        title: "Allergy miss",
        body: "Put stand-ins on the table before teams start.",
      },
      {
        title: "Winner-only energy",
        body: "Praise prototyping and roles on every team.",
      },
    ],
    originalVariant: {
      title: "Tower → role sticky (site original)",
      body: "During debrief, each team writes one role they lacked (timer, tester, materials lead) on a sticky. Stickies become a “roles we need next sprint” board—turns the snack craft into a staffing insight.",
    },
    adultsWork:
      "Games-like-the-human-knot and work kickoffs. Cross-functional teams love the debrief. Soft physical load vs knot games. Not ideal for formal worship openings.",
    faqs: [
      {
        q: "How do you play the Marshmallow Challenge?",
        a: "Small teams build the tallest free-standing spaghetti tower with a marshmallow on top within a time limit, then debrief how they worked.",
      },
      {
        q: "What if someone cannot eat marshmallows?",
        a: "Use a paper or foam stand-in. The symbol matters, not eating it.",
      },
      {
        q: "How long does it take?",
        a: "About 15–20 minutes including a short debrief.",
      },
      {
        q: "Why is it like the Human Knot?",
        a: "Both teach teamwork under constraint; this one avoids hand-holding and tangled contact.",
      },
      {
        q: "Do we need a winner?",
        a: "Height is optional flavor—process debrief is the point.",
      },
    ],
    sources: [
      { label: "Games like the Human Knot", href: "/games-like-the-human-knot" },
      { label: "Human Knot", href: "/games/human-knot" },
      { label: "Line-Up", href: "/games/line-up" },
      { label: "Ice breaker games for work", href: "/icebreaker-games-for-work" },
    ],
  },

  "paper-bag-pickup": {
    howToSteps: [
      {
        title: "Clear the space",
        body: "Scatter paper bags or soft objects in an open area free of trip hazards. Mark out-of-bounds near chairs and bags people brought.",
      },
      {
        title: "Explain the soft rule",
        body: "Teams collect bags under a constraint—e.g. only elbows, pairs linked loosely by a scarf, or one hand behind back. Contact is optional; offer a seated “sort and stack” lane for anyone who opts out of racing.",
      },
      {
        title: "Short rounds",
        body: "60–90 second rounds. Count, reset, change the rule once. No tackling, no diving.",
      },
      {
        title: "Debrief movement",
        body: "Ask what made coordination hard. Transition to a calmer activity or the agenda.",
      },
    ],
    variations: [
      {
        title: "No race",
        body: "Cooperative clear-the-floor timed gently for mixed ages.",
      },
      {
        title: "Soft balls indoors",
        body: "Replace bags when paper is scarce.",
      },
      {
        title: "Virtual analog",
        body: "Household scavenger photo checklist instead of running—see Scavenger Hunt.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "8–24." },
      { label: "Time", body: "8–12 minutes." },
      { label: "Materials", body: "Paper bags or soft objects." },
      {
        label: "House rules",
        body: "No diving. Optional contact. Seated lane available. Stop at first unsafe play.",
      },
    ],
    whyItWorks:
      "Paper Bag Pickup gives light physical teamwork with softer contact than knot games. It fails when racing overrides safety or when mobility differences are ignored. Prefer Line-Up or Telephone Charades when the room cannot move freely.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "Bags on the floor. Collect with elbows only. Walk, do not dive. Seated sorting lane is over here.",
      },
      {
        speaker: "Round",
        line: "Ninety seconds. Go.",
      },
      {
        speaker: "Reset",
        line: "New rule: pairs stay loosely linked. Ready.",
      },
      {
        speaker: "Close",
        line: "What made teamwork hard? Sit. Agenda time.",
      },
    ],
    pitfalls: [
      {
        title: "Roughhousing",
        body: "Pause and switch to cooperative scoring.",
      },
      {
        title: "Exclusion",
        body: "Announce the seated lane before round one.",
      },
    ],
    originalVariant: {
      title: "Pickup → constraint sticky (site original)",
      body: "After two rounds, each team writes one constraint that helped (timer, roles, fewer bags). Stickies become “constraints that clarify” for the project kickoff—physical play feeds planning language.",
    },
    adultsWork:
      "Youth rooms and knot-alternative hubs. Soften for adult workplaces or skip. Church youth: supervise carefully. Not for formal sanctuary openings.",
    faqs: [
      {
        q: "How do you play Paper Bag Pickup?",
        a: "Teams collect scattered bags under a movement rule for short rounds, then debrief coordination.",
      },
      {
        q: "Is contact required?",
        a: "No. Offer linked-pair or seated options.",
      },
      {
        q: "How long does it take?",
        a: "About 8–12 minutes.",
      },
      {
        q: "How is it like the Human Knot?",
        a: "Teamwork under a physical constraint without hand-holding tangles.",
      },
      {
        q: "Can adults play at work?",
        a: "Only in casual kickoffs with clear safety rules; many teams prefer Line-Up instead.",
      },
    ],
    sources: [
      { label: "Games like the Human Knot", href: "/games-like-the-human-knot" },
      { label: "Marshmallow Challenge", href: "/games/marshmallow-challenge" },
      { label: "Line-Up", href: "/games/line-up" },
      { label: "Ice breaker games for youth group", href: "/icebreaker-games-for-youth-group" },
    ],
  },

  "story-swap": {
    howToSteps: [
      {
        title: "Choose a light prompt",
        body: "Examples: small win this month, funny travel mishap, favorite local food. Week-one visitors: keep it hobby-level. Ban trauma, politics, and relationship conflict prompts.",
      },
      {
        title: "Pair and time",
        body: "Pairs; each speaks 60–90 seconds while the partner only listens. Timer visible. Virtual: breakouts of two.",
      },
      {
        title: "Introduce with one line",
        body: "Partners introduce each other to the circle with one highlight sentence—not a full retell. Pass allowed; self-intro is fine.",
      },
      {
        title: "Return to agenda",
        body: "Thank pairs; move into discussion, study, or work without forcing a second round.",
      },
    ],
    variations: [
      {
        title: "Hybrid pairs",
        body: "In-room pairs plus one Zoom breakout of two.",
      },
      {
        title: "Sticky only",
        body: "Write the highlight; facilitator reads three anonymously.",
      },
      {
        title: "Triple rotate",
        body: "Two short swaps for groups that already know each other.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "6–12 ideal; sample pairs above that." },
      { label: "Time", body: "10–15 minutes." },
      { label: "Materials", body: "Timer." },
      {
        label: "House rules",
        body: "Light prompts. Listening without fixing. Pass anytime. No recording without consent.",
      },
    ],
    whyItWorks:
      "Story Swap builds listening before deeper discussion—useful in church small groups and circles that already have some trust. It fails when prompts dig too deep on visit one or when partners rewrite someone’s story. Prefer One Word Check-In for brand-new cold rooms.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "Pair up. Prompt: a small win this month. Ninety seconds each. Partners only listen.",
      },
      {
        speaker: "Swap",
        line: "Switch speakers. Same prompt.",
      },
      {
        speaker: "Introduce",
        line: "Introduce your partner with one highlight sentence—or pass.",
      },
      {
        speaker: "Close",
        line: "Thanks. We move into the main discussion.",
      },
    ],
    pitfalls: [
      {
        title: "Deep-dive too soon",
        body: "Keep week-one prompts shallow.",
      },
      {
        title: "Fixing mode",
        body: "Remind listeners not to coach mid-story.",
      },
    ],
    originalVariant: {
      title: "Swap → theme board (site original)",
      body: "After introductions, each person writes one word from their partner’s story on a shared board. Facilitator clusters repeats (travel, food, learning)—shows shared themes without more speaking.",
    },
    adultsWork:
      "Church small groups and games-like Two Truths hubs. Youth: keep school-safe. Work: use career-safe wins only.",
    faqs: [
      {
        q: "How do you play Story Swap?",
        a: "Pairs take timed turns telling a light story, then introduce each other with one highlight sentence.",
      },
      {
        q: "How long does it take?",
        a: "About 10–15 minutes.",
      },
      {
        q: "Is it good for church small groups?",
        a: "Yes with visitor-safe prompts and an easy pass.",
      },
      {
        q: "Can it be virtual?",
        a: "Yes—use breakouts of two.",
      },
      {
        q: "How is it different from Two Truths?",
        a: "No guessing or lies—just listening and a one-line introduce.",
      },
    ],
    sources: [
      { label: "Icebreaker games for church small groups", href: "/icebreaker-games-for-church-small-groups" },
      { label: "Games like Two Truths and a Lie", href: "/games-like-two-truths-and-a-lie" },
      { label: "Two Truths and a Dream", href: "/games/two-truths-and-a-dream" },
      { label: "Ice breaker games for small groups", href: "/icebreaker-games-for-small-groups" },
    ],
  },

  "two-truths-and-a-dream": {
    howToSteps: [
      {
        title: "Explain no-lie format",
        body: "Each person shares two true facts and one dream or hope. Listeners may ask one clarifying question. Optionally guess which item is the dream—or skip guessing to lower pressure.",
      },
      {
        title: "Model mild content",
        body: "Facilitator goes first with hobby-level truths and a low-stakes dream (learn guitar, visit a park). Ban status flexes and trauma dreams on week one.",
      },
      {
        title: "Time-box turns",
        body: "Under a minute each. Pass allowed. In groups above 12, use breakouts of four then two volunteers in main.",
      },
      {
        title: "Theme harvest",
        body: "Name two shared themes you heard, then start the study or agenda.",
      },
    ],
    variations: [
      {
        title: "Study-related dream",
        body: "For series kickoffs: one hope for the group’s learning.",
      },
      {
        title: "No guessing",
        body: "Share only; skip “which is the dream?”",
      },
      {
        title: "Chat dreams (virtual)",
        body: "Type the dream line in chat for late joiners.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "4–12 ideal; sample in larger rooms." },
      { label: "Time", body: "8–12 minutes." },
      { label: "Materials", body: "None." },
      {
        label: "House rules",
        body: "No forced lying. Mild model first. Pass anytime. No mocking dreams.",
      },
    ],
    whyItWorks:
      "Two Truths and a Dream keeps storytelling without asking anyone to invent a lie—useful when classic Two Truths feels dishonest or stressful. It fails when dreams become status contests. Link clearly to the classic Two Truths page so searchers see the difference.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "Two true facts and one dream. You may pass. Guessing the dream is optional.",
      },
      {
        speaker: "Model",
        line: "I cook on Sundays, I collect maps, and I dream of finishing a short trail race.",
      },
      {
        speaker: "Play",
        line: "Around once—or breakouts of four.",
      },
      {
        speaker: "Close",
        line: "I heard themes of learning and outdoors. We begin.",
      },
    ],
    pitfalls: [
      {
        title: "Dream flexing",
        body: "Model ordinary hopes so luxury contests do not start.",
      },
      {
        title: "Confused with Two Truths and a Lie",
        body: "Say “no lie tonight” in the open.",
      },
    ],
    originalVariant: {
      title: "Dream → tiny next step (site original)",
      body: "After shares, each person writes one tiny next step toward their dream (email, 10-minute practice). Steps stay private unless volunteered—turns inspiration into agency without public accountability theater.",
    },
    adultsWork:
      "Church small groups and games-like-TTL hubs. Students: school-safe dreams. Work: career-learning dreams beat salary dreams.",
    faqs: [
      {
        q: "How do you play Two Truths and a Dream?",
        a: "Share two true facts and one dream or hope. The group may guess which is the dream, or simply listen.",
      },
      {
        q: "How is it different from Two Truths and a Lie?",
        a: "There is no false statement—one item is a hope instead of a lie.",
      },
      {
        q: "How long does it take?",
        a: "About 8–12 minutes.",
      },
      {
        q: "Is guessing required?",
        a: "No. Skip guessing to lower pressure.",
      },
      {
        q: "Is it good for visitors?",
        a: "Yes with mild models and a clear pass.",
      },
    ],
    sources: [
      { label: "Games like Two Truths and a Lie", href: "/games-like-two-truths-and-a-lie" },
      { label: "Two Truths and a Lie", href: "/games/two-truths-and-a-lie" },
      { label: "Story Swap", href: "/games/story-swap" },
      { label: "Icebreaker games for church small groups", href: "/icebreaker-games-for-church-small-groups" },
    ],
  },

  "appreciation-circle": {
    howToSteps: [
      {
        title: "Use only with existing trust",
        body: "Best as a close for retreats or groups that already know each other. Skip as a first-minute opener for strangers—use a check-in instead.",
      },
      {
        title: "Set specificity rules",
        body: "Appreciate behaviors you observed (“you brought snacks,” “you clarified the schedule”), not appearance or status. Keep each statement under 20 seconds.",
      },
      {
        title: "Offer written lane",
        body: "Sticky notes or chat appreciations count fully for anyone who does not want to speak. Going last or passing is allowed.",
      },
      {
        title: "Close gently",
        body: "Optional group thanks. Do not force tears or testimony. Transition to dismissal or a light snack.",
      },
    ],
    variations: [
      {
        title: "Sticky-only circle",
        body: "Everyone writes; facilitator reads a sample with consent.",
      },
      {
        title: "Pair appreciations",
        body: "Lower intensity than full-circle speaking.",
      },
      {
        title: "Team → process",
        body: "Appreciate a process (“async updates”) instead of a person when relationships are new.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "4–12." },
      { label: "Time", body: "10–15 minutes." },
      { label: "Materials", body: "Optional sticky notes." },
      {
        label: "House rules",
        body: "Optional speaking. Specific and kind. No appearance comments. Pass anytime.",
      },
    ],
    whyItWorks:
      "Appreciation Circle affirms an existing small group or closes a retreat. It fails when forced on strangers, when praises become popularity contests, or when people cannot opt for writing. Youth and small-group hubs should stress consent.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "If you want, offer a short appreciation to the person on your right—or write a sticky. Pass is fine.",
      },
      {
        speaker: "Rule",
        line: "Specific behaviors, not looks. Twenty seconds.",
      },
      {
        speaker: "Close",
        line: "Thank you. Stickies can stay private. We are done.",
      },
    ],
    pitfalls: [
      {
        title: "Stranger opener",
        body: "Do not use on day-one mixed rooms.",
      },
      {
        title: "Popularity spiral",
        body: "Allow group-level appreciations so quiet people are not skipped.",
      },
    ],
    originalVariant: {
      title: "Appreciation → keep/try board (site original)",
      body: "Translate two appreciations into a “keep doing” sticky and one “try next time” sticky for the group’s norms. Moves warmth into actionable agreements without more vulnerable speaking.",
    },
    adultsWork:
      "Youth group and small-groups hubs. Church: visitor-safe only as written notes. Work: better as a sprint retro close than a kickoff.",
    faqs: [
      {
        q: "How do you play Appreciation Circle?",
        a: "In a trusted circle, people optionally offer short, specific appreciations—or write them—then close gently.",
      },
      {
        q: "Should I use it with strangers?",
        a: "No. Use a low-disclosure check-in first.",
      },
      {
        q: "What if speaking feels intense?",
        a: "Sticky notes or chat count as full participation.",
      },
      {
        q: "How long does it take?",
        a: "About 10–15 minutes.",
      },
      {
        q: "What should people avoid saying?",
        a: "Appearance, romance, or comparisons that rank people.",
      },
    ],
    sources: [
      { label: "Ice breaker games for small groups", href: "/icebreaker-games-for-small-groups" },
      { label: "Ice breaker games for youth group", href: "/icebreaker-games-for-youth-group" },
      { label: "When to skip an icebreaker", href: "/when-to-skip-an-icebreaker" },
      { label: "One Word Check-In", href: "/games/one-word-check-in" },
    ],
  },

  "year-of-the-coin": {
    howToSteps: [
      {
        title: "Prep coins or year slips",
        body: "Bowl of coins with readable years, or paper slips from roughly 1990–today. Virtual: random year generator or facilitator assigns years in chat.",
      },
      {
        title: "Draw and choose angle",
        body: "Share a light memory from that year—or from an age near the last two digits. Model a boring memory first (a song, a snack, a hobby).",
      },
      {
        title: "Enforce pass and time",
        body: "45 seconds max. Pass if the year lands on a hard season—no explanation required. Offer a redraw once.",
      },
      {
        title: "Thank and transition",
        body: "Do not force a theological point from every story. Move into study or agenda.",
      },
    ],
    variations: [
      {
        title: "Phone random years",
        body: "No coins needed.",
      },
      {
        title: "Decade clusters",
        body: "People with nearby years pair briefly before full-circle shares.",
      },
      {
        title: "Object year",
        body: "Share a year tied to an object nearby instead of a life story.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "4–16." },
      { label: "Time", body: "8–15 minutes." },
      { label: "Materials", body: "Coins or year slips." },
      {
        label: "House rules",
        body: "Pass and redraw allowed. Light memories only. No digging into trauma years.",
      },
    ],
    whyItWorks:
      "Year of the Coin is a low-prep story prompt for church and small groups. It fails when facilitators push painful years or when shares become testimony pressure. Always model mild and honor pass.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "Draw a coin. Share a light memory from that year—or pass / redraw once.",
      },
      {
        speaker: "Model",
        line: "Mine is 2011—I learned to make better coffee. Forty-five seconds each.",
      },
      {
        speaker: "Play",
        line: "Around the circle. Pass is success.",
      },
      {
        speaker: "Close",
        line: "Thanks. Coins back. We begin.",
      },
    ],
    pitfalls: [
      {
        title: "Trauma landing",
        body: "Remind redraw/pass before the first share.",
      },
      {
        title: "Forced meaning",
        body: "Do not require a spiritual lesson from every year.",
      },
    ],
    originalVariant: {
      title: "Coin year → gratitude sticky (site original)",
      body: "After shares, each person writes one ordinary good thing from any recent year (not necessarily the coin year) on a sticky. Board becomes a gratitude mosaic—keeps storytelling light if coin years felt heavy.",
    },
    adultsWork:
      "Church and church-small-group hubs. Adult small groups with almost no prep. Youth: prefer recent years only. Visitors: emphasize pass.",
    faqs: [
      {
        q: "How do you play Year of the Coin?",
        a: "People draw a coin or year slip and share a short light memory tied to that year, with pass and redraw allowed.",
      },
      {
        q: "What if someone has no coin?",
        a: "Use paper slips or a phone random year.",
      },
      {
        q: "How long does it take?",
        a: "About 8–15 minutes.",
      },
      {
        q: "Is it visitor-safe for church?",
        a: "Yes if prompts stay light and pass is explicit.",
      },
      {
        q: "What if the year is painful?",
        a: "Pass or redraw—no explanation needed.",
      },
    ],
    sources: [
      { label: "Icebreaker games for church", href: "/icebreaker-games-for-church" },
      { label: "Icebreaker games for church small groups", href: "/icebreaker-games-for-church-small-groups" },
      { label: "Story Swap", href: "/games/story-swap" },
      { label: "When to skip an icebreaker", href: "/when-to-skip-an-icebreaker" },
    ],
  },

  "unique-and-shared": {
    howToSteps: [
      {
        title: "Form small groups",
        body: "Groups of 3–5. Virtual: breakouts. Give a safe category list: hobbies, foods, routines, learning goals—not trauma, politics, salary, or body topics.",
      },
      {
        title: "Find one shared",
        body: "Two to four minutes to find something everyone in the subgroup shares beyond “we are in this meeting.” Scribe optional.",
      },
      {
        title: "Find one unique",
        body: "Each person names one thing that is true only for them in the subgroup. Pass allowed. No competing for “most interesting.”",
      },
      {
        title: "Harvest briefly",
        body: "Two groups share one shared + one unique with the room (20 seconds). Sit and start the agenda.",
      },
    ],
    variations: [
      {
        title: "Pairs only",
        body: "Faster for short meetings—one shared, one unique each.",
      },
      {
        title: "Theme rounds",
        body: "Round one hobbies, round two work tools.",
      },
      {
        title: "Sticky wall",
        body: "Write shared/unique on stickies for quiet rooms.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "6–30; subgroups of 3–5." },
      { label: "Time", body: "8–12 minutes." },
      { label: "Materials", body: "None; optional paper." },
      {
        label: "House rules",
        body: "Safe categories. Pass anytime. No ranking uniqueness. Keep share-outs short.",
      },
    ],
    whyItWorks:
      "Unique and Shared balances belonging and individuality without bingo cards. It fails when “unique” becomes a talent show or when categories pry. Prefer Common Ground for whole-room themes; prefer 10 Things in Common for longer pair lists.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "In groups of four, find one thing you all share and one thing unique to each person. Pass is fine.",
      },
      {
        speaker: "Time",
        line: "Four minutes. Hobbies and routines are fair game—not private struggles.",
      },
      {
        speaker: "Harvest",
        line: "Two groups—one shared and one unique, twenty seconds.",
      },
      {
        speaker: "Close",
        line: "Thanks. Agenda time.",
      },
    ],
    pitfalls: [
      {
        title: "Trauma unique",
        body: "Redirect medical or conflict stories immediately.",
      },
      {
        title: "Long report-outs",
        body: "Sample only; do not hear every group.",
      },
    ],
    originalVariant: {
      title: "Unique → ask-me sticky (site original)",
      body: "Each person writes their unique item as an “ask me about…” sticky on a wall or doc. Peers can tap topics later in breaks—extends discovery without more circle time.",
    },
    adultsWork:
      "Workshops, kickoffs, and adult mixers. GameDetail already has facilitator tips—extras deepen DoD. Teens: school-safe categories only.",
    faqs: [
      {
        q: "How do you play Unique and Shared?",
        a: "Small groups find one shared trait and one unique trait per person, then briefly harvest examples with the room.",
      },
      {
        q: "How long does it take?",
        a: "About 8–12 minutes.",
      },
      {
        q: "How is it different from Common Ground?",
        a: "Common Ground often hunts multiple shared themes; this format always pairs shared with unique.",
      },
      {
        q: "Can it be virtual?",
        a: "Yes—use breakout rooms of three to five.",
      },
      {
        q: "What categories are safe?",
        a: "Hobbies, food, routines, learning goals. Skip trauma, politics, and salary.",
      },
    ],
    sources: [
      { label: "Common Ground", href: "/games/common-ground" },
      { label: "10 Things in Common", href: "/games/10-things-in-common" },
      { label: "Best icebreaker games", href: "/best-icebreaker-games" },
      { label: "Ice breaker games for work", href: "/icebreaker-games-for-work" },
    ],
  },

  "remote-change-3-things": {
    howToSteps: [
      {
        title: "Pick a volunteer",
        body: "One person will change three small things off camera or after turning away. Camera-off observers guess in chat. Pass if someone does not want to be on screen.",
      },
      {
        title: "List safe changes",
        body: "Swap glasses/hat/headphones, move a mug, add or remove a background item, slight lighting or angle change. Ban clothing changes that require leaving the call or anything that mocks appearance.",
      },
      {
        title: "Guessing round",
        body: "Volunteer returns. Group types guesses in chat or raises hands. Reveal after 60–90 seconds. Celebrate close guesses—no shame for misses.",
      },
      {
        title: "Optional second volunteer",
        body: "One more round max, then agenda. Large rooms: breakouts of six with their own volunteer.",
      },
    ],
    variations: [
      {
        title: "Chat-only guesses",
        body: "Keeps audio clean on big calls.",
      },
      {
        title: "In-person cousin",
        body: "Person leaves the room, changes three things, returns—same rules.",
      },
      {
        title: "One change only",
        body: "Shorter 3-minute energizer.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "4–20 active; sample in larger calls." },
      { label: "Time", body: "5–10 minutes." },
      { label: "Materials", body: "Webcam optional for guessers; volunteer needs a few props." },
      {
        label: "House rules",
        body: "Volunteer opt-in. No appearance roasting. Chat guessing welcome. Stop after two rounds.",
      },
    ],
    whyItWorks:
      "Remote Change 3 Things is pure observation play with almost no disclosure—ideal virtual warm-up. It fails when volunteers feel judged for their space or when rounds drag. Prefer Chat Waterfall when nobody wants video spotlight.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "I need one volunteer to change three small things off camera. Guessers can use chat. Pass is fine.",
      },
      {
        speaker: "Safe list",
        line: "Mug, headphones, background item—nothing about bodies.",
      },
      {
        speaker: "Guess",
        line: "Welcome back. Ninety seconds of guesses in chat.",
      },
      {
        speaker: "Close",
        line: "Nice spots. One round is enough—agenda time.",
      },
    ],
    pitfalls: [
      {
        title: "Home shaming",
        body: "Shut down comments about mess or money.",
      },
      {
        title: "Reluctant volunteer",
        body: "Facilitator can demo first or skip the game.",
      },
    ],
    originalVariant: {
      title: "Change → focus reset (site original)",
      body: "After reveals, everyone mute-changes one tiny desk item on purpose, then types “ready” in chat. Marks the shift from play to work without another icebreaker.",
    },
    adultsWork:
      "Virtual and short-virtual hubs. Fun for hybrid kickoffs. Skip formal board calls. High school online: keep school-safe props.",
    faqs: [
      {
        q: "How do you play Remote Change 3 Things?",
        a: "A volunteer changes three small things off camera, returns, and the group guesses the changes—often in chat.",
      },
      {
        q: "Do guessers need cameras on?",
        a: "No. Chat guessing works well.",
      },
      {
        q: "How long does it take?",
        a: "About 5–10 minutes.",
      },
      {
        q: "What changes are safe?",
        a: "Props, mugs, headphones, background items—not clothing that requires leaving or appearance jokes.",
      },
      {
        q: "When should I skip it?",
        a: "When no one wants spotlight, trust is low, or the agenda needs gravity first.",
      },
    ],
    sources: [
      { label: "Virtual ice breaker games", href: "/virtual-icebreaker-games" },
      { label: "Short virtual icebreakers", href: "/short-virtual-icebreakers" },
      { label: "Chat Waterfall", href: "/games/chat-waterfall" },
      { label: "Picture Sharing", href: "/games/picture-sharing" },
    ],
  },

  "dicebreakers": {
    howToSteps: [
      {
        title: "Prep six prompts",
        body: "Map die faces 1–6 to work- or school-safe prompts (favorite tool, small win, snack, hobby, learning goal, weekend plan). Screen prompts for visitors. Virtual: on-screen die roller.",
      },
      {
        title: "Roll and answer",
        body: "Each person rolls once, answers in 20–30 seconds, or passes and re-rolls once. No pressure to entertain.",
      },
      {
        title: "Sample in large rooms",
        body: "Above 12: breakouts of four each roll once, then two volunteers in main—or facilitator rolls for the room and anyone may answer.",
      },
      {
        title: "Close cleanly",
        body: "After one pass or five minutes, put the die away and start the agenda.",
      },
    ],
    variations: [
      {
        title: "Theme die",
        body: "All six prompts about the project kickoff.",
      },
      {
        title: "Pair rolls",
        body: "Partners roll for each other to lower spotlight.",
      },
      {
        title: "No die",
        body: "Numbered sticky draw if dice are missing.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "4–30; sample above 12." },
      { label: "Time", body: "5–10 minutes." },
      { label: "Materials", body: "One die or digital roller; prompt sheet." },
      {
        label: "House rules",
        body: "Pass and one re-roll. Soft prompts. No drinking-game energy. Keep answers short.",
      },
    ],
    whyItWorks:
      "Dicebreakers adds light randomness to conversation starters so people are not stuck inventing a topic. It fails when prompts dig too deep or when every person must perform for a huge room. Differentiate from Would You Rather: this is prompt lottery, not binary choice.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "Roll the die, answer the matching prompt in twenty seconds—or pass and re-roll once.",
      },
      {
        speaker: "Prompts",
        line: "One is a small win, two is a favorite tool…",
      },
      {
        speaker: "Play",
        line: "Breakouts of four—one roll each. Then two volunteers in main.",
      },
      {
        speaker: "Close",
        line: "Die down. Agenda starts.",
      },
    ],
    pitfalls: [
      {
        title: "Party prompts",
        body: "Keep workplace and school decks clean.",
      },
      {
        title: "Full-room marathon",
        body: "Sample or break out above a dozen people.",
      },
    ],
    originalVariant: {
      title: "Die → decision prompt (site original)",
      body: "After social rolls, do one final roll against a work die (risk, customer, timeline, quality, learning, fun). The room spends two minutes discussing only that lens for the next agenda item—turns the toy into a facilitation tool.",
    },
    adultsWork:
      "Meetings and workshops needing fast talk starters. Virtual-friendly with on-screen rollers. Teens: school-safe deck. Not a trust-fall substitute.",
    faqs: [
      {
        q: "How do you play Dicebreakers?",
        a: "People roll a die mapped to six prompts and answer briefly, with pass and re-roll allowed.",
      },
      {
        q: "Do I need a physical die?",
        a: "No—a digital roller or numbered slips work.",
      },
      {
        q: "How long does it take?",
        a: "About 5–10 minutes.",
      },
      {
        q: "Can it be virtual?",
        a: "Yes—share a roller and use breakouts for larger calls.",
      },
      {
        q: "What prompts work at work?",
        a: "Tools, small wins, snacks, hobbies, learning goals, weekend plans—avoid alcohol and dating prompts.",
      },
    ],
    sources: [
      { label: "Ice breaker games for meetings", href: "/icebreaker-games-for-meetings" },
      { label: "Would You Rather", href: "/games/would-you-rather" },
      { label: "One Word Check-In", href: "/games/one-word-check-in" },
      { label: "Virtual ice breaker games", href: "/virtual-icebreaker-games" },
    ],
  },

  "count-up": {
    howToSteps: [
      {
        title: "Explain the goal",
        body: "The group counts from 1 to a target (often equal to headcount or 20) without two people speaking the same number. No planning aloud. Silence between numbers is fine.",
      },
      {
        title: "Start easy",
        body: "Eyes open, seated. If two speak at once, restart kindly from 1—no elimination mockery. Celebrate clean runs.",
      },
      {
        title: "Optional harder rounds",
        body: "Eyes closed, or count to a higher number. Stop after two or three attempts so frustration does not win.",
      },
      {
        title: "Debrief listening",
        body: "Ask: What helped? Who held back? How is this like meeting interruptions? Keep debrief under three minutes.",
      },
    ],
    variations: [
      {
        title: "Virtual unmute discipline",
        body: "Only one unmute at a time; collisions restart.",
      },
      {
        title: "Small-team heats",
        body: "Groups of six compete for cleanest run—soft scoring.",
      },
      {
        title: "Clap instead of speak",
        body: "Lower voice anxiety; collisions still restart.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "8–25." },
      { label: "Time", body: "3–10 minutes." },
      { label: "Materials", body: "None." },
      {
        label: "House rules",
        body: "Kind restarts. No blaming individuals. Seated play. Stop before frustration peaks.",
      },
    ],
    whyItWorks:
      "Count Up trains collective listening and patience—teamwork without a puzzle kit. It fails when restarts become shame or when the facilitator never debriefs. Use before workshops on interruption norms; skip when the room is already tense.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "We will count to twenty together. If two voices overlap, we restart kindly—no blame.",
      },
      {
        speaker: "Play",
        line: "Silence is allowed. Begin when ready.",
      },
      {
        speaker: "Restart",
        line: "Overlap—smile, back to one.",
      },
      {
        speaker: "Debrief",
        line: "What helped us listen? How does that show up in meetings?",
      },
    ],
    pitfalls: [
      {
        title: "Blame culture",
        body: "Facilitator owns restarts as system learning.",
      },
      {
        title: "Too many attempts",
        body: "Cap at three tries; declare a moral win.",
      },
    ],
    originalVariant: {
      title: "Count → meeting norm sticky (site original)",
      body: "After debrief, each person writes one meeting listening norm (“pause two seconds,” “stack before speaking”). Stickies become the team’s interruption charter for the session.",
    },
    adultsWork:
      "Work teams and classrooms practicing turn-taking. Virtual needs clear mute rules. Not a funny opener for client sales calls.",
    faqs: [
      {
        q: "How do you play Count Up?",
        a: "The group counts in order without overlapping voices; overlaps restart kindly, then you debrief listening.",
      },
      {
        q: "How long does it take?",
        a: "About 3–10 minutes including a short debrief.",
      },
      {
        q: "Can it be virtual?",
        a: "Yes with unmute discipline or a clap variant.",
      },
      {
        q: "What if people get frustrated?",
        a: "Stop after two or three attempts and harvest the listening lesson.",
      },
      {
        q: "Is it an icebreaker or a teamwork drill?",
        a: "Both—a short listening drill that warms collaboration norms.",
      },
    ],
    sources: [
      { label: "Ice breaker games for work", href: "/icebreaker-games-for-work" },
      { label: "Ice breaker games for meetings", href: "/icebreaker-games-for-meetings" },
      { label: "Line-Up", href: "/games/line-up" },
      { label: "When to skip an icebreaker", href: "/when-to-skip-an-icebreaker" },
    ],
  },

  "diversity-bingo": {
    howToSteps: [
      {
        title: "Write connection squares, not identity traps",
        body: "Prompts should be optional experiences and preferences: “has a plant on their desk,” “speaks more than one language (if they want to say so),” “prefers async notes,” “learned a new tool this year.” Ban squares about race, religion, disability, immigration status, sexuality, salary, or “where are you really from.” If a square needs a private disclosure, delete it.",
      },
      {
        title: "Frame the goal as curiosity, not scoring people",
        body: "Say out loud: this is a mixer to notice both shared habits and different skills. Nobody owes a story. A pass on any square is a full success. Soft win on one line, not a blackout hunt.",
      },
      {
        title: "Mingle with real questions",
        body: "People ask, listen, and initial a square only after a short conversation. No shouting across the room. Facilitator models one boring, work-safe question.",
      },
      {
        title: "Harvest without ranking identities",
        body: "Two volunteers share one interesting skill or habit they learned—not a demographic recap. Thank the room and start the agenda.",
      },
    ],
    variations: [
      {
        title: "Experience bingo only",
        body: "Every square is a skill, hobby, or workplace habit. Rename the activity “experience bingo” if the word diversity will be misunderstood as an identity audit.",
      },
      {
        title: "Virtual chat bingo",
        body: "People claim squares in chat with a one-line example. Cameras optional.",
      },
      {
        title: "Four-corners sprint",
        body: "Complete any four squares in eight minutes for short meetings.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "10–40." },
      { label: "Time", body: "10–20 minutes." },
      { label: "Materials", body: "Printed or digital cards with screened prompts." },
      {
        label: "House rules",
        body: "Optional squares. Pass anytime. No identity interrogation. Soft line wins. Facilitator screens the deck.",
      },
    ],
    whyItWorks:
      "Diversity Bingo only works when “diversity” means a mix of hobbies, skills, and paths—not a public audit of protected traits. It fails when cards force people to represent a group or when wins reward the fastest extrovert. Prefer Human Bingo or Icebreaker Bingo if the word diversity will land as HR theater.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "These squares are optional experiences and skills. Pass anytime. We are not collecting identity data.",
      },
      {
        speaker: "Model",
        line: "I need someone who tried a new tool this year—one sentence, then initial.",
      },
      {
        speaker: "Play",
        line: "Twelve minutes. First line gets a cheer. No shouting.",
      },
      {
        speaker: "Close",
        line: "Two shares of a skill you learned about someone. Cards down.",
      },
    ],
    pitfalls: [
      {
        title: "Identity bingo",
        body: "Delete any square that asks someone to disclose race, faith, disability, or immigration story.",
      },
      {
        title: "Tokenizing winners",
        body: "Do not ask people to “represent” a group during harvest.",
      },
    ],
    originalVariant: {
      title: "Bingo → skill map (site original)",
      body: "After mingling, each person stars one square they can teach a peer this month. Stickies become an “ask me about…” skill map. Connection stays practical; nobody has to narrate their biography.",
    },
    adultsWork:
      "Workshops that want Human Bingo energy with a skills lens. Skip if leadership wants a diversity lecture—this is a mixer, not training. For classrooms, keep prompts school-safe and optional.",
    faqs: [
      {
        q: "What is Diversity Bingo?",
        a: "A mixer where people find optional shared experiences and skills on a bingo card. It is not an identity questionnaire.",
      },
      {
        q: "How do you run Diversity Bingo respectfully?",
        a: "Screen every square, allow pass, avoid protected-class prompts, and harvest skills—not demographics.",
      },
      {
        q: "How long does it take?",
        a: "About 10–20 minutes depending on whether you play for one line or more.",
      },
      {
        q: "What are good Diversity Bingo prompts?",
        a: "Habits and skills: plants, tools, languages people choose to mention, commute styles, hobbies. Not race, salary, or medical status.",
      },
      {
        q: "How is it different from Human Bingo?",
        a: "Same mingle mechanic. This page stresses screened, optional experience squares so the activity cannot become an identity audit.",
      },
    ],
    sources: [
      { label: "Human Bingo", href: "/games/human-bingo" },
      { label: "Icebreaker Bingo", href: "/games/icebreaker-bingo" },
      { label: "Games like Human Bingo", href: "/games-like-human-bingo" },
      { label: "How we choose icebreakers", href: "/how-we-choose-icebreakers" },
      { label: "When to skip an icebreaker", href: "/when-to-skip-an-icebreaker" },
    ],
  },

  "wheel-of-fortune-introductions": {
    howToSteps: [
      {
        title: "Build a light prompt wheel",
        body: "Segments might be: name + role, a tool you like, a snack, a weekend hobby, one hope for this session. Ban dating, money, and “embarrassing story” wedges. A cardboard spinner, slide randomizer, or numbered bowl all count as the wheel.",
      },
      {
        title: "Spin, answer, pass",
        body: "Each person spins once, answers in 20 seconds, or re-spins once / passes. Model a boring answer so later people do not perform.",
      },
      {
        title: "Sample large rooms",
        body: "Above 12, spin for the room and take three volunteers, or use breakouts of six with a shared spinner.",
      },
      {
        title: "Stop while it is still an intro",
        body: "One pass is enough. Do not run a second full circle.",
      },
    ],
    variations: [
      {
        title: "Chat wheel (virtual)",
        body: "Facilitator rolls; people type answers on three. Two unmutes.",
      },
      {
        title: "Name-only wedge",
        body: "Include a segment that is just preferred name + pronunciation—no extra story.",
      },
      {
        title: "Project wheel",
        body: "All wedges about the kickoff (risk, customer, timeline) after names are known.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "6–20 per circle; sample larger groups." },
      { label: "Time", body: "8–12 minutes." },
      { label: "Materials", body: "Spinner, slide randomizer, or numbered slips." },
      {
        label: "House rules",
        body: "Pass and one re-spin. Work- or school-safe wedges. No roasting answers.",
      },
    ],
    whyItWorks:
      "Wheel of Fortune Introductions adds a playful randomizer so people are not stuck inventing a fun fact. It fails when wedges demand humiliation or when every person must spin in a huge room. Prefer The Name Game when the only goal is names; prefer Dicebreakers when you already have a die.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "Spin once. Answer in twenty seconds—or pass / re-spin. Wedges are light on purpose.",
      },
      {
        speaker: "Model",
        line: "I landed on snack. I like plain pretzels. Next.",
      },
      {
        speaker: "Play",
        line: "Around once, or three volunteers if we are a large room.",
      },
      {
        speaker: "Close",
        line: "Wheel away. Names and one detail are enough—agenda time.",
      },
    ],
    pitfalls: [
      {
        title: "Humiliation wedges",
        body: "Remove “most embarrassing” and party dares before anyone spins.",
      },
      {
        title: "Full-room marathon",
        body: "Sample volunteers above a dozen people.",
      },
    ],
    originalVariant: {
      title: "Wheel → pronunciation sticky (site original)",
      body: "After spins, each person writes their name the way they want it said on a sticky or chat. Facilitator reads five names slowly. The randomizer was the icebreaker; the harvest is actually learning names.",
    },
    adultsWork:
      "Name-game hub and first workshops. Formal rooms can use a numbered bowl instead of a carnival wheel. Recurring teams: skip.",
    faqs: [
      {
        q: "How do you play Wheel of Fortune Introductions?",
        a: "People spin a prompt wheel, share a short answer, or pass / re-spin, then you stop after one round.",
      },
      {
        q: "Do you need a real wheel?",
        a: "No. A slide randomizer or numbered slips work.",
      },
      {
        q: "How long does it take?",
        a: "About 8–12 minutes.",
      },
      {
        q: "Is it good for work?",
        a: "Yes with professional wedges and sampling in large meetings.",
      },
      {
        q: "How is it different from Dicebreakers?",
        a: "Same random-prompt idea. This page is introduction-shaped (name + one light detail); Dicebreakers is a conversation starter at any point in a meeting.",
      },
    ],
    sources: [
      { label: "Name game icebreakers", href: "/name-game-icebreakers" },
      { label: "The Name Game", href: "/games/the-name-game" },
      { label: "Dicebreakers", href: "/games/dicebreakers" },
      { label: "Ice breaker games for meetings", href: "/icebreaker-games-for-meetings" },
    ],
  },

  "where-do-we-come-from-what-is-famous": {
    howToSteps: [
      {
        title: "Ban the “really from” question",
        body: "Ask for a place people choose: hometown, a city they lived in, a favorite park, or a fictional map pin. Never demand ancestry, immigration stories, or “but where are you really from.” Model a boring pin first.",
      },
      {
        title: "Share one famous-or-ordinary thing",
        body: "Each person names one thing that place is known for—or a snack, sports team, weather joke. Ordinary is better than tourism ads. Pass or pick a fictional place.",
      },
      {
        title: "Keep turns short",
        body: "20–30 seconds. Above 12, use pairs then two volunteers in main. Virtual: drop pins in a shared map or type city + one word in chat.",
      },
      {
        title: "Harvest themes, not passports",
        body: "Facilitator names two themes (weather, food, transit) and starts the agenda. Do not quiz people on geography.",
      },
    ],
    variations: [
      {
        title: "Favorite place instead of origin",
        body: "Safer for mixed rooms and visitors.",
      },
      {
        title: "Team map",
        body: "Drop pins on a shared slide; no speaking required.",
      },
      {
        title: "Snack from a place",
        body: "Name a food you like from somewhere you have been—optional.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "6–20; sample larger groups." },
      { label: "Time", body: "8–12 minutes." },
      { label: "Materials", body: "Optional shared map." },
      {
        label: "House rules",
        body: "Chosen places only. No ancestry interrogation. Pass anytime. No ranking cities by status.",
      },
    ],
    whyItWorks:
      "This mixer can spark travel and hometown chat when people pick the place themselves. It fails when it becomes an origin audit or a wealth-and-passport flex. If trust is low, switch to One Word Check-In or Chat Waterfall.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "Name a place you choose—hometown, a park, or skip and pick a favorite city. One famous or ordinary thing. Pass is fine.",
      },
      {
        speaker: "Model",
        line: "I pick a rainy commuting city. Famous for coffee lines. Twenty seconds.",
      },
      {
        speaker: "Play",
        line: "Pairs first if we are a large room. Then two volunteers.",
      },
      {
        speaker: "Close",
        line: "I heard food and weather. We start.",
      },
    ],
    pitfalls: [
      {
        title: "Origin policing",
        body: "Shut down “but you don’t look like…” immediately.",
      },
      {
        title: "Tourism contest",
        body: "Model an ordinary place so luxury trips do not take over.",
      },
    ],
    originalVariant: {
      title: "Place → working-hours sticky (site original)",
      body: "After shares, people who want to can mark an optional time zone or typical working hours on a doc—not their biography. Turns geography chat into hybrid-meeting logistics without asking anyone to explain family history.",
    },
    adultsWork:
      "Workshops and adult mixers. Church visitors: prefer favorite-place variant. Classrooms: school-safe, no passport talk.",
    faqs: [
      {
        q: "How do you play Where Do We Come From, What Is Famous?",
        a: "People choose a place, name one famous or ordinary thing about it, and pass is allowed. Do not demand ancestry stories.",
      },
      {
        q: "Is “where are you from” okay at work?",
        a: "Only if people pick the place. Never force origin or ethnicity.",
      },
      {
        q: "How long does it take?",
        a: "About 8–12 minutes.",
      },
      {
        q: "Can it be virtual?",
        a: "Yes—chat one city plus one word, or drop optional map pins.",
      },
      {
        q: "What if someone does not want to share a hometown?",
        a: "They pick a park, a fictional place, or pass.",
      },
    ],
    sources: [
      { label: "Ice breaker games for work", href: "/icebreaker-games-for-work" },
      { label: "When to skip an icebreaker", href: "/when-to-skip-an-icebreaker" },
      { label: "One Word Check-In", href: "/games/one-word-check-in" },
      { label: "How we choose icebreakers", href: "/how-we-choose-icebreakers" },
    ],
  },

  "fantasy-vacation": {
    howToSteps: [
      {
        title: "Set a no-budget-flex rule",
        body: "People invent a short fictional trip: place, one activity, one snack. Ban real itineraries that show wealth, and ban “who has flown the most.” Model a cheap or silly trip (library day, backyard tent).",
      },
      {
        title: "Time-box shares",
        body: "30 seconds each, or pairs then two volunteers. Pass allowed. Virtual: type the trip in chat; two unmutes.",
      },
      {
        title: "Optional constraint",
        body: "Give a constraint: must include walking, must be indoors, must cost nothing. Constraints keep it playful instead of luxury ads.",
      },
      {
        title: "Close without voting",
        body: "Do not pick a “best vacation.” Name two themes and start work.",
      },
    ],
    variations: [
      {
        title: "Staycation only",
        body: "Trips must be within a city block or at home.",
      },
      {
        title: "Team offsite fiction",
        body: "Invent a one-day offsite the budget could never fund—then name one realistic element you actually want.",
      },
      {
        title: "Postcard sticky",
        body: "Draw or write a one-line postcard; gallery walk, no speaking.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "4–20; sample larger groups." },
      { label: "Time", body: "8–12 minutes." },
      { label: "Materials", body: "None; optional stickies." },
      {
        label: "House rules",
        body: "Fictional trips welcome. No wealth contests. Pass anytime. No ranking destinations.",
      },
    ],
    whyItWorks:
      "Fantasy Vacation is low-disclosure imagination. It fails when it becomes a passport-and-money showcase or when introverts must perform a travel brand. Constraints and pass keep it kind.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "Invent a short trip—real or fake. One activity, one snack. Pass is fine. Cheap trips win the room.",
      },
      {
        speaker: "Model",
        line: "Backyard tent, a thermos, and pretzels. Thirty seconds.",
      },
      {
        speaker: "Play",
        line: "Pairs, then two volunteers—or chat first.",
      },
      {
        speaker: "Close",
        line: "No voting. Agenda time.",
      },
    ],
    pitfalls: [
      {
        title: "Luxury flex",
        body: "Interrupt status talk; remind the cheap-trip model.",
      },
      {
        title: "Ability assumptions",
        body: "Do not assume everyone can hike, fly, or leave home.",
      },
    ],
    originalVariant: {
      title: "Vacation → rest need (site original)",
      body: "After the silly trip, each person writes one rest need for this week (quiet hour, walk, earlier stop). Private unless volunteered. Imagination becomes a practical energy check without a second icebreaker.",
    },
    adultsWork:
      "Workshops and socials. Formal client calls: skip. Teens: school-safe destinations. Prefer Desert Island Scenario if you want a constraint-and-tools angle.",
    faqs: [
      {
        q: "How do you play Fantasy Vacation?",
        a: "People describe a short real or invented trip with one activity and one snack, then you stop without voting.",
      },
      {
        q: "Do trips have to be real?",
        a: "No. Fictional and staycation trips are encouraged.",
      },
      {
        q: "How long does it take?",
        a: "About 8–12 minutes.",
      },
      {
        q: "Is it okay for work?",
        a: "Yes if you ban wealth flexing and allow pass.",
      },
      {
        q: "How is it different from Desert Island Scenario?",
        a: "Vacation is a wish trip. Desert island is a packing constraint that can bridge to project tools.",
      },
    ],
    sources: [
      { label: "Desert Island Scenario", href: "/games/desert-island-scenario" },
      { label: "Free fun icebreaker games", href: "/free-fun-icebreaker-games" },
      { label: "Ice breaker games for meetings", href: "/icebreaker-games-for-meetings" },
      { label: "When to skip an icebreaker", href: "/when-to-skip-an-icebreaker" },
    ],
  },

  "speed-dating-icebreaker": {
    howToSteps: [
      {
        title: "Rename it for work",
        body: "Call it timed pair hellos or speed introductions. The mechanic is rotations—not dating. Say that in the first sentence so nobody thinks this is a romance activity.",
      },
      {
        title: "Set a professional prompt",
        body: "90–120 seconds: name, role, one project hope, or one tool you like. Ban relationship, appearance, and “are you single” talk. Halfway bell so both people speak.",
      },
      {
        title: "Rotate with clear logistics",
        body: "Two lines or inner/outer circle; one side shifts. Virtual: breakouts of two, rematch 3–4 times. Accessible seated rows if standing is hard.",
      },
      {
        title: "Optional follow-up, never forced",
        body: "People may exchange work contact info. No pressure to “match.” Sit for the agenda.",
      },
    ],
    variations: [
      {
        title: "Use Speed Networking instead",
        body: "If the dating name will confuse HR or students, run the same rotations on the Speed Networking page.",
      },
      {
        title: "Prompt cards only",
        body: "Each round has a new work-safe card.",
      },
      {
        title: "Mentoring pairs",
        body: "One side stays as hosts; the other rotates.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "8–40." },
      { label: "Time", body: "10–20 minutes." },
      { label: "Materials", body: "Timer; optional prompt cards." },
      {
        label: "House rules",
        body: "Not a dating event. Equal airtime. Pass on personal questions. No forced contact info. Accessible seating.",
      },
    ],
    whyItWorks:
      "Timed pair rotations beat chaotic mingling. The dating label is a liability at work and school—treat this as Speed Networking with a legacy URL. It fails when prompts get flirty or when people cannot opt out of standing lines.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "This is timed pair hellos—not dating. Ninety seconds. Name, role, one project hope. Both people speak.",
      },
      {
        speaker: "Half",
        line: "Switch who is talking.",
      },
      {
        speaker: "Shift",
        line: "This line moves one person. New partner.",
      },
      {
        speaker: "Close",
        line: "Sit. Exchange contacts only if you want to.",
      },
    ],
    pitfalls: [
      {
        title: "Romance framing",
        body: "Correct it immediately; use professional language on slides.",
      },
      {
        title: "Unequal talkers",
        body: "Ring a halfway bell every round.",
      },
    ],
    originalVariant: {
      title: "Pair hello → one ask sticky (site original)",
      body: "After three rotations, each person writes one work question they still want answered (“who owns X?”). Stickies go to a parking lot for the real meeting—rotations become a question harvest, not a social hour.",
    },
    adultsWork:
      "Conferences and kickoffs. Prefer the Speed Networking URL in new hubs. Students: keep it clearly non-romantic. Church: visitor-safe prompts only.",
    faqs: [
      {
        q: "How do you play a speed dating icebreaker at work?",
        a: "Run timed pair introductions with professional prompts and rotations. Say it is not a dating activity.",
      },
      {
        q: "Is this the same as Speed Networking?",
        a: "Same mechanic. Use Speed Networking when you want a workplace name; this page exists for the older search phrase.",
      },
      {
        q: "How long does it take?",
        a: "About 10–20 minutes.",
      },
      {
        q: "Can it be virtual?",
        a: "Yes—breakouts of two with a timer.",
      },
      {
        q: "What prompts should I avoid?",
        a: "Anything romantic, appearance-based, or about family status.",
      },
    ],
    sources: [
      { label: "Speed Networking", href: "/games/speed-networking" },
      { label: "Reception Line", href: "/games/reception-line" },
      { label: "Games like Human Bingo", href: "/games-like-human-bingo" },
      { label: "Ice breaker games for work", href: "/icebreaker-games-for-work" },
    ],
  },

  "would-you-rather-training": {
    howToSteps: [
      {
        title: "Build a work-decision deck",
        body: "Pairs are about process, not party hypotheticals: docs or slides; long meeting or async thread; ship a small slice or wait for polish; office day or remote deep work. Ban dating, body, and alcohol prompts. This page is the training-room cousin of Would You Rather.",
      },
      {
        title: "Vote, then one why",
        body: "Hands, sides, or chat A/B. Sample one sentence per side. No scoring who is “right.” Pass allowed.",
      },
      {
        title: "Bridge to the real agenda",
        body: "After 5–8 prompts, pick one pair that matches today’s decision and spend two minutes applying it. That is the training payoff.",
      },
      {
        title: "Stop before debate club",
        body: "If a prompt starts an argument, park it and move on.",
      },
    ],
    variations: [
      {
        title: "Silent point only",
        body: "No explanations—useful when trust is low.",
      },
      {
        title: "Team norms deck",
        body: "All prompts about how this team will work for the next sprint.",
      },
      {
        title: "Use classic Would You Rather",
        body: "If you want silly food-and-travel pairs, go to the main Would You Rather page instead of stretching this one.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "6–40." },
      { label: "Time", body: "8–12 minutes." },
      { label: "Materials", body: "A screened work prompt list." },
      {
        label: "House rules",
        body: "Work-safe pairs only. Pass allowed. No winners. Park heated debates.",
      },
    ],
    whyItWorks:
      "Would You Rather Training warms a room into real tradeoffs. It fails when the deck is just party questions with a “training” title, or when facilitators force a “correct” process. Keep it distinct from the classic game.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "These are work tradeoffs, not party questions. Pick a side. Pass is fine. No right answer.",
      },
      {
        speaker: "Round",
        line: "Docs or live debate. Hands. One sentence each side.",
      },
      {
        speaker: "Bridge",
        line: "This last pair is today’s agenda. Two minutes—what do we actually want?",
      },
      {
        speaker: "Close",
        line: "Park the rest. We start the real item.",
      },
    ],
    pitfalls: [
      {
        title: "Party deck in a workshop",
        body: "Swap to the classic page or rewrite the list.",
      },
      {
        title: "Moralizing",
        body: "Do not praise one side as more professional.",
      },
    ],
    originalVariant: {
      title: "Rather → decision sticky (site original)",
      body: "After the last work pair, each person writes which side they need this week (more async / more live). Stickies become a visible team preference without a survey tool.",
    },
    adultsWork:
      "Kickoffs, retrospectives, and training days. Classrooms can use study-habit pairs. For funny openers, use the main Would You Rather page.",
    faqs: [
      {
        q: "How is Would You Rather Training different from Would You Rather?",
        a: "Training uses work or classroom process pairs and ends by applying one pair to the agenda. The classic game is lighter preference fun.",
      },
      {
        q: "How long does it take?",
        a: "About 8–12 minutes.",
      },
      {
        q: "Can it be virtual?",
        a: "Yes—A/B in chat with two short unmutes.",
      },
      {
        q: "What prompts should I use?",
        a: "Tools, meeting design, shipping vs polish, async vs live—not dating or body prompts.",
      },
      {
        q: "Should I merge this with Would You Rather?",
        a: "Keep both URLs if you need the training angle; link clearly so they are not duplicate shells.",
      },
    ],
    sources: [
      { label: "Would You Rather", href: "/games/would-you-rather" },
      { label: "This or That Questions", href: "/games/this-or-that-questions" },
      { label: "Ice breaker games for work", href: "/icebreaker-games-for-work" },
      { label: "Ice breaker games for meetings", href: "/icebreaker-games-for-meetings" },
    ],
  },

  "guess-who": {
    howToSteps: [
      {
        title: "Choose the classroom-simple version",
        body: "This page is the live bowl game: each person writes one optional, school- or work-safe fact on a slip. Fold. Facilitator reads; the group guesses who wrote it. For screened professional facts and a refuse-reveal rule, use Guess Who Personal Trivia instead.",
      },
      {
        title: "Screen as you collect",
        body: "Glance at slips before reading. Pull anything about dating, money, trauma, or inside jokes that exclude visitors. Writer may pass on claiming the fact.",
      },
      {
        title: "Limit the stack",
        body: "Six to eight facts for an icebreaker. Wrong guesses stay kind.",
      },
      {
        title: "Close without roasting",
        body: "Thank writers. Do not force remaining people to invent a fact.",
      },
    ],
    variations: [
      {
        title: "Skill facts only",
        body: "“I can…” work or class skills.",
      },
      {
        title: "Chat DM version",
        body: "People DM the host; host pastes without names.",
      },
      {
        title: "Switch to Personal Trivia",
        body: "If you need stronger screening language for workplaces, use that page’s script.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "6–20." },
      { label: "Time", body: "8–15 minutes." },
      { label: "Materials", body: "Paper slips or a form." },
      {
        label: "House rules",
        body: "Optional facts. Facilitator screens. Owner may refuse reveal. No mean guesses.",
      },
    ],
    whyItWorks:
      "Guess Who is a simple anonymous-fact mixer for classrooms and casual teams. Guess Who Personal Trivia is the same family with tighter work screening. Do not run both in one hour. It fails when facts become a roast or when people must claim a card.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "Write one optional safe fact. I will skip anything too personal. You may pass on reveal.",
      },
      {
        speaker: "Play",
        line: "Guess who—kind guesses only. Six cards max.",
      },
      {
        speaker: "Close",
        line: "Thanks. If you want a more screened work version later, we can use Personal Trivia.",
      },
    ],
    pitfalls: [
      {
        title: "Duplicate of Personal Trivia",
        body: "Say the difference in the open: this is the simple bowl; the other page is the work-screened version.",
      },
      {
        title: "Forced reveal",
        body: "Owners can stay silent.",
      },
    ],
    originalVariant: {
      title: "Fact → follow-up optional (site original)",
      body: "After three reveals, people who want to can write one question they would like to ask the author later—not now. Questions go to a parking lot. Curiosity without putting anyone on the spot twice.",
    },
    adultsWork:
      "Classrooms, youth, casual kickoffs. Work teams with visitors should prefer Guess Who Personal Trivia. Not for first client meetings.",
    faqs: [
      {
        q: "How do you play Guess Who as an icebreaker?",
        a: "People write optional safe facts; the facilitator reads them; the group guesses the author. Reveals are optional.",
      },
      {
        q: "How is it different from Guess Who Personal Trivia?",
        a: "Same family. This page is the simple classroom bowl. Personal Trivia emphasizes pre-screening and refuse-reveal for workplaces.",
      },
      {
        q: "How long does it take?",
        a: "About 8–15 minutes.",
      },
      {
        q: "Can it be virtual?",
        a: "Yes—DM facts to the host and guess in chat.",
      },
      {
        q: "What facts should people avoid?",
        a: "Dating, salary, trauma, and anything that outs someone else.",
      },
    ],
    sources: [
      { label: "Guess Who Personal Trivia", href: "/games/guess-who-personal-trivia" },
      { label: "Games like Two Truths and a Lie", href: "/games-like-two-truths-and-a-lie" },
      { label: "Two Truths and a Lie", href: "/games/two-truths-and-a-lie" },
      { label: "Ice breaker games for small groups", href: "/icebreaker-games-for-small-groups" },
    ],
  },

  "telephone-charades-lines": {
    howToSteps: [
      {
        title: "Split into two facing lines",
        body: "This is the racing cousin of Telephone Charades. Two lines of 5–8. Person at the back of each line sees the same work- or school-safe phrase. Gesture travels forward; the front person guesses. No touching. Pass a role anytime.",
      },
      {
        title: "Face away until your turn",
        body: "Only the current actor and the next person should watch. Everyone else faces away so the signal actually degrades.",
      },
      {
        title: "Reveal both guesses",
        body: "Compare the two front guesses with the original card. Laugh at mutation, not at people. One or two phrases max.",
      },
      {
        title: "Space and volume",
        body: "Leave aisle room. No shouting over the other line. Seated hands-only if standing is hard.",
      },
    ],
    variations: [
      {
        title: "Single-line classic",
        body: "If you cannot split safely, run Telephone Charades instead.",
      },
      {
        title: "No race scoring",
        body: "Both lines finish; celebrate both mutations.",
      },
      {
        title: "Virtual dual breakouts",
        body: "Two chains in two rooms; reconvene to compare guesses.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "10–20 (two lines)." },
      { label: "Time", body: "8–12 minutes." },
      { label: "Materials", body: "Two copies of the same phrase card." },
      {
        label: "House rules",
        body: "No touching. Optional performing. Clean phrases. Soft scoring. Accessible seated option.",
      },
    ],
    whyItWorks:
      "Two-line Telephone Charades adds a gentle race without personal disclosure. It fails when people crash into each other or when losing becomes shame. Keep it distinct from the single-line game; do not publish two identical shells.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "Two lines. Same phrase. Gesture only—no touching. You may pass a turn. We are not mocking anyone.",
      },
      {
        speaker: "Start",
        line: "Back of each line reads the card. Face away until it is your turn.",
      },
      {
        speaker: "Guess",
        line: "Front people guess. Here is the original—laugh at the mutation.",
      },
      {
        speaker: "Close",
        line: "One round is enough. Sit.",
      },
    ],
    pitfalls: [
      {
        title: "Collision and chaos",
        body: "Mark lines on the floor; stop the race if it gets rough.",
      },
      {
        title: "Loser shame",
        body: "Score both lines as successful mutations.",
      },
    ],
    originalVariant: {
      title: "Lines → message sticky (site original)",
      body: "After the reveal, each line writes one word for “what got lost.” Facilitator lists three lost words as a meeting metaphor (assumptions, haste, no playback)—then the real agenda uses a repeat-back rule.",
    },
    adultsWork:
      "Youth and energizer slots. Work: only in casual kickoffs with space. Prefer single-line or Chat Waterfall in formal rooms.",
    faqs: [
      {
        q: "How do you play Telephone Charades Lines?",
        a: "Two lines pass the same silent gesture forward; the front people guess. Compare with the original card.",
      },
      {
        q: "How is it different from Telephone Charades?",
        a: "Classic is one chain. Lines uses two parallel chains, often with a soft race.",
      },
      {
        q: "How long does it take?",
        a: "About 8–12 minutes.",
      },
      {
        q: "Can it be virtual?",
        a: "Yes with two breakout chains, though a single silent gallery is simpler.",
      },
      {
        q: "Do you need a winner?",
        a: "No. Treat both mutations as the joke.",
      },
    ],
    sources: [
      { label: "Telephone Charades", href: "/games/telephone-charades" },
      { label: "Games like the Human Knot", href: "/games-like-the-human-knot" },
      { label: "Funny ice breaker games for meetings", href: "/funny-icebreaker-games-for-meetings" },
      { label: "When to skip an icebreaker", href: "/when-to-skip-an-icebreaker" },
    ],
  },

  "near-and-far": {
    howToSteps: [
      {
        title: "Draw a floor spectrum",
        body: "One wall is “near / agree / high energy,” the opposite is “far / disagree / low.” Name the axis out loud. Seated pointing at the same walls counts. Ban axes about bodies, money, politics, or faith.",
      },
      {
        title: "Call a work- or school-safe prompt",
        body: "Examples: morning meetings vs afternoon; docs vs live debate; loud rooms vs quiet rooms. People walk or point to a place on the line. Pass = stay put or sit.",
      },
      {
        title: "Sample one voice per end",
        body: "Ten seconds each. No debating who is correct. Run 4–6 prompts, then sit.",
      },
      {
        title: "Optional debrief",
        body: "Ask what the spread might mean for today’s session (volume, timing). Keep it under two minutes.",
      },
    ],
    variations: [
      {
        title: "Chat spectrum (virtual)",
        body: "Type a number 1–5 instead of walking.",
      },
      {
        title: "This or That on a line",
        body: "If you only need two sides, use This or That Questions instead.",
      },
      {
        title: "Energy check only",
        body: "One prompt: how ready do you feel for the next item.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "8–40." },
      { label: "Time", body: "6–12 minutes." },
      { label: "Materials", body: "Clear floor space or a 1–5 chat scale." },
      {
        label: "House rules",
        body: "Inclusive axes only. Seated option. Pass anytime. No ranking people by where they stand.",
      },
    ],
    whyItWorks:
      "Near and Far makes preference visible without a speech. It fails when the axis shames people or when the room cannot move safely. Prefer a seated scale for formal or mixed-ability groups.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "This wall is near, that wall is far. Walk or point. Sitting still is a full pass.",
      },
      {
        speaker: "Prompt",
        line: "Near if you prefer async notes, far if you prefer live debate. Ten seconds to place.",
      },
      {
        speaker: "Sample",
        line: "One sentence from near. One from far. Thanks.",
      },
      {
        speaker: "Close",
        line: "Last prompt done. Sit. We start.",
      },
    ],
    pitfalls: [
      {
        title: "Loaded axes",
        body: "Never map people onto identity, income, or trauma.",
      },
      {
        title: "Forced movement",
        body: "Announce pointing/sitting before round one.",
      },
    ],
    originalVariant: {
      title: "Spectrum → session dial (site original)",
      body: "After the last prompt, people drop a sticky on a 1–5 “how much discussion do we need today” line. Facilitator reads the cluster and times the next agenda item to match—movement becomes a meeting-design input.",
    },
    adultsWork:
      "Workshops and youth rooms with space. Virtual: number scale. Skip crisis agendas. Compare Line-Up for silent ordering.",
    faqs: [
      {
        q: "How do you play Near and Far?",
        a: "People place themselves on a floor or chat spectrum for a few safe prompts, then you sample one voice per end.",
      },
      {
        q: "How long does it take?",
        a: "About 6–12 minutes.",
      },
      {
        q: "Can it be virtual?",
        a: "Yes—type 1–5 in chat instead of walking.",
      },
      {
        q: "What prompts are safe?",
        a: "Work habits, energy, tools, and taste. Not body, money, or politics.",
      },
      {
        q: "How is it different from This or That?",
        a: "This or That is two sides. Near and Far allows a full spectrum, including the middle.",
      },
    ],
    sources: [
      { label: "This or That Questions", href: "/games/this-or-that-questions" },
      { label: "Line-Up", href: "/games/line-up" },
      { label: "Ice breaker games for work", href: "/icebreaker-games-for-work" },
      { label: "When to skip an icebreaker", href: "/when-to-skip-an-icebreaker" },
    ],
  },

  "if-then": {
    howToSteps: [
      {
        title: "Give a stem, not a trap",
        body: "People complete “If I were a ___, then I would ___” or “If this project were a tool, then…” Keep stems work- or school-safe. Ban romance, body, and “if I could change you.”",
      },
      {
        title: "Model a boring line",
        body: "Facilitator goes first with a plain example so later answers do not become a talent show. Pass or write-only is allowed.",
      },
      {
        title: "Time-box and sample",
        body: "20 seconds each. Above 12, pairs then two volunteers, or chat waterfall the completions.",
      },
      {
        title: "Close without judging creativity",
        body: "Thank the room. Do not crown a funniest answer.",
      },
    ],
    variations: [
      {
        title: "Work stem",
        body: "If this sprint were weather, then…",
      },
      {
        title: "Chat only",
        body: "Everyone posts on three; two unmutes.",
      },
      {
        title: "Switch to One Word",
        body: "If hypotheticals freeze the room, use One Word Check-In.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "4–20; sample larger groups." },
      { label: "Time", body: "5–10 minutes." },
      { label: "Materials", body: "None; optional shared doc." },
      {
        label: "House rules",
        body: "Safe stems. Pass anytime. No roasting answers. No diagnosing people from metaphors.",
      },
    ],
    whyItWorks:
      "If-Then is a light imagination prompt with almost no biography. It fails when stems invite humiliation or when every person must perform in a huge room. Keep it shorter than Six Word Memoirs.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "Complete this stem in twenty seconds—or pass. If this meeting were a snack, then I would…",
      },
      {
        speaker: "Model",
        line: "If this meeting were a snack, then I would want pretzels. Plain on purpose.",
      },
      {
        speaker: "Play",
        line: "Pairs, then two volunteers—or type in chat.",
      },
      {
        speaker: "Close",
        line: "Thanks. Agenda time.",
      },
    ],
    pitfalls: [
      {
        title: "Therapy stems",
        body: "Do not ask people to complete trauma or family hypotheticals.",
      },
      {
        title: "Comedy pressure",
        body: "Model boring so quiet people are not boxed out.",
      },
    ],
    originalVariant: {
      title: "If-Then → need sticky (site original)",
      body: "After the silly stem, one work stem: “If we need one thing today, then…” People write the need on a sticky. Facilitator reads five. Imagination becomes a request list.",
    },
    adultsWork:
      "Workshops and classrooms. Formal boards: skip or use a work-only stem. Prefer Would You Rather Training for process tradeoffs.",
    faqs: [
      {
        q: "How do you play If-Then?",
        a: "People complete a safe “If… then…” stem in one short sentence, with pass allowed.",
      },
      {
        q: "How long does it take?",
        a: "About 5–10 minutes.",
      },
      {
        q: "Can it be virtual?",
        a: "Yes—chat completions work well.",
      },
      {
        q: "What stems should I avoid?",
        a: "Romance, body, money flexes, and anything that asks people to fix a coworker.",
      },
      {
        q: "Is it a personality test?",
        a: "No. Do not interpret answers as diagnoses.",
      },
    ],
    sources: [
      { label: "One Word Check-In", href: "/games/one-word-check-in" },
      { label: "Six-Word Memoirs", href: "/games/six-word-memoirs" },
      { label: "Ice breaker games for meetings", href: "/icebreaker-games-for-meetings" },
      { label: "Would You Rather Training", href: "/games/would-you-rather-training" },
    ],
  },

  "crazy-handshake": {
    howToSteps: [
      {
        title: "Make contact optional first",
        body: "Offer three lanes: a tiny seated gesture, an elbow/foot tap, or a no-contact air high-five. Nobody owes a handshake. Model the no-contact version.",
      },
      {
        title: "Pairs invent one repeatable move",
        body: "20–30 seconds to agree a short sequence (three beats max). Keep it work-safe—no grabbing, spinning, or lifting.",
      },
      {
        title: "Show once, then sit",
        body: "Two volunteer pairs demonstrate. Do not run a tournament. Large rooms: skip demos and just use the move as a later reconnection cue.",
      },
      {
        title: "Hygiene and space",
        body: "Open floor, no crowding. Illness season: default to no-contact.",
      },
    ],
    variations: [
      {
        title: "Air handshake only",
        body: "Default for workplaces and mixed-ability rooms.",
      },
      {
        title: "Name + gesture",
        body: "If you mainly need names, use Motion Name-Game instead.",
      },
      {
        title: "Virtual mute dance",
        body: "On-camera optional three-beat wave; cameras-off people type a beat pattern.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "8–30." },
      { label: "Time", body: "5–8 minutes." },
      { label: "Materials", body: "Open space; no props." },
      {
        label: "House rules",
        body: "No-contact option from the first sentence. No lifting. Pass anytime. Stop rough play immediately.",
      },
    ],
    whyItWorks:
      "Crazy Handshake is a short pairing energizer. It fails when handshakes are mandatory or when the room treats opt-outs as unsporting. Many work meetings should stay on the air-only variant or skip to Chat Waterfall.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "Invent a three-beat hello with a partner. Air high-five is the default. Real handshakes only if both people want them.",
      },
      {
        speaker: "Time",
        line: "Thirty seconds. No spinning people.",
      },
      {
        speaker: "Sample",
        line: "Two pairs show once. Everyone else can keep theirs private.",
      },
      {
        speaker: "Close",
        line: "Sit. We start.",
      },
    ],
    pitfalls: [
      {
        title: "Forced touch",
        body: "Lead with air-only. Never shame people who skip.",
      },
      {
        title: "Injury risk",
        body: "Ban lifts, dips, and running collisions.",
      },
    ],
    originalVariant: {
      title: "Handshake → reconnection cue (site original)",
      body: "Pairs keep only beat one as a silent “we’re back from break” cue. No more inventing. Turns a gimmick into a practical regroup signal.",
    },
    adultsWork:
      "Youth energizers and casual kickoffs. Formal client rooms: skip. Compare Human Knot alternatives if you wanted teamwork without touch.",
    faqs: [
      {
        q: "How do you play Crazy Handshake?",
        a: "Pairs invent a short, optional greeting move. Air high-fives count. Then you sit.",
      },
      {
        q: "Is touching required?",
        a: "No. Lead with a no-contact option.",
      },
      {
        q: "How long does it take?",
        a: "About 5–8 minutes.",
      },
      {
        q: "Is it okay for work?",
        a: "Only in casual rooms with an air-only default. Skip illness season and formal meetings.",
      },
      {
        q: "Can it be virtual?",
        a: "Yes with optional camera waves or typed beat patterns.",
      },
    ],
    sources: [
      { label: "Motion Name-Game", href: "/games/motion-name-game" },
      { label: "Games like the Human Knot", href: "/games-like-the-human-knot" },
      { label: "When to skip an icebreaker", href: "/when-to-skip-an-icebreaker" },
      { label: "Ice breaker games for youth group", href: "/icebreaker-games-for-youth-group" },
    ],
  },

  "helium-stick": {
    howToSteps: [
      {
        title: "Brief the physics joke",
        body: "Teams of 6–12 line up on two sides of a light rod or tape roll. Index fingers only, palms down, all touching the stick. Goal: lower it to the floor together. It often rises first because everyone lifts slightly—that is the lesson, not a prank on quiet people.",
      },
      {
        title: "Safety and opt-out",
        body: "No pressing down hard. No trapping fingers. Coach/observer roles for anyone who cannot stand close. Use a pool noodle or rolled paper if you lack a stick.",
      },
      {
        title: "Time-box and reset",
        body: "3–5 minutes per attempt, two attempts max. If it will not descend, pause and ask what each person is doing.",
      },
      {
        title: "Debrief process",
        body: "What assumption failed? Who called a pause? How is this like shipping without a shared plan? Keep debrief under four minutes.",
      },
    ],
    variations: [
      {
        title: "Seated table version",
        body: "Lower a ruler across a table with fingertips only.",
      },
      {
        title: "No stick",
        body: "Use Line-Up or Count Up if you cannot run physical teamwork.",
      },
      {
        title: "Silent round",
        body: "No talking for one attempt, then compare.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "6–12 per stick; multiple sticks for larger groups." },
      { label: "Time", body: "10–15 minutes including debrief." },
      { label: "Materials", body: "Light rod, noodle, or rolled paper." },
      {
        label: "House rules",
        body: "Fingertips only. Observer roles welcome. No blaming individuals. Stop if anyone is uncomfortable.",
      },
    ],
    whyItWorks:
      "Helium Stick is a teamwork constraint like knot games, without holding hands. It fails when the facilitator mocks people for “lifting” or when space is unsafe. Always debrief; otherwise it is just a fidget.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "Fingertips under the stick. Palms down. Lower it together. Observers are a full role.",
      },
      {
        speaker: "Play",
        line: "Begin. If it rises, that is data—not failure.",
      },
      {
        speaker: "Pause",
        line: "Freeze. What are we each doing? Try again once.",
      },
      {
        speaker: "Debrief",
        line: "What would a shared plan have sounded like? Then we start the real work.",
      },
    ],
    pitfalls: [
      {
        title: "Shaming lifters",
        body: "Name the system, not a person.",
      },
      {
        title: "No debrief",
        body: "Without a process talk, skip the activity.",
      },
    ],
    originalVariant: {
      title: "Stick → kickoff plan sticky (site original)",
      body: "Each person writes one “call a pause” phrase they want this team to use (hold, replay, smaller slice). Stickies become a working agreement beside the stick.",
    },
    adultsWork:
      "Training days and knot-alternative hubs. Not a first-minute stranger mixer without debrief time. Formal worship or client sales: skip.",
    faqs: [
      {
        q: "How do you play Helium Stick?",
        a: "A team rests a light rod on index fingers and tries to lower it together, then debriefs why it rose.",
      },
      {
        q: "What if we do not have a stick?",
        a: "Use a pool noodle, rolled paper, or switch to Line-Up.",
      },
      {
        q: "How long does it take?",
        a: "About 10–15 minutes with debrief.",
      },
      {
        q: "Is it like the Human Knot?",
        a: "Similar teamwork lesson, less contact. Still optional for anyone who does not want to stand in a cluster.",
      },
      {
        q: "Can it be virtual?",
        a: "Not well. Use Count Up or a shared-doc Line-Up instead.",
      },
    ],
    sources: [
      { label: "Games like the Human Knot", href: "/games-like-the-human-knot" },
      { label: "Line-Up", href: "/games/line-up" },
      { label: "Count Up", href: "/games/count-up" },
      { label: "Marshmallow Challenge", href: "/games/marshmallow-challenge" },
    ],
  },

  "apple-orange-and-banana": {
    howToSteps: [
      {
        title: "Assign three fruit labels",
        body: "Go around: apple, orange, banana, repeat. People may trade labels. Virtual: type the fruit in display names or chat. This is a listening energizer, not a food fight.",
      },
      {
        title: "Call one fruit to move",
        body: "When you call “oranges,” those people switch seats or raise hands. Keep aisles clear. Seated raise-hand version for mixed ability. No diving for chairs.",
      },
      {
        title: "Add a “fruit salad” round",
        body: "Everyone moves or raises hands once. Then stop. Two to four calls is enough.",
      },
      {
        title: "Sit before chaos",
        body: "Thank the room. Do not add elimination.",
      },
    ],
    variations: [
      {
        title: "Hands only",
        body: "No seat swapping—default for workplaces.",
      },
      {
        title: "Category swap",
        body: "Use tea/coffee/water if fruit feels childish.",
      },
      {
        title: "Virtual unmute",
        body: "Called fruit unmutes and says one word, then mutes.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "8–30." },
      { label: "Time", body: "3–8 minutes." },
      { label: "Materials", body: "Chairs with space, or none for hands-only." },
      {
        label: "House rules",
        body: "Walk, do not run. Seated option. No elimination. Pass = keep your seat.",
      },
    ],
    whyItWorks:
      "Apple Orange Banana is a noisy attention reset. It fails when people collide or when the room is too formal. Use hands-only at work. Prefer Chat Waterfall when cameras are off.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "You are an apple, orange, or banana. When I call your fruit, raise a hand—or walk to a new seat if we agreed on movement.",
      },
      {
        speaker: "Safety",
        line: "Walk. Seated is fine. No outs.",
      },
      {
        speaker: "Play",
        line: "Oranges. Apples. Fruit salad once.",
      },
      {
        speaker: "Close",
        line: "Hands down. Sit. Agenda.",
      },
    ],
    pitfalls: [
      {
        title: "Chair collisions",
        body: "Switch to hands-only at the first bump.",
      },
      {
        title: "Childish framing in client rooms",
        body: "Skip or rename categories.",
      },
    ],
    originalVariant: {
      title: "Fruit → attention cue (site original)",
      body: "Keep one fruit as a later “eyes up” cue: when the facilitator says bananas, everyone pauses side talk for five seconds. Energizer becomes a meeting signal.",
    },
    adultsWork:
      "Youth and classroom resets. Work: hands-only or skip. Not for grief or formal boards.",
    faqs: [
      {
        q: "How do you play Apple Orange and Banana?",
        a: "People get a fruit label. When their fruit is called they raise a hand or change seats. Stop after a few calls.",
      },
      {
        q: "Do people have to run?",
        a: "No. Hands-only is the safer default.",
      },
      {
        q: "How long does it take?",
        a: "About 3–8 minutes.",
      },
      {
        q: "Can it be virtual?",
        a: "Yes—called fruit unmutes briefly or types in chat.",
      },
      {
        q: "Is there elimination?",
        a: "No. Soft reset only.",
      },
    ],
    sources: [
      { label: "Train Wreck", href: "/games/train-wreck" },
      { label: "Ice breaker games for youth group", href: "/icebreaker-games-for-youth-group" },
      { label: "When to skip an icebreaker", href: "/when-to-skip-an-icebreaker" },
      { label: "Funny ice breaker games for meetings", href: "/funny-icebreaker-games-for-meetings" },
    ],
  },

  "bang": {
    howToSteps: [
      {
        title: "Prefer the no-elimination version",
        body: "Classic Bang is a pointing/elimination circle. For work and mixed ages, play “soft Bang”: people point on a count of three; if two people point at each other they both sit and cheer; nobody is out of the room. Pass = hands in lap.",
      },
      {
        title: "Screen the theme",
        body: "Use “point” or “beep,” not gun language, in schools and many workplaces. If the name Bang will upset anyone, rename the round.",
      },
      {
        title: "One short round",
        body: "Sixty to ninety seconds. Then sit. Do not hunt a last person standing.",
      },
      {
        title: "Skip when the room needs gravity",
        body: "Not for crisis, grief, or formal client calls.",
      },
    ],
    variations: [
      {
        title: "Beep circle",
        body: "Same timing, no firearm metaphor.",
      },
      {
        title: "Virtual mute point",
        body: "On three, people react with a hand emoji. No winners.",
      },
      {
        title: "Skip to RPS tournament",
        body: "If you want large-group energy with clearer rules, use Rock Paper Scissors Tournament.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "8–20." },
      { label: "Time", body: "2–5 minutes." },
      { label: "Materials", body: "None." },
      {
        label: "House rules",
        body: "Soft version. No mocking. Rename if gun language is a problem. Pass anytime.",
      },
    ],
    whyItWorks:
      "Bang is only useful as a tiny attention spike. Elimination versions shame people and the name can be a poor fit. Use soft scoring or skip. This page exists so the library URL is not a thin shell.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "Soft version—no one is out. On three, point at someone or keep hands down. If you do not want this game, sit it out.",
      },
      {
        speaker: "Play",
        line: "One, two, three.",
      },
      {
        speaker: "Close",
        line: "Laugh done. We start the real item.",
      },
    ],
    pitfalls: [
      {
        title: "Harsh outs",
        body: "Do not run last-person-standing at work or school.",
      },
      {
        title: "Wrong room",
        body: "Skip anywhere the metaphor or noise will land badly.",
      },
    ],
    originalVariant: {
      title: "Point → stack cue (site original)",
      body: "After one round, teach a non-violent stack: when someone wants to speak they point at themselves, not others. Replaces the gag with a turn-taking signal.",
    },
    adultsWork:
      "Youth energy only, and even then consider renaming. Most meetings should skip. See when-to-skip.",
    faqs: [
      {
        q: "How do you play Bang as an icebreaker?",
        a: "On a count of three people point; use a no-elimination version and skip gun language when it will not fit.",
      },
      {
        q: "Should workplaces play Bang?",
        a: "Usually no. If you need energy, pick Chat Waterfall or Rock Paper Scissors with cheer squads.",
      },
      {
        q: "How long does it take?",
        a: "Two to five minutes.",
      },
      {
        q: "Can I rename it?",
        a: "Yes. Beep or Point is often better.",
      },
      {
        q: "Is elimination required?",
        a: "No. Soft versions are the default here.",
      },
    ],
    sources: [
      { label: "When to skip an icebreaker", href: "/when-to-skip-an-icebreaker" },
      { label: "Rock Paper Scissors Tournament", href: "/games/rock-paper-scissors-tournament" },
      { label: "Pterodactyl", href: "/games/pterodactyl" },
      { label: "Ice breaker games for youth group", href: "/icebreaker-games-for-youth-group" },
    ],
  },

  "5-4-3-2-1-grounding-technique": {
    howToSteps: [
      {
        title: "Say this is a reset, not a game",
        body: "5-4-3-2-1 is a sensory countdown: five things you see, four you can touch, three you hear, two you smell, one you taste or one slow breath. People may keep answers private. Do not score, time-compete, or demand sharing.",
      },
      {
        title: "Offer a seated, eyes-open option",
        body: "Nobody has to close their eyes. Camera-off is fine. Pass any sense that is hard (smell/taste in a meeting).",
      },
      {
        title: "Lead slowly",
        body: "About 30–45 seconds per step. Facilitator models with ordinary office details (monitor, chair, HVAC, coffee, water).",
      },
      {
        title: "Do not treat it as therapy",
        body: "This is a meeting reset. If someone is in acute distress, stop the activity and follow your organization’s support path. You are not running clinical care.",
      },
    ],
    variations: [
      {
        title: "See-touch-hear only",
        body: "Skip smell and taste in shared rooms.",
      },
      {
        title: "Chat private list",
        body: "People type to themselves, not the channel.",
      },
      {
        title: "One Word instead",
        body: "If a countdown feels too intimate, use One Word Check-In.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "Any size; individual pace." },
      { label: "Time", body: "3–6 minutes." },
      { label: "Materials", body: "None." },
      {
        label: "House rules",
        body: "Private answers. No sharing required. Skip senses that are inaccessible. Not a diagnosis tool.",
      },
    ],
    whyItWorks:
      "Used gently, 5-4-3-2-1 can slow a rattled room before a hard agenda. It fails when it is sold as a party icebreaker or when people are forced to disclose. Skip it as entertainment.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "Optional reset. Keep answers to yourself. Five things you can see—ordinary is perfect.",
      },
      {
        speaker: "Lead",
        line: "Four you can touch. Three you can hear. Skip smell or taste if you want. One slow breath.",
      },
      {
        speaker: "Close",
        line: "Whenever you are ready, we start the next item. No share-out.",
      },
    ],
    pitfalls: [
      {
        title: "Forced sharing",
        body: "Never go around the circle with sensory lists.",
      },
      {
        title: "Clinical overclaim",
        body: "Do not call this treatment or quote unverified success rates.",
      },
    ],
    originalVariant: {
      title: "Grounding → agenda breath (site original)",
      body: "After the countdown, one silent 10-second look at the written agenda. Marks the shift from reset to work without a second icebreaker.",
    },
    adultsWork:
      "Meetings after bad news or high tension, if people can opt out. Classrooms: keep it optional. Not a youth party game. See when-to-skip if the room needs professional support instead of an activity.",
    faqs: [
      {
        q: "How do you run 5-4-3-2-1 grounding in a meeting?",
        a: "Lead a quiet sensory countdown. Answers stay private. Skip any sense that is hard. Do not turn it into a share-out game.",
      },
      {
        q: "Is this an icebreaker game?",
        a: "Treat it as an optional reset, not entertainment.",
      },
      {
        q: "How long does it take?",
        a: "About 3–6 minutes.",
      },
      {
        q: "Can it be virtual?",
        a: "Yes. Cameras off. No chat dump of private lists.",
      },
      {
        q: "What if someone is very distressed?",
        a: "Stop the exercise and follow your workplace or school support process. This page is not medical advice.",
      },
    ],
    sources: [
      { label: "When to skip an icebreaker", href: "/when-to-skip-an-icebreaker" },
      { label: "One Word Check-In", href: "/games/one-word-check-in" },
      { label: "Weather Check-In", href: "/games/weather-check-in" },
      { label: "Ice breaker games for meetings", href: "/icebreaker-games-for-meetings" },
    ],
  },

  "group-map": {
    howToSteps: [
      {
        title: "Pick a map that is not an origin audit",
        body: "Use a blank world/country outline, a campus map, or a “places we choose” slide. People drop an optional pin for a hometown they want to name, a city they work from, or a favorite park. Ban “point to where your family is really from.”",
      },
      {
        title: "Silent gallery first",
        body: "Two minutes of pinning. Speaking is optional. Virtual: collaborative slide or chat city names.",
      },
      {
        title: "Harvest clusters, not biographies",
        body: "Facilitator names two clusters (time zones, neighborhoods) useful for the meeting. Do not quiz people on culture.",
      },
      {
        title: "Offer a non-place option",
        body: "A “remote / no pin” box counts as full participation.",
      },
    ],
    variations: [
      {
        title: "Time-zone map only",
        body: "Safer for distributed work.",
      },
      {
        title: "Skills map",
        body: "Pin tools you can help with instead of geography.",
      },
      {
        title: "Use the hometown page",
        body: "If you want spoken “famous thing” stories, use Where Do We Come From instead of a second geography shell.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "6–40." },
      { label: "Time", body: "8–12 minutes." },
      { label: "Materials", body: "Printed or digital map; stickers or pins." },
      {
        label: "House rules",
        body: "Optional pins. No ancestry interrogation. No-pin box. No ranking cities.",
      },
    ],
    whyItWorks:
      "Group Map shows where people choose to locate themselves for the session. It fails when it becomes passport control. Keep it operational (time zones, offices) when trust is low.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "Drop an optional pin for a place you choose—or use the no-pin box. We will not ask follow-up origin questions.",
      },
      {
        speaker: "Silent",
        line: "Two minutes. No need to speak.",
      },
      {
        speaker: "Harvest",
        line: "I see two time-zone clusters. That will shape our breaks.",
      },
      {
        speaker: "Close",
        line: "Map stays up as a reference. Agenda starts.",
      },
    ],
    pitfalls: [
      {
        title: "Really-from questions",
        body: "Shut them down the same way as on the hometown page.",
      },
      {
        title: "Forced travel stories",
        body: "Pins are enough.",
      },
    ],
    originalVariant: {
      title: "Map → working-hours legend (site original)",
      body: "Add a tiny legend: morning / afternoon overlap. People who want to can mark a window, not a life story. Geography becomes hybrid logistics.",
    },
    adultsWork:
      "Distributed teams and conferences. Church visitors: optional pins only. Distinct from spoken hometown shares.",
    faqs: [
      {
        q: "How do you play Group Map?",
        a: "People optionally pin a chosen place on a shared map. Harvest clusters for the session. No origin interrogation.",
      },
      {
        q: "How is it different from Where Do We Come From?",
        a: "Group Map is mostly silent pins. The other page is a spoken “one famous thing” share.",
      },
      {
        q: "How long does it take?",
        a: "About 8–12 minutes.",
      },
      {
        q: "Can it be virtual?",
        a: "Yes—collaborative slides or chat city names.",
      },
      {
        q: "What if someone does not want to share a place?",
        a: "Use the no-pin box. That is full participation.",
      },
    ],
    sources: [
      { label: "Where Do We Come From, What Is Famous", href: "/games/where-do-we-come-from-what-is-famous" },
      { label: "Ice breaker games for work", href: "/icebreaker-games-for-work" },
      { label: "Virtual ice breaker games", href: "/virtual-icebreaker-games" },
      { label: "When to skip an icebreaker", href: "/when-to-skip-an-icebreaker" },
    ],
  },

  "christmas-pick-a-side": {
    howToSteps: [
      {
        title: "Write binary preference prompts",
        body: "Prepare 8–12 either/or holiday questions: lights or candles; early gifts or morning-of; movies or music while cooking. Avoid faith tests, grief, money, and “who you spend Christmas with.” Label the deck winter/year-end when the room is mixed-faith.",
      },
      {
        title: "Show left and right",
        body: "Point to two walls or sides of a table. Seated hand-raise works in tight dining rooms. Announce pass: stay center or keep hands down.",
      },
      {
        title: "Run quick rounds",
        body: "Read a prompt. People move or raise hands. Sample one voice per side for 10 seconds. Six to ten prompts is enough—stop while energy is high.",
      },
      {
        title: "Close without a winner",
        body: "Name one pattern (“this room likes early gifts”) and release to food or the agenda. Do not score Christmas spirit.",
      },
    ],
    variations: [
      {
        title: "Winter-holiday deck",
        body: "Soup or stew; indoor New Year or outdoor walk. Default for workplaces.",
      },
      {
        title: "Chat A/B (virtual)",
        body: "Everyone types A or B on three. Two short unmutes.",
      },
      {
        title: "Seated only",
        body: "Left hand vs right hand—no movement around furniture.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "8–40." },
      { label: "Time", body: "8–12 minutes." },
      { label: "Materials", body: "Prompt list; clear left/right markers optional." },
      {
        label: "House rules",
        body: "Pass anytime. Inclusive prompts. No religion or family-status questions. Soft volume near tables.",
      },
    ],
    whyItWorks:
      "Christmas Pick a Side is Would You Rather with a holiday deck—fast preference polling without life stories. It fails when prompts assume everyone celebrates the same way. Prefer Christmas Connection when you want mingling clusters instead of binary sides.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "Holiday preferences only—not a faith quiz. Pass by staying center. Left is lights, right is candles.",
      },
      {
        speaker: "Sample",
        line: "One sentence from lights. One from candles. Next prompt.",
      },
      {
        speaker: "Close",
        line: "Last one. Sit for dinner—or agenda.",
      },
    ],
    pitfalls: [
      {
        title: "Faith-assuming prompts",
        body: "Swap church/family questions for food, weather, and gift timing.",
      },
      {
        title: "Furniture chaos",
        body: "Use seated hands near a set table.",
      },
    ],
    originalVariant: {
      title: "Pick → playlist sticky (site original)",
      body: "After three music-or-movie rounds, each person writes one song or film title on a sticky for a shared holiday playlist. Binary votes become a concrete party artifact.",
    },
    adultsWork:
      "Office parties and mixed dinners. Say winter deck out loud. Compare Christmas Connection for mingle clusters. Table follow-ups: Christmas table icebreaker games blog.",
    faqs: [
      {
        q: "How do you play Christmas Pick a Side?",
        a: "Read either/or holiday prompts. People move or raise hands to a side, share one optional sentence, then sit.",
      },
      {
        q: "What if guests do not celebrate Christmas?",
        a: "Use winter or year-end prompts and say so in the open.",
      },
      {
        q: "How long does it take?",
        a: "About 8–12 minutes.",
      },
      {
        q: "How is it different from Christmas Connection?",
        a: "Pick a Side is binary room polls. Connection is a mingle that builds small matching clusters.",
      },
      {
        q: "Can it be virtual?",
        a: "Yes—A/B in chat with two short unmutes.",
      },
    ],
    sources: [
      { label: "Christmas Connection", href: "/games/christmas-connection" },
      { label: "Would You Rather", href: "/games/would-you-rather" },
      { label: "Christmas table icebreaker games", href: "/blog/christmas-table-icebreaker-games" },
      { label: "This or That Questions", href: "/games/this-or-that-questions" },
    ],
  },

  "christmas-roll-poll": {
    howToSteps: [
      {
        title: "Map die faces to holiday prompts",
        body: "1–6 might be: a snack you like; a winter weather take; a movie or song; a gift-wrapping habit; a year-end hope for work; a pass/re-roll. Screen out grief, money, and faith tests. Virtual: on-screen roller.",
      },
      {
        title: "Roll and answer briefly",
        body: "Each person rolls once, answers in 20 seconds, or re-rolls once / passes. Model a boring answer.",
      },
      {
        title: "Sample large rooms",
        body: "Above 12: breakouts of four or facilitator rolls for the table and anyone may answer.",
      },
      {
        title: "Stop after one pass",
        body: "Put the die away before dessert speeches start.",
      },
    ],
    variations: [
      {
        title: "Winter deck only",
        body: "No Christmas-specific faces for mixed-faith tables.",
      },
      {
        title: "Candy-cane dial",
        body: "Spin a bottle or numbered slips if you lack a die.",
      },
      {
        title: "Work year-end die",
        body: "All faces about the project year, not holidays.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "4–20; sample larger groups." },
      { label: "Time", body: "8–12 minutes." },
      { label: "Materials", body: "One die or digital roller; prompt card." },
      {
        label: "House rules",
        body: "Pass and one re-roll. Inclusive prompts. No drinking-game energy. Keep answers short.",
      },
    ],
    whyItWorks:
      "Christmas Roll Poll is Dicebreakers with a seasonal deck—random prompts without inventing a fun fact. It fails when faces dig into family loss or status gifts. Prefer Pick a Side for whole-room energy.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "Roll once. Answer the matching prompt in twenty seconds—or pass / re-roll. Winter prompts are fine.",
      },
      {
        speaker: "Model",
        line: "I rolled snack. Pretzels. Next.",
      },
      {
        speaker: "Close",
        line: "Die down. Food or agenda.",
      },
    ],
    pitfalls: [
      {
        title: "Grief prompts",
        body: "Never “hardest Christmas.” Keep taste and habits.",
      },
      {
        title: "Full-table marathon",
        body: "Sample volunteers at long banquet tables.",
      },
    ],
    originalVariant: {
      title: "Roll → toast word (site original)",
      body: "After social rolls, one final roll against a toast die (thanks, rest, humor, health, teamwork, curiosity). The table uses that single word for a 10-second optional toast—no speeches.",
    },
    adultsWork:
      "Office parties and seated dinners. Link Dicebreakers for non-seasonal use. Allergy-safe rooms: no candy stakes.",
    faqs: [
      {
        q: "How do you play Christmas Roll Poll?",
        a: "Map a die to six holiday-safe prompts. People roll, answer briefly, or pass / re-roll.",
      },
      {
        q: "Do I need a Christmas die?",
        a: "No—any die plus a prompt card works.",
      },
      {
        q: "How long does it take?",
        a: "About 8–12 minutes.",
      },
      {
        q: "How is it different from Dicebreakers?",
        a: "Same mechanic; this page is the seasonal prompt deck and dinner pacing.",
      },
      {
        q: "Can it be virtual?",
        a: "Yes with an on-screen roller and chat answers.",
      },
    ],
    sources: [
      { label: "Dicebreakers", href: "/games/dicebreakers" },
      { label: "Christmas Pick a Side", href: "/games/christmas-pick-a-side" },
      { label: "Christmas table icebreaker games", href: "/blog/christmas-table-icebreaker-games" },
      { label: "Christmas Connection", href: "/games/christmas-connection" },
    ],
  },

  "the-great-christmas-candy-pass": {
    howToSteps: [
      {
        title: "Allergy-first setup",
        body: "Put sealed candy or allergen-labeled bowls on the table. Always offer a non-food token (paper chip, sticker). Nobody must eat. Announce ingredients if known. Virtual: skip physical pass—use emoji pass in chat.",
      },
      {
        title: "Explain the pass rule",
        body: "Music or a story plays. People pass a wrapped candy or token left. When music stops, the person holding it keeps it or swaps for a prompt chip. Soft win—no elimination.",
      },
      {
        title: "Optional micro-share",
        body: "If the chip has a light prompt, answer in 15 seconds or pass. Ban deep-memory chips for visitor tables.",
      },
      {
        title: "Reset and stop",
        body: "Two or three music stops max. Clear wrappers before the next course.",
      },
    ],
    variations: [
      {
        title: "Token-only night",
        body: "No food—stickers or paper stars only.",
      },
      {
        title: "Seated story pass",
        body: "Pass a small ornament while someone reads a short winter poem; stop on a bell.",
      },
      {
        title: "Chat candy (virtual)",
        body: "Pass an emoji left in a name list; when the host says stop, that person shares or passes.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "6–20 per table." },
      { label: "Time", body: "8–12 minutes." },
      { label: "Materials", body: "Wrapped candy or tokens; music or bell; allergy labels." },
      {
        label: "House rules",
        body: "Non-food option visible. No forced eating. Soft stops. Clean prompts only.",
      },
    ],
    whyItWorks:
      "Candy Pass is a classic table energizer when allergies and consent are handled. It fails when food is mandatory or prompts turn into grief shares. Prefer token-only for workplaces.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "Candy or paper tokens—your choice. Pass left while the music plays. Nobody has to eat.",
      },
      {
        speaker: "Stop",
        line: "Music stop. Keep, swap, or pass the prompt. Fifteen seconds.",
      },
      {
        speaker: "Close",
        line: "Wrappers cleared. Next course—or agenda.",
      },
    ],
    pitfalls: [
      {
        title: "Hidden allergens",
        body: "Label bowls or go token-only.",
      },
      {
        title: "Forced eating",
        body: "Tokens count as full participation.",
      },
    ],
    originalVariant: {
      title: "Pass → gratitude chip (site original)",
      body: "Final stop: everyone who wants to keeps a blank chip and writes one ordinary thanks (a coworker, a rest day). Chips stay private unless volunteered—candy game becomes a quiet close.",
    },
    adultsWork:
      "Holiday dinners and youth nights. Offices: token-only. See Skittles Sharing for color-prompt cousins without Christmas branding.",
    faqs: [
      {
        q: "How do you play The Great Christmas Candy Pass?",
        a: "Pass candy or tokens while music plays; when it stops, keep, swap, or answer a light prompt. Non-food options required.",
      },
      {
        q: "What about allergies?",
        a: "Label food or use paper tokens only. Never require eating.",
      },
      {
        q: "How long does it take?",
        a: "About 8–12 minutes.",
      },
      {
        q: "Can it be virtual?",
        a: "Yes—emoji pass in a name order with a host stop call.",
      },
      {
        q: "Is elimination required?",
        a: "No. Soft stops only.",
      },
    ],
    sources: [
      { label: "Skittles Sharing", href: "/games/skittles-sharing" },
      { label: "Christmas table icebreaker games", href: "/blog/christmas-table-icebreaker-games" },
      { label: "Christmas Connection", href: "/games/christmas-connection" },
      { label: "When to skip an icebreaker", href: "/when-to-skip-an-icebreaker" },
    ],
  },

  "guess-the-gift-by-sound": {
    howToSteps: [
      {
        title: "Prep safe mystery items",
        body: "Wrap ordinary objects that make distinct sounds when shaken: rice in a box, bells, paper clips, a deck of cards. Ban breakables, liquids, and anything that could offend. Label allergens if food is inside.",
      },
      {
        title: "Shake and guess",
        body: "One volunteer shakes. Group guesses in chat or aloud. Reveal after 30–60 seconds. Soft scoring—no shame for misses.",
      },
      {
        title: "Sample, do not marathon",
        body: "Three to five items for an icebreaker. Large rooms: breakouts with duplicate kits.",
      },
      {
        title: "Reset for dinner",
        body: "Unwrap away from food plates. Thank guessers.",
      },
    ],
    variations: [
      {
        title: "Sound-only video call",
        body: "Volunteer shakes off camera; others guess in chat.",
      },
      {
        title: "Office supply edition",
        body: "Stapler box, binder clips—no holiday branding needed.",
      },
      {
        title: "No wrap",
        body: "Opaque bags if wrapping time is short.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "6–30." },
      { label: "Time", body: "8–12 minutes." },
      { label: "Materials", body: "3–5 wrapped sound-makers." },
      {
        label: "House rules",
        body: "Soft guesses. No forced volunteering. Keep contents work-safe. Allergy labels if edible.",
      },
    ],
    whyItWorks:
      "Guess the Gift by Sound is low-disclosure play—curiosity without life stories. It fails when items are fragile or when volunteering is mandatory. Great between courses.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "I will shake a wrapped item. Guess in chat or aloud. Soft scoring—no winners required.",
      },
      {
        speaker: "Reveal",
        line: "Here it is. Next item—or we stop at three.",
      },
      {
        speaker: "Close",
        line: "Thanks. Food stays clean—wrappers away.",
      },
    ],
    pitfalls: [
      {
        title: "Breakables",
        body: "Test shakes before the party.",
      },
      {
        title: "Long reveal speeches",
        body: "Name the item and move on.",
      },
    ],
    originalVariant: {
      title: "Sound → desk guess (site original)",
      body: "After two holiday items, one office-supply shake. Winner (or volunteer) names one tool the team should use more next year—bridges party play to a light year-end note.",
    },
    adultsWork:
      "Parties and virtual socials. Classrooms: school-safe objects only. Prefer Remote Change 3 Things if you want camera observation instead of props.",
    faqs: [
      {
        q: "How do you play Guess the Gift by Sound?",
        a: "Shake a wrapped item; the group guesses what is inside; reveal and repeat a few times.",
      },
      {
        q: "How long does it take?",
        a: "About 8–12 minutes.",
      },
      {
        q: "Can it be virtual?",
        a: "Yes—shake off camera and collect guesses in chat.",
      },
      {
        q: "What objects work well?",
        a: "Dry, durable items with distinct sounds. Avoid glass and unmarked food.",
      },
      {
        q: "Do you need real gifts?",
        a: "No. Ordinary household or office items are better.",
      },
    ],
    sources: [
      { label: "Ornament Guess", href: "/games/ornament-guess" },
      { label: "Remote Change 3 Things", href: "/games/remote-change-3-things" },
      { label: "Christmas table icebreaker games", href: "/blog/christmas-table-icebreaker-games" },
      { label: "Free fun icebreaker games", href: "/free-fun-icebreaker-games" },
    ],
  },

  "share-a-favorite-holiday-memory": {
    howToSteps: [
      {
        title: "Warn that memories can be heavy",
        body: "Say in the open: light memories only—or pass. Offer a present-tense alternative (“a holiday snack you like this year”). Never require childhood stories. Grief and lonely holidays are common; pass is success.",
      },
      {
        title: "Time-box shares",
        body: "30–45 seconds. Pairs first in rooms above 10, then two volunteers in main. Write-only sticky counts.",
      },
      {
        title: "Model a mild memory",
        body: "Facilitator goes first with something ordinary (a song, a cookie, a walk). No tragedy fishing.",
      },
      {
        title: "Close kindly",
        body: "Thank sharers. Do not force a group hug or testimony.",
      },
    ],
    variations: [
      {
        title: "Favorite winter moment",
        body: "Inclusive for mixed-faith tables.",
      },
      {
        title: "This-year only",
        body: "No childhood required.",
      },
      {
        title: "Sticky gallery",
        body: "Write and post; speaking optional.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "4–16; sample larger groups." },
      { label: "Time", body: "8–15 minutes." },
      { label: "Materials", body: "Optional stickies." },
      {
        label: "House rules",
        body: "Pass anytime. Light content. No digging. Write-only is full participation.",
      },
    ],
    whyItWorks:
      "Favorite Holiday Memory can warm a trusted table—and harm a mixed room if forced. It fails when facilitators treat pass as unsporting. Prefer Pick a Side or Connection for low-trust parties.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "Optional: a light holiday or winter memory—or a snack you like this year. Pass or write-only is fine.",
      },
      {
        speaker: "Model",
        line: "I liked the first cold walk with headphones this December. Thirty seconds.",
      },
      {
        speaker: "Close",
        line: "Thanks. No more stories unless you want them at dinner.",
      },
    ],
    pitfalls: [
      {
        title: "Grief landmines",
        body: "Offer the this-year alternative before anyone speaks.",
      },
      {
        title: "Long monologues",
        body: "Ring a 45-second bell.",
      },
    ],
    originalVariant: {
      title: "Memory → present hope sticky (site original)",
      body: "After optional shares, everyone who wants to writes one ordinary hope for the next month (rest, walk, cook). Board becomes forward-looking without more autobiography.",
    },
    adultsWork:
      "Trusted family tables and church small groups with visitor-safe framing. Work parties: prefer preference games. See when-to-skip if the room is raw.",
    faqs: [
      {
        q: "How do you run Share a Favorite Holiday Memory?",
        a: "Invite optional light memories with a clear pass and a this-year alternative, time-box shares, and avoid digging.",
      },
      {
        q: "Is it okay for work holiday parties?",
        a: "Often better to use Pick a Side or Christmas Connection instead—memories can be heavy.",
      },
      {
        q: "How long does it take?",
        a: "About 8–15 minutes.",
      },
      {
        q: "What if someone gets emotional?",
        a: "Thank them, offer a break, and do not force the circle to continue sharing.",
      },
      {
        q: "Can it be virtual?",
        a: "Yes—pairs in breakouts or write-only stickies in a doc.",
      },
    ],
    sources: [
      { label: "When to skip an icebreaker", href: "/when-to-skip-an-icebreaker" },
      { label: "Christmas Connection", href: "/games/christmas-connection" },
      { label: "Year of the Coin", href: "/games/year-of-the-coin" },
      { label: "Christmas table icebreaker games", href: "/blog/christmas-table-icebreaker-games" },
    ],
  },

  "whats-on-your-phone-christmas-edition": {
    howToSteps: [
      {
        title: "Privacy first",
        body: "Nobody must unlock a phone or show a screen. Camera-off and “I pass” are full success. Ban screenshots of other people’s phones. Offer a non-phone alternative: describe a playlist or a photo you would take.",
      },
      {
        title: "Give a seasonal, optional prompt",
        body: "Examples: a photo that feels like winter; a song in your recent list; a note app grocery item. Not: passwords, messages, dating apps, medical apps.",
      },
      {
        title: "Share in pairs or samples",
        body: "Pairs for 2 minutes, then two volunteers. Large rooms: breakouts. Keep shares under 20 seconds.",
      },
      {
        title: "Reset screens",
        body: "Phones down before the agenda or dinner toast.",
      },
    ],
    variations: [
      {
        title: "Wallpaper only",
        body: "Show lock screen art if people want—still optional.",
      },
      {
        title: "No-phone night",
        body: "Draw a quick doodle of a “phone photo” instead.",
      },
      {
        title: "Year-end work edition",
        body: "A screenshot of a non-sensitive project emoji reaction—never confidential docs.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "4–20; sample larger groups." },
      { label: "Time", body: "6–10 minutes." },
      { label: "Materials", body: "Phones optional." },
      {
        label: "House rules",
        body: "Pass anytime. No peeking at notifications. No screenshots of others. Work-safe content only.",
      },
    ],
    whyItWorks:
      "Phone Christmas Edition can be a fun visual share when privacy is respected. It fails when people feel audited. Prefer Picture Sharing or Chat Waterfall when trust is low.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "Optional: show or describe one winter-feeling photo or song. Pass is fine. No one looks at your notifications.",
      },
      {
        speaker: "Pairs",
        line: "Two minutes. Then phones down.",
      },
      {
        speaker: "Close",
        line: "Two volunteers if they want. Screens away.",
      },
    ],
    pitfalls: [
      {
        title: "Notification leaks",
        body: "Ask people to open airplane mode or a specific album first.",
      },
      {
        title: "Forced unlock",
        body: "Description-only is enough.",
      },
    ],
    originalVariant: {
      title: "Phone → playlist add (site original)",
      body: "Volunteers who shared a song paste the title into a shared doc for a party playlist. Photos stay private—only music titles travel.",
    },
    adultsWork:
      "Casual holiday socials. Skip in high-security workplaces. Virtual: same privacy rules. Link Picture Sharing for camera-optional object shares.",
    faqs: [
      {
        q: "How do you play What’s on Your Phone Christmas Edition?",
        a: "Optionally share a holiday-safe photo or song from your phone—or describe it. Pass anytime.",
      },
      {
        q: "Do I have to unlock my phone?",
        a: "No. Descriptions count.",
      },
      {
        q: "How long does it take?",
        a: "About 6–10 minutes.",
      },
      {
        q: "Is it okay for work?",
        a: "Only with strict privacy rules and no confidential content.",
      },
      {
        q: "What should people avoid showing?",
        a: "Messages, IDs, medical apps, and other people’s faces without consent.",
      },
    ],
    sources: [
      { label: "Picture Sharing", href: "/games/picture-sharing" },
      { label: "Virtual Background Story", href: "/games/virtual-background-story" },
      { label: "Christmas Connection", href: "/games/christmas-connection" },
      { label: "When to skip an icebreaker", href: "/when-to-skip-an-icebreaker" },
    ],
  },

  "ornament-guess": {
    howToSteps: [
      {
        title: "Frame as meaningful object, not Christmas test",
        body: "People may bring an ornament, a winter object, or any small meaningful item. Mixed-faith rooms: say “object guess” up front. Pass or use a neutral mug.",
      },
      {
        title: "Clue then guess",
        body: "Owner gives a one-sentence clue. Group guesses what it represents. Reveal in 20–30 seconds. Soft scoring.",
      },
      {
        title: "Sample large rooms",
        body: "Four to six objects max. Breakouts of four for bigger parties.",
      },
      {
        title: "No status commentary",
        body: "Shut down comments about cost or “real Christmas.”",
      },
    ],
    variations: [
      {
        title: "Photo ornament (virtual)",
        body: "Show an object on camera or describe it in chat.",
      },
      {
        title: "Office desk object",
        body: "Year-end without holiday branding.",
      },
      {
        title: "Clue-only sticky",
        body: "Write the clue; others guess before the reveal table.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "6–20; sample larger groups." },
      { label: "Time", body: "10–15 minutes." },
      { label: "Materials", body: "Optional ornaments or small objects." },
      {
        label: "House rules",
        body: "Pass anytime. Inclusive framing. No wealth talk. Kind guesses.",
      },
    ],
    whyItWorks:
      "Ornament Guess creates curiosity with a short reveal. It fails when objects become a tradition contest. Keep clues light; prefer Guess the Gift by Sound when people have no objects.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "Optional object or ornament. One-sentence clue. Pass is fine. Winter objects welcome.",
      },
      {
        speaker: "Play",
        line: "Guess kindly. Twenty seconds. Reveal.",
      },
      {
        speaker: "Close",
        line: "Four objects is enough. Thanks.",
      },
    ],
    pitfalls: [
      {
        title: "Faith pressure",
        body: "Rename to object guess when needed.",
      },
      {
        title: "Long origin stories",
        body: "Cap reveals at 30 seconds.",
      },
    ],
    originalVariant: {
      title: "Ornament → wish tag (site original)",
      body: "After reveals, volunteers write one forward wish on a paper tag and hang it on a shared tree or board—no more storytelling required.",
    },
    adultsWork:
      "Holiday socials and table parties. Work: desk-object variant. See Christmas table blog for seated follow-ups.",
    faqs: [
      {
        q: "How do you play Ornament Guess?",
        a: "Someone shows an ornament or object with a short clue; the group guesses; then the owner reveals the meaning.",
      },
      {
        q: "What if someone does not celebrate Christmas?",
        a: "Use any meaningful winter or desk object—or pass.",
      },
      {
        q: "How long does it take?",
        a: "About 10–15 minutes.",
      },
      {
        q: "Can it be virtual?",
        a: "Yes—camera or chat description.",
      },
      {
        q: "Do we need real ornaments?",
        a: "No. Any small object works.",
      },
    ],
    sources: [
      { label: "Guess the Gift by Sound", href: "/games/guess-the-gift-by-sound" },
      { label: "Christmas table icebreaker games", href: "/blog/christmas-table-icebreaker-games" },
      { label: "Christmas Connection", href: "/games/christmas-connection" },
      { label: "Show and Tell", href: "/games/show-and-tell" },
    ],
  },

  "holiday-bingo": {
    howToSteps: [
      {
        title: "Build inclusive squares",
        body: "Prompts: likes peppermint; has a winter playlist; prefers soup in cold weather; wrapped a gift this month. Ban faith tests, travel-flex squares, and grief prompts. Soft line wins.",
      },
      {
        title: "Mingle with real questions",
        body: "Signatures after a short question. Pass any square. First line gets a cheer—not a sermon.",
      },
      {
        title: "Time-box",
        body: "10–15 minutes. Harvest two interesting humans met—not full cards.",
      },
      {
        title: "Winter rename",
        body: "Call it Winter Bingo when Christmas branding excludes guests.",
      },
    ],
    variations: [
      {
        title: "Four corners only",
        body: "Shorter parties.",
      },
      {
        title: "Seated table bingo",
        body: "Ask neighbors only—no floor mingle.",
      },
      {
        title: "Virtual chat bingo",
        body: "Claim squares in chat with a one-line example.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "10–40." },
      { label: "Time", body: "12–20 minutes." },
      { label: "Materials", body: "Printed or digital cards." },
      {
        label: "House rules",
        body: "Inclusive squares. Pass anytime. Soft wins. No identity or faith interrogation.",
      },
    ],
    whyItWorks:
      "Holiday Bingo is Human Bingo with a seasonal deck. It fails when squares police who “does Christmas right.” Prefer Icebreaker Bingo templates for custom events.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "Winter-safe squares. Ask real questions. Pass anytime. First line gets a cheer.",
      },
      {
        speaker: "Close",
        line: "Two shares of someone interesting you met. Cards down.",
      },
    ],
    pitfalls: [
      {
        title: "Tradition police",
        body: "Delete squares that assume church, kids, or big travel budgets.",
      },
      {
        title: "Blackout pressure",
        body: "Celebrate a single line.",
      },
    ],
    originalVariant: {
      title: "Bingo → cocoa bar jobs (site original)",
      body: "Winners and volunteers claim a party job sticky (playlist, coats, dessert labels). Mixer becomes hospitality staffing without another announcement.",
    },
    adultsWork:
      "Office parties and community nights. Link Human Bingo and Icebreaker Bingo for non-seasonal decks.",
    faqs: [
      {
        q: "How do you play Holiday Bingo?",
        a: "Mingle with a seasonal bingo card, ask questions, collect signatures, and celebrate soft line wins.",
      },
      {
        q: "How is it different from Human Bingo?",
        a: "Same mechanic; this page is the holiday/winter prompt deck and inclusion notes.",
      },
      {
        q: "How long does it take?",
        a: "About 12–20 minutes.",
      },
      {
        q: "Can it be virtual?",
        a: "Yes with chat claims.",
      },
      {
        q: "What squares should I avoid?",
        a: "Faith tests, expensive travel, and family-status prompts.",
      },
    ],
    sources: [
      { label: "Human Bingo", href: "/games/human-bingo" },
      { label: "Icebreaker Bingo", href: "/games/icebreaker-bingo" },
      { label: "Games like Human Bingo", href: "/games-like-human-bingo" },
      { label: "Christmas Connection", href: "/games/christmas-connection" },
    ],
  },

  "holiday-fortunes": {
    howToSteps: [
      {
        title: "Write kind, optional fortunes",
        body: "Paper slips with light year-end wishes or silly predictions (“you will find a good playlist”). Ban medical, romantic, or doom fortunes. People may redraw once or pass.",
      },
      {
        title: "Draw and decide",
        body: "Read aloud, paraphrase, or keep private. 15 seconds. No forced performance.",
      },
      {
        title: "One round",
        body: "Above 12, sample six drawers or use table bowls.",
      },
      {
        title: "Dispose respectfully",
        body: "Recycle slips; do not leave personal notes behind.",
      },
    ],
    variations: [
      {
        title: "Gratitude fortunes only",
        body: "Each slip starts with “notice…”",
      },
      {
        title: "Work Q1 fortunes",
        body: "Process hopes, not mysticism.",
      },
      {
        title: "Virtual randomizer",
        body: "Host pastes a fortune from a list; recipient may pass.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "6–30." },
      { label: "Time", body: "6–10 minutes." },
      { label: "Materials", body: "Bowl of screened slips." },
      {
        label: "House rules",
        body: "Pass and redraw. Kind content only. Private reading allowed.",
      },
    ],
    whyItWorks:
      "Holiday Fortunes is a tiny novelty opener. It fails when slips feel like mockery or prophecy pressure. Keep it shorter than a memory circle.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "Draw a light fortune—or pass. Read aloud or keep it. Redraw once if you want.",
      },
      {
        speaker: "Close",
        line: "Slips away. We eat—or we start.",
      },
    ],
    pitfalls: [
      {
        title: "Mean jokes",
        body: "Facilitator screens every slip.",
      },
      {
        title: "Overclaiming",
        body: "Call them wishes, not destiny.",
      },
    ],
    originalVariant: {
      title: "Fortune → one action (site original)",
      body: "Anyone who wants to writes one tiny action implied by their fortune (send a thanks, take a walk). Actions stay private unless shared—novelty becomes agency.",
    },
    adultsWork:
      "Parties and youth nights. Work: Q1 process fortunes. Skip if superstition will offend; use One Word Check-In instead.",
    faqs: [
      {
        q: "How do you play Holiday Fortunes?",
        a: "People draw a screened wish/fortune slip, may pass or redraw, and optionally read it aloud.",
      },
      {
        q: "How long does it take?",
        a: "About 6–10 minutes.",
      },
      {
        q: "What should fortunes avoid?",
        a: "Romance pressure, health claims, and cruel jokes.",
      },
      {
        q: "Can it be virtual?",
        a: "Yes—host assigns a random line from a list.",
      },
      {
        q: "Is it religious?",
        a: "Keep slips secular and optional unless your community asked for faith-specific content.",
      },
    ],
    sources: [
      { label: "Mystery Envelope", href: "/games/mystery-envelope" },
      { label: "Christmas Connection", href: "/games/christmas-connection" },
      { label: "One Word Check-In", href: "/games/one-word-check-in" },
      { label: "Christmas table icebreaker games", href: "/blog/christmas-table-icebreaker-games" },
    ],
  },

  "two-truths-and-a-tinsel": {
    howToSteps: [
      {
        title: "Explain the seasonal twist",
        body: "Two true holiday/winter statements and one fib—or use Two Truths and a Dream style (two truths + one hope) if lying feels wrong. Model mild content. Pass allowed.",
      },
      {
        title: "Screen topics",
        body: "Food, weather, movies, wrapping habits. Ban trauma, money flexes, and faith tests.",
      },
      {
        title: "Time-box turns",
        body: "Under a minute. Breakouts above 12. Soft guessing—no roasting.",
      },
      {
        title: "Harvest themes",
        body: "Name two themes and stop.",
      },
    ],
    variations: [
      {
        title: "No-lie tinsel",
        body: "Two truths + one winter hope.",
      },
      {
        title: "Work year-end truths",
        body: "Project facts only.",
      },
      {
        title: "Chat guesses",
        body: "Virtual rooms type 1/2/3.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "4–16; sample larger groups." },
      { label: "Time", body: "8–12 minutes." },
      { label: "Materials", body: "None." },
      {
        label: "House rules",
        body: "Mild model. Pass anytime. Kind guesses. Inclusive winter framing.",
      },
    ],
    whyItWorks:
      "Two Truths and a Tinsel is classic Two Truths with seasonal dressing. Keep it distinct from the main Two Truths page by stressing winter prompts and the no-lie alternative.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "Two winter truths and one fib—or two truths and a hope. Pass is fine.",
      },
      {
        speaker: "Model",
        line: "I like peppermint tea, I wrap gifts at the last minute, and I once met a talking snowman—guess the fib.",
      },
      {
        speaker: "Close",
        line: "Themes noted. We move on.",
      },
    ],
    pitfalls: [
      {
        title: "Duplicate of classic Two Truths",
        body: "Lead with seasonal prompts and link the main rules page.",
      },
      {
        title: "Flexing trips",
        body: "Model ordinary truths.",
      },
    ],
    originalVariant: {
      title: "Tinsel → shared playlist (site original)",
      body: "After two rounds, people who mentioned a song or film paste titles into a shared list. Stories become a party playlist without more guessing.",
    },
    adultsWork:
      "Holiday socials. Prefer Two Truths and a Dream / classic Two Truths for non-seasonal rooms. Church: visitor-safe facts only.",
    faqs: [
      {
        q: "How do you play Two Truths and a Tinsel?",
        a: "Share two true winter/holiday statements and one fib—or swap the fib for a hope—then guess kindly.",
      },
      {
        q: "How is it different from Two Truths and a Lie?",
        a: "Same family; this page uses seasonal prompts and offers a no-lie hope variant.",
      },
      {
        q: "How long does it take?",
        a: "About 8–12 minutes.",
      },
      {
        q: "Can people refuse to lie?",
        a: "Yes—use two truths and a hope.",
      },
      {
        q: "Is it okay for mixed-faith groups?",
        a: "Yes with winter prompts and a clear pass.",
      },
    ],
    sources: [
      { label: "Two Truths and a Lie", href: "/games/two-truths-and-a-lie" },
      { label: "Two Truths and a Dream", href: "/games/two-truths-and-a-dream" },
      { label: "Games like Two Truths and a Lie", href: "/games-like-two-truths-and-a-lie" },
      { label: "Christmas Connection", href: "/games/christmas-connection" },
    ],
  },

  "message-under-a-plate": {
    howToSteps: [
      {
        title: "Prep kind table prompts",
        body: "Slip a short, light question under each plate or chair: favorite winter snack; a song for cold weather; one word for this year. Ban romance, money, and grief prompts. People may swap slips once.",
      },
      {
        title: "Reveal on a cue",
        body: "After seating, everyone peeks. Share in 20 seconds with the person on the right—or pass / read silently.",
      },
      {
        title: "Optional full-table sample",
        body: "Two volunteers only. Do not go all the way around a banquet table.",
      },
      {
        title: "Clear slips before food service",
        body: "Trash or recycle so servers are not fishing paper out of salads.",
      },
    ],
    variations: [
      {
        title: "Conversation menu",
        body: "Print prompts on a card standing like a menu.",
      },
      {
        title: "Work lunch edition",
        body: "Project-safe prompts only.",
      },
      {
        title: "Virtual “under the tile”",
        body: "Host DMs a prompt when breakouts open.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "6–24 seated." },
      { label: "Time", body: "5–10 minutes." },
      { label: "Materials", body: "Paper slips; tape optional." },
      {
        label: "House rules",
        body: "Pass and swap. Light prompts. No forced public reading. Clear paper before courses.",
      },
    ],
    whyItWorks:
      "Message Under a Plate gives every seat a starter without a loud mixer. It fails when prompts are intimate or when the whole table must perform. Ideal between salad and main.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "Peek under your plate. Light prompt only. Share with a neighbor—or pass.",
      },
      {
        speaker: "Close",
        line: "Slips to the center bowl. Enjoy the meal.",
      },
    ],
    pitfalls: [
      {
        title: "Heavy prompts",
        body: "Screen like you would for Candy Pass chips.",
      },
      {
        title: "Paper in food",
        body: "Collect before service continues.",
      },
    ],
    originalVariant: {
      title: "Plate → neighbor toast word (site original)",
      body: "Pairs trade one word from their prompts into a shared “table toast word.” Host reads five words once—no individual speeches.",
    },
    adultsWork:
      "Seated dinners and Christmas table guides. Work lunches: professional prompts. Prefer Topics Tables for multi-round dinners.",
    faqs: [
      {
        q: "How do you play Message Under a Plate?",
        a: "Place light prompts under plates; people peek, optionally share with a neighbor, then clear the slips.",
      },
      {
        q: "How long does it take?",
        a: "About 5–10 minutes.",
      },
      {
        q: "What prompts work?",
        a: "Snacks, weather, music, one-word year reflections—not grief or money.",
      },
      {
        q: "Can it be virtual?",
        a: "Yes—DM or chat a prompt per breakout pair.",
      },
      {
        q: "Do people have to read aloud to the whole table?",
        a: "No. Neighbor share or silent read is enough.",
      },
    ],
    sources: [
      { label: "Christmas table icebreaker games", href: "/blog/christmas-table-icebreaker-games" },
      { label: "Topics Tables", href: "/games/topics-tables" },
      { label: "The Great Christmas Candy Pass", href: "/games/the-great-christmas-candy-pass" },
      { label: "Christmas Connection", href: "/games/christmas-connection" },
    ],
  },

  "photo-booth-prompt-jar": {
    howToSteps: [
      {
        title: "Fill a jar with optional poses",
        body: "Prompts: silly hat optional; favorite-winter-snack face; peace-out; coworker high-five. Ban body-shame and romance prompts. Consent: nobody is pulled into a photo.",
      },
      {
        title: "Station, do not force",
        body: "Set a booth or corner. People draw a prompt if they want a photo. Pass freely. Offer a no-photo “just grab a prop” lane.",
      },
      {
        title: "Sharing rules",
        body: "No posting without clear consent from everyone in the frame. Work events: prefer a private album opt-in.",
      },
      {
        title: "Time-box the line",
        body: "Close the booth after 15–20 minutes so it does not eat the party.",
      },
    ],
    variations: [
      {
        title: "Prop jar only",
        body: "No camera—just playful props for conversation.",
      },
      {
        title: "Virtual background booth",
        body: "Prompt jar in chat; people change backgrounds optionally.",
      },
      {
        title: "Polaroid + caption sticky",
        body: "Write a one-word caption; photo stays with the owner.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "Any party size; booth is optional." },
      { label: "Time", body: "Ongoing 15–20 minutes or drop-in." },
      { label: "Materials", body: "Prompt jar; optional camera/props." },
      {
        label: "House rules",
        body: "Consent for every photo and post. Pass anytime. Inclusive prompts. No forced group shots.",
      },
    ],
    whyItWorks:
      "Photo Booth Prompt Jar gives shy guests a structured silly option without a circle share. It fails when cameras become mandatory or posts go out without consent.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "Optional booth. Draw a prompt if you want. No photo is fine. Ask before posting.",
      },
      {
        speaker: "Close",
        line: "Booth closes in five. Props back in the bin.",
      },
    ],
    pitfalls: [
      {
        title: "Non-consensual posting",
        body: "Default private; opt-in album only.",
      },
      {
        title: "Body prompts",
        body: "Delete anything about weight or attractiveness.",
      },
    ],
    originalVariant: {
      title: "Booth → gratitude wall (site original)",
      body: "After a photo (or instead of one), people stick a one-line thanks on a wall. The jar feeds both cameras and a kindness board.",
    },
    adultsWork:
      "Holiday parties and youth socials. Corporate: strict consent + no public social posting unless PR opts in.",
    faqs: [
      {
        q: "How do you run a Photo Booth Prompt Jar?",
        a: "Guests optionally draw a pose prompt and take a consensual photo—or skip the camera entirely.",
      },
      {
        q: "Do people have to be photographed?",
        a: "No. Pass is full participation.",
      },
      {
        q: "How long should the booth stay open?",
        a: "About 15–20 minutes of drop-in time.",
      },
      {
        q: "Can it be virtual?",
        a: "Yes—prompt-driven virtual backgrounds.",
      },
      {
        q: "What about posting to social media?",
        a: "Only with clear consent from everyone in the photo.",
      },
    ],
    sources: [
      { label: "Picture Sharing", href: "/games/picture-sharing" },
      { label: "Christmas Connection", href: "/games/christmas-connection" },
      { label: "Free fun icebreaker games", href: "/free-fun-icebreaker-games" },
      { label: "When to skip an icebreaker", href: "/when-to-skip-an-icebreaker" },
    ],
  },

  "around-the-world-traditions": {
    howToSteps: [
      {
        title: "Ban tourism and stereotype talk",
        body: "Invite optional shares about a tradition someone practices or has been invited into—with consent. No “guess the country,” no accent jokes, no forcing people to represent an ethnicity. Pass is success. Winter or year-end traditions welcome.",
      },
      {
        title: "Time-box and pair first",
        body: "90 seconds in pairs, then two volunteers. Write-only sticky counts.",
      },
      {
        title: "Model ordinary",
        body: "Facilitator shares a mild food or music habit—not a lecture.",
      },
      {
        title: "Harvest themes",
        body: "Food, light, rest—stop before Q&A becomes interrogation.",
      },
    ],
    variations: [
      {
        title: "Food-only round",
        body: "Lower identity pressure.",
      },
      {
        title: "Borrowed tradition",
        body: "Share something a friend taught you—with credit.",
      },
      {
        title: "Skip to Connection",
        body: "If the room is low-trust, use preference matching instead.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "6–20; sample larger groups." },
      { label: "Time", body: "10–15 minutes." },
      { label: "Materials", body: "Optional stickies." },
      {
        label: "House rules",
        body: "No stereotyping. No forced representation. Pass anytime. Kind curiosity only.",
      },
    ],
    whyItWorks:
      "Around the World Traditions can celebrate diversity when consent-led. It fails hard as a cultural quiz. Prefer Christmas Connection preference prompts when trust is thin.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "Optional: a tradition you practice or were invited into. Pass freely. No one has to represent a whole country.",
      },
      {
        speaker: "Close",
        line: "Two themes I heard: food and rest. We stop there.",
      },
    ],
    pitfalls: [
      {
        title: "Tokenizing",
        body: "Never put one person on the spot as “the expert.”",
      },
      {
        title: "Stereotype jokes",
        body: "Shut them down immediately.",
      },
    ],
    originalVariant: {
      title: "Tradition → shared practice sticky (site original)",
      body: "People who want to write one practice anyone could try this month (evening walk, soup Sunday). Board stays optional and non-ethnic—hospitality without appropriation pressure.",
    },
    adultsWork:
      "Community and church cultural nights with strong facilitation. Corporate: often skip in favor of preference mixers. See when-to-skip.",
    faqs: [
      {
        q: "How do you play Around the World Traditions?",
        a: "Optionally share a tradition you practice or were invited into, with pass allowed and no stereotyping.",
      },
      {
        q: "What if someone does not want to share?",
        a: "Pass or write-only. That is full participation.",
      },
      {
        q: "How long does it take?",
        a: "About 10–15 minutes.",
      },
      {
        q: "Is it okay for work?",
        a: "Only with strong consent rules; many teams should use Christmas Connection instead.",
      },
      {
        q: "Can it be virtual?",
        a: "Yes—pairs in breakouts and optional chat themes.",
      },
    ],
    sources: [
      { label: "Christmas Connection", href: "/games/christmas-connection" },
      { label: "When to skip an icebreaker", href: "/when-to-skip-an-icebreaker" },
      { label: "How we choose icebreakers", href: "/how-we-choose-icebreakers" },
      { label: "Group Map", href: "/games/group-map" },
    ],
  },

  "sing-off": {
    howToSteps: [
      {
        title: "Make singing optional",
        body: "Teams take turns naming or humming a song with a theme word (winter, night, light). Lip-sync, hum, or quote a lyric line counts. Nobody must solo. Pass a turn anytime.",
      },
      {
        title: "Ban roast energy",
        body: "No mocking voices. Soft scoring or cooperative list-building instead of elimination.",
      },
      {
        title: "Keep rounds short",
        body: "Five to eight song mentions. Stop before it becomes a concert.",
      },
      {
        title: "Volume control",
        body: "Seated tables: hum or title-only. Not for quiet dining service.",
      },
    ],
    variations: [
      {
        title: "Title-only sing-off",
        body: "Say the song name—no melody required.",
      },
      {
        title: "Playlist coop",
        body: "Build a shared list instead of competing.",
      },
      {
        title: "Virtual mute karaoke",
        body: "One unmute at a time; others guess the song in chat.",
      },
    ],
    rulesTiming: [
      { label: "Players", body: "8–30." },
      { label: "Time", body: "8–12 minutes." },
      { label: "Materials", body: "Optional speaker for examples." },
      {
        label: "House rules",
        body: "No forced solos. Kind reactions. Soft or cooperative scoring. Inclusive song themes.",
      },
    ],
    whyItWorks:
      "Sing-Off can energize a party when performance pressure is low. It fails when shy people are pushed to solo. Prefer playlist coop for workplaces.",
    facilitatorScript: [
      {
        speaker: "Open",
        line: "Theme word: winter. Say a title, hum, or pass. No solos required. Soft scoring.",
      },
      {
        speaker: "Play",
        line: "Alternate sides. Five rounds max.",
      },
      {
        speaker: "Close",
        line: "Titles go on the playlist doc. We are done singing.",
      },
    ],
    pitfalls: [
      {
        title: "Forced performance",
        body: "Title-only lane from the first sentence.",
      },
      {
        title: "Elimination shame",
        body: "Cooperative list instead.",
      },
    ],
    originalVariant: {
      title: "Sing-off → silent playlist (site original)",
      body: "After three sung/hummed rounds, finish with silent title adds only. Energy drops to conversation volume before dinner.",
    },
    adultsWork:
      "Youth and casual parties. Corporate: title-only or skip. Compare Name That Movie Quote for non-singing guessing.",
    faqs: [
      {
        q: "How do you play Sing-Off?",
        a: "Teams alternate song titles or hums on a theme. Soft or cooperative scoring. Passing is allowed.",
      },
      {
        q: "Do people have to sing?",
        a: "No. Titles and hums count.",
      },
      {
        q: "How long does it take?",
        a: "About 8–12 minutes.",
      },
      {
        q: "Is elimination required?",
        a: "No. Prefer cooperative playlists for mixed groups.",
      },
      {
        q: "Can it be virtual?",
        a: "Yes with one unmute at a time and chat guesses.",
      },
    ],
    sources: [
      { label: "Name That Movie Quote", href: "/games/name-that-movie-quote" },
      { label: "Christmas Connection", href: "/games/christmas-connection" },
      { label: "Free fun icebreaker games", href: "/free-fun-icebreaker-games" },
      { label: "When to skip an icebreaker", href: "/when-to-skip-an-icebreaker" },
    ],
  },

};

export function getGamePageExtras(slug: string): GamePageExtrasContent | null {
  return GAME_PAGE_EXTRAS[slug] ?? null;
}

export function getGamePageFaqs(slug: string): GameFaqItem[] {
  return GAME_PAGE_EXTRAS[slug]?.faqs ?? [];
}
