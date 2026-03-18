import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";

interface TerminalProps {
  commands: string[];
  outputs?: Record<number, string[]>;
  typingSpeed?: number;
  delayBetweenCommands?: number;
  className?: string;
  onComplete?: () => void;
}

export const Terminal = ({
  commands,
  outputs = {},
  typingSpeed = 45,
  delayBetweenCommands = 1000,
  className,
  onComplete,
}: TerminalProps) => {
  const [history, setHistory] = useState<{ type: "cmd" | "output"; text: string }[]>([]);
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentCommandIndex >= commands.length) {
      onComplete?.();
      return;
    }

    const command = commands[currentCommandIndex];
    let charIndex = 0;

    const typeChar = () => {
      if (charIndex < command.length) {
        setCurrentText((prev) => prev + command[charIndex]);
        charIndex++;
        setTimeout(typeChar, typingSpeed);
      } else {
        // Command finished typing
        setTimeout(() => {
          // Add command to history
          setHistory((prev) => [...prev, { type: "cmd", text: command }]);
          
          // Add outputs if any
          const cmdOutputs = outputs[currentCommandIndex] || [];
          if (cmdOutputs.length > 0) {
            cmdOutputs.forEach((out, i) => {
              setTimeout(() => {
                setHistory((prev) => [...prev, { type: "output", text: out }]);
                if (i === cmdOutputs.length - 1) {
                  moveToNextCommand();
                }
              }, (i + 1) * 200);
            });
          } else {
            moveToNextCommand();
          }
        }, 500);
      }
    };

    const moveToNextCommand = () => {
      setTimeout(() => {
        setCurrentText("");
        setCurrentCommandIndex((prev) => prev + 1);
      }, delayBetweenCommands);
    };

    const timer = setTimeout(typeChar, 500);
    return () => clearTimeout(timer);
  }, [currentCommandIndex, commands, outputs, typingSpeed, delayBetweenCommands]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history, currentText]);

  return (
    <div className={cn(
      "w-full bg-[#0a0a0a] border border-[#1e1e1e] rounded-xl overflow-hidden shadow-2xl font-mono text-sm group",
      className
    )}>
      {/* Terminal Title Bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#111] border-b border-[#1e1e1e]">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="ml-2 text-[#555] text-xs font-semibold select-none">
          bash — execution_log.sh
        </div>
      </div>

      {/* Terminal Content */}
      <div 
        ref={containerRef}
        className="p-4 h-[320px] overflow-y-auto scrollbar-hide flex flex-col gap-1.5"
      >
        <AnimatePresence mode="popLayout">
          {history.map((item, i) => (
            <motion.div
              key={`hist-${i}`}
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className={cn(
                "flex gap-2 items-start",
                item.type === "cmd" ? "text-[#fff]" : "text-[#777]"
              )}
            >
              {item.type === "cmd" && <span className="text-[#0FD68C] shrink-0">$</span>}
              <span className="whitespace-pre-wrap">{item.text}</span>
            </motion.div>
          ))}
        </AnimatePresence>

        {currentCommandIndex < commands.length && (
          <div className="flex gap-2 items-start text-[#fff]">
            <span className="text-[#0FD68C] shrink-0">$</span>
            <span className="whitespace-pre-wrap">{currentText}</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
              className="inline-block w-2.5 h-5 bg-[#0FD68C] ml-0.5 mt-0.5"
            />
          </div>
        )}
      </div>
    </div>
  );
};
