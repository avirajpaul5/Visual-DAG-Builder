// nodeConfig.js
import { Terminal, Bot, Calculator, StickyNote, Hourglass, Shuffle, Send, ExternalLink, Pen } from "lucide-react";

export const NODE_ICONS = {
  input: <Terminal size={20} />,
  llm: <Bot size={20} />,
  calculation: <Calculator size={20} />,
  comment: <StickyNote size={20} />,
  delay: <Hourglass size={20} />,
  switch: <Shuffle size={20} />,
  apitrigger: <Send size={20} />,
  output: <ExternalLink size={20} />,
  text: <Pen size={20} />,
};

export const NODE_TITLES = {
  input: "Input",
  llm: "LLM",
  calculation: "Calculation",
  comment: "Comment",
  delay: "Delay",
  switch: "Switch",
  apitrigger: "API Trigger",
  output: "Output",
  text: "Text",
};
