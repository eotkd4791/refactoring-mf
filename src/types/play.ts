export type Plays = {
  [key: string]: Play;
};

export type Play = {
  name: string;
  type: PlayType;
};

export type PlayType = "comedy" | "tragedy";
