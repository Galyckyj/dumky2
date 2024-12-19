interface NavItemProps {
    name: string;
    icon: string;
    isActive: boolean;
    onClick: () => void;
  }
  
  const NavItem: React.FC<NavItemProps> = ({ name, icon, isActive, onClick }) => {
    return (
      <button
        className={`flex flex-col items-center text-sm ${
          isActive ? 'text-black' : 'text-bmcolor'
        }`}
        onClick={onClick}
      >
        <span className="text-2xl">{icon}</span>
        <span>{name}</span>
      </button>
    );
  };
  
  export default NavItem;
  