export const HealthBar = ({ health }: { health: number }) => {
  return (
    <div className="bg-white p-1 md:p-2 rounded-full w-14 md:w-40 xl:w-60">
      <div
        className="bg-darkNavy h-2 rounded-md transition-all duration-300"
        style={{ width: `${health}%` }}
      />
    </div>
  );
};
