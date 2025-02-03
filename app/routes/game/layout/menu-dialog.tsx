import { BlueButton } from "~/components/blue-button";
import { Card } from "~/components/transparent-card";
import { PurpleButton } from "../components/purple-button";
import { Routes } from "~/lib/utils";
import { ShadowLetter } from "~/components/shadow-letter";
import { useGameStateStore } from "../stores/game-state-store";
import { useKeyPress } from "~/use-key-press";
import { useRef } from "react";
import {
  useFetcher,
  useLoaderData,
  useLocation,
  useNavigate,
  useParams,
} from "react-router";
import type { loader } from "./game-layout";

type RefType = HTMLAnchorElement | HTMLButtonElement | null;

export const MenuDialog = ({ title }: { title: string }) => {
  const { state, updateState } = useGameStateStore();
  const buttons = useRef<RefType[]>([]);
  const arrowHandler = (step: number) => {
    let focusedIndex = buttons.current.findIndex(
      (ref) => ref === document.activeElement
    );

    if (focusedIndex === -1) {
      buttons.current[0]?.focus();
      return;
    }

    if (focusedIndex >= 0 && focusedIndex < 3) {
      buttons.current[focusedIndex + step]?.focus();
    }
  };
  useKeyPress(
    [
      {
        Escape: () => {
          if (state === "paused") updateState("playing");
        },
      },
      {
        ArrowUp: () => {
          arrowHandler(-1);
        },
      },
      {
        ArrowDown: () => {
          arrowHandler(1);
        },
      },
    ],
    [buttons]
  );
  const location = useLocation();
  const navigate = useNavigate();
  const { guess } = useLoaderData<typeof loader>();
  const fetcher = useFetcher();
  const { category } = useParams();
  const handleRefresh = () => {
    const formData = new FormData();
    formData.append("choice", guess.name);
    formData.append("category", category ?? "");
    fetcher.submit(formData, { method: "POST", action: "/mark-selected" });
    updateState("playing");
    navigate(location.pathname);
  };
  return (
    <div className="fixed left-0 flex items-center justify-center w-screen h-screen">
      <div className="absolute bg-gradient-to-t from-[#2B1677] to-[#1A043A] h-screen opacity-75 w-screen" />
      <Card className="gap-y-14 pb-[3.25rem]">
        <div className="relative w-[16.4375rem] md:w-[23.3125rem] -mt-[3rem] md:-mt-[4.5rem] flex justify-center">
          {title.split("").map((letter, index) => (
            <ShadowLetter key={index} letter={letter} title />
          ))}
        </div>
        <BlueButton
          {...(state === "paused" && { action: () => updateState("playing") })}
          {...(state === "won" && {
            action: handleRefresh,
          })}
          {...(state === "lost" && {
            action: handleRefresh,
          })}
          ref={(el) => {
            if (el) buttons.current[0] = el;
          }}
        >
          Continue
        </BlueButton>
        <BlueButton
          to={Routes.category}
          ref={(el) => {
            if (el) buttons.current[1] = el;
          }}
        >
          New category
        </BlueButton>
        <PurpleButton
          to={Routes.reset}
          ref={(el) => {
            if (el) buttons.current[2] = el;
          }}
        >
          Quit game
        </PurpleButton>
      </Card>
    </div>
  );
};
