// Curio — английские переводы карточек. window.CARDS_EN[id] = {title,tldr,body_md,terms,test_yourself}.
window.CARDS_EN = {
  "math-monty-hall": {
    "title": "Goat, car, and door: why switching doubles your odds",
    "tldr": "The Monty Hall paradox: after the host gives you a hint, switching doors wins you the car 2 times out of 3 rather than half the time — completely against your gut.",
    "body_md": "Three doors. Behind one is a car, behind the other two are goats. You pick door #1. The host, **who knows where the car is**, opens one of the remaining doors to reveal a goat — say #3. The question: switch to #2, or stay put?\n\nYour gut screams \"50/50, doesn't matter.\" Your gut is lying. **Switch** and you win with probability **2/3**; stay and it's only **1/3**.\n\nUnder the hood: the moment you first pick, your chance of nailing the car is 1/3, while the chance it's behind one of the other two doors is 2/3. The host isn't flipping a coin — he's **forced** to open a goat and **forced** to leave your door alone. In doing so, he rakes that entire 2/3 from the \"other doors\" onto the single remaining closed door. Opening a door isn't a fresh 50/50 draw — it's an **injection of information** into the system.\n\nThe mind-bending key: it works *only* because the host knows the answer and follows a rule. If he opened a door at random (and sometimes exposed the car), *then* you'd get an honest 50/50.",
    "terms": [
      {
        "term": "conditional probability",
        "explain": "the chance of an event given that some fact is already known — here: the chance the car is behind door #2 GIVEN that the host opened #3"
      }
    ],
    "test_yourself": "Why does the \"always switch\" strategy break down if the host opens a door at random, not knowing where the car is?"
  },
  "math-bayes-theorem": {
    "title": "Bayes' theorem: the formula that updates your beliefs with evidence",
    "tldr": "One short formula turns a \"probability before observing\" into a \"probability after\" — and it's the engine under spam filters, medical tests, and the Monty Hall paradox.",
    "body_md": "The formula: **P(A|B) = P(B|A) · P(A) / P(B)**. Read it as \"the probability of A given B.\" The idea: you started with a **prior** belief P(A), a fact B showed up, and you recompute it into the **posterior** P(A|B).\n\nHere's the classic that trips up doctors' intuition. A disease hits 1 in 1,000 people (**0.1%**). The test is 99% accurate: if you're sick it shows \"+\" 99% of the time, and if you're healthy it falsely fires \"+\" 1% of the time. Your test comes back \"+\". Are you sick?\n\nLet's run it on 100,000 people. Of the 100 sick people, the test catches ~99. Of the 99,900 healthy people, 1% — that's **999** — get a false \"+\". Total positives: 99 + 999 = 1,098. Of those, the genuinely sick: 99/1,098 ≈ **9%**. So a positive test means you're sick with only ~9% probability, not 99% — because there are so many healthy people that their false positives **drown out** the real ones. This is the **base rate fallacy**: people ignore how rare the disease was to begin with.\n\nMonty Hall is the same story: P(car behind #2) updates from 1/3 to 2/3 the moment the fact \"the host opened a goat at #3\" flows into the formula. Bayes is the mathematically rigorous way to **change your mind on new evidence** instead of clinging to your first guess.",
    "terms": [
      {
        "term": "prior / posterior",
        "explain": "your belief BEFORE observing (prior) and that same belief, recomputed AFTER a fact arrives (posterior)"
      },
      {
        "term": "base rate fallacy",
        "explain": "the tendency to forget how rare an event is on its own and to over-trust the accuracy of a test"
      }
    ],
    "test_yourself": "If the disease occurs in 1 in 10 people rather than 1 in 1,000, does your chance of actually being sick after a positive test go up or down? Why?"
  },
  "math-law-large-numbers": {
    "title": "The law of large numbers: why the casino never loses but you can",
    "tldr": "The average of a run of random trials inevitably converges to the expected value — it's what casinos, insurers, and any million-run Monty Hall simulation are built on.",
    "body_md": "The **law of large numbers (LLN)**: repeat a random trial many times and the **average** of the results converges to the **expected value** — the theoretical \"center of gravity\" of the distribution. Flip a coin: over 10 flips you might easily get 7 heads, but over a million the fraction of heads sticks to 0.5.\n\nUnder the hood there's a crucial subtlety. The LLN is about the **average** (the fraction), NOT the absolute difference. The number of \"excess\" heads can actually *grow* as you flip more — but divided by the total, it tends to zero. That's the source of the big myth: the **gambler's fallacy** — believing that after five reds, black is \"due.\" The roulette wheel has no memory; it isn't fate that evens things out, it's scale — new spins **dilute** the imbalance rather than compensating for it.\n\nWhy the casino always comes out ahead: at roulette the player's expected value is negative (the zero gives the house a ~2.7% edge). On a single bet you might hit a jackpot — the **variance** is high. But the casino plays millions of bets, and by the LLN its average take locks onto that 2.7%. You are short-term chance; the casino is the long run.\n\nThe same principle justifies the **Monte Carlo method**: loop Monty Hall 100,000 times, count the fraction of wins when you switch — and it'll converge to 2/3. The simulation replaces the formula with brute force.",
    "terms": [
      {
        "term": "expected value",
        "explain": "the average of a random variable if you averaged over infinitely many trials — its \"center of gravity\""
      },
      {
        "term": "variance",
        "explain": "a measure of how spread out results are around the mean: high variance = individual outcomes swing wildly"
      },
      {
        "term": "Monte Carlo method",
        "explain": "a trick for computing a probability not with a formula but by running a random experiment thousands of times and averaging"
      }
    ],
    "test_yourself": "After 8 reds in a row on the roulette wheel, is the chance of black on the next spin higher, lower, or the same? Why doesn't this contradict the LLN?"
  },
  "math-b2-birthday": {
    "title": "The birthday paradox: why 23 is enough",
    "tldr": "In a group of 23 people, the chance that two share a birthday is already over 50%. It sounds impossible — but intuition is counting the wrong thing.",
    "body_md": "Ask anyone: how many people do you need for two to share a birthday? People say \"around 180\" (half of 365). The right answer is **23**. With 23 people the chance of a match is ~**50.7%**; with 70 it's already **99.9%**.\n\n**Under the hood.** Intuition swaps in the wrong question. You're thinking \"will someone match *my* birthday\" — but what you should count is \"will *any* pair match at all.\" And in a group of 23 there are a whopping **253** pairs (everyone with everyone: 23·22/2). That's where the explosion comes from.\n\nYou compute it via the **complement**: take the probability that all birthdays are *different* and subtract it from one. The first person claims a day, the second has to land in the remaining 364/365, the third 363/365, and so on. Multiply 22 such fractions and you get ~0.493 that all are distinct. So a match = 1 − 0.493 ≈ **0.507**.\n\nThe key is that the growth isn't linear but **combinatorial**: the number of pairs grows like the square of the number of people. The same trick breaks hashes (the **birthday attack** in cryptography).",
    "terms": [
      {
        "term": "complement (in probability)",
        "explain": "we compute the probability of the \"opposite\" event (all days different) and subtract it from 1 — it's simpler that way"
      },
      {
        "term": "combinatorial growth",
        "explain": "grows not in proportion but like the number of pairs — roughly the square of the count"
      },
      {
        "term": "birthday attack",
        "explain": "a method for cracking hashes: finding a collision is easier than it seems, thanks to the same pairing effect"
      }
    ],
    "test_yourself": "Why do you only need 23 people for 50%, not 183 — what question does intuition substitute?"
  },
  "math-b2-normal": {
    "title": "The 68-95-99.7 rule: a map of the bell curve",
    "tldr": "In a normal distribution, 68% of the data falls within one sigma of the mean, 95% within two, and 99.7% within three. Three numbers that let you read almost any spread.",
    "body_md": "Human heights, measurement errors, noise — much of it falls into the **normal distribution**, that classic bell-shaped curve. Its shape is set by two numbers: the **mean** (the center) and the **standard deviation** (sigma, σ — how wide the spread is).\n\nThe **68-95-99.7 rule** tells you what share of the data lands in the bands around the center:\n\n- ±1σ → **68.27%**\n- ±2σ → **95.45%**\n- ±3σ → **99.73%**\n\nBeyond three sigmas only ~0.3% escapes — three cases in a thousand.\n\n**Under the hood.** These percentages aren't fudged — they're the area under the curve, the integral of the Gaussian function. Crucially, they're the same for *any* normal distribution — heights in cm or IQ scores alike. The secret is **standardization**: any value is converted into a **z-score** (how many sigmas it sits from the mean), and every curve collapses into one. That's why \"sigma\" is a universal language: in physics, claiming a particle discovery demands **5σ** (a chance of error of ~1 in 3.5 million); in manufacturing, \"six sigma\" means almost zero defects.\n\nOne band, and you already know whether you're looking at something rare or ordinary.",
    "terms": [
      {
        "term": "standard deviation (sigma, σ)",
        "explain": "a measure of spread: a small σ means the data clusters near the center, a large one means it's smeared wide"
      },
      {
        "term": "z-score",
        "explain": "how many sigmas a value sits from the mean; it translates any scale into a common one"
      },
      {
        "term": "standardization",
        "explain": "rescaling data to a mean of 0 and a sigma of 1 so you can compare different distributions"
      }
    ],
    "test_yourself": "If a result sits 3σ from the mean — how rare is that event, in percentage terms?"
  },
  "math-b2-simpson": {
    "title": "Simpson's paradox: when the average lies",
    "tldr": "A drug helps men and helps women when you look at each group — yet the combined table says it does harm. A trend within groups flips when you merge them. It's not an error, it's math.",
    "body_md": "Picture this: drug A gives a better result for men, and a better result for women. Logically it should be better overall too, right? Yet in the pooled table drug B suddenly wins. This is **Simpson's paradox** — the direction of a relationship reverses when you dump the groups into one pile.\n\n**Under the hood.** The culprit is a **hidden (confounding) factor** plus unequal group sizes. The classic case is Berkeley admissions (1973): department by department, women were admitted no worse than men, but the overall admission rate for women came out lower. The resolution: women applied more often to highly competitive departments, where almost everyone gets rejected. The factor \"which department you applied to\" skewed the overall figure.\n\nMathematically it's about **weighted averages**: you can't just add fractions. 1/2 \"weighs\" differently than 50/100 — when you merge, the group with more observations dominates, and its proportion drags the total along with it.\n\nThe moral isn't \"you can't trust statistics,\" it's: **an aggregate that ignores the structure of the data lies**. Before you trust an overall number, ask — what got mixed together, and in what proportions? The right breakdown brings the truth back.",
    "terms": [
      {
        "term": "confounding (hidden factor)",
        "explain": "a third variable that influences two others at once and creates a spurious link between them"
      },
      {
        "term": "weighted average",
        "explain": "an average that accounts for group sizes: a larger group pulls the result harder than a small one"
      },
      {
        "term": "aggregation",
        "explain": "merging data into a single summary figure; it can hide structure and flip the conclusion"
      }
    ],
    "test_yourself": "Why can't you just add up the admission percentages by department to get the overall percentage?"
  },
  "it-otkryvaesh-sait-chto-proishodit": {
    "title": "You hit Enter — and more happens in 200 ms than you'd think",
    "tldr": "Between pressing Enter and the page showing up, your request runs through a DNS lookup, a TCP handshake, and TLS encryption — three separate negotiations before the server hands over a single byte of HTML.",
    "body_md": "You type `example.com` and hit Enter. It feels like the page just loads. In reality the browser runs through a whole pipeline of stages, and each one is its own separate conversation over the network.\n\n**1. DNS resolution.** Computers don't know names, only IP addresses. The browser asks a **DNS** resolver: \"what's the IP for `example.com`?\" The answer is often already cached (in the OS, your router, your ISP) — otherwise the query walks up the hierarchy all the way to an authoritative server.\n\n**2. TCP handshake.** Now that it has the IP, the browser sets up a reliable channel using **three packets** (SYN → SYN-ACK → ACK). Only then can any data flow.\n\n**3. TLS handshake.** For HTTPS, encryption is layered on top of TCP: the two sides agree on keys, and the server proves it's genuine with a certificate.\n\n**4. HTTP request.** At last the browser sends `GET /`, the server returns the HTML, and that HTML pulls in CSS, JS, and images — each of which can kick off the whole cycle again.\n\nHere's the kicker: most of the delay usually isn't the download itself — it's these **round-trips**, the there-and-back journeys across half the planet. That's why every leap forward in web speed comes down to one thing: cutting the number of trips.",
    "terms": [
      {
        "term": "DNS",
        "explain": "the internet's phone book: it turns the name example.com into a numeric IP address."
      },
      {
        "term": "round-trip",
        "explain": "one \"send a packet, wait for the reply\" cycle; each one adds delay equal to the trip out to the server and back."
      },
      {
        "term": "resolver",
        "explain": "a server that takes a site's name and finds its IP by asking other DNS servers."
      }
    ],
    "test_yourself": "Why does opening a single HTTPS page require at least three separate network \"conversations\" before the actual request is even sent?"
  },
  "it-tcp-three-way-handshake": {
    "title": "The three packets that begin every TCP connection",
    "tldr": "Before sending a single byte of data, TCP performs a \"handshake\" of three packets — SYN, SYN-ACK, ACK — so both sides can sync their counters and confirm the channel works in both directions.",
    "body_md": "**TCP** makes a promise: reliable delivery, nothing lost, everything in order. To guarantee that, both sides first agree on a starting point — through the **three-way handshake**.\n\n**Step 1 — SYN.** The client sends a packet with the `SYN` (synchronize) flag and its own random initial number `x` (the **ISN**). It's like saying: \"I want to talk, and my byte count will start at x.\"\n\n**Step 2 — SYN-ACK.** The server replies with a single packet carrying two flags at once: `ACK` set to `x+1` (\"got you, now I'm expecting byte number x+1\") plus its own `SYN` with its own number `y`.\n\n**Step 3 — ACK.** The client confirms: `ACK` = `y+1`. Now both sides know each other's numbers, and the link is verified in both directions.\n\nWhy `+1`? The acknowledgment field always holds the **number of the next byte expected**, not the last one received. The SYN itself notionally \"takes up\" one number.\n\nWhy are the numbers **random**? If they were predictable, an attacker could forge packets and hijack someone else's connection (**TCP spoofing**). Randomizing the ISN is a real defensive measure, written into the standards.\n\nThis exchange is exactly that first **round-trip** that happens before anything else loads.",
    "terms": [
      {
        "term": "ISN (Initial Sequence Number)",
        "explain": "the random starting number a side uses to begin numbering its own bytes."
      },
      {
        "term": "SYN/ACK flags",
        "explain": "bits in the TCP header: SYN asks to open a connection, ACK confirms receipt."
      },
      {
        "term": "TCP spoofing",
        "explain": "an attack where forged packets with guessed numbers are injected to break into a connection."
      }
    ],
    "test_yourself": "Why does the server acknowledge x+1 rather than the number x that the client actually sent?"
  },
  "it-tls-13-handshake": {
    "title": "How two strangers agree on a secret in plain sight",
    "tldr": "The TLS handshake gives the client and server a shared encryption key even when every byte of traffic is visible to an eavesdropper — and TLS 1.3 pulls it off in one round-trip instead of two, cutting HTTPS latency in half.",
    "body_md": "Here's the paradox: how do you agree on a **secret key** when everything you say is being overheard? The answer is a **Diffie-Hellman** key exchange: both sides publicly send \"halves\" from which a shared secret can be derived mathematically — yet recovering it from the halves alone is computationally hopeless.\n\n**What happens in a TLS handshake:**\n1. The client sends `ClientHello`: supported versions, ciphers, and its DH half.\n2. The server replies with `ServerHello` — its own half plus a **certificate** signed by a trusted authority (a **CA**), which proves the server is real and not an impostor.\n3. Both sides independently compute the same key and switch to an encrypted channel.\n\n**The big breakthrough of TLS 1.3.** In TLS 1.2 the handshake took **two** round-trips: first agree on a cipher, then exchange keys. TLS 1.3 trimmed the cipher choices down to a safe minimum, so the client can send its DH half right in the very first message. The result: **one** round-trip (1-RTT), and handshake latency drops by roughly half.\n\nBonus: **0-RTT** for return visits — you can send encrypted data in the very first packet, reusing a key from the previous session. The price is a small risk that an attacker could replay the request.",
    "terms": [
      {
        "term": "Diffie-Hellman",
        "explain": "a way to compute a shared secret by exchanging public data, without ever revealing the secret itself."
      },
      {
        "term": "certificate / CA",
        "explain": "a server's digital passport, signed by a certificate authority that the browser trusts."
      },
      {
        "term": "0-RTT",
        "explain": "a TLS 1.3 mode: on a repeat connection, data is sent right away without waiting for the handshake."
      }
    ],
    "test_yourself": "What did TLS 1.3 change to shrink the handshake from two round-trips down to one?"
  },
  "it-b2-hash-passwords": {
    "title": "A hash: the digital meat grinder you can't run in reverse",
    "tldr": "A hash turns any text into a fixed-length string. It can't be unwound — which is why proper sites store not your password, but its hash.",
    "body_md": "Picture a **meat grinder**: put in a steak, get out mince. You can't reassemble the steak from the mince. That's a **hash function** (SHA-256, for example): feed it any text — a single letter or the whole of *War and Peace* — and out comes a fixed-length string every time (for SHA-256, that's 64 hex characters).\n\nTwo key properties under the hood:\n\n1. **One-wayness** — recovering the original text from the hash is practically impossible; brute force is the only option.\n2. **The avalanche effect** — flip one bit of the input and the hash changes completely, beyond recognition. `cat` and `Cat` produce wildly different hashes.\n\nThat's why a proper site **doesn't store your password**. It stores the hash. You enter your password → the site hashes what you typed → it compares that against the stored hash. Match, and you're in. Even if the database is stolen, the thieves get mince, not passwords.\n\nOne important caveat: for passwords you don't use \"raw\" SHA-256 but **slow** functions (bcrypt, argon2) plus a **salt** — a random extra added to each password, so identical passwords produce different hashes and brute-forcing becomes expensive.",
    "terms": [
      {
        "term": "hash function",
        "explain": "an algorithm that turns any text into a fixed-length string; it can't be run in reverse."
      },
      {
        "term": "avalanche effect",
        "explain": "the property where changing one character of the input changes the entire result."
      },
      {
        "term": "salt",
        "explain": "a random extra added to a password before hashing, so identical passwords produce different hashes."
      }
    ],
    "test_yourself": "Why can a site verify your password while honestly not knowing what it is?"
  },
  "it-b2-salt-bcrypt": {
    "title": "Why SHA-256 is too fast for passwords (and that's a problem)",
    "tldr": "Ordinary hashes are built to be lightning-fast. For passwords, speed is a weakness: the same speed accelerates brute-forcing. So you use deliberately slow bcrypt/argon2 plus a salt.",
    "body_md": "Here's the paradox: SHA-256 is great *because* it's **fast** — millions of hashes a second. But that very speed makes it bad for passwords. The attacker gets the same speed: a modern graphics card computes **billions** of SHA-256 hashes a second, grinding through passwords from a leaked database.\n\nTwo defenses work together:\n\n**Salt** defeats the pre-computed lists. Attackers used to keep **rainbow tables** — hashes of popular passwords worked out in advance. A salt (a unique random string per password) means the hash of `qwerty` for Anna and for Pete comes out different. Ready-made tables become useless; every account has to be cracked separately.\n\n**Slow hashes** defeat raw speed. **bcrypt**, **scrypt**, and **argon2** are deliberately built to be sluggish: they have a \"cost\" parameter (work factor). A single login makes the user wait ~0.2 seconds — unnoticeable. But an attacker who needs to test billions of guesses hits a wall: what once took hours now drags on for years. argon2 also eats a lot of **memory** to devalue graphics cards, which have little of it per core.\n\nThe upshot: storing a password properly means intentionally inefficient code. It's the rare case where \"slow\" equals \"right.\"",
    "terms": [
      {
        "term": "rainbow table",
        "explain": "a pre-computed database of hashes of popular passwords for instant cracking; a salt renders it useless."
      },
      {
        "term": "work factor (cost)",
        "explain": "a setting that dictates how slow to make the hash; you raise it as hardware gets faster."
      },
      {
        "term": "argon2",
        "explain": "a modern password-hashing algorithm that deliberately burns both time and lots of memory."
      }
    ],
    "test_yourself": "Why is \"fast\" a plus for checking a file's integrity but a minus for storing a password?"
  },
  "it-b2-collisions": {
    "title": "Collisions: why hash matches are inevitable, yet you still can't find them",
    "tldr": "A hash has infinitely many inputs but a finite number of outputs. So two different texts will eventually produce the same hash — that's a collision. The whole point of a crypto hash is to make that collision impossible to find on purpose.",
    "body_md": "SHA-256 has exactly 2^256 possible outputs — a huge number, but a **finite** one. The inputs (any text at all) are infinite. By the **pigeonhole principle**: if you have more pigeons than boxes, at least one box ends up with two. So there must exist two different texts with the same hash — that's a **collision**. Mathematically, they're unavoidable.\n\nSo why does any of this work? Because \"they exist\" and \"you can find them\" are two different things. For a strong crypto hash, the only way to find a collision is brute force — and no hardware could grind through 2^256 options even in billions of years of the universe's lifetime.\n\nBut strength isn't forever. **MD5** and **SHA-1** were once considered solid, yet today collisions can be forged for them in a reasonable amount of time. In 2017 Google, in the **SHAttered** project, produced two different PDFs with the same SHA-1 — and with that, SHA-1 is dead for signatures. Hence the rule: crypto algorithms **age**, and what was safe in 2005 breaks years later. That's why today the defaults are SHA-256 and the SHA-3 family, while MD5/SHA-1 are left only for non-secret jobs like checksums.",
    "terms": [
      {
        "term": "collision",
        "explain": "the situation where two different inputs produce the exact same hash."
      },
      {
        "term": "pigeonhole principle",
        "explain": "if there are more objects than slots, at least one slot gets at least two — hence collisions are inevitable."
      },
      {
        "term": "SHAttered",
        "explain": "Google's 2017 attack that, for the first time, built two different files with the same SHA-1."
      }
    ],
    "test_yourself": "If collisions always exist mathematically, what exactly makes a hash \"cryptographically strong\"?"
  },
  "cyber-injection-hub": {
    "title": "A vulnerability isn't a \"bug\" — it's data mistaken for commands",
    "tldr": "Most classic security holes (SQLi, XSS, buffer overflow) come down to one thing: the program treated user input as its own instructions. Let's unpack why that's even possible.",
    "body_md": "A computer can't tell \"data\" apart from \"commands\" on its own — that's the job of whatever program parses them. Almost the entire family of **injection** attacks lives in a single gap: you type text, and it lands somewhere the code was expecting *code*.\n\nThe textbook case is **SQL injection**. The program glues a query together as a string: `SELECT * FROM users WHERE name = '` + input + `'`. Type `' OR '1'='1` and the condition is always true, so the database hands over every user. You didn't \"hack\" the database — you **finished writing its command**, because your text got pasted straight into the syntax.\n\nSame logic in **XSS**: your text got dropped into an HTML page, and the browser read the `<script>` inside it as a real script and ran it in someone else's session. And in a **buffer overflow**: your data spilled past its allotted memory and overwrote a control field that the CPU later treated as the address of the next instruction.\n\nUnder the hood, the cure is always the same — **keep the data channel and the control channel separate**. In SQL that's **parameterized queries** (the data rides along as a separate parameter, and the engine never parses it as SQL). In XSS it's escaping on output. A vulnerability isn't \"bad code\" in general — it's a specific spot where the line between data and commands got erased.",
    "terms": [
      {
        "term": "injection",
        "explain": "a class of attacks where user input gets pasted into a spot the program expects to be code, and runs as a command"
      },
      {
        "term": "parameterized query",
        "explain": "SQL where the data is passed as a separate placeholder parameter instead of being glued into the query string — the engine physically cannot confuse it with a command"
      }
    ],
    "test_yourself": "Why does a parameterized query protect against SQLi, while simply \"stripping quotes from the input\" does not?"
  },
  "cyber-cve-cvss-pipeline": {
    "title": "CVE-2024-3094: where a vulnerability gets its ID card and its score",
    "tldr": "Every known vulnerability gets a unique CVE number and a CVSS severity score. Behind that sits a whole hierarchy of organizations — not just \"one website.\"",
    "body_md": "**CVE** (Common Vulnerabilities and Exposures) is a global directory of unique names for vulnerabilities. The `CVE-YEAR-NUMBER` format exists so the whole world can refer to the same hole by one ID instead of trading descriptions.\n\nThe numbers aren't handed out by a single hub. The program is funded by **CISA** and operated by **MITRE**, but the actual IDs are issued by hundreds of **CNAs** (CVE Numbering Authorities) — Microsoft, Google, Red Hat, and other major vendors and projects. As the root CNA, MITRE hands them *blocks* of numbers in advance, and a CNA reserves an ID for a vulnerability found in its own products — ideally within 72 hours of confirmation. That lets a vendor assign a CVE to its own flaw without asking anyone line by line.\n\n**Severity** lives separately, as the **CVSS** metric (usually 0 to 10). It isn't eyeballed — it's computed from a vector: does the attack need network access, does it require authentication, what's lost (confidentiality / integrity / availability)? The score is added by the **NVD** (NIST's database) or by CISA as the data publisher — which is why a fresh CVE sometimes sits without a score until someone analyzes it.\n\nOne key nuance under the hood: a CVE number ≠ confirmed exploitability. Reserving an ID and publishing a description are different stages, and \"reserved\" doesn't mean \"already disclosed.\"",
    "terms": [
      {
        "term": "CNA",
        "explain": "an organization (vendor or project) that MITRE has delegated the right to hand out CVE numbers from a reserved block"
      },
      {
        "term": "CVSS",
        "explain": "a standard formula that scores a vulnerability's severity as a 0–10 number based on a vector: access, complexity, and what's lost"
      },
      {
        "term": "NVD",
        "explain": "National Vulnerability Database — NIST's database that enriches CVE entries with analysis and CVSS scores"
      }
    ],
    "test_yourself": "Can a vulnerability have a CVE number but not yet have a CVSS score? Why?"
  },
  "cyber-memory-mitigations": {
    "title": "Overflowing a buffer isn't enough anymore: three shields in memory",
    "tldr": "The classic stack overflow: overwrite the return address and jump into your own code. Today three things stand in the way — the canary, the NX bit, and ASLR. Let's take each one apart.",
    "body_md": "The classic attack: a function allocates a buffer on the stack, you write more into it than fits, and you overwrite the **return address** sitting right next to it — the spot the CPU jumps to when the function ends. Point that at your own **shellcode** and you've run arbitrary code. Three mechanisms break this scheme.\n\n**1. Stack canary.** The compiler drops a random number between the buffer and the return address (on Linux it's pulled from `/dev/urandom` at startup). Before the function returns, the value is checked: if an overflow clobbered it, the program crashes before it ever reaches the jump. The name comes from mining canaries — the first to die, signaling danger.\n\n**2. NX bit / DEP.** Memory gets tagged \"you may write here, but not execute.\" Even if you drop shellcode onto the stack, the CPU refuses to run it — segfault. This kills the injection of *your own* code.\n\n**3. ASLR.** The addresses of libraries, the stack, and the code get laid out randomly on every run. Even if you know *where* to jump, you don't know *what address* it lives at — you have to guess it or leak it through a separate hole.\n\nThe key point under the hood: these shields don't \"fix\" the bug — they raise the cost of the attack. And they get bypassed — **ROP** (chains of already-allowed code instead of your own), address leaks against ASLR, brute-forcing the canary. Defense is an arms race, not a finish line.",
    "terms": [
      {
        "term": "return address",
        "explain": "the spot saved on the stack that the CPU returns to after a function finishes; overwrite it and you steer the program's flow"
      },
      {
        "term": "shellcode",
        "explain": "a small chunk of machine code the attacker wants to run — often one that launches a command shell"
      },
      {
        "term": "ROP (Return-Oriented Programming)",
        "explain": "a technique for bypassing NX: instead of your own code, you stitch together a chain of legitimate snippets that already exist in the program"
      }
    ],
    "test_yourself": "ASLR randomizes addresses, and NX forbids executing the stack. How does ROP get past both shields without adding a single byte of its own code?"
  },
  "cyber-b2-passwords-hub": {
    "title": "Your password isn't stored on the server. Its fingerprint is",
    "tldr": "A decent service doesn't know your password — all it keeps is an irreversible \"imprint.\" Let's figure out why that calls for slow bcrypt instead of fast SHA, and how salt and a second factor fit in.",
    "body_md": "When you sign up, the server does NOT save your password as letters. It runs it through a **hash function** — one-way math: turning a password into a \"fingerprint\" is easy, but going from the fingerprint back to the password is practically impossible. On login, the server hashes what you typed and compares fingerprints. So even if the database leaks, the passwords basically aren't in there.\n\nBut there's a catch. People reuse the same passwords, so an attacker can precompute the fingerprints of millions of popular passwords (**rainbow tables**) and just look for a match. The fix is a **salt** — a random add-on for each password that makes two identical passwords produce different fingerprints.\n\nThe second catch is subtler: ordinary hashes like **SHA-256** are computed too FAST — billions per second on a GPU. For brute-forcing, that's a gift. So passwords are hashed with deliberately slow functions (**bcrypt**, argon2). And so that even a guessed password won't let a stranger in, you add a **second factor** on top (a TOTP code from an app).\n\nBelow are two rabbit holes: why slow bcrypt beats fast SHA, and how the code in the app matches the server with no internet at all.",
    "terms": [
      {
        "term": "hash function",
        "explain": "one-way math: turning data into a \"fingerprint\" is easy, going back is practically impossible"
      },
      {
        "term": "salt",
        "explain": "a random add-on mixed into a password before hashing, unique to each user"
      },
      {
        "term": "rainbow table",
        "explain": "a precomputed dictionary of \"password → its hash\" for quickly looking up matches"
      }
    ],
    "test_yourself": "Why should two identical passwords produce different fingerprints in the database?"
  },
  "cyber-b2-bcrypt-slow": {
    "title": "A fast hash is a bad hash: why bcrypt is slow on purpose",
    "tldr": "SHA-256 was built to compute A LOT, FAST. For passwords, that's exactly the wrong thing. bcrypt takes the same idea and makes it deliberately slow — and that's a feature, not a bug.",
    "body_md": "**SHA-256** is a great hash function, but it's built for speed: checking a file's checksum has to be instant. A GPU cranks it out **billions per second**. For passwords that's a disaster: if the database leaks, an attacker rips through dictionaries and combinations at insane speed and cracks weak passwords in hours.\n\n**bcrypt** solves this head-on — it's slow ON PURPOSE. Inside it there's a **cost factor**: a number that says \"repeat the internal work 2^cost times.\" Cost 12 means 4096 passes per password. For an honest login the difference is imperceptible (a fraction of a second), but for brute-forcing billions of guesses it's a wall. As computers get faster, you just bump the cost by one and the work doubles. As a bonus, bcrypt keeps the **salt right inside** its fingerprint, so you don't have to store it separately.\n\nEven tougher — **argon2**: it deliberately eats not just time but a lot of MEMORY, to neutralize GPUs and special-purpose chips (which are short on memory). Hence the rule: **for passwords you pick functions that are slow and resource-hungry, not the fastest ones**. Here, \"slow\" is a compliment.",
    "terms": [
      {
        "term": "cost factor",
        "explain": "a bcrypt setting: how much to slow down hashing; +1 doubles the work"
      },
      {
        "term": "argon2",
        "explain": "a modern password function that deliberately demands a lot of memory, not just time"
      }
    ],
    "test_yourself": "Why does being \"computed very fast\" make a hash WORSE for storing passwords?"
  },
  "cyber-b2-totp-offline": {
    "title": "TOTP: how the code in your app matches the server with no internet",
    "tldr": "Google Authenticator spits out 6 digits on a plane, with no signal — and the server accepts them. The trick: your phone and the server never talk to each other. They both compute the same thing from a shared secret and the current time.",
    "body_md": "When you scan the **QR code** while setting up 2FA, your phone and the server exchange a shared **secret key** just once. After that they don't need any connection — each one independently computes the same code.\n\nThe algorithm is called **TOTP** (the RFC 6238 standard). The logic is simple: take the current time, divide by 30 seconds, and you get the number of the 30-second \"window.\" Then the phone computes an **HMAC** (a hash keyed with the secret) of that window number, and pulls 6 digits out of the result. In that same second the server does the exact same thing with its copy of the secret — and gets the same digits. Match found, you're in. The phone needs no internet: just the secret (already there) and a clock.\n\nThat explains the quirks. The code lives ~30 seconds because the window rolls over. If the phone's clock is badly off, the codes won't line up (which is why time sync matters). The server usually accepts the neighboring window too, to forgive a few seconds of drift. And most importantly: **the secret never travels over the network on each login**, so it can't be sniffed out of your traffic — unlike an SMS code.",
    "terms": [
      {
        "term": "TOTP",
        "explain": "Time-based One-Time Password — a one-time code tied to the current time; the RFC 6238 standard"
      },
      {
        "term": "HMAC",
        "explain": "a hash computed together with a secret key; without the key, the same result can't be forged"
      },
      {
        "term": "shared secret",
        "explain": "the key your phone and the server exchanged once, via the QR code, when 2FA was set up"
      }
    ],
    "test_yourself": "Why does a TOTP code change every 30 seconds instead of lasting forever?"
  },
  "ai-attention-hub": {
    "title": "Attention: how AI decides which words to look at",
    "tldr": "The attention mechanism is the heart of every GPT. At each step it lets the model weigh which other words in the text matter right now. A single 2017 paper sent recurrent networks to the scrapheap.",
    "body_md": "Before 2017, text was pushed through **RNNs** — one word at a time, as if through a narrow funnel: to connect the end of a sentence to its beginning, the network had to drag \"memory\" through every intermediate step, losing bits of it along the way. The paper **\"Attention Is All You Need\"** (Vaswani et al., 2017) proposed something radical: throw out recurrence entirely and keep only **attention**.\n\nHere's the idea under the hood. Every word spawns three vectors: **Query** (\"what am I looking for?\"), **Key** (\"what do I offer?\"), and **Value** (\"what do I carry?\"). One word's Query is dotted against the Keys of all the others, producing scores for \"how relevant are you to me?\" A **softmax** turns those scores into weights that sum to 1, and the word gathers a weighted blend of everyone else's Values.\n\nIn the phrase \"the river bank was steep,\" the word \"bank\" looks at \"river\" with a high weight — and figures out it means a shoreline, not a financial institution. The key trick: this isn't **sequential**, it's **parallel** — every pair of words is computed at once, which maps beautifully onto a GPU. That's exactly why LLMs exploded in scale.",
    "terms": [
      {
        "term": "softmax",
        "explain": "a function that turns a set of numbers into probabilities that add up to 1"
      },
      {
        "term": "RNN",
        "explain": "recurrent neural network — processes text one word at a time, passing \"memory\" down the chain"
      }
    ],
    "test_yourself": "Why does each word need three different vectors (Q, K, V) instead of just one?"
  },
  "ai-transformer-block": {
    "title": "Inside the transformer: √d_k, many heads, and the \"residual\" trick",
    "tldr": "A single transformer layer is more than just attention. It has scaling by the square root of the dimension, several parallel \"attention heads,\" and residual connections — without which a deep network simply wouldn't train.",
    "body_md": "The dot product of Query·Key grows with the vectors' dimension: at **d_k=64** the values blow up, softmax turns into a near-step function, and gradients die. So the scores are divided by **√d_k** — hence the name **scaled dot-product attention**. This isn't cosmetic; it's the very thing that lets the network learn at all.\n\nNext comes **multi-head attention**. Instead of one big attention matrix, you build, say, 8 small \"heads,\" each with its own Q/K/V projections. One head catches syntax, another handles gender agreement, a third tracks long-range links. Their outputs are concatenated and linearly mixed. It's like several experts reading the same sentence from different angles.\n\nAfter attention comes a plain **feed-forward** network — a small two-layer net applied to each position on its own.\n\nThe key trick for depth is the **residual connection**: the block's output doesn't replace the input, it's added to it (x + Attention(x)). That way the gradient can flow \"around the side\" on the backward pass, and you can stack dozens of layers without it fading out. On top of that, **layer normalization** keeps the numbers' scale stable. And that's the whole recipe: attention + FFN + residual + norm, repeated N times.",
    "terms": [
      {
        "term": "residual connection",
        "explain": "a technique where a layer's output is added to its input so the gradient doesn't fade in a deep network"
      },
      {
        "term": "d_k",
        "explain": "the dimension of the Key/Query vectors — that is, how many numbers make up one such vector"
      }
    ],
    "test_yourself": "What breaks if you drop the division by √d_k at large dimensions?"
  },
  "ai-embeddings-geometry": {
    "title": "Embeddings: where a word's meaning \"lives\" for an AI",
    "tldr": "The model doesn't know letters. To it, each word is a point in a space of hundreds of dimensions, and points that are close = meanings that are close. The famous \"king − man + woman ≈ queen\" is literally arithmetic on coordinates.",
    "body_md": "Before attention can do anything, a word has to be turned into numbers. That's an **embedding** — a vector of, say, 768 numbers. The coordinates start out random, but during training the network nudges them so that words used in similar ways end up near each other. \"Cat\" and \"kitten\" clump together; \"cat\" and \"tractor\" drift far apart.\n\nThe beautiful part is that meaning becomes **geometry**. The direction \"from masculine to feminine\" is a specific vector in the space. That's why the famous **king − man + woman ≈ queen** actually works: add and subtract the coordinates and you land almost exactly on the right point. Relationships (capital–country, verb tense) turn into consistent shifts.\n\nUnder the hood this gets tuned through **backpropagation**: the network makes a prediction, measures the error, and the **gradient** — the derivative of the error with respect to each number — says which way to nudge each coordinate to be a little less wrong. Billions of such micro-nudges over terabytes of text, and chaos turns into a meaningful map of language.\n\nOne important nuance: in a transformer the embedding is also **contextual** — the same word \"bark\" gets different vectors in \"dog's bark\" and \"tree bark,\" because attention blends in the neighbors.",
    "terms": [
      {
        "term": "embedding",
        "explain": "a word represented as a vector of numbers, where closeness between vectors means closeness in meaning"
      },
      {
        "term": "gradient",
        "explain": "the set of derivatives of the error with respect to each parameter — it shows which way to move the weights so the error drops"
      },
      {
        "term": "backpropagation",
        "explain": "an algorithm that pushes the error from the network's output back to each weight so it can be adjusted"
      }
    ],
    "test_yourself": "Why can the word \"bark\" have two different vectors inside a transformer?"
  },
  "ai-b2-oshibka-loss": {
    "title": "How a model knows it got it wrong: the loss function",
    "tldr": "A neural network doesn't \"know\" the right answer — it gets a penalty number for its mistake and rolls downhill along that penalty until it stops missing.",
    "body_md": "Training a model isn't \"cramming facts\" — it's a game of hot-and-cold played with a single number. At each step the model predicts the next token and produces a probability distribution. The correct token is known from the text, and the **loss function** measures how far off the model was: if it was confident in the right option, the penalty is tiny; if it bet little on it, the penalty is big. For language models this is usually **cross-entropy**: the lower the probability the model assigned to the correct token, the harder it gets slapped on the wrist.\n\nNow for the interesting part under the hood. The **backpropagation** algorithm works out which direction to tweak each of the billions of weights so the penalty drops a hair. It's like descending a mountain in fog: you look at your feet, take one step down, repeat. The model doesn't \"understand\" anything in the human sense — it just minimizes one number billions of times over. All the \"magic\" of AI is a mountain with a ball rolling down it for a very long time.",
    "terms": [
      {
        "term": "token",
        "explain": "a chunk of text the model works with — part of a word, a whole word, or a symbol"
      },
      {
        "term": "cross-entropy",
        "explain": "the penalty formula: the bigger it is, the lower the probability the model gave to the correct answer"
      },
      {
        "term": "backpropagation",
        "explain": "a way to compute how to adjust each weight so the penalty goes down"
      }
    ],
    "test_yourself": "If the model gave the correct token a probability of 0.99 versus 0.10 — in which case does the loss function return a bigger penalty, and why?"
  },
  "ai-b2-tokeny-bpe": {
    "title": "Why AI sees chunks, not letters: tokenization and BPE",
    "tldr": "The model reads text not by letters and not by words, but in chunks called \"tokens.\" A greedy algorithm assembles them by merging the most frequent pairs of characters.",
    "body_md": "Before the model \"understands\" anything, the text is sliced into **tokens** — chunks like `play`, `##ing`, ` the`. Why not by letters? Because then the sequences would be enormous and slow. Why not by words? Because then the vocabulary would balloon to millions, and any new word would become \"unknown.\" The compromise is **subword**: common words stay whole, while rare ones get cut into meaningful parts (root, suffix).\n\nUnder the hood runs **BPE** (Byte Pair Encoding). The algorithm is almost comically simple: start with individual characters, find the most frequent adjacent pair, merge it into a new token, and repeat thousands of times — until the vocabulary reaches the target size (for GPT-2 that's ~50,257 tokens). Modern models go deeper still — they work with **bytes**, so the base vocabulary is just 256 characters, and no emoji or ideograph ever turns into \"unknown.\"\n\nHence the famous bugs: the model is bad at counting the letters in \"strawberry\" because it sees not 10 letters but 2–3 glued-together chunks. It views the world through the eyes of a frequency-merger, not a reader.",
    "terms": [
      {
        "term": "subword",
        "explain": "a chunk of a word between a single letter and a whole word — for example a root or a suffix"
      },
      {
        "term": "BPE",
        "explain": "an algorithm that merges the most frequent pairs of characters into tokens"
      },
      {
        "term": "vocabulary (vocab)",
        "explain": "the full set of tokens the model is able to tell apart"
      }
    ],
    "test_yourself": "Why don't byte-level BPE models need a special \"unknown word\" token?"
  },
  "ai-b2-temperatura": {
    "title": "Where \"creativity\" and hallucinations come from: temperature and sampling",
    "tldr": "The model doesn't pick words — it rolls dice weighted by its own probabilities. Temperature decides whether those dice are fair or loaded toward the single most likely option.",
    "body_md": "At each step the model outputs **logits** — raw scores for every token in the vocabulary. The **softmax** function turns them into probabilities that add up to 1.0 (and, along the way, exaggerates the gap: whoever has the higher score gets a disproportionately larger share). Then the sampler \"rolls the dice\" over this distribution. That's exactly why the same prompt yields different answers — it's not a bug, it's built-in randomness.\n\n**Temperature** (T) is a dial in front of the softmax: each logit is divided by T. With T below 1 the distribution sharpens, the leader grabs almost all the mass, and as T→0 the model always takes the single most likely token (greedy mode — dull and predictable). With T above 1 the distribution flattens — rare tokens get a chance, the answer becomes \"more creative,\" but the risk of nonsense grows.\n\nThere's a smarter trick too — **top-p** (nucleus): take the smallest set of tokens whose combined probability reaches p (say, 0.9), and roll the dice only among them. When the model is confident, that's 1–2 options; when it's unsure, dozens. And that's where **hallucinations** come from: high temperature makes the model confidently reach for an unlikely but nice-sounding token.",
    "terms": [
      {
        "term": "logits",
        "explain": "raw token scores before they're turned into probabilities; they can be negative"
      },
      {
        "term": "softmax",
        "explain": "a function that turns scores into probabilities that sum to 1.0"
      },
      {
        "term": "top-p (nucleus)",
        "explain": "take only the most likely tokens up to a combined probability of p, and choose among them"
      }
    ],
    "test_yourself": "At T→0 sampling becomes greedy. Why do the answers then stop varying from run to run?"
  },
  "aviation-how-wings-lift": {
    "title": "Why a wing holds a plane up — and why the schoolbook \"longer path on top\" story is a lie",
    "tldr": "The classic explanation of lift (\"air on top travels a longer path, so it moves faster\") is physically wrong. NASA flatly calls it an incorrect theory. The honest picture is simpler and blunter.",
    "body_md": "You were almost certainly taught this: the top of a wing is more curved, so air flowing over it travels a **longer path** and therefore has to move faster to \"meet up\" with the air underneath at the trailing edge — and by **Bernoulli**, faster means lower pressure, so up you go. Elegant. And **wrong**: no law of physics requires the air particles to \"meet up\" again. Measurements show the air over the top actually races ahead and reaches the trailing edge *earlier* than the air below. NASA keeps a whole page for this called \"Incorrect Lift Theory.\"\n\nThe honest version runs through **Newton**. A wing tilted slightly into the flow deflects the oncoming air **downward** (this is called **downwash**). The wing pushes a mass of air down — and by the third law, the air pushes the wing up. That's it. Lift equals the rate at which the wing flings air downward.\n\nAnd Bernoulli isn't Newton's enemy — it's the **same force** described through pressure: over the wing the flow really is faster and the pressure lower, and underneath it's the reverse. Both descriptions give the exact same lift number. What matters isn't the \"hump\" but the **angle of attack** — which is exactly why a flat plate, and even an upside-down wing, can fly too.",
    "terms": [
      {
        "term": "downwash",
        "explain": "the air the wing has deflected downward behind itself"
      },
      {
        "term": "angle of attack",
        "explain": "the angle between the wing's chord and the direction of the oncoming flow (not to be confused with how far the nose is pitched above the horizon)"
      },
      {
        "term": "Bernoulli's principle",
        "explain": "in a flow, where it moves faster the pressure is lower; for a wing this is a consequence of lift, not its cause"
      }
    ],
    "test_yourself": "Why does a flat plate tilted into the flow also create lift, even though it has no \"hump\" on top?"
  },
  "aviation-stall-angle-of-attack": {
    "title": "Stall: why a plane drops from too much angle, not too little speed",
    "tldr": "A wing holds the plane up as long as air flows smoothly over its top. Exceed the critical angle of attack (usually ~15-20°) and the flow separates, so lift collapses. Speed is secondary here.",
    "body_md": "Tilt the wing harder into the flow and **downwash** grows, so lift grows. But not forever. Over the top surface the air is moving toward *rising* pressure as it heads for the trailing edge — this is an **adverse pressure gradient**. It slows the thin layer of air clinging to the skin (the **boundary layer**), and at some point that layer can no longer push against the pressure and **separates** from the wing. Smooth flow turns into a churning, turbulent mess.\n\nSeparation hits at the **critical angle of attack** — for most subsonic airfoils that's roughly **15-20°**. Past it, lift doesn't taper off gently; it **drops off a cliff**. That's the **stall**.\n\nHere's the counterintuitive part: **a wing stalls by angle, not by speed**. You can stall at any speed and in any attitude — for example in a steep turn, where the g-load forces you to pull a large angle of attack even at a healthy speed. That's exactly why you can stall even after speeding up. In the sim, on a 737, you'll feel it as **buffet** — the shaking of separated air hammering the tail — a warning that arrives seconds before a full stall.",
    "terms": [
      {
        "term": "critical angle of attack",
        "explain": "the angle at which lift peaks; past it the flow separates and lift collapses"
      },
      {
        "term": "boundary layer",
        "explain": "the razor-thin layer of air at the wing's surface, slowed by friction; it's the first thing to peel away"
      },
      {
        "term": "buffet",
        "explain": "the airframe shaking under separated, turbulent flow — a tactile warning that a stall is close"
      }
    ],
    "test_yourself": "Why can a plane stall at high speed in a steep turn, even though \"the speed is high\"?"
  },
  "aviation-airspeed-vs-aoa": {
    "title": "Airspeed on the gauge vs angle of attack: why a pilot trusts something other than what's measured",
    "tldr": "A stall is set by angle of attack, and a classic airspeed indicator doesn't show angle. The twist: why speed still works as a practical stand-in — and where it lies to you.",
    "body_md": "If a wing stalls by **angle of attack**, the obvious question is: why is the main gauge in a 737 cockpit an **airspeed indicator**, not an angle indicator? The answer is engineering. At a fixed weight and modest g-load, there's a rigid link between **speed** and the angle of attack you need to fly. Fly slower and, to hold up the same weight, you need a bigger angle of attack. So there's a **stall speed**: below it, the required angle is already past critical. That makes speed a handy *indirect* readout of angle.\n\nBut this proxy has a catch. **Stall speed isn't fixed.** It rises with **g-load** (in a turn the effective weight goes up — hence the high-speed stall), with mass, and it depends on flap configuration. On top of that, the classic gauge shows **indicated airspeed** — which reads low at altitude relative to the true value, because it measures the pressure of the oncoming air, not your real speed over the ground.\n\nThat's why military and modern aviation fit a direct **angle-of-attack (AoA) sensor** — a little vane on the side of the fuselage. It's more honest: it shows the very thing a stall depends on, regardless of mass, altitude, or g-load. In your sim, it pays to keep both numbers in your head at once.",
    "terms": [
      {
        "term": "stall speed",
        "explain": "the speed below which flying requires an angle of attack past critical; it rises with g-load and mass"
      },
      {
        "term": "indicated airspeed (IAS)",
        "explain": "speed derived from the pressure of the oncoming air; at altitude it reads low relative to true airspeed"
      },
      {
        "term": "AoA sensor",
        "explain": "an external vane that measures angle of attack directly — more honest than speed as a stall warning"
      }
    ],
    "test_yourself": "Why doesn't a single stall speed work for both calm level flight and a steep turn?"
  },
  "aviation-b2-tri-invents": {
    "title": "A jetliner's three headline tricks",
    "tldr": "An engine that eats air to make thrust; an orange box that outlives a crash; and 11 km up, where the air is nearly empty. Let's unpack what these three have in common.",
    "body_md": "A modern airliner has three engineering ideas that look unrelated but serve one goal — **squeezing the most out of air and physics**.\n\nThe **turbofan engine** lives by \"squeeze it, burn it, throw it\": it sucks in air, compresses it, ignites it with kerosene, and blasts a scorching jet out the back. By Newton's third law, the plane goes forward.\n\nThe **black box** (which is actually bright orange) isn't some \"everything gets streamed to the cloud\" system — it's two hardened recorders: one logs flight parameters, the other captures cockpit sound. Their casing is built to survive what the plane won't.\n\n**11 km up** isn't a whim but a calculation: the air there is so **thin** that drag drops, kerosene is saved, and speed climbs.\n\nThe common thread: air is fuel, medium, and enemy all at once. The engine feeds on it, the wing leans on it, and at high altitude you deliberately seek out the thinnest air you can find. Let's dive into two of the three.",
    "terms": [
      {
        "term": "thin air",
        "explain": "air with fewer molecules in the same volume — like the top of a mountain, only more extreme"
      },
      {
        "term": "thrust",
        "explain": "the forward force the engine creates to push the plane ahead"
      }
    ],
    "test_yourself": "Why are all three solutions — the engine, the cruise altitude, and the wing's shape — so tightly tied to the density of the air?"
  },
  "aviation-b2-turbofan": {
    "title": "Turbofan: squeeze it, burn it, throw it",
    "tldr": "A jet engine isn't \"fire pushing the plane.\" Most of the thrust comes from a giant fan up front, driving cold air around the hot core.",
    "body_md": "Let's walk the \"squeeze — burn — throw\" cycle honestly.\n\n1. The **fan** (that huge disc of blades you see up front) inhales a ton of air. A smaller share goes into the hot core; the larger share goes around it, bypassing it entirely.\n2. The **compressor** squeezes the core air dozens of times over — it turns dense and hot before any fire at all.\n3. The **combustor**: kerosene is sprayed into the compressed air and lit. The gas expands violently.\n4. The **turbine**: the expanding gas spins it on the way out, and through a shaft it drives the compressor and the fan up front. The engine powers itself.\n\nThe trick is the **bypass ratio**: modern engines send 8-12 parts of cold air around the core for every 1 part through it. That cold stream is what delivers ~80% of the thrust — pushing a lot of air slowly is more efficient and quieter than pushing a little air furiously. That's why the old \"screaming\" turbojets gave way to the \"fat,\" quiet turbofans.\n\nEssentially, the core is a generator whose only job is to spin a big fan.",
    "terms": [
      {
        "term": "bypass ratio",
        "explain": "how many times more cold air goes around the core than hot air goes through it"
      },
      {
        "term": "compressor",
        "explain": "a row of blades that squeeze the air to high pressure before ignition"
      },
      {
        "term": "turbine",
        "explain": "a wheel spun by the exhaust gas; the same wheel drives the fan through a shared shaft"
      }
    ],
    "test_yourself": "Why is moving a lot of air slowly more efficient than moving a little air at enormous speed?"
  },
  "aviation-b2-blackbox": {
    "title": "The black box is orange and nearly indestructible",
    "tldr": "It's two recorders: the FDR logs flight data, the CVR captures cockpit sound. The casing survives a 3400 g impact, 1100 °C of fire for half an hour, and a month underwater. And it's orange.",
    "body_md": "\"Black box\" is a marketing name. There are two of them on board, and both are bright **orange**, so they stand out among the wreckage.\n\nThe **FDR** (flight data recorder) logs hundreds of parameters: altitude, speed, control-surface positions, engine RPM — the last ~25 hours of flight.\n\nThe **CVR** (cockpit voice recorder) captures cockpit sound: the pilots' voices, radio traffic, switch clicks, and warnings — the last ~2 hours.\n\nThe interesting part is how the memory is protected. Under the **ED-112A** standard, the casing around the chips has to survive:\n\n- an impact of **3400 g** (the instantaneous g-load of slamming into the ground);\n- a static crush of ~2.25 tonnes;\n- fire at **1100 °C** over its entire surface for 30 minutes;\n- immersion in seawater at depth for up to 30 days.\n\nThe flash-memory board itself is tiny — all the armor goes into heat shielding and the steel/titanium capsule around it. Plus an **underwater locator beacon** (ULB), which after a water crash pings ultrasonically for ~30 days so the box can be found on the seabed.\n\nSo what actually survives a crash isn't the \"box\" as a whole — it's the memory module inside its armored capsule.",
    "terms": [
      {
        "term": "3400 g",
        "explain": "a g-load 3400 times Earth's gravity — the casing withstands such an impact for a fraction of a second"
      },
      {
        "term": "ED-112A",
        "explain": "the international standard defining which impacts, heat, and water a recorder must survive"
      },
      {
        "term": "underwater locator beacon (ULB)",
        "explain": "a device that emits an ultrasonic ping underwater so the box can be located on the seabed"
      }
    ],
    "test_yourself": "What actually survives a crash — the whole casing of the box or just its core, and why is that a meaningful distinction?"
  },
  "law-return-goods-14-days": {
    "title": "Item didn't work out? You've got 14 days — but sellers lie about \"no receipt, no return\"",
    "tldr": "In Belarus, a working item that just didn't suit you can be returned within 14 days — and they must refund you within 7 days, or a penalty of 1% per day starts piling up.",
    "body_md": "A classic scenario: you buy a shirt, get home, and realize it's the wrong size. The seller grumbles, \"non-returnable.\" Under Belarusian law, that's often simply not true.\n\n**Article 28 of the Law \"On Protection of Consumer Rights\"** gives you the right to return or exchange a **non-food item of proper quality** (i.e. working, no defects) if it **didn't suit you in size, shape, dimensions, style, color, or configuration**. The window is **14 days**, not counting the day of purchase.\n\nThe conditions under the hood: the item wasn't used, it keeps its original look, tags, and factory packaging, and you have a **document confirming the purchase** (not necessarily a paper receipt — there's a separate card on that). They must refund the money **within 7 days**; miss that and you're owed a **penalty of 1% of the price for every day** of delay.\n\nOne important catch: there's a **list of items that can't be returned** even in perfect condition — underwear, perfume, medicines, jewelry, and so on (Council of Ministers Resolution No. 778). So \"can't be returned\" is sometimes genuinely true — but the seller has to cite the legal grounds, not just wave you off.\n\nRussia follows the same logic (also 14 days, Art. 25 of their law). In the EU there's no single in-store \"cooling-off\" right — there, it applies to online purchases.",
    "terms": [
      {
        "term": "item of proper quality",
        "explain": "a working item with no defects — you're returning it not because it's broken, but simply because you changed your mind or it didn't fit"
      },
      {
        "term": "penalty (neustoika)",
        "explain": "a fine the seller pays you for missing the deadline; it accrues automatically by law"
      }
    ],
    "test_yourself": "The seller agreed to take back the jacket that didn't fit, but has been dragging out the refund for 10 days now. What are you owed on top of the price of the jacket?"
  },
  "law-return-without-receipt": {
    "title": "\"No receipt, no return\" — retail's most stubborn lie",
    "tldr": "Both Belarusian and Russian law explicitly let you prove a purchase by means other than a receipt — even witness testimony. Losing the slip of paper doesn't strip you of your rights.",
    "body_md": "The line \"no receipt, so get lost\" survives because people confuse **a receipt as convenient evidence** with **a receipt as a mandatory condition**. Those are two different things.\n\nUnder Belarusian law, the basis for a return is having a **document confirming the fact of purchase**. The key word is *confirming*, not *\"cash register receipt.\"* A sales slip works, a card statement works, an e-receipt in your banking app works, a warranty card with the store's stamp works.\n\nRussian law puts it even more bluntly and directly: **the absence of a cash or sales receipt is not grounds for refusal** (Arts. 18 and 25 of their consumer law). What's more, the buyer may **rely on witness testimony** — that is, bring in a person who saw the purchase.\n\nUnder the hood, this is the principle of **allocating the burden of proof**: the law deliberately makes life easier for the consumer, the weaker party with no legal department. The store is the professional — it's the one that should keep the records.\n\nA techie's practical hack: in the cashless era, a receipt is almost always reproducible. A transaction in your banking app with the date, amount, and merchant is essentially an unkillable log, and a court will accept it.",
    "terms": [
      {
        "term": "burden of proof",
        "explain": "whose job it is to prove they're right; consumer law often shifts it onto the seller"
      },
      {
        "term": "consumer protection law",
        "explain": "the informal shorthand for the Law on Protection of Consumer Rights"
      }
    ],
    "test_yourself": "You paid for an item by card and didn't keep the receipt. What \"log\" will almost always stand in for the paper receipt in a dispute with the store?"
  },
  "law-common-vs-civil": {
    "title": "Two \"operating systems\" of law: why a judge writes law in the US but not in France",
    "tldr": "The legal world splits into two systems: common law (the judge's precedent is a source of law) and civil law (the main source is a written code). Belarus and nearly all of Europe run the second one.",
    "body_md": "Why do court rulings get cited like law in the US, while here a lawyer just opens the code? These are two different \"kernels\" of a legal system.\n\n**Common law** — England, the US, Canada, Australia. The law grew over centuries out of **court decisions**. It runs on the doctrine of **stare decisis** (\"to stand by things decided\"): a court is **bound** to follow an earlier ruling of a higher court in a similar case. Precedent is a full-fledged source of law. In deciding a new case, a judge is literally adding to the law.\n\n**Civil law** (Romano-Germanic) — France, Germany, Belarus, Russia, most of the EU. The main source is a **code**, a systematized written body of law. The judge doesn't create the rule but **applies** it to the facts. Formally, precedent here is **not binding**.\n\nUnder the hood there's a subtlety people get wrong: this doesn't mean Europe ignores past rulings. There, **jurisprudence constante** applies: once a *stable, consistent* line of practice from the high courts builds up on a question, it works as \"soft law\" — courts take it into account for the sake of predictability. The difference is mechanical: in common law, **one** binding precedent from above is enough; in civil law, what matters is a **line** of consistent decisions.\n\nHence the everyday differences too: in the US, case law on returns and lawsuits carries huge weight, while here it's the exact wording of the code article that decides.",
    "terms": [
      {
        "term": "stare decisis",
        "explain": "Latin for \"to stand by things decided\" — the rule requiring a court to follow earlier decisions of higher courts"
      },
      {
        "term": "jurisprudence constante",
        "explain": "a settled line of consistent court decisions in civil law; it carries influence but formally doesn't bind a court the way a hard precedent does"
      },
      {
        "term": "code",
        "explain": "a single systematized written collection of laws for one branch (Civil, Criminal, and so on)"
      }
    ],
    "test_yourself": "What's the key mechanical difference: how many past decisions does it take to bind a court in common law versus civil law?"
  },
  "law-b2-oferta-akcept": {
    "title": "What a contract is glued from: offer and acceptance",
    "tldr": "A contract is born not the moment you sign, but when a clear proposal (offer) meets agreement (acceptance). That's exactly where \"yes\" becomes legally binding.",
    "body_md": "We think of a contract as a piece of paper with signatures. In reality the paper only records what has already happened: the meeting of two wills. The mechanism is universal (Belarus, Russia, civil law generally).\n\nAn **offer** is a specific proposal to enter into a contract: with a price, subject matter, and terms, addressed to a specific person and expressing the intent to be bound if it's accepted. The key word is **specific**. A price tag in a shop or an ad usually is NOT an offer, but an **invitation to make offers** (invitatio ad offerendum) — otherwise the seller would be obligated to sell the item to everyone who shouted \"I'll take it.\"\n\n**Acceptance** is a full, unconditional \"yes\" to the terms of the offer. The moment of acceptance = the moment the contract is born. And here there are two traps:\n\n- A reply of \"agreed, but cheaper\" is NOT acceptance, but a **counteroffer**. The roles flip: now you're the one waiting for a \"yes.\"\n- As a general rule, silence doesn't count as acceptance — \"if you don't reply within 3 days, that means you agree\" doesn't work.\n\nUnder the hood: the law isn't looking for a signature, but for the moment when the offer and the agreement lined up on every essential term.",
    "terms": [
      {
        "term": "offer",
        "explain": "a specific proposal to enter into a contract that already contains all the essential terms and the intent to be bound"
      },
      {
        "term": "acceptance",
        "explain": "full, unconditional agreement to the terms of the offer; the moment the contract is deemed concluded"
      },
      {
        "term": "invitatio ad offerendum",
        "explain": "an \"invitation to make offers\" — a shop display, an ad, a catalog; on their own they don't create a contract"
      }
    ],
    "test_yourself": "You replied to a proposal with \"I'll take it, but with a 10% discount.\" Is the contract concluded? Why?"
  },
  "law-b2-prezumpciya-molchanie": {
    "title": "Presumption of innocence and the right to remain silent",
    "tldr": "It's the state that has to prove guilt, not you who has to prove your innocence. That's where the right to remain silent when detained comes from: in the US they're required to read it out (Miranda); in Belarus/Russia it exists too, but in its own way.",
    "body_md": "The **presumption of innocence** is the foundation: a person is considered innocent until guilt is proven and established by a court verdict that has taken legal effect. The burden of proof lies with the prosecution, not the accused. A direct consequence is the **right not to testify against yourself**: since you don't have to prove your innocence, you also don't have to help incriminate yourself.\n\n**US (Miranda v. Arizona, 1966).** If a person is taken into custody and is about to be questioned (*custodial interrogation*), the police MUST read their rights before asking anything: the right to remain silent, that anything said will be used against them, and the right to an attorney (including a free one). If they don't, a court can exclude the statements obtained during the interrogation. That's the famous \"You have the right to remain silent.\"\n\n**Belarus / Russia.** The right not to testify against yourself and your close relatives is enshrined directly in the constitutions (in Belarus — Art. 27, in Russia — Art. 51). The Miranda \"ritual\" isn't mandatory here, but the right to counsel and to silence still applies. The difference is in emphasis: in the US the stress is on the warning procedure, here it's on the constitutional right itself.\n\nUnder the hood: silence isn't a sign of guilt, it's a lawful tool. The jurisdiction only decides HOW you get reminded of it.",
    "terms": [
      {
        "term": "presumption of innocence",
        "explain": "until a court proves guilt with a verdict, a person is considered innocent; it's the prosecution that has to prove it"
      },
      {
        "term": "custodial interrogation",
        "explain": "questioning of a person already deprived of their freedom (taken into custody); this is exactly when the Miranda rule kicks in in the US"
      },
      {
        "term": "Miranda warning",
        "explain": "the warning of rights that's mandatory in the US before questioning a detainee; without it, statements may not be admitted"
      }
    ],
    "test_yourself": "US police detained a person and are interrogating them without reading their rights. What can a court do with the statements obtained?"
  },
  "law-b2-gdpr-dannye": {
    "title": "GDPR: your data, your rules",
    "tldr": "The EU's GDPR starts from the idea that your personal data belongs to you. It hands you concrete buttons: \"show me everything you know about me\" and \"delete it.\"",
    "body_md": "**GDPR** (General Data Protection Regulation, in force across the EU since 2018) flipped the logic: a company doesn't \"own\" your data, it merely **processes** it, and it's obligated to explain why. You — the **data subject** — get a set of rights the company must honor for free and on time (usually within a month).\n\nThe two most powerful ones:\n\n- **Right of access (Art. 15).** You can demand confirmation that your data is being processed and get a copy of it, plus details: why it's processed, on what legal basis, who it was shared with, and how long it's kept. This is a **subject access request (SAR)**.\n- **Right to erasure / \"right to be forgotten\" (Art. 17).** You can demand your data be wiped — for example, if it's no longer needed for the purpose it was collected for, or you've withdrawn consent. But the right is NOT absolute: if the data is required by law (taxes, courts) or for freedom of speech, the erasure will be refused.\n\nAn important subtlety under the hood: these are separate rights. A request for a copy (Art. 15) doesn't by itself trigger deletion, and a request for deletion doesn't hand you a copy before the wipe.\n\n**Jurisdiction:** GDPR is EU law, but it hits extraterritorially: it applies to any company that processes the data of people in the EU. Belarus and Russia have their own personal-data laws with a similar idea, but different procedures.",
    "terms": [
      {
        "term": "data subject",
        "explain": "the person the personal data relates to; they're the one who holds the rights under GDPR"
      },
      {
        "term": "subject access request (SAR)",
        "explain": "a request under Art. 15: it forces a company to show what data of yours it holds and how it uses it"
      },
      {
        "term": "right to be forgotten",
        "explain": "the right to demand deletion of your data (Art. 17); it doesn't always work — there are lawful exceptions"
      }
    ],
    "test_yourself": "You ask a company to delete your data, but it's required to keep it for 5 years under tax law. Are they obligated to wipe it?"
  },
  "business-share-and-dividend": {
    "title": "A share is a slice of a company, sitting in your pocket",
    "tldr": "Buy a share and you become a co-owner of the business, not a lender. A dividend is your cut of the profit, but they only pay it if they decide to.",
    "body_md": "When you buy a **share**, you're not lending the company money, you're buying a **piece of ownership**. Own 0.001% of Apple and you're legally one of its owners, right alongside the big funds. That gives you two rights: to vote at the shareholders' meeting (one share, one vote) and to receive a slice of the profit, the **dividend**.\n\nUnder the hood, there's a crucial catch: a dividend is **not** like interest on a deposit. A bank is obligated to return your deposit plus interest. A company, by contrast, is **not** obligated to pay a dividend at all. The board can decide to plow all the profit back into growth (Google and Amazon did exactly that for decades). In that case you make money differently: the share appreciates, and you sell it for more than you paid (a **capital gain**).\n\nWhy does it work this way? A shareholder is an owner, and owners take on risk. If the business goes bust, a lender gets paid back first, while the shareholder gets whatever is left after all the debts are settled, which is often nothing. In exchange for that risk comes potentially unlimited upside. This is the fundamental bargain of capitalism: **more risk, more potential reward**.",
    "terms": [
      {
        "term": "capital gain",
        "explain": "the difference between the price you sold a share for and the price you paid for it"
      },
      {
        "term": "board of directors",
        "explain": "an elected body that runs the company in between shareholders' meetings"
      }
    ],
    "test_yourself": "Why isn't a dividend the same thing as interest on a bank deposit?"
  },
  "business-ipo-mechanics": {
    "title": "IPO: how a private company turns public in a single day",
    "tldr": "An IPO is the first sale of shares to the general public on an exchange. The company raises money to grow, and the founders get a chance to cash out their paper wealth.",
    "body_md": "An **IPO** (Initial Public Offering) is the moment a company sells its shares to the general public for the first time, through a stock exchange. Before that, only the founders and early investors hold its shares; afterward, anyone with a brokerage account can.\n\nWhy do it? Two reasons. First, to **raise capital**: the company issues new shares and sells them, and that money flows into the business (factories, hiring, expansion). Second, to give early owners an **exit**: their stake was \"paper\" for years, and now it can be sold for real cash.\n\nUnder the hood it's trickier than it looks. The company hires **underwriters** (investment banks) that value the business and set the offering price. They also gather orders from big funds ahead of time, a process called book building. On IPO day, free trading opens on the exchange and the price can swing hard: if it rockets up +50%, that often means the underwriters **underpriced** the offering and the company left money on the table.\n\nOne important side effect: once public, the company must disclose its finances every quarter and answer to thousands of shareholders. Freedom in exchange for transparency and market pressure.",
    "terms": [
      {
        "term": "underwriter",
        "explain": "an investment bank that runs the IPO, values the company, and sets the starting share price"
      },
      {
        "term": "book building",
        "explain": "gathering advance orders from large investors to gauge demand and set the price"
      }
    ],
    "test_yourself": "If a share jumps +60% on its first day of trading, why might that be bad news for the company itself?"
  },
  "business-ooo-vs-ao": {
    "title": "LLC or JSC: interests vs. shares, and why they're different universes",
    "tldr": "In an LLC, capital is split into interests, and you can't sell yours without your partners' consent. In a JSC, it's split into shares that trade freely. Everything else follows from that.",
    "body_md": "On paper the difference is a single word, but that word drags everything else along with it. The charter capital of an **LLC** (limited liability company) is divided into members' **interests**. The capital of a **JSC** (joint-stock company) is divided into **shares**. An interest is an entry in the founding documents; a share is a transferable security.\n\nThe main consequence is **liquidity**. A JSC shareholder can dispose of their shares freely: sold on an exchange in seconds, no one's permission needed. An LLC member, to exit, usually has to offer their interest to the other members first (a **right of first refusal**), so the partners control who gets to join the business. That's why an LLC is a form for \"insiders,\" while a JSC is built to attract a crowd of outside investors.\n\nHence the other differences in Belarus: an LLC has no minimum charter fund and no more than 50 members; an open JSC has a minimum of 400 base units, and the number of shareholders is unlimited.\n\nUnder the hood, one word unites them: **\"limited.\"** In both, a member risks only what they put in. If the business goes under, they can take back the capital contribution, but not the owner's apartment or car. It's a brilliant 19th-century invention: without it, no one would ever risk their money in someone else's venture.",
    "terms": [
      {
        "term": "charter capital (fund)",
        "explain": "the starting money or property the owners contribute when the company is set up"
      },
      {
        "term": "right of first refusal",
        "explain": "the right of the other LLC members to be first in line to buy out a departing partner's interest"
      },
      {
        "term": "base unit",
        "explain": "a reference unit in Belarus that fines, fees, and similar sums are pegged to"
      }
    ],
    "test_yourself": "Why is it harder for an LLC member to \"exit\" the business than it is for a shareholder in a public JSC?"
  },
  "business-b2-profit-not-cash": {
    "title": "Profit isn't money: why a profitable business can still go bankrupt",
    "tldr": "A company can post a profit on its statements and still have no money in the bank, all the way to bankruptcy. Profit and cash live by different rules.",
    "body_md": "Accounting measures **profit** on an accrual basis: sell 100 thousand worth of goods and you book the revenue, even if the money hasn't arrived yet. But what actually moves through the account is **cash**, real money here and now. These two numbers almost never match.\n\nPicture this: you sell a product at a profit, but the customer pays 60 days later (**payment terms**). Meanwhile payroll, rent, and your supplier all need paying today. On paper you're in the black, but the account reads zero. This is called a **cash gap**.\n\nUnder the hood, money gets frozen in three places: in **receivables** (customers owe you), in inventory (you bought stock, so cash turned into boxes), and in taxes, which come due before the revenue lands. The faster you grow, the harder cash gets sucked away: more purchasing and more payroll, while the money from customers is still in transit.\n\nA classic story: a profitable company grows, cheers its statements, and then dies because it can't cover the next payment. That's why seasoned entrepreneurs don't just watch the profit statement, they watch **cash flow**, the movement of actual money.",
    "terms": [
      {
        "term": "Accrual basis",
        "explain": "revenue is recorded at the moment of the deal, not when the money actually hits the account"
      },
      {
        "term": "Cash gap",
        "explain": "the moment when payments are due now but the money from customers hasn't arrived yet"
      },
      {
        "term": "Receivables",
        "explain": "the amount customers owe you but haven't paid yet"
      }
    ],
    "test_yourself": "A company sold 500K worth of goods at a profit this month but can't make payroll. Where did the money go? Name at least two places."
  },
  "business-b2-vat-mechanics": {
    "title": "How VAT works: everyone pays it, but the final buyer bears it",
    "tldr": "VAT is collected at every step of the chain, but a business only hands the tax on ITS OWN markup to the government. The last buyer ultimately pays the whole thing.",
    "body_md": "**VAT** (value-added tax) works more cleverly than it seems. It's not just the shop that pays it, it's every link in the chain from raw material to shelf. But each link only pays on the value IT added.\n\nThe mechanics rest on two ideas. **Output VAT** is what you charged the buyer on top of your price. **Input VAT** is what you yourself paid your supplier. You hand the difference to the government: output minus input (this is called crediting, or a deduction).\n\nHere's an example at a 20% rate. A plant sells material for 100 + 20 VAT. A factory buys it (paying 20 of input VAT), makes a product, and sells it for 200 + 40 VAT. The factory hands the government 40 − 20 = **20**, tax only on its own markup of 100. So at each step the state collects tax on the value added, not on the entire amount all over again.\n\nThe key point under the hood: the business is only a **collector**. The real money comes out of the final buyer's pocket, because they have no one to reclaim input VAT from. That's why VAT is called a consumption tax: the chain pumps it along, and the last one carries it.",
    "terms": [
      {
        "term": "Value added",
        "explain": "the markup a given link added on top of what it paid to buy the goods"
      },
      {
        "term": "Input VAT",
        "explain": "the tax you already paid your supplier and can deduct"
      },
      {
        "term": "Credit (deduction)",
        "explain": "the right to reduce your own tax by the amount already paid inside the purchase price"
      }
    ],
    "test_yourself": "You bought goods for 120 (including 20 VAT) and sold them for 240 (including 40 VAT). How much VAT do you hand over, and why isn't it 40?"
  },
  "business-b2-unit-economics": {
    "title": "Unit economics: do you actually make money on a SINGLE customer",
    "tldr": "Before you scale a business, check one question: does a single customer bring in more than it cost to acquire them? If not, growth only speeds up your losses.",
    "body_md": "**Unit economics** is a magnifying glass on a single \"unit\": one customer or one sale. The question is simple and brutal: are you making money on them, or paying extra?\n\nTwo key numbers. **CAC** (Customer Acquisition Cost) is what it costs to bring in one customer: ads, salespeople's wages, tools, everything, not just the ad budget. **LTV** (Lifetime Value) is how much NET profit that customer will bring over the entire time they buy from you (count it on margin, not revenue, or you'll overstate it twofold).\n\nThe benchmark for a healthy model is an **LTV:CAC of 3:1 or better**. That means every dollar you put into acquisition returns three dollars of profit over the customer's lifetime. Below 1:1 you lose money on every buyer, and the more you spend on ads, the faster you sink.\n\nThere's also the **payback period**: how many months it takes a customer to earn back their CAC. This hits cash directly, you pay to acquire today, and it comes back drop by drop. Which bridges back to profit ≠ money: a model can be profitable in LTV terms yet devour cash while customers are still paying you back.",
    "terms": [
      {
        "term": "CAC",
        "explain": "the full cost of acquiring one customer: ads plus wages, tools, and commissions"
      },
      {
        "term": "LTV",
        "explain": "all the net profit from one customer over the entire time they keep buying from you"
      },
      {
        "term": "Payback period",
        "explain": "how many months of profit from a customer it takes to recover the CAC spent on them"
      }
    ],
    "test_yourself": "You have an LTV of 2,000 and a CAC of 2,500. Should you pour more money into ads, and what happens to the business if you do?"
  },
  "econ-central-bank-rate-inflation": {
    "title": "How a single number from the central bank speeds up or slows down the whole economy",
    "tldr": "A central bank doesn't print happiness or ban price hikes — it moves one lever, the interest rate, and reaches all the way to the price tag at your local store through a chain of middlemen. The target almost everywhere: 2% inflation a year.",
    "body_md": "Picture a thermostat, but with a lag of a year or more. A **central bank** (the Fed, the ECB, the National Bank of Belarus) runs the economy not by decree but with a single number — the **policy rate**: the interest rate at which banks borrow money from it and from each other overnight.\n\nUnder the hood it's a row of falling dominoes. The central bank raises the rate → funding gets more expensive for banks → they raise rates on loans and deposits → borrowing to invest costs businesses more, mortgages cost people more, and saving pays off → **aggregate demand** cools → sellers can no longer jack up prices → **inflation** slows. Cut the rate and it all runs in reverse: money gets cheaper, demand heats up.\n\nThe key thing: the central bank never touches prices directly. It changes the **price of money over time**, and the market re-prices everything else on its own. And it works with a delay — today's decision hits inflation four to six quarters out, which is why the bank aims not at today's number but at the forecast.\n\nMost central banks have spelled out their goal — **inflation of about 2% a year** (the Fed made it official in January 2012). Not zero: a little inflation greases the wheels of the economy and leaves a cushion so it doesn't tip into deflation.",
    "terms": [
      {
        "term": "Policy rate",
        "explain": "the interest rate at which the central bank lends to banks; it sets the baseline price of money for the entire economy"
      },
      {
        "term": "Aggregate demand",
        "explain": "the combined desire of everyone to buy goods and services at a given price level"
      },
      {
        "term": "Lag",
        "explain": "the delay between an action (changing the rate) and its effect (a shift in inflation)"
      }
    ],
    "test_yourself": "Why does a rate hike hit inflation only after a year or more, rather than right away?"
  },
  "econ-why-2-percent-target": {
    "title": "Why central banks aim for 2% inflation, not zero",
    "tldr": "It seems obvious to want stable prices — that is, zero inflation. Yet nearly every central bank on earth targets +2% a year. That's not sloppiness; it's an engineering choice with three built-in safety margins.",
    "body_md": "Zero looks like the ideal — prices don't rise, money doesn't lose value. But central banks deliberately hold to **+2%**. Three reasons, all about the edge cases.\n\n**1. A cushion against deflation.** Inflation is measured imperfectly: the indexes slightly overstate price growth (they don't fully account for products getting better). Aim for 0% and you can easily overshoot into negative territory — into deflation, which is more dangerous (see the neighboring card). 2% is a safety buffer.\n\n**2. Grease for the labor market.** People find it psychologically unbearable to take a cut to their nominal wage — this is **downward nominal rigidity**. But when the real cost of labor needs to fall in a struggling industry, inflation does it quietly: the paycheck stays the same, price growth just eats away at it. With zero inflation you'd have to lay people off instead.\n\n**3. Ammo for the central bank.** The nominal rate ≈ real rate + inflation. With inflation at 2%, the rate in calm times sits around, say, 4%. When a crisis hits, the bank has room to cut. With zero inflation, rates sit near zero — and the bank slams into the **zero lower bound** (pushing below zero is hard; everyone would flee into cash).\n\nBottom line: 2% is the compromise between \"money shouldn't lose its value\" and \"the system needs slack so it doesn't seize up.\"",
    "terms": [
      {
        "term": "Downward nominal rigidity",
        "explain": "the tendency of wages and prices to rise easily but almost never fall — people resist any cut in dollar terms"
      },
      {
        "term": "Real interest rate",
        "explain": "the loan rate minus inflation; it shows the true price of money"
      },
      {
        "term": "Zero lower bound",
        "explain": "the problem where the rate can no longer be cut below roughly 0%, and the central bank loses its main tool"
      }
    ],
    "test_yourself": "How does non-zero inflation let an employer cut real wage costs without laying anyone off?"
  },
  "econ-deflation-danger": {
    "title": "Deflation: how falling prices nearly killed the U.S. economy",
    "tldr": "Cheaper goods sound like a gift to the shopper. But from 1929 to 1933, a ~25% drop in U.S. prices set off a spiral the economy took years to climb out of. The mechanism is called debt deflation.",
    "body_md": "**Deflation** is a sustained fall in the overall price level — the mirror image of inflation. It sounds like a good thing: the same money buys more. The problem lies in the feedback loops.\n\n**The expectations loop.** If prices are falling and everyone can see it, it pays to put off a purchase — it'll be cheaper tomorrow. Demand collapses → sellers cut prices further → the expectation of falling prices is confirmed. The economy freezes up voluntarily.\n\n**Debt deflation** (Irving Fisher's theory, 1933) is what turns a downturn into a catastrophe. Debt is fixed in nominal terms: borrow 1,000, owe 1,000. But if all prices and wages have dropped by a quarter, that 1,000 has grown roughly a third heavier in real terms. Debts pile on real weight all by themselves. Borrowers slash spending and dump assets to keep paying → that pushes prices down further → the debts grow heavier still. Fisher called it a spiral: \"the more debtors pay, the more they owe.\"\n\nThe numbers of the Great Depression: from 1929 to 1933, U.S. consumer prices fell about 25% and the money supply shrank by roughly 35%. Bankruptcies, bank runs, unemployment near 25%. That's exactly why modern central banks fear deflation more than inflation — inflation you fight with the rate, but you can't break a deflationary spiral with the rate: it runs into the zero lower bound.",
    "terms": [
      {
        "term": "Deflation",
        "explain": "a sustained decline in the overall price level in an economy; the opposite of inflation"
      },
      {
        "term": "Debt deflation",
        "explain": "Fisher's mechanism: falling prices increase the real weight of debts, setting off a spiral of bankruptcies"
      },
      {
        "term": "Money supply",
        "explain": "the total amount of money in an economy (cash plus money held in accounts)"
      }
    ],
    "test_yourself": "Why does the real weight of a fixed debt grow during deflation, even though the dollar amount owed never changes?"
  },
  "econ-b2-fx-rate-origin": {
    "title": "Where the exchange rate comes from",
    "tldr": "An exchange rate is the price of one currency in another, and it's born the same place the price of potatoes is: out of supply and demand. Where it drifts in the long run is hinted at by purchasing power parity.",
    "body_md": "The dollar's exchange rate isn't \"the bank's opinion\" — it's an ordinary **price**. The only twist is that the good being priced is money itself. Want to buy an imported phone, pay for hosting, cash out a fee — you need dollars, so you show up with **demand**. Someone selling their export earnings supplies them — that's **supply**. Where the curves cross, there's the rate. More people wanting to buy dollars → the dollar rises, the ruble weakens. Just like the tomato market, except the tomato is money.\n\nThat's the short-run mechanics. Where the rate drifts in the long run is explained by **purchasing power parity (PPP)**: an identical basket of goods should cost roughly the same across countries once you convert through the exchange rate. That's where The Economist's famous \"Big Mac Index\" comes from: they compare the price of one burger across countries and see whether a currency is under- or overvalued. In reality PPP never holds perfectly (tariffs, and services you can't ship across a border), but it sets the \"gravity\" the rate slowly slides toward.\n\nNext door are two more doors: how money grows on its own (compound interest) and why countries gain from trading at all.",
    "terms": [
      {
        "term": "Purchasing power parity (PPP)",
        "explain": "the idea that the same set of goods should cost the same across countries once converted at the exchange rate"
      },
      {
        "term": "Big Mac Index",
        "explain": "a tongue-in-cheek but workable way to compare currencies by the price of one and the same burger"
      }
    ],
    "test_yourself": "If everyone suddenly wants to buy dollars and no new sellers show up — does the ruble strengthen or weaken?"
  },
  "econ-b2-compound-72": {
    "title": "Compound interest and the Rule of 72",
    "tldr": "Compound interest is when your interest starts earning interest of its own. The Rule of 72: divide 72 by the rate in % and you get how many years it takes your money to double. In your head, no calculator.",
    "body_md": "The line \"the eighth wonder of the world\" about **compound interest** is credited to Einstein (he almost certainly never said it, but the idea holds). The difference from simple interest is one thing: interest accrues not just on your original deposit, but on the interest you've already earned. Money grows not in a straight line but **exponentially** — like a snowball.\n\nTo estimate the speed in your head, there's the **Rule of 72**: divide 72 by the annual rate in percent and you get the rough number of years to double. At 8% a year, money doubles in 72/8 = 9 years. At 6%, in 12 years. At 12%, in 6.\n\nUnder the hood: the exact doubling time is ln(2)/ln(1+r) ≈ 0.693/r, so strictly you'd divide by 69.3. But 72 was chosen because it divides evenly by 2, 3, 4, 6, 8, 9, and 12 — easy to do in your head. The trade-off is accuracy: the rule works best in the 6–10% range (at 8% the error is nearly zero), while at 1% or 25% it's already noticeably off. The same mechanism works against you too — inflation at 6% will likewise halve your money's value in 12 years.",
    "terms": [
      {
        "term": "Compound interest",
        "explain": "interest accrues on both the deposit and the interest already earned — growth speeds up on its own"
      },
      {
        "term": "Exponential growth",
        "explain": "growth that curves ever more steeply upward over time, rather than running as a straight line"
      }
    ],
    "test_yourself": "A deposit at 9% a year with compound interest — how many years to double, by the Rule of 72?"
  },
  "econ-b2-comparative-adv": {
    "title": "Comparative advantage",
    "tldr": "Even if a country is worse at making EVERYTHING than its neighbor, trade still benefits both. The secret isn't \"who's stronger\" — it's opportunity cost: what you spend your hours on.",
    "body_md": "Intuition misleads: it seems that if a country is more efficient at everything than its neighbor, it has no reason to trade. In 1817 **David Ricardo** showed the opposite, using England and Portugal, cloth and wine.\n\nTake the numbers. In a year, an English worker makes 10 yards of cloth OR 5 gallons of wine. A Portuguese worker: 6 cloth OR 4 wine. Portugal loses on both goods (England has the **absolute advantage** in everything). Looks like a dead end.\n\nBut look at **opportunity cost** — what you give up. For England, one gallon of wine \"costs\" 2 yards of cloth (10/5). For Portugal, only 1.5 yards (6/4). So Portugal's wine costs less in forgone cloth. Mirror it: cloth is cheaper for England to make. If each specializes where its opportunity cost is lower (**comparative advantage**) and they trade, the total amount of goods rises and both come out ahead.\n\nThis is one of economics' most counterintuitive ideas: the gains from trade come not from someone being \"better,\" but from the difference in what each one sacrifices. The same principle works in life: it pays a surgeon to hire a cleaner even if the surgeon mops faster — an hour of the surgeon's time is worth a whole operation.",
    "terms": [
      {
        "term": "Opportunity cost",
        "explain": "what you sacrifice for a choice: do one thing and you miss out on another"
      },
      {
        "term": "Absolute advantage",
        "explain": "when you make a good faster or cheaper than your rival in raw numbers"
      },
      {
        "term": "Comparative advantage",
        "explain": "when your opportunity cost for a good is lower — that's the one to focus on"
      }
    ],
    "test_yourself": "Portugal's wine is cheaper in \"forgone cloth\" than England's. So what should England specialize in?"
  },
  "english-native-tells": {
    "title": "Three things that give away a non-native speaker even with flawless grammar",
    "tldr": "Native speakers instantly clock a foreigner not by their mistakes, but by unnatural word pairings, literal translations, and calques from their first language. Your grammar can be spotless and it still sounds *off*.",
    "body_md": "Here's the paradox: you can know every tense and never make a single textbook mistake, and still give yourself away in your very first sentence. That's because native fluency doesn't rest on grammar at all — it rests on three layers that school barely teaches.\n\n**Collocations** (words that habitually travel together). A native says *make a decision*, not *do a decision*; *heavy rain*, not *strong rain*; *fast food*, but *quick meal*. There's no logic to it — it's pure statistics: which words have historically shown up as a pair. A native brain stores them as ready-made blocks instead of assembling them from rules.\n\n**False friends.** A word looks familiar but means something else. In Russian, *magazine* looks like \"shop\" but means a periodical; *sympathy* looks like \"liking someone\" but means compassion; *actually* looks like \"currently/relevant\" but means \"in fact.\"\n\n**Word-for-word translation.** \"How are things?\" rendered as *How do you do?* sounds like a 1950s textbook; the living version is *How's it going?* or *You good?*\n\nUnder the hood: a language isn't a set of rules but a vast **corpus** of real phrases. A native predicts the next word from frequency, the way a language model predicts from its weights. So don't learn words in isolation — learn the chunks they live in.",
    "terms": [
      {
        "term": "collocation",
        "explain": "a fixed pairing of words that native speakers put side by side out of habit, not rule (heavy rain)"
      },
      {
        "term": "corpus",
        "explain": "a huge database of real text and speech that linguists (and AI) use to work out which words go together"
      }
    ],
    "test_yourself": "Why can a sentence without a single grammatical error still sound \"un-English\"?"
  },
  "english-make-vs-do": {
    "title": "make vs do: the invisible line everyone trips over",
    "tldr": "Both translate as \"do\" in Russian, but native speakers feel a sharp line between them: *make* is about creating something new, *do* is about action and process. Get it wrong and it grinds like nails on a chalkboard.",
    "body_md": "Russian has one verb for both — English has two, and they aren't interchangeable. To a native ear, *do a cake* sounds as bizarre as \"to commit a cake\" would to us.\n\n**make** — when something **comes into being, is created, produces a result**: *make a cake, make a plan, make a mistake, make money, make a decision, make noise*. The core idea is \"bring into existence something that wasn't there.\"\n\n**do** — when it's about an **action, work, or process** with no obvious new object: *do homework, do the dishes, do a favour, do business, do your job, do exercise*. The core idea is \"carry out, perform, be occupied with.\"\n\nUnder the hood this isn't random. Historical semantics: *make* goes back to \"to shape, to mould\" (a cousin of German *machen*), while *do* traces back to \"to act.\" Hence the rough rule of thumb: **is there a tangible or abstract \"product\"? → make. Is there only activity? → do.**\n\nEdge cases you just have to memorise as exceptions: *make a phone call* (not do), *do your hair* (not make), *make up your mind*. These are fixed **collocations** — you don't derive them from a rule, you store them as a block.\n\nThe hack: don't learn the verb, learn the whole phrase. Then your brain pulls out a ready-made pair instead of guessing.",
    "terms": [
      {
        "term": "semantics",
        "explain": "the meaning a word carries — as opposed to how it's spelled or how it sounds"
      }
    ],
    "test_yourself": "Why does a native say make a mistake but do homework — what principle is behind it?"
  },
  "english-phrasal-verbs": {
    "title": "Phrasal verbs: why give up, give in and give away are three different words",
    "tldr": "A verb plus a tiny particle spawns a new meaning you often can't guess from the parts. This is the main wall between \"correct\" and \"like a local\" — and a favourite trap of real speech.",
    "body_md": "A **phrasal verb** is a verb + a particle (up, out, in, off, away…) where the sum of the parts lands on an unexpected meaning. *give up* — to surrender; *give in* — to yield under pressure; *give away* — to hand over for free / to reveal a secret; *give off* — to emit (a smell). One root, four unrelated meanings.\n\nWhy this matters so much: in conversation, natives reach for phrasal verbs over their \"Latinate\" synonyms. Say *I want to postpone the meeting* and people will understand — but it sounds formal, like a report. The living version is *let's put it off*. Or *find out* instead of *discover*, *come across* instead of *encounter*. Spoken English is built on these little pairings.\n\nUnder the hood, two traps. First: **separable vs inseparable**. Some can be split (*turn the light off* = *turn off the light*), and with a pronoun the split is mandatory: *turn it off*, but never *turn off it*. Others can't be split at all: *look after the kids*, never *look the kids after*.\n\nSecond: the particle shifts more than the meaning — it shifts the nuance. *up* often adds a sense of \"completely, all the way\": *eat* → *eat up* (finish it all), *drink* → *drink up*.\n\nThe native strategy: don't cram lists — catch phrasal verbs in context (shows, podcasts) and remember them as whole scenes. Then they surface automatically.",
    "terms": [
      {
        "term": "phrasal verb",
        "explain": "a verb with a particle that produces a new meaning (give up = to surrender)"
      },
      {
        "term": "separable",
        "explain": "a phrasal verb whose parts can be split apart by the object (turn the TV on)"
      }
    ],
    "test_yourself": "Why is turn it off correct but turn off it wrong?"
  },
  "english-spk-hub-sound-native": {
    "title": "Why native speakers \"swallow\" words — and how to start sounding the same",
    "tldr": "Natives don't speak word by word — they speak in fused sound-blocks. Once you get the mechanics, the \"mush\" turns back into words and you start sounding natural yourself.",
    "body_md": "You learned words one at a time, but a native pronounces them as a **continuous stream** — so what you hear is an unintelligible \"mush\" instead of the words you know. That's not your hearing failing you, it's **connected speech**: in real speech, sounds at word boundaries latch onto each other, weaken, and merge.\n\nThree things going on under the hood. **Linking** — a final consonant glues onto the next vowel: *an apple* sounds like *a-napple*. **Weak forms** — function words (*to, and, of, for*) lose their full vowel and shrink to a blurry *tə, ən, əv*. **Reduction** — whole combinations collapse: *going to → gonna*, *want to → wanna*, *got you → gotcha*.\n\nThe key shift: stop aiming for \"crisp pronunciation of every word.\" A native sounds natural not because they speak cleanly, but because they **cut corners in the right places** — by the same consistent rules.\n\n**Today:** take the phrase *What are you going to do?* Say it first word by word, then fused: *whatcha gonna do*. Feel where your tongue saves effort. That's your entry point into sounding natural.",
    "terms": [
      {
        "term": "connected speech",
        "explain": "how sounds change at word boundaries in a live stream, rather than in dictionary form"
      },
      {
        "term": "weak forms",
        "explain": "the reduced versions of function words (to, of, and) where the vowel collapses into a blurry \"ə\""
      }
    ],
    "test_yourself": "Why does \"want to\" sound like \"wanna\" in real speech — what process is responsible?"
  },
  "english-spk-linking-mechanics": {
    "title": "Under the hood of linking: how sounds glue into one stream",
    "tldr": "Three mechanisms — linking, merging, dropping — turn separate words into a smooth stream. Know them and you speak fluidly and catch everything.",
    "body_md": "Let's break down what the tongue physically does when a native speaks \"fused.\" The three main processes of **connected speech**.\n\n**1. Linking.** A final consonant glues onto the opening vowel of the next word. *turn it off* → *tur-ni-toff*. The words aren't split by a pause — the boundary just vanishes and the stream pours through.\n\n**2. Assimilation.** A sound changes to become more like its neighbour. The alveolars */t/, /d/, /n/* \"drift\" especially easily. The classic case is **coalescence** (merging): */t/ + /j/* yields */tʃ/*. Hence *got you → gotcha*, *don't you → doncha*. Two sounds collapse into one new one.\n\n**3. Elision.** A sound simply disappears, most often */t/* and */d/* in the middle of a cluster: *next day* → *nex day*, *friendship* → *frienship*.\n\nWhy this matters to you as a speaker: if you pronounce every single sound separately, your speech sounds robotic and slow — and that, not your accent, is exactly what marks you as \"a foreigner\" to a native ear.\n\n**Today:** write out 5 of your frequent phrases (*I don't know, what do you want*) and mark the joints where a sound can be glued or dropped. Say them the new way out loud 10 times.",
    "terms": [
      {
        "term": "assimilation",
        "explain": "a sound changing to become more like its neighbour"
      },
      {
        "term": "coalescence",
        "explain": "two neighbouring sounds merging into one new one (t + y → \"ch\" in gotcha)"
      },
      {
        "term": "elision",
        "explain": "a sound disappearing entirely (next day → \"nex day\")"
      }
    ],
    "test_yourself": "In \"got you → gotcha,\" which two sounds merge into one — and what is that process called?"
  },
  "english-spk-shadowing-drill": {
    "title": "Shadowing: echo a native in real time and stop translating in your head",
    "tldr": "You speak AT THE SAME TIME as the audio, not after it. That way your brain records rhythm and intonation directly, bypassing translation — and you start thinking in English.",
    "body_md": "**Shadowing** is a technique coined by polyglot professor **Alexander Arguelles** (he learned dozens of languages). The idea: you repeat a native's speech **not after a pause, but simultaneously with it**, trailing by a fraction of a second — like a shadow.\n\nWhy it works under the hood. When you listen, hit pause, then repeat, your brain has time to run the text through **translation** and conscious analysis. With simultaneous repetition there's no time for that: you're forced to copy the sound as a raw \"blank\" — the rhythm, the intonation, the very links and reductions from the neighbouring cards. Your brain records the motor template of speech directly, bypassing your native language. That is exactly the training for \"thinking in English.\"\n\nA bonus from Arguelles: he advised doing it **on the move, walking briskly, spine straight, and out loud** — the body's movement keeps the brain alert and stops you sliding into a mumble.\n\n**Today (10 minutes):**\n1. Grab 30–60 seconds of audio with subtitles (a podcast, a show).\n2. Listen once without repeating.\n3. Play it again and speak ALONGSIDE the speaker without stopping the recording — copy the music of the speech, not just the words.\n4. Repeat the same clip 5–7 times until it \"clicks.\"\n\nDon't chase new material — chase making one clip sound like the original.",
    "terms": [
      {
        "term": "shadowing",
        "explain": "repeating after a native in sync, trailing by a fraction of a second, like a shadow"
      },
      {
        "term": "Alexander Arguelles",
        "explain": "a polyglot linguist who devised and popularised the term shadowing"
      }
    ],
    "test_yourself": "How does shadowing differ from the usual \"listen → pause → repeat,\" and why does it help you stop translating in your head?"
  },
  "english-mth-input-hub": {
    "title": "How a language learns itself: the three pillars of the scientific approach",
    "tldr": "Speech isn't \"crammed\" — it surfaces on its own if you feed your brain understandable material just above your level, review it spread out over time, and learn phrases whole rather than isolated words.",
    "body_md": "There are three ideas that all of modern language-learning science rests on, and all three strike at the habit of \"cramming words and grammar.\"\n\n**First — comprehensible input.** In the late '70s, linguist Stephen Krashen put forward the claim that language isn't so much *learned* as *acquired* — subconsciously, when you understand the meaning of what's said many times over. The key formula is **i+1**: the material should be just slightly harder than your current level. Not gibberish (i+10), not what you already know (i+0), but roughly 90% comprehensible with one new piece.\n\n**Second — spaced repetition:** memory holds onto what it's reminded of at growing intervals, not what it's hammered with in one go.\n\n**Third — chunks:** natives speak in ready-made blocks of phrases rather than assembling a sentence word by word from rules.\n\nUnder the hood it's all about one thing: the brain is a prediction machine. Give it understandable context, time to lock things in, and ready-made templates — and speech \"surfaces\" on its own.\n\n**Mini-task:** find a video/podcast where you understand ~80–90% without subtitles. That's your i+1. Too easy — make it harder; losing the thread — make it simpler.",
    "terms": [
      {
        "term": "comprehensible input",
        "explain": "understandable input — speech/text whose meaning you grasp almost in full"
      },
      {
        "term": "i+1",
        "explain": "your level (i) plus one step of difficulty — the sweet spot for growth"
      },
      {
        "term": "acquire",
        "explain": "to learn subconsciously through meaning, rather than by memorising rules"
      }
    ],
    "test_yourself": "What does the \"+1\" mean in the i+1 formula, and why is material at level i+10 useless for acquisition?"
  },
  "english-mth-spacing": {
    "title": "Spaced repetition: why stretching it out beats cramming",
    "tldr": "The brain forgets along a curve, but every last-minute review flattens that curve. Reviewing at growing intervals is more effective than hammering everything in one sitting.",
    "body_md": "In 1885, the German **Hermann Ebbinghaus** memorised nonsense syllables on himself and discovered the **forgetting curve**: without review, fresh memory drops off steeply in the first hours and days. But there's a clever workaround — the **spacing effect**: if you review not back to back (\"cramming\"), but at *growing intervals*, noticeably more lands in long-term memory. This effect has been re-confirmed over a thousand times across different studies — a rare level of reliability for psychology.\n\nUnder the hood, what matters isn't just the pause but **active recall**. You don't reread the phrase — you try to pull it out of your head *with effort*, having nearly forgotten it. That very effort (a \"desirable difficulty\") tells your brain: \"this is important, reinforce the connection.\" Rereading gives no such signal — it feels easy, and that's exactly why it's deceptive.\n\nThe classic study is Bahrick (1993): foreign words reviewed at large intervals stayed in memory *for years*. Every flashcard app (Anki and the like) is built on this: the algorithm shows you a card right when you're about to forget it.\n\n**Mini-task:** take 5 new phrases. Review them today, tomorrow, in 3 days, in a week — recalling them actively, not peeking. Compare that with trying to cram 20 phrases in one go: you'll retain fewer.",
    "terms": [
      {
        "term": "spacing effect",
        "explain": "reviews spread out with pauses are remembered better than back-to-back ones"
      },
      {
        "term": "active recall",
        "explain": "actively retrieving the answer from your head instead of rereading it"
      },
      {
        "term": "cramming",
        "explain": "packing it all into one session before a deadline — learned fast, forgotten fast"
      }
    ],
    "test_yourself": "Why does trying to recall a phrase \"with effort\" (having nearly forgotten it) cement it better than calmly rereading it?"
  },
  "english-mth-chunks-selftalk": {
    "title": "Chunks and talking to yourself: how to build up your speech solo",
    "tldr": "Natives speak in ready-made blocks of phrases rather than assembling sentences from words by grammar. Learn chunks — and train your speaking with no partner: self-talk, retelling, voice notes to yourself.",
    "body_md": "In 1993 Michael Lewis put it bluntly: \"language is grammaticalised lexis, not lexicalised grammar.\" In other words, speech isn't assembling a sentence from words by the rules in real time — it's **pulling ready-made blocks from memory**. Those blocks are **chunks**: `by the way`, `to be honest`, `it depends`, `I was about to...`. By some estimates, 55 to 80% of a native's speech is pre-fabricated multi-word pieces.\n\nWhy it works under the hood: working memory is tiny. Building a phrase word by word is a huge strain (**cognitive load**), and speech stalls. A ready-made chunk comes out in one move — and the brain is freed up for meaning and intonation. Hence the practical shift: don't learn `depend` on its own, learn `it depends on` whole.\n\nYou can speak with no partner at all — the brain needs *output*, not necessarily a conversation partner:\n- **self-talk:** narrate out loud what you're doing right now (\"I'm making coffee, I forgot to...\").\n- **retelling:** watched a clip — retell it out loud in your own words.\n- **voice notes to yourself:** record a minute of speech, listen back, catch the mistakes, and redo it cleaner.\n\n**Mini-task:** pull 5 chunks from your favourite sitcom and weave each one into a 30-second self-talk about your day.",
    "terms": [
      {
        "term": "chunk",
        "explain": "a ready-made block of several words that gets retrieved from memory as a whole"
      },
      {
        "term": "self-talk",
        "explain": "talking to yourself out loud — training speech with no partner"
      },
      {
        "term": "cognitive load",
        "explain": "the strain on working memory; ready-made phrases lighten it"
      }
    ],
    "test_yourself": "Why is learning `it depends on` whole better for fluency than knowing the word `depend` and the rule separately?"
  },
  "creative-808-heartbeat": {
    "title": "The 808: how one flopped 1980s drum machine became the bass of modern rap",
    "tldr": "That deep, chest-thumping bass under Drake and Travis Scott isn't a bass guitar — it's an aging Roland TR-808 drum machine, a product that was actually discontinued as a failure.",
    "body_md": "Pull up almost any modern track — from Travis Scott to Russian rap — and the low end punching you in the chest is an **808**. Roland launched the **TR-808** drum machine in 1980, sold only about 12,000 units over three years, and killed the project: its imitation of real drums just wasn't convincing.\n\nUnder the hood, the trick is that the **808** doesn't store drum recordings — it **synthesizes** the sound with analog circuits. The kick drum comes from a simple sine-wave oscillator with a long decay. That's exactly why you can play it like a note: producers take that kick, stretch out the tail, and use it to play a bass melody. Hence the signature **sliding 808** (glide/portamento) — where the bass smoothly slurs from note to note, like in Travis Scott's tracks.\n\nThe paradox: a machine that flopped at faking live drums became the standard precisely *because* it sounded **artificial and huge**. Hip-hop and electronic artists in the '80s snapped up the cheap secondhand units, and \"808\" went from a model number to a genre term: today it means any synthesized sub-bass, even without a Roland in the room.",
    "terms": [
      {
        "term": "sub-bass",
        "explain": "The very lowest frequencies (roughly 20-60 Hz) that you feel in your body more than you hear with your ears."
      },
      {
        "term": "portamento / glide",
        "explain": "A smooth slide in pitch from one note to the next with no break in between."
      }
    ],
    "test_yourself": "Why can you play an 808 bass as a melody, but not an ordinary recorded kick drum?"
  },
  "creative-sampling-flip": {
    "title": "Flipping a sample: how 4 seconds of someone else's song becomes a new hit",
    "tldr": "Hip-hop producers don't so much \"steal\" other people's music as take it apart atom by atom and rebuild it — chopping, pitching, and looping turn an old fragment into a brand-new beat.",
    "body_md": "A **sample** is a ready-made chunk of sound lifted from another recording. But just dropping it in is boring; the art is in **flipping** it — reworking it until it's unrecognizable.\n\nThe mechanics under the hood rest on three moves. First, **chopping**: the producer slices the sample into tiny pieces (in a tool like Fruity Slicer, say) and maps them across the keys, so they can play a new melody out of fragments of the old one. Second, **pitch-shifting**: changing the pitch. A Southern hip-hop classic is \"chopped and screwed\" — slow it down and drop the pitch, so the voice turns thick, syrupy, and dark. Third, the **loop**: take a good fragment and repeat it endlessly as a foundation.\n\nThe subtle part is the link between pitch and speed. In a raw sample they're glued together: slow it to half speed and the pitch drops an octave (like a vinyl record spinning slower). To move them independently, producers use **time-stretching** — an algorithm that stretches the length without touching the pitch, and vice versa.\n\nYou can hear this approach in Travis Scott's dark, dreamlike looped samples (from producers like WondaGurl), with sliding 808s laid on top. That's how an old fragment becomes the foundation of a completely new track — and fuels endless fights over copyright.",
    "terms": [
      {
        "term": "flip",
        "explain": "Creatively reworking someone else's sample so thoroughly that you essentially get a new piece of music."
      },
      {
        "term": "time-stretching",
        "explain": "An algorithm that changes a sound's length without changing its pitch (or the other way around)."
      },
      {
        "term": "loop",
        "explain": "A short fragment repeated endlessly to serve as the backbone of a beat."
      }
    ],
    "test_yourself": "Why does simply slowing a sample to half speed drop its pitch — and which tool lets you avoid that?"
  },
  "creative-circle-of-fifths": {
    "title": "The circle of fifths: why the chords C-F-G sound \"right,\" and physics knows the answer",
    "tldr": "The circle of fifths isn't musician mysticism — it's a map of how keys are related, and acoustics is behind it: the fifth is the strongest overtone, so chords that sit close on the circle flow into each other naturally.",
    "body_md": "The **circle of fifths** arranges all 12 notes in a ring so that each step is a **perfect fifth** up: C → G → D → A → E … and after 12 steps you're back at C. The genius of it is that neighboring keys differ by just one note in their scales — they share **6 of 7 notes**. That's why moving between them sounds smooth, with no \"jolt.\"\n\nUnder the hood is physics. Any note isn't a pure tone but a fundamental plus **overtones** (frequencies that are multiples of the base). The first and loudest overtone after the octave is exactly the interval of a **fifth**. In other words, the fifth is already \"hidden\" inside the note itself — the ear hears it as the closest relative, which is where that feeling of stability and resolution comes from.\n\nThis explains why **I-IV-V** (in C major, that's C-F-G) is the most common progression in Western music: those three chords sit right next to each other on the circle. Moving down by fifths (V→I) gives the strongest sense of \"coming home\" — that's a cadence. The circle also instantly shows you the key signature: each clockwise step adds one sharp, each step the other way adds one flat. One diagram, and a composer sees how keys are related, the logic of the chords, and how to elegantly slip from one key into another.",
    "terms": [
      {
        "term": "perfect fifth",
        "explain": "The interval between two notes whose frequencies are roughly 3:2 — for example, from C up to G."
      },
      {
        "term": "overtones",
        "explain": "Higher frequencies, multiples of the fundamental, that sound quietly along with any note and give it its timbre."
      },
      {
        "term": "cadence",
        "explain": "A chord move that creates a sense of a phrase ending — a musical \"full stop.\""
      }
    ],
    "test_yourself": "Why do two keys next to each other on the circle of fifths sound \"close\" — how many notes do their scales share?"
  },
  "creative-act-hub-remeslo": {
    "title": "An actor doesn't \"portray feelings.\" They engineer them",
    "tldr": "Good acting isn't about \"genuinely feeling it\" — it's precise engineering: where to source an emotion, when to hold a beat, and who in the scene has higher status. Three levers of the craft that steer the whole room.",
    "body_md": "There's a myth that a gifted actor simply \"feels it for real,\" and the audience believes. In reality, living performance is built on **craft** — a set of testable techniques you can take apart bolt by bolt.\n\nThe craft's first debate: **where does the emotion come from?** The Stanislavski school says from the inside, through **affective memory** (recall your own grief and you'll cry for real). The \"presentational\" school (the **Method** and its critics) says from the outside: set the body, the breath, the gaze, and the viewer will fill in the feeling for you. Both work, but they tax the psyche in different ways.\n\nThe second lever is **comedic timing**: why the third item is the funny one and not the second, and why there's a pause before the punchline. It's pure math of anticipation.\n\nThe third is **status**: in any scene, two people are constantly measuring who's \"on top.\" An actor who can raise and lower their status at will holds both their scene partner and the room.\n\nThe takeaway under the hood: the emotion the audience feels isn't something the actor \"radiates\" — it's something the audience **builds** from precise signals. The craft is about controlling those signals.",
    "terms": [
      {
        "term": "punchline",
        "explain": "The closing line of a joke that the whole setup was building toward — the point where the laugh lands."
      },
      {
        "term": "affective memory",
        "explain": "A Stanislavski technique: summon the feeling you need by recalling a similar moment from your own life."
      }
    ],
    "test_yourself": "How does \"presentational\" acting (from the outside) differ from Stanislavski's approach on the question of where emotion comes from?"
  },
  "creative-act-timing-tri": {
    "title": "The rule of three: why a pause before the punchline is a weapon",
    "tldr": "Laughter comes not from the joke but from a broken expectation. The brain hunts for a pattern, you give it two \"normal\" examples — then break it on the third. The pause before that exists so the audience has time to \"buy\" the pattern.",
    "body_md": "The human brain is a pattern-finding machine. That's what the **rule of three** stands on: the first two elements set up a template, the third one breaks it. \"He grabbed his passport, his ticket, and a sandwich with a dog in it.\" Two items lull you; the third collides expectation with reality — and the gap comes out as a laugh.\n\nWhy three and not four? Three is the minimum for the brain to lock onto a pattern, and the maximum before it gets bored. Shorter, and the pattern never forms; longer, and the rhythm is lost. It's a \"short-short-long\" — a musical phrase.\n\nNow the **timing**. Laughter is the release of built-up tension (close to Kant's and Schopenhauer's idea of the comic as a thwarted expectation). The pause before the punchline is there to **push the tension to its peak**: for a split second the audience is completing the \"correct\" ending — and that's when you slip them the wrong one. Hit too early and the tension hasn't built; hit too late and the audience has already guessed, so the release fizzles.\n\nUnder the hood: a comic isn't \"amusing\" you — they're engineering a curve of expectation and snapping it at the point of maximum tension.",
    "terms": [
      {
        "term": "rule of three",
        "explain": "A device: two examples set up a template, the third breaks it unexpectedly — and that's what produces the laugh."
      },
      {
        "term": "thwarted expectation",
        "explain": "A theory of the comic: it's funny when the brain has built one ending but gets a sharply different one."
      }
    ],
    "test_yourself": "Why is a pause needed before the punchline — what physically happens to the audience's expectation in that split second?"
  },
  "creative-act-status-kacheli": {
    "title": "Status is a verb: Johnstone's seesaw in every scene",
    "tldr": "Keith Johnstone: status isn't something you have, it's something you do. In any scene, two people are constantly seesawing \"I'm up — you're down.\" Comedy is often just a funny loss of status.",
    "body_md": "In his book **Impro**, Keith Johnstone made a discovery: **status is an action, not a position**. A king can play low status, a beggar can play high. What matters isn't who you are but how you carry yourself: the gaze, the pauses, the breathing, the completeness of your movements.\n\nThe core mechanism is the **seesaw**: \"I go up, you go down.\" Status in a scene never sits still — the partners are constantly passing it back and forth like a ball. Johnstone noticed a pattern: **low status accepts, high status blocks**. The high-status player shuts down the other's initiative; the low-status one agrees, fusses, fidgets, apologizes.\n\nWhy is this the heart of acting? Because it bores an audience to watch equals — what's interesting is the **imbalance** and its shifts. Johnstone showed that to bring a dead scene to life, it's often enough to ask the actors to nudge their status relative to each other.\n\nAnd comedy? A huge share of what's funny is a **drop in status**: an important person slips, the boss forgets a word, the proud man falls flat on his face. Sitcom mugging is exactly a loud, camera-readable display of losing status.\n\nUnder the hood: play not an \"emotion\" but a status move — and the emotion reads all on its own.",
    "terms": [
      {
        "term": "status (in Johnstone's sense)",
        "explain": "Not your social rank, but how you behave in the moment — above or below your partner."
      },
      {
        "term": "mugging",
        "explain": "Deliberately exaggerated facial expressions played to the camera in sitcoms — an emotion \"acted out\" loudly."
      },
      {
        "term": "seesaw",
        "explain": "The principle that status in a scene constantly flows back and forth — one rises as the other falls."
      }
    ],
    "test_yourself": "According to Johnstone, what does a high-status player tend to do, and a low-status one, when a partner puts forward an initiative?"
  },
  "creative-med-hub-stage": {
    "title": "Stage, stream, storytelling: three levers of being a media presence",
    "tldr": "Media presence isn't built on inborn charisma but on three controllable mechanisms: how the body reacts to the stage, why viewers feel close to you, and how a story grabs attention. All three can be trained.",
    "body_md": "If you want to perform, stream, or run a blog, three things decide almost everything — and each works by a clear mechanism.\n\n**Stage presence.** The shaking before the camera isn't \"weak character\" — it's **adrenaline**: the brain mistakes an audience for a threat and fires up fight-or-flight mode. The good news is you can steer it with your breath (see the deep-dive card).\n\n**Parasocial connection** — why a thousand viewers of a stream feel like they're your friends, even though you don't know them. It's not charm magic but an effect described back in 1956, which streaming has pushed to the extreme.\n\n**Storytelling.** A story holds attention not because it's \"interesting,\" but because its structure literally conducts the chemistry in the listener's brain — tension, release, reward.\n\nThe overall point: charisma isn't an inborn gift but a **set of skills under the hood**. Take the mechanism apart and you can train it, instead of envying the people it \"just comes naturally\" to. Dive into the details below.",
    "terms": [
      {
        "term": "media presence",
        "explain": "The ability to hold an audience's attention and be recognizable as a public figure."
      },
      {
        "term": "under the hood",
        "explain": "What's actually happening inside the mechanism, rather than how it looks from the outside."
      }
    ],
    "test_yourself": "According to this card, which three mechanisms define media presence — and what do they have in common?"
  },
  "creative-med-stagefright": {
    "title": "Stage fright: adrenaline and the exhale trick",
    "tldr": "The shaking before an audience is your amygdala mistaking the crowd for a threat and flooding your body with adrenaline. You beat it not by \"calming down\" but with a long exhale: it physically flips on your nervous system's brake.",
    "body_md": "Under the hood of stage fright is an ancient survival system. The **amygdala** (the brain's emotional watchdog) sees a hundred eyes on you and decides: danger. It fires up the **sympathetic nervous system**, your adrenal glands dump **adrenaline** and cortisol, and the result is a pulse over 140, fast shallow breathing, sweaty palms, a shaky voice. Your body is gearing up to fight or flee a \"predator\" that isn't there.\n\nThe key point: consciously \"deciding to stop being scared\" is nearly impossible — the amygdala is faster than reason. But there's a back door through the breath. A slow **diaphragmatic inhale and, especially, a long exhale** activate the **parasympathetic nervous system** — the physiological opposite of fight-or-flight. It slows the heart and dampens the stress hormones. An exhale longer than the inhale (say, in for 4 counts, out for 6-8) is a switch your willpower can actually reach.\n\nA second trick is to rename the feeling: call that same adrenaline not \"fear\" but \"excitement before showtime.\" The body's signals are identical, but your behavior shifts. **Adrenaline isn't the enemy — it's fuel**; its energy can go into your delivery instead of into panic.",
    "terms": [
      {
        "term": "amygdala",
        "explain": "An almond-shaped structure in the brain; it triggers fear and the threat response fast — before you've had time to think."
      },
      {
        "term": "parasympathetic nervous system",
        "explain": "The branch of the nervous system that brakes stress: it slows the heart and relaxes you — the \"rest and digest\" mode."
      },
      {
        "term": "diaphragmatic breathing",
        "explain": "Breathing from the belly using the diaphragm rather than the chest; deeper and calmer than shallow breathing."
      }
    ],
    "test_yourself": "Why does a long exhale quell panic better than trying to \"just calm down\" with your mind?"
  },
  "creative-med-parasocial": {
    "title": "Parasocial connection: friendship in one direction",
    "tldr": "The feeling of \"I know this blogger like a friend\" was described back in 1956 as a parasocial connection — a one-way attachment to a media figure. Streaming broke the \"one direction\": chat and live replies make the illusion almost real.",
    "body_md": "The term **parasocial relationship** was coined in 1956 by anthropologist Donald Horton and sociologist Richard Wohl. The idea: through regular contact with a media figure, a viewer builds a **one-way connection** — feeling friendship, closeness, familiarity — while the figure has no idea they even exist.\n\nHow it assembles under the hood: out of many brief **parasocial interactions** (moments where the host seems to speak to you personally — looking into the camera, addressing \"you\") an **illusion of closeness and friendship** accumulates. The brain is wired socially enough that it can't tell \"this person talks to me regularly\" apart from \"I have a friend.\"\n\nStreaming pushed the effect to the extreme and partly broke the \"one direction.\" Classic parasociality was brief and fleeting; a streamer, by contrast, offers real time, chat, replies by name, donations. What emerges is a **one-and-a-half-sided** connection: the viewer is still in an unequal position but gets crumbs of a genuine response. Hence both the strength of viewers' attachment and its traps — for the audience, the sense of closeness can grow sharper than real relationships. Once you understand the mechanism, you can build the connection honestly: addressing the chat, recognizing your regulars, \"looking into the camera like into someone's eyes\" — these are the levers of parasociality.",
    "terms": [
      {
        "term": "parasocial connection",
        "explain": "A one-way feeling of friendship with a media figure (a blogger, a host) who doesn't know you."
      },
      {
        "term": "illusion of closeness",
        "explain": "The sense that you know a person personally, even though the contact was only through a screen."
      },
      {
        "term": "one-and-a-half-sided connection",
        "explain": "The middle ground between TV's full one-sidedness and real dialogue: a streamer sometimes genuinely answers a viewer."
      }
    ],
    "test_yourself": "How does a streamer's parasocial connection differ from the classic 1956 television kind?"
  },
  "space-rocket-staging": {
    "title": "A rocket hauls fuel to haul fuel — that's why it gets chopped to pieces",
    "tldr": "A rocket's speed grows with the logarithm of its mass ratio, but the fuel needed to hit a target speed grows exponentially. So we split the rocket into stages and throw away the empty tanks — otherwise almost all the mass would go into accelerating what's about to become dead weight.",
    "body_md": "To reach orbit, a rocket doesn't just need to \"go up high\" — it needs a monstrous sideways speed, roughly **9.4 km/s** once losses are counted. And here a brutal law kicks in, written down by Tsiolkovsky back in 1903: **the rocket equation**. It says the speed gain equals the exhaust velocity times the **logarithm** of the wet-to-dry mass ratio (Δv = v · ln(M₀/M_dry)).\n\nThat logarithm is a trap. It grows painfully slowly: to raise your final speed in a straight line, you have to multiply the mass ratio over and over. And the mass ratio is just \"how many times heavier the fueled rocket is than the empty one.\" Every extra kilometer per second demands not \"a bit more\" fuel, but **exponentially more**. Worse, fuel has to accelerate fuel: to lift the upper tons of kerosene, the lower tons must be shoved upward too — and those need their own fuel to move. A snowball.\n\nThe exponential verdict is harsh: for a single-stage rocket to reach orbit, **over 90% of its liftoff mass must be propellant**. The Falcon 9 first stage runs at about **96%** propellant — the structure, engines and tanks weigh barely more than an empty soda can. A rocket is basically a flying barrel of kerosene with a tiny payload perched on top.\n\nNow let's kill the big myth. It feels like rockets are huge **because space is so far away**. Nope. The Kármán line sits only ~100 km up — a shorter straight-line hop than a drive between two nearby towns. Rockets are huge because of the **exponential fuel penalty**: almost the entire rocket is fuel needed to lift other fuel.\n\nThis is where **stages** save the day. Once the lower tanks run dry, they become dead weight — dragging empty metal and burnt-out engines means wasting fuel on nothing. So you **drop them**. The remaining fuel now accelerates a far smaller mass, and in the rocket equation that sharply improves the mass ratio for the upper stage. By shedding its tail, the rocket effectively \"zeroes out\" the ballast it built up. In practice you rarely see more than four stages: the couplers and joints themselves start weighing too much.",
    "terms": [
      {
        "term": "Tsiolkovsky rocket equation",
        "explain": "The equation linking a rocket's speed gain to exhaust velocity and the logarithm of the full-to-empty mass ratio. The foundation of all rocketry."
      },
      {
        "term": "Delta-v (Δv)",
        "explain": "The \"maneuver budget\" — the total amount a rocket can change its own speed by burning all its fuel. Reaching orbit takes about 9.4 km/s."
      },
      {
        "term": "Mass ratio",
        "explain": "How many times heavier the fueled rocket is than the empty one. The bigger it is, the higher the reachable speed — but it only grows by piling on an ever-larger fraction of fuel."
      }
    ],
    "test_yourself": "An engineer adds a little more fuel and gains +0.5 km/s of speed. Why will the NEXT +0.5 km/s cost him far more fuel mass than the first?"
  },
  "space-orbit-is-falling": {
    "title": "An orbit is just falling — and endlessly missing the Earth",
    "tldr": "A satellite isn't hovering in space and it hasn't switched off gravity — it's falling toward Earth, but moving sideways so fast that the planet keeps curving away beneath it. That never-ending fall is what we call an orbit.",
    "body_md": "Picture a cannon on an impossibly tall mountain, firing sideways. Weak charge — the ball drops nearby. Stronger charge — it flies farther, but still thuds into the ground. Now fire it hard enough that, in the time it takes to fall, **the Earth's surface curves away downward by exactly the same amount**. The ball keeps falling — but the ground keeps not being there. It misses the whole planet, going in a circle. That's an orbit, and Newton dreamed up this exact thought experiment centuries ago — the **Newton's cannonball**.\n\nThe whole trick is sideways speed. Near the surface, Earth curves just enough that you need to travel about **7.8 km/s** (roughly 28,000 km/h) to keep \"falling past\" it. At that speed the ISS laps the entire planet in about **90 minutes**. Go slower and your path bends into the ground — you crash. Go faster and the orbit stretches into an ellipse, or opens up and lets you escape.\n\nNow let's kill the biggest myth: **\"there's no gravity in space.\"** There is — plenty of it. At the ISS's altitude (about 400 km), Earth's pull is still roughly **90% of what you feel standing on the ground** right now. An astronaut hasn't flown out of gravity's reach at all.\n\nSo why do they float inside the station? Because **the station, the astronaut, and their coffee cup are all falling together, at the same acceleration**. When everything falls at once, there's no support underneath you — and it's that support (the floor pushing up on your feet) that you actually feel as \"weight.\" It's the same stomach-drop weightlessness you catch for a second in an elevator that lurches down, or on a roller coaster. On orbit, that fall simply **never ends**, because you keep missing the Earth.\n\nSo the right phrase isn't \"zero gravity\" but **free fall** (scientists say \"microgravity\"). Astronauts haven't escaped Earth's pull — they're forever falling around it, moving just fast enough to never reach the bottom.",
    "terms": [
      {
        "term": "Low Earth orbit (LEO)",
        "explain": "Orbits roughly 160 to 2,000 km up, where the ISS and most satellites fly; staying there takes about 7.8 km/s of sideways speed."
      },
      {
        "term": "Microgravity",
        "explain": "The state where everything falls together and support vanishes, so weight seems to disappear — even though Earth's pull has barely weakened."
      },
      {
        "term": "Free fall",
        "explain": "Moving under gravity alone, with no support or friction; in that moment any object feels weightless."
      }
    ],
    "test_yourself": "If an astronaut on the ISS let go of a wrench, why doesn't it \"drop to the floor,\" even though the gravity around it is almost as strong as on Earth?"
  },
  "space-microgravity-freefall": {
    "title": "Astronauts don't hover — they fall forever, and so does the station",
    "tldr": "Gravity at the ISS is nearly as strong as on the ground — about 90% of it. Astronauts float not because gravity vanished, but because they and the station are falling toward Earth at the exact same rate. Falling with nothing to push against means no weight.",
    "body_md": "The big myth goes: \"there's no gravity in space, that's why things float.\" Wrong. The ISS orbits only ~400 km up, and at that altitude **Earth's pull is still about 90% of what you feel standing on the ground**. If gravity really switched off up there, nothing would hold the station in orbit — it would sail off in a straight line into deep space.\n\nSo why do astronauts float? Because the station, the crew inside it, and every stray pencil are all **in free fall toward Earth with the exact same acceleration**. When you fall together with everything around you, your support vanishes. No support, no sensation of weight. Weight was never gravity itself — it's the force with which you press on the floor (and the floor on you). In free fall there's nothing to press against.\n\nThen why doesn't the ISS smash into the planet? Because it's screaming **sideways at about 28,000 km/h**. Earth is round, so as the station 'falls,' the surface curves away beneath it — the horizon drops at exactly the rate the station descends. The result is an endless fall that keeps missing the planet. That's what an orbit is: not hovering, but missing the ground over and over.\n\nThe most honest analogy is **an elevator with its cable cut**. The instant the car drops, everyone inside goes weightless for a moment: you and the car fall identically, the floor slips out from under you. You feel the same thing at the top of a drop on a roller coaster. NASA deliberately flies a plane on a steep parabola — nicknamed the **'vomit comet'** — and over the top of the arc it gives the crew **about 25 seconds** of true weightlessness, precisely because the plane is in free fall during those seconds too.\n\nThat's why scientists say **'microgravity,' not 'zero-g.'** Tiny residual accelerations remain (vibrations, drag from the thin upper atmosphere), roughly a millionth of Earth's pull — but not zero. Gravity never left. It's just that when you're falling along with your own house, there's nothing left to weigh you.",
    "terms": [
      {
        "term": "Microgravity",
        "explain": "A state where weight almost disappears but not entirely: tiny accelerations remain, around a millionth of Earth's gravity. More accurate than the misleading 'zero-g'."
      },
      {
        "term": "Free fall",
        "explain": "Motion under gravity alone, with no support and no friction. Everything falls at the same rate, so objects appear motionless relative to each other."
      },
      {
        "term": "Weight",
        "explain": "Not gravity itself, but the force your body presses onto its support. In free fall there's nothing to press against, so weight goes to zero even though gravity is still there."
      }
    ],
    "test_yourself": "If gravity at the ISS is almost as strong as on Earth, what exactly would have to change for a person inside the station to suddenly feel their weight again?"
  },
  "space-spacex-booster-landing": {
    "title": "Landing tail-first: how SpaceX catches the Falcon 9 booster",
    "tldr": "After the boost, the Falcon 9 first stage flips around, brakes on its own engines, and lands upright on its legs. The final move is the \"hoverslam\": a single engine pushes harder than the near-empty booster weighs, so it can't hover — it has to hit zero speed exactly at touchdown.",
    "body_md": "Old rocketry dogma: a rocket is a one-shot match. It burns out, then falls into the ocean or up in flames. SpaceX broke that with a simple idea: **bring the first stage back in one piece** and fly it again. And there's no parachute — the stage lands **tail-first**, on its own engines, like something out of old sci-fi.\n\nAfter stage separation comes a chain of engine burns. First the **boostback burn** — the stage flips around and fires three engines to kill its forward motion and, if needed, fly back toward the pad. Then it falls; from the top, four **grid fins** unfold — titanium \"waffles\" that grip the oncoming air and steer the stage at hypersonic speed. Next comes the **entry burn** — three engines again, so the stage doesn't burn up plunging into thick air.\n\nThe tensest part is the finale, the **landing burn**. Here's the big misconception: people picture the rocket \"hovering and gently setting down\" like a helicopter. It can't. Even a **single** Merlin engine at minimum throttle pushes the nearly empty, lightweight stage **harder than it weighs**. So hovering is physically impossible: light the engine and it starts shoving you back up.\n\nThat's why engineers do the **\"hoverslam\"** (a.k.a. the \"suicide burn\"): the engine lights at the last possible instant so that speed hits zero **exactly** at the point of touchdown. A second early — the stage stalls in the air and shoots back up. A second late — it slams into the ground. No \"hover and think it over\" — either the math is right, or it's a crash. At the very end four **landing legs** deploy, and the multi-ton tower freezes onto concrete or onto a floating barge in the middle of the ocean.\n\nWhy the whole circus? Money. The first stage is the priciest part of the rocket. Don't throw it away — refuel it and fly it again — and the **cost per launch drops several times over**. Reusability is exactly what turned spaceflight from rare-and-golden into near-routine: a single SpaceX booster has already flown more than twenty times.",
    "terms": [
      {
        "term": "hoverslam (suicide burn)",
        "explain": "A landing move where the engine fires at the last moment and cancels all speed right at the ground — because the rocket simply can't hover."
      },
      {
        "term": "grid fins",
        "explain": "Folding titanium lattices at the top of the stage; in the atmosphere they catch the airflow and steer the falling stage like rudders."
      },
      {
        "term": "boostback burn",
        "explain": "An engine burn right after stage separation that flips the stage around and kills its forward motion, aiming it back toward the landing site."
      }
    ],
    "test_yourself": "Suppose the Merlin engine could throttle down so low it actually held an empty stage in mid-air. Why might SpaceX still choose to skip 'hovering' before landing?"
  },
  "space-reentry-heat": {
    "title": "Why Reentry Gets So Hot — and No, It's Not Friction",
    "tldr": "A returning capsule glows like plasma not because it 'rubs' against the air, but because it's moving ~7.8 km/s and the air can't get out of the way — it slams into a shock wave and ignites. That's exactly why spacecraft come home with a BLUNT nose, not a sharp one.",
    "body_md": "Everyone 'knows' the story from school: spacecraft heat up on reentry from **friction with the air**. Neat, intuitive, and almost entirely wrong. Friction (viscous flow along the skin) does add some heat, but on blunt reentry vehicles it's a side effect. The real furnace is **compression**.\n\nPicture it: a capsule drops out of orbit at roughly **7.8 km/s** — about 28,000 km/h. The air ahead simply can't scatter fast enough. Molecules with nowhere to go pile up and slam to a stop in a thin layer in front of the vehicle. Sudden **adiabatic compression** means sudden heating: the gas soars to **thousands of degrees**, ionizes, and turns into **plasma** — a glowing shell hotter than the Sun's surface. It's the same physics that warms a bike pump when you inflate a tire, cranked to the extreme.\n\nNow the twist about shape. Intuition screams for a sharp nose — 'to slice the air.' But in the 1950s NASA engineer **Harry Julian Allen** proved the paradox: the **BLUNTER** the nose, the **easier** the vehicle's life. A blunt body pushes a **detached bow shock** out in front — a wall of compressed, blazing gas hovering just ahead of the skin. Most of the energy heats that gas and sheds sideways instead of soaking into the metal. A sharp nose would pin the shock to itself and burn straight through.\n\nEven with a blunt nose, some heat still reaches the hull — and that's where the **heat shield** earns its keep. Two approaches: **ablative** shields (Apollo, Soyuz, Dragon), which are designed to char, melt, and boil away, carrying heat off with them and reshaping the boundary layer; and reusable **ceramic tiles** (the Shuttle), which can glow red-hot without burning up. An ablative shield is sacrificial — it's *supposed* to partly burn away. That's the job.\n\nUnder the hood it all comes down to one trade: to land, you must dump a mountain of kinetic energy — and it's far better to dump it into the glowing air around you than into your own skin. A blunt nose and a sacrificial shield are the trick for outsmarting the plasma and coming home in one piece.",
    "terms": [
      {
        "term": "Adiabatic compression",
        "explain": "Squeezing a gas so fast it can't dump its heat outward, so it heats up sharply. Like the air inside a bike pump as you inflate a tire."
      },
      {
        "term": "Detached bow shock",
        "explain": "A wall of violently compressed gas standing just ahead of a blunt nose instead of clinging to it. This is what soaks up most of the heat."
      },
      {
        "term": "Ablation",
        "explain": "Controlled charring and vaporizing of the heat shield: the material sacrifices itself, carrying heat away from the hull."
      }
    ],
    "test_yourself": "If reentry heat really came from friction with the air, which nose shape would be smarter — sharp or blunt? And why does reality flip that answer?"
  },
  "space-mars-transfer-window": {
    "title": "Mars, Once Every Two Years: Why You Can't Just Launch Whenever You Want",
    "tldr": "The cheap way to Mars only opens in short windows roughly every 26 months. It's not that rockets are picky — it's that the fuel-saving route needs Mars itself to arrive at the meeting point right when your spacecraft does.",
    "body_md": "It feels like you should be able to launch to Mars any day: point the rocket at the red dot and hit the gas. Nobody does that. Real missions — Perseverance, Tianwen-1, Hope — all left within weeks of each other in the summer of 2020, and then everyone waited until 2022. The reason is **geometry**, not paperwork.\n\nThe cheapest way to move between two orbits was worked out by German engineer **Walter Hohmann** back in 1925. The trick: don't barrel straight over — coast along a stretched ellipse that just grazes Earth's orbit on one end and Mars's orbit on the other. This **Hohmann transfer** burns the least fuel because the engine fires only twice: a push at Earth and a brake at Mars. The price is time — roughly **8–9 months** (about 259 days) to reach Mars.\n\nHere's the catch. While your spacecraft spends nine months crawling out to the far end of the ellipse, Mars doesn't sit still — it keeps racing along its own orbit. So you don't aim where Mars is now; you aim where Mars **will be** nine months later. In orbital-mechanics terms: at launch, Mars needs to be about **44° ahead** of Earth. Miss that phasing and you arrive at empty space.\n\nThat lucky lineup doesn't come around monthly. It repeats once per **synodic period** of Earth and Mars — about **780 days**, roughly 26 months. That's the famous \"launch window every two years\": the corridor itself lasts only a couple of weeks, and missing it means waiting more than two years.\n\nNow the big myth: \"you can just fly anytime, it'll only take longer.\" Technically true. But outside the window the cheap Hohmann route no longer adds up, and you're forced onto a steep, brute-force path — which means a **huge extra load of propellant**. And fuel in space is mass you have to accelerate too; every extra ton of fuel needs still more fuel just to carry it. So the real question isn't \"can we?\" but \"what will it cost?\" — and it's almost always cheaper to wait for the window than to fight physics.",
    "terms": [
      {
        "term": "Hohmann transfer",
        "explain": "The most fuel-efficient route between two orbits: a stretched ellipse that touches both. The engine fires just twice — once to speed up, once to slow down."
      },
      {
        "term": "Synodic period",
        "explain": "The time it takes two planets to return to the same relative position around the Sun. For Earth and Mars that's about 780 days."
      },
      {
        "term": "Launch window",
        "explain": "The short stretch (weeks) when the planets line up well and the trip costs the least fuel. For Mars it opens roughly every 26 months."
      }
    ],
    "test_yourself": "If we decided to fly to Mars 'off-window,' what would we pay for it first — and why is that bill bigger than it looks?"
  }
};

