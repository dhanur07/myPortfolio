import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Terminal } from "lucide-react";

interface CommandOutput {
  command: string;
  output: string[];
}

export function InteractiveTerminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: "welcome",
      output: [
        "Welcome to my interactive terminal! 🚀",
        "Try these commands: help, skills, projects, joke, quote, clear",
      ],
    },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const commands: { [key: string]: () => string[] } = {
    help: () => [
      "Available commands:",
      "• help - Show this help message",
      "• skills - List my technical skills",
      "• projects - View my recent projects",
      "• joke - Get a programming joke",
      "• quote - Get an inspiring quote",
      "• game - Play a number guessing game",
      "• clear - Clear the terminal",
    ],
    skills: () => [
      "Technical Skills:",
      "✓ Frontend: React, TypeScript, Next.js",
      "✓ Backend: Node.js, Python, Express",
      "✓ AI/ML: TensorFlow, OpenAI API, LangChain",
      "✓ Database: PostgreSQL, MongoDB",
      "✓ Tools: Git, Docker, AWS",
    ],
    projects: () => [
      "Featured Projects:",
      "1. AI Code Assistant - GPT-4 powered coding tool",
      "2. Real-time Collaboration Platform - WebRTC & AI",
      "3. Smart Content Generator - ML-based content creation",
      "Scroll down to see more details!",
    ],
    joke: () => {
      const jokes = [
        "Why do programmers prefer dark mode? Because light attracts bugs! 🐛",
        "Why did the developer go broke? Because he used up all his cache! 💰",
        "How many programmers does it take to change a light bulb? None, that's a hardware problem! 💡",
        "Why do Java developers wear glasses? Because they can't C#! 👓",
        "A SQL query walks into a bar, walks up to two tables and asks... 'Can I JOIN you?' 🍺",
      ];
      return [jokes[Math.floor(Math.random() * jokes.length)]];
    },
    quote: () => {
      const quotes = [
        '"Code is like humor. When you have to explain it, it\'s bad." - Cory House',
        '"First, solve the problem. Then, write the code." - John Johnson',
        '"Experience is the name everyone gives to their mistakes." - Oscar Wilde',
        '"The best error message is the one that never shows up." - Thomas Fuchs',
        '"Simplicity is the soul of efficiency." - Austin Freeman',
      ];
      return [quotes[Math.floor(Math.random() * quotes.length)]];
    },
    game: () => [
      "🎮 Number Guessing Game Started!",
      "I'm thinking of a number between 1 and 100.",
      "Type 'guess [number]' to make a guess!",
      "Example: guess 50",
    ],
    clear: () => [],
    about: () => [
      "About Me:",
      "I'm a passionate software engineer specializing in",
      "full-stack development and AI/ML applications.",
      "I love building innovative solutions and learning new tech!",
    ],
  };

  const [secretNumber] = useState(() => Math.floor(Math.random() * 100) + 1);
  const [gameActive, setGameActive] = useState(false);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (trimmedCmd === "clear") {
      setHistory([]);
      return;
    }

    if (trimmedCmd.startsWith("guess ")) {
      const guess = parseInt(trimmedCmd.split(" ")[1]);
      if (isNaN(guess)) {
        setHistory((prev) => [
          ...prev,
          { command: cmd, output: ["Please enter a valid number!"] },
        ]);
      } else if (guess === secretNumber) {
        setHistory((prev) => [
          ...prev,
          {
            command: cmd,
            output: [
              `🎉 Congratulations! You guessed it! The number was ${secretNumber}!`,
              "Type 'game' to play again!",
            ],
          },
        ]);
        setGameActive(false);
      } else if (guess < secretNumber) {
        setHistory((prev) => [
          ...prev,
          { command: cmd, output: ["📈 Too low! Try a higher number."] },
        ]);
      } else {
        setHistory((prev) => [
          ...prev,
          { command: cmd, output: ["📉 Too high! Try a lower number."] },
        ]);
      }
      return;
    }

    if (commands[trimmedCmd]) {
      const output = commands[trimmedCmd]();
      if (trimmedCmd === "game") setGameActive(true);
      setHistory((prev) => [...prev, { command: cmd, output }]);
    } else if (trimmedCmd === "") {
      return;
    } else {
      setHistory((prev) => [
        ...prev,
        {
          command: cmd,
          output: [`Command not found: ${cmd}`, "Type 'help' for available commands."],
        },
      ]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput("");
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <Card className="bg-blue-900/30 border-blue-400/30 backdrop-blur-sm">
      <CardHeader className="border-b border-blue-400/20 pb-3">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-teal-400" />
          <span className="font-mono text-blue-200">interactive-terminal</span>
          <div className="ml-auto flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div
          ref={scrollRef}
          className="font-mono h-64 overflow-y-auto mb-4 space-y-2 text-sm"
        >
          {history.map((item, index) => (
            <div key={index}>
              {item.command && (
                <div className="flex gap-2 text-teal-400">
                  <span>$</span>
                  <span>{item.command}</span>
                </div>
              )}
              {item.output.map((line, lineIndex) => (
                <div key={lineIndex} className="text-blue-200 ml-4">
                  {line}
                </div>
              ))}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="flex gap-2 items-center font-mono">
          <span className="text-teal-400">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-blue-100 placeholder:text-blue-400/40"
            placeholder="Type a command..."
            autoFocus
          />
        </form>
      </CardContent>
    </Card>
  );
}