import { Icon } from "@iconify/react/dist/iconify.js";

const UserProfile = () => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <div>
          <div>John Doe</div>
          <div className="text-xs">ID:23456</div>
        </div>
        <Icon icon="material-icon-theme:pug" className="size-12" />
      </div>
    </div>
  );
};

export default UserProfile;
