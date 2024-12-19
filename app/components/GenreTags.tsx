'use client';

const genres = [
  'Фентезі',
  'Романи',
  'Детективи',
  'Фантастика',
  'Література',
  'Бойовик',
];

const GenreTags = () => {
  return (
    <div className="flex flex-wrap gap-2">
      {genres.map((genre) => (
        <span
          key={genre}
          className="px-4 py-2 rounded-xl bg-[#ddaf4d] text-[#30435C] font-semibold"
        >
          {genre}
        </span>
      ))}
    </div>
  );
};

export default GenreTags;