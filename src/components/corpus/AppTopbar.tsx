import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PlayCircle, ShieldCheck, UserCheck } from "lucide-react";
import { toast } from "sonner";
import ConnectionStatusPill from "@/components/corpus/ConnectionStatusPill";
import KickoffDialog from "@/components/corpus/KickoffDialog";
import AgentMemoryInspector from "@/components/corpus/AgentMemoryInspector";
import { useCorpusData } from "@/context/CorpusDataContext";
import { useAuth, ROLE_DEFINITIONS, type EnterpriseRole } from "@/context/AuthContext";
import { usePresenterHotkeys } from "@/hooks/usePresenterHotkeys";
import { playSuccessChime, playShieldHum, playAlertTone } from "@/lib/soundEngine";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const TITLES: Record<string, { title: string; subtitle: string }> = {
  "/": {
    title: "Command Deck",
    subtitle: "Live overview of the active initiative and system autonomy",
  },
  "/network": {
    title: "Agent Network",
    subtitle: "D3 force-directed lineage graph of agent-to-agent flow",
  },
  "/negotiation": {
    title: "Negotiation",
    subtitle: "Live agent dialogue and raw FSM activity stream",
  },
  "/analytics": {
    title: "Analytics",
    subtitle: "Agent-wise performance across every initiative",
  },
  "/ledger": {
    title: "Ledger",
    subtitle: "Full history of initiatives and decision gates",
  },
  "/lab": {
    title: "Governance & Security Lab",
    subtitle: "Policy sandbox, Nash bargaining, adversarial immune system & time-travel debugger",
  },
};

export default function AppTopbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { connectionStatus } = useCorpusData();
  const { role, roleInfo, setRole } = useAuth();
  const [runningDemo, setRunningDemo] = useState(false);
  const copy = TITLES[location.pathname] ?? TITLES["/"];

  const handleRunDemoMode = () => {
    setRunningDemo(true);
    playSuccessChime();
    toast.info("▶ Demo Mode Started: Step 1/5 — Kickoff Goal", {
      description: "Agents evaluating campaign budget request...",
    });

    setTimeout(() => {
      playSuccessChime();
      toast.info("Step 2/5 — Nash Bargaining Optimization", {
        description: "Solving Pareto efficiency between Marketing & Finance...",
      });
      navigate("/lab");
    }, 2500);

    setTimeout(() => {
      playShieldHum();
      toast.error("Step 3/5 — Red-Team Attack Blocked!", {
        description: "TF-IDF classifier caught prompt injection (Similarity 84%).",
      });
    }, 5000);

    setTimeout(() => {
      playAlertTone();
      toast.warning("Step 4/5 — Boardroom Debate Escalation", {
        description: "Budget request > $30k triggered 3-persona boardroom session.",
      });
    }, 7500);

    setTimeout(() => {
      playSuccessChime();
      toast.success("Step 5/5 — Demo Complete!", {
        description: "Generating 1-click Compliance Audit PDF Report...",
      });
      setRunningDemo(false);
    }, 10000);
  };

  usePresenterHotkeys(handleRunDemoMode);

  return (
    <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-4 border-b border-border/30 bg-background/10 px-4 py-4 backdrop-blur-lg backdrop-saturate-150 md:px-8">
      <div className="min-w-0">
        <h1 className="truncate text-lg font-bold tracking-tight md:text-xl">{copy.title}</h1>
        <p className="hidden truncate text-xs text-muted-foreground sm:block">{copy.subtitle}</p>
      </div>

      <div className="flex shrink-0 items-center gap-2">
        <Button
          variant="glow"
          size="sm"
          disabled={runningDemo}
          onClick={handleRunDemoMode}
          className="gap-1.5 text-xs font-semibold animate-pulse"
        >
          <PlayCircle size={14} />
          Demo Mode
        </Button>

        <AgentMemoryInspector />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="gap-1.5 text-xs border-border/60">
              <UserCheck size={14} style={{ color: roleInfo.color }} />
              <span className="hidden md:inline">{roleInfo.badge}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="glass-panel w-56 border-border/60">
            <DropdownMenuLabel className="text-xs">Enterprise Security Role</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {(Object.keys(ROLE_DEFINITIONS) as EnterpriseRole[]).map((rKey) => {
              const def = ROLE_DEFINITIONS[rKey];
              return (
                <DropdownMenuItem
                  key={rKey}
                  onClick={() => {
                    setRole(rKey);
                    toast.success(`Role switched to ${def.label}`);
                  }}
                  className="flex items-center justify-between text-xs cursor-pointer"
                >
                  <span>{def.label}</span>
                  {role === rKey && <ShieldCheck size={14} style={{ color: def.color }} />}
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>

        <ConnectionStatusPill status={connectionStatus} className="hidden lg:flex" />
        <KickoffDialog />
      </div>
    </header>
  );
}
