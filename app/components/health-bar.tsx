export const HealthBar = ({ health }: { health: number }) => {
  return (
    <div className="bg-white p-1 rounded-full w-14">
      <div
        className="bg-darkNavy h-2 rounded-md transition-all duration-300"
        style={{ width: `${health}%` }}
      />
    </div>
  );
};
