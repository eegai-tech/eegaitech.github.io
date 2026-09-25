/* =====================================================================
   EEGAI EXTENSIONS – THE ONLY FILE YOU NEED TO EDIT
   ---------------------------------------------------------------------
   • Part 1 (SITE): brand name, phone, hero text, FAQ.
   • Part 2 (EXTENSIONS): one block per extension. To add a new
     extension, copy any block, paste it at the end of the list,
     change the values, and put its zip in the /downloads folder.
   • Tip: use tools/extension-editor.html to generate a block by
     filling a form instead of typing by hand.
   • Rules: keep the quotes "..." and the commas , between items.
     If the site shows a blank list after an edit, a comma or quote
     is missing. Open the page, press F12 → Console to see the line.
   ===================================================================== */

window.EEGAI_SITE = {
  brandName: "Eegai Extensions",
  brandMark: "ஈ",                          // letter shown in the logo square
  company: "Eegai Technologies",
  location: "Tamil Nadu, India",
  whatsapp: "919500400427",               // country code + number, no + or spaces
  phoneDisplay: "+91 95004 00427",
  email: "",                              // optional, e.g. "support@eegai.in"
  heroTitle: "Small browser tools that give back hours of your working day.",
  heroText: "Browser extensions for Google Chrome and Microsoft Edge, built in Tamil Nadu by Eegai Technologies. Download the zip, follow the short install guide, and start using them in a few minutes.",
  heroNote: "Works on Chrome and Edge for Windows, Mac and Linux. Not for mobile browsers.",
  contactText: "Message us on WhatsApp for installation help, payment questions or ideas for new tools. We reply in Tamil or English.",

  // Questions shown in the FAQ section. Add or remove freely.
  faq: [
    { q: "Why is it not on the Chrome Web Store?",
      a: "We are testing with a small group first. Store listings on Chrome Web Store and Microsoft Edge Add-ons are planned after the testing period. When an extension is listed, its page shows an 'Add to Chrome' or 'Get for Edge' button." },
    { q: "Chrome shows \"Disable developer mode extensions\". What do I do?",
      a: "This message appears for any extension installed with Load unpacked. Close the message or click Keep. Do not click Disable, or the extension turns off." },
    { q: "Does it work on my phone?",
      a: "No. Chrome and Edge on Android and iPhone do not support these extensions. Use them on a laptop or desktop." },
    { q: "I paid but my licence is still on trial.",
      a: "Payments are usually confirmed within a few minutes after you submit the 12-digit UTR number. If it takes longer, send a screenshot of the payment on WhatsApp." },
    { q: "I got a new laptop. Can I move my licence?",
      a: "Yes. Message us on WhatsApp with your registered email and we will move your licence to the new computer." },
    { q: "Is my data safe?",
      a: "The extensions work inside your browser. Logins you save are stored on your own computer. Eegai only keeps your email and licence status so the trial and payment work. See the privacy policy for details." }
  ]
};

/* ---------------------------------------------------------------------
   FIELD GUIDE (what each line in a block means)
   id          short name used in the page link and zip name. Lowercase,
               dashes only, never change it after launch.
               Page link becomes: extension.html?id=THE-ID
   name        full display name
   icon        one emoji
   color       strong colour (top border of the card)
   tint        light colour (background of the extension page header)
   category    used for the filter buttons, e.g. "Productivity", "Logistics"
   status      "ready" | "beta" | "coming-soon"
   isNew       true shows a "New" badge; set false after a month or two
   hidden      true hides it from the site without deleting it
   version     e.g. "1.1.0"
   updated     e.g. "Sep 2026"
   short       one line for the card on the home page
   tagline     2–3 lines at the top of the extension page
   features    list of what it does
   audience    who it is for
   howToUse    steps after installing
   note        optional grey note box ("" for none)
   price       short text for card + pricing table
   trial       trial text for pricing table ("—" if none)
   facts       rows in the download box: ["Label", "Value"]
   sideNote    small text under the download button
   download    path to the zip inside the website, "" if not ready
   storeLinks  fill later when published: chrome: "https://...", edge: "https://..."
   screenshots optional: [{ src: "images/xyz.png", alt: "what it shows" }]
   changelog   optional: [{ version: "1.1.0", date: "Sep 2026", notes: "..." }]
   --------------------------------------------------------------------- */

window.EEGAI_EXTENSIONS = [

  {
    id: "copy-paste",
    name: "Eegai Copy & Paste",
    icon: "📋",
    color: "#E8A317",
    tint: "#FCEBC4",
    category: "Productivity",
    status: "ready",
    isNew: false,
    hidden: false,
    version: "2.0.0",
    updated: "Sep 2026",
    short: "Copy, paste, select and right-click on sites that block them.",
    tagline: "Some websites stop you from copying text, pasting into a box, selecting words or using right-click. This extension switches those blocks off so the page behaves normally again.",
    features: [
      "Lets you select and copy text on pages that disable it.",
      "Lets you paste into boxes that refuse pasting, such as some form and portal fields.",
      "Brings back the right-click menu where a site has hidden it.",
      "Force paste from the right-click menu or with a keyboard shortcut when a box still refuses.",
      "Turn it on or off for any site with one click from the toolbar popup."
    ],
    audience: "Office staff, students and anyone who fills long online forms and is tired of retyping the same details by hand.",
    howToUse: [
      "Click the extension icon and sign in with the Gmail account you use in the browser. Your free trial starts.",
      "Open any site. Copy and paste now work as usual.",
      "If a box still refuses, right-click inside it and choose Force paste."
    ],
    note: "Please use it responsibly. Unlocking copy on a page does not change who owns its content, and some exam or bank sites block pasting on purpose.",
    price: "₹50 once, lifetime",
    trial: "7 days",
    facts: [
      ["Browsers", "Chrome, Edge"],
      ["Free trial", "7 days"],
      ["After trial", "₹50 once, lifetime"],
      ["Licence", "1 computer"],
      ["Sign-in", "Gmail"]
    ],
    sideNote: "Reinstalling does not restart the free trial. Pay by UPI QR inside the extension.",
    download: "downloads/eegai-copy-paste.zip",
    storeLinks: { chrome: "", edge: "" },
    screenshots: [],
    changelog: [
      { version: "2.0.0", date: "Sep 2026", notes: "Free trial, Gmail sign-in, ₹50 lifetime licence with UPI payment." },
      { version: "1.0.0", date: "Sep 2026", notes: "First version: copy, paste, select and right-click unlock." }
    ]
  },

  {
    id: "awb-tracking",
    name: "Eegai AWB Tracking",
    icon: "📦",
    color: "#0E4E5C",
    tint: "#CFE3E7",
    category: "Logistics",
    status: "ready",
    isNew: true,
    hidden: false,
    version: "1.1.0",
    updated: "Sep 2026",
    short: "Track hundreds of Shadowfax AWBs from one Excel file.",
    tagline: "Upload one Excel or CSV file of Shadowfax AWB numbers and get back a full tracking report, with forward and reverse shipments on separate sheets.",
    features: [
      "Tracks Shadowfax forward (FWD) and reverse (REV) AWBs in bulk, 15 at a time in parallel.",
      "Reads .xlsx, .xls or .csv files with AWB numbers in column A, starting from row 2.",
      "Downloads the finished Excel report automatically into Downloads\\Eegai AWB Tracking.",
      "Remembers your forward and reverse DC portal logins so you enter them once. Clearing browser data removes them.",
      "Opens in its own full browser tab, so large files are easy to watch."
    ],
    audience: "Shadowfax hub teams, SZMs and ops staff who check many AWBs every day and want it done in minutes instead of one by one.",
    howToUse: [
      "Click the extension icon. The tool opens in a new tab.",
      "Register with your official @shadowfax.in email and enter the one-time code sent to it.",
      "Fill in your forward and reverse DC portal logins and save.",
      "Choose your AWB file and click Start tracking. The report downloads when it finishes."
    ],
    note: "Only @shadowfax.in email addresses can register. This is an independent tool and is not an official Shadowfax product.",
    price: "₹50 once, lifetime",
    trial: "2 days",
    facts: [
      ["Browsers", "Chrome, Edge"],
      ["Free trial", "2 days"],
      ["After trial", "₹50 once, lifetime"],
      ["Licence", "1 computer"],
      ["Sign-in", "shadowfax.in email + OTP"]
    ],
    sideNote: "Output: one Excel file with Forward and Reverse sheets.",
    download: "downloads/eegai-awb-tracking.zip",
    storeLinks: { chrome: "", edge: "" },
    screenshots: [],
    changelog: [
      { version: "1.1.0", date: "Sep 2026", notes: "Sign-in changed to email OTP. No Google setup needed." },
      { version: "1.0.0", date: "Sep 2026", notes: "First version." }
    ]
  },

  {
    id: "gmail-summary",
    name: "Eegai Gmail Summary",
    icon: "✉️",
    color: "#B8322E",
    tint: "#F3D3D1",
    category: "Productivity",
    status: "ready",
    isNew: false,
    hidden: false,
    version: "1.0.0",
    updated: "Sep 2026",
    short: "A daily Google Sheet of who mailed you and how often.",
    tagline: "Every evening it collects the mail you received in the last 24 hours and writes a clean summary into your own Google Sheet, so you can see at a glance who is mailing you and how much.",
    features: [
      "Runs by itself in the background once a day, after 6 PM.",
      "Covers the window from 6 PM yesterday to 6 PM today.",
      "Mail_Details sheet: sender, subject and received time of every mail.",
      "Summary sheet: each sender with the number of mails they sent today.",
      "Click a count in the Summary sheet to jump straight to that sender's mails."
    ],
    audience: "Managers and team leads who get a lot of mail and want a quick daily picture without opening every thread.",
    howToUse: [
      "Create an empty Google Sheet and copy its link.",
      "Click the extension icon, paste the Sheet link and your Google OAuth Client ID, and save. It stays locked until you click Edit.",
      "Allow Gmail access when Google asks. After that it runs on its own every day."
    ],
    note: "It only reads mail details (sender, subject, time) and writes them to your own Sheet. Nothing is sent to Eegai. A one-time Google Cloud setup is needed for the OAuth Client ID; SETUP.md inside the zip explains each click.",
    price: "Free during preview",
    trial: "—",
    facts: [
      ["Browsers", "Edge, Chrome"],
      ["Price", "Free during preview"],
      ["Runs", "Daily, after 6 PM"],
      ["Output", "Your Google Sheet"]
    ],
    sideNote: "Each day's run replaces the previous day's sheets with fresh data.",
    download: "downloads/eegai-gmail-summary.zip",
    storeLinks: { chrome: "", edge: "" },
    screenshots: [],
    changelog: []
  },

  {
    // CHECK THIS BLOCK: confirm the description matches your WebCall Link MVP.
    id: "webcall-link",
    name: "Eegai WebCall Link",
    icon: "📞",
    color: "#4A6FA5",
    tint: "#D9E3F2",
    category: "Calling",
    status: "beta",
    isNew: true,
    hidden: false,
    version: "0.1.0",
    updated: "Sep 2026",
    short: "Click a phone number on a web page to call it.",
    tagline: "Turns phone numbers on web pages into click-to-call links, so you can start a call from your laptop screen instead of typing the number on your phone.",
    features: [
      "Finds phone numbers on the page you are viewing and shows a small call button next to each one.",
      "One click starts the call on your linked phone.",
      "Keeps a short list of numbers you called recently."
    ],
    audience: "People who call customers or riders all day from numbers shown in web portals and spreadsheets.",
    howToUse: [
      "Click the extension icon and link your phone as shown in the popup.",
      "Open any page with phone numbers and click the call button next to a number."
    ],
    note: "This is an early test version shared for feedback. Some features may change before the full release.",
    price: "Free during preview",
    trial: "—",
    facts: [
      ["Browsers", "Chrome, Edge"],
      ["Price", "Free during preview"],
      ["Stage", "MVP test"]
    ],
    sideNote: "Tell us what works and what doesn't on WhatsApp.",
    download: "downloads/eegai-webcall-link.zip",
    storeLinks: { chrome: "", edge: "" },
    screenshots: [],
    changelog: []
  }

  /* ---- PASTE NEW EXTENSIONS ABOVE THIS LINE ----
     Each new block must START with a comma:  ,{  ...  }
     (the block maker in tools/ already adds it for you).

     Example of a "coming soon" teaser (no zip yet):
  ,{
    id: "my-next-tool", name: "Eegai My Next Tool", icon: "🚀",
    color: "#6B4FA0", tint: "#E6DEF3", category: "Productivity",
    status: "coming-soon", isNew: false, hidden: false,
    version: "", updated: "", short: "One line about it.",
    tagline: "Two lines about what it will do.", features: [], audience: "",
    howToUse: [], note: "", price: "To be announced", trial: "—",
    facts: [["Launch", "Dec 2026"]], sideNote: "",
    download: "", storeLinks: { chrome: "", edge: "" }, screenshots: [], changelog: []
  }
  */
];
