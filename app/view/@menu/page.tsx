import Image from "@/app/component/molecules/image";
import Icon from "@/public/icons/akara-logo.svg";

export default function Page() {
  return (
    <div className="container py-5">
      <MenuIconSection src={Icon} label="Akara Podcast" />
      <hr className="my-8"></hr>
      <div className="flex flex-col space-y-3 *:pl-8 items-start">
        <button>Discover</button>
        <button>Trending</button>
        <button>Fovorite</button>
        <button>Playlist</button>
      </div>
    </div>
  );
}

interface Props {
  src: string;
  label: string;
}

const MenuIconSection: React.FunctionComponent<Props> = ({
  src: icon,
  label,
}) => (
  <div className="flex space-x-4 items-center pt-4">
    <Image
      className="drop-shadow-sm rounded-sm"
      width={50}
      height={50}
      alt="akara.icon"
      src={icon}
      ignoreBlur
      priority
      fill={false}
    />
    <span className="text-xl font-semibold">{label}</span>
  </div>
);
