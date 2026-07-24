import { useState } from "react";
import { Loader2, Play } from "lucide-react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCorpusData } from "@/context/CorpusDataContext";

const DEFAULT_GOAL =
  "Launch a marketing campaign for our new feature, budget capped by company policy.";

export default function KickoffDialog() {
  const { submitInitiative, submitting } = useCorpusData();
  const [open, setOpen] = useState(false);
  const [goal, setGoal] = useState(DEFAULT_GOAL);
  const [owner, setOwner] = useState("John Doe");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (goal.trim().length < 10) {
      toast.error("Initiative goal must be at least 10 characters long.");
      return;
    }
    try {
      await submitInitiative(goal, owner);
      toast.success("Initiative launched! Agents are evaluating the goal.");
      setOpen(false);
      setGoal(DEFAULT_GOAL);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to launch initiative.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="glow" className="gap-2">
          <Play size={16} />
          New Initiative
        </Button>
      </DialogTrigger>
      <DialogContent className="glass-panel border-primary/20 sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Launch New Initiative</DialogTitle>
          <DialogDescription>
            Submit a company goal to the multi-agent orchestrator. Marketing and Finance
            will negotiate a plan under FSM-guarded autonomy.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="goal">Company Goal / Objective</Label>
            <Textarea
              id="goal"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              placeholder="Enter goal for the company agents..."
              required
              className="min-h-[100px] bg-background/60"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="owner">Initiator Name (Owner)</Label>
            <Input
              id="owner"
              value={owner}
              onChange={(e) => setOwner(e.target.value)}
              required
              className="bg-background/60"
            />
          </div>
          <DialogFooter>
            <Button type="submit" variant="glow" disabled={submitting} className="w-full gap-2">
              {submitting && <Loader2 size={16} className="animate-spin" />}
              {submitting ? "Triggering Agents..." : "Kick Off Goal"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
