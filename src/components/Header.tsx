import '../styles/header.scss'

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface HeaderProps{
  selectedGenre: GenreResponseProps
}

export const Header = ({ selectedGenre } : HeaderProps) => {
  return (
    <header>
      <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
    </header>
  )
}
