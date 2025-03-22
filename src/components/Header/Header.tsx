import { Logo, Title, UserProfile } from "./index";
function Header() {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center gap-1 w-40">
        <Logo />
        <Title />
      </div>
      <UserProfile />
    </div>
  );
}

export default Header;
