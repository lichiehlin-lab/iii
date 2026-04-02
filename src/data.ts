export interface Question {
  id: number;
  text: string;
  options: {
    A: string;
    B: string;
  };
  dimension: 'EI' | 'SN' | 'TF' | 'JP';
  weight: {
    A: string; // e.g. 'E', 'S', 'T', 'J'
    B: string; // e.g. 'I', 'N', 'F', 'P'
  };
}

export const questions: Question[] = [
  // Part 1
  { id: 1, text: "When you decide to go somewhere for the day, would you rather?", options: { A: "Plan what you will do and when", B: "Just go" }, dimension: 'JP', weight: { A: 'J', B: 'P' } },
  { id: 2, text: "If you were a teacher, would you rather teach?", options: { A: "Fact-based courses", B: "Theory-based courses" }, dimension: 'SN', weight: { A: 'S', B: 'N' } },
  { id: 3, text: "Are you usually?", options: { A: "A 'good mixer' (sociable)", B: "Rather quiet and reserved" }, dimension: 'EI', weight: { A: 'E', B: 'I' } },
  { id: 4, text: "Do you prefer to?", options: { A: "Arrange dates, parties, etc., well in advance", B: "Be free to do whatever looks like fun when the time comes" }, dimension: 'JP', weight: { A: 'J', B: 'P' } },
  { id: 5, text: "Do you usually get along better with?", options: { A: "Realistic people", B: "Imaginative people" }, dimension: 'SN', weight: { A: 'S', B: 'N' } },
  { id: 6, text: "When you are with a group of people, would you usually rather?", options: { A: "Join in the talk of the group", B: "Talk with one person at a time" }, dimension: 'EI', weight: { A: 'E', B: 'I' } },
  { id: 7, text: "Do you tend to be?", options: { A: "More emotional than logical", B: "More logical than emotional" }, dimension: 'TF', weight: { A: 'F', B: 'T' } },
  { id: 8, text: "Do you prefer to do most things?", options: { A: "By following a plan", B: "On the spur of the moment" }, dimension: 'JP', weight: { A: 'J', B: 'P' } },
  { id: 9, text: "Would you rather be considered?", options: { A: "A practical person", B: "An ingenious person" }, dimension: 'SN', weight: { A: 'S', B: 'N' } },
  { id: 10, text: "In a large group, do you more often?", options: { A: "Introduce others", B: "Get introduced" }, dimension: 'EI', weight: { A: 'E', B: 'I' } },
  { id: 11, text: "Does following a schedule?", options: { A: "Appeal to you", B: "Cramp you" }, dimension: 'JP', weight: { A: 'J', B: 'P' } },
  { id: 12, text: "Do you prefer people who are?", options: { A: "Practical and have a lot of common sense", B: "Imaginative and have a lot of new ideas" }, dimension: 'SN', weight: { A: 'S', B: 'N' } },
  { id: 13, text: "Do you find that people usually?", options: { A: "Get to know you quickly", B: "Take a long time to get to know you" }, dimension: 'EI', weight: { A: 'E', B: 'I' } },
  { id: 14, text: "Is it a higher compliment to be called?", options: { A: "A person of real feeling", B: "A consistently reasonable person" }, dimension: 'TF', weight: { A: 'F', B: 'T' } },
  { id: 15, text: "When making weekend plans, do you feel?", options: { A: "It's necessary to have a plan", B: "It's better to just see what happens" }, dimension: 'JP', weight: { A: 'J', B: 'P' } },
  { id: 16, text: "Would you rather have as a friend someone who?", options: { A: "Is always coming up with new ideas", B: "Has both feet on the ground" }, dimension: 'SN', weight: { A: 'N', B: 'S' } },
  { id: 17, text: "Most of the time, do you prefer to?", options: { A: "Be with others", B: "Be alone" }, dimension: 'EI', weight: { A: 'E', B: 'I' } },
  { id: 18, text: "In your daily work, do you prefer to?", options: { A: "Plan your work and finish it early to avoid pressure", B: "Work under pressure at the last minute" }, dimension: 'JP', weight: { A: 'J', B: 'P' } },
  { id: 19, text: "When you read for pleasure, do you?", options: { A: "Enjoy it when the author says exactly what they mean", B: "Enjoy odd or original ways of saying things" }, dimension: 'SN', weight: { A: 'S', B: 'N' } },
  { id: 20, text: "Can you?", options: { A: "Talk easily to almost anyone for as long as you have to", B: "Find a lot to say only to certain people or under certain conditions" }, dimension: 'EI', weight: { A: 'E', B: 'I' } },
  { id: 21, text: "Do you tend to?", options: { A: "Act on your feelings", B: "Act on logic" }, dimension: 'TF', weight: { A: 'F', B: 'T' } },
  { id: 22, text: "When you have a special job to do, do you?", options: { A: "Organize it carefully before you start", B: "Find out what is necessary as you go along" }, dimension: 'JP', weight: { A: 'J', B: 'P' } },
  { id: 23, text: "When doing something that many other people do, do you prefer to?", options: { A: "Do it in the accepted way", B: "Invent a way of your own" }, dimension: 'SN', weight: { A: 'S', B: 'N' } },
  { id: 24, text: "Can new acquaintances tell what you are interested in?", options: { A: "Right away", B: "Only after they really get to know you" }, dimension: 'EI', weight: { A: 'E', B: 'I' } },
  { id: 25, text: "In planning a trip, would you rather?", options: { A: "Know ahead of time what you will be doing most days", B: "Just wing it most of the time" }, dimension: 'JP', weight: { A: 'J', B: 'P' } },
  { id: 26, text: "Do most people think you are?", options: { A: "Very frank and open", B: "Rather quiet and private" }, dimension: 'EI', weight: { A: 'E', B: 'I' } },

  // Part 2
  { id: 27, text: "Which word appeals to you more?", options: { A: "Facts", B: "Ideas" }, dimension: 'SN', weight: { A: 'S', B: 'N' } },
  { id: 28, text: "Which word appeals to you more?", options: { A: "Hearty", B: "Determined" }, dimension: 'TF', weight: { A: 'F', B: 'T' } },
  { id: 29, text: "Which word appeals to you more?", options: { A: "Realistic", B: "Imaginative" }, dimension: 'SN', weight: { A: 'S', B: 'N' } },
  { id: 30, text: "Which word appeals to you more?", options: { A: "Scheduled", B: "Unplanned" }, dimension: 'JP', weight: { A: 'J', B: 'P' } },
  { id: 31, text: "Which word appeals to you more?", options: { A: "Concrete", B: "Abstract" }, dimension: 'SN', weight: { A: 'S', B: 'N' } },
  { id: 32, text: "Which word appeals to you more?", options: { A: "Feeling", B: "Thinking" }, dimension: 'TF', weight: { A: 'F', B: 'T' } },
  { id: 33, text: "Which word appeals to you more?", options: { A: "Systematic", B: "Spontaneous" }, dimension: 'JP', weight: { A: 'J', B: 'P' } },
  { id: 34, text: "Which word appeals to you more?", options: { A: "Direct", B: "Theoretical" }, dimension: 'SN', weight: { A: 'S', B: 'N' } },
  { id: 35, text: "Which word appeals to you more?", options: { A: "Gentle", B: "Firm" }, dimension: 'TF', weight: { A: 'F', B: 'T' } },
  { id: 36, text: "Which word appeals to you more?", options: { A: "Routine", B: "Novel" }, dimension: 'JP', weight: { A: 'J', B: 'P' } },
  { id: 37, text: "Which word appeals to you more?", options: { A: "Literal", B: "Figurative" }, dimension: 'SN', weight: { A: 'S', B: 'N' } },
  { id: 38, text: "Which word appeals to you more?", options: { A: "Compassionate", B: "Decisive" }, dimension: 'TF', weight: { A: 'F', B: 'T' } },
  { id: 39, text: "Which word appeals to you more?", options: { A: "Orderly", B: "Easy-going" }, dimension: 'JP', weight: { A: 'J', B: 'P' } },
  { id: 40, text: "Which word appeals to you more?", options: { A: "Practical", B: "Conceptual" }, dimension: 'SN', weight: { A: 'S', B: 'N' } },
  { id: 41, text: "Which word appeals to you more?", options: { A: "Warm", B: "Cool" }, dimension: 'TF', weight: { A: 'F', B: 'T' } },
  { id: 42, text: "Which word appeals to you more?", options: { A: "Systematic", B: "Casual" }, dimension: 'JP', weight: { A: 'J', B: 'P' } },
  { id: 43, text: "Which word appeals to you more?", options: { A: "Sensible", B: "Intelligent" }, dimension: 'SN', weight: { A: 'S', B: 'N' } },
  { id: 44, text: "Which word appeals to you more?", options: { A: "Soft", B: "Hard" }, dimension: 'TF', weight: { A: 'F', B: 'T' } },
  { id: 45, text: "Which word appeals to you more?", options: { A: "Punctual", B: "Leisurely" }, dimension: 'JP', weight: { A: 'J', B: 'P' } },
  { id: 46, text: "Which word appeals to you more?", options: { A: "Experience", B: "Theory" }, dimension: 'SN', weight: { A: 'S', B: 'N' } },
  { id: 47, text: "Which word appeals to you more?", options: { A: "Tender", B: "Tough" }, dimension: 'TF', weight: { A: 'F', B: 'T' } },
  { id: 48, text: "Which word appeals to you more?", options: { A: "Methodical", B: "Inspired" }, dimension: 'JP', weight: { A: 'J', B: 'P' } },
  { id: 49, text: "Which word appeals to you more?", options: { A: "Actual", B: "Ideal" }, dimension: 'SN', weight: { A: 'S', B: 'N' } },
  { id: 50, text: "Which word appeals to you more?", options: { A: "Sympathy", B: "Analysis" }, dimension: 'TF', weight: { A: 'F', B: 'T' } },
  { id: 51, text: "Which word appeals to you more?", options: { A: "Regulated", B: "Flexible" }, dimension: 'JP', weight: { A: 'J', B: 'P' } },
  { id: 52, text: "Which word appeals to you more?", options: { A: "Tangible", B: "Intangible" }, dimension: 'SN', weight: { A: 'S', B: 'N' } },
  { id: 53, text: "Which word appeals to you more?", options: { A: "Kind", B: "Strong" }, dimension: 'TF', weight: { A: 'F', B: 'T' } },
  { id: 54, text: "Which word appeals to you more?", options: { A: "Fixed", B: "Open" }, dimension: 'JP', weight: { A: 'J', B: 'P' } },
  { id: 55, text: "Which word appeals to you more?", options: { A: "Fact", B: "Theory" }, dimension: 'SN', weight: { A: 'S', B: 'N' } },
  { id: 56, text: "Which word appeals to you more?", options: { A: "Feeling", B: "Reason" }, dimension: 'TF', weight: { A: 'F', B: 'T' } },
  { id: 57, text: "Which word appeals to you more?", options: { A: "Certain", B: "Possible" }, dimension: 'JP', weight: { A: 'J', B: 'P' } },
  { id: 58, text: "Which word appeals to you more?", options: { A: "Production", B: "Design" }, dimension: 'SN', weight: { A: 'S', B: 'N' } },
  { id: 59, text: "Which word appeals to you more?", options: { A: "Enthusiastic", B: "Logical" }, dimension: 'TF', weight: { A: 'F', B: 'T' } },
  { id: 60, text: "Which word appeals to you more?", options: { A: "Standard", B: "Adaptive" }, dimension: 'JP', weight: { A: 'J', B: 'P' } },
  { id: 61, text: "Which word appeals to you more?", options: { A: "Pragmatic", B: "Visionary" }, dimension: 'SN', weight: { A: 'S', B: 'N' } },
  { id: 62, text: "Which word appeals to you more?", options: { A: "Detailed", B: "General" }, dimension: 'SN', weight: { A: 'S', B: 'N' } },

  // Part 3
  { id: 63, text: "Which word appeals to you more?", options: { A: "Decided", B: "Impulsive" }, dimension: 'JP', weight: { A: 'J', B: 'P' } },
  { id: 64, text: "Which word appeals to you more?", options: { A: "Make", B: "Create" }, dimension: 'SN', weight: { A: 'S', B: 'N' } },
  { id: 65, text: "Which word appeals to you more?", options: { A: "Warmth", B: "Objectivity" }, dimension: 'TF', weight: { A: 'F', B: 'T' } },
  { id: 66, text: "Which word appeals to you more?", options: { A: "Sensible", B: "Fascinating" }, dimension: 'SN', weight: { A: 'S', B: 'N' } },
  { id: 67, text: "Which word appeals to you more?", options: { A: "Considerate", B: "Just" }, dimension: 'TF', weight: { A: 'F', B: 'T' } },
  { id: 68, text: "Which word appeals to you more?", options: { A: "Sociable", B: "Quiet" }, dimension: 'EI', weight: { A: 'E', B: 'I' } },
  { id: 69, text: "Which word appeals to you more?", options: { A: "Sensitive", B: "Reasonable" }, dimension: 'TF', weight: { A: 'F', B: 'T' } },
  { id: 70, text: "Which word appeals to you more?", options: { A: "Manufacture", B: "Design" }, dimension: 'SN', weight: { A: 'S', B: 'N' } },
  { id: 71, text: "Which word appeals to you more?", options: { A: "Sympathetic", B: "Logical" }, dimension: 'TF', weight: { A: 'F', B: 'T' } },
  { id: 72, text: "Which word appeals to you more?", options: { A: "Public", B: "Private" }, dimension: 'EI', weight: { A: 'E', B: 'I' } },
  { id: 73, text: "Which word appeals to you more?", options: { A: "Compassion", B: "Foresight" }, dimension: 'TF', weight: { A: 'F', B: 'T' } },
  { id: 74, text: "Do you usually prefer to?", options: { A: "Plan your social activities well in advance", B: "Do things on the spur of the moment" }, dimension: 'JP', weight: { A: 'J', B: 'P' } },
  { id: 75, text: "Does being around many people?", options: { A: "Give you more energy", B: "Often leave you feeling drained" }, dimension: 'EI', weight: { A: 'E', B: 'I' } },
  { id: 76, text: "Most of the time, do you prefer to?", options: { A: "Work to a schedule", B: "Just let things happen" }, dimension: 'JP', weight: { A: 'J', B: 'P' } },
  { id: 77, text: "At a party, do you?", options: { A: "Always have a good time", B: "Sometimes get bored" }, dimension: 'EI', weight: { A: 'E', B: 'I' } },
  { id: 78, text: "When making a decision, is it more important to you to?", options: { A: "Consider people's feelings and opinions", B: "Weigh the facts" }, dimension: 'TF', weight: { A: 'F', B: 'T' } },
  { id: 79, text: "Do you prefer to?", options: { A: "Prepare well in advance", B: "See how things develop before planning" }, dimension: 'JP', weight: { A: 'J', B: 'P' } },
  { id: 80, text: "Do people find it?", options: { A: "Easy to get to know you", B: "Hard to get to know you" }, dimension: 'EI', weight: { A: 'E', B: 'I' } },
  { id: 81, text: "Your preferred way of doing things is to?", options: { A: "Stick to methods that have worked before", B: "Analyze what is still wrong and challenge unsolved problems" }, dimension: 'SN', weight: { A: 'S', B: 'N' } },
  { id: 82, text: "Do you see yourself as more of?", options: { A: "An organized person", B: "A spontaneous person" }, dimension: 'JP', weight: { A: 'J', B: 'P' } },
  { id: 83, text: "Can you?", options: { A: "Talk easily to almost anyone for as long as you want", B: "Talk for a long time only to people with whom you share interests" }, dimension: 'EI', weight: { A: 'E', B: 'I' } },
  { id: 84, text: "Would you rather work for a boss who is?", options: { A: "Good-natured but inconsistent", B: "Sharp-tongued but systematic" }, dimension: 'TF', weight: { A: 'F', B: 'T' } },
  { id: 85, text: "Do you prefer to do most things according to?", options: { A: "A set schedule", B: "How you feel that day" }, dimension: 'JP', weight: { A: 'J', B: 'P' } },
  { id: 86, text: "At a party, do you?", options: { A: "Talk a lot yourself", B: "Listen more to others" }, dimension: 'EI', weight: { A: 'E', B: 'I' } },
  { id: 87, text: "Usually, do you prefer courses that deal with?", options: { A: "Concrete content", B: "Concepts and principles" }, dimension: 'SN', weight: { A: 'S', B: 'N' } },
  { id: 88, text: "When you start a big project that must be finished in a week, do you?", options: { A: "Take time to list what needs to be done and in what order", B: "Just dive in" }, dimension: 'JP', weight: { A: 'J', B: 'P' } },
  { id: 89, text: "In social situations, do you usually find it?", options: { A: "Easy to talk to most people for a long time", B: "Hard to start or maintain a long conversation with some people" }, dimension: 'EI', weight: { A: 'E', B: 'I' } },
  { id: 90, text: "Is it a higher compliment to be called?", options: { A: "Compassionate", B: "Competent" }, dimension: 'TF', weight: { A: 'F', B: 'T' } },
  { id: 91, text: "Do you feel that following a plan?", options: { A: "Is helpful and appropriate most of the time", B: "Is sometimes necessary but unpleasant" }, dimension: 'JP', weight: { A: 'J', B: 'P' } },
  { id: 92, text: "Do you usually?", options: { A: "Mingle with everyone", B: "Tend to keep to yourself" }, dimension: 'EI', weight: { A: 'E', B: 'I' } },
  { id: 93, text: "Generally, to complete a major task, do you tend to?", options: { A: "Start by defining every step first", B: "Consider what must be done as you go along" }, dimension: 'JP', weight: { A: 'J', B: 'P' } },
];

export const mbtiTypes: Record<string, { title: string; description: string; career: string; group: string; color: string; shortcomings: string; imageUrl: string; iconName: string }> = {
  // Analysts - Purple
  INTJ: {
    title: "Architect",
    group: "Analysts",
    color: "#a3b1d6",
    description: "Imaginative and strategic thinkers, with a plan for everything.",
    career: "Scientist, Engineer, Strategic Planner, Software Developer, Professor.",
    shortcomings: "But can be overly cold and perfectionistic.",
    imageUrl: "https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&q=80&w=400&h=300",
    iconName: "Layout"
  },
  INTP: {
    title: "Logician",
    group: "Analysts",
    color: "#a3b1d6",
    description: "Innovative inventors with an unquenchable thirst for knowledge.",
    career: "Philosopher, Mathematician, Researcher, Systems Analyst, Strategist.",
    shortcomings: "But prone to getting lost in theory and lacking social skills.",
    imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=400&h=300",
    iconName: "FlaskConical"
  },
  ENTJ: {
    title: "Commander",
    group: "Analysts",
    color: "#a3b1d6",
    description: "Bold, imaginative, and strong-willed leaders, always finding or creating a way.",
    career: "CEO, Senior Manager, Lawyer, University President, Management Consultant.",
    shortcomings: "But can be dominant and insensitive to others' feelings.",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=400&h=300",
    iconName: "Target"
  },
  ENTP: {
    title: "Debater",
    group: "Analysts",
    color: "#a3b1d6",
    description: "Smart and curious thinkers who cannot resist an intellectual challenge.",
    career: "Lawyer, Entrepreneur, Politician, Investment Banker, Inventor.",
    shortcomings: "But can be argumentative and lack follow-through.",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400&h=300",
    iconName: "Zap"
  },
  // Diplomats - Green
  INFJ: {
    title: "Advocate",
    group: "Diplomats",
    color: "#a8c6b9",
    description: "Quiet and mystical, yet very inspiring and tireless idealists.",
    career: "Counselor, Writer, Artist, HR Manager, Educational Consultant.",
    shortcomings: "But prone to perfectionism and feeling stressed.",
    imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=400&h=300",
    iconName: "Sparkles"
  },
  INFP: {
    title: "Mediator",
    group: "Diplomats",
    color: "#a8c6b9",
    description: "Poetic, kind, and altruistic people, always eager to help a good cause.",
    career: "Writer, Psychologist, Editor, Art Director, Social Activist.",
    shortcomings: "But can be impractical and extremely sensitive.",
    imageUrl: "https://images.unsplash.com/photo-1516410529446-2c777cb7366d?auto=format&fit=crop&q=80&w=400&h=300",
    iconName: "Feather"
  },
  ENFJ: {
    title: "Protagonist",
    group: "Diplomats",
    color: "#a8c6b9",
    description: "Charismatic and inspiring leaders, able to mesmerize their listeners.",
    career: "Trainer, Minister, Counselor, Political Leader, Public Relations.",
    shortcomings: "But can be too concerned with others and neglect themselves.",
    imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=400&h=300",
    iconName: "Mic"
  },
  ENFP: {
    title: "Campaigner",
    group: "Diplomats",
    color: "#a8c6b9",
    description: "Enthusiastic, creative, and sociable free spirits, who can always find a reason to smile.",
    career: "Journalist, Ad Creative, Consultant, Artist, Speaker.",
    shortcomings: "But easily distracted and prone to procrastination.",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400&h=300",
    iconName: "Star"
  },
  // Sentinels - Blue
  ISTJ: {
    title: "Logistician",
    group: "Sentinels",
    color: "#94b2c5",
    description: "Practical and fact-minded individuals, whose reliability cannot be doubted.",
    career: "Accountant, Auditor, Administrator, Legal Professional, Police, Military Officer.",
    shortcomings: "But can be stubborn and overly conservative.",
    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=400&h=300",
    iconName: "ClipboardCheck"
  },
  ISFJ: {
    title: "Defender",
    group: "Sentinels",
    color: "#94b2c5",
    description: "Very dedicated and warm protectors, always ready to defend their loved ones.",
    career: "Nurse, Teacher, Admin Assistant, Social Worker, Librarian.",
    shortcomings: "But prone to neglecting their own needs.",
    imageUrl: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=400&h=300",
    iconName: "Shield"
  },
  ESTJ: {
    title: "Executive",
    group: "Sentinels",
    color: "#94b2c5",
    description: "Excellent administrators, unsurpassed at managing things – or people.",
    career: "Manager, Factory Supervisor, Bank Manager, Government Official, Military Leader.",
    shortcomings: "But can be too forceful and inflexible.",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400&h=300",
    iconName: "Briefcase"
  },
  ESFJ: {
    title: "Consul",
    group: "Sentinels",
    color: "#94b2c5",
    description: "Extraordinarily caring, social, and popular people, always eager to help.",
    career: "Teacher, Nurse, Admin Management, Customer Service, HR.",
    shortcomings: "But can be too sensitive to judgment and poor at handling criticism.",
    imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=400&h=300",
    iconName: "Coffee"
  },
  // Explorers - Yellow
  ISTP: {
    title: "Virtuoso",
    group: "Explorers",
    color: "#d9b87d",
    description: "Bold and practical experimenters, masters of all kinds of tools.",
    career: "Technician, Engineer, Forensic Scientist, Pilot, Athlete.",
    shortcomings: "But can be detached and easily bored.",
    imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400&h=300",
    iconName: "Wrench"
  },
  ISFP: {
    title: "Adventurer",
    group: "Explorers",
    color: "#d9b87d",
    description: "Flexible and charming artists, always ready to explore and experience something new.",
    career: "Artist, Designer, Veterinarian, Chef, Musician.",
    shortcomings: "But can lack long-term planning.",
    imageUrl: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=400&h=300",
    iconName: "Brush"
  },
  ESTP: {
    title: "Entrepreneur",
    group: "Explorers",
    color: "#d9b87d",
    description: "Smart, energetic, and very perceptive people, who truly enjoy living on the edge.",
    career: "Entrepreneur, Sales Agent, Firefighter, Detective, Marketing.",
    shortcomings: "But can be impulsive and dislike rules.",
    imageUrl: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=400&h=300",
    iconName: "Flame"
  },
  ESFP: {
    title: "Entertainer",
    group: "Explorers",
    color: "#d9b87d",
    description: "Spontaneous, energetic, and enthusiastic people – life is never boring around them.",
    career: "Actor, PR, Travel Consultant, Preschool Teacher, Event Planner.",
    shortcomings: "But can lack patience and easily avoid conflict.",
    imageUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=400&h=300",
    iconName: "Music"
  }
};
