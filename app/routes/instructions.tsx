import { Description } from "~/components/description-card";

const Instructions = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 md:gap-8">
      <Description
        count={1}
        title="Choose a category"
        body="First, choose a word category, like animals or movies. 
  The computer then randomly selects a secret word from that 
  topic and shows you blanks for each letter of the word."
      />
      <Description
        count={2}
        title="Guess letters"
        body="Take turns guessing letters. The computer fills in the 
  relevant blank spaces if your guess is correct. If it's 
  wrong, you lose some health, which empties after eight 
  incorrect guesses."
      />
      <Description
        count={3}
        title="Win or lose"
        body="You win by guessing all the letters in the word before your 
  health runs out. If the health bar empties before you guess 
  the word, you lose."
      />
    </div>
  );
};
export default Instructions;
