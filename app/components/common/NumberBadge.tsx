const NumberBadge = ({ number, color }: { number: number; color: string }) => {
  return (
    <div
      className="relative w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-2xl"
      style={{
        backgroundColor: color,
      }}
    >
      <span
        className="relative z-10"
        style={{
          textShadow: `
            2px 2px 0 rgba(0,0,0,0.15),
            4px 4px 0 rgba(0,0,0,0.10),
            6px 6px 0 rgba(0,0,0,0.05)
          `,
        }}
      >
        {number}
      </span>
    </div>
  )
}

export default NumberBadge

