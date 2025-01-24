export const GameNavBar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <div className="text-2xl font-bold">Hangman</div>
        <div className="ml-4 text-sm text-gray-500">Category</div>
      </div>
      <div className="flex items-center">
        <div className="text-sm text-gray-500">Score: 0</div>
        <div className="ml-4 text-sm text-gray-500">Lives: 6</div>
      </div>
    </div>
  );
};
